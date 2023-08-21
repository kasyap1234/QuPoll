import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  ParseIntPipe,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Poll } from './schema/polling.schema';
import { PollingService } from './polling.service';
import { UserService } from '../auth/user/user.service';
@Controller('polling')
export class PollingController {
  constructor(
    private readonly pollingService: PollingService,
    private readonly userService: UserService,
  ) {}
  @Get()
  getAllPolls(): Promise<Poll[]> {
    return this.pollingService.getAllPolls();
  }

  @Post()
  createPoll(@Body() poll: Poll) {
    this.pollingService.createPoll(poll);
  }
  @Get(':id')
  getPollById(@Param('id', ParseIntPipe) id: number): Promise<Poll> {
    return this.pollingService.getPollById(id);
  }
  @Post(':id/vote/:optionIndex')
  voteInPoll(
    @Param('id') pollId: number,
    @Param('optionIndex') optionIndex: number,
    @Body('userId') userId: number,
  ): void {
    if (userId === undefined) {
      throw new HttpException(
        'User Id is required to vote',
        HttpStatus.BAD_REQUEST,
      );
    }
    this.pollingService.voteInPoll(userId, pollId, optionIndex);
  }
}
