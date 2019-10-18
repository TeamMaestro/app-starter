import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'hive-ui-form-alert',
    styleUrl: 'form-alert.scss',
    shadow: true
})
export class FormAlert {

    @Prop() type: 'danger' | 'success' | 'warning' = 'danger';

    get icon() {
        switch (this.type) {
            case 'warning':
            case 'danger':
                return 'alert';
        }
    }

    get backgroundColor() {
        switch (this.type) {
            case 'danger':
                return 'red';
            case 'warning':
                    return 'gold';
        }
    }

    render() {
        return (
            <Host style={{
                '--background-color': `var(--app-color-${this.backgroundColor}-rgb)`,
                '--color': `var(--app-color-${this.backgroundColor})`
            }}>
                <div class='alert'>
                    <div class='alert-icon'>
                        <hive-ui-icon name={this.icon}></hive-ui-icon>
                    </div>
                    <hive-ui-label small>
                        <slot></slot>
                    </hive-ui-label>
                </div>
            </Host>
        );
    }

}
