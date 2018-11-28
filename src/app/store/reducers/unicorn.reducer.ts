import {Unicorn} from '../../shared/models/unicorn.model';
import {DELETE_UNICORN, SET_UNICORNS, UnicornsActions, UPDATE_UNICORN} from '../actions/unicorns.actions';

export function unicornsReducer(state: Unicorn[] = [], action: UnicornsActions) {

    console.log(action.type, state);

    switch (action.type) {
        case DELETE_UNICORN:
            return state.filter(u => u.id !== action.unicorn.id);
        case UPDATE_UNICORN:
            return [...state.filter(u => u.id !== action.unicorn.id), action.unicorn];
        case SET_UNICORNS:
            return action.unicorns;
        default:
            return state;
    }
}
