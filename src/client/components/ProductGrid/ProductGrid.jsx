import { IoAlertCircleOutline } from "react-icons/io5";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid(props) {
  const { products, onAddToCart, loading, error, getItemQuantity } = props;

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-sm shadow-md h-64 animate-pulse"
            >
              <div className="w-full h-[190px] bg-[#9CA3AF] rounded-tl-[8px] rounded-tr-[8px]" />
              <div className="p-4 space-y-2">
                <div className="h-[16px] bg-[#E5E7EB] rounded w-[75%]" />
                <div className="h-[16px] bg-[#E5E7EB] rounded w-[50%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <IoAlertCircleOutline
            className="mx-auto mb-[16px] text-[#EF4444]"
            size={48}
          />
          <h2 className="text-xl font-bold text-[#111827] mb-[8px]">
            Error Loading Products
          </h2>
          <p className="text-[#4B5563]">{error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <p className="text-xl font-semibold text-[#4B5563]">
            No products found
          </p>
          <p className="text-[#6B7280] mt-[8px]">
            Try adjusting your filters or search
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          getItemQuantity={getItemQuantity}
        />
      ))}
    </div>
  );
}
