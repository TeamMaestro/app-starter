import { Component, Element, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'ui-button',
    styleUrl: 'button.scss',
    shadow: true
})
export class UIButtonComponent {

    static readonly ALLOWED_BUTTON_TYPES = ['button', 'submit', 'link'];

    @Element()
    private element: HTMLElement;

    @Prop() type = 'button';
    @Prop() active = false;

    @Watch('active')
    validateActive() {
        this._applyButtonActiveClass();
    }

    @Watch('type')
    validateType(newValue: string) {
        if (UIButtonComponent.ALLOWED_BUTTON_TYPES.indexOf(newValue.toLowerCase()) === -1) {
            throw new Error('type: Invalid type supplied; supported values are button and submit');
        }
    }

    render() {
        return (
            <button type={this.type}>
                <slot />
            </button>
        );
    }

    componentDidLoad() {
        this._applyButtonStyleClass();
        this._applyButtonActiveClass();
    }

    private _applyButtonStyleClass() {
        const container = this.element.shadowRoot.querySelector('button');
        if (this.type !== 'link') {
            container.classList.add('btn');
        }
        else {
            container.classList.add('btn-link');
        }
        if (this.element.hasAttribute('primary')) {
            container.classList.add('primary');
        }
    }

    private _applyButtonActiveClass() {
        this.element.shadowRoot.querySelector('button').setAttribute('active', this.active.toString());
    }

}
