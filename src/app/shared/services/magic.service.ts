import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MagicService {

    constructor() {
    }

    public enchant(name: string): string {
        return '🦄' + Array.from(name || '').map((letter, idx) => {
            return idx % 2 ? letter.toLowerCase() : letter.toUpperCase();
        }).join('');
    }

}
