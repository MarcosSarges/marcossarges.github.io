const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    // Caso queira o nativo apenas
    window.scroll({
        top: to,
        behavior: "smooth",
    })
    smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
}

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

/*
 *link para o video do autor da funcionalidade https://www.youtube.com/watch?v=tzbpAqb2Wjc&t=68s
 */