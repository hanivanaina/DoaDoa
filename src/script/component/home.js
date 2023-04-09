import ImageHome from "../../img/img-home.png";

class SectionHome extends HTMLElement {
    connectedCallback(){
    this.render();
  }
  
  render() {
    this.innerHTML = `
            <section class="home" id="home">
                <div class="home-text">
                    <h1>Kekuatan Doa</h1>
                    <h2>"Berdoalah kepada-Ku, niscaya akan Kuperkenankan Bagimu" <br>(QS. Ghafir: 60)</h2>
                    <a href="#search" class="btn">Mulai Cari Doa</a>
                </div>

                <div class="home-img">
                    <img src="${ImageHome}">
                </div>
            </section>`;
  }
}

customElements.define('section-home', SectionHome);