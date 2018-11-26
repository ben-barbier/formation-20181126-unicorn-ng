import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornsService} from '../../../shared/services/unicorns.service';
import {map, pluck, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PairBirthyearGuard implements CanActivate {

    constructor(private unicornService: UnicornsService,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.unicornService.getById(next.params.id).pipe(
            pluck('birthyear'),
            map((birthyear: number) => !(birthyear % 2)),
            tap((canGoToNextPage: boolean) => {
                if (!canGoToNextPage) {
                    this.router.navigate(['unicorns']);
                }
            }),
        );
    }
}
