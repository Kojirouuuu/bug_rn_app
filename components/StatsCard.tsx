import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  color: string;
  style?: ViewStyle;
}

export default function StatsCard({ 
  icon, 
  title, 
  value, 
  color, 
  style 
}: StatsCardProps) {
  return (
    <View style={[styles.container, { backgroundColor: color }, style]}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.content}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E2E2E',
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
});