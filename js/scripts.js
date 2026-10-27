/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Highlight the nav link for the section currently in view (works scrolling up and down)
    const navLinks = [].slice.call(document.querySelectorAll('#mainNav .nav-link'));
    const spySections = navLinks
        .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
        .filter(item => item.section);

    var updateActiveLink = function () {
        // A section is "current" once its top passes 40% down from the top of the viewport
        const marker = window.scrollY + window.innerHeight * 0.4;
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
        let current = null;
        spySections.forEach(item => {
            if (item.section.offsetTop <= marker) {
                current = item;
            }
        });
        if (atBottom && spySections.length) {
            current = spySections[spySections.length - 1];
        }
        spySections.forEach(item => item.link.classList.toggle('active', item === current));
    };

    updateActiveLink();
    document.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);

    // Swap the older projects button label when the section opens/closes
    const olderProjects = document.getElementById('olderProjects');
    const olderProjectsToggle = document.getElementById('olderProjectsToggle');
    if (olderProjects && olderProjectsToggle) {
        olderProjects.addEventListener('show.bs.collapse', () => {
            olderProjectsToggle.textContent = 'Hide older projects';
        });
        olderProjects.addEventListener('hide.bs.collapse', () => {
            olderProjectsToggle.textContent = 'Show older projects';
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});