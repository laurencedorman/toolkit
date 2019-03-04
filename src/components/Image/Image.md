Image:

  * Set the name with props <b>name</b>.
  * You can resize icon with props <b>size</b>.
  * Ask you're MR if you need new icon.

```js
const getImg = require('../../assets/setImg');

const style = {
  margin: '0 8px 8px 0',
};

<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start'}}>
  {Object.keys(getImg.default).map(src => (
    <Image src={src} key={src} style={style} />
  ))}
</div>
```
