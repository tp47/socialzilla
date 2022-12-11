import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { darkModeActions } from "../../store/darkMode/darkMode.slice";

const actions = {
  ...darkModeActions,
};

export const useActions = () => {
  return bindActionCreators(actions, useDispatch());
};
