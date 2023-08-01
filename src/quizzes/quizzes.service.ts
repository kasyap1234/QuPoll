import { Injectable } from '@nestjs/common';
import {Quiz} from "./quizzes.model";
@Injectable()
export class QuizzesService {
    private quizzes: Quiz[]=[]; 
    getAllQuizzes(): Quiz[]{
        return this.quizzes; 

    }
    createQuiz(quiz: Quiz){
        this.quizzes.push(quiz); 
    }
    
}
