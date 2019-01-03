Icon:

  * Set the name with props <b>name</b>.
  * You can resize icon with props <b>size</b>.
  * Icon was in SVG.
  * Ask you're MR if you need new icon.

```js
const style = {
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: 85,
  height: 85,
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
 
<div style={style}>
<IconComponent name="24h" />
<span style={span}>24h</span>
</div>

<div style={style}> 
<IconComponent name="award" />
<span style={span}>award</span>
</div>

<div style={style}> 
 <IconComponent name="camera" />
<span style={span}>camera</span>
</div>

<div style={style}> 
<IconComponent name="clock" />
<span style={span}>clock</span>
</div>

<div style={style}> 
 <IconComponent name="document" />
<span style={span}>document</span>
</div>

<div style={style}> 
 <IconComponent name="drill" />
<span style={span}>drill</span>
</div>

<div style={style}> 
 <IconComponent name="edit" />
<span style={span}>edit</span>
</div>

<div style={style}>
  <IconComponent name="eye" />
  <span style={span}>eye</span>
</div>

<div style={style}>
  <IconComponent name="help-circle" />
  <span style={span}>help-circle</span>
</div>

<div style={style}>
  <IconComponent name="message-circle" />
  <span style={span}>message-circle</span>
</div>

<div style={style}>
  <IconComponent name="credit-card" />
  <span style={span}>credit-card</span>
</div>

<div style={style}>
  <IconComponent name="free-delivery" />
  <span style={span}>free-delivery</span>
</div>

<div style={style}>
  <IconComponent name="heart" />
  <span style={span}>heart</span>
</div>

<div style={style}>
  <IconComponent name="heart-full" />
  <span style={span}>heart-full</span>
</div>

<div style={style}>
  <IconComponent name="lock" />
  <span style={span}>lock</span>
</div>

<div style={style}>
  <IconComponent name="mail" />
  <span style={span}>mail</span>
</div>

<div style={style}>
  <IconComponent name="map-pin" />
  <span style={span}>map-pin</span>
</div>

<div style={style}>
  <IconComponent name="phone" />
  <span style={span}>phone</span>
</div>

<div style={style}>
  <IconComponent name="star-empty" />
  <span style={span}>star-empty</span>
</div>

<div style={style}>
  <IconComponent name="star-full" />
  <span style={span}>star-full</span>
</div>

<div style={style}>
  <IconComponent name="trash" />
  <span style={span}>trash</span>
</div>

<div style={{width: '100%', marginTop: '1rem'}}>
  <h4>NAVIGATION</h4> 
</div>

<div style={style}>
  <IconComponent name="account" />
  <span style={span}>account</span>
</div>

<div style={style}>
  <IconComponent name="basket" />
  <span style={span}>basket</span>
</div>

<div style={style}>
  <IconComponent name="burger-menu" />
  <span style={span}>burger-menu</span>
</div>

<div style={style}>
  <IconComponent name="chevron-left" />
  <span style={span}>chevron-left</span>
</div>

<div style={style}>
  <IconComponent name="chevron-right" />
  <span style={span}>chevron-right</span>
</div>

<div style={style}>
  <IconComponent name="close" />
  <span style={span}>close</span>
</div>

<div style={style}>
  <IconComponent name="close-circle" />
  <span style={span}>close-circle</span>
</div>

<div style={style}>
  <IconComponent name="extra" />
  <span style={span}>extra</span>
</div>

<div style={style}>
  <IconComponent name="product" />
  <span style={span}>product</span>
</div>

<div style={style}>
  <IconComponent name="promo" />
  <span style={span}>promo</span>
</div>

<div style={style}>
  <IconComponent name="search" />
  <span style={span}>search</span>
</div>

<div style={{width: '100%', marginTop: '1rem'}}>
  <h4>DIVERS</h4> 
</div>

<div style={style}>
  <IconComponent name="alert-circle" />
  <span style={span}>alert-circle</span>
</div>
<div style={style}>
  <IconComponent name="information-circle" />
  <span style={span}>information-circle</span>
</div>
<div style={style}>
  <IconComponent name="message" />
  <span style={span}>message</span>
</div>
<div style={style}>
  <IconComponent name="trucks" />
  <span style={span}>trucks</span>
</div>
<div style={style}>
  <IconComponent name="vote" />
  <span style={span}>vote</span>
</div>
<div style={style}> 
  <IconComponent name="wheel" />
  <span style={span}>wheel</span>
</div>
<div style={style}> 
  <IconComponent name="dotMenu" />
  <span style={span}>dotMenu</span>
</div>
<div style={style}> 
  <IconComponent name="download" />
  <span style={span}>download</span>
</div>

<div style={{width: '100%', marginTop: '1rem'}}>
  <h4>CATEGORIE</h4> 
</div>

<div style={style}>
  <IconComponent name="construction" />
  <span style={span}>construction</span>
</div>
<div style={style}>
  <IconComponent name="electricite" />
  <span style={span}>electricite</span>
</div>
<div style={style}>
  <IconComponent name="jardinage" />
  <span style={span}>jardinage</span>
</div>
<div style={style}>
  <IconComponent name="outillage" />
  <span style={span}>outillage</span>
</div>
<div style={style}>
  <IconComponent name="peinture" />
  <span style={span}>peinture</span>
</div>
<div style={style}>
  <IconComponent name="plomberie" />
  <span style={span}>plomberie</span>
</div>

<div style={{width: '100%', marginTop: '1rem'}}>
  <h4>SEARCH BAR</h4> 
</div>

<div style={style}>
  <IconComponent name="historical-search" />
  <span style={span}>historical-search</span>
</div>
<div style={style}>
  <IconComponent name="link" />
  <span style={span}>link</span>
</div>
<div style={style}>
  <IconComponent name="tag-promo" />
  <span style={span}>tag-promo</span>
</div>
<div style={style}>
    <IconComponent name="trending" />
    <span style={span}>trending</span>
</div>

<div style={{width: '100%', marginTop: '1rem'}}>
  <h4>SOCIAL</h4> 
</div>

<div style={style}>
<IconComponent name="facebook" />
<span style={span}>facebook</span>
</div>

<div style={style}>
<IconComponent name="instagram" />
<span style={span}>instagram</span>
</div>

<div style={style}>
<IconComponent name="pinterest" />
<span style={span}>pinterest</span>
</div>

<div style={style}>
<IconComponent name="twitter" />
<span style={span}>twitter</span>
</div>

<div style={style}>
<IconComponent name="youtube" />
<span style={span}>youtube</span>
</div>

</div>


```
