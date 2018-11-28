import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {MaterialModule} from './material.module';
import {MagicalNamePipe} from './shared/pipes/magical-name.pipe';
import {UnicornEditDialogComponent} from './pages/unicorn-list/unicorn-card/unicorn-edit-dialog/unicorn-edit-dialog.component';
import {FormsModule} from '@angular/forms';
import {UnicornDetailsComponent} from './pages/unicorn-details/unicorn-details.component';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './store/reducers/cart.reducer';
import {DevModule, environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {unicornsReducer} from './store/reducers/unicorn.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        NavComponent,
        MagicalNamePipe,
        UnicornEditDialogComponent,
        UnicornDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        StoreModule.forRoot({
            cart: cartReducer,
            unicorns: unicornsReducer,
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        UnicornEditDialogComponent
    ]
})
export class AppModule {
}
