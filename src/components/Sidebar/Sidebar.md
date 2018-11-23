Sidebar: 

    <Toggle>
        {({ on, toggle }) => (
          <div>
            <Button onClick={toggle}>Sidebar</Button>
            <Sidebar  on={on} toggle={toggle} width={300} position="right">
                inside sidebar
            </Sidebar>  
          </div>
        )}
        </Toggle> 
