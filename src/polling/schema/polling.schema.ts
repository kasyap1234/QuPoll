import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'; 
import {Document} from 'mongoose'; 
export type PollDocument=Poll & Document; 
@Schema()
export class Poll {
    id : number; 
    
    @Prop({required: true})
    question: string; 
    @Prop({type: [String]})
    options: string[]
    @Prop({type: Map,of: Number})
    optionVotes: Map<string,number>; 
}
export const PollSchema=SchemaFactory.createForClass(Poll); 