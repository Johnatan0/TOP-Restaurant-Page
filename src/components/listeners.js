import footer from "./footer";
import home from "./home";
import locations from "./locations";
import Menu from "./menucontent";
import navBar from "./navbar";

const listeners = {
    get activate() {
        document.querySelector('#nav-home').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            home.create;
            footer.create;
        })

        document.querySelector('#nav-menu').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            Menu.create;
            footer.create;
        })

        document.querySelector('#nav-locations').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            locations.create;
            footer.create;
        })
    },

    get activateHome(){
        document.querySelector('#home-menu').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            Menu.create;
            footer.create;
        })

        document.querySelector('#home-locations').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            locations.create;
            footer.create;
        })
    },

    get activateFooter() {
        document.querySelector('#footer-home').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            home.create;
            footer.create;
        })

        document.querySelector('#footer-menu').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            Menu.create;
            footer.create;
        })

        document.querySelector('#footer-locations').addEventListener('click', () => {
            document.querySelector('#content').textContent = '';
            navBar.create;
            locations.create;
            footer.create;
        })
    }
}

export default listeners