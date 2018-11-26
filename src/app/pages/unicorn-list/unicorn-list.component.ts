import {Component} from '@angular/core';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {Unicorn} from '../../shared/models/unicorn.model';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[];

    constructor(private unicornService: UnicornsService) {
        this.unicornService.listWithCapacities().subscribe((unicorns: Unicorn[]) => {
            this.unicorns = unicorns;
        });
    }

    public logName(name: string) {
        console.log(name);
    }

    public removeUnicornFromList(unicornToDelete: Unicorn): void {
        this.unicorns = this.unicorns.filter(
            (unicorn: Unicorn) => unicornToDelete.id !== unicorn.id);
    }
}
