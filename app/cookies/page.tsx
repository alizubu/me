import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy — Ali Zubu",
  description: "Cookies Policy of Ali Zubu's personal website.",
};

export default function CookiesPage() {
  return (
    <div style={{ overflowY: "auto", cursor: "auto" }}>
      <div className="page-wrap">
        <Link className="back-link" href="/">← Back to home</Link>

        <h1 className="serif">Cookies Policy</h1>
        <p className="updated">Last updated: May 2024</p>

        <p>
          This page explains how cookies and similar technologies are used on{" "}
          <strong>Ali Zubu</strong>&apos;s personal website (
          <em>alizubu.github.io</em>).
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device by your browser when
          you visit a website. They are widely used to make websites work more
          efficiently and to provide information to website owners.
        </p>

        <h2>2. Does This Website Use Cookies?</h2>
        <p>
          This website does <strong>not</strong> set any first-party cookies.
          However, third-party resources loaded on this site (fonts, CSS/JS
          libraries from CDNs) may set their own cookies or use local storage as
          part of their normal operation.
        </p>

        <h2>3. Third-Party Cookies</h2>
        <p>
          The following third-party services are used on this site and may set
          cookies or collect data:
        </p>

        <table className="cookie-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>More info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jsDelivr CDN</td>
              <td>Serves Bootstrap &amp; Locomotive Scroll CSS/JS</td>
              <td>Performance</td>
              <td>
                <a href="https://www.jsdelivr.com/privacy-policy-jsdelivr-net" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </td>
            </tr>
            <tr>
              <td>unpkg CDN</td>
              <td>Serves GSAP, Splitting.js, emoji.css</td>
              <td>Performance</td>
              <td>
                <a href="https://www.npmjs.com/policies/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </td>
            </tr>
            <tr>
              <td>Cloudflare CDN</td>
              <td>Serves Font Awesome icons &amp; jQuery</td>
              <td>Performance</td>
              <td>
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </td>
            </tr>
            <tr>
              <td>GitHub Pages / Vercel</td>
              <td>Hosts this website</td>
              <td>Necessary</td>
              <td>
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                  Privacy Statement
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>4. Types of Cookies</h2>
        <ul>
          <li>
            <strong>Necessary cookies</strong> — essential for the website to
            function correctly. These cannot be disabled.
          </li>
          <li>
            <strong>Performance cookies</strong> — collect anonymous data about
            how visitors use the site (e.g. CDN request logs). No personal data
            is shared.
          </li>
        </ul>
        <p>
          This website does <strong>not</strong> use advertising, tracking, or
          profiling cookies.
        </p>

        <h2>5. How to Control Cookies</h2>
        <p>
          You can control and/or delete cookies at any time through your browser
          settings. Below are links to cookie management guides for popular
          browsers:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Please note that disabling cookies may affect the functionality of this
          and other websites you visit.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          This Cookies Policy may be updated from time to time. The &quot;Last
          updated&quot; date at the top of this page will reflect any changes.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have any questions about this Cookies Policy, feel free to reach
          out:{" "}
          <a href="mailto:alizubuu@gmail.com">alizubuu@gmail.com</a> or on
          Instagram{" "}
          <a href="https://instagram.com/alizubu" target="_blank" rel="noopener noreferrer">
            @alizubu
          </a>
          .
        </p>
      </div>

      <footer className="mini">
        <p>
          © 2024 Ali Zubu — <Link href="/privacy">Privacy</Link> /{" "}
          <Link href="/cookies">Cookies</Link>
        </p>
      </footer>
    </div>
  );
}
