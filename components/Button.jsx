import Link from "next/link";

/**
 * @returns REACT COMPONENT WHICH CREATES DIFFERENT BUTTON BASED ON THE PARAMs.
 */
const Button = ({ classNames, children, url }) => {
    return (
        <Link href={url} className={`rounded-full py-2 px-4 text-sm text-center leading-6 w-auto h-auto ${classNames}`}>{children}</Link>
    );
}

export default Button;