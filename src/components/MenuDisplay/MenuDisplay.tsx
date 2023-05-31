import { FC } from "react";
import CalendarIcon from "../../assets/icons/icon-calendar.svg";
import CloseMenuIcon from "../../assets/icons/icon-close-menu.svg";
import PlanningIcon from "../../assets/icons/icon-planning.svg";
import RemindersIcon from "../../assets/icons/icon-reminders.svg";
import TodoIcon from "../../assets/icons/icon-todo.svg";
import { MenuStacks } from "../../MenuStacks/MenuStacks";
import "./MenuDisplay.css";

interface MenuDisplayProps {
  menuDeploy: boolean;
  setMenuDeploy: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Category {
  category: string;
  stack: StackItemModel[];
}

export interface StackItemModel {
  title: string;
  image?: string;
}

export const MenuDisplay: FC<MenuDisplayProps> = ({
  menuDeploy,
  setMenuDeploy,
}) => {
  const categories: Category[] = [
    {
      category: "Features",
      stack: [
        { title: "Todo List", image: TodoIcon },
        { title: "Calendar", image: CalendarIcon },
        { title: "Reminders", image: RemindersIcon },
        { title: "Planning", image: PlanningIcon },
      ],
    },
    {
      category: "Company",
      stack: [{ title: "History" }, { title: "Our Team" }, { title: "Blog" }],
    },
    { category: "Carrers", stack: [] },
    { category: "About", stack: [] },
  ];

  return (
    <nav className={menuDeploy ? "navOpen" : "navHidden"}>
      <div className="navCloseButtonContainer">
        <button onClick={() => setMenuDeploy(!menuDeploy)}>
          <img src={CloseMenuIcon} alt="CloseMenuIcon"></img>
        </button>
      </div>
      <menu className="navMenu">
        {categories.map((item) => (
          <MenuStacks
            key={item.category}
            category={item.category}
            stack={item.stack}
            menuDeploy={menuDeploy}
          ></MenuStacks>
        ))}

        <div className="loginSingInButton__container">
          <button>Login</button>
          <button className="loginSingInButton__register">Register</button>
        </div>
      </menu>
    </nav>
  );
};
