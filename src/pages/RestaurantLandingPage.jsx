import React from 'react';
import HeroSection from '@/components/restaurant/HeroSection';
import MenuSection from '@/components/restaurant/MenuSection';
import ContactSection from '@/components/restaurant/ContactSection';

const RestaurantLandingPage = () => {
  const promotion = {
    title: "The Ultimate Gourmet Burger!",
    description: "Juicy angus beef patty, melted cheddar, crispy bacon, fresh lettuce, tomato, and our secret sauce on a brioche bun. Pure bliss!",
    price: "$15.99",
    imagePlaceholder: "A mouth-watering gourmet hamburger with all the trimmings, cheese dripping, on a wooden board",
  };

  const menuItems = [
    { 
      id: 1, name: "Classic Margherita Pizza", 
      description: "San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil on a thin crust.", 
      price: "$18.50", 
      imagePlaceholder: "A classic Margherita pizza with vibrant red tomatoes, white mozzarella, and green basil leaves",
      category: "Pizzas" 
    },
    { 
      id: 2, name: "Grilled Salmon with Asparagus", 
      description: "Flaky grilled salmon fillet served with tender asparagus spears and a lemon-dill sauce.", 
      price: "$24.00", 
      imagePlaceholder: "Perfectly grilled salmon fillet with char marks, next to bright green asparagus spears",
      category: "Seafood"
    },
    { 
      id: 3, name: "Creamy Carbonara Pasta", 
      description: "Spaghetti tossed in a rich sauce of eggs, Pecorino Romano cheese, pancetta, and black pepper.", 
      price: "$19.75", 
      imagePlaceholder: "A bowl of creamy carbonara pasta with visible pancetta pieces and a sprinkle of black pepper",
      category: "Pastas"
    },
    { 
      id: 4, name: "Spicy Thai Green Curry", 
      description: "Chicken or tofu simmered in a fragrant green curry with coconut milk, bamboo shoots, and Thai basil. Served with jasmine rice.", 
      price: "$21.50", 
      imagePlaceholder: "A vibrant bowl of Thai green curry with chicken, vegetables, and a side of white rice",
      category: "Asian Cuisine"
    },
    { 
      id: 5, name: "New York Cheesecake", 
      description: "Rich and creamy classic New York cheesecake with a graham cracker crust. Served with a berry coulis.", 
      price: "$9.00", 
      imagePlaceholder: "A perfect slice of New York cheesecake with a vibrant red berry sauce drizzled on top",
      category: "Desserts"
    },
    {
      id: 6, name: "BBQ Pulled Pork Sandwich",
      description: "Slow-cooked pulled pork smothered in tangy BBQ sauce, topped with coleslaw on a toasted bun.",
      price: "$16.50",
      imagePlaceholder: "A hearty BBQ pulled pork sandwich overflowing with meat and coleslaw",
      category: "Sandwiches"
    },
    {
      id: 7, name: "Caprese Salad",
      description: "Fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with balsamic glaze and olive oil.",
      price: "$12.00",
      imagePlaceholder: "A colorful Caprese salad with layers of tomato, mozzarella, and basil",
      category: "Salads"
    },
    {
      id: 8, name: "Mushroom Risotto",
      description: "Creamy Arborio rice cooked with a medley of wild mushrooms, Parmesan cheese, and a touch of truffle oil.",
      price: "$20.50",
      imagePlaceholder: "A rich and creamy mushroom risotto in a white bowl, garnished with parsley",
      category: "Vegetarian"
    },
    {
      id: 9, name: "Steak Frites",
      description: "Grilled sirloin steak cooked to your liking, served with a generous portion of crispy French fries and a side of béarnaise sauce.",
      price: "$28.00",
      imagePlaceholder: "A perfectly cooked steak next to a pile of golden French fries",
      category: "Meats"
    },
    {
      id: 10, name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten chocolate center, served with a scoop of vanilla bean ice cream.",
      price: "$10.50",
      imagePlaceholder: "A decadent chocolate lava cake with oozing chocolate, next to a scoop of vanilla ice cream",
      category: "Desserts"
    }
  ];

  return (
    <div className="landing-page">
      <HeroSection promotion={promotion} />
      <MenuSection menuItems={menuItems} />
      <ContactSection />
      <style jsx="true">{`
        .landing-page {
          overflow-x: hidden; 
        }

        .section {
          padding: 4rem 0;
        }
        
        .section-bg-dark {
          background-color: var(--color-primary-blue);
          color: var(--color-white);
        }
        .section-bg-dark h1, .section-bg-dark h2, .section-bg-dark h3 {
          color: var(--color-white);
        }
        .section-bg-dark p {
          color: var(--color-light-gray);
        }
        .section-bg-dark .btn-primary {
          background-color: var(--color-cta-gold);
          color: var(--color-black);
        }
        .section-bg-dark .btn-primary:hover {
          background-color: var(--color-cta-gold-hover);
        }
        .section-bg-light-blue {
          background-color: var(--color-light-blue-bg);
        }
        .container {
          width: 90%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          font-family: var(--font-display);
          color: var(--color-primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default RestaurantLandingPage;