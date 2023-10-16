const Menu = {
    get create() {

        const defaultData = {
            DefaultName: ["font-extrabold", "text-xl"],
            DefaultPrice: ["text-orange-300", "font-bold", "text-sm"],
            DefaultMainTitle: ["px-6", "text-lg", "font-extrabold"],
            DefaultFoodCard: [
            "bg-cover",
            "rounded",
            "p-3",
            "bg-center",
            "lg:h-[200px]",
            "h-28", 
            "shadow-[inset_0px_75px_75px_rgba(0,0,0,0.85)]",
            "hover:scale-105",
            "cursor-pointer",
            "flex-col",
            "flex"
        ],

            DefaultMoFood: [
            "flex",
            "flex-col",
            "items-end", 
            "justify-end",
            "lg:h-32",
            "h-20",
            "bg-cover",
            "rounded-md",
            "p-3", 
            "bg-center", 
            "shadow-[inset_0px_-50px_50px_0px_rgba(0,0,0,0.85)]",
            "hover:scale-105",
            "cursor-pointer"
        ],
        }

        const DivData = [
            {
                mainDiv: ["mt-8", "w-full", "lg:max-w-7xl", "flex", "flex-col"],
                mainTitle: [...defaultData.DefaultMainTitle],
                mainTitleIcon: ["fa-solid", "fa-star"],
                MainTitleText: " SPECIAL OFFERS",
                mainContainer: ["grid", "md:grid-cols-3", "grid-cols-2", "w-full", "p-4", "gap-4", "text-white"]
            },
            {
                mainDiv: ["mt-4", "pt-4", "border-t", "w-full", "lg:max-w-7xl", "flex", "flex-col"],
                mainTitle: [...defaultData.DefaultMainTitle],
                mainTitleIcon: ["fa-solid", "fa-truck"],
                MainTitleText: " DELIVERY",
                mainContainer: ["grid", "lg:grid-cols-4", "md:grid-cols-auto-fill", "w-full", "gap-4", "p-4", "text-white"]
            },
            {
                mainDiv: ["mt-4", "pt-4", "border-t", "w-full", "lg:max-w-7xl", "flex", "flex-col"],
                mainTitle: [...defaultData.DefaultMainTitle],
                mainTitleIcon: ["fa-solid", "fa-shopping-bag"],
                MainTitleText: " MOST ORDERED",
                mainContainer: ["grid", "lg:grid-cols-6", "md:grid-cols-3", "grid-cols-2", "w-full", "gap-2", "p-4", "text-white"]
            }
        ]

        const sectionData = [
            [
                {
                    name: "SUPREME COMBO",
                    price: "$19.99",
                    sectionClass: [
                    "rounded",
                    "flex",
                    "items-end",
                    "flex-col-reverse",
                    "p-4",
                    "md:col-span-2",
                    "md:row-span-2",
                    "col-span-2",
                    "w-full",
                    "border",
                    "lg:h-64",
                    "h-40",
                    "bg-supreme-combo",
                    "bg",
                    "bg-center",
                    "bg-cover",
                    "shadow-[inset_0px_-75px_75px_rgba(0,0,0,0.85)]",
                    "hover:scale-105",
                    "cursor-pointer"
                    ],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "SPECIAL FRIES",
                    price: "$7.29",
                    sectionClass: [
                    "rounded",
                    "bg-special-fries",
                    "bg-center",
                    "md:h-auto",
                    "h-24",
                    "bg-cover",
                    "p-2",
                    "flex",
                    "items-end",
                    "flex-col-reverse",
                    "shadow-[inset_0px_-75px_75px_rgba(0,0,0,0.85)]",
                    "hover:scale-105",
                    "cursor-pointer"
                    ],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "STRAWBERRY MILKSHAKE",
                    price: "$2.99",
                    sectionClass: [
                    "rounded",
                    "bg-milkshake",
                    "bg-center",
                    "md:h-auto",
                    "h-24",
                    "bg-cover",
                    "p-2",
                    "flex",
                    "items-end",
                    "flex-col-reverse",
                    "shadow-[inset_0px_-75px_75px_rgba(0,0,0,0.85)]",
                    "hover:scale-105",
                    "cursor-pointer"
                    ],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]
                }
            ],
            [
                {
                    name: "Burgers",
                    price: "The best in town",
                    sectionClass: [...defaultData.DefaultFoodCard, "bg-burguer"],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Deserts",
                    price: "Sweet wonders",
                    sectionClass: [...defaultData.DefaultFoodCard, "bg-icecream"],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Pizza",
                    price: "Feel the crunchy",
                    sectionClass: [...defaultData.DefaultFoodCard, "bg-pizza"],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]  
                },
                {
                    name: "Salads",
                    price: "Vegan options",
                    sectionClass: [...defaultData.DefaultFoodCard, "bg-salad"],
                    nameClass: [...defaultData.DefaultName],
                    priceClass: [...defaultData.DefaultPrice]
                }
            ],
            [
                {
                    name: "Bliss Combo",
                    price: "$11.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-combo-burguer"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Chick Cheese",
                    price: "$4.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-chicken-burguer"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Chessy pizza",
                    price: "$7.49",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-cheesy-pizza"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Brazilian açaí",
                    price: "$3.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-acai-bowl"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Peperoni pizza",
                    price: "$8.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-peperoni-pizza"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Sixt Nuggies",
                    price: "$1.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-nuggies"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Cholate Ice Cream",
                    price: "$5.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-choco-icecream"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Fish sticks",
                    price: "$2.99",
                    sectionClass:[...defaultData.DefaultMoFood, "bg-fish-snack"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Vanilla Sundae",
                    price: "$4.99",
                    sectionClass: [...defaultData.DefaultMoFood, "bg-vanilla-sundae"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Grilled breakfast",
                    price: "$6.49",
                    sectionClass: [...defaultData.DefaultMoFood, "bg-breakfast"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Beef sandwich",
                    price: "$7.49",
                    sectionClass: [...defaultData.DefaultMoFood, "bg-beef-sandwich"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                },
                {
                    name: "Fries",
                    price: "$1.49",
                    sectionClass: [...defaultData.DefaultMoFood, "bg-fries"],
                    nameClass: ["font-extrabold"],
                    priceClass: [...defaultData.DefaultPrice]
                }
            ]
        ]
        
        for(let i = 0; i < 3; i++) {
            const mainDiv = document.createElement('div');
            const mainTitle = document.createElement('h1');
            const mainTitleIcon = document.createElement('i');
            const mainContainer = document.createElement('main');

            mainDiv.classList.add(...DivData[i].mainDiv);
            mainTitle.classList.add(...DivData[i].mainTitle);
            mainTitleIcon.classList.add(...DivData[i].mainTitleIcon);
            mainContainer.classList.add(...DivData[i].mainContainer);

            mainTitle.appendChild(mainTitleIcon);
            mainTitle.appendChild(document.createTextNode(DivData[i].MainTitleText));
            mainDiv.appendChild(mainTitle);

            for(let j = 0; j < sectionData[i].length; j++) {
                const containerSection = document.createElement('section');
                const nameTag = document.createElement('span');
                const priceTag = document.createElement('span');

                containerSection.classList.add(...sectionData[i][j].sectionClass);
                nameTag.classList.add(...sectionData[i][j].nameClass);
                priceTag.classList.add(...sectionData[i][j].priceClass);

                nameTag.textContent = sectionData[i][j].name;
                priceTag.textContent = sectionData[i][j].price;

                containerSection.appendChild(nameTag);
                containerSection.appendChild(priceTag);

                mainContainer.appendChild(containerSection);
            }
            
            mainDiv.appendChild(mainContainer);
            document.querySelector('#content').appendChild(mainDiv);
        }
    }
}

export default Menu;