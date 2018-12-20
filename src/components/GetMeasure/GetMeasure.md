GetMeasure:
```js

<Layout direction="column" styleGuidist>
  <h2>GetMeasure</h2>
  
  <GetMeasure>
    {({ size }) => (
      <div>
       <p>This component get the measure of his child with combinated getBoundindClientRect and render child method. You have access to all property in object.</p>
       <p>This component is combined with a size observer. Try to resize component to see it in action.</p>
       <pre>Measure of this content: {JSON.stringify(size, null, 2)}</pre>
      </div>
    )}
  </GetMeasure>

</Layout>

```
