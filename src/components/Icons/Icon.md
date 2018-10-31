Icon:
```js
const style = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: 80,
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
  <h2>INTERFACE</h2> 
</div>
 
<div style={style}>
<Icon name="24h" />
<span style={span}>24h</span>
</div>

<div style={style}> 
<Icon name="award" />
<span style={span}>award</span>
</div>

<div style={style}> 
 <Icon name="camera" />
<span style={span}>camera</span>
</div>

<div style={style}> 
<Icon name="clock" />
<span style={span}>clock</span>
</div>

<div style={style}> 
 <Icon name="document" />
<span style={span}>document</span>
</div>

<div style={style}> 
 <Icon name="drill" />
<span style={span}>drill</span>
</div>

<div style={style}> 
 <Icon name="edit" />
<span style={span}>edit</span>
</div>

<div style={style}>
  <Icon name="eye" />
  <span style={span}>eye</span>
</div>

<div style={style}>
  <Icon name="help-circle" />
  <span style={span}>help-circle</span>
</div>

<div style={style}>
  <Icon name="message-circle" />
  <span style={span}>message-circle</span>
</div>

<div style={style}>
  <Icon name="credit-card" />
  <span style={span}>credit-card</span>
</div>

<div style={style}>
  <Icon name="free-delivery" />
  <span style={span}>free-delivery</span>
</div>

<div style={style}>
  <Icon name="heart" />
  <span style={span}>heart</span>
</div>

<div style={style}>
  <Icon name="heart-full" />
  <span style={span}>heart-full</span>
</div>

<div style={style}>
  <Icon name="lock" />
  <span style={span}>lock</span>
</div>

<div style={style}>
  <Icon name="mail" />
  <span style={span}>mail</span>
</div>

<div style={style}>
  <Icon name="phone" />
  <span style={span}>phone</span>
</div>

<div style={style}>
  <Icon name="star-empty" />
  <span style={span}>star-empty</span>
</div>

<div style={style}>
  <Icon name="star-full" />
  <span style={span}>star-full</span>
</div>

<div style={style}>
  <Icon name="trash" />
  <span style={span}>trash</span>
</div>
</div>


```
