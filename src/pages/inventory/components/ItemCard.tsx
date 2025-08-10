interface ItemCardProps {
  heading: string;
  color: string;
  title?: string;
  total: number;
  amount?: number;
  period: string;
  last?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({
  heading,
  color,
  title,
  total,
  amount,
  period,
  last,
}) => {
  return (
    <>
      <div className="flex-1">
        <h2 style={{ color }} className="font-semibold text-base">
          {heading}
        </h2>
        <div className="flex justify-between items-center my-3">
          <div className="space-y-3">
            <p className="font-semibold text-base text-text-dark">{total}</p>
            <p className="font-normal text-sm text-text-subdued">{period}</p>
          </div>

          <div className="space-y-3">
            {amount && (
              <p className="font-semibold text-base text-text-dark">
                ${Number(amount).toLocaleString()}
              </p>
            )}
            <p className="font-normal text-sm text-text-subdued">{title}</p>
          </div>
        </div>
      </div>

      {!last && <div className="border border-[#F0F1F3]"></div>}
    </>
  );
};

export default ItemCard;
