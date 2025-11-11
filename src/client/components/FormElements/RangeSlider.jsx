export const RangeSlider = ({
  min = 0,
  max = 100,
  value = 0,
  onChange,
  label,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-xs text-[#4B5563] mb-2">
          {label}
        </label>
      )}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full h-[8px] bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#2563EB] ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        {...props}
      />
    </div>
  );
};
