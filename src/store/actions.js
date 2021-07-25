import {
  SET_INPUT_TEXT,
  TOGGLE_EMOJIS,
  SET_ACTIVE_MENU,
  SET_ACTIVE_EMOJIS,
  ADD_EMOJI,
  SET_CURSOR_POSITION,
  SET_ACTIVE_SKIN,
  SET_ACTIVE_EMOJIS_BY_SKIN,
  SET_SEARCH_TEXT,
} from "./types";

export const setInputText = (text) => {
  return {
    type: SET_INPUT_TEXT,
    payload: text,
  };
};

export const toggleEmojis = () => {
  return { type: TOGGLE_EMOJIS };
};

export const setActiveMenu = (menuItem) => {
  return {
    type: SET_ACTIVE_MENU,
    payload: menuItem,
  };
};

export const setActiveEmojis = (emojis) => {
  return {
    type: SET_ACTIVE_EMOJIS,
    payload: emojis,
  };
};

export const addEmoji = (char) => {
  return {
    type: ADD_EMOJI,
    payload: char,
  };
};

export const setCursorPosition = (position) => {
  return {
    type: SET_CURSOR_POSITION,
    payload: position,
  };
};

export const setActiveSkin = (skin) => {
  return {
    type: SET_ACTIVE_SKIN,
    payload: skin,
  };
};

export const setActiveEmojisBySkin = (activeEmojiSkin) => {
  return {
    type: SET_ACTIVE_EMOJIS_BY_SKIN,
    payload: activeEmojiSkin,
  };
};

export const setSearchText = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text,
  };
};
