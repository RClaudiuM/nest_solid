import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class StorageService {
  abstract uploadFile(file: File): Promise<string>;
  abstract deleteFile(fileUrl: string): Promise<string>;
  abstract getFileUrl(fileName: string): string;
}
