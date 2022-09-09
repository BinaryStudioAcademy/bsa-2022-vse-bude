export const getFilenameFromUrl = (url: string): string | null => {
  const filename = url.split('/').pop();

  return filename ? filename : null;
};
