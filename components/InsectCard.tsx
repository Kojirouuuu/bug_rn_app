import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import { Calendar, MapPin, Tag } from 'lucide-react-native';
import { InsectEntry } from '@/store/insectStore';

interface InsectCardProps {
  insect: InsectEntry;
  style?: ViewStyle;
  viewMode?: 'grid' | 'list';
  onPress?: () => void;
}

export default function InsectCard({ 
  insect, 
  style, 
  viewMode = 'grid',
  onPress 
}: InsectCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isGridMode = viewMode === 'grid';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isGridMode ? styles.gridContainer : styles.listContainer,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[
        styles.imageContainer,
        isGridMode ? styles.gridImageContainer : styles.listImageContainer,
      ]}>
        <Image
          source={{ uri: insect.imageUri }}
          style={[
            styles.image,
            isGridMode ? styles.gridImage : styles.listImage,
          ]}
          resizeMode="cover"
        />
      </View>

      <View style={[
        styles.content,
        isGridMode ? styles.gridContent : styles.listContent,
      ]}>
        <Text style={[
          styles.speciesName,
          isGridMode ? styles.gridSpeciesName : styles.listSpeciesName,
        ]} numberOfLines={isGridMode ? 2 : 1}>
          {insect.speciesName}
        </Text>

        {insect.commonName && (
          <Text style={[
            styles.commonName,
            isGridMode ? styles.gridCommonName : styles.listCommonName,
          ]} numberOfLines={1}>
            {insect.commonName}
          </Text>
        )}

        <View style={[
          styles.metadata,
          isGridMode ? styles.gridMetadata : styles.listMetadata,
        ]}>
          <View style={styles.metadataItem}>
            <Calendar size={12} color="#666666" />
            <Text style={styles.metadataText}>
              {formatDate(insect.date)}
            </Text>
          </View>

          {insect.location && (
            <View style={styles.metadataItem}>
              <MapPin size={12} color="#666666" />
              <Text style={styles.metadataText} numberOfLines={1}>
                {insect.location}
              </Text>
            </View>
          )}
        </View>

        {insect.tags && insect.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {insect.tags.slice(0, isGridMode ? 2 : 3).map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Tag size={10} color="#2E7D32" />
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  gridContainer: {
    // Grid-specific styles handled by parent
  },
  listContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  gridImageContainer: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 12,
  },
  listImageContainer: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gridImage: {
    // Grid image styles
  },
  listImage: {
    // List image styles  
  },
  content: {
    // Content container
  },
  gridContent: {
    padding: 16,
    paddingTop: 0,
  },
  listContent: {
    flex: 1,
    justifyContent: 'center',
  },
  speciesName: {
    fontWeight: '600',
    color: '#2E2E2E',
    marginBottom: 4,
  },
  gridSpeciesName: {
    fontSize: 16,
  },
  listSpeciesName: {
    fontSize: 18,
  },
  commonName: {
    color: '#666666',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  gridCommonName: {
    fontSize: 14,
  },
  listCommonName: {
    fontSize: 16,
  },
  metadata: {
    gap: 8,
  },
  gridMetadata: {
    // Grid metadata styles
  },
  listMetadata: {
    marginTop: 4,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metadataText: {
    fontSize: 12,
    color: '#666666',
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  tagText: {
    fontSize: 10,
    color: '#2E7D32',
    fontWeight: '500',
  },
});