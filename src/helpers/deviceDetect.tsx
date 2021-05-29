export const isMobile = () => {
  const isAndroid = /Android/.test(navigator.userAgent);
  const isIPhone = /iPhone/.test(navigator.userAgent);
  return isAndroid || isIPhone;
  }