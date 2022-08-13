async function load(page){
    var response = await fetch(page);
    var content = await response.text();
    return content;
}

class Header extends HTMLElement {
    constructor() {
        super();
    }
  
    async connectedCallback() {
        this.innerHTML = `
        <style>
            ${await load('../css/header.css')}
        </style>
        `;
        this.innerHTML += await load('../pages/header.html');

        const toggle = document.getElementById('chkToggle');
        const menuBtn = document.getElementById('menuBtn');
    
        toggle.addEventListener('change', e => {
            menuBtn.style.display = e.target.checked ? 'inline' : 'none';
        });

        if (matchMedia) { 
            const mq = window.matchMedia("(min-width: 768px)");
            mq.addEventListener("change",  WindowResized);
            WindowResized(mq); 
        }
        
        function WindowResized(mq) {
            if (mq.matches) {
                menuBtn.style.display = 'inline';
            } else {
                menuBtn.style.display = toggle.checked ? 'inline' : 'none';
            }
        }
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }
  
    async connectedCallback() {
        this.innerHTML = `
        <style>
            ${await load('../css/footer.css')}
        </style>
        `;
        this.innerHTML += await load('../pages/footer.html');
    }
}

class Newsletter extends HTMLElement {
    constructor() {
        super();
    }
  
    async connectedCallback() {
        this.innerHTML = `
        <style>
            ${await load('../css/newsletter.css')}
        </style>
        `;
        this.innerHTML += await load('../pages/newsletter.html');
    }
}

  
customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
customElements.define('newsletter-component', Newsletter);
