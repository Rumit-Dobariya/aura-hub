import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

export default function CartItem(props) {
  const { item, onUpdateQuantity, onRemove } = props;

  return (
    <div className="flex gap-4 py-4 border-b border-[#E5E7EB] last:border-b-0 items-center">
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0 bg-[#F3F4F6] rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-[#111827] text-sm line-clamp-2">
          {item.title}
        </h4>
        <p className="text-[#2563EB] font-semibold mt-1">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <p className="text-xs text-[#9CA3AF] mt-1">
          ${item.price.toFixed(2)} each
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 hover:bg-[#F3F4F6] rounded transition-colors"
          title="Decrease quantity"
        >
          <FiMinus size={16} className="text-[#4B5563]" />
        </button>
        <span className="w-8 text-center text-sm font-semibold text-[#111827]">
          {item.quantity}
        </span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-[#F3F4F6] rounded transition-colors"
          title="Increase quantity"
        >
          <FiPlus size={16} className="text-[#4B5563]" />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="p-1 hover:bg-[#FEF2F2] rounded transition-colors ml-2"
        title="Remove from cart"
      >
        <FiTrash2 size={18} className="text-[#EF4444]" />
      </button>
    </div>
  );
}
