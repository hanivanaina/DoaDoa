class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
    
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
    
  get value() {
    return this.querySelector('#searchElement').value;
  }
    
  render() {
    this.innerHTML = `
    <section class="search" id="search">
            <div class="search">
                <input type="text" class="searchTerm" id="searchElement" placeholder="Cari doa...">
                <button type="submit" class="searchButton" id="searchButtonElement">
                    <i class='bx bx-search-alt-2'></i>
                </button>
            </div>
    </section>
    `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);