import { Module } from '@nestjs/common';
import { PollingService } from './polling.service';
import { PollingController } from './polling.controller';

@Module({
  providers: [PollingService],
  controllers: [PollingController]
})
export class PollingModule {}
