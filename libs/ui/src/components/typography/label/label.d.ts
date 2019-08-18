import { Color } from '../../../interface';
export declare class LabelComponent {
    /**
     * The maximum lines to display before truncating the text.
     * Default behavior shows all lines of text with no truncation.
     */
    maxLines: number;
    /**
     * The primary color of the label. Uses the branded CSS variables
     * that are globally available to the application.
     */
    color: Color;
    xxlarge: boolean;
    xlarge: boolean;
    large: boolean;
    base: boolean;
    small: boolean;
    xsmall: boolean;
    bold: boolean;
    semibold: boolean;
    medium: boolean;
    book: boolean;
    capitalize: boolean;
    uppercase: boolean;
    lowercase: boolean;
    hostData(): {
        style: {};
    };
    render(): any;
}
