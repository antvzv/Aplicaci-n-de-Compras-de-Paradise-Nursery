# Paradise Nursery - Online Plant Shopping Application

Welcome to **Paradise Nursery**, a dynamic e-commerce web application for browsing and purchasing indoor plants. Built with React and Redux Toolkit.

## 🌿 Features

- **Landing Page (`AboutUs.jsx`)**: Responsive landing page with company background and "Get Started" call to action.
- **Product Catalog (`ProductList.jsx`)**: Categorized view of air-purifying, aromatic, and medicinal plants with detailed images, descriptions, prices, and interactive "Add to Cart" buttons.
- **Dynamic Navigation Bar**: Sticky navbar displaying the company branding and a real-time cart item quantity counter badge.
- **Shopping Cart Management (`CartItem.jsx`)**:
  - Incremental and decremental quantity controls for cart items.
  - Delete functionality to remove items from the cart.
  - Automatic calculation of item subtotals and overall cart total.
  - "Continue Shopping" button to seamlessly return to the catalog.
  - "Checkout" button modal notification.
- **Redux State Management (`CartSlice.jsx`)**: Centralized global cart state powered by Redux Toolkit slices (`addItem`, `removeItem`, `updateQuantity`).

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation

1. Clone or download the repository.
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Build for production:
```bash
npm run build
```

## 🛠️ Built With

- **React 18**
- **Redux Toolkit & React-Redux**
- **Vite**
- **CSS3 & GFM Standards**

