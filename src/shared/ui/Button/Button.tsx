import type { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonTheme {
  PRIMARY = 'PRIMARY',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  children?: ReactNode;
}
export const Button = (props: ButtonProps) => {
  const { className = '', theme = ButtonTheme.PRIMARY, children, ...otherProps } = props;

  const themeStyles = {
    PRIMARY: 'bg-[#fdb056] hover:bg-[#FC961E] text-[#191e1f]',
  };

  return (
    <button
      className={`${className} rounded-[20px] p-5 transition-colors duration-200 font-bold text-[18px] md:text-[20px] w-full ${themeStyles[theme]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
