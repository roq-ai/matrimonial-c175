import { SuggestionInterface } from 'interfaces/suggestion';
import { ProfileInterface } from 'interfaces/profile';
import { GetQueryInterface } from 'interfaces';

export interface MatchInterface {
  id?: string;
  status?: string;
  profile_id: string;
  created_at?: any;
  updated_at?: any;
  suggestion?: SuggestionInterface[];
  profile?: ProfileInterface;
  _count?: {
    suggestion?: number;
  };
}

export interface MatchGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  profile_id?: string;
}
