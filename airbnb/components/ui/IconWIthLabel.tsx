import React from "react";

interface IconWithLabelProps {
  icon?: string | React.ReactNode;
  size?: number; // Size in pixels
  children: React.ReactNode;
  className?: string;
}

export const IconWithLabel: React.FC<IconWithLabelProps> = ({ icon, size = 24, children, className }) => {
  const iconStyle = { width: size, height: size};

  return (
    <div className={`icon-with-label flex p-2 ${className || ""}`}>
      {typeof icon === "string" ? (
        <img src={icon} alt="icon" style={iconStyle} className="icon" />
      ) : (
        React.cloneElement(icon as React.ReactElement, { style: iconStyle })
      )}
      <div className="ml-3">{children}</div>
    </div>
  );
};
