export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;

declare global {
  interface RegularInputProps {
    name: string;
    value?: string | number;
    type: string;
    placeholder?: string;
    id?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
    showError?: boolean;
    errorMessage?: string;
    icon?: IconType;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }
}

export {};
