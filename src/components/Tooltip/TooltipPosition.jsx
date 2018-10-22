
export const tooltipPositionCheck = (ref, position) => {
  const { top, left, right, bottom } = ref.getBoundingClientRect();
  const requiredSpace = 100;

  if (window.innerWidth - right < requiredSpace || position === 'left') return 'left';
  else if (left < requiredSpace || position === 'right') return 'right';
  else if (top < requiredSpace || position === 'bottom') return 'bottom';
  else if (window.innerHeight - bottom < requiredSpace || position === 'top') return 'top';
  return null;
};

export const tooltipPosition = (ref, position) => {
  const { top, left, width, height } = ref.getBoundingClientRect();
  const space = 16;
  const tooltipWidth = 176;
  const bottomSpace = document.body.clientHeight - top - window.scrollY;
  const sideSpace = document.body.clientWidth - left + window.scrollX;

  const topStyle = {
    bottom: bottomSpace + space,
    left: left + width / 2 + window.scrollX,
  };

  const leftStyle = {
    bottom: bottomSpace - space,
    right: sideSpace + space,
  };

  const rightStyle = {
    bottom: bottomSpace - space,
    right: sideSpace - tooltipWidth - width - space,
  };

  const bottomStyle = {
    bottom: bottomSpace - (height * 3),
    left: left + width / 2 + window.scrollX,
  };

  switch(position) {
    case 'left': return leftStyle;
    case 'right': return rightStyle;
    case 'bottom': return bottomStyle;
    case 'top': return topStyle;
    default: return topStyle
  }
};
