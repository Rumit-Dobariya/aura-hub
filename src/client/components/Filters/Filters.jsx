import { RxCross2 } from "react-icons/rx";
import { Button, Radio, RangeSlider } from "../FormElements";

export default function Filters(props) {
  const {
    categories,
    selectedCategory,
    onCategoryChange,
    minPrice,
    maxPrice,
    onMinPriceChange,
    onMaxPriceChange,
    priceRange,
    onReset,
  } = props;

  const isFiltered =
    selectedCategory !== "" ||
    minPrice > priceRange.min ||
    maxPrice < priceRange.max;

  return (
    <div className="bg-white rounded-sm shadow-md p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#3A3A3A]">Filters</h2>
        {isFiltered && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-[#2563EB] hover:text-[#1D4ED8]"
          >
            <RxCross2 size={16} />
            Reset
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-[#3A3A3A] mb-3 text-sm">Category</h3>
        <div className="space-y-2">
          <Radio
            name="category"
            value=""
            checked={selectedCategory === ""}
            onChange={(e) => onCategoryChange(e.target.value)}
            label="All Categories"
          />
          {categories.map((item, index) => (
            <Radio
              key={index}
              name="category"
              value={item}
              checked={selectedCategory === item}
              onChange={(e) => onCategoryChange(e.target.value)}
              label={item}
            />
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-[#3A3A3A] mb-3 text-sm">
          Price Range
        </h3>
        <div className="space-y-4">
          <RangeSlider
            min={priceRange.min}
            max={priceRange.max}
            value={minPrice}
            onChange={(e) => onMinPriceChange(Number(e.target.value))}
            label={`Min: $${minPrice.toFixed(2)}`}
          />
          <RangeSlider
            min={priceRange.min}
            max={priceRange.max}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            label={`Max: $${maxPrice.toFixed(2)}`}
          />
          <div className="text-sm text-[#6B7280] font-medium pt-2">
            ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
