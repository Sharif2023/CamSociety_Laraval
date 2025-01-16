import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="flex justify-center items-center mt-6 space-x-2">
            {links.map((link) => (
                <Link
                    preserveScroll
                    key={link.label}
                    href={link.url || "#"}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ` +
                        (link.active
                            ? `bg-indigo-600 text-white`
                            : `text-gray-700 hover:bg-indigo-200 hover:text-gray-900`) +
                        (!link.url
                            ? `cursor-not-allowed text-gray-400`
                            : `cursor-pointer`)}>
                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                </Link>
            ))}
        </nav>
    );
}
