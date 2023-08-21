import { MatchInterface } from 'interfaces/match';
import { ProfileInterface } from 'interfaces/profile';
import { GetQueryInterface } from 'interfaces';

export interface SuggestionInterface {
  id?: string;
  match_id: string;
  profile_id: string;
  created_at?: any;
  updated_at?: any;

  match?: MatchInterface;
  profile?: ProfileInterface;
  _count?: {};
}

export interface SuggestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  match_id?: string;
  profile_id?: string;
}
