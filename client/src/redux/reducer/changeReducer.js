function change(state, action) {
  switch (action.type) {
    case "theme":
      return { ...state, theme: action.bool };
    case "language":
      return { ...state, language: action.bool };
    default:
      return state;
  }
}

export default change;
