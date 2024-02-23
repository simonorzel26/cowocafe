
![CoWoCafe Logo](https://i.imgur.com/nA4zddF.png)

# CoWoCafe

## Introduction

Welcome to [CoWoCafe](https://cowocafe.vercel.app/), the ultimate platform designed to connect coworkers with laptop-friendly cafes. In an era where remote work is more prevalent than ever, finding the perfect cafe that combines the coziness of a coffee shop with the productivity of an office space is essential. CoWoCafe is here to fill that niche. Leveraging the power of the T3 Stack, our application is built with TypeScript, tRPC, Next.js, and Tailwind CSS, enhanced by the intuitive design system of Shadcn-UI/ui, to deliver a seamless and engaging user experience.

## Key Features

- **Discover Laptop-Friendly Cafes**: Find nearby cafes that support your work with essential amenities like reliable Wi-Fi, power outlets, and a conducive working environment.
- **Real-Time Cafe Information**: Access current details on cafe occupancy, Wi-Fi speeds, and power outlet availability.
- **User-Driven Ratings and Reviews**: Make your cafe choices based on feedback and ratings from a community of remote workers.
- **Personalized Cafe Recommendations**: Enjoy suggestions tailored to your work preferences and habits.
- **Seamless Calendar Integration**: Book your work sessions in advance at your preferred cafes through the app.

## Technologies

CoWoCafe harnesses the T3 Stack for a robust, scalable application experience:

- **TypeScript**: Ensures type safety, improving code reliability and maintainability.
- **tRPC**: Facilitates end-to-end type-safe APIs for smooth data flow between the frontend and backend.
- **Next.js**: Provides both server-side rendering and static site generation to enhance app performance and SEO.
- **Tailwind CSS**: Employs a utility-first framework for rapid, yet customizable, UI development.
- **Shadcn-UI/ui**: Integrates with Tailwind CSS for a comprehensive UI toolkit that ensures a responsive and modern design.

## Getting Started

To set up CoWoCafe on your local environment, follow these steps:

Ensure you have `nvm` installed and use the correct Node version:

```bash
nvm use
```

Clone the repository and install dependencies using `pnpm`:

```bash
git clone https://github.com/yourusername/cowocafe.git
cd cowocafe
pnpm install
```

Start the database with the provided script:

```bash
./start-database.sh
```

Apply database migrations with Prisma:

```bash
pnpm db:push
```

Finally, start the development server:

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser to explore CoWoCafe.


## Contribution

Contributions to CoWoCafe are highly encouraged! Whether it's through feature suggestions, bug reports, or direct code contributions, your input is valued. For more details, refer to our `CONTRIBUTING.md` file.

## License

CoWoCafe is released under the MIT license. For more information, consult the `LICENSE` file in our repository.

## Support

For assistance or inquiries, please open an issue in our GitHub repository. Our team is dedicated to providing support and answering any questions you might have.

---

Embark on a new way to enhance your remote working experience with CoWoCafe. Discover your next favorite work spot, connect with like-minded professionals, and enjoy the perfect cup of coffee, all through our app.
