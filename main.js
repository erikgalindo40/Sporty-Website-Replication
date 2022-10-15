const mobileNavToggle = document.querySelector('#mobile-nav-toggle');
const mobileNavToggleOff = document.querySelector('#mobile-nav-toggle-off')
const helpLink = document.querySelector("#helpLink")

const footerGuideTab = document.getElementById('footer-guide-tab')
const footnoteGuideContainer = document.getElementById('footnoteGuideContainer')

const specificCatalogs = document.getElementById('specificCatalogs')
const firstSpecificCatalog = document.querySelector('[data-firstSpecificCatalog]')
const secondSpecificCatalog = document.querySelector('[data-secondSpecificCatalog]')
const thirdSpecificCatalog = document.querySelector('[data-thirdSpecificCatalog]')
const fourthSpecificCatalog = document.querySelector('[data-fourthSpecificCatalog]')

//Specific Catalog Hover function
specificCatalogs.addEventListener('mouseover', () => {
    document.body.classList.add('show-specific-catalogs')
})
specificCatalogs.addEventListener('mouseout', () => {
    document.body.classList.remove('show-specific-catalogs')
})

firstSpecificCatalog.addEventListener('click', () => {
    document.body.classList.toggle('show-catalog-one')
    document.body.classList.remove('show-catalog-two')
    document.body.classList.remove('show-catalog-three')
    document.body.classList.remove('show-catalog-four')
})
firstSpecificCatalog.addEventListener('keypress', (e) => {
    if (e.key=='Enter') {
        document.body.classList.toggle('show-catalog-one')
        document.body.classList.remove('show-catalog-two')
        document.body.classList.remove('show-catalog-three')
        document.body.classList.remove('show-catalog-four')
    }
})
secondSpecificCatalog.addEventListener('click', () => {
    document.body.classList.remove('show-catalog-one')
    document.body.classList.toggle('show-catalog-two')
    document.body.classList.remove('show-catalog-three')
    document.body.classList.remove('show-catalog-four')
})
secondSpecificCatalog.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        document.body.classList.remove('show-catalog-one')
        document.body.classList.toggle('show-catalog-two')
        document.body.classList.remove('show-catalog-three')
        document.body.classList.remove('show-catalog-four')
    }
})
thirdSpecificCatalog.addEventListener('click', () => {
    document.body.classList.remove('show-catalog-one')
    document.body.classList.remove('show-catalog-two')
    document.body.classList.toggle('show-catalog-three')
    document.body.classList.remove('show-catalog-four')

})
thirdSpecificCatalog.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        document.body.classList.remove('show-catalog-one')
        document.body.classList.remove('show-catalog-two')
        document.body.classList.toggle('show-catalog-three')
        document.body.classList.remove('show-catalog-four')
    }
})
fourthSpecificCatalog.addEventListener('click', () => {
    document.body.classList.remove('show-catalog-one')
    document.body.classList.remove('show-catalog-two')
    document.body.classList.remove('show-catalog-three')
    document.body.classList.toggle('show-catalog-four')
})
fourthSpecificCatalog.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        document.body.classList.remove('show-catalog-one')
        document.body.classList.remove('show-catalog-two')
        document.body.classList.remove('show-catalog-three')
        document.body.classList.toggle('show-catalog-four')
    }
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

mobileNavToggle.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        document.body.classList.toggle('mobile-nav-open')
        document.body.classList.toggle('no-scroll')
        mobileNavToggleOff.focus()
    }
})
mobileNavToggleOff.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        document.body.classList.remove('mobile-nav-open')
        document.body.classList.remove('no-scroll')
        mobileNavToggle.focus()
    }
})

helpLink.addEventListener('keydown',(e)=> {
    if(e.keyCode == 9) {
        e.preventDefault()
        mobileNavToggleOff.focus()
    }
})

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
