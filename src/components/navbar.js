import listeners from "./listeners";

const navBar = {
    get create() {
        const navDiv = document.createElement('div');
        const navTitle = document.createElement('h1');
        const mobileNav = document.createElement('span');
        const mobileNavIcon = document.createElement('i');
        const navElement = document.createElement('nav');
        const navTitleIcon = document.createElement('i');

        navDiv.classList.add(
        "flex",
        "justify-around",
        "p-6",
        "flex-wrap",
        "gap-8",
        "shadow",
        "w-full",
        "bg-red-600",
        "text-white");

        navTitle.classList.add(
        "flex",
        "justify-center",
        "items-center",
        "text-4xl",
        "font-semibold");

        mobileNav.classList.add(
        "lg:hidden",
        "text-4xl",
        "cursor-pointer");

        mobileNavIcon.classList.add(
        "fa-solid",
        "fa-bars");
        
        navElement.classList.add(
        "lg:flex",
        "lg:flex-wrap",
        "lg:justify-center",
        "hidden");

        navTitleIcon.classList.add(
        "fa-solid",
        "mr-2",
        "fa-burger");
        
        navTitle.appendChild(navTitleIcon);
        navTitle.appendChild(document.createTextNode("iFood"));
        navDiv.appendChild(navTitle);

        mobileNav.setAttribute('id', 'menu');
        mobileNav.appendChild(mobileNavIcon);
        navDiv.appendChild(mobileNav);

        for(let i = 0; i < 3; i++) {

            const iconNames = ['fa-house', 'fa-bars', 'fa-circle-exclamation'];
            const itemText = ['HOME', 'MENU', 'LOCATIONS'];
            const itemID = ["nav-home", "nav-menu", "nav-locations"]

            const navItem = document.createElement('li');
            const navItemIcon = document.createElement('i');
            
            navItem.classList.add(
            "list-none",
            "flex",
            "justify-center",
            "items-center",
            "font-bold",
            "cursor-pointer",
            "transition-all",
            "border-white",
            "border-2",
            "p-4",
            "m-2",
            "rounded-lg",
            "hover:bg-white",
            "hover:text-red-600");

            navItem.setAttribute('id', itemID[i])

            navItemIcon.classList.add(
            "fa-solid",
            'mr-2',
            iconNames[i]
            )
            
            navItem.appendChild(navItemIcon);
            navItem.appendChild(document.createTextNode(itemText[i]))
            navElement.appendChild(navItem);
        }

        navDiv.appendChild(navElement);
        document.querySelector('#content').appendChild(navDiv);

        document.querySelector('#menu').addEventListener('click', () => {
            if(document.querySelector('nav').classList.contains('hidden')) {
                document.querySelector('nav').classList.remove('hidden');
                document.querySelector('nav').classList.add('w-full');
            } else {
                document.querySelector('nav').classList.add('hidden');
                document.querySelector('nav').classList.remove('w-full');
            }
        })

        document.querySelector('#content').classList.add(
            "flex",
            "flex-col" ,
            "items-center",
            "box-border",
            "font-roboto"
        )
        
        listeners.activate;
    }
}

export default navBar;