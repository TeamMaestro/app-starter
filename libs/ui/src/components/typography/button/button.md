## Button

The button component is responsible for rendering a branded button.

### Default Button

```html
showSource: true
---
<ui-button>Default Button</ui-button>
```

### Active Button

```html
showSource: true
---
<ui-button active>Active Button</ui-button>
```

### Primary Button
```html
showSource: true
---
<ui-button primary>Primary Button</ui-button>
```

### Link Button

```html
showSource: true
---
<ui-button type="link" active>Link Button</ui-button>
```

### Properties

```table
rows:
    - Property: type
      Type: '`button`|`submit`|`link`'
      Default: button
    - Property: active
      Type: '`boolean`'
      Default: 'false'
```

### CSS Variables

```table
rows:
    - Variable: '`--button-min-height`'
      Value: '42px'
    - Variable: '`--button-border-radius`'
      Value: '4px'
    - Variable: '`--button-background`'
      Value: '`var(--grey900)`'
    - Variable: '`--button-border-color`'
      Value: '`var(--slate900)`'
    - Variable: '`--button-font-weight`'
      Value: 'bold'
    - Variable: '`--button-font-size`'
      Value: '16px'
    - Variable: '`--button-text-color`'
      Value: '`var(--slate700)`'
    - Variable: '`--button-active-text-color`'
      Value: '`var(--branding-color)`'
    - Variable: '`--button-hover-background`'
      Value: '`var(--grey800)`'
    - Variable: '`--button-link-background`'
      Value: '`transparent`'
    - Variable: '`--primary-background`'
      Value: '`var(--branding-color)`'
    - Variable: '`--primary-text-color`'
      Value: '`var(--grey900)`'
```
