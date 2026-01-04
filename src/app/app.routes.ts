import { Routes } from '@angular/router';
import { Form } from './form/form';
import { MyDashbaord } from './dashbaord/my-dashbaord/my-dashbaord';
import { Comp2 } from './comp-2/comp-2';
import { Api } from './api/api';
import { List } from './list/list';

export const routes: Routes = [
  {
    path: '',
    component: Form,
  },
  {
    path: 'dashbaord',
    component: MyDashbaord,
  },
  {
    path: 'comp-2',
    component: Comp2,
  },
  {
    path: 'api',
    component: Api,
  },
  {
    path: 'list',
    component: List,
  },
];
