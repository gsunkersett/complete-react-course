import React, { useState } from 'react';
import Button from "./Button";




function ProductDetails(props) {

    //array destructing syntax. useState returns array of 2, first is a variable whose value can change
    //and second is a function
    let [productCount, updateCount] = useState(0)
    
    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : 'Zero';
    }

    let incrementProductCount = function() {
        updateCount(++productCount);
    }
    let decrementProductCount = function() {
        //If it is already zero we don't want to reduce it further
        updateCount(productCount >0 ? --productCount : productCount);
    }
    let badgeClass = "badge-margin-left-240 badge ";
    badgeClass += props.isAvailable === true ? 'bg-success' : 'bg-danger';

    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ 'marginRight': 30 }}>${props.price}</h6>
            <Button eventHandler={decrementProductCount}>-</Button>
            <span style={{ padding: '0px 14px', 'fontSize': 13 }}>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div >
    )
}

export default ProductDetails