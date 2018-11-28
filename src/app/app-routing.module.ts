import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornDetailsComponent} from './pages/unicorn-details/unicorn-details.component';
import {PairBirthyearGuard} from './pages/unicorn-details/guards/pair-birthyear.guard';
import {UnicornListResolver} from './pages/unicorn-list/resolvers/unicorn-list.resolver';

const routes: Routes = [
    {
        path: 'unicorns',
        component: UnicornListComponent,
        resolve: {
            unicorns: UnicornListResolver
        }
    },
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
