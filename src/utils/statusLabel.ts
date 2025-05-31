export type Status = "in-stock" | "out-of-stock" | "expired" | "does not expire";

export const getStatusClass = (status: Status): string => {
  const statusClasses: Record<Status, string> = {
    "in-stock": "font-medium text-[#10A760]",
    "out-of-stock": "font-medium text-[#DA3E33]",
    "expired": "font-medium text-[#DA3E33]",
    "does not expire": "font-medium text-[#10A760]"
  };

  return statusClasses[status] || "unknown status";
};

export const getStatusText = (status: Status) => {
  const statusText = {
    "in-stock": "In-stock",
    "out-of-stock": "Out of stock",
    expired: "Expired",
    "does not expire": "Does not expire"
  };

  return statusText[status] || "unknown status";
};
