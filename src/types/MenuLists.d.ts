export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;

declare global {
    interface MenuListProps {
        title: string,
        href: string,
        icon: IconType
    }
}

export {}