import {type ApplicationConfig, provideZonelessChangeDetection} from '@angular/core';

export const appConfig: ApplicationConfig = {
    providers: [provideZonelessChangeDetection()],
};
