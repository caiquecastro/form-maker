import type { InputHTMLAttributes, SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  children,
  ...rest
}) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor={id}
          className="block text-xs font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      ) : null}
      <select
        id={id}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  type = "text",
  ...props
}) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        type={type}
        name={name}
        id={id ?? name}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        {...props}
      />
    </>
  );
};
