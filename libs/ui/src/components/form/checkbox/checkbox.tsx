import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Prop,
    Watch
} from '@stencil/core';
import { renderHiddenInput } from '../../../utils/helpers';

let checkboxIds = 0;

@Component({
    tag: 'hive-ui-checkbox',
    styleUrl: 'checkbox.scss',
    shadow: true
})
export class Checkbox {
    private inputId = `hive-cb-${checkboxIds++}`;
    private buttonEl?: HTMLElement;

    @Element() el!: HTMLElement;

    @Prop({ reflect: true }) small: boolean;

    /**
     * The name of the control, which is submitted with the form data.
     */
    @Prop() name: string = this.inputId;
    /**
     * The value of the toggle does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
     * it's only used when the toggle participates in a native `<form>`.
     */
    @Prop() value = 'on';
    /**
     * If `true`, the checkbox is selected.
     */
    @Prop({ mutable: true }) checked = false;
    /**
     * If `true`, the user cannot interact with the checkbox.
     */
    @Prop() disabled = false;
    /**
     * Emitted when the checked property has changed.
     */
    @Event() hiveChange!: EventEmitter<any>;

    /**
     * Emitted when the toggle has focus.
     */
    @Event() hiveFocus!: EventEmitter<void>;

    /**
     * Emitted when the toggle loses focus.
     */
    @Event() hiveBlur!: EventEmitter<void>;

    @Watch('checked')
    checkedChanged(isChecked: boolean) {
        this.hiveChange.emit({
            checked: isChecked,
            value: this.value
        });
    }

    private setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }

    private onClick = () => {
        this.setFocus();
        this.checked = !this.checked;
    };

    private onFocus = () => {
        this.hiveFocus.emit();
    };

    private onBlur = () => {
        this.hiveBlur.emit();
    };

    render() {
        const { inputId, disabled, checked, value, el } = this;
        const labelId = inputId + '-lbl';
        renderHiddenInput(true, el, this.name, checked ? value : '', disabled);
        return (
            <Host
                onClick={this.onClick}
                role="checkbox"
                aria-disabled={disabled ? 'true' : null}
                aria-checked={`${checked}`}
                aria-labelledby={labelId}
                class={{
                    'checkbox-checked': checked,
                    'checkbox-disabled': disabled,
                    interactive: true
                }}
            >
                <svg width="16px" height="16px" viewBox="0 0 16 16">
                    <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                    >
                        <path
                            d="M15.5035074,4.80691556 L7.07797044,13.4737939 C6.45404926,14.1157534 5.44195074,14.1157534 4.81743842,13.4737939 L0.468118227,8.9992534 C-0.156039409,8.35729394 -0.156039409,7.31601015 0.468118227,6.67392907 C1.09239409,6.03172637 2.10441379,6.03172637 2.72841379,6.67368583 L5.94803941,9.98580745 L13.2428571,2.48146961 C13.867133,1.83926691 14.8792315,1.8397534 15.5032709,2.48146961 C16.1273103,3.12355069 16.1273103,4.16446961 15.5035074,4.80691556 Z"
                            fill-rule="nonzero"
                        />
                    </g>
                </svg>
                <button
                    type="button"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    disabled={this.disabled}
                    ref={btnEl => (this.buttonEl = btnEl)}
                />
            </Host>
        );
    }
}
