Sidebar:

 * Sidebar use Portal component, check Portal section to add configuration.
 * Choose width Sidebar with props as a string, you can precise units like `px` or `%` for exemple.


```js
<Toggle>
    {({ on, toggle }) => (
     <div>
        <h4>Sidebar left (default position)</h4>
        <Button onClick={toggle}>sidebar</Button>
        <Sidebar on={on} toggle={toggle} width="200px">
            <h4>Sidebar width 200px</h4>
            <Button onClick={toggle}>Close trigger</Button>
        </Sidebar>  
      </div>          
    )}
</Toggle> 
```
    
```js
<Toggle>
    {({ on, toggle }) => (
        <div>
        <h4>Sidebar Right</h4>
            <Button onClick={toggle}>Sidebar</Button>
            <Sidebar  on={on} toggle={toggle} width="50%" position="right">
              <h4>Sidebar width 50% </h4>
              <Button onClick={toggle}>Close trigger</Button>
            </Sidebar>  
         </div>
    )}
</Toggle> 
```
        
      
