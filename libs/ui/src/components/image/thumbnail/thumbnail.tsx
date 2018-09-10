import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'ui-thumbnail',
    styleUrl: 'thumbnail.scss',
    shadow: true
})
export class UIThumbnailComponent {

    @Element()
    private element: HTMLElement;

    @Prop() src: string;

    render() {
        return (
            <span class="container">
                <slot />
            </span>
        );
    }

    componentDidLoad() {
        if (this.src) {
            this.element.style.backgroundImage = `url(${this.src})`;
        }
        else {
            this.element.classList.add('no-img');
        }
    }

}
