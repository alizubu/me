import Link from "next/link";

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer" data-scroll-section>
      <div
        className="footerContent fluid-container"
        data-scroll=""
        data-scroll-direction="vertical"
        data-scroll-speed="-4"
        data-scroll-target="#colophon"
        data-scroll-position="bottom"
      >
        <p id="year">Made With ❤️<span className="d-none d-md-inline">© </span>{new Date().getFullYear()} — Ali Zubu</p>
        <div className="d-flex">
          <p>
            <Link href="/privacy">Privacy</Link> /{" "}
            <Link href="/cookies">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
