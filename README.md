# BugBook - My Insect Field Guide

A comprehensive React Native app built with Expo for documenting and cataloging insect discoveries. Create your personal field guide with photos, detailed observations, and location data.

## Features

### Core Functionality
- **Photo Capture & Import**: Take photos with the camera or import from gallery
- **Rich Entry Creation**: Document species name, common name, family, location, and detailed notes
- **Smart Gallery**: Grid and list view with search and filtering capabilities
- **Location Tracking**: Automatic location detection and reverse geocoding
- **Offline Support**: SQLite database for local storage with cloud sync capability
- **Beautiful UI**: Material 3 design with dark mode support

### Data Management
- **Local Storage**: SQLite database for offline functionality
- **Cloud Sync**: Zustand store with AsyncStorage persistence
- **Export Capabilities**: Share collections and backup data
- **Advanced Search**: Filter by species, location, date, and notes

### User Experience
- **Intuitive Navigation**: Tab-based interface with smooth transitions
- **Photo Management**: Image zoom, EXIF data viewing, and compression
- **Statistics Dashboard**: Track collection progress and discoveries
- **Responsive Design**: Optimized for mobile photography workflows

## Tech Stack

- **Framework**: React Native with Expo SDK 53
- **Navigation**: Expo Router with typed routes
- **State Management**: Zustand with persistence
- **Database**: SQLite with React Query for caching
- **Camera**: Expo Camera with image manipulation
- **Location**: Expo Location with reverse geocoding
- **UI Components**: Custom components with Lucide React Native icons
- **Storage**: AsyncStorage for persistence

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bugbook-insect-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Run on device/simulator**
   - iOS: Press `i` in the terminal or scan QR code with Camera app
   - Android: Press `a` in the terminal or scan QR code with Expo Go app
   - Web: Press `w` in the terminal or open browser to localhost

## Project Structure

```
bugbook-insect-guide/
├── app/                    # App router screens
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Home screen
│   │   ├── camera.tsx     # Camera screen
│   │   ├── gallery.tsx    # Gallery screen
│   │   └── profile.tsx    # Profile screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── InsectCard.tsx     # Insect display card
│   ├── StatsCard.tsx      # Statistics card
│   └── CreateEntryModal.tsx # Entry creation modal
├── store/                 # State management
│   └── insectStore.ts     # Zustand store
├── services/              # Database and API services
│   └── database.ts        # SQLite operations
└── hooks/                 # Custom hooks
    └── useFrameworkReady.ts # Framework initialization
```

## Development Guidelines

### Adding New Features

1. **New Screens**: Add to `app/(tabs)/` directory
2. **Components**: Create in `components/` with proper TypeScript types
3. **State Management**: Extend the Zustand store in `store/insectStore.ts`
4. **Database**: Add operations to `services/database.ts`

### Code Standards

- **TypeScript**: Strict mode enabled with proper typing
- **Styling**: StyleSheet.create for all styles
- **Navigation**: Use Expo Router for type-safe navigation
- **State**: Zustand for global state, useState for local state
- **Database**: SQLite for offline-first architecture

### Design Principles

- **Mobile-First**: Optimized for mobile photography workflows
- **Accessibility**: Proper contrast ratios and touch targets
- **Performance**: Lazy loading and image optimization
- **Offline Support**: Full functionality without internet connection

## Building for Production

### Web Build
```bash
npm run build:web
```

### Mobile Build
1. Configure app.json with proper bundle identifier
2. Use EAS Build for production builds:
   ```bash
   npx eas build --platform all
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Add API keys for future integrations
EXPO_PUBLIC_MAPBOX_API_KEY=your_mapbox_key
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_key
```

## Future Enhancements

### Planned Features
- **AI Species Identification**: Integration with Vision APIs for automatic species recognition
- **Social Sharing**: Share discoveries with the community
- **Cloud Backup**: Firebase integration for data synchronization
- **Advanced Analytics**: Detailed statistics and insights
- **Export Options**: PDF field guide generation
- **Offline Maps**: Cached map tiles for offline location tracking

### Technical Improvements
- **Push Notifications**: Reminders and updates
- **Background Sync**: Automatic cloud synchronization
- **Image Optimization**: Advanced compression and caching
- **AR Features**: Augmented reality insect identification
- **Machine Learning**: Local species identification models

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please open an issue on GitHub or contact the development team.

---

**BugBook** - Your personal insect field guide for the digital age 🐛📱# bug_rn_app
