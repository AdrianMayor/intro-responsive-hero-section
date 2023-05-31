import { FC } from "react";
import MenuImage from "../../assets/icons/icon-menu.svg";
import "./MenuButton.css";

interface MenuButtonProps {
  menuDeploy: boolean;
  setMenuDeploy: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuButton: FC<MenuButtonProps> = ({
  setMenuDeploy,
  menuDeploy,
}) => {
  return (
    <button
      className="header__buttonMenu"
      onClick={() => setMenuDeploy(!menuDeploy)}
    >
      <img src={MenuImage} alt="MenuIcon"></img>
    </button>
  );
};
