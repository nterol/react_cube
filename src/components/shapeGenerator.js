export function positionsGenerator(length) {
  return Array.from(
    { length },
    () =>
      `${Math.random() * length - 50} ${Math.random() * length -
        50} ${Math.random() * length - 50}`
  );
}

export function colorGenerator(length) {
  return Array.from(
    { length },
    () => `${Math.random()} ${Math.random()} ${Math.random()}`
  );
}
