//Component for home page to render post cards
import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {
    @Input() title;
    @Input() content;
    @Input() id;
    @Input() clickButton;
}