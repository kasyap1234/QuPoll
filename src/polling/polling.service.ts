import { Injectable,NotFoundException, UnauthorizedException } from '@nestjs/common';
import {Poll} from "./polling.model";

@Injectable()
export class PollingService {
    private polls: Poll[] =[];
    getAllPolls(): Poll[]{
        return this.polls; 
    } 
    createPoll(poll: Poll): void{
       poll.votes=new Array(poll.options.length).fill(0);
        this.polls.push(poll); 
    }
    getPollById(id: number): Poll{
        const poll=this.polls.find((poll) => poll.id === id);
        if(!poll){
            throw new NotFoundException('Could not find poll with id of ${id}');
        } 
        return poll; 
    }
    voteInPoll(userId: number,pollId: number,optionIndex: number): void{
        const poll=this.getPollById(pollId); 
        if(this.userService.hasUserVoted(userId,pollId)){
            throw new UnauthorizedException('User has already voted in this poll');
        }
        
    }

}
