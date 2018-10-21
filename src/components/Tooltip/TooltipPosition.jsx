const TooltipPosition = (ref, position) => {
  const { top, left, width, right, height } = ref.getBoundingClientRect();
  const space = 12;
  const lateralPositionWidth = 176;
  const bottomSpace = document.body.clientHeight - top - window.scrollY;

  const topStyle = {
    bottom: bottomSpace + space,
    left: left + width / 2 + window.scrollX,
  };

  const leftStyle = {
    bottom: bottomSpace - space,
    left: left - lateralPositionWidth,
  };

  const rightStyle = {
    bottom: bottomSpace - space,
    right: right - lateralPositionWidth,
  };

  const bottomStyle = {
    bottom: bottomSpace - (height * 3),
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