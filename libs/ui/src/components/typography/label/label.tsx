import { Component, h, Prop } from '@stencil/core';
import { Color } from '../../../interface';

@Component({
    tag: 'hive-ui-label',
    styleUrl: 'label.scss',
    shadow: true
})
export class Label {
    /**
     * The maximum lines to display before truncating the text.
     * Default behavior shows all lines of text with no truncation.
     */
    @Prop() maxLines: number;
    /**
     * The primary color of the label. Uses the branded CSS variables
     * that are globally available to the application.
     */
    @Prop() color: Color;

    @Prop() type: 'label' | 'text' = 'text';

    /* Region: Type safety properties
    *
    * These exist for tsx compiler and jsx property reflection.
    * All logic is handled in css host attribute selectors.
    */
    @Prop({ reflect: true }) xxlarge: boolean;
    @Prop({ reflect: true }) xlarge: boolean;
    @Prop({ reflect: true }) large: boolean;
    @Prop({ reflect: true }) base: boolean;
    @Prop({ reflect: true }) small: boolean;
    @Prop({ reflect: true }) xsmall: boolean;

    @Prop({ reflect: true }) xbold: boolean;
    @Prop({ reflect: true }) bold: boolean;
    @Prop({ reflect: true }) semibold: boolean;
    @Prop({ reflect: true }) medium: boolean;
    @Prop({ reflect: true }) book: boolean;

    @Prop({ reflect: true }) capitalize: boolean;
    @Prop({ reflect: true }) uppercase: boolean;
    @Prop({ reflect: true }) lowercase: boolean;
    /*
    * Region End: Type safety properties
    */

    hostData() {
        const style = {};
        if (this.maxLines) {
            style['--max-lines'] = this.maxLines;
        }
        if (this.color) {
            style['--label-color'] = `var(--app-color-${this.color})`;
        }
        if (this.type) {
            if (this.type === 'label') {
                style['--font-family'] = 'var(--header-font-family)';
            }
        }
        return {
            style
        };
    }

    render() {
        return (
            <span>
                <slot></slot>
            </span>
        );
    }
}
