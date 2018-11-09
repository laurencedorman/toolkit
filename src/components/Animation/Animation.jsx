// @flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Animation = ({ display, timeout, children, className, name }) => {

  const enter = `${name}Enter`;
  const enterActive = `${name}EnterActive`;
  const enterDone = `${name}EnterDone`;
  const exit = `${name}Exit`;
  const exitActive = `${name}ExitActive`;
  const exitDone = `${name}ExitDone`;

  const handleClass = {
    enter: styles[`${name}Enter`],
    enterActive: styles[enterActive],
    enterDone: styles[enterDone],
    exit: styles[exit],
    exitActive: styles[exitActive],
    exitDone: styles[exitDone],
  };

  return(
    <CSSTransition
      in={display}
      timeout={timeout}
      unmountOnExit
      classNames={handleClass}
    >
      {React.cloneElement(children, {...className})}
    </CSSTransition>
  )
};

export default Animation;
