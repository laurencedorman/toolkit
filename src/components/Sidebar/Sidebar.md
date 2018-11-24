Sidebar: 

    <Toggle>
        {({ on, toggle }) => (
         <div>
            <Button onClick={toggle}>Sidebar</Button>
            <Sidebar  on={on} toggle={toggle} width="200px" position="left">
                inside sidebar
            </Sidebar>  
          </div>          
        )}
    </Toggle> 
    
    <Toggle>
        {({ on, toggle }) => (
            <div>
            
                <Button onClick={toggle}>Sidebar Right</Button>
                <Sidebar  on={on} toggle={toggle} width="300px" position="right">
                  inside sidebar
                </Sidebar>  
              </div>
        )}
    </Toggle> 
        
      
