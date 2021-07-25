export const getActiveEmojis = (emojies, active) => {
  const result = emojies.filter((item) => item.category.includes(active));
  return result;
};
