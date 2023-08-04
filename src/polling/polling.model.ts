export class Poll {
    id: number;
    question: string;
    options: string[];
    optionVotes: Map<number,number>;  // Array to store the number of votes for each option
  }
