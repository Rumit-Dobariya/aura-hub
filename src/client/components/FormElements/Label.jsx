export const Label = ({
  htmlFor,
  required = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-semibold text-[#3A3A3A] ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-[#EF4444] ml-1">*</span>}
    </label>
  );
};
