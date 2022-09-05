import { Vote } from "../utils/enums";

export interface Movie {
  id: string;
  title: string;
  category: Array<string>;
  likes: number;
  dislikes: number;
  image: string;
  vote: Vote;
}
