import EmojisBlock from "./EmojisBlock/EmojisBlock";
import EmojisMenu from "./EmojisMenu/EmojisMenu";

import "./styles.scss";

export const Emojis = () => {
  return (
    <div className="emojis">
      <EmojisBlock />
      <EmojisMenu />
    </div>
  );
};
export default Emojis;
