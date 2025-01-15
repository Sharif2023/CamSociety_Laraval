const CategoryFilter = ({ selectedCategory, onChange }) => (
    <div className="mb-4 text-right">
        <select
            value={selectedCategory}
            onChange={onChange}
            className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-full py-2 px-4 focus:ring-2 focus:ring-blue-500"
        >
            <option value="All">All Categories</option>
            <option value="Landscape">Landscape</option>
            <option value="Portrait">Portrait</option>
            <option value="Nature">Nature</option>
        </select>
    </div>
);

export default CategoryFilter;
