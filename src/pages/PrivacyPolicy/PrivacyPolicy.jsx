import React from "react";
import LayoutOne from "../../Layouts/LayoutOne";
import style from './PrivacyPolicy.module.css';
import { Link } from "react-router-dom";


const PrivacyPolicy = () => {
  return (
    <LayoutOne>
      <section className="blog-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <center className={style.termsh1} >Coloniume Privacy & Policy</center>

              <div className={style.paragraph1}>
                <p>
                  Effective Date: 2021-05-10
                </p>
                <p>
                  At Coloniume PTY Ltd ("Coloniume," "we," "us," or "our"), we value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you interact with our website, services, and products. We are committed to complying with applicable privacy laws and regulations, including the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).
                </p>
              </div>

              <div className={style.section}>
                <h3>1. Collection of Personal Information</h3>
                <div className={style.paragraph1}>
                  <h4>
                    1.1. Personal Information We Collect
                  </h4>
                  <p>
                    We may collect and process the following personal information about you:
                    <ol>
                      <li>
                        Contact information, such as your name, email address, phone number, and physical address.
                      </li>
                      <li>
                        Account credentials, including usernames and passwords.
                      </li>
                      <li>
                        Information provided during the creation or use of our services, such as transactional data, blockchain addresses, and public keys.
                      </li>
                      <li>
                        Information you provide when communicating with us, such as inquiries, feedback, or support requests.
                      </li>
                      <li>
                        Information obtained through the use of cookies, web beacons, and similar technologies when you interact with our website or online services.
                      </li>
                      <li>
                        Any other information you voluntarily provide to us.
                      </li>
                    </ol>
                  </p>
                  <h4>
                    1.2. Collection Methods
                  </h4>
                  <p>
                    We collect personal information through various means, including:
                    <ol>
                      <li>
                        Direct interactions: When you register an account, use our services, or communicate with us.
                      </li>
                      <li>
                        Automated technologies: When you visit our website or use our online services, we may collect information through cookies and similar technologies.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>2. Use of Personal Information</h3>
                <div className={style.paragraph1}>
                  <p>
                    We use the personal information we collect for the following purposes:
                    <ol><li>
                      To provide and maintain our services, including customer support and responding to your inquiries.
                    </li>
                      <li>
                        To personalize your experience and improve our website, services, and products.
                      </li>
                      <li>
                        To process transactions and facilitate blockchain-based transactions.
                      </li>
                      <li>
                        To communicate with you about updates, changes, or enhancements to our services.
                      </li>
                      <li>
                        To comply with legal obligations, resolve disputes, and enforce our policies.
                      </li>
                      <li>
                        To conduct data analysis, research, and performance monitoring.
                      </li>
                      <li>
                        To protect the rights, property, and safety of Coloniume, its users, and the public.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>3. Disclosure of Personal Information</h3>
                <div className={style.paragraph1}>
                  <p>
                    We may disclose your personal information in the following circumstances:
                    <ol><li>
                      With your consent or at your direction.
                    </li>
                      <li>
                        To trusted third-party service providers who assist us in operating our business and providing our services.
                      </li>
                      <li>
                        To comply with legal obligations, enforce our policies, or respond to lawful requests from public authorities.
                      </li>
                      <li>
                        In connection with a merger, acquisition, or sale of all or a portion of our assets, provided that the recipient agrees to protect your personal information in a manner consistent with this Privacy Policy.
                      </li>
                    </ol>
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>4. Security of Personal Information</h3>
                <div className={style.paragraph1}>
                  <p>
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is entirely secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>5. Your Rights and Choices</h3>
                <div className={style.paragraph1}>
                  <p>
                    You have certain rights and choices regarding your personal information, including the right to access, update, and delete your information. To exercise these rights or for any privacy-related inquiries, please contact us using the information provided in Section 8.
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>6. Children's Privacy</h3>
                <div className={style.paragraph1}>
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take reasonable steps to delete such information.
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>7. International Data Transfers</h3>
                <div className={style.paragraph1}>
                  <p>
                    Your personal information may be transferred to and processed in countries other than your own. We take appropriate measures to ensure that any international transfers comply with applicable data protection laws and regulations.
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>8. Contact Us</h3>
                <div className={style.paragraph1}>
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact us at:
                    <br/>
                    <Link to="mailto:info@coloniume.org">info@coloniume.org</Link>
                  </p>
                </div>
              </div>

              <div className={style.section}>
                <h3>9. Changes to this Privacy Policy</h3>
                <div className={style.paragraph1}>
                  <p>
                    We may update this Privacy Policy from time to time. The "Effective Date" at the top of this page indicates when the policy was last revised. We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services constitutes your acceptance of the updated Privacy Policy.
                  </p>
                  <p>
                    Please note that this Privacy Policy does not apply to any third-party websites or services linked to or integrated with our services. We are not responsible for the privacy practices of such third parties, and we encourage you to review their privacy policies before providing them with your personal information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            </div>
          </div>
        </div>
      </section>

    </LayoutOne>
  );
};

export default PrivacyPolicy;
