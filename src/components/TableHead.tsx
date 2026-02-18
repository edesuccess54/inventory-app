import { capitaliseText } from "@/utils/capitaliseText";
import React from "react";

interface TableHeadProps {
  tableHead: string[];
}

const TableHead: React.FC<TableHeadProps> = ({ tableHead }) => {
  return (
    <thead className="text-left border-b border-border-primary text-text-grey-500 font-medium text-sm">
      <tr className="*:py-3">
        {tableHead.map((title) => (
          <th key={title}>{capitaliseText(title)}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
