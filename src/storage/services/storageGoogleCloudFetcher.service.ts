import { Injectable } from '@nestjs/common';
import { StorageFetcherService } from '../storageFetcher.service';

@Injectable()
export class StorageGoogleCloudFetcher implements StorageFetcherService {
  public async fetchFile(filename: string) {
    // This is a placeholder for a real Google Cloud file fetcher
    return `Google Cloud file ${filename} fetched`;
  }
}
