import { Component, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent } from '../../../utils/helpers';

@Component({
    tag: 'hive-ui-search-bar',
    styleUrl: 'search-bar.scss',
    shadow:  true
})
export class SearchBarComponent {

    private nativeInput?: HTMLInputElement;

    @State() focused = false;
    /**
     * Sets the input's placeholder.
     */
    @Prop() placeholder: string;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `hiveChange` event after each keystroke.
     */
    @Prop() debounce = 250;
    /**
     * If `true`, the user cannot interact with the input.
     */
    @Prop() disabled = false;
    /**
     * The value of the search bar.
     */
    @Prop({ mutable: true }) value?: string | null = '';
    /**
     * Auto focuses the search bar.
     */
    @Prop() autofocus = true;
    /**
     * Emitted when the keyboard input ocurred.
     */
    @Event() hiveInput!: EventEmitter<KeyboardEvent>;
    /**
     * Emitted when the value has changed.
     */
    @Event() hiveChange!: EventEmitter<any>;
    /**
     * Emitted when the input loses focus.
     */
    @Event() hiveBlur!: EventEmitter<void>;
    /**
     * Emitted when the input has focus.
     */
    @Event() hiveFocus!: EventEmitter<void>;

    @Watch('debounce')
    protected debounceChanged() {
        this.hiveChange = debounceEvent(this.hiveChange, this.debounce);
    }

    @Watch('value')
    protected valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.hiveChange.emit({ value });
    }

    componentDidLoad() {
        this.debounceChanged();
        setTimeout(() => {
            if (this.autofocus) {
                this.setFocus();
            }
        }, 300);
    }

    /**
     * Sets focus on the specified `hive-ui-search-bar`. Use this method instead of the global
     * `input.focus()`.
     */
    @Method()
    async setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }

    private getValue() {
        return this.value || '';
    }

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = input.value;
        }
        this.hiveInput.emit(ev as KeyboardEvent);
    }

    private onBlur = () => {
        this.focused = false;
        this.hiveBlur.emit();
    }

    private onFocus = () => {
        this.focused = true;
        this.hiveFocus.emit();
    }

    render() {
        const { placeholder, disabled, value } = this;
        return (
            <div class='search-bar'>
                <input
                    type='search'
                    disabled={disabled}
                    value={value}
                    ref={el => this.nativeInput = el}
                    onInput={this.onInput}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    placeholder={placeholder} />
                <hive-ui-icon name='search' color='medium-gray'></hive-ui-icon>
            </div>
        );
    }

}
