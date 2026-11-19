import React from 'react';

export default function Terms() {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p className="terms-updated">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using BugFreeRobot, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms,
            you are prohibited from using or accessing this site.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Intellectual Property Rights</h2>
          <p>
            All content, features, and functionality on BugFreeRobot—including but not limited
            to text, graphics, logos, icons, images, and software—are the exclusive property of
            BugFreeRobot and its licensors and are protected by international copyright, trademark,
            and other intellectual property laws.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. User Responsibilities & Acceptable Use</h2>
          <p>You agree not to use the service to:</p>
          <ul>
            <li>Engage in any unlawful, fraudulent, or malicious activities.</li>
            <li>Attempt to reverse engineer, decompile, or tamper with the platform codebase or infrastructure.</li>
            <li>Transmit viruses, worms, or any malicious payload that could compromise system integrity.</li>
            <li>Interfere with or disrupt the security or performance of our services.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Disclaimer of Warranties</h2>
          <p>
            The services are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties
            of any kind, either express or implied. BugFreeRobot makes no warranties that the service
            will be uninterrupted, bug-free, or secure.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall BugFreeRobot, its officers, directors, employees, or partners be liable
            for any indirect, incidental, special, consequential, or punitive damages resulting from your
            use or inability to use the services.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time,
            without prior notice or liability, for any reason, including without limitation breach of these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Changes to Terms</h2>
          <p>
            We may revise these Terms of Service from time to time at our sole discretion. Any revisions
            will become effective immediately upon posting. Your continued use of the service constitutes
            acceptance of the revised terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Service, please reach out to us at:
            <br />
            <strong>Email:</strong> legal@bugfreerobot.dev
          </p>
        </section>
      </div>
    </div>
  );
}
