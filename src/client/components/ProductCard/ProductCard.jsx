import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../FormElements";

export default function ProductCard(props) {
  const { product, onAddToCart, getItemQuantity } = props;

  const qty = getItemQuantity ? getItemQuantity(product.id) : 0;
  

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group h-full bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer">
        <div className="relative w-full h-[190px] bg-[#f3f4f6] overflow-hidden flex items-center justify-center group-hover:bg-[#f9fafb]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-[16px] group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-[12px] right-[12px] bg-[#2563eb] text-white text-xs font-semibold px-3 py-1 rounded-[4px]">
            {product.category}
          </span>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          <h3 className="font-semibold text-[#111827] text-sm line-clamp-2 mb-2 group-hover:text-[#2563eb]">
            {product.title}
          </h3>

          <p className="text-[#4B5563] text-xs line-clamp-2 flex-1 mb-3">
            {product.description}
          </p>

          <div className="flex items-center gap-1 mb-[12px]">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <AiFillStar
                  key={index}
                  size={18}
                  className={cn(
                    "transition-colors",
                    index < Math.round(product.rating.rate)
                      ? "text-[#FACC15]"
                      : "text-[#D1D5DB]",
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-[#4B5563] ml-1">
              ({product.rating.count})
            </span>
          </div>

          <div className="flex items-center justify-between pt-[12px] border-t border-[#f3f4f6]">
            <span className="text-lg font-bold text-[#111827]">
              ${product.price.toFixed(2)}
            </span>
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                onAddToCart(product);
              }}
              title="Add to cart"
              className="p-[8px] relative"
            >
              <FiShoppingCart size={18} />
              {qty > 0 && (
                <span className="absolute -top-[8px] -right-[8px] h-[20px] w-[20px] inline-flex items-center justify-center text-xs font-bold rounded-full bg-[#dc2626] text-white">
                  {qty}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
