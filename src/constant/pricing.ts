interface PlansProp {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const plans: PlansProp[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      "Up to 500 products",
      "Basic analytics",
      "Email support",
      "Mobile app access",
      "1 user account",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Up to 5,000 products",
      "Advanced analytics & reports",
      "Priority support",
      "Mobile app access",
      "5 user accounts",
      "Supplier management",
      "Custom categories",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited products",
      "Custom analytics",
      "24/7 dedicated support",
      "Mobile app access",
      "Unlimited users",
      "API access",
      "Custom integrations",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];
