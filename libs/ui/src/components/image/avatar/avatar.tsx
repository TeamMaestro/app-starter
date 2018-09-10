import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'ui-avatar',
    styleUrl: 'avatar.scss',
    shadow: true
})
export class UIAvatarComponent {

    @Element()
    private element: HTMLElement;

    @Prop() src = '';
    @Prop() chip = false;

    @Prop() width = '40px';
    @Prop() height = '40px';

    renderSlot() {
        if (!this.chip) {
            return (
                <slot />
            )
        }
    }

    renderImage() {
        if (this.src && this.src.length > 0) {
            const style = {
                width: this.width,
                height: this.height
            };
            return (
                <ion-avatar style={style}>
                    <img src={this.src} width={this.width} height={this.height} />
                </ion-avatar>
            );
        }
        else {
            const style = {
                width: this.width,
                height: this.height
            };
            return (
                <ui-text style={style}
                    small bold class="placeholder">
                    {this.renderSlot()}
                </ui-text>
            )
        }
    }

    renderAvatar() {
        let style: any = {
            width: this.width,
            height: this.height
        };
        if (this.chip) {
            style = {
                height: this.height,
                'border-radius': `${(Number.parseInt(this.height) / 2)}px`
            };
            return (
                <ion-chip style={style} class="ui-chip">
                    {this.renderImage()}
                    <ion-label>
                        <ui-text bold large>
                            <slot />
                        </ui-text>
                    </ion-label>
                </ion-chip>
            )
        }
        return (
            <ion-avatar style={style}>
                {this.renderImage()}
            </ion-avatar>
        )
    }

    render() {
        return (
            this.renderAvatar()
        );
    }

    componentDidLoad() {
        this._autoBuildPlaceholderInitials();
    }

    private _autoBuildPlaceholderInitials() {
        const placeholder = this.element.shadowRoot.querySelector('.placeholder');
        let slot;
        if (placeholder) {
            slot = placeholder.querySelector('slot');
            if (!slot) {
                slot = this.element.shadowRoot.querySelector('ion-chip > ion-label > ui-text slot');
            }
            if (slot) {
                const nodes = slot.assignedNodes();
                const textString = nodes[nodes.length > 1 ? 1 : 0].textContent.trim();
                // Avatar label is larger than initials - attempt to auto create initials
                if (textString.length > 2) {
                    placeholder.textContent = this._calculateInitials(textString);
                }
            }
        }
    }

    private _calculateInitials(value: string) {
        let initials = value.match(/\b\w/g) || [] as any;
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }

}
