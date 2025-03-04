import React from "react";

const ProductList = ({ data, title }: { data: any; title?: string }) => {
  return (
    <div className="mx-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product: any) => (
            <div>
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No Products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
