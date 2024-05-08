import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UtilsService} from "./utils.service";

export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error';
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    toasts: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);

    constructor(private utilsService: UtilsService) {
    }

    success(message: string) {
        this.showtoast({message, type: 'success', id: this.utilsService.guid()});
    }

    error(message: string) {
        this.showtoast({message, type: 'error', id: this.utilsService.guid()});
    }

    close(id: string) {
        this.toasts.next([...this.toasts.value.filter(t => t.id !== id)]);
    }

    private showtoast(toast: Toast) {
        this.toasts.next([...this.toasts.value, toast]);
        this.removeToast(toast); // Remove toast after 2 seconds.
    }

    private removeToast(toast: Toast) {
        setTimeout(() => this.close(toast.id), 2000);
    }

}
