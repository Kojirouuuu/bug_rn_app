import * as SQLite from 'expo-sqlite';

const DB_NAME = 'bugbook.db';

let db: SQLite.SQLiteDatabase;

export const initializeDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync(DB_NAME);
    
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;
      
      CREATE TABLE IF NOT EXISTS insects (
        id TEXT PRIMARY KEY,
        imageUri TEXT NOT NULL,
        speciesName TEXT NOT NULL,
        commonName TEXT,
        family TEXT,
        location TEXT,
        latitude REAL,
        longitude REAL,
        date TEXT NOT NULL,
        weather TEXT,
        notes TEXT,
        tags TEXT,
        exifData TEXT,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
      
      CREATE INDEX IF NOT EXISTS idx_insects_species ON insects(speciesName);
      CREATE INDEX IF NOT EXISTS idx_insects_location ON insects(location);
      CREATE INDEX IF NOT EXISTS idx_insects_date ON insects(date);
      CREATE INDEX IF NOT EXISTS idx_insects_created ON insects(createdAt);
    `);
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

export const getDatabase = () => {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase first.');
  }
  return db;
};

// Database operations
export const insertInsect = async (insect: any) => {
  const database = getDatabase();
  
  const result = await database.runAsync(
    `INSERT INTO insects (
      id, imageUri, speciesName, commonName, family, location, 
      latitude, longitude, date, weather, notes, tags, exifData, 
      createdAt, updatedAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      insect.id,
      insect.imageUri,
      insect.speciesName,
      insect.commonName || null,
      insect.family || null,
      insect.location || null,
      insect.coordinates?.latitude || null,
      insect.coordinates?.longitude || null,
      insect.date,
      insect.weather || null,
      insect.notes || null,
      insect.tags ? JSON.stringify(insect.tags) : null,
      insect.exifData ? JSON.stringify(insect.exifData) : null,
      insect.createdAt,
      insect.updatedAt,
    ]
  );
  
  return result;
};

export const getAllInsects = async () => {
  const database = getDatabase();
  
  const rows = await database.getAllAsync(`
    SELECT * FROM insects 
    ORDER BY createdAt DESC
  `);
  
  return rows.map(row => ({
    ...row,
    tags: row.tags ? JSON.parse(row.tags) : null,
    exifData: row.exifData ? JSON.parse(row.exifData) : null,
    coordinates: row.latitude && row.longitude ? {
      latitude: row.latitude,
      longitude: row.longitude
    } : null,
  }));
};

export const updateInsect = async (id: string, updates: any) => {
  const database = getDatabase();
  
  const setClause = Object.keys(updates)
    .map(key => `${key} = ?`)
    .join(', ');
  
  const values = [...Object.values(updates), id];
  
  const result = await database.runAsync(
    `UPDATE insects SET ${setClause}, updatedAt = ? WHERE id = ?`,
    [...values.slice(0, -1), new Date().toISOString(), id]
  );
  
  return result;
};

export const deleteInsect = async (id: string) => {
  const database = getDatabase();
  
  const result = await database.runAsync(
    'DELETE FROM insects WHERE id = ?',
    [id]
  );
  
  return result;
};

export const searchInsects = async (query: string) => {
  const database = getDatabase();
  
  const rows = await database.getAllAsync(`
    SELECT * FROM insects 
    WHERE speciesName LIKE ? OR commonName LIKE ? OR location LIKE ? OR notes LIKE ?
    ORDER BY createdAt DESC
  `, [`%${query}%`, `%${query}%`, `%${query}%`, `%${query}%`]);
  
  return rows.map(row => ({
    ...row,
    tags: row.tags ? JSON.parse(row.tags) : null,
    exifData: row.exifData ? JSON.parse(row.exifData) : null,
    coordinates: row.latitude && row.longitude ? {
      latitude: row.latitude,
      longitude: row.longitude
    } : null,
  }));
};