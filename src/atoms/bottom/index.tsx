import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  block?: boolean;
  otherButton?: boolean;
  title: string;
  variant?: "contained" | "outlined" | "text";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    prefixIcon,
    suffixIcon,
    variant = "contained",
    title,
    ...buttonProps
  } = props;
  return (
    <button className={`Button ${variant}`} {...props}>
      {prefixIcon && <div className="mr-2">{prefixIcon}</div>}
      {props.children ?? title}
      {suffixIcon && <div className="ml-2">{suffixIcon}</div>}
    </button>
  );
};

export default Button;
