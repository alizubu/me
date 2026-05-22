export default function PortfolioSection() {
  return (
    <section className="section portfolio" data-scroll-section>
      <div className="row d-flex fluid-container justify-content-end">
        <div className="col-12 col-lg-6">
          <h3 className="big forced serif">
            <span data-scroll="" data-scroll-speed="-1" data-scroll-direction="horizontal">
              <strong>Would</strong>
            </span>
            <span data-scroll="" data-scroll-speed="2" data-scroll-direction="horizontal">
              <strong>you like to see</strong>
            </span>
            <span data-scroll="" data-scroll-speed="-3" data-scroll-direction="horizontal">
              <strong>some work?</strong>
            </span>
          </h3>
          <p data-scroll="" className="big forced">
            <span>
              <span className="emoji-inline">👉</span>{" "}
              <a href="https://www.behance.net/alizubu" target="_blank" rel="noopener noreferrer">
                Click here
              </a>
            </span>
            <span> to view my Portfolio.</span>
          </p>
          <p
            className="mt-5 pt-3"
            data-scroll=""
            data-scroll-speed="12"
            data-scroll-direction="horizontal"
          >
            Or{" "}
            <a href="https://www.behance.net/alizubu" target="_blank" rel="noopener noreferrer">
              here
            </a>
            . <span className="emoji-inline">👈</span>
          </p>
        </div>
      </div>
      <div className="d-flex fluid-container justify-content-start">
        <p className="forced big" data-scroll="" data-scroll-speed="20">
          <span>
            Or{" "}
            <a href="https://www.behance.net/alizubu" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </span>
          <span className="emoji-inline" style={{ margin: "0 auto" }}>👆</span>
        </p>
      </div>
    </section>
  );
}
