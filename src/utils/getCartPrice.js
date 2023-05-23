export const getTotalPrice = (items) => {
  return items.reduce((sum, obj) => {
    return sum + obj.price * obj.count;
  }, 0);
};