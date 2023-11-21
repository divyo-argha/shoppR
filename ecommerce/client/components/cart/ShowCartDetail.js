import React from "react";
import Link from "next/link";
import Loading from "../ui/Loading";
import { findProductQuantity } from "@/utils/product-cart";
const ShowCartDetail = ({ isLoading, data, cartDetail }) => {
  function calculateTotalForASingleItem(productId, productPrice) {
    const product = cartDetail.state.find((e) => {
      return e.id === productId;
    });
    return product.quantity * productPrice;
  }

  return (

    
    
    <section className="mt-6 ml-6">
      <ul>
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="shadow-lg p-8 ml-12 text-3xl rounded">
            {data.map((e) => {
              return (
                <li
                  className="m-8 border-2 p-4 border-orange-300 flex justify-between"
                  key={e._id}
                >
                  <Link href={`products/${e._id}`}>
                    <div className="text-orange-800">{e.name} &nbsp;|</div>
                  </Link>
                  <div>
                    &nbsp; {e.price}$ each &nbsp;
                    <span className="text-orange-800">|</span>
                  </div>
                  <div>
                    &nbsp;{findProductQuantity(e._id, cartDetail)}'s &nbsp;
                    <span className="text-orange-800">|</span>
                  </div>
                  <div>
                    &nbsp; total = &nbsp;
                    {calculateTotalForASingleItem(e._id, e.price)}$
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </ul>
    </section>
    

    /*
    <section className="mt-6 ml-6">

      <div class="table-users">
        <div class="header">Products in cart</div>
        
        <table cellspacing="0">
        
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Price per unit</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            
            <tr key={e._id}>
              <td><img src= "/product-images/showpiece.jpg" alt="" /></td>
              <td>
                <Link href={`products/${e._id}`}>
                  <div className="text-orange-800">{e.name}</div>
                </Link>
              </td>
              <td>{e.price}$</td>
              <td>{findProductQuantity(e._id, cartDetail)}</td>
              <td>{calculateTotalForASingleItem(e._id, e.price)}$</td>
            </tr>
            

            
            
        </table>
      </div>

    </section>
            */
  );
};

export default ShowCartDetail;
