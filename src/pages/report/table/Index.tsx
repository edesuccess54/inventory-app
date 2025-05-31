import TableHead from "./TableHead";
import TableData from "./TableData";
import { fakeProducts } from "@/mock/fakeProducts";

const BestSellingCategory = () => {
  return (
    <>
      <table className="w-full">
        <TableHead />
        <tbody>
          {fakeProducts.map((product) => (
            <tr
              key={product.id}
              className="lg:border-b last:border-b-0 border-border-primary *:py-3 text-text-grey font-medium text-sm"
            >
              <TableData product={product} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BestSellingCategory;
