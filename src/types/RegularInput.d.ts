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
    icon?: IconType;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }
}

export {};
