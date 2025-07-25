import React, { useState } from "react";
import { ButtonProps } from "../types/Props";

const Button: React.FC<ButtonProps> = ({
  text,
  textClassName = "",
  iconSrc,
  iconClassName = "",
  navigateTo,
  onClick,
  divClassName = "",
  buttonClassName,
  disabled,
  loading = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading || loading) return;
    setIsLoading(true);
    try {
      if (navigateTo) {
        window.location.href = navigateTo;
      }
      await onClick?.();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${divClassName}`}>
      <button
        className={`z-0 hover:cursor-pointer ${buttonClassName}`}
        onClick={handleClick}
        disabled={disabled || isLoading || loading}
      >
        {isLoading || loading ? (
          <span className="z-10 animate-spin">Loading...</span>
        ) : (
          <>
            {text && <span className={`z-10 ${textClassName}`}>{text}</span>}
            {iconSrc && <img src={iconSrc} alt="Icon" className={`${iconClassName}`} />}
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
