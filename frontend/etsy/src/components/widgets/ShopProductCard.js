import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ShopProductCard = ({ product, index, pageLink, handleEdit, isOwner }) => {
  return (
    // assets/images/product_1.png
    <div class='col-md-3 col-lg-3 col-sm-6' key={index}>
      <div class='product-grid'>
        <div class='product-image'>
          <Link to={pageLink} class='image'>
            <img
              class='img-1'
              src={product.imageUrl}
              style={{ height: "200px" }}
            />
            <img class='img-2' src={product.imageUrl} />
          </Link>
          <ul class='product-links'>
            <li>
              {isOwner ? (
                <button
                  className='btn btn-sm btn-icon-link'
                  onClick={() => handleEdit(product)}
                >
                  <i
                    class='fa fa-pencil'
                    style={{ fontSize: "18px", color: "black" }}
                  ></i>
                </button>
              ) : null}
            </li>
            <li>
              <Link to='/'>
                <i class='fa fa-shopping-cart'></i>
              </Link>
            </li>
          </ul>
          <Link to={pageLink} class='product-view'>
            <i class='fa fa-search'></i>
          </Link>
        </div>
        <div class='product-content'>
          <ul class='rating'>
            <li class='fa fa-star'></li>
            <li class='fa fa-star'></li>
            <li class='fa fa-star'></li>
            <li class='fa fa-star'></li>
            <li class='fa fa-star disable'></li>
            <li class='disable'>(1 reviews)</li>
          </ul>
          <h3 class='title'>
            <Link to={pageLink}>{product.name}</Link>
          </h3>
          <div class='price'>${product.price}</div>
        </div>
      </div>
    </div>
  )
}

export default ShopProductCard
