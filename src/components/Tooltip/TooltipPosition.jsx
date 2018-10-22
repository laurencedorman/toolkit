
export const tooltipPosition = (ref, position) => {
  const { top, left, right, bottom, width, height } = ref.getBoundingClientRect();
  const space = 16;
  const tooltipWidth = 176;
  const requiredSpace = 100;
  const bottomSpace = document.body.clientHeight - top - window.scrollY;
  const sideSpace = document.body.clientWidth - left + window.scrollX;
  let styles = {};

  console.log(styles);

  switch (true) {
    case window.innerWidth - right < requiredSpace || position === 'left':
      return styles = {
        class: 'left',
        style: {
          bottom: bottomSpace - space,
          right: sideSpace + space,
        },
      };

    case left < requiredSpace || position === 'right':
      return styles = {
        class: 'right',
        style: {
          bottom: bottomSpace - space,
          right: sideSpace - tooltipWidth - width - space,
        },
      };

    case top < requiredSpace || position === 'bottom':
      return styles = {
        class: 'bottom',
        style: {
          bottom: bottomSpace - (height * 3),
          left: left + width / 2 + window.scrollX,
        },
      };

    case window.innerHeight - bottom < requiredSpace || position === 'top':
      return styles = {
        class: 'top',
        style: {
          bottom: bottomSpace + space,
          left: left + width / 2 + window.scrollX,
        },
      };

    default:
      return styles = {
        class: 'top',
        top: {
          bottom: bottomSpace + space,
          left: left + width / 2 + window.scrollX,
        },
      };
  }
};
