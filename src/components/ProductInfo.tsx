import { Product } from "../data/api";

export default function ProductInfo (props:any) {
    let {product} = props;

    return(
        <>
            <div>
                <h1>{product.productName} {product.Model}</h1>
                <h2>{product.OS}</h2>
                <h3>${product.price}</h3>
                <h4>{product.conditon}</h4>
                <img src={product.url} alt="laptop pic" className="picture"/>
                <p>{product.about}</p>
            </div>
        </>
    );
}