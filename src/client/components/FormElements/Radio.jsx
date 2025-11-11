export const Radio = ({
  name,
  value,
  checked = false,
  onChange,
  label,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`w-[16px] h-[16px] text-[#2563EB] cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        {...props}
      />
      {label && <span className="ml-3 text-[#6B7280] text-sm capitalize">{label}</span>}
    </label>
  );
};
