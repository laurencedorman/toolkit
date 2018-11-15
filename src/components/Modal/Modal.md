
modal:

    <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle}>
          <h3>Check the DOM! I'm a Modal in Portal</h3>
          <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. </p>
        </Modal>
      </div>
    )}
  

