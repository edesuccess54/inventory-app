import { StaticImageData } from "next/image";
import ImageWrapper from "../imageWrapper";

const ItemCard = ({
  title,
  amount,
  icon,
  total,
  color,
  last,
}: {
  title: string;
  amount?: number;
  total?: number;
  icon: StaticImageData;
  color: string;
  last?: boolean;
}) => {
  return (
    <>
      <div className="flex-1">
        <div className="flex justify-center items-center">
          <div
            className={`w-[30px] h-[30px] rounded-sm flex justify-center items-center`}
            style={{ backgroundColor: color }}
          >
            <ImageWrapper src={icon} alt="" className="w-5 h-5" />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap justify-between items-center">
          {amount && (
            <p className="text-[#5D6679] font-semibold">${Number(amount).toLocaleString()}</p>
          )}
          {total && <p className="text-[#5D6679] font-semibold">{Number(total)}</p>}
          <p>{title}</p>
        </div>
      </div>

      {!last && <div className="border border-[#F0F1F3]"></div>}
    </>
  );
};

export default ItemCard;
