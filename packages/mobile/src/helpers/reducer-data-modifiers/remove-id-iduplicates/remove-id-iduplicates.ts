type data = {
  id: string;
};

const removeIdDuplicates = <T extends data>(
  stateData: T[],
  newData: T[],
): T[] => {
  return [
    ...stateData,
    ...newData.filter(
      ({ id }) => !stateData.map(({ id: secondId }) => secondId).includes(id),
    ),
  ];
};

export { removeIdDuplicates };
