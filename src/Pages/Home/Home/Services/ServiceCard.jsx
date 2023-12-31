const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={img} alt="Shoes" className="rounded-xl h-60" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between">
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn bg-orange-500">Buy Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;