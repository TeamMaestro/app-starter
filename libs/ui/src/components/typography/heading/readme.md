# hive-ui-heading



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                           | Type                                                                                                                                                                                                                                                                                     | Default     |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `base`     | `base`      |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `bold`     | `bold`      |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `color`    | `color`     | The primary color of the label. Uses the branded CSS variables that are globally available to the application.        | `"app-light-gray" \| "black" \| "blue" \| "charcoal" \| "dark-blue" \| "dark-gray" \| "gold" \| "light-blue" \| "light-gray" \| "light-green" \| "magenta" \| "medium-blue" \| "medium-gray" \| "medium-green" \| "medium-yellow" \| "mint" \| "purple" \| "red" \| "white" \| "yellow"` | `undefined` |
| `large`    | `large`     |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `maxLines` | `max-lines` | The maximum lines to display before truncating the text. Default behavior shows all lines of text with no truncation. | `number`                                                                                                                                                                                                                                                                                 | `undefined` |
| `medium`   | `medium`    |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `small`    | `small`     |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `xbold`    | `xbold`     |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `xlarge`   | `xlarge`    |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `xsmall`   | `xsmall`    |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |
| `xxlarge`  | `xxlarge`   |                                                                                                                       | `boolean`                                                                                                                                                                                                                                                                                | `undefined` |


## CSS Custom Properties

| Name            | Description                |
| --------------- | -------------------------- |
| `--font-family` | Font family of the heading |


## Dependencies

### Used by

 - [hive-ui-checklist](../../form/checklist)

### Depends on

- [hive-ui-label](../label)

### Graph
```mermaid
graph TD;
  hive-ui-heading --> hive-ui-label
  hive-ui-checklist --> hive-ui-heading
  style hive-ui-heading fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
