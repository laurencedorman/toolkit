const space = 16;
const tooltipWidth = 176;
const requiredSpace = 100;

export const tooltipPosition = (ref, position) => {
  const {
    top, left, right, bottom, width, height,
  } = ref.getBoundingClientRect();

  const bottomSpace = document.body.clientHeight - top - window.scrollY;
  const sideSpace = document.body.clientWidth - left + window.scrollX;
  const leftSpace = left + width / 2 + window.scrollX;

  switch (true) {
    case window.innerWidth - right < requiredSpace || position === 'left':
      return {
        class: 'left',
        style: {
          bottom: bottomSpace - space,
          right: sideSpace + space,
        },
      };

    case left < requiredSpace || position === 'right':
      return {
        class: 'right',
        style: {
          bottom: bottomSpace - space,
          right: sideSpace - tooltipWidth - width - space,
        },
      };

    case top < requiredSpace || position === 'bottom':
      return {
        class: 'bottom',
        style: {
          bottom: document.body.clientHeight - bottom - height - (space * 2) - window.scrollY,
          left: leftSpace,
        },
      };

    case window.innerHeight - bottom < requiredSpace || position === 'top':
      return {
        class: 'top',
        style: {
          bottom: bottomSpace + space,
          left: leftSpace,
        },
      };

    default:
      return {
        class: 'top',
        top: {
          bottom: bottomSpace + space,
          left: left + width / 2 + window.scrollX,
        },
      };
  }
};
