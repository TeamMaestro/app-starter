import { Component, Element, Prop } from '@stencil/core';

@Component({
    tag: 'ui-heading',
    styleUrl: 'heading.scss',
    shadow: true
})
export class HeadingComponent {

    @Element()
    private element: HTMLElement;

    @Prop() xlarge: boolean;
    @Prop() large: boolean;
    @Prop() medium: boolean;
    @Prop() small: boolean;
    @Prop() xsmall: boolean;

    render() {
        return (
            <span>
                <slot />
            </span>
        );
    }

    componentDidLoad() {
        this._applyHeaderClass();
    }

    private _applyHeaderClass() {
        const container = (this.element.shadowRoot || this.element).querySelector('span');

        if (this.element.hasAttribute('xlarge')) {
            container.classList.add('xlarge');
        }
        else if (this.element.hasAttribute('large')) {
            container.classList.add('large');
        }
        else if (this.element.hasAttribute('medium')) {
            container.classList.add('medium');
        }
        else if (this.element.hasAttribute('small')) {
            container.classList.add('small');
        }
        else if (this.element.hasAttribute('xsmall')) {
            container.classList.add('xsmall');
        }
        else {
            container.classList.add('regular');
        }
    }
}
