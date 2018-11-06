


modal with props trigger :
```js
initialState = {
  show: false,
};

<div id="root">
    <button onClick={() => setState({ show: true })}>open by controlled props</button>
    <Modal
      open={state.show}
      close={() => setState({ show: false })}>
      <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.</p>
    </Modal>
</div>
```
