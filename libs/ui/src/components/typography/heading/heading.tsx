import { Component, h, Prop } from '@stencil/core';
import { Color } from '../../../interface';

@Component({
    tag: 'hive-ui-heading',
    styleUrl: 'heading.scss',
    shadow: true
})
export class Heading {

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

    @Prop({ reflect: true }) xxlarge: boolean;
    @Prop({ reflect: true }) xlarge: boolean;
    @Prop({ reflect: true }) large: boolean;
    @Prop({ reflect: true }) base: boolean;
    @Prop({ reflect: true }) small: boolean;
    @Prop({ reflect: true }) xsmall: boolean;

    @Prop({ reflect: true }) xbold: boolean;
    @Prop({ reflect: true }) bold: boolean;
    @Prop({ reflect: true }) medium: boolean;

    componentDidLoad() {
        if (!this.xbold && !this.medium) {
            this.bold = true;
        }
    }

    render() {
        return (
            <hive-ui-label
                xxlarge={this.xxlarge}
                xlarge={this.xlarge}
                large={this.large}
                base={this.base}
                small={this.small}
                xsmall={this.xsmall}
                xbold={this.xbold}
                bold={this.bold}
                medium={this.medium}
                color={this.color}
                maxLines={this.maxLines}>
                <slot></slot>
            </hive-ui-label>
        );
    }
}
