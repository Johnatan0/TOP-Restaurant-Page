const locations = {
    get create() {
        const locationDiv = document.createElement('div');
        const locationTitle = document.createElement('h1');
        const locationIcon = document.createElement('i')
        const locationGrid = document.createElement('div');

        locationDiv.classList.add('h-full', 'lg:max-w-7xl');
        locationTitle.classList.add('w-full', 'text-center', 'p-8', 'text-3xl', 'font-bold');
        locationIcon.classList.add('fa-solid', 'fa-location-dot', 'p-2');
        locationGrid.classList.add(
        "grid",
        "lg:grid-cols-2",
        "p-8",
        "gap-12",
        "justify-center",
        "mx-2",
        "font-semibold",
        "text-white");
        
        locationTitle.appendChild(locationIcon);
        locationTitle.appendChild(document.createTextNode('Our locations'));

        locationDiv.appendChild(locationTitle);

        for(let i = 0; i < 4; i++){
            const gridItem = document.createElement('div');
            const gridItemIcon = document.createElement('i');
            const gridContent = document.createElement('div');

            gridItem.classList.add(
            "bg-red-600",
            "flex",
            "justify-center",
            "items-center",
            "gap-4",
            "p-8",
            "rounded-xl"   
            )

            gridItemIcon.classList.add(
            "sm:block",
            "hidden",
            "fa-solid",
            "fa-location-dot",
            "text-7xl",
            "p-2"    
            )

            gridContent.classList.add(
            "flex",
            "flex-col",
            "justify-center",
            "gap-2"
            )

            gridItem.appendChild(gridItemIcon);

            for(let x = 0; x < 3; x++){

                const data = [
                    [
                        "iFood Downtown Delights ",
                        "Address: 123 Main Street, Cityville",
                        "Phone: (555) 123-4567"
                    ],
                    [
                        "iFood Coastal Bites",
                        "Address: 789 Beachfront Avenue, Oceanview",
                        "Phone: (555) 789-0123"
                    ],
                    [
                        "iFood Urban Eats",
                        "Address: 456 Highrise Plaza, Metroville",
                        "Phone: (555) 456-7890"
                    ],
                    [
                        "iFood Suburban Sizzles",
                        "Address: 321 Parkside Drive, Suburbia",
                        "Phone: (555) 321-6543"
                    ]
                ]

                const paragraph = document.createElement('p');

                paragraph.textContent = data[i][x];
                gridContent.appendChild(paragraph);
            }

            gridItem.appendChild(gridContent);
            locationGrid.appendChild(gridItem)
        }

        locationDiv.appendChild(locationGrid);
        document.querySelector('#content').appendChild(locationDiv);
    }
}

export default locations