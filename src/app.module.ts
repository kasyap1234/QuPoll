import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PollingModule } from './polling/polling.module';
import { UserModule } from './auth/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PollingModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
