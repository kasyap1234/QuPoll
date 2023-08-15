import { Module } from '@nestjs/common';
import { PollingService } from './polling.service';
import { PollingController } from './polling.controller';
import { UserService } from '../auth/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Poll } from './schema/polling.schema';
import { PollSchema } from './schema/polling.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Poll.name, schema: PollSchema }]),
    PollingModule,
  ],
  providers: [PollingService, UserService],
  controllers: [PollingController],
})
export class PollingModule {}
