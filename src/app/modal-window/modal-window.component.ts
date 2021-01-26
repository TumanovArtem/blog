import {Component, Input} from '@angular/core';

@Component({
    selector: 'modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.css']
})

export class CardComponent {
    @Input() title;
    @Input() content;
    @Input() id;

}