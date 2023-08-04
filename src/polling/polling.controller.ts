import { Controller, Get, Param, Body, Post, ParseIntPipe,HttpStatus, HttpException } from '@nestjs/common';
import { Poll } from "./polling.model";
import { PollingService } from "./polling.service";

@Controller('polling')
export class PollingController {
  constructor(private readonly pollingService: PollingService) { } // Add the closing curly brace here.

  @Get()
  getAllPolls(): Poll[] {
    return this.pollingService.getAllPolls();
  }

  @Post()
  createPoll(@Body() poll: Poll) {
    this.pollingService.createPoll(poll);
  }
  @Get(":id")
  getPollById(@Param('id',ParseIntPipe) id: number): Poll {
    return this.pollingService.getPollById(id);
  }
  @Post(':id/vote/:optionIndex')
  voteInPoll(
    @Param('id') pollId: number, 
    @Param('optionIndex') optionIndex: number, 
    @Body('userId') userId: number,
  ): void {
    if(userId === undefined){
      throw new HttpException('User Id is required to vote',HttpStatus.BAD_REQUEST); 
    }
    this.pollingService.voteInPoll(userId,pollId,optionIndex); 

  }

}
