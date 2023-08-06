import { Injectable, NotFoundException, UnauthorizedException, Inject } from '@nestjs/common';
import {Poll,PollDocument} from './schema/polling.schema'; 
import { UserService } from '../auth/user/user.service';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'; 

@Injectable()
export class PollingService {
    constructor(@InjectModel(Poll.name) private readonly pollModel: Model<PollDocument>,private readonly userService: UserService ){}  

    async getAllPolls():Promise<Poll[]> {
        return this.pollModel.find().exec(); 
    }

   async createPoll(poll: Poll):Promise<Poll>{
    const createdPoll=new this.pollModel(poll); 
    return createdPoll.save(); 
   }

   async getPollById(id: number): Promise<Poll>{
    const poll=await this.pollModel.findOne({id}).exec(); 
    if(!poll){
        throw new NotFoundException('Cound not find Poll with the given Id '); 
    }
    return poll; 

   }

    async voteInPoll(userId: number,pollId: number,optionIndex: number){
        const poll=await this.getPollById(pollId); 
        if(await this.userService.hasUserVoted(userId,pollId)){
            throw new UnauthorizedException('User has already voted'); 

        }
        if(optionIndex>=0 && optionIndex<poll.options.length){
            const optionKey=poll.options[optionIndex]; 
            poll.optionVotes.set(optionKey,(poll.optionVotes.get(optionKey)|| 0)+1); 
            await this.pollModel.updateOne({id: poll.id},{optionVote: poll.optionVotes }); 
            await this.userService.addVotedPoll(userId,pollId); 

            // option key is the option and 
        }
    }
}

