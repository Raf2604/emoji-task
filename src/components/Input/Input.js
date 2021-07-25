import { useDispatch, useSelector } from "react-redux";
import {
  setInputText,
  toggleEmojis,
  setCursorPosition,
} from "../../store/actions";

import emojiBtn from "../../assets/icons/emojiBtn.svg";
import "./styles.scss";

export const Input = () => {
  const dispatch = useDispatch();
  const inputText = useSelector((state) => state.inputText);

  const handleSetText = (e) => {
    dispatch(setInputText(e.target.value));
  };
  const handleToggle = () => {
    dispatch(toggleEmojis());
  };
  const handleChange = (e) => {
    dispatch(setCursorPosition(e.target.selectionStart));
  };

  return (
    <div className="input">
      <input
        autoFocus
        type="text"
        placeholder="Type text..."
        value={inputText}
        onChange={(e) => handleSetText(e)}
        onKeyUp={(e) => handleChange(e)}
        onMouseUp={(e) => handleChange(e)}
      />
      <div onClick={() => handleToggle()}>
        <img src={emojiBtn} alt="" />
      </div>
    </div>
  );
};
export default Input;
