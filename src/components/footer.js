import listeners from "./listeners";

const footer = {
    get create() {
        const footerDiv = document.createElement('footer');
        const graySpace = document.createElement('div');

        graySpace.classList.add(
        "mt-12",
        "w-full",
        "h-24",
        "bg-gray-100");

        footerDiv.classList.add(
        "flex",
        "w-full",
        "justify-evenly",
        "flex-wrap",
        "gap-16",
        "mt-4",
        "p-8",
        "px-16",
        "border-t",
        "bg-white");

        const contactDiv = document.createElement('div');
        const logo = document.createElement('h1');
        const logoIcon = document.createElement('i');
        const contactContainer = document.createElement('div');
        const contactTitle = document.createElement('h4');

        contactDiv.classList.add(
        "flex",
        "flex-wrap",
        "justify-center",
        "gap-8");
        
        logo.classList.add(
        "flex",
        "justify-center",
        "items-center",
        "text-4xl",
        "font-semibold",
        "bg-red-600",
        "text-white",
        "p-6",
        "rounded-xl");

        logoIcon.classList.add(
        "fa-solid",
        "fa-burger",
        "mr-2");

        contactTitle.classList.add(
        "mb-1",
        "font-extrabold");

        logo.appendChild(logoIcon);
        logo.appendChild(document.createTextNode('iFood'));
        contactDiv.appendChild(logo);

        contactTitle.textContent = "Contact Us";
        contactContainer.appendChild(contactTitle);

        for(let i = 0; i < 3; i++) {
            const data = [
                "Address: 123 Main Street, City, State ZIP",
                "Phone: (555) 123-4567",
                "Email: info@fastfooddelivery.com"
            ]

            const line = document.createElement("p");

            line.textContent = data[i];

            contactContainer.appendChild(line)
        }

        contactDiv.appendChild(contactContainer)

        footerDiv.appendChild(contactDiv);

        const linksDiv = document.createElement('div');
        const linksTitle = document.createElement('h4');
        const linksContainer = document.createElement('ul');

        linksTitle.classList.add("font-extrabold");
        linksTitle.textContent = "Quick Links";
        linksDiv.appendChild(linksTitle);

        for(let i = 0; i < 3; i++) {
            const data = ["Home", "Menu", "Locations"];
            const idData = ['footer-home', 'footer-menu', 'footer-locations']

            const link = document.createElement('a');
            const breakLine = document.createElement('br');

            link.textContent = data[i];
            link.setAttribute('id', idData[i]);
            link.classList.add("cursor-pointer")
            linksContainer.appendChild(link);

            if(i === 2) continue;

            linksContainer.appendChild(breakLine)
        }

        linksDiv.appendChild(linksContainer)
        footerDiv.appendChild(linksDiv);
        

        const socialDiv = document.createElement('div');
        const socialTitle = document.createElement('h4');
        const socialContainer = document.createElement('div');

        socialDiv.classList.add(
        'flex',
        'flex-col',
        'gap-2');

        socialTitle.classList.add("font-extrabold");

        socialContainer.classList.add(
        'flex',
        'gap-2');

        socialTitle.textContent = "Follow Us";
        socialDiv.appendChild(socialTitle);

        for(let i = 0; i < 3; i++){
            const data = [
                "fa-facebook", "fa-twitter", "fa-instagram"
            ]

            const socialLink = document.createElement('a');
            const socialIcon = document.createElement('i');

            socialLink.classList.add('text-2xl', 'cursor-pointer');
            socialIcon.classList.add("fab", data[i]);

            socialLink.appendChild(socialIcon);
            socialContainer.appendChild(socialLink);
        }

        socialDiv.appendChild(socialContainer);
        footerDiv.appendChild(socialDiv);

        document.querySelector('#content').appendChild(graySpace);
        document.querySelector('#content').appendChild(footerDiv);

        listeners.activateFooter;
    }
}

export default footer;