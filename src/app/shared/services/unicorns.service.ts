import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';
import {filter, flatMap, map, mergeMap, pluck, reduce, shareReplay, tap, toArray} from 'rxjs/operators';
import {CapacitiesService} from './capacities.service';
import {Capacity} from '../models/capacity.model';
import {AppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {DeleteUnicorn, UpdateUnicorn} from '../../store/actions/unicorns.actions';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient,
                private capacitiesService: CapacitiesService,
                private store: Store<AppState>) {
    }

    public static getAgeFromBirthyear(birthyear: number): number {
        return new Date().getFullYear() - birthyear;
    }

    public static getMagicalName(name: string): string {
        return '🦄' + Array.from(name).map((letter, idx) => {
            return idx % 2 ? letter.toLowerCase() : letter.toUpperCase();
        }).join('');
    }

    private static isOldEnough(unicorn: Unicorn, minAge: number) {
        return new Date().getFullYear() - unicorn.birthyear >= minAge;
    }

    public list(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
    }

    public getById(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`http://localhost:3000/unicorns/${id}`);
    }

    public update(unicorn: Unicorn): Observable<Unicorn> {
        const unicornToSave = {...unicorn};
        delete unicornToSave.capacitiesLabels;
        return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicornToSave).pipe(
            tap((unicornUpdated: Unicorn) => this.store.dispatch(new UpdateUnicorn(unicornUpdated))),
        );
    }

    public listWithCapacities(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn): Observable<Unicorn> =>
                from(unicorn.capacities).pipe(
                    mergeMap((capacityId: number): Observable<Capacity> =>
                        this.capacitiesService.getById(capacityId)
                    ),
                    pluck('label'),
                    toArray(),
                    map((labels: string[]) => {
                        return {...unicorn, capacitiesLabels: labels};
                    }),
                )
            ),
            toArray()
        );
    }

    public listWithMagicalName(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            filter(unicorn => UnicornsService.isOldEnough(unicorn, 1)),
            map(unicorn => ({...unicorn, name: UnicornsService.getMagicalName(unicorn.name)})),
            toArray(),
        );
    }

    public getAverageAge(): Observable<number> {
        return this.list().pipe(
            flatMap(e => e),
            pluck('birthyear'),
            map((birthyear: number) => UnicornsService.getAgeFromBirthyear(birthyear)),
            reduce((acc: { sum: number, count: number }, age: number) => {
                return {
                    sum: acc.sum + age,
                    count: acc.count + 1
                };
            }, {sum: 0, count: 0}),
            map(acc => acc.sum / acc.count)
        );
    }

    public delete(unicorn: Unicorn): Observable<void> {
        return this.http.delete<void>(`http://localhost:3000/unicorns/${unicorn.id}`).pipe(
            tap(() => this.store.dispatch(new DeleteUnicorn(unicorn)))
        );
    }

}
