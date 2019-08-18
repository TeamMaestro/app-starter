import { Component, h } from '@stencil/core';

@Component({
    tag: 'hive-ui-dropdown',
    styleUrl: 'dropdown.scss',
    shadow: true
})
export class Dropdown {

    render() {
        return (
            <slot />
        );
    }
}
