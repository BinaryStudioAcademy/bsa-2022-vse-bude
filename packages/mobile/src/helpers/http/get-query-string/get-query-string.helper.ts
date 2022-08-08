const getQueryString = (params: Record<string, unknown>): string => {
  const urlParams = new URLSearchParams(params as Record<string, string>);

  return `?${urlParams.toString()}`;
};

export { getQueryString };
