export const Checkbox = ({
  name,
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
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`w-[16px] h-[16px] text-[#2563eb] cursor-pointer rounded ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        {...props}
      />
      {label && <span className="ml-3 text-[#374151] text-sm">{label}</span>}
    </label>
  );
};
