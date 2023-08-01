import { Controller, Get, Body, Post } from '@nestjs/common';
import { Poll } from "./polling.model";
import { PollingService } from "./polling.service";

@Controller('polling')
export class PollingController {
  constructor(private readonly pollingService: PollingService) {} // Add the closing curly brace here.

  @Get()
  getAllPolls(): Poll[] {
    return this.pollingService.getAllPolls();
  }

  @Post()
  createPoll(@Body() poll: Poll) {
    this.pollingService.createPoll(poll);
  }
}
