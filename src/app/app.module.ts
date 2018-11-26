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
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        UnicornEditDialogComponent
    ]
})
export class AppModule {
}
