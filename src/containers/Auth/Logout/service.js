const logout = () => {
  try {
    localStorage.removeItem('state');
  } catch (err) {
    throw err;
  }
};

export default logout;
