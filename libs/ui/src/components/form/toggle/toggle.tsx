import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { renderHiddenInput } from '../../../utils/helpers';

let toggleIds = 0;

@Component({
    tag: 'hive-ui-toggle',
    styleUrl: 'toggle.scss',
    shadow: true
})
export class Toggle {

    private inputId = `hive-tg-${toggleIds++}`;

    @State() selectValue: boolean;

    @Element() el!: HTMLElement;

    /**
     * The name of the control, which is submitted with the form data.
     */
    @Prop() name: string = this.inputId;
    /**
     * If `true`, the checkbox is selected
     */
    @Prop({ mutable: true }) checked = false;
    /**
     * If `true`, the user cannot interact with the segment button.
     */
    @Prop({ mutable: true }) disabled = false;
    /**
     * The value of the toggle does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
     * it's only used when the toggle participates in a native `<form>`.
     */
    @Prop() value?: string | null = 'on';

     /**
      * Emitted when a new option is selected.
      */
    @Event() hiveChange!: EventEmitter<any>;

    /**
     * Emits the current value
     */
    handleSelect() {
        this.checked = !this.checked;
    }

    @Watch('checked')
    checkedChanged(isChecked: boolean) {
        this.hiveChange.emit({
            checked: isChecked,
            value: this.value
        });
    }

    private getValue() {
        return this.value || '';
    }

    render() {
        const { checked, disabled, el } = this;
        const value = this.getValue();

        renderHiddenInput(true, el, this.name, (checked ? value : ''), disabled);
        return (
            <Host>
                <label>
                    <slot></slot>
                    <div class='switch'>
                        <input
                            type='checkbox'
                            disabled={this.disabled}
                            checked={this.checked}
                            onChange={() => this.handleSelect()}
                        />
                        <span class='slider round' />
                        <div>{this.selectValue}</div>
                    </div>
                </label>
            </Host>
        );
    }
}
