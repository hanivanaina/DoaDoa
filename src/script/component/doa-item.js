class DoaItem extends HTMLElement {
  set doa(doa) {
    this._doa = doa;
    this.render();
  }
 
  render() {
    this.innerHTML = `
    <div class="doa-info">
        <h2>${this._doa.doa}</h2>
        <p>${this._doa.ayat}</p>
        <p>${this._doa.latin}</p>
        <p>${this._doa.artinya}</p>
    </div>
    `;
  }
}
 
customElements.define('doa-item', DoaItem);