const mobileNavToggle = document.querySelector('#mobile-nav-toggle');
const mobileNavToggleOff = document.querySelector('#mobile-nav-toggle-off')

const footerGuideTab = document.getElementById('footer-guide-tab')
const footnoteGuideContainer = document.getElementById('footnoteGuideContainer')

const specificCatalogs = document.getElementById('specificCatalogs')
const firstSpecificCatalog = document.querySelector('[data-firstSpecificCatalog]')
const secondSpecificCatalog = document.querySelector('[data-secondSpecificCatalog]')
const thirdSpecificCatalog = document.querySelector('[data-thirdSpecificCatalog]')
const fourthSpecificCatalog = document.querySelector('[data-fourthSpecificCatalog]')

const grabImages = document.querySelectorAll('img')

//Specific Catalog Hover function
specificCatalogs.addEventListener('mouseover', () => {
    document.body.classList.add('show-specific-catalogs')
})
specificCatalogs.addEventListener('mouseout', () => {
    document.body.classList.remove('show-specific-catalogs')
})

firstSpecificCatalog.addEventListener('click', () => {
    document.body.classList.toggle('.show-catalog-one')
    document.body.classList.remove('show-catalog-two')
    document.body.classList.remove('show-catalog-three')
    document.body.classList.remove('show-catalog-four')
})
secondSpecificCatalog.addEventListener('click', () => {
    document.body.classList.remove('.show-catalog-one')
    document.body.classList.toggle('show-catalog-two')
    document.body.classList.remove('show-catalog-three')
    document.body.classList.remove('show-catalog-four')
})
thirdSpecificCatalog.addEventListener('click', () => {
    document.body.classList.remove('.show-catalog-one')
    document.body.classList.remove('show-catalog-two')
    document.body.classList.toggle('show-catalog-three')
    document.body.classList.remove('show-catalog-four')

})
fourthSpecificCatalog.addEventListener('click', () => {
    document.body.classList.remove('.show-catalog-one')
    document.body.classList.remove('show-catalog-two')
    document.body.classList.remove('show-catalog-three')
    document.body.classList.toggle('show-catalog-four')
})


// Nav Menu Toggle Functions
mobileNavToggle.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-open')
    document.body.classList.toggle('no-scroll')
});
mobileNavToggleOff.addEventListener('click', () => {
    document.body.classList.remove('mobile-nav-open')
    document.body.classList.remove('no-scroll')
});

//Footer Guide Link Functions
footerGuideTab.addEventListener('click', () => {
    footerGuideTab.classList.toggle('guide-tab-open')
})
footerGuideTab.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        footerGuideTab.classList.toggle('guide-tab-open')
    }
})
footnoteGuideContainer.addEventListener('mouseleave', () => {
    footerGuideTab.classList.remove('guide-tab-open')
})

//Function to set Lazy Loading Attribute on all images
grabImages.setAttribute('loading', 'lazy')