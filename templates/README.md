# __PACKAGE__/__COMPONENT__

<div style="margin: 16px 0px 8px 0px">
<a href="https://github.com/pinax-network/ui/issues" target="_blank" rel="noreferrer">
<img src="../../assets/readme/todo.svg" height="32" style="margin-right: 8px"/></a>
<a href="https://www.w3.org/WAI/ARIA/apg/patterns/__COMPONENT__" target="_blank" rel="noreferrer">
<img src="../../assets/readme/accessibility.svg" height="32" style="margin-right: 8px"/></a>
<a href="https://www.figma.com/file/w5x2IqZCw3Y1BYQGKJwPb2/PINAX-Web-Platform" target="_blank" rel="noreferrer">
<img src="../../assets/readme/figma.svg" height="32" style="margin-right: 8px"/></a>
</div>

`TODO` Description of the __COMPONENT__ component.

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Styling](#styling)

## Installation

```shell
npm install __PACKAGE__/__COMPONENT__
```
or
```shell
yarn install __PACKAGE__/__COMPONENT__
```

## Usage

```ts
import __COMPONENT__ from "__PACKAGE__/__COMPONENT__";

<__COMPONENT__/>
```

### API

#### __COMPONENT__

| Name              | Type        | Default | Description                                                    |
| ----------------- | ----------- | ------- | -------------------------------------------------------------- |
| `children`        | Node        |         | Content wrapped by the badge                                   |
| `className`       | string      |         | Additional class names to apply to the component.              |
| `color`           | `primary`, `secondary`, `warning`,`danger`, `light` | `dark` | Color of the component. |
| `disabled`        | boolean     | `false` | If true, the component will be disabled.                       |
| `endContent`      | Node        |         | Content to display after the content of the component.         |
| `endIcon`         | [Icon](../Icons/README.md) || Icon to display after the content.                       |
| `startContent`    | Node        |         | Content to display before the content of the component.        |
| `startIcon`       | [Icon](../Icons/README.md) || Icon to display before the content.                      |
| `style`           | object      |         | Additional styles to apply to the component.                   |
| `variant`         | `filled`, `outlined` || Variant of the component.                                      |

## Styling

The component can be styled by passing a `className` or `style` prop.
As any other Pinax component, they were designed to fit our branding and integrate well with other components,
so we recommend using styling only for position adjustments.

If you think the component's style doesn't fit your needs, please [open an issue](https://github.com/pinax-network/ui/issues/new/choose).
