
const Product = ({ id, title, price, img }) => {
    return (
        <div style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}>
            <p>{id}</p>
            <img src={img} alt={title} height={200} />
            <p>title: {title}</p>
            <p>price: {price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;