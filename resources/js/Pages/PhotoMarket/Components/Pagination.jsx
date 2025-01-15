const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center mt-6">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none disabled:opacity-50"
        >
            Previous
        </button>
        <span className="mx-2 text-gray-600">
            Page {currentPage} of {totalPages}
        </span>
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none disabled:opacity-50"
        >
            Next
        </button>
    </div>
);

export default Pagination;
