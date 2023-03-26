import type { PropsWithChildren } from "react";

type TableProps = {};

export const Table: React.FC<PropsWithChildren<TableProps>> = ({
  children,
}) => {
  return (
    <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
      {children}
    </table>
  );
};

export const Th: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
      {children}
    </th>
  );
};

export const Tbody: React.FC<PropsWithChildren> = ({ children }) => {
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
};

type TdProps = {
  highlight?: boolean;
};

export const Td: React.FC<PropsWithChildren<TdProps>> = ({
  children,
  highlight = false,
}) => {
  return (
    <td
      className={`whitespace-nowrap px-4 py-2 font-medium ${
        highlight ? "text-gray-900" : "text-gray-700"
      }`}
    >
      {children}
    </td>
  );
};
