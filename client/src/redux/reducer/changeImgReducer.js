import initState from "../initState";

function changeImg(state = initState.class, action) {
  switch (action.type) {
    case "CHANGE_IMAGE":
      return (state = { class: action.data });
    default:
      return state;
  }
}

export default changeImg;
