import {Pipe, PipeTransform} from '@angular/core';
import {UnicornsService} from '../services/unicorns.service';

@Pipe({
    name: 'magicalName',
})
export class MagicalNamePipe implements PipeTransform {

    transform(name: string): string {
        console.count('🦄');
        return UnicornsService.getMagicalName(name);
    }

}
