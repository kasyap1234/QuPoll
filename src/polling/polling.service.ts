import { Injectable, NotFoundException, UnauthorizedException, Inject } from '@nestjs/common';
import { Poll } from "./polling.model";
import { UserService } from '../auth/user/user.service';

@Injectable()
export class PollingService {
    private polls: Poll[] =[];

    constructor(@Inject(UserService) private readonly userService: UserService) {}

    getAllPolls(): Poll[]{
        return this.polls; 
    } 

    createPoll(poll: Poll): void {
        poll.optionVotes = new Map<number, number>();
        for (let i = 0; i < poll.options.length; i++) {
            poll.optionVotes.set(i, 0); // Initialize optionVotes map with 0s for each option
        }
        this.polls.push(poll);
    }



    getPollById(id: number): Poll {
        const poll = this.polls.find((poll) => poll.id === id);
        if (!poll) {
            throw new NotFoundException(`Could not find poll with id of ${id}`);
        }
        return poll;
    }

    voteInPoll(userId: number, pollId: number, optionIndex: number): void {
        const poll = this.getPollById(pollId);
        if (this.userService.hasUserVoted(userId, pollId)) {
            throw new UnauthorizedException('User has already voted in this poll');
        }
        if (optionIndex >= 0 && optionIndex < poll.options.length) {
            const currentVoteCount = poll.optionVotes.get(optionIndex) || 0;
            poll.optionVotes.set(optionIndex, currentVoteCount + 1);
            this.userService.addVotedPoll(userId, pollId);
        }
    }
}
