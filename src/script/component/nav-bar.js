class NavBar extends HTMLElement {
    connectedCallback(){
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <nav class="navbar">
    <div class="logo">Doa - Doa</div>
    <ul class="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        <div class="menu">
            <li><a href="#">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#search">Cari Doa</a></li>
        </div>
    </ul>
    </nav>`;
  }
}

customElements.define('nav-bar', NavBar);