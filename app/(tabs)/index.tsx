import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Plus,
  Search,
  Filter,
  TrendingUp,
  Camera,
  Image,
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useInsectStore } from '@/store/insectStore';
import InsectCard from '@/components/InsectCard';
import StatsCard from '@/components/StatsCard';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const {
    insects,
    getRecentInsects,
    getInsectStats,
    fetchInsectsFromAPI,
    fetchRecentInsectsFromAPI,
    fetchStatsFromAPI,
    isLoading,
  } = useInsectStore();
  const [searchQuery, setSearchQuery] = useState('');

  // コンポーネントがマウントされたときにGraphQLからデータを取得
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchInsectsFromAPI();
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, [fetchInsectsFromAPI]);

  const recentInsects = getRecentInsects(5);
  const stats = getInsectStats();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#E8F5E8', '#F1F8E9']} style={styles.gradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good morning</Text>
              <Text style={styles.title}>Bug Explorer</Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push('/camera')}
            >
              <Plus size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Stats Cards */}
          <View style={styles.statsContainer}>
            <StatsCard
              icon={<TrendingUp size={20} color="#2E7D32" />}
              title="Species Found"
              value={stats.totalSpecies}
              color="#E8F5E8"
            />
            <StatsCard
              icon={<Search size={20} color="#1976D2" />}
              title="Total Entries"
              value={stats.totalEntries}
              color="#E3F2FD"
            />
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Search size={20} color="#757575" />
              <Text style={styles.searchPlaceholder}>
                Search your discoveries...
              </Text>
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Filter size={20} color="#2E7D32" />
            </TouchableOpacity>
          </View>

          {/* Recent Discoveries */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Discoveries</Text>
              <TouchableOpacity onPress={() => router.push('/gallery')}>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>

            {isLoading ? (
              <View style={styles.loadingState}>
                <Text style={styles.loadingText}>Loading...</Text>
              </View>
            ) : recentInsects.length > 0 ? (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScroll}
              >
                {recentInsects.map((insect) => (
                  <InsectCard
                    key={insect.id}
                    insect={insect}
                    style={styles.horizontalCard}
                  />
                ))}
              </ScrollView>
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyTitle}>Start Your Collection</Text>
                <Text style={styles.emptyText}>
                  Tap the camera to photograph your first insect
                </Text>
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={() => router.push('/camera')}
                >
                  <Text style={styles.startButtonText}>Get Started</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.quickActions}>
              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => router.push('/camera')}
              >
                <Camera size={24} color="#2E7D32" />
                <Text style={styles.actionText}>New Entry</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionCard}
                onPress={() => router.push('/gallery')}
              >
                <Image size={24} color="#1976D2" />
                <Text style={styles.actionText}>Browse Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E8',
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E7D32',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#2E7D32',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 30,
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
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#757575',
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
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  seeAll: {
    fontSize: 16,
    color: '#2E7D32',
    fontWeight: '600',
  },
  horizontalScroll: {
    paddingRight: 20,
  },
  horizontalCard: {
    width: width * 0.75,
    marginRight: 16,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2E2E2E',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  startButton: {
    backgroundColor: '#2E7D32',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  loadingState: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  loadingText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});
