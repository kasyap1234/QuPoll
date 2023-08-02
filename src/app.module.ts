import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { PollingModule } from './polling/polling.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [QuizzesModule, PollingModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
