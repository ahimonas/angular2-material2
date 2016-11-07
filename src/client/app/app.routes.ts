import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';

import { AboutCopyRoutes } from './aboutcopy/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AboutCopyRoutes,
];
