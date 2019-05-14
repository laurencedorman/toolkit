import { useLayoutEffect, useState, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default () => {
  const ref = useRef(null);
  const [size, setSize] = useState({});

  useLayoutEffect(() => {
    const element = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries) || entries.length === 0) return;

      setSize(entries[0].target.getBoundingClientRect());
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, []);

  return [size, ref];
};
