function sumArrayNumbers(obj) {
  if (typeof obj !== "object") {
    return undefined;
  }
  const { firstName, lastName } = obj;
  if (!firstName || !lastName) {
    return undefined;
  }

  return `${firstName} ${lastName}`;
}
console.log(sumArrayNumbers);
