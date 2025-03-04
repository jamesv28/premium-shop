import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/Product/proudct-list";

const HomePage = () => {
  // console.log("sample data", sampleData);
  return (
    <>
      <ProductList title="New Proudcts" data={sampleData.products} limit={4} />
      <h2>HomePage</h2>
    </>
  );
};

export default HomePage;
