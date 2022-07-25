export const extractUrlParam = (url: string, paramKey: string) => {
  const match = url.match(`[?&]${paramKey}=([^&]+)`);
  return match ? match[1] : null;
};

export const getImageSource = (imageURL?: string) => {
  if (imageURL) {
    return {
      uri: imageURL,
    };
  }
  return require('<defaultPath>');
};

export const interpolateWithValues = (strMakeChanges: string, ...values: Array<string>) => {
  values.forEach((value) => {
    const matches = strMakeChanges.match(/{[A-Za-z]+}/g);
    if (matches) {
      strMakeChanges = strMakeChanges.replace(matches[0], value);
    }
  });
  return strMakeChanges;
};
