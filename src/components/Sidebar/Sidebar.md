Sidebar: 

    
    <Toggle>
        {({ on, toggle }) => (
         <div>
            <Button onClick={toggle}>Sidebar</Button>
            <Sidebar  on={on} toggle={toggle} width="200px" position="left">
                <h1>Sidebar width 200px</h1>
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
                  <h1>Sidebar 50% </h1>
                  <Button onClick={toggle}>Close trigger</Button>
                </Sidebar>  
             </div>
        )}
    </Toggle> 
        
      
