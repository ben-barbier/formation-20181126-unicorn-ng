import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {UnicornsService} from '../../../shared/services/unicorns.service';
import {CartService} from '../../../shared/services/cart.service';
import {MatDialog} from '@angular/material';
import {UnicornEditDialogComponent} from './unicorn-edit-dialog/unicorn-edit-dialog.component';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

    @Output()
    private logName = new EventEmitter<string>();

    public isInCart = false;

    constructor(private unicornsService: UnicornsService,
                private cartService: CartService,
                private dialog: MatDialog) {
    }

    public sayMyName(): void {
        this.logName.emit(this.unicorn.name);
    }

    public deleteUnicorn(unicorn: Unicorn) {
        this.unicornsService.delete(unicorn).subscribe();
    }

    public toggleToCart() {
        this.cartService.toggle(this.unicorn);
        this.isInCart = !this.isInCart;
    }

    public openEditForm() {
        this.dialog.open(UnicornEditDialogComponent, {
            data: {
                unicorn: {...this.unicorn}
            }
        }).afterClosed().subscribe((updatedUnicorn: Unicorn) => {
            if (updatedUnicorn) {
                this.unicorn = updatedUnicorn;
            }
        });
    }
}
