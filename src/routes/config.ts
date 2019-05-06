import { lazy } from 'react';
const HospitalCode = lazy(() => import('../pages/hospitalCode/index'));

export const Menus = [
  {
    path: '/hospitalCode',
    title: '医疗机构编码',
    icon: 'icon-yiyuan',
    hidden: false,
    component: HospitalCode
  }
];
