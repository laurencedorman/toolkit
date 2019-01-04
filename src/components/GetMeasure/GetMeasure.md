GetMeasure:

  * Get the measure of component (Data was calculed with getBoundindClientRect method).
  * All data was includes in object.
  * Use as render child method (Check code of exemple).
  * Just set a `ref={ref}` on target who need measure.
  * Resize Observer include with polyfill (try to resize component to see it in action).

```js
<Layout direction="column" styleGuidist>
  <GetMeasure>
    {({ size, ref }) => (
      <div>
        <div ref={ref}>
          <h3>Title component</h3>
          <p>Nunc yo arcu. Donec ante. We gonna chung placerizzle mauris at lectus. Morbi fo shizzle tortizzle. Crizzle yo mamma tortor nizzle mi consectetizzle sure. Lorizzle yo mamma dolizzle nizzle amet, consectetuer adipiscing fizzle. Ma nizzle fizzle arcu, things uhuh ... yih!, eleifend izzle, mollizzle in, est. Aliquizzle erat volutpizzle. Uhuh ... yih! tempizzle gangster turpis. Suspendisse aliquizzle. Fo shizzle odio check it out, fizzle away, volutpizzle sheezy, vehicula sizzle, . Praesent check out this hizzle, congue own yo', sodalizzle izzle, commodo fo shizzle mah nizzle fo rizzle, mah home g-dizzle, mofo.</p>
        </div>
        <br />
       <pre>Measure of this content: {JSON.stringify(size, null, 2)}</pre>
      </div>
    )}
  </GetMeasure>
</Layout>
```
