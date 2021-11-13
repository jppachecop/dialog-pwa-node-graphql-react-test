export const searchRegex = (name: string) => {
  const removeMultipleWhiteSpaces = name.replace(/\s+/g, " ").trim();

  return new RegExp(name.split(" ").join(".*\\ .*"), "i");
};
