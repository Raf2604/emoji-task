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

const initState = {
  inputText: "",
  isEmojisOpen: false,
  activeMenu: "Smileys & Emotion",
  currentEmojis: [],
  history: [],
  cursorPosition: 0,
  activeEmojiSkin: "standard",
  filteredEmojis: [],
  search: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INPUT_TEXT: {
      return {
        ...state,
        inputText: action.payload,
      };
    }
    case TOGGLE_EMOJIS: {
      return {
        ...state,
        isEmojisOpen: !state.isEmojisOpen,
      };
    }
    case SET_ACTIVE_MENU: {
      return {
        ...state,
        activeMenu: action.payload,
      };
    }
    case SET_ACTIVE_EMOJIS: {
      return {
        ...state,
        filteredEmojis: [],
        currentEmojis: action.payload,
      };
    }
    case ADD_EMOJI: {
      const { inputText, cursorPosition, history } = state;
      const { char } = action.payload;
      const newHistory = [...new Set([action.payload, ...history])];
      const start = inputText.substr(0, cursorPosition);
      const end = inputText.substr(cursorPosition, inputText.length);
      const result = start + char + end;
      return {
        ...state,
        inputText: result,
        history: newHistory.splice(0, 40),
        cursorPosition: cursorPosition + char.length,
      };
    }
    case SET_CURSOR_POSITION: {
      return {
        ...state,
        cursorPosition: action.payload,
      };
    }
    case SET_ACTIVE_SKIN: {
      return {
        ...state,
        activeEmojiSkin: action.payload,
      };
    }
    case SET_ACTIVE_EMOJIS_BY_SKIN: {
      const { activeEmojiSkin } = state;
      let filtered = [];
      if (activeEmojiSkin === "standard") {
        filtered = action.payload.filter((item) => !item.name.includes(":"));
      } else {
        filtered = action.payload.filter((item) =>
          item.name.includes(": " + activeEmojiSkin)
        );
      }
      return {
        ...state,
        currentEmojis: filtered,
      };
    }
    case SET_SEARCH_TEXT: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
