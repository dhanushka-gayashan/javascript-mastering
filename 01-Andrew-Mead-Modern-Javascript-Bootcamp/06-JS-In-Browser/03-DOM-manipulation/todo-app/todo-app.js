const ps = document.querySelectorAll('p')

ps.forEach(function name(p) {
    p.textContent.includes('the') ? p.remove() : null
})