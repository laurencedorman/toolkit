const space = 16;
const requiredSpace = 100;


export const tooltipPosition = (ref, position) => {
  const {
    top, left, right, bottom, width, height,
  } = ref.getBoundingClientRect();

  const leftSpace = left + width / 2 + window.scrollX;

  switch (true) {
    case (window.innerHeight - bottom < requiredSpace) && position === 'bottom':
    case position === 'top' && top > requiredSpace:
      return {
        class: 'top',
        style: {
          bottom: window.innerHeight - top + space,
          left: leftSpace,
        },
      };

    case window.innerWidth - right < requiredSpace:
    case position === 'left' && left > requiredSpace:
      return {
        class: 'left',
        style: {
          top: top + (height / 2),
          right: document.body.clientWidth - left + window.scrollX + space,
        },
      };

    case left < requiredSpace:
    case position === 'right' && left > requiredSpace:
      return {
        class: 'right',
        style: {
          top: top + (height / 2),
          left: right + space,
        },
      };

    case top < requiredSpace:
    case position === 'bottom':
      return {
        class: 'bottom',
        style: {
          top: bottom + (space * 2),
          left: leftSpace,
        },
      };

    default:
      return {
        class: 'top',
        style: {
          bottom: window.innerHeight - top + space,
          left: leftSpace,
        },
      };
  }
};

export default tooltipPosition;
