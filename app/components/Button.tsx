import React from "react";

type buttonProps = {
  content: string;
  bgColor: string;
  Icon: React.ComponentType;
};

const Button: React.FC<buttonProps> = ({ content, bgColor, Icon }) => {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor }}
        className="py-[1rem] px-[2rem] text-white uppercase text-[0.8rem]"
      >
        <span className="flex items-center gap-[1rem]">
          <Icon />
          {content}
        </span>
      </button>
    </>
  );
};

export default Button;
