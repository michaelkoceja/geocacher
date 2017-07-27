import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationFormComponent } from './location-form/location-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LocationFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
