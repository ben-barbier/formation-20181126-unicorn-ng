import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornDetailsComponent} from './pages/unicorn-details/unicorn-details.component';
import {PairBirthyearGuard} from './pages/unicorn-details/guards/pair-birthyear.guard';

const routes: Routes = [
    {path: 'unicorns', component: UnicornListComponent},
    {
        path: 'unicorn/:id',
        component: UnicornDetailsComponent,
        canActivate: [PairBirthyearGuard]
    },
    {path: '**', redirectTo: 'unicorns'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
