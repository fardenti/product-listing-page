import React from 'react';

const Product = ({ name: { en: englishName } }) => {
    return (
        <article>
            <h1>{englishName}</h1>
        </article>
    )
}

export default Product;