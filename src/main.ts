import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CalcComponent } from './app/calc/calc.component';

bootstrapApplication(CalcComponent, appConfig)
  .catch((err) => console.error(err));
