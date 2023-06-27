import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classnames/classnames";
import cls from "./appLink.module.scss";

export enum linkTheme {
  primary = "primary",
  secondary = "secondary",
  invertedSecondary = "invertedSecondary",
  invertedPrimary = "invertedPrimary",
}

interface AppLinkProps extends LinkProps {
  theme?: linkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    children,
    to,
    className,
    theme = linkTheme.primary,
    ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(className, {}, [cls.AppLink, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
