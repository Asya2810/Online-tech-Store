import { useState } from "react";
import { product } from "./data/api";

export default function ProductInfo (props:any) {
    let {product} = props;
    const [isDetailed, setDetailed] = useState(false);

    return(
        <>
        {product.isActive && (
            <>
                <div>
                    <h1>{product.productName} {product.Model}</h1>
                    <h2>{product.OS}</h2>
                    <h3>${product.price}</h3>
                    <h4>{product.conditon}</h4>
                    <img src={product.url} alt="laptop pic" className="picture"/>
                    <button onClick={()=>setDetailed(!isDetailed)} className="btn btn-primary" id="right-panel-link">
                        {isDetailed ? "" : ""}
                        Details
                    </button>
                    {isDetailed && <p>{product.about}</p>}
                </div>
            </>
        )}
        </>
    );
}
