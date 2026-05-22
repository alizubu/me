export default function ContactSection() {
  return (
    <section className="section hero thanks d-flex" data-scroll-section>
      <div className="hero-container titleAnimation">
        <h1 className="title serif big" data-scroll="">
          <span data-scroll="" data-scroll-delay="0.18" data-scroll-speed="7" data-scroll-position="center">T</span>
          <span data-scroll="" data-scroll-delay="0.14" data-scroll-speed="10">H</span>
          <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="4">A</span>
          <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="7">N</span>
          <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="12">K</span>
          <span className="d-none d-md-block" data-scroll="" data-scroll-delay="0.12" data-scroll-speed="5"> </span>
          <span className="d-none d-md-block" data-scroll="" data-scroll-delay="0.18" data-scroll-speed="7" data-scroll-position="center">Y</span>
          <span className="d-none d-md-block" data-scroll="" data-scroll-delay="0.14" data-scroll-speed="10">O</span>
          <span className="d-none d-md-block" data-scroll="" data-scroll-delay="0.12" data-scroll-speed="4">U</span>
          <span className="d-block d-md-none" data-scroll="" data-scroll-delay="0.12" data-scroll-speed="4">S</span>
        </h1>
      </div>
      <div className="fluid-container min">
        <p className="contact-info text-center mt-2 mt-xl-3" data-scroll="" data-scroll-speed="4">
          If you want to contact me, you can write a mail to{" "}
          <a href="mailto:alizubuu@gmail.com" target="_blank" rel="noopener noreferrer">
            <strong>alizubuu@gmail.com</strong>
          </a>{" "}
          or message me on Instagram{" "}
          <a href="https://instagram.com/alizubu" target="_blank" rel="noopener noreferrer">
            <strong>@alizubu</strong>
          </a>
        </p>
        <div className="d-flex" data-scroll="" data-scroll-speed="4">
          <div className="social-icons">
            <a href="http://be.net/alizubu" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-behance"></i>
            </a>
            <a href="https://dribbble.com/alizubugraphics" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-dribbble"></i>
            </a>
            <a href="https://www.instagram.com/alizubu/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://youtube.com/alizubu" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.fb.com/alizubu" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://codepen.io/alizubu" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
