import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageLoading } from '../components/PageLoading';
import NotFound from '../pages/404';
import { MENU } from '../typings/Menu.d';
import { Menus } from './config';
export const BaseRouters = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      <Redirect from="/" to={Menus[0].path} exact />
      {Menus.map((menu: MENU) => {
        const route = ({ component: Component, path, title }: typeof menu) => {
          return <Route exact key={title} path={path} component={Component} />;
        };
        return menu.component ? route(menu) : menu.subMenu!.map((item) => route(item));
      })}
      <Route path="*" component={NotFound} />
    </Switch>
  </Suspense>
);
