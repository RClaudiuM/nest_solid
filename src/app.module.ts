import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [UserModule, EmailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
