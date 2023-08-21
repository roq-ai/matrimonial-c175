import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QueryInterface {
  id?: string;
  issue?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface QueryGetQueryInterface extends GetQueryInterface {
  id?: string;
  issue?: string;
  user_id?: string;
}
