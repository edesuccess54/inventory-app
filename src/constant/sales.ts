import { CostIcon, ProfitIcon, RevenueIcons, SalesIcon } from "@/assets"
import { StaticImageData } from "next/image"

interface AnalyticsProps {
    title: string,
    amount: number,
    icon: StaticImageData
}

export const sales:AnalyticsProps[] = [
    {
        title: 'sales',
        amount: 1000,
        icon: SalesIcon
    },
    {
        title: 'revenue',
        amount: 5000,
        icon: RevenueIcons
    },

    {
        title: 'profit',
        amount: 5000,
        icon: ProfitIcon
    },

    {
        title: 'cost',
        amount: 5000,
        icon: CostIcon
    },
]

export const purchase:AnalyticsProps[] = [
    {
        title: 'purchase',
        amount: 1000,
        icon: SalesIcon
    },
    {
        title: 'cost',
        amount: 5000,
        icon: RevenueIcons
    },

    {
        title: 'cancel',
        amount: 10,
        icon: ProfitIcon
    },

    {
        title: 'return',
        amount: 200,
        icon: CostIcon
    },
]