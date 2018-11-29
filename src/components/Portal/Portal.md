
Portal:
```js
<Layout direction="column" styleGuidist>
  <h2>Portal</h2>
  <p>Portal is very usefull to display components directly in other root than main div. Component like Tooltip or Modal used this technique to stop conflict with z-index and overflow.</p>
  <p>Portal need to be wrap in new DIV. By default this div has #id <b>portalRoot</b> so you need to create it with an id in your <b>public/index.html</b> like exemple</p>
  <p>
       div id="root" /div <br/>
       div id="portalRoot" /div
  </p>
  
  <p>You can change id with the props <b>portalRoot: "your id"</b></p>

   <Portal>
     <div style={{
       position: 'fixed', 
       right: '20%', bottom: '50px',
       padding: 30,
       background: '#fff',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
     }}>
       <h2>Check the DOM, this content is in Portal</h2>
     </div> 
   </Portal>
</Layout>
```

