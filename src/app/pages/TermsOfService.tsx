import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

export function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Future Scope Labs Terms of Service. Read our terms and conditions for using our web design and software development services."
        path="/terms-of-service"
        keywords="terms of service, terms and conditions, legal terms, service agreement"
      />
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
          Terms of Service
        </h1>
        
        <div className="space-y-8 text-black/70 dark:text-white/70" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">2. Services</h2>
            <p className="leading-relaxed">
              We provide web design and software development services. The scope of work, deliverables, timelines, and payment 
              terms will be outlined in individual project agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed mb-4">
              Upon full payment, you will own the final deliverables created specifically for your project. However:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>We retain the right to showcase completed work in our portfolio</li>
              <li>Pre-existing materials, tools, and frameworks remain our property</li>
              <li>Third-party assets are subject to their respective licenses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="leading-relaxed">
              Payment terms will be specified in your project agreement. Typically, we require a deposit before work begins 
              and final payment upon project completion. Late payments may result in project delays or suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">5. Revisions and Changes</h2>
            <p className="leading-relaxed">
              Each project includes a specified number of revision rounds. Additional revisions or changes to the project scope 
              may incur additional charges, which will be communicated and agreed upon before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p className="leading-relaxed">
              We respect your privacy and will keep all project information confidential. We will not share your business 
              information, ideas, or proprietary data with third parties without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              We strive for excellence but cannot guarantee that our services will be error-free or uninterrupted. 
              Our liability is limited to the amount paid for the specific project in question.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate a project agreement with written notice. Upon termination, you will be billed 
              for work completed up to that point, and we will deliver any completed materials.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
              to this website. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-black dark:text-white text-2xl font-semibold mb-4">10. Contact</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our Book a Call page.
            </p>
          </section>

          <p className="text-sm text-black/50 dark:text-white/50 mt-12 text-center">
            Last updated: March 4, 2026
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
    </>
  );
}