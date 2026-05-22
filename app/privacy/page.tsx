import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ali Zubu",
  description: "Privacy Policy of Ali Zubu's personal website.",
};

export default function PrivacyPage() {
  return (
    <div style={{ overflowY: "auto", cursor: "auto" }}>
      <div className="page-wrap">
        <Link className="back-link" href="/">← Back to home</Link>

        <h1 className="serif">Privacy Policy</h1>
        <p className="updated">Last updated: May 2024</p>

        <p>
          Welcome to <strong>Ali Zubu</strong>&apos;s personal website (
          <em>alizubu.github.io</em>). This Privacy Policy explains what
          information is collected when you visit this site and how it is used.
        </p>

        <h2>1. Information Collected</h2>
        <p>
          This website does <strong>not</strong> collect any personally
          identifiable information (PII) directly. No registration, login, or
          form submission is required.
        </p>
        <p>
          However, the following third-party services may collect anonymous usage
          data:
        </p>
        <ul>
          <li>
            <strong>GitHub Pages</strong> — hosts this website and may log IP
            addresses and access times as part of standard server logs.
          </li>
          <li>
            <strong>Google Fonts / CDN libraries</strong> — external stylesheets
            and scripts loaded from third-party CDNs may log request metadata.
          </li>
        </ul>

        <h2>2. Cookies</h2>
        <p>
          This website itself does not set any first-party cookies. Third-party
          scripts (such as CDN-hosted libraries) may set their own cookies. For
          full details, see the <Link href="/cookies">Cookies Policy</Link>.
        </p>

        <h2>3. External Links</h2>
        <p>
          This site contains links to external platforms (Behance, Dribbble,
          Instagram, YouTube, Facebook, CodePen). Once you leave this site, the
          privacy practices of those platforms apply. Ali Zubu has no control
          over their data practices.
        </p>

        <h2>4. Analytics</h2>
        <p>
          This website does not currently use any analytics service (e.g. Google
          Analytics). If this changes in the future, this policy will be updated
          accordingly.
        </p>

        <h2>5. Children&apos;s Privacy</h2>
        <p>
          This website is not directed at children under the age of 13 and does
          not knowingly collect data from them.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. The &quot;Last
          updated&quot; date at the top of this page will reflect any changes.
          Continued use of the site after changes constitutes acceptance of the
          new policy.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach out
          via email:{" "}
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
