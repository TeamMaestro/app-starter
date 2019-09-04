# hive-ui-segment-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                  | Type                   | Default                |
| ---------- | ---------- | ------------------------------------------------------------ | ---------------------- | ---------------------- |
| `checked`  | `checked`  | If `true`, the segment button is selected                    | `boolean`              | `false`                |
| `disabled` | `disabled` | If `true`, the user cannot interact with the segment button. | `boolean`              | `false`                |
| `type`     | `type`     | The type of the button                                       | `"button" \| "submit"` | `'button'`             |
| `value`    | `value`    | The value of the segment button.                             | `string`               | `'hive-sb-' + (ids++)` |


## Events

| Event        | Description                                 | Type                |
| ------------ | ------------------------------------------- | ------------------- |
| `hiveSelect` | Emitted when the segment button is clicked. | `CustomEvent<void>` |


## CSS Custom Properties

| Name                       | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `--background-color`       | The background color of the initial state of the button. |
| `--background-color-hover` | The hover background color of the button.                |
| `--border-radius`          | The border radius of each edge of the button.            |
| `--color`                  | The foreground color of the initial state of the button. |
| `--color-hover`            | The hover foreground color of the button text.           |
| `--font-size`              | The font size of the button.                             |
| `--height`                 | The height of the button.                                |
| `--min-width`              | The minimum width of the button.                         |
| `--text-transform`         | The transformation style for the text of the button.     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
