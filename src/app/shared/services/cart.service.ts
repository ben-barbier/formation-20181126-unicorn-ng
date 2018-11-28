import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';
import {map} from 'rxjs/operators';
import {UnicornsService} from './unicorns.service';
import {AppState} from '../../store/app.state';
import {select, State, Store} from '@ngrx/store';
import {AddUnicornToCart, RemoveUnicornFromCart} from '../../store/actions/cart.actions';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart: Observable<Unicorn[]> = this.store.pipe(select('cart'));

    constructor(private store: Store<AppState>,
                private state: State<AppState>) {
    }

    public toggle(unicorn: Unicorn): void {
        if (this.state.getValue().cart.find(u => u.id === unicorn.id)) {
            this.store.dispatch(new RemoveUnicornFromCart(unicorn));
        } else {
            this.store.dispatch(new AddUnicornToCart(unicorn));
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
