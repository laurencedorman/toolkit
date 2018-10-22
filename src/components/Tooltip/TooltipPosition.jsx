
export const tooltipPositionCheck = (ref, position) => {
  const { top, left, right, bottom } = ref.getBoundingClientRect();
  const requiredSpace = 100;

  if (window.innerWidth - right < requiredSpace) return 'forceLeft';
  else if (left < requiredSpace) return 'forceRight';
  else if (top < requiredSpace) return 'forceBottom';
  else if (window.innerHeight - bottom < requiredSpace) return 'forceTop';
  else if (position === 'top') return 'top';
  else if (position === 'left') return 'left';
  else if (position === 'right') return 'right';
  else if (position === 'bottom') return 'bottom';

  return null;
};

export const tooltipPosition = (ref, checkPosition) => {
  const { top, left, right, width, height, bottom } = ref.getBoundingClientRect();
  const space = 16;
  const lateralPositionWidth = 176;
  const bottomSpace = document.body.clientHeight - top - window.scrollY;
  const sideSpace = document.body.clientWidth - left + window.scrollX;

  /*console.log(`
    top: ${top} \n
    bottom: ${bottom} \n
    left: ${left} \n
    width: ${width} \n
    right: ${right} \n
    height: ${height}
  `);*/

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
    right: sideSpace - lateralPositionWidth - width - space,
  };

  const bottomStyle = {
    bottom: bottomSpace - (height * 3),
    left: left + width / 2 + window.scrollX,
  };

  /*switch(position) {
    case 'top': return topStyle;
    case 'left': return leftStyle;
    case 'right': return rightStyle;
    case 'bottom': return bottomStyle;
    default: return topStyle
  }*/

  switch(checkPosition) {
    case 'forceLeft':
    case 'left':
      return leftStyle;
    case 'forceRight':
    case 'right':
      return rightStyle;
    case 'forceBottom':
    case 'bottom':
      return bottomStyle;
    case 'forceTop':
    case 'top':
      return topStyle;
    default: return topStyle
  }
};

export default tooltipPosition;
