Alert:

```js
const style = {
  alignItem: 'center',
};

<Layout direction="column" styleGuidist>
  <h2>Alert</h2>
  <h4>Display an alert with Hint Component.</h4>
  
  <Card>
  <p><b>Alert</b> component used <b>Toggle</b> component like in exemple to easy display. Read <b>Toggle</b> section to have more informations.
    <b>Alert</b> use <b>Portal</b> component who need some adding to work. Read Portal section to get more informations.</p>
    <ul>
      <li>- Set different theme [ <i>'default' | 'light' | 'danger' | 'menthe' </i> ]</li>
      <li>- Change icon</li>
      <li>- Set timeout in ms to remove automatically alert</li>
      <li>- Set position [ <i>'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft' </i> ]</li>
    </ul>
    <p><i><b>Tips</b>: force toggleOut on toggle props to avoid conflict between close click event and close timeout function </i></p>
  </Card>
  
 <Toggle>
  {({ on, toggle, toggleOut }) => (
   <div>
    <h4>Alert theme "danger" position "topRight" (default position)</h4>
    <Button onClick={toggle}>Click</Button>
    <Alert
      on={on}
      toggle={toggleOut}
      theme="danger"
      textAlert="Lorizzle break it down dolor sit amizzle, bling bling adipiscing bling bling."
      timeout={3000}
    />
   </div>
  )}
 </Toggle>
  <br />
 <Toggle>
   {({ on, toggle, toggleOut }) => (
    <div>
      <h4>Alert theme "default" position "bottomRight"</h4>
     <Button onClick={toggle}>Click</Button>
     <Alert
       on={on}
       toggle={toggleOut}
       textAlert="Lorizzle break it down dolor sit amizzle, bling bling adipiscing bling bling."
       timeout={3000}
       position="bottomRight"
     />
    </div>
   )}
  </Toggle>
  <br />
  <Toggle>
    {({ on, toggle, toggleOut }) => (
     <div>
     <h4>Alert theme "light" position "topLeft"</h4>
      <Button onClick={toggle}>Click</Button>
      <Alert
        on={on}
        toggle={toggleOut}
        theme="light"
        textAlert="Lorizzle break it down dolor sit amizzle, bling bling adipiscing bling bling."
        timeout={3000}
        position="topLeft"
      />
     </div>
    )}
   </Toggle>
    <br />
   <Toggle>
     {({ on, toggle, toggleOut }) => (
      <div>
       <h4>Alert theme "menthe" position "bottomLeft"</h4>
       <Button onClick={toggle}>Click</Button>
       <Alert
         on={on}
         toggle={toggleOut}
         theme="menthe"
         textAlert="Nunc yo arcu. Donec ante. We gonna chung placerizzle mauris at lectus. Morbi fo shizzle tortizzle. Crizzle yo mamma tortor nizzle mi consectetizzle sure. Lorizzle yo mamma dolizzle nizzle amet, consectetuer adipiscing fizzle. Ma nizzle fizzle arcu, things uhuh ... yih!, eleifend izzle, mollizzle in, est. Aliquizzle erat volutpizzle."
         timeout={3000}
         position="bottomLeft"
       />
      </div>
     )}
    </Toggle>
</Layout>
```

