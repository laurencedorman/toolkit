StepperControl with RenderChild pattern :
  
State to Props | Type | Description
-------------- | ---- | -----------
prevStep | func | Decrement (-1)
nextStep |func | Increment (+1)
setTotalStep | func | Set total children of controled target
activeStep | number | index od active step
direction | string | 'up' or 'down
lastStep | boolean | true when last step is active
totalStep | number | return total step (use setTotalStep before to set number)



```js
<StepControler>
  {({ prevStep, nextStep, activeStep, setTotalStep }) => (
    <Wrapper direction="row" style={{ alignItems: 'center', justifyContent: 'space-around' }}>
      <Button onClick={prevStep}>previous step</Button>
      <Card>{activeStep}</Card>
      <Button onClick={nextStep}>next step</Button>
    </Wrapper>
  )}
</StepControler>
```
