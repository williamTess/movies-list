export const percentage = (likes: number, dislikes: number) => {
  if (likes + dislikes === 0) return 0;
  return Math.round((likes * 100) / (likes + dislikes));
};

export const roundUp = (value: number) => Math.ceil(value);
