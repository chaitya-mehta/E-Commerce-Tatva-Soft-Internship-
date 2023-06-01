import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
export default function Products() {
    const[data,setData]=useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;
    useEffect(() => {
        const getProducts= async()=>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return ()=>{
                componentMounted =false;
            }
        }
        getProducts();
    }, []);
    const Loading = () =>{
        return(
            <>
                Loading....
            </>
        )
    }
    const ShowProducts = () =>{
        return(
            <>
                <div className="buttons d-flex justify-content-center mb-5">
                    <button className="btn btn-outline-dark me-2"> All</button>
                    <button className="btn btn-outline-dark me-2"> Mens</button>
                    <button className="btn btn-outline-dark me-2"> Womens</button>
                    <button className="btn btn-outline-dark me-2"> Jewellery</button>
                    <button className="btn btn-outline-dark me-2"> Electronic</button>
                </div>
                {filter.map((product)=>{
                    return(
                        <>
                            <div className="col-md-3 mb-4">
                            <div class="card h-100 text-center p-4" key={product.id}>
                                <img class="card-img-top" src={product.image} alt={product.title} height='250px'/>
                                <div class="card-body">
                                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p class="card-text fw-bold">${product.price}</p>
                                    <Link to={`/product/${product.id}`}class="btn btn-outline-dark">Buy Now</Link>
                                </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
        
    }
  return (
    <div>
      <div className="container my-2 py-2">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='dispaly-6 fw-bolder text-center'>Products</h1>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}