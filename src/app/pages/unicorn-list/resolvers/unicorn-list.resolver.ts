import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {Observable} from 'rxjs';
import {UnicornsService} from '../../../shared/services/unicorns.service';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {AppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {SetUnicorns} from '../../../store/actions/unicorns.actions';

@Injectable({
    providedIn: 'root'
})
export class UnicornListResolver implements Resolve<Unicorn[]> {

    constructor(private unicornsService: UnicornsService,
                private store: Store<AppState>) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Unicorn[]> {
        return this.unicornsService.listWithCapacities().pipe(
            tap((unicorns: Unicorn[]) => this.store.dispatch(new SetUnicorns(unicorns))),
        );
    }

}
