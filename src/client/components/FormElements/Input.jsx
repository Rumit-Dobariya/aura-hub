export const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles = "w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all";
  const defaultStyles = "border-[#3B82F6] focus:ring-[#3B82F6]";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseStyles} ${defaultStyles} ${disabled ? "bg-[#F3F4F6] cursor-not-allowed" : ""} ${className}`}
      {...props}
    />
  );
};
