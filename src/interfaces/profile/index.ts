import { MatchInterface } from 'interfaces/match';
import { SuggestionInterface } from 'interfaces/suggestion';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProfileInterface {
  id?: string;
  age?: number;
  location?: string;
  occupation?: string;
  status?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  match?: MatchInterface[];
  suggestion?: SuggestionInterface[];
  user?: UserInterface;
  _count?: {
    match?: number;
    suggestion?: number;
  };
}

export interface ProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  occupation?: string;
  status?: string;
  user_id?: string;
}
