import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveEmojis,
  addEmoji,
  setActiveSkin,
  setActiveEmojisBySkin,
  setSearchText,
} from "../../../store/actions";
import { getActiveEmojis } from "../../../helpers/global";
import classnames from "classnames";
import { EMOJIS } from "../../../helpers/emojis";
import { SKINS } from "../../../helpers/skins";

import "./styles.scss";

export const EmojisBlock = () => {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.activeMenu);
  const activeEmojiSkin = useSelector((state) => state.activeEmojiSkin);
  const currentEmojis = useSelector((state) => state.currentEmojis);
  const history = useSelector((state) => state.history);
  const search = useSelector((state) => state.search);
  const blockScroll = useRef(null);

  useEffect(() => {
    const activeEmojis = getActiveEmojis(EMOJIS, activeMenu);
    if (activeMenu === "People & Body") {
      dispatch(setActiveEmojisBySkin(activeEmojis));
    } else {
      dispatch(setActiveEmojis(activeEmojis));
    }
  }, [activeMenu, activeEmojiSkin, dispatch]);

  useEffect(() => {
    blockScroll.current.scrollTo(0, 0);
  }, [activeMenu]);

  return (
    <div className="emojis_block">
      {activeMenu === "Search" ? (
        <>
          <div className={classnames("emojis_block_header", "single_column")}>
            <input
              className="search_input"
              value={search}
              type="text"
              placeholder="Search emoji..."
              autoFocus
              onChange={(e) => dispatch(setSearchText(e.target.value))}
            />
          </div>
          <div
            className={classnames("emojis_part", "emojis_part_small", "search")}
            ref={blockScroll}
          >
            {EMOJIS.map((item, index) => {
              const { name, char, category } = item;
              if (
                category
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return (
                  <div
                    className="emoji"
                    key={index}
                    onClick={() => dispatch(addEmoji(item))}
                    title={name}
                  >
                    {char}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </>
      ) : activeMenu === "Recently used" ? (
        <>
          <div className={classnames("emojis_block_header", "single_column")}>
            Recently used:
          </div>
          <div
            className={classnames(
              "emojis_part",
              "emojis_part_small",
              "history"
            )}
            ref={blockScroll}
          >
            {history.map((item, index) => {
              const { name, char } = item;
              return (
                <div
                  className="emoji"
                  key={index}
                  onClick={() => dispatch(addEmoji(item))}
                  title={name}
                >
                  {char}
                </div>
              );
            })}
          </div>
        </>
      ) : activeMenu === "People & Body" ? (
        <>
          <div className="emojis_block_header">
            {SKINS.map((item, index) => {
              const { color, name } = item;
              return (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  onClick={() => dispatch(setActiveSkin(name))}
                  className={classnames(
                    "skins",
                    activeEmojiSkin === name ? "active_skin" : null
                  )}
                ></div>
              );
            })}
          </div>
          <div
            className={classnames("emojis_part", "emojis_part_small")}
            ref={blockScroll}
          >
            {currentEmojis.map((item, index) => {
              const { name, char } = item;
              return (
                <div
                  className="emoji"
                  onClick={() => dispatch(addEmoji(item))}
                  key={index}
                  title={name}
                >
                  {char}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="emojis_part" ref={blockScroll}>
          {currentEmojis.map((item, index) => {
            const { char, name } = item;
            return (
              <div
                className="emoji"
                onClick={() => dispatch(addEmoji(item))}
                key={index}
                title={name}
              >
                {char}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default EmojisBlock;
