import ProductList from "@/components/shared/Product/proudct-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList title="New Proudcts" data={latestProducts} limit={4} />
      <h2>HomePage</h2>
    </>
  );
};

export default HomePage;
