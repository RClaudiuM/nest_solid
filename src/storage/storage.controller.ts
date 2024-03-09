import {
  Controller,
  Post,
  UploadedFile,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('upload')
  async uploadFile(@UploadedFile() file: File): Promise<any> {
    try {
      const fileUrl = await this.storageService.uploadFile(file);
      return { success: true, message: 'File uploaded successfully', fileUrl };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to upload file',
        error: error.message,
      };
    }
  }

  @Delete('delete/:fileUrl')
  async deleteFile(@Param('fileUrl') fileUrl: string): Promise<any> {
    try {
      await this.storageService.deleteFile(fileUrl);
      return { success: true, message: 'File deleted successfully' };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to delete file',
        error: error.message,
      };
    }
  }

  @Get('url/:fileName')
  getFileUrl(@Param('fileName') fileName: string): any {
    try {
      const fileUrl = this.storageService.getFileUrl(fileName);
      return { success: true, fileUrl };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve file URL',
        error: error.message,
      };
    }
  }
}
