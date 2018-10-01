import { EventEmitter } from "@angular/core";

export class NotificationService {
    notifer = new EventEmitter<string>();

    notify(message: string) {
        this.notifer.emit(message);
    }
}