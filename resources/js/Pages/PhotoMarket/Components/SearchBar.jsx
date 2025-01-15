const SearchBar = ({ value, onChange }) => (
    <div className="w-full mb-4">
        <form className="flex items-center max-w-4xl mx-auto">
            <label htmlFor="voice-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <input
                    type="text"
                    id="voice-search"
                    value={value}
                    onChange={onChange}
                    className="bg-gray-100 text-gray-800 border border-gray-300 rounded-full py-2 px-4 w-full focus:ring-2 focus:ring-blue-500"
                    placeholder="Search Photos"
                    required
                />
            </div>
        </form>
    </div>
);

export default SearchBar;
