Overlay :

```js
import Button from '../Button';
import Toggle from '../Toggle';

<Toggle>
  {({on, toggle}) => (
    <div>
      <Button onClick={toggle}>Open overlay</Button>
      <Overlay onClick={toggle} on={on} />
    </div>
  )}
</Toggle>

```
