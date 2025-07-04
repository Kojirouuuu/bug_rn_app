import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchAllInsects,
  fetchRecentInsects,
  fetchInsectStats,
} from '@/lib/api';

export interface InsectEntry {
  id: string;
  imageUri: string;
  speciesName: string;
  commonName?: string;
  family?: string;
  location?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  date: string;
  weather?: string;
  notes?: string;
  tags?: string[];
  exifData?: any;
  createdAt: string;
  updatedAt: string;
}

export interface InsectStats {
  totalEntries: number;
  totalSpecies: number;
  uniqueLocations: number;
  thisMonth: number;
}

interface InsectStore {
  insects: InsectEntry[];
  filteredInsects: InsectEntry[];
  searchQuery: string;
  filterOptions: {
    family?: string;
    location?: string;
    dateRange?: {
      start: string;
      end: string;
    };
  };
  isLoading: boolean;

  // Actions
  addInsect: (
    insect: Omit<InsectEntry, 'id' | 'createdAt' | 'updatedAt'>
  ) => void;
  updateInsect: (id: string, updates: Partial<InsectEntry>) => void;
  deleteInsect: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setFilterOptions: (options: Partial<InsectStore['filterOptions']>) => void;

  // GraphQL Actions
  fetchInsectsFromAPI: () => Promise<void>;
  fetchRecentInsectsFromAPI: (limit?: number) => Promise<InsectEntry[]>;
  fetchStatsFromAPI: () => Promise<InsectStats>;

  // Selectors
  getInsectById: (id: string) => InsectEntry | undefined;
  getRecentInsects: (limit?: number) => InsectEntry[];
  getInsectStats: () => InsectStats;
  getTopLocations: (limit?: number) => Array<{ name: string; count: number }>;
  getMonthlyStats: () => { currentMonth: number; lastMonth: number };
}

const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2);

const filterInsects = (
  insects: InsectEntry[],
  searchQuery: string,
  filterOptions: InsectStore['filterOptions']
): InsectEntry[] => {
  let filtered = [...insects];

  // Search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (insect) =>
        insect.speciesName.toLowerCase().includes(query) ||
        insect.commonName?.toLowerCase().includes(query) ||
        insect.location?.toLowerCase().includes(query) ||
        insect.notes?.toLowerCase().includes(query)
    );
  }

  // Family filter
  if (filterOptions.family) {
    filtered = filtered.filter(
      (insect) => insect.family === filterOptions.family
    );
  }

  // Location filter
  if (filterOptions.location) {
    filtered = filtered.filter(
      (insect) => insect.location === filterOptions.location
    );
  }

  // Date range filter
  if (filterOptions.dateRange) {
    filtered = filtered.filter((insect) => {
      const insectDate = new Date(insect.date);
      const startDate = new Date(filterOptions.dateRange!.start);
      const endDate = new Date(filterOptions.dateRange!.end);
      return insectDate >= startDate && insectDate <= endDate;
    });
  }

  return filtered.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};

// ダミーデータ
const dummyInsects: InsectEntry[] = [
  {
    id: '1',
    imageUri:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    speciesName: 'Papilio machaon',
    commonName: 'Swallowtail Butterfly',
    family: 'Papilionidae',
    location: 'Yoyogi Park, Tokyo',
    coordinates: {
      latitude: 35.6762,
      longitude: 139.6503,
    },
    date: '2024-01-15',
    weather: 'Sunny',
    notes: 'Beautiful specimen found near the pond area',
    tags: ['butterfly', 'spring', 'park'],
    exifData: {},
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    imageUri:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    speciesName: 'Coccinella septempunctata',
    commonName: 'Seven-spot Ladybird',
    family: 'Coccinellidae',
    location: 'Shinjuku Gyoen, Tokyo',
    coordinates: {
      latitude: 35.6852,
      longitude: 139.7104,
    },
    date: '2024-01-20',
    weather: 'Partly cloudy',
    notes: 'Found on a rose bush',
    tags: ['ladybug', 'garden', 'beneficial'],
    exifData: {},
    createdAt: '2024-01-20T14:15:00Z',
    updatedAt: '2024-01-20T14:15:00Z',
  },
  {
    id: '3',
    imageUri:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    speciesName: 'Apis mellifera',
    commonName: 'Honey Bee',
    family: 'Apidae',
    location: 'Ueno Park, Tokyo',
    coordinates: {
      latitude: 35.7148,
      longitude: 139.7711,
    },
    date: '2024-01-25',
    weather: 'Sunny',
    notes: 'Busy collecting pollen from cherry blossoms',
    tags: ['bee', 'pollinator', 'cherry blossoms'],
    exifData: {},
    createdAt: '2024-01-25T11:45:00Z',
    updatedAt: '2024-01-25T11:45:00Z',
  },
  {
    id: '4',
    imageUri:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    speciesName: 'Danaus plexippus',
    commonName: 'Monarch Butterfly',
    family: 'Nymphalidae',
    location: 'Hamarikyu Gardens, Tokyo',
    coordinates: {
      latitude: 35.6636,
      longitude: 139.7639,
    },
    date: '2024-01-30',
    weather: 'Clear',
    notes: 'Rare sighting in urban Tokyo',
    tags: ['monarch', 'migration', 'rare'],
    exifData: {},
    createdAt: '2024-01-30T09:20:00Z',
    updatedAt: '2024-01-30T09:20:00Z',
  },
  {
    id: '5',
    imageUri:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    speciesName: 'Mantis religiosa',
    commonName: 'European Mantis',
    family: 'Mantidae',
    location: 'Rikugien Garden, Tokyo',
    coordinates: {
      latitude: 35.7325,
      longitude: 139.7464,
    },
    date: '2024-02-05',
    weather: 'Overcast',
    notes: 'Camouflaged perfectly on a green leaf',
    tags: ['mantis', 'camouflage', 'predator'],
    exifData: {},
    createdAt: '2024-02-05T16:30:00Z',
    updatedAt: '2024-02-05T16:30:00Z',
  },
];

