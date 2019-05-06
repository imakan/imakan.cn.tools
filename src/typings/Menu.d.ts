import React, { ComponentClass } from 'react';

export interface MENU {
  path?: string;
  title: string;
  icon: string;
  component?: React.LazyExoticComponent<ComponentClass | FunctionComponent>;
  subMenu?: any[];
  hidden?: boolean;
  redirect?: string;
}
