export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

// eslint-disable-next-line consistent-return
export const saveState = state => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem('state', serializedData);
    // eslint-disable-next-line no-empty
  } catch (error) {}
};
