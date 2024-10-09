export const priceFormat = (price = 0, currency = "Rp") => {
  let newPrice = price;
  if (newPrice !== null) {
    newPrice = newPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return `${currency}${newPrice}`;
  }
  return "";
};

export const isMobileDevice = () => {
  if (typeof window !== "undefined") {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      window.navigator.userAgent
    );
  }
  return false;
};
