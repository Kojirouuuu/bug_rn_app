import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  User, 
  Settings, 
  Share2, 
  Award, 
  Calendar,
  MapPin,
  Bookmark,
  Download,
  HelpCircle
} from 'lucide-react-native';
import { useInsectStore } from '@/store/insectStore';
import StatsCard from '@/components/StatsCard';

export default function ProfileScreen() {
  const { getInsectStats, getTopLocations, getMonthlyStats } = useInsectStore();
  
  const stats = getInsectStats();
  const topLocations = getTopLocations(3);
  const monthlyStats = getMonthlyStats();

  const menuItems = [
    { icon: Settings, title: 'Settings', subtitle: 'App preferences' },
    { icon: Share2, title: 'Share Collection', subtitle: 'Export your data' },
    { icon: Download, title: 'Backup Data', subtitle: 'Save to cloud' },
    { icon: HelpCircle, title: 'Help & Support', subtitle: 'Get assistance' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <LinearGradient
          colors={['#2E7D32', '#388E3C']}
          style={styles.profileHeader}
        >
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <User size={32} color="#FFFFFF" />
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Bug Explorer</Text>
              <Text style={styles.profileSubtitle}>
                Nature enthusiast since 2024
              </Text>
            </View>
          </View>
          
          <View style={styles.achievementBadge}>
            <Award size={20} color="#FFD700" />
            <Text style={styles.badgeText}>Collector</Text>
          </View>
        </LinearGradient>

        {/* Stats Overview */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Collection Stats</Text>
          <View style={styles.statsGrid}>
            <StatsCard
              icon={<Award size={20} color="#2E7D32" />}
              title="Species"
              value={stats.totalSpecies}
              color="#E8F5E8"
            />
            <StatsCard
              icon={<Calendar size={20} color="#1976D2" />}
              title="This Month"
              value={monthlyStats.currentMonth}
              color="#E3F2FD"
            />
          </View>
          <View style={styles.statsGrid}>
            <StatsCard
              icon={<MapPin size={20} color="#F57C00" />}
              title="Locations"
              value={topLocations.length}
              color="#FFF3E0"
            />
            <StatsCard
              icon={<Bookmark size={20} color="#7B1FA2" />}
              title="Total Entries"
              value={stats.totalEntries}
              color="#F3E5F5"
            />
          </View>
        </View>

        {/* Top Locations */}
        {topLocations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Locations</Text>
            {topLocations.map((location, index) => (
              <View key={index} style={styles.locationItem}>
                <MapPin size={16} color="#666666" />
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationCount}>{location.count}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <item.icon size={20} color="#666666" />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>BugBook v1.0.0</Text>
          <Text style={styles.appDescription}>
            Your personal insect field guide
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  profileHeader: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  achievementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  statsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2E2E2E',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 8,
    gap: 12,
  },
  locationName: {
    flex: 1,
    fontSize: 16,
    color: '#2E2E2E',
  },
  locationCount: {
    fontSize: 14,
    color: '#666666',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 32,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E2E2E',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  appVersion: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  appDescription: {
    fontSize: 12,
    color: '#999999',
  },
});