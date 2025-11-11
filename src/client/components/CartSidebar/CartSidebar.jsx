import { RxCross2 } from "react-icons/rx";
import CartItem from "../CartItem/CartItem";
import { FiShoppingCart } from "react-icons/fi";

export default function CartSidebar(props) {
  const {
    isOpen,
    onClose,
    items,
    total,
    onUpdateQuantity,
    onRemove,
    onCheckout,
  } = props;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2">
            <FiShoppingCart className="text-[#2563EB]" size={24} />
            <h2 className="text-lg font-bold text-[#3A3A3A]">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#F3F4F6] rounded transition-colors"
            title="Close cart"
          >
            <RxCross2 size={24} className="text-[#4B5563]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiShoppingCart size={48} className="text-[#D1D5DB] mb-4" />
              <p className="text-[#4B5563] font-medium">Your cart is empty</p>
              <p className="text-[#6B7280] text-sm mt-1">
                Add some products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemove}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#E5E7EB] p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#4B5563]">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-[#4B5563]">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E5E7EB] font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 rounded-sm transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
