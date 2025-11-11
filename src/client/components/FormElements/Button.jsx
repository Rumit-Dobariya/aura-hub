export const Button = ({
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  badge = null,
  children,
  ...props
}) => {
  const baseStyles = "font-semibold transition-colors duration-200 rounded-[4px] flex items-center justify-center gap-2 relative";

  const variants = {
    primary: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white",
    secondary: "bg-[#E5E7EB] hover:bg-[#D1D5DB] text-[#111827]",
    outline: "border border-[#D1D5DB] bg-white hover:bg-[#F3F4F6] text-[#111827]",
    ghost: "hover:bg-[#F3F4F6] text-[#111827]",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
      {badge !== null && badge > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#EF4444] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {badge > 99 ? "99+" : badge}
        </span>
      )}
    </button>
  );
};
