import listeners from "./listeners";

const home = {
    get create() {
        const homeDiv = document.createElement('div');
        const homeContainer = document.createElement('div');
        const homeButtons = document.createElement('ul');

        homeDiv.classList.add(
        "h-full",
        "flex",
        "flex-col",
        "justify-center",
        "items-center",
        "py-4"   
        )

        homeContainer.classList.add(
        "p-8",
        "md:border-2",
        "border-none",
        "border-red-600",
        "md:shadow-md",
        "shadow-red-300",
        "rounded"
        )

        homeButtons.classList.add(
        "mt-8",
        "flex",
        "gap-4",
        "lg:justify-start",
        "justify-center"
        )

        for(let i = 0; i < 5; i++){
        
            const classes = [
            ["text-2xl", "mb-8", "font-bold"],
            "text-lg",
            "text-lg",
            "text-lg",
            ["mt-8", "text-xl", "font-bold"],]

            const textContent = [
            "Welcome to iFood - Where Flavor Meets Speed!",
            "At iFood, we're all about satisfying your cravings with a dash of lightning-fast delivery.",
            "From mouthwatering burgers to crispy fries and delectable desserts, we've got your hunger pangs covered.",
            "Order now and experience the ultimate fast-food delight, right at your doorstep.",
            "Stay hungry, stay happy! 🍔🍟🍦"
            ]

            const paragraph = document.createElement('p');
            
            if(Array.isArray(classes[i])) {
                paragraph.classList.add(...classes[i])
            } else {
                paragraph.classList.add(classes[i])
            }

            paragraph.textContent = textContent[i];
            homeContainer.appendChild(paragraph);
        }

        for(let i = 0; i < 2; i++) {
            const data = ["ORDER NOW!", "LOCATIONS"];
            const Button = document.createElement('li');
            const buttonID = ['home-menu', 'home-locations']

            Button.classList.add(
            "p-4",
            "rounded-md",
            "font-bold",
            "bg-red-600",
            "text-white",
            "hover:scale-110",
            "cursor-pointer",
            "hover:shadow-xl"
            );

            Button.setAttribute('id', buttonID[i])

            Button.textContent = data[i];
            homeButtons.appendChild(Button);
        }

        homeContainer.appendChild(homeButtons);
        homeDiv.appendChild(homeContainer)
        
        document.querySelector('#content').appendChild(homeDiv);
        document.querySelector('#content').classList.add('h-screen')

        listeners.activateHome;
    }
}

export default home