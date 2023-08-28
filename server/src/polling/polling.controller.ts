/**
 * Controller for handling polling related requests.
 */
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
  /**
   * Creates an instance of PollingController.
   * @param {PollingService} pollingService - The polling service instance.
   * @param {UserService} userService - The user service instance.
   * @memberof PollingController
   */
  constructor(
    private readonly pollingService: PollingService,
    private readonly userService: UserService,
  ) {}

  /**
   * Returns all the polls.
   *
   * @returns {Promise<Poll[]>} - A promise that resolves to an array of polls.
   * @memberof PollingController
   */
  @Get()
  getAllPolls(): Promise<Poll[]> {
    return this.pollingService.getAllPolls();
  }

  /**
   * Creates a new poll.
   *
   * @param {Poll} poll - The poll object to be created.
   * @memberof PollingController
   */
  @Post()
  createPoll(@Body() poll: Poll) {
    this.pollingService.createPoll(poll);
  }

  /**
   * Returns the poll with the specified id.
   *
   * @param {number} id - The id of the poll to be retrieved.
   * @returns {Promise<Poll>} - A promise that resolves to the poll object.
   * @memberof PollingController
   */
  @Get(':id')
  getPollById(@Param('id', ParseIntPipe) id: number): Promise<Poll> {
    return this.pollingService.getPollById(id);
  }

  /**
   * Casts a vote in the poll with the specified id.
   *
   * @param {number} pollId - The id of the poll in which the vote is to be cast.
   * @param {number} optionIndex - The index of the option in the poll for which the vote is to be cast.
   * @param {number} userId - The id of the user casting the vote.
   * @memberof PollingController
   */
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
