import { Component, Element, Prop } from '@stencil/core';

@Component({
    tag: 'ui-text',
    styleUrl: 'text.scss',
    shadow: true
})
export class UITextComponent {

    @Element() element: HTMLElement;

    @Prop() italic;
    @Prop() large;
    @Prop() small;
    @Prop() bold;
    @Prop() semibold;

    render() {
        return (
            <span>
                <slot />
            </span>
        );
    }

    componentDidLoad() {
        this._applyTextClass();
        this._applyWeightClass();
        this._applyStyleClass();
    }

    private _applyTextClass() {
        const { container } = this;
        if (this.element.hasAttribute('large')) {
            container.classList.add('large');
        }
        else if (this.element.hasAttribute('small')) {
            container.classList.add('small');
        }
        else {
            container.classList.add('medium');
        }
    }

    private _applyWeightClass() {
        const { container } = this;
        if (this.element.hasAttribute('bold')) {
            container.classList.add('bold');
        } else if (this.element.hasAttribute('semibold')) {
            container.classList.add('semibold');
        }
    }

    private _applyStyleClass() {
        const { container } = this;
        if (this.element.hasAttribute('italic')) {
            container.classList.add('italic');
        }
    }

    private get container() {
        return this.element.shadowRoot.querySelector('span');
    }

}
