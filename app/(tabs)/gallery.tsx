import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Search, Filter, Grid, List } from 'lucide-react-native';
import { useInsectStore, InsectEntry } from '@/store/insectStore';
import InsectCard from '@/components/InsectCard';
import CreateEntryModal from '@/components/CreateEntryModal';

const { width } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - 60) / 2;

export default function GalleryScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { insects, filteredInsects, setSearchQuery, setFilterOptions } =
    useInsectStore();

  const [searchText, setSearchText] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPhotoData, setNewPhotoData] = useState(null);

  useEffect(() => {
    // Handle new photo from camera
    if (params.newPhoto) {
      try {
        const photoData = JSON.parse(params.newPhoto as string);
        setNewPhotoData(photoData);
        setShowCreateModal(true);
      } catch (error) {
        console.error('Error parsing photo data:', error);
      }
    }
  }, [params.newPhoto]);

  const handleSearch = (text: string) => {
    setSearchText(text);
    setSearchQuery(text);
  };

  const toggleViewMode = () => {
    setViewMode((current) => (current === 'grid' ? 'list' : 'grid'));
  };

  const renderInsectCard = ({
    item,
    index,
  }: {
    item: InsectEntry;
    index: number;
  }) => (
    <InsectCard
      insect={item}
      style={{
        ...(viewMode === 'grid' ? styles.gridCard : styles.listCard),
        ...(viewMode === 'grid' && index % 2 === 1 ? styles.rightCard : {}),
      }}
      viewMode={viewMode}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Search size={48} color="#CCCCCC" />
      <Text style={styles.emptyTitle}>
        {searchText ? 'No Results Found' : 'No Insects Yet'}
      </Text>
      <Text style={styles.emptyText}>
        {searchText
          ? `No insects match "${searchText}"`
          : 'Start building your collection by photographing insects'}
      </Text>
      {!searchText && (
        <TouchableOpacity
          style={styles.emptyButton}
          onPress={() => router.push('/camera')}
        >
          <Text style={styles.emptyButtonText}>Take First Photo</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Collection</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.viewModeButton}
            onPress={toggleViewMode}
          >
            {viewMode === 'grid' ? (
              <List size={24} color="#2E7D32" />
            ) : (
              <Grid size={24} color="#2E7D32" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Search and Filter */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#757575" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by species, location..."
            value={searchText}
            onChangeText={handleSearch}
            placeholderTextColor="#757575"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#2E7D32" />
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          {filteredInsects.length}{' '}
          {filteredInsects.length === 1 ? 'entry' : 'entries'}
        </Text>
      </View>

      {/* Insect List */}
      <FlatList
        data={filteredInsects}
        renderItem={renderInsectCard}
        keyExtractor={(item) => item.id}
        numColumns={viewMode === 'grid' ? 2 : 1}
        key={viewMode} // Force re-render when view mode changes
        contentContainerStyle={[
          styles.listContainer,
          filteredInsects.length === 0 && styles.emptyListContainer,
        ]}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
      />

      {/* Create Entry Modal */}
      <CreateEntryModal
        visible={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
          setNewPhotoData(null);
        }}
        photoData={newPhotoData}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E2E2E',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  viewModeButton: {
    backgroundColor: '#FFFFFF',
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2E2E2E',
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  statsText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  emptyListContainer: {
    flex: 1,
  },
  gridCard: {
    width: CARD_WIDTH,
    marginBottom: CARD_MARGIN * 2,
  },
  listCard: {
    width: '100%',
    marginBottom: CARD_MARGIN * 2,
  },
  rightCard: {
    marginLeft: CARD_MARGIN * 2,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E2E2E',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  emptyButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  emptyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
