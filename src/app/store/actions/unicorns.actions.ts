import {Action} from '@ngrx/store';
import {Unicorn} from '../../shared/models/unicorn.model';

export const DELETE_UNICORN = '[Unicorn] DELETE_🦄';
export const UPDATE_UNICORN = '[Unicorn] UPDATE_🦄';
export const SET_UNICORNS   = '[Unicorn] SET_🦄🦄🦄...';


export class DeleteUnicorn implements Action {
    readonly type = DELETE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export class UpdateUnicorn implements Action {
    readonly type = UPDATE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export class SetUnicorns implements Action {
    readonly type = SET_UNICORNS;
    constructor(public unicorns: Unicorn[]) { }
}
export type UnicornsActions =
    DeleteUnicorn
    | UpdateUnicorn
    | SetUnicorns;
