document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-menu')
    dropdowns.forEach(dropdown => dropdown.addEventListener('click', event => {
        if (event.target.tagName === 'A')
            dropdown.parentElement.classList.remove('show')
    }))
})