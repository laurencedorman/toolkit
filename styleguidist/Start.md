- Copyright (c) Colibri SAS - ManoMano
- This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.

## Manoolkit

---

### Minimum Requirements

| React | React-DOM | Node |
| ----- | --------- | ---- |
| 16.4  | 16.4      | 8.9  |

<br />

### Installation

```bash
yarn add @manomano/toolkit
```

Then add the className 'toolkit' the most upper element of your project. This is needed to make use of some global styles. Example:

```jsx static
<body className="toolkit">
```

<br/>

### Usage

```js static
import { component } from '@manomano/toolkit';
```

### Warning

Some components have external dependencies that increase the final bundle size.

- React-table(41.29KB)

  - Table

- React-Spring(31.79KB)
  - Alert
  - HeightTransition
  - Modal
  - OptionContainer
  - Overlay
  - Stepper
  - TabBody
  - Tabs
  - ToggleDown
  - Tooltip
