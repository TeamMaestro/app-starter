# hive-ui-toggle

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                           | Type      | Default        |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `checked`  | `checked`  | If `true`, the checkbox is selected                                                                                                                                                                                                                   | `boolean` | `false`        |
| `disabled` | `disabled` | If `true`, the user cannot interact with the segment button.                                                                                                                                                                                          | `boolean` | `false`        |
| `name`     | `name`     | The name of the control, which is submitted with the form data.                                                                                                                                                                                       | `string`  | `this.inputId` |
| `value`    | `value`    | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`. | `string`  | `'on'`         |


## Events

| Event        | Description                            | Type               |
| ------------ | -------------------------------------- | ------------------ |
| `hiveChange` | Emitted when a new option is selected. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
