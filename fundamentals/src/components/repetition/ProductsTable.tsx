import products from "../../data/products"

const ProductsTable = () => {
    const productsListFormated = products.map((product) => {
        return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    })

    return(
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                </tr>
            </thead>
            <tbody>
            {productsListFormated}
            </tbody>
        </table>
    )
}


export default ProductsTable