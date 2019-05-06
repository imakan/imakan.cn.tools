import { RouteComponentProps } from 'react-router-dom';
import { UserInfoType } from './service';
export interface ResponseData {
  getInfo: UserInfoType;
}

export interface BaseLayoutProps extends RouteComponentProps {
  history: History<any>;
  location: Location<any>;
  match: match<any>;
  staticContext?: StaticContext | undefined;
}

export interface BaseLayoutState {
  collapsed: boolean;
  currentUser?: UserInfoType;
}
