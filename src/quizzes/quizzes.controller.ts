import { Controller,Get,Post,Body } from '@nestjs/common';
import {Quiz} from "./quizzes.model";
import {QuizzesService} from "./quizzes.service";

@Controller('quizzes')
export class QuizzesController {
    constructor(private readonly quizzesService: QuizzesService)
  @Get()
  getAllQuizzes(): Quiz[]{
    return this.quizzesService.getAllQuizzes(); 
  }
  @Post()
  createQuiz(@Body() quiz: Quiz){
    this.quizzesService.createQuiz(quiz);

  }    

}
