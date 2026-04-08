import { useState } from 'react';

const menuTabs = {
  coffee: {
    label: 'Coffee & Drinks',
    items: [
      { name: 'Espresso', price: '€1.70' },
      { name: 'Espresso Macchiato', price: '€1.90' },
      { name: 'Double Espresso', price: '€2.50' },
      { name: 'Cappuccino', price: '€2.40' },
      { name: 'Large Cappuccino', price: '€2.80' },
      { name: 'Freddo Espresso', price: '€2.20' },
      { name: 'Decaf Espresso', price: '€1.90' },
      { name: 'Affogato', price: '€4.00' },
      { name: 'Latte', price: '€2.80' },
      { name: 'Iced Latte', price: '€3.20' },
      { name: 'Flat White', price: '€3.80' },
      { name: 'Hot Chocolate', price: '€3.50' },
      { name: 'Thick Hot Chocolate', price: '€4.00' },
      { name: 'Chai Latte', price: '€4.30' },
      { name: 'Matcha Latte', price: '€4.30' },
      { name: 'Mocha', price: '€3.50' },
      { name: 'Milkshake', price: '€5.00' },
      { name: 'Protein Shake', price: '€2.50' },
      { name: 'Tea', price: '€2.00' },
      { name: 'Herbal Tea', price: '€2.50' },
      { name: 'Fresh Orange Juice', price: '€4.00' },
      { name: 'Small Water (Still/Sparkling)', price: '€2.00' },
      { name: 'Large Water (Still/Sparkling)', price: '€3.50' },
      { name: 'Red Bull 250ml', price: '€3.50' },
      { name: 'Soft Drinks 330ml', price: '€3.00' },
      { name: 'Gatorade 500ml', price: '€3.00' },
      { name: 'Ice Tea 330ml', price: '€3.00' },
    ]
  },
  food: {
    label: 'Food',
    items: [
      { name: 'Smoked Ham & Cheese Baguette', price: '€3.99' },
      { name: 'Tuna Ftira', description: 'Tuna, tomato paste, capers, olives, onion', price: '€4.99' },
      { name: 'Chicken Ciabatta', description: 'Pesto, chicken strips, cheese, baby spinach', price: '€6.49' },
      { name: 'Breakfast Ciabatta', description: 'Sausage, bacon, egg, cheese, HP sauce', price: '€5.99' },
      { name: 'Parma & Mozzarella Baguette', description: 'Pesto, parma ham, mozzarella, tomato', price: '€6.49' },
      { name: 'Mortadella & Burrata Panini', description: 'Mortadella, burrata, pistachio pesto, rucola', price: '€6.49' },
      { name: 'Chicken Wrap', description: 'Chicken, parmesan, couscous, caesar dressing', price: '€7.99' },
      { name: 'Beef & Branston Pickle Panini', description: 'Roasted beef, branston pickle, cheese', price: '€7.49' },
      { name: 'Smoked Salmon Panini', description: 'Salmon, cream cheese, avocado, rucola', price: '€7.49' },
      { name: 'Smoked Salmon Bagel', description: 'Smoked salmon, cream cheese, avocado, rucola', price: '€7.49' },
      { name: 'Avocado & Egg Bagel', description: 'Boiled egg, avocado, cream cheese', price: '€6.99' },
      { name: 'Caprese Bagel', description: 'Tomatoes, mozzarella, basil', price: '€6.99' },
      { name: 'Maltese Platter', price: '€18.00' },
      { name: 'Italian Platter', price: '€22.00' },
    ]
  },
  pastries: {
    label: 'Pastries & Desserts',
    items: [
      { name: 'Plain Croissant', price: '€2.20' },
      { name: 'Chocolate Croissant', price: '€2.99' },
      { name: 'Pistachio Croissant', price: '€2.99' },
      { name: 'Pain Au Chocolat', price: '€2.99' },
      { name: 'Apple Strudel', price: '€3.49' },
      { name: 'Pistachio & Cream Pastry', price: '€3.49' },
      { name: 'Chocolate & Butter Twist', price: '€2.99' },
      { name: 'Muffins', price: '€2.99' },
      { name: 'Date Bites', price: '€1.10' },
      { name: 'Tiramisu', price: '€5.49' },
      { name: 'Ricotta & Pistachio Cake', price: '€5.49' },
      { name: 'Strawberry Tart', price: '€5.49' },
      { name: 'Cherry Cheesecake', price: '€5.49' },
      { name: 'Blueberry Cheesecake', price: '€5.49' },
      { name: 'Carrot Cake', price: '€5.49' },
      { name: 'Chia Pudding', price: '€4.49' },
      { name: 'Overnight Oats', price: '€4.49' },
      { name: 'Fruit Bowl', price: '€4.99' },
    ]
  },
  alcohol: {
    label: 'Beer, Wine & Spirits',
    items: [
      { name: 'Cisk 250ml', price: '€3.20', category: 'Beer' },
      { name: 'Cisk 500ml', price: '€5.00', category: 'Beer' },
      { name: 'Corona', price: '€4.50', category: 'Beer' },
      { name: 'Budweiser', price: '€4.50', category: 'Beer' },
      { name: 'Blue Label Ale', price: '€5.00', category: 'Beer' },
      { name: 'Cisk 0% Alcohol', price: '€1.50', category: 'Beer' },
      { name: 'Cisk Chill', price: '€1.50', category: 'Beer' },
      { name: 'Johnnie Red 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'J&B 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Jameson 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Grant\'s 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Johnnie Black 25ml', price: '€1.30', category: 'Spirits' },
      { name: 'Jack Daniel\'s 25ml', price: '€1.00', category: 'Spirits' },
      { name: 'Glenkinchie 25ml', price: '€7.00', category: 'Spirits' },
      { name: 'Johnnie 18Y 25ml', price: '€7.00', category: 'Spirits' },
      { name: 'Hennessy VS 25ml', price: '€4.50', category: 'Spirits' },
      { name: 'Gordon\'s 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Hendrick\'s 25ml', price: '€4.00', category: 'Spirits' },
      { name: 'Absolut 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Grey Goose 25ml', price: '€4.50', category: 'Spirits' },
      { name: 'Jose Cuervo 25ml', price: '€1.50', category: 'Spirits' },
      { name: 'Bacardi White 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Capt. Morgan 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Averna 25ml', price: '€2.50', category: 'Spirits' },
      { name: 'Jägermeister 25ml', price: '€2.70', category: 'Spirits' },
      { name: 'Martini 50ml', price: '€1.50', category: 'Spirits' },
      { name: 'Campari 50ml', price: '€3.00', category: 'Spirits' },
      { name: 'Negroni', price: '€7.00', category: 'Cocktails' },
      { name: 'Old Fashioned', price: '€8.00', category: 'Cocktails' },
      { name: 'Espresso Martini', price: '€8.00', category: 'Cocktails' },
      { name: 'Vodka Martini', price: '€7.00', category: 'Cocktails' },
      { name: 'Cosmopolitan', price: '€8.00', category: 'Cocktails' },
      { name: 'Margarita', price: '€8.00', category: 'Cocktails' },
      { name: 'Mojito', price: '€8.00', category: 'Cocktails' },
      { name: 'Cuba Libre', price: '€7.00', category: 'Cocktails' },
      { name: 'Aperol Spritz', price: '€7.50', category: 'Cocktails' },
      { name: 'Campari Spritz', price: '€7.50', category: 'Cocktails' },
      { name: 'Gin & Tonic', price: '€6.00', category: 'Cocktails' },
      { name: 'Glass of Red Wine', price: '€3.00', category: 'Wine' },
      { name: 'Glass of White Wine', price: '€3.00', category: 'Wine' },
      { name: 'Glass of Prosecco', price: '€3.50', category: 'Wine' },
      { name: 'Malta - Red Wine', price: '€18.00', category: 'Wine' },
      { name: 'La Valette Red', price: '€18.00', category: 'Wine' },
      { name: 'La Torre Chardonnay', price: '€20.00', category: 'Wine' },
      { name: 'Citadella Rosé', price: '€18.00', category: 'Wine' },
      { name: 'Italy - Cantine Syrah', price: '€18.00', category: 'Wine' },
      { name: 'Cantine Nero D\'Avola', price: '€18.00', category: 'Wine' },
      { name: 'Novantac. Primitivo', price: '€24.00', category: 'Wine' },
      { name: 'Primitivo Di Manduria', price: '€33.00', category: 'Wine' },
      { name: 'Cantine Grillo', price: '€18.00', category: 'Wine' },
      { name: 'Feudo A. Pinot Grigio', price: '€24.00', category: 'Wine' },
      { name: 'Prosecco Vini D. Poeti', price: '€30.00', category: 'Wine' },
    ]
  },
  breakfast: {
    label: 'Breakfast Menu',
    items: [
      { name: 'Isabella Mediterranean Breakfast', description: '2 types of ham, edam cheese, feta cheese, boiled egg, cherry tomatoes, cucumber, olives, seasonal fruit, ajvar, honey, black tea or coffee. Available Mon-Fri 7:30-10:30, Weekends 8:00-11:00', price: '€11.99' },
      { name: 'Isabella Vitality Breakfast', description: 'Smoked salmon, avocado, boiled egg, cherry tomatoes, olives, bread, fresh orange juice, black tea/coffee. Available Mon-Fri 7:30-10:30, Weekends 8:00-11:00', price: '€11.99' },
      { name: 'Isabella Dolce Breakfast', description: 'Pancakes stack, maple syrup, seasonal fruit, chocolate cream, pistachio cream, fresh orange juice. Available Mon-Fri 7:30-10:30, Weekends 8:00-11:00', price: '€9.99' },
    ]
  }
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState<'coffee' | 'food' | 'pastries' | 'alcohol' | 'breakfast'>('food');

  return (
    <section id="menu" className="w-full py-16 md:py-24 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="section-label mb-4">What We Serve</div>

        <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
          Food & drinks for any time of day.
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b border-border pb-4">
          {Object.entries(menuTabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`py-2 px-3 md:px-4 font-semibold text-xs md:text-base transition-all duration-300 whitespace-nowrap ${
                activeTab === key
                  ? 'text-foreground border-b-2 border-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuTabs[activeTab].items.map((item: any, idx) => (
            <div key={idx} className="flex flex-col border-b border-border pb-6">
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                {item.description && (
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                )}
                <div className="text-lg font-semibold text-accent">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-sm text-muted-foreground mt-12 italic">
          If you have a food allergy or special dietary requirement, please inform a member of our staff.
        </p>
      </div>
    </section>
  );
}
