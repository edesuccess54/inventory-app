export type Status = "in-stock" | "out-of-stock" | "expired" | "does not expire" | "low";

export const getStatusClass = (status: Status): string => {
  const statusClasses: Record<Status, string> = {
    "in-stock": "font-medium text-[#10A760]",
    "out-of-stock": "font-medium text-[#DA3E33]",
    expired: "font-medium text-[#DA3E33]",
    "does not expire": "font-medium text-[#10A760]",
    low: "bg-[#FEECEB] text-[#AA3028] text-xs rounded-[16px] py-1 px-2",
  };

  return statusClasses[status] || "unknown status";
};

export const getStatusText = (status: Status) => {
  const statusText = {
    "in-stock": "In-stock",
    "out-of-stock": "Out of stock",
    expired: "Expired",
    "does not expire": "Does not expire",
    low: "Low",
  };

  return statusText[status] || "unknown status";
};
