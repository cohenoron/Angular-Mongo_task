import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ActionsModule } from './app/actions/actions.module';


platformBrowserDynamic().bootstrapModule(ActionsModule)
  .catch(err => console.error(err));
