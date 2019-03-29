- Copyright (c) Colibri SAS - ManoMano
- This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.

## Manoolkit

##### version 0.1.0

---

### Minimum Requirements

| React | React-DOM | Node |
| ----- | --------- | ---- |
| 16.4  | 16.4      | 8.9  |

<br />

### Installation

- Go to your package.json and add in dependencies:

`"mano-toolkit": "git+ssh://git@bitbucket.org:mano_mano/toolkit.manomano-lan.com.git"`

- Next, in your terminal execute:

`yarn install`

<br/>

### Usage

`import { component } from 'mano-toolkit';`

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
  - Tabs
  - TabBody
  - ToggleDown
  - Tooltip