export const useInsectStore = create<InsectStore>()(
  persist(
    (set, get) => ({
      insects: dummyInsects,
      filteredInsects: dummyInsects,
      searchQuery: '',
      filterOptions: {},
      isLoading: false,

      addInsect: (insectData) => {
        const now = new Date().toISOString();
        const newInsect: InsectEntry = {
          ...insectData,
          id: generateId(),
          createdAt: now,
          updatedAt: now,
        };

        set((state) => {
          const insects = [...state.insects, newInsect];
          return {
            insects,
            filteredInsects: filterInsects(
              insects,
              state.searchQuery,
              state.filterOptions
            ),
          };
        });
      },

      updateInsect: (id, updates) => {
        set((state) => {
          const insects = state.insects.map((insect) =>
            insect.id === id
              ? { ...insect, ...updates, updatedAt: new Date().toISOString() }
              : insect
          );
          return {
            insects,
            filteredInsects: filterInsects(
              insects,
              state.searchQuery,
              state.filterOptions
            ),
          };
        });
      },

      deleteInsect: (id) => {
        set((state) => {
          const insects = state.insects.filter((insect) => insect.id !== id);
          return {
            insects,
            filteredInsects: filterInsects(
              insects,
              state.searchQuery,
              state.filterOptions
            ),
          };
        });
      },

      setSearchQuery: (query) => {
        set((state) => ({
          searchQuery: query,
          filteredInsects: filterInsects(
            state.insects,
            query,
            state.filterOptions
          ),
        }));
      },

      setFilterOptions: (options) => {
        set((state) => {
          const filterOptions = { ...state.filterOptions, ...options };
          return {
            filterOptions,
            filteredInsects: filterInsects(
              state.insects,
              state.searchQuery,
              filterOptions
            ),
          };
        });
      },

      getInsectById: (id) => {
        return get().insects.find((insect) => insect.id === id);
      },

      getRecentInsects: (limit = 10) => {
        return get()
          .insects.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, limit);
      },

      getInsectStats: (): InsectStats => {
        const insects = get().insects;
        const now = new Date();
        const thisMonth = insects.filter((insect) => {
          const insectDate = new Date(insect.createdAt);
          return (
            insectDate.getMonth() === now.getMonth() &&
            insectDate.getFullYear() === now.getFullYear()
          );
        }).length;

        const uniqueSpecies = new Set(
          insects.map((insect) => insect.speciesName)
        ).size;
        const uniqueLocations = new Set(
          insects
            .filter((insect) => insect.location)
            .map((insect) => insect.location)
        ).size;

        return {
          totalEntries: insects.length,
          totalSpecies: uniqueSpecies,
          uniqueLocations,
          thisMonth,
        };
      },

      getTopLocations: (limit = 5) => {
        const insects = get().insects;
        const locationCounts = insects
          .filter((insect) => insect.location)
          .reduce((acc, insect) => {
            acc[insect.location!] = (acc[insect.location!] || 0) + 1;
            return acc;
          }, {} as Record<string, number>);

        return Object.entries(locationCounts)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, limit);
      },

      getMonthlyStats: () => {
        const insects = get().insects;
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const thisMonth = insects.filter((insect) => {
          const insectDate = new Date(insect.createdAt);
          return (
            insectDate.getMonth() === currentMonth &&
            insectDate.getFullYear() === currentYear
          );
        }).length;

        const lastMonth = insects.filter((insect) => {
          const insectDate = new Date(insect.createdAt);
          const lastMonthDate = new Date(currentYear, currentMonth - 1);
          return (
            insectDate.getMonth() === lastMonthDate.getMonth() &&
            insectDate.getFullYear() === lastMonthDate.getFullYear()
          );
        }).length;

        return { currentMonth: thisMonth, lastMonth };
      },

      // GraphQL Actions
      fetchInsectsFromAPI: async () => {
        set({ isLoading: true });
        try {
          const insects = await fetchAllInsects();
          set((state) => ({
            insects,
            filteredInsects: filterInsects(
              insects,
              state.searchQuery,
              state.filterOptions
            ),
            isLoading: false,
          }));
        } catch (error) {
          console.error('Error fetching insects from API:', error);
          set({ isLoading: false });
          throw error;
        }
      },

      fetchRecentInsectsFromAPI: async (limit = 5) => {
        try {
          const insects = await fetchRecentInsects(limit);
          return insects;
        } catch (error) {
          console.error('Error fetching recent insects from API:', error);
          throw error;
        }
      },

      fetchStatsFromAPI: async () => {
        try {
          const stats = await fetchInsectStats();
          return stats;
        } catch (error) {
          console.error('Error fetching stats from API:', error);
          throw error;
        }
      },
    }),
    {
      name: 'insect-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        insects: state.insects,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Recompute filtered insects on rehydration
          state.filteredInsects = filterInsects(
            state.insects,
            state.searchQuery,
            state.filterOptions
          );
        }
      },
    }
  )
);
