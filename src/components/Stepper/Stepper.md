Stepper: 

  * Stepper with automatic transition.
  * Need function to increment/decrement activeStep props (You can use <b>StepControler</b> component).
  * Set step and label on every children to display automatically step indicator.
  * Step has props to pass validation design (Check step component).


Stepper without controler :

```js
<Stepper>
  <div step="1" label="One">
    <h4>step 1 container</h4>
    <p>This is step One container</p>
  </div>
 
</Stepper>
```

Stepper with StepControler and Toggle components exemple :

  * I combine Stepper, StepControler, Toggle and differents tricks to show some possibilities. You can reproduce or choose an other way
  * Check StepControler and Toggle section to read methods and use case.

```js
const click = (next, toggle, lastStep) => {
  lastStep && toggle();
  next();
};

<Toggle>
  {({ on, toggle }) => (
    <StepControler>
      {({ prevStep, nextStep, activeStep, setTotalStep, direction, lastStep, totalStep }) => (
        <div>
          <Stepper activeStep={activeStep} getLength={setTotalStep} direction={direction}>
            <div step="1" label="One">
              <h4>step 1 container</h4>
              <p>This is step One container</p>
            </div>

            <div step="2" label="Two">
              <h4>step 2 container</h4>
              <p>This is step Two container</p>
            </div>

            <div step="3" label="Three">
              <h4>step 3 container</h4>
              <p>This is step Three container</p>
            </div>

            <div step="4" label="Four" done={lastStep ? 1 : 0}>
              <h4>step 4 container</h4>
              <p>This is step Three container</p>
            </div>
          </Stepper>

          <div>
            <Button 
              style={{marginRight: 16 }}
              disabled={activeStep === 0}
              onClick={prevStep}
            >
              Prev
            </Button>
            <Button
              onClick={() => click(nextStep, toggle, activeStep === totalStep - 1)}
              disabled={lastStep}
            >
              {activeStep !== totalStep - 1 ? 'Next' : lastStep ? 'Done' :  'Send'}
            </Button>
          </div>
          <Modal on={on} toggle={toggle}>
            <Wrapper>
              <p>Successfull</p>
            </Wrapper>
          </Modal> 
        </div>
      )}
    </StepControler>
  )}
</Toggle>
```

Stepper with controler extension and step initilization  :

```js
<StepControler getActiveStep={2}>
  {({ prevStep, nextStep, activeStep, setTotalStep, direction }) => (
    <div>

    <Stepper activeStep={activeStep} getLength={setTotalStep} direction={direction}>
      <div step="1" label="One">
        <h4>step 1 container</h4>
        <p>This is step One container</p>
      </div>

      <div step="2" label="Two">
        <h4>step 2 container</h4>
        <p>This is step Two container</p>
      </div>

      <div step="3" label="Three">
        <h4>Start at step 3 container</h4>
        <p>This is step Three container</p>
      </div>

      <div step="4" label="Four">
        <h4>step 4 container</h4>
        <p>This is step Four container</p>
      </div>
       <div step="5" label="Five">
          <h4>step 5 container</h4>
          <p>This is step Five container</p>
        </div>
    </Stepper>

    <div>
      <Button  style={{marginRight: 16 }} onClick={prevStep}>Prev</Button>
      <Button onClick={nextStep}>Next</Button>
    </div>
    </div>
  )}
</StepControler>
```
