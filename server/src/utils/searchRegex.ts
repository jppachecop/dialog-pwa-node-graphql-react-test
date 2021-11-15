export const searchRegex = (name: string) => {
  return new RegExp(name.trim().split(" ").join("\\S+\\s+?") + "\\S+", "i");
};
