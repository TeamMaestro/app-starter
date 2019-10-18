import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Color } from '../../../interface';
import { BrowserEvent } from '../../../utils/browser';

@Component({
    tag: 'hive-ui-button',
    styleUrl: 'button.scss',
    shadow: true
})
export class Button {

    @Element() element: Element;
    /**
     * The type of button to render
     */
    @Prop({ reflect: true }) type: 'submit' | 'button' | 'link' | 'menu' = 'button';
    /**
     * If the button is disabled and cannot be interacted with.
     */
    @Prop({ mutable: true }) disabled = false;
    /**
     * The color display of the button.
     */
    @Prop() color: Color = 'blue';

    @Prop({ reflect: true }) small: boolean;
    @Prop({ reflect: true }) xsmall: boolean;
    @Prop({ reflect: true }) bold: boolean;
    /**
     * Event emitted each time the button is clicked
     */
    @Event() tap: EventEmitter;

    buttonClassList: string[] = [];

    hostData() {
        const style = {};
        if (this.color) {
            style['--background-color'] = `var(--app-color-${this.color})`;
            // If the color is white - set necessary color defaults
            if (this.color === 'white') {
                style['--color'] = 'var(--app-color-blue)';
                style['--color-hover'] = 'var(--app-color-blue)';
                style['--color-disabled'] = 'var(--color-medium-gray)';
                style['--hover-background-color'] = 'var(--color-light-gray)';
                style['--background-color'] = 'var(--color-app-light-gray)';
            }

            if (this.type === 'link') {
                style['--color'] = `var(--app-color-${this.color})`;
                style['--color-hover'] = `var(--app-color-${this.color}-tint)`;
                style['--background-color'] = 'transparent';
                style['--hover-background-color'] = 'transparent';
            }

            if (this.type === 'menu') {
                style['--color'] = `var(--app-color-${this.color})`;
                style['--color-hover'] = `var(--app-color-${this.color}-tint)`;
                style['--background-color'] = 'transparent';
                style['--hover-background-color'] = 'var(--color-app-light-gray)';
                style['--border'] = '1px solid var(--color-medium-gray)';
            }
        }
        return {
            style
        };
    }

    render() {
        return (
            <button
                onClick={ev => {
                    if (!this.disabled) {
                        this.tap.emit(ev);
                    }
                    if (this.type === 'submit') {
                        const form = this.element.closest('form');
                        if (form) {
                            form.dispatchEvent(new BrowserEvent('submit'));
                        }
                    }
                }}
                disabled={this.disabled}
                type={this.type}>
                <slot></slot>
            </button>
        );
    }

}
