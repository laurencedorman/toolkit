Sidebar: 

    <Toggle>
        {({ on, toggle }) => (
         <div>
            <Button onClick={toggle}>Sidebar</Button>
            <Sidebar on={on} toggle={toggle} width="200px" position="left">
                <h4>Sidebar width 200px</h4>
                <Button onClick={toggle}>Close trigger</Button>
            </Sidebar>  
          </div>          
        )}
    </Toggle> 
    
    
Sidebar Right
    
    <Toggle>
        {({ on, toggle }) => (
            <div>
                <Button onClick={toggle}>Sidebar Right</Button>
                <Sidebar  on={on} toggle={toggle} width="50%" position="right">
                  <h4>Sidebar width 50% </h4>
                  <Button onClick={toggle}>Close trigger</Button>
                </Sidebar>  
             </div>
        )}
    </Toggle> 
        
      
