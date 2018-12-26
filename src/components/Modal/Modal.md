modal:

```js
const headerContent = (
  'Modal title or Header content'
);

<Layout direction="column" styleGuidist>
  <h2>Modal</h2>
  <p><b>Modal</b> component need to be wrap with <b>Toggle</b> component like in exemple. Read <b>Toggle</b> section to have more informations.</p>
  <p><b>Modal</b> use <b>Portal</b> component who need some adding to work. Read Portal section to get more informations.</p>

 <Toggle>
  {({ on, toggle }) => (
   <div>
    <Button onClick={toggle}>Modal with default footer</Button>
    <Modal on={on} toggle={toggle} header="Modal title or Header content">
      <Wrapper>
      <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. </p>
     </Wrapper>
    </Modal>
   </div>
  )}
 </Toggle>
 
  <br />
  
  <Toggle>
     {({ on, toggle }) => (
      <div>
       <Button onClick={toggle}>Modal without Footer</Button>
       <Modal on={on} toggle={toggle} noFooter>
         <Wrapper>
            <p>Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall. Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum you son of a bizzle, ante. pizzle bibendum maurizzle. in elit izzle augue porta break it down. Nam sed augue. Crazy sagittis. Shit eu lacus quis boofron posuere get down get down. Black own yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo break yo neck, yall lectizzle. Etiam sollicitudizzle for sure sizzle. Bow wow wow mi eros, convallis izzle, pellentesque yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk, facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle, lectizzle. Fusce mauris dang, get down get down shit, adipiscing ut, shiznit sizzle amizzle, dope.</p>
          </Wrapper>
       </Modal>
      </div>
     )}
    </Toggle>
</Layout>

```

```js
const renderComp = () => (
  <Card>
  <h4>I'm a component</h4>
  <p>Another Component displayed in Header as render function props.</p>
  </Card>
);

<Layout direction="column" styleGuidist>
  <h2>Modal</h2>
  <p><b>Modal</b> component need to be wrap with <b>Toggle</b> component like in exemple. Read <b>Toggle</b> section to have more informations.</p>
  <p><b>Modal</b> use <b>Portal</b> component who need some adding to work. Read Portal section to get more informations.</p>

 <Toggle>
  {({ on, toggle }) => (
   <div>
    <Button onClick={toggle}>Modal with default footer</Button>
    <Modal on={on} toggle={toggle} header={renderComp}>
      <Wrapper>
        <p>body render with children</p>
     </Wrapper>
    </Modal>
   </div>
  )}
 </Toggle>
</Layout>
```

