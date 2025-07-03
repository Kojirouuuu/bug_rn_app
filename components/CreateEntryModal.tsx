import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { X, Save, MapPin, Calendar, Camera } from 'lucide-react-native';
import { useInsectStore } from '@/store/insectStore';

interface CreateEntryModalProps {
  visible: boolean;
  onClose: () => void;
  photoData?: any;
}

export default function CreateEntryModal({
  visible,
  onClose,
  photoData,
}: CreateEntryModalProps) {
  const { addInsect } = useInsectStore();
  
  const [formData, setFormData] = useState({
    speciesName: '',
    commonName: '',
    family: '',
    location: '',
    notes: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>('');

  useEffect(() => {
    if (visible && photoData) {
      getCurrentLocation();
      
      // Extract date from EXIF if available
      if (photoData.exif?.DateTime) {
        // Handle EXIF date
      }
    }
  }, [visible, photoData]);

  const getCurrentLocation = async () => {
    if (Platform.OS === 'web') {
      // Skip location on web
      return;
    }

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const [address] = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (address) {
        const locationStr = `${address.city}, ${address.region}`;
        setCurrentLocation(locationStr);
        setFormData(prev => ({
          ...prev,
          location: locationStr,
        }));
      }
    } catch (error) {
      console.log('Error getting location:', error);
    }
  };

  const handleSave = async () => {
    if (!formData.speciesName.trim()) {
      Alert.alert('Error', 'Please enter a species name');
      return;
    }

    if (!photoData) {
      Alert.alert('Error', 'No photo data available');
      return;
    }

    setIsLoading(true);

    try {
      const newEntry = {
        imageUri: photoData.uri,
        speciesName: formData.speciesName.trim(),
        commonName: formData.commonName.trim() || undefined,
        family: formData.family.trim() || undefined,
        location: formData.location.trim() || undefined,
        date: new Date().toISOString(),
        notes: formData.notes.trim() || undefined,
        exifData: photoData.exif || undefined,
        coordinates: photoData.location ? {
          latitude: photoData.location.latitude,
          longitude: photoData.location.longitude,
        } : undefined,
      };

      addInsect(newEntry);
      
      // Reset form
      setFormData({
        speciesName: '',
        commonName: '',
        family: '',
        location: '',
        notes: '',
      });
      
      onClose();
    } catch (error) {
      console.error('Error saving entry:', error);
      Alert.alert('Error', 'Failed to save entry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      speciesName: '',
      commonName: '',
      family: '',
      location: '',
      notes: '',
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClose}
          >
            <X size={24} color="#666666" />
          </TouchableOpacity>
          <Text style={styles.title}>New Entry</Text>
          <TouchableOpacity
            style={[styles.saveButton, isLoading && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={isLoading}
          >
            <Save size={20} color="#FFFFFF" />
            <Text style={styles.saveButtonText}>
              {isLoading ? 'Saving...' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Photo Preview */}
          {photoData && (
            <View style={styles.photoContainer}>
              <Image
                source={{ uri: photoData.uri }}
                style={styles.photo}
                resizeMode="cover"
              />
              <View style={styles.photoOverlay}>
                <Camera size={16} color="#FFFFFF" />
                <Text style={styles.photoText}>
                  {new Date().toLocaleDateString()}
                </Text>
              </View>
            </View>
          )}

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Species Name *</Text>
              <TextInput
                style={styles.input}
                value={formData.speciesName}
                onChangeText={(text) => setFormData(prev => ({ ...prev, speciesName: text }))}
                placeholder="e.g., Apis mellifera"
                placeholderTextColor="#999999"
                autoFocus
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Common Name</Text>
              <TextInput
                style={styles.input}
                value={formData.commonName}
                onChangeText={(text) => setFormData(prev => ({ ...prev, commonName: text }))}
                placeholder="e.g., Honey Bee"
                placeholderTextColor="#999999"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Family</Text>
              <TextInput
                style={styles.input}
                value={formData.family}
                onChangeText={(text) => setFormData(prev => ({ ...prev, family: text }))}
                placeholder="e.g., Apidae"
                placeholderTextColor="#999999"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Location</Text>
              <View style={styles.locationContainer}>
                <MapPin size={16} color="#666666" />
                <TextInput
                  style={styles.locationInput}
                  value={formData.location}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, location: text }))}
                  placeholder={currentLocation || "Enter location"}
                  placeholderTextColor="#999999"
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Notes</Text>
              <TextInput
                style={[styles.input, styles.notesInput]}
                value={formData.notes}
                onChangeText={(text) => setFormData(prev => ({ ...prev, notes: text }))}
                placeholder="Behavior, weather conditions, habitat details..."
                placeholderTextColor="#999999"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  closeButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E7D32',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  photoContainer: {
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
    aspectRatio: 4/3,
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  photoOverlay: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  photoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  form: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E2E2E',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    color: '#2E2E2E',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 12,
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    color: '#2E2E2E',
  },
  notesInput: {
    height: 100,
    paddingTop: 12,
  },
});