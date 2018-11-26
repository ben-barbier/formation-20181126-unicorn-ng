import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Unicorn} from '../../shared/models/unicorn.model';
import {UnicornsService} from '../../shared/services/unicorns.service';
import {ActivatedRoute, Params} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
    selector: 'uni-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss']
})
export class UnicornDetailsComponent {

    public unicorn: Observable<Unicorn>;

    constructor(unicornService: UnicornsService,
                route: ActivatedRoute) {
        this.unicorn = route.params.pipe(
            mergeMap((params: Params) => unicornService.getById(params.id))
        );
    }

}
