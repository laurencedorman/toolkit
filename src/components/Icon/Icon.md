Icon:

  * Set the name with props <b>name</b>.
  * You can resize icon with props <b>size</b>.
  * Icon was in SVG.
  * Ask you're MR if you need new icon.

```js
const getIcons = require('../../assets/setIcons');

const style = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 100,
  padding: '.5rem',
  margin: '0 .5rem .5rem 0',
  background: '#e8e8e8',
  border: '1px solid #d4d4d4',
  borderRadius: 3,
};

const span = {
  marginTop: 5,
  fontSize: 12,
  textAlign: 'center',
};

<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start'}}>
  <div style={{width: '100%'}}>
    <h4>INTERFACE</h4> 
  </div>
 
  {Object.keys(getIcons.default).map(name => (
    <div style={style} key={name}>
      <IconComponent name={name} />
      <span style={span}>{name}</span>
    </div>
  ))}
</div>
```
