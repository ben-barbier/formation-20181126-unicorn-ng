import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UnicornsService} from '../../../../shared/services/unicorns.service';

@Component({
    selector: 'uni-unicorn-edit-dialog',
    templateUrl: './unicorn-edit-dialog.component.html',
    styleUrls: ['./unicorn-edit-dialog.component.scss']
})
export class UnicornEditDialogComponent {

    public unicorn = this.data.unicorn;

    constructor(@Inject(MAT_DIALOG_DATA) private data: any,
                private dialogRef: MatDialogRef<UnicornEditDialogComponent>,
                private unicornService: UnicornsService) {
    }

    public updateUnicorn() {
        this.unicornService.update(this.unicorn).subscribe(() => {
            this.dialogRef.close(this.unicorn);
        });
    }
}
