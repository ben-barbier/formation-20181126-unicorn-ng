import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';
import {map} from 'rxjs/operators';
import {UnicornsService} from './unicorns.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {


    public cart = new BehaviorSubject<Unicorn[]>([]);

    public toggle(unicorn: Unicorn): void {
        if (this.cart.getValue().find(u => u.id === unicorn.id)) {
            this.cart.next(this.cart.getValue().filter(u => u.id !== unicorn.id));
        } else {
            this.cart.next([...this.cart.getValue(), unicorn]);
        }
    }

    public getAverageAge(): Observable<number> {
        return this.cart.pipe(
            map((cart: Unicorn[]): number => {
                return cart.length && cart.reduce((acc, unicorn) => {
                    return acc + UnicornsService.getAgeFromBirthyear(unicorn.birthyear);
                }, 0) / cart.length;
            }),
        );
    }

}
