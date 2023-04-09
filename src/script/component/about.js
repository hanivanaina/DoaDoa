import ImageAbout from "../../img/img-about.jpg";

class SectionAbout extends HTMLElement {
    connectedCallback(){
    this.render();
  }
  
  render() {
    this.innerHTML = `
    <section class="about" id="about">
            <div class="about-img">
                <img src="${ImageAbout}">
            </div>
            <div class="about-text">
                <span>Tentang Doa - Doa</span>
                <h2>Baca Doa - Doa Agar Senantiasa tentram</h2>
                <p>Doa - Doa menampilkan doa islam dalam keseharian untuk membantu umat muslim berdoa serta mengetahui arti doa keseharian</p>
                <a href="#search" class="btn">Mulai Cari Doa</a>
            </div>
    </section>`;
  }
}

customElements.define('section-about', SectionAbout);