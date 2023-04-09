import './doa-item.js';
 
class DoaList extends HTMLElement {
  set dataDoa(dataDoa) {
    this._dataDoa = dataDoa;
    this.render();
  }
 
  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.innerHTML = '';
    this._dataDoa.forEach(doa => {
      const doaItemElement = document.createElement('doa-item');
      doaItemElement.doa = doa;
      
      this.appendChild(doaItemElement);
    });
  }
}
 
customElements.define('doa-list', DoaList);