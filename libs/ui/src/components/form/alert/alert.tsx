import { Component, h, Prop } from '@stencil/core';
import { Color } from '../../../interface';

@Component({
    tag: 'hive-ui-alert',
    styleUrl: 'alert.scss',
    shadow: true
})
export class Alert {

    @Prop() color: Color = 'blue';

    hostData() {
        const style = {};
        if (this.color) {
            style['--background-color'] = `var(--app-color-${this.color})`;
        }

        return {
            style
        };
    }

    render() {
        return (
            <div class='alert'>
                <slot></slot>
            </div>
        );
    }

}
