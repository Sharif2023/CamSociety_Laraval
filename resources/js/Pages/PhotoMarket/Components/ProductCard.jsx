const ProductCard = ({ product }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
        </div>
        <div className="p-4 flex justify-between gap-4">
            <button className="w-1/2 py-2 text-sm font-semibold text-white bg-[#1F1F1F] rounded-lg hover:bg-[#FF3300]">
                Add to Cart
            </button>
            <button className="w-1/2 py-2 text-sm font-semibold text-white bg-[#FF3300] rounded-lg hover:bg-[#1F1F1F]">
                Buy Now
            </button>
        </div>
    </div>
);

export default ProductCard;
