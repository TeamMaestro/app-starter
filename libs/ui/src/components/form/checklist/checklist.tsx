import { Component, Element, Event, EventEmitter, h, Method, Prop } from '@stencil/core';
import { CheckListItems } from './checklist-items';

@Component({
    tag: 'hive-ui-checklist',
    styleUrl: 'checklist.scss',
    shadow: true
})
export class CheckList {
    /**
     * Used to access the shadow route and clear boxes.
     */
    @Element() el!: Element;
    /**
     * The  interface for each option to keep track of its value.
     */
    @Prop() item: CheckListItems;
    /**
     * The array that is used to display the options that can be checked.
     */
    @Prop() items: CheckListItems[] = [];
    /**
     * The array that is updated and emitted on each checklist item select.
     */
    @Prop() select = [];
    /**
     * Emitted when a checkbox is checked or clear function is used.
     */
    @Event() hiveChange: EventEmitter;

    /**
     * The value of the item connected to the checkbox.
     */
    @Prop({ mutable: true }) value?: any | null;

    @Method()
    async clear() {
        const checkboxes = this.el.shadowRoot.querySelectorAll(
            'hive-ui-checkbox'
        );
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        this.select.splice(0, this.select.length);
    }

    handleSelect(item: CheckListItems) {
        const value = item.value;

        if (!this.select.includes(value)) {
            this.select.push(value);
        } else if (this.select.includes(value)) {
            this.select.splice(this.select.indexOf(value));
        } else {
            return null;
        }
        this.hiveChange.emit(this.select);
    }

    buildItems() {
        if (this.items.length > 0) {
            this.items.forEach(item => {
                this.items.push(this.buildItem(item));
            });
        }
        return this.items;
    }

    buildItem(item: CheckListItems) {
        if (item.badge) {
            return (
                <div class='item-wrapper'>
                    <hive-ui-checkbox
                        small
                        onClick={() => this.handleSelect(item)}
                    />
                    <hive-ui-heading small medium color='medium-gray'>
                        {item.text}
                    </hive-ui-heading>
                    <div class='outer-box'>
                        <div class='background' />
                        <hive-ui-badge color='gold'>
                            <hive-ui-icon name='alert' />
                        </hive-ui-badge>
                        <hive-ui-heading small medium color='gold'>
                            {item.badgeNumber}
                        </hive-ui-heading>
                    </div>
                </div>
            );
        } else {
            return (
                <div class='item-wrapper'>
                    <hive-ui-checkbox
                        small
                        onClick={() => this.handleSelect(item)}
                    />
                    <hive-ui-heading small medium color='medium-gray'>
                        {item.text}
                    </hive-ui-heading>
                    <span />
                </div>
            );
        }
    }

    render() {
        return <div class='wrapper'>{this.buildItems()}</div>;
    }
}
