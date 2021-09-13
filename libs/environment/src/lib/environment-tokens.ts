import { InjectionToken } from '@angular/core';
import { Environment } from './environment-interfaces';

export const ENVIRONMENT: InjectionToken<Environment> = new InjectionToken<Environment>('env');
