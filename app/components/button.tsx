import type { ComponentProps, ComponentPropsWithoutRef, ElementType } from "react";

type ButtonProps<C extends ElementType> = {
  as?: C;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<C>;

export const Button = <C extends ElementType = 'button'>({ as, children, ...rest }: ButtonProps<C>) => {
  const Component = as || 'button';
  return (
    <Component
      className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
      {...rest}
    >
      {children}
    </Component>
  );
};
