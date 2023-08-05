import { Module } from '@nestjs/common';
import { PollingService } from './polling.service';
import { PollingController } from './polling.controller';
import { UserService } from '../auth/user/user.service'; 

@Module({
  
  providers: [PollingService,UserService],
  controllers: [PollingController]
})
export class PollingModule {}
