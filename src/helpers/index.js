export const getDisplayName = component => {
  return component.displayName || component.name || 'Component';
};

export const NOOP = () => {};
