import React from 'react';

const TooltipPosition = (ref, position) => {
  const { top, left, width, right, height } = ref.getBoundingClientRect();
  const space = 12;
  const lateralPositionWidth = 176;

  const topStyle = {
    bottom: document.body.clientHeight - top - window.scrollY + space,
    left: left + width / 2 + window.scrollX,
  };

  const leftStyle = {
    bottom: document.body.clientHeight - top - window.scrollY - space,
    left: left - lateralPositionWidth,
  };

  const rightStyle = {
    bottom: document.body.clientHeight - top - window.scrollY - space,
    right: right - lateralPositionWidth,
  };

  const bottomStyle = {
    bottom: document.body.clientHeight - top - window.scrollY - (height * 3),
    left: left + width / 2 + window.scrollX,
  };

  switch(position) {
    case 'top': return topStyle;
    case 'left': return leftStyle;
    case 'right': return rightStyle;
    case 'bottom': return bottomStyle;
    default: return topStyle
  }
};

export default TooltipPosition;