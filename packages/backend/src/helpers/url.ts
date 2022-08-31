export const getFilenameFromUrl = (url: string) => {
  const filename = url.split('/').pop();

  return filename ? filename : null;
};
