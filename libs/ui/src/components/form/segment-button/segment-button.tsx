import { Component, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';

let ids = 0;

@Component({
    tag: 'hive-ui-segment-button',
    styleUrl: 'segment-button.scss',
    shadow: true
})
export class SegmentButton {
    /**
     * If `true`, the segment button is selected
     */
    @Prop({ mutable: true }) checked = false;
    /**
     * If `true`, the user cannot interact with the segment button.
     */
    @Prop({ mutable: true }) disabled = false;
    /**
     * The type of the button
     */
    @Prop() type: 'submit' | 'button' = 'button';
    /**
     * The value of the segment button.
     */
    @Prop() value: string = 'hive-sb-' + (ids++);
    /**
     * Emitted when the segment button is clicked.
     */
    @Event() hiveSelect!: EventEmitter<void>;

    @Watch('checked')
    checkedChanged(checked: boolean, prev: boolean) {
        if (checked && !prev) {
            this.hiveSelect.emit();
        }
    }

    private onClick = () => {
        this.checked = true;
    }

    render() {
        const { checked, disabled, type } = this;
        return (
            <Host
                onClick={this.onClick}
                aria-disabled={disabled ? 'true' : null}
                class={{
                    'segment-button-disabled': disabled,
                    'segment-button-checked': checked
                }}>
                <button
                    type={type}
                    aria-pressed={checked ? 'true' : null}
                    disabled={disabled}>
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
