import { Link } from "@remix-run/react";

type ButtonProps = {
    to: string;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ to, children }) => {
    return (
        <Link
            to={to}
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
            {children}
        </Link>
    );
}