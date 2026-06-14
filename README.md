🛒 Austin Switch Society — Ecommerce Store

A fully functional ecommerce web application built with Next.js, TypeScript, and Stripe, focused on delivering a smooth and realistic shopping experience for mechanical keyboard products.

This project simulates a production-level online store, including cart management, product browsing, and secure checkout integration.

🚀 Live Site

👉 https://ecommerce-portfolio-2023.vercel.app/

📸 Preview

✨ Key Features
Full ecommerce flow (browse → cart → checkout)
Add / remove items from shopping cart
Persistent cart state using React context
Secure Stripe checkout integration
Dynamic product pages for individual keyboards
Responsive mobile-first UI
Clean component-based architecture
🧠 Tech Stack
Next.js – React framework for routing and SSR
React – UI library
TypeScript – Type safety and scalability
Stripe – Payment processing
CSS Modules / Global CSS – Styling approach used in project
🏗️ Architecture Overview

This project is structured to simulate a real ecommerce application:

Context API handles global cart state
Reusable components for product cards, navbar, cart items
Dynamic routing for product detail pages
Utility functions handle cart logic and Stripe requests
Data layer uses structured product JSON for scalability
💡 What I Learned

This project strengthened my understanding of:

Managing global state using React Context
Building full ecommerce flows from product selection to checkout
Integrating third-party APIs (Stripe) in a Next.js environment
Structuring scalable TypeScript React applications
Handling dynamic routing and reusable UI components
⚠️ Challenges & Solutions
🔹 Cart State Management

Managing cart updates across multiple components required careful state design using Context API to avoid prop drilling.

🔹 Stripe Integration

Implementing secure checkout required separating frontend cart logic from backend Stripe session creation.

🔹 Data Flow Consistency

Ensuring product data stayed consistent across pages required a structured and reusable data layer.

🚀 Future Improvements

If I continue this project, I would:

Add user authentication (login / accounts)
Persist cart data in local storage or database
Improve accessibility (ARIA labels, keyboard navigation)
Add product filtering and search functionality
Implement order history and checkout confirmation pages
Optimize performance (image loading + code splitting)

👤 Author
Angelo Longoria

Portfolio: https://www.angelolongoria.dev/
Frontend Mentor: https://www.frontendmentor.io/profile/arlongoria93

🔥 Final Note
This project demonstrates a functional ecommerce application built with modern frontend tools. It showcases full user flow implementation, from product browsing to secure checkout, and reflects practical experience with React state management and Stripe integration.
