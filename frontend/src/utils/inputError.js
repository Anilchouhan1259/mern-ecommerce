export function inputError(errors, label) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(label))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});
  return filtered;
}
