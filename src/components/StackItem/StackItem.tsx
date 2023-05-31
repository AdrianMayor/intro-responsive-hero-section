import { FC } from "react";
import { StackItemModel } from "../MenuDisplay/MenuDisplay";
import "./StackItem.css";

interface StackItemProps {
  stack: StackItemModel[];
  className: string;
}

export const StackItem: FC<StackItemProps> = ({ stack, className }) => {
  if (stack.length > 1) {
    return (
      <ul className={`menuStack ${className}`}>
        {stack.map((item) => (
          <li key={item.title} className="menuStackItem">
            {item.image ? <img src={item.image} alt={item.title}></img> : <></>}
            {item.title}
          </li>
        ))}
      </ul>
    );
  }

  return <></>;
};
