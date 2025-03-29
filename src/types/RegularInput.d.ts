export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;

declare global {
  interface RegularInputProps {
    name: string;
    type: string;
    placeholder?: string;
    id?: string;
    className?: string;
    label?: string;
    icon?: IconType;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  }
}

export {};
