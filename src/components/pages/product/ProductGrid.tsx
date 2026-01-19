"use client"

import { ProductCard } from "./ProductCard"
import { useState } from "react"

const products = [
  {
    id: "peanut-oil-001",
    productName: "Premium Cold-Pressed Peanut Oil",
    productBio: "100% pure cold-pressed peanut oil, perfect for healthy cooking. Rich in monounsaturated fats and vitamin E.",
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.8,
    reviewCount: 256,
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
    category: "Cold Pressed",
    inStock: true,
  },
  {
    id: "peanut-oil-002",
    productName: "Organic Roasted Peanut Oil",
    productBio: "Deep roasted flavor for authentic Asian cuisine. USDA certified organic with no additives or preservatives.",
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.6,
    reviewCount: 189,
    imageUrl: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=400&h=400&fit=crop",
    category: "Organic",
    inStock: true,
  },
  {
    id: "peanut-oil-003",
    productName: "Extra Virgin Peanut Oil",
    productBio: "First-press extraction for maximum nutrients. Ideal for salad dressings and light sauteing.",
    price: 22.99,
    rating: 4.9,
    reviewCount: 312,
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    category: "Extra Virgin",
    inStock: true,
  },
  {
    id: "peanut-oil-004",
    productName: "High-Heat Cooking Peanut Oil",
    productBio: "Refined for high smoke point (450 F). Perfect for deep frying and stir-fry cooking.",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    reviewCount: 423,
    imageUrl: "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=400&h=400&fit=crop",
    category: "Refined",
    inStock: true,
  },
  {
    id: "peanut-oil-005",
    productName: "Infused Garlic Peanut Oil",
    productBio: "Aromatic garlic-infused peanut oil for gourmet cooking. Adds rich flavor to any dish.",
    price: 16.99,
    rating: 4.7,
    reviewCount: 145,
    imageUrl: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&h=400&fit=crop",
    category: "Infused",
    inStock: false,
  },
  {
    id: "peanut-oil-006",
    productName: "Family Size Pure Peanut Oil",
    productBio: "Economical 1-gallon size for families. Pure peanut oil with naturally nutty flavor.",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviewCount: 567,
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    category: "Value Pack",
    inStock: true,
  },
]

export function ProductGrid() {
  const [cart, setCart] = useState<string[]>([])

  const handleAddToCart = (id: string) => {
    setCart((prev) => [...prev, id])
  }

  const handleBuyNow = (id: string) => {
    alert(`Proceeding to checkout for product: ${id}`)
  }

  return (
    <section id="peanut-products-section">
      <div className="container">
        <div className="peanut-section-header">
          <h2 id="peanut-section-title">
            Our Premium Products
          </h2>
          <p className="peanut-section-description">
            Discover the finest selection of peanut oils for every cooking need
          </p>
          {cart.length > 0 && (
            <div id="peanut-cart-indicator">
              <i className="bi bi-cart3" />
              <span className="peanut-cart-count">{cart.length}</span>
              <span>items in cart</span>
            </div>
          )}
        </div>
        
        {/* Bootstrap Grid for Products */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="peanut-products-grid">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard
                {...product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
