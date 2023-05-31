import { FC, useEffect, useState } from "react";
import ArrowDownIcon from "../assets/icons/icon-arrow-down.svg";
import ArrowUpIcon from "../assets/icons/icon-arrow-up.svg";
import { StackItemModel } from "../components/MenuDisplay/MenuDisplay";
import { StackItem } from "../components/StackItem/StackItem";

interface MenuStacksProps {
  category: string;
  stack: StackItemModel[];
  menuDeploy: boolean;
}

export const MenuStacks: FC<MenuStacksProps> = ({
  category,
  stack,
  menuDeploy,
}) => {
  const [stackDeploy, setStackDeploy] = useState(false);

  const handleCategoryClick = () => {
    setStackDeploy(!stackDeploy);
  };

  useEffect(() => {
    return () => {
      if (menuDeploy) setStackDeploy(false);
    };
  }, [menuDeploy]);

  return (
    <li>
      <h2 onClick={() => handleCategoryClick()}>
        {category}{" "}
        {stack.length > 1 ? (
          stackDeploy ? (
            <img src={ArrowUpIcon} alt="ArrowUpIcon"></img>
          ) : (
            <img src={ArrowDownIcon} alt="ArrowDownIcon"></img>
          )
        ) : (
          <></>
        )}
      </h2>
      <StackItem
        stack={stack}
        className={stackDeploy ? "open" : "hidden"}
      ></StackItem>
    </li>
  );
};
