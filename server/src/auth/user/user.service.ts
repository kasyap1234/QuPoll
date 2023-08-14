import { Injectable,NotFoundException } from '@nestjs/common';
import { User } from './user.model';
@Injectable()
export class UserService {
    private users: User[]=[]; 
    getUserById(id: number): User {
        const user=this.users.find((user)=> user.id === id); 
        if(!user){
            throw new NotFoundException('Could not find user with id of ${id}');
        }
        return user; 

    }
    createUser(username: string): User{
        const id=this.users.length+1; 
        const user : User={id,username,votedPollIds:[]};
        this.users.push(user); 
        return user; 

    }
    addVotedPoll(userId: number,pollId: number): void {
       const user=this.getUserById(userId); 
       user.votedPollIds.push(pollId); 

    }
    hasUserVoted(userId: number,pollId: number): boolean {
        const user=this.getUserById(userId); 
        return user.votedPollIds.includes(pollId); 
    }
    
}
