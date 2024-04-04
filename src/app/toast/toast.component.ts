import {Component, Input} from '@angular/core';
import {UtilsService} from "../services/utils.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {Toast, ToastService} from "../services/toast.service";

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({transform: 'translateY(10%)', opacity: 0}),
                animate('400ms', style({transform: 'translateY(0)', opacity: 1})),
            ]),
            transition(':leave', [
                style({transform: 'translateY(0)', opacity: 1}),
                animate('200ms', style({transform: 'translateY(-5%)', opacity: 0})),
            ]),
        ]),
    ]
})
export class ToastComponent {

    @Input()
    toast!: Toast;


    constructor(private utilsService: UtilsService, private toastService: ToastService) {
    }

    close() {
        this.toastService.close(this.toast.id);
    }
}
