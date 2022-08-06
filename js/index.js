async function load(page){
    var response = await fetch(page);
    var content = await response.text();
    return content;
}

window.addEventListener('load', async () => {
    const header = document.getElementById('header');
    header.innerHTML = await load('../pages/header.html');

    const footer = document.getElementById('footer');
    footer.innerHTML = await load('../pages/footer.html');
});