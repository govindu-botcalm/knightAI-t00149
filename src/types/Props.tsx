export interface ButtonProps {
  text: string;
  textClassName?: string;
  iconSrc?: string | null;
  iconClassName?: string;
  navigateTo?: string;
  onClick: () => void;
  divClassName?: string;
  buttonClassName?: string;
  disabled?: boolean;
  loading?: boolean;
}
