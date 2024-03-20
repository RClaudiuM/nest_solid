import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { StorageFetcherService } from './storageFetcher.service';
import { StorageS3FetcherService } from './services/storageS3Fetcher.service';

@Module({
  controllers: [StorageController],
  providers: [
    StorageService,
    { provide: StorageFetcherService, useClass: StorageS3FetcherService },
  ],
})
export class StorageModule {}
