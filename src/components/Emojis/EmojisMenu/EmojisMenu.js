import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../../../store/actions";
import { MENU } from "../../../helpers/menu";

import "./styles.scss";

export const EmojisMenu = () => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.activeMenu);

  return (
    <div className="emojis_menu">
      {MENU.map((item, index) => {
        const { name, icon } = item;
        return (
          <div
            key={index}
            className={activeMenu === name ? "active_menu" : null}
            onClick={() => dispatch(setActiveMenu(name))}
          >
            <img src={icon} alt="" title={name} />
          </div>
        );
      })}
    </div>
  );
};
export default EmojisMenu;
