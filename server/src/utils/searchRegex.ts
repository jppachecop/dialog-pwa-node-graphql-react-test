export const searchRegex = (name: string) => {
  return new RegExp(name.split(" ").join("\\S+\\s+?") + "\\S+", "i");
};
