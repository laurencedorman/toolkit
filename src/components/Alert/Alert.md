
modal default :
```js
initialState = {
  show: false,
};

<div>
<button onClick={() => setState({ show: true })}>Open Alert</button>

<Alert
  showAlert={state.show}
  handleClose={() => setState({ show: false })}
  textAlert="My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is."
/>
</div>


```