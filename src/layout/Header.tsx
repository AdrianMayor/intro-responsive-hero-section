import { useState } from "react";
import { MenuButton } from "../components/MenuButton/MenuButton";
import { MenuDisplay } from "../components/MenuDisplay/MenuDisplay";
import "./Header.css";

export const Header = () => {
  const [menuDeploy, setMenuDeploy] = useState<boolean>(false);

  return (
    <header>
      <h1>snap</h1>
      <MenuButton setMenuDeploy={setMenuDeploy} menuDeploy={menuDeploy} />
      <MenuDisplay menuDeploy={menuDeploy} setMenuDeploy={setMenuDeploy} />
      <div
        className={menuDeploy ? "open" : "hidden"}
        onClick={() => setMenuDeploy(!menuDeploy)}
      ></div>
    </header>
  );
};
