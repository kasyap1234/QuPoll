import { Injectable } from '@nestjs/common';
import {Poll} from "./polling.model";

@Injectable()
export class PollingService {
    private polls: Poll[] =[];
    getAllPolls(): Poll[]{
        return this.polls; 
    } 
    createPoll(poll: Poll): void{
        this.polls.push(poll); 
    }

}
