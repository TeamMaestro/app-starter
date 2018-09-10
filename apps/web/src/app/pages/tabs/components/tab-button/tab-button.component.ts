import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tab-button',
    templateUrl: 'tab-button.component.html',
    styleUrls: ['tab-button.component.scss']
})
export class TabButtonComponent {
    /**
     * The displayed text of the tab button
     */
    @Input() label: string;
    /**
     * The displayed icon of the tab button
     */
    @Input() icon: string;
    /**
     * The router link href when the tab is selected
     */
    @Input() href: string;

}
