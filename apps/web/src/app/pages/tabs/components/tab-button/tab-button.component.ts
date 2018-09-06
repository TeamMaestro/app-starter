import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tab-button',
    templateUrl: 'tab-button.component.html',
    styleUrls: ['tab-button.component.scss']
})
export class TabButtonComponent {

    @Input() label: string;
    @Input() icon: string;
    @Input() href: string;

}
