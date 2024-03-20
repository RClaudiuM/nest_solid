import { Controller, Get, Param } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageFetcherService } from './storageFetcher.service';

@Controller('storage')
export class StorageController {
  constructor(
    private readonly storageService: StorageService,
    private readonly storageFetcherService: StorageFetcherService,
  ) {}

  // bad example
  @Get('/bad/file:filename')
  public badGetFile(@Param('filename') filename: string) {
    return this.storageService.fetchS3File(filename);
  }

  // good example
  @Get('/good/file/:filename')
  public goodGetFile(@Param('filename') filename: string) {
    return this.storageFetcherService.fetchFile(filename);
  }
}
