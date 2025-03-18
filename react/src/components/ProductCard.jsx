import React from "react";
import RatingWidget from "./RatingWidget";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        ⭐ {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

export default ProductCard;
