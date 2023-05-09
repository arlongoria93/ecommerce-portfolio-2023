

# Austin Switch Society Ecommerce Site



Welcome to Austin Switch Society, an ecommerce site built with NextJS, Tailwind, Typescript, with Stripe implementation. This site is designed to provide you with a seamless shopping experience for all your Mechanical Keyboard needs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- View and purchase a variety of Mechanical Keyboards
- Easily navigate through the website using the menu
- Add items to your cart and checkout securely with Stripe integration

## Installation

To run this ecommerce site locally, please follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= YOUR_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET
```

4. Start the development server: `npm run dev`
5. Open `http://localhost:3000` in your browser to view the website.

## Usage

Once the website is up and running, you can:

- View the different keyboard options available on the homepage
- Add items to your cart by clicking the "Add to Cart" button
- View your cart by clicking the cart icon in the top right corner
- Checkout securely with Stripe integration by entering your shipping and payment information

## Technologies Used

- NextJS
- Tailwind
- Typescript
- Stripe
