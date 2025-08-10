import ProductDetails from '@/pages/inventory/details/ProductDetails'

interface ProductDetailsProps {
  params: Promise<{ productId: string }>
}

const page: React.FC<ProductDetailsProps> = async ({params}) => {
  const { productId } = await params;
  return <ProductDetails productId ={productId} />
}

export default page