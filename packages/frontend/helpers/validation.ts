export const getErrorKey = (fieldName: string, type?: string) => {
  if (!type || !fieldName) {
    return null;
  }

  const nameKey = fieldName.replace(/([A-Z])/g, '_$1').toUpperCase();

  return `${nameKey}_${type.toUpperCase()}_ERROR`;
};
