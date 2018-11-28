import {Component} from '@angular/core';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {Unicorn} from '../../shared/models/unicorn.model';
import {AppState} from '../../store/app.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Observable<Unicorn[]> = this.store.pipe(select('unicorns'));

    constructor(private unicornService: UnicornsService,
                private store: Store<AppState>) {
    }

    public logName(name: string) {
        console.log(name);
    }

}
