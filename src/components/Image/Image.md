Image:

  * Set the name with props <b>name</b>.
  * You can resize icon with props <b>size</b>.
  * Icon was in SVG.
  * Ask you're MR if you need new icon.

```js
const images = [
  'france',
  'germany',
  'italy',
  'spain',
  'unitedKingdom',
];


<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start'}}>
  {images.map(src => (
    <Image src={src} key={src} />
  ))}
</div>
```
