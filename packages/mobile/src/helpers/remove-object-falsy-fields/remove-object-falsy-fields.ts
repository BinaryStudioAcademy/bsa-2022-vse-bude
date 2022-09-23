const removeObjectFalsyFields = <T, K>(object: T): K => {
  const copy = JSON.parse(JSON.stringify(object));
  for (const key in object) {
    if (!copy[key]) {
      delete copy[key];
    }
  }

  return copy;
};

export { removeObjectFalsyFields };
