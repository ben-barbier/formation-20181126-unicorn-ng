import {Action} from '@ngrx/store';
import {Unicorn} from '../../shared/models/unicorn.model';

export const ADD_UNICORN_TO_CART = '[Cart] ADD_🦄_TO_🛒';
export const REMOVE_UNICORN_FROM_CART = '[Cart] REMOVE_🦄_FROM_🛒';

export class AddUnicornToCart implements Action {
    readonly type = ADD_UNICORN_TO_CART;
    constructor(public unicorn: Unicorn) { }
}
export class RemoveUnicornFromCart implements Action {
    readonly type = REMOVE_UNICORN_FROM_CART;
    constructor(public unicorn: Unicorn) { }
}
export type CartActions =
    AddUnicornToCart
    | RemoveUnicornFromCart;
