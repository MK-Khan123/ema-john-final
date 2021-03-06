import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.product);
    const removeProduct = props.removeProduct;
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        paddingBottom: '5px',
        marginBottom: '5px',
        marginLeft: '200px'
    };
    return (
        <div style={reviewItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br />
            <button onClick={() => removeProduct(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;