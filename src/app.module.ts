import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PollingModule } from './polling/polling.module';
import { UserModule } from './auth/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dadou:1234@cluster0.yp7n1ob.mongodb.net/'),PollingModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
