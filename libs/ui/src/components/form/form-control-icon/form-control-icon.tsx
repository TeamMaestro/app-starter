import { Component, h } from '@stencil/core';

@Component({
    tag: 'hive-ui-form-control-icon',
    styleUrl: 'form-control-icon.scss',
    shadow: true
})
export class FormControlIcon {

    render() {
        return (
            <hive-ui-badge color='red'>
                <hive-ui-icon name='alert'></hive-ui-icon>
            </hive-ui-badge>
        );
    }

}
