import { Injectable } from '@nestjs/common';
import { StorageService } from '../storage.service';

@Injectable()
export class LocalStorageService implements StorageService {
  async uploadFile(file: File): Promise<string> {
    // Upload file to local storage
    return file.name;
  }

  async deleteFile(fileUrl: string): Promise<string> {
    // Delete file from local storage
    return fileUrl;
  }

  getFileUrl(fileName: string): string {
    // Return URL for accessing file from local storage

    return fileName;
  }
}
