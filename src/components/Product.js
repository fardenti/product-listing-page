import React from 'react';

const Product = (props) => {
    return (
        <article>
            <h1>{props.name.en}</h1>
            <p>£{props.price.divisor}</p>
            <img src={'http://cache.net-a-porter.com/images/products/' + props.id + '/' + props.id + '_ou_sl.jpg'} alt="outfit"/>
        </article>
    )
}

export default Product;