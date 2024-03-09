export enum StorageType {
  LOCAL = 'local',
  CLOUD = 'cloud',
}

export const STORAGE_TYPE: StorageType =
  (process.env.STORAGE_TYPE as StorageType) || StorageType.LOCAL;
