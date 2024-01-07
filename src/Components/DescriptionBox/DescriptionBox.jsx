import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (107)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. It serves as a digital marketplace where businesses and consumers can engage in commercial transactions without the need for physical presence. These websites provide users with a virtual storefront to showcase products, complete with detailed descriptions, images, and pricing information. Customers can browse through the online catalog, add items to their virtual shopping carts, and proceed to checkout to make secure electronic payments. E-commerce websites leverage various technologies to ensure a seamless and secure online shopping experience, including secure payment gateways, encryption protocols, and inventory management systems. This digital approach to commerce has transformed the way people shop, offering convenience, accessibility, and a vast array of choices at the click of a button.</p>
            <p>
                E-commerce websites typical display products or services along with detailed descriptions, images, prices and any available variations (e.g. sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}
