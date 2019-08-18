import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'hive-ui-segment',
    styleUrl: 'segment.scss',
    shadow: true
})
export class Segment {

    @Element() el!: HTMLElement;

    /**
     * If `true`, the user cannot interact with the segment.
     */
    @Prop() disabled = false;
    /**
     * The value of the segment
     */
    @Prop({ mutable: true }) value?: string | null;
    /**
     * Emitted when the value property has changed.
     */
    @Event() hiveChange!: EventEmitter<any>;

    @Listen('hiveSelect')
    segmentClick(ev: CustomEvent) {
        const selectedButton = ev.target as HTMLHiveUiSegmentButtonElement;
        this.value = selectedButton.value;
    }

    @Watch('value')
    protected valueChanged(value: string | undefined) {
        this.updateButtons();
        this.hiveChange.emit({ value });
    }

    componentDidLoad() {
        if (this.value == null) {
            const checked = this.getButtons().find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.updateButtons();
    }

    private updateButtons() {
        const value = this.value;
        for (const button of this.getButtons()) {
            button.checked = (button.value === value);
        }
    }

    private getButtons() {
        return Array.from(
            this.el.querySelectorAll('hive-ui-segment-button')
        );
    }

    render() {
        const { disabled } = this;
        return (
            <Host
                class={{
                    'segment-disabled': disabled
                }}
            >
                <slot></slot>
            </Host>
        );
    }
}
