import { Color } from '../../../interface';
export declare class HeadingComponent {
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
    render(): any;
}
