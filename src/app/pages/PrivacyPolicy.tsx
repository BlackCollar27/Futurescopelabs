import { motion } from 'motion/react';
import { Footer } from '../components/Footer';

export function PrivacyPolicy() {
  return (
    <div className="relative z-10 flex flex-col items-center max-w-4xl w-full px-4 pb-32 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h1 
          className="text-black dark:text-white tracking-tight leading-tight text-[36px] md:text-[44px] mx-[0px] my-[32px] font-semibold text-center"
          style={{ 
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-black/70 dark:text-white/70" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Name, email address, and contact information when you book a call or inquiry</li>
              <li>Project details and requirements you share with us</li>
              <li>Communication history and correspondence</li>
              <li>Payment and billing information for services rendered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about projects, updates, and inquiries</li>
              <li>Process payments and maintain billing records</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
              <li>With your explicit consent</li>
              <li>With service providers who assist in our operations (e.g., payment processors, hosting providers)</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">4. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              These technologies help us understand how you use our site and improve our services. 
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
              unless a longer retention period is required by law. Project files and communications are typically retained 
              for the duration of the project and for a reasonable period thereafter.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent where we rely on consent to process your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">8. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the 
              privacy practices of these third parties. We encourage you to review their privacy policies before 
              providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy on this page and updating the "Last updated" date. Your continued use of our services 
              after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please contact us through our Book a Call page.
            </p>
          </section>

          <p className="text-sm text-black/50 dark:text-white/50 mt-12 text-center">
            Last updated: March 4, 2026
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}