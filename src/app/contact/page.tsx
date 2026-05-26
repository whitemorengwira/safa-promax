import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/motion/Reveal';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-bg">
      {/* Full-viewport Hero */}
      {/* LOCKED HERO — DO NOT CHANGE */}
      <PageHero
        eyebrow="Contact · SA Film Academy"
        title="Get in _Touch._"
        subtitle="Ready to transform the South African screen? Whether you are a production company, a potential trainee, or a strategic partner, we want to hear from you."
        imageSrc="/images/ai/contact/email-envelope-abstract.webp"
        imageAlt="Abstract gold-edged envelope with dramatic cinematic lighting, dark palette with warm accent"
      />

      <FilmstripDivider />

      {/* Contact Form & Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <Reveal>
              <div className="bg-surface/30 p-8 md:p-12 border border-line-strong">
                <h2 className="text-3xl font-bold mb-8">Send a _Message_</h2>
                <form className="space-y-6" method="POST" action="/api/contact">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-body text-xs uppercase tracking-widest text-gold font-semibold">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="bg-bg border border-line text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-body text-xs uppercase tracking-widest text-gold font-semibold">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-bg border border-line text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="organisation" className="font-body text-xs uppercase tracking-widest text-gold font-semibold">
                      Organisation
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      className="bg-bg border border-line text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition"
                      placeholder="Your organisation"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="enquiry-type" className="font-body text-xs uppercase tracking-widest text-gold font-semibold">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiry-type"
                      name="enquiry-type"
                      required
                      className="bg-bg border border-line text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="production">Production Company</option>
                      <option value="trainee">Trainee / Intern</option>
                      <option value="funder">Funder / Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-body text-xs uppercase tracking-widest text-gold font-semibold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="bg-bg border border-line text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-8 py-4 hover:bg-gold-soft transition"
                  >
                    Send Message →
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Right: Details */}
            <div className="space-y-12">
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <span className="eyebrow">Direct Contact</span>
                  <h3 className="text-2xl font-bold">Reach out _directly._</h3>
                  <div className="space-y-2 font-body text-muted">
                    <p>Email: <a href="mailto:info@safilmacademy.org" className="text-gold hover:text-gold-soft transition">info@safilmacademy.org</a></p>
                    <p>Phone: +27 (0) 21 461 7950</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="space-y-4">
                  <span className="eyebrow">Location</span>
                  <h3 className="text-2xl font-bold">Visit our _Studio._</h3>
                  <div className="space-y-2 font-body text-muted">
                    <p>Atlantic Studios</p>
                    <p>70-72 Montague Drive</p>
                    <p>Montague Gardens, Cape Town</p>
                    <p>South Africa, 7441</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-4">
                  <span className="eyebrow">Social</span>
                  <h3 className="text-2xl font-bold">Follow the _Journey._</h3>
                  <div className="flex gap-6 font-body text-xs font-semibold uppercase tracking-widest text-gold">
                    <a href="https://linkedin.com/company/sa-film-academy" target="_blank" rel="noopener" className="hover:text-gold-soft transition">LinkedIn</a>
                    <a href="https://instagram.com/safilmacademy" target="_blank" rel="noopener" className="hover:text-gold-soft transition">Instagram</a>
                    <a href="https://facebook.com/TheSAFilmAcademy" target="_blank" rel="noopener" className="hover:text-gold-soft transition">Facebook</a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="pt-8">
                  <ImagePlaceholder
                    src="/images/ai/safa-cineterns-portal.png"
                    alt="SA Film Intense Talent Portal"
                    brief="Laptop screen showing the SA Film Intense talent portal, cinematic lighting"
                    orientation="landscape"
                    className="opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FilmstripDivider />
    </main>
  );
}
