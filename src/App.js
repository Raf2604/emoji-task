import { useSelector } from "react-redux";
import Input from "./components/Input/Input";
import Emojis from "./components/Emojis/Emojis";

const App = () => {
  const isEmojisOpen = useSelector((state) => state.isEmojisOpen);
  return (
    <>
      <Input />
      {isEmojisOpen && <Emojis />}
    </>
  );
};

export default App;
