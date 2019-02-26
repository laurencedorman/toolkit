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

const names = [
  '24h',
  'award',
  'camera',
  'clock',
  'document',
  'delivery-form',
  'drill',
  'edit',
  'eye',
  'help-circle',
  'message-circle',
  'credit-card',
  'free-delivery',
  'heart',
  'heart-full',
  'lock',
  'mail',
  'map-pin',
  'phone',
  'star-empty',
  'star-full',
  'trash',
  'launch',
  'play',
  'stop',
  'account',
  'basket',
  'burger-menu',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-down',
  'close',
  'close-circle',
  'extra',
  'product',
  'promo',
  'search',
  'alert-circle',
  'information-circle',
  'message',
  'trucks',
  'vote',
  'wheel',
  'dotMenu',
  'download',
  'construction',
  'electricite',
  'jardinage',
  'outillage',
  'peinture',
  'plomberie',
  'historical-search',
  'link',
  'tag-promo',
  'trending',
  'facebook',
  'instagram',
  'pinterest',
  'twitter',
  'youtube',
  'abTest',
  'analyse',
  'arrowFullDown',
  'arrowFullLeft',
  'arrowFullRight',
  'arrowFullUp',
  'bankTransfert',
  'barredEye',
  'box',
  'boxes',
  'calendar',
  'circleMinus',
  'circlePlus',
  'content',
  'dragNdrop',
  'featureFlag',
  'filter',
  'label',
  'logOut',
  'marketing',
  'piggyBank',
  'printer',
  'thumbDown',
];


<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start'}}>
  <div style={{width: '100%'}}>
    <h4>INTERFACE</h4> 
  </div>
 
  {names.map(name => (
    <div style={style} key={name}>
      <IconComponent name={name} />
      <span style={span}>{name}</span>
    </div>
  ))}
</div>
```
