function changeTheme(state, action) {
  switch (action.type) {
    case true:
      return { ...state, theme: true };
    case false:
      return { ...state, theme: false };
    default:
      return state;
  }
}

export default changeTheme;
