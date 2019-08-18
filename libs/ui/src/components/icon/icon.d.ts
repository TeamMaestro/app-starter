export declare class Icon {
    private io?;
    el: HTMLElement;
    private svgContent?;
    private isVisible;
    /**
     * Specifies the label to use for accessibility. Defaults to the icon name.
     */
    ariaLabel?: string;
    /**
     * Specifies which icon to use from the built-in set of icons.
     */
    name?: string;
    /**
     * The size of the icon.
     * Available options are: `"small"` and `"large"`.
     */
    size?: string;
    /**
     * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
     * Default, `false`.
     */
    lazy: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private waitUntilVisible;
    loadIcon(): void;
    render(): any;
}
