type Props = {
    title: string;
    description: string;
    price: string;
}

export const ProductDescription = ({ title, description, price }: Props) => {
    return (
        <div className="self-start md:p-6">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className="stats bg-primary text-primary-content block md:grid">
                <div className="stat">
                    <div className="stat-title">Price</div>
                    <div className="stat-value">{price}</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm btn-success">Add funds</button>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">⭐⭐⭐⭐⭐</div>
                    <div className="stat-actions">
                        <button className="btn btn-sm">See all reviews</button>
                    </div>
                </div>
            </div>
        </div>
    )
}