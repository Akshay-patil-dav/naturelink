"use client"

import { useState } from "react"

interface ProductCardProps {
  id: string
  productName: string
  productBio: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  imageUrl: string
  category: string
  inStock: boolean
  onAddToCart?: (id: string) => void
  onBuyNow?: (id: string) => void
}

export function ProductCard({
  id,
  productName,
  productBio,
  price,
  originalPrice,
  rating,
  reviewCount,
  imageUrl,
  category,
  inStock,
  onAddToCart,
  onBuyNow,
}: ProductCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    onAddToCart?.(id)
    setTimeout(() => setIsAddingToCart(false), 800)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < Math.floor(rating)) {
        return (
          <i 
            key={`star-${id}-${index}`} 
            className="bi bi-star-fill peanut-star-icon peanut-star-filled" 
          />
        )
      } else if (index < rating) {
        return (
          <i 
            key={`star-${id}-${index}`} 
            className="bi bi-star-half peanut-star-icon peanut-star-half" 
          />
        )
      } else {
        return (
          <i 
            key={`star-${id}-${index}`} 
            className="bi bi-star peanut-star-icon peanut-star-empty" 
          />
        )
      }
    })
  }

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <article
      id={`product-card-${id}`}
      className="peanut-product-card"
    >
      {/* Product Image Section */}
      <div className="peanut-image-wrapper">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={productName}
          className="peanut-product-image"
          loading="lazy"
        />
        {discountPercentage > 0 && (
          <span className="peanut-discount-badge">
            -{discountPercentage}%
          </span>
        )}
        <span className="peanut-category-tag">{category}</span>
      </div>

      {/* Product Info Section */}
      <div className="peanut-product-info">
        <header className="peanut-product-header">
          <h3 id={`product-name-${id}`} className="peanut-product-name">
            {productName}
          </h3>
        </header>

        <p id={`product-bio-${id}`} className="peanut-product-bio">
          {productBio}
        </p>

        {/* Rating Section */}
        <div id={`product-rating-${id}`} className="peanut-rating-container">
          <div className="peanut-stars-wrapper" aria-label={`Rating: ${rating} out of 5 stars`}>
            {renderStars(rating)}
          </div>
          <span className="peanut-review-count">({reviewCount} reviews)</span>
        </div>

        {/* Price Section */}
        <div className="peanut-price-section">
          <span className="peanut-current-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="peanut-original-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Stock Status */}
        <div className={`peanut-stock-status ${inStock ? "peanut-in-stock" : "peanut-out-of-stock"}`}>
          <span className="peanut-stock-indicator" />
          {inStock ? "In Stock" : "Out of Stock"}
        </div>

        {/* Action Buttons */}
        <div className="peanut-action-buttons">
          <button
            id={`add-to-cart-btn-${id}`}
            className={`peanut-add-cart-btn ${isAddingToCart ? "peanut-btn-loading" : ""}`}
            onClick={handleAddToCart}
            disabled={!inStock || isAddingToCart}
            aria-label={`Add ${productName} to cart`}
          >
            {isAddingToCart ? (
              <>
                <span className="peanut-spinner" />
                Adding...
              </>
            ) : (
              <>
                <i className="bi bi-cart-plus" />
                Add to Cart
              </>
            )}
          </button>
          <button
            id={`buy-now-btn-${id}`}
            className="peanut-buy-now-btn"
            onClick={() => onBuyNow?.(id)}
            disabled={!inStock}
            aria-label={`Buy ${productName} now`}
          >
            <i className="bi bi-lightning-fill" />
            Buy Now
          </button>
        </div>
      </div>
    </article>
  )
}
