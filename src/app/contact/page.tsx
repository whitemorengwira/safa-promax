'use client';

import Link from 'next/link';
import { WordReveal } from '@/components/motion/WordReveal';
import { Reveal } from '@/components/motion/Reveal';
import { ImagePlaceholder } from '@/components/visuals/ImagePlaceholder';
import { FilmstripDivider } from '@/components/visuals/FilmstripDivider';

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <ImagePlaceholder
          src="/images/road-home/road-home-training-007.jpg"
          alt="SA Film Academy — office and team"
          brief="South African office environment, Black team members, collaborative workspace, professional film industry setting"
          orientation="video"
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-center section-padding container-max">
          <span className="eyebrow mb-6">
            <span className="num">Contact ·</span>
          </span>

          <WordReveal tag="h1" text="Get in Touch" className="mb-6 max-w-4xl" />
        </div>
      </section>

      <FilmstripDivider />

      {/* ===== CONTACT FORM & DETAILS ===== */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Form */}
            <Reveal>
              <form className="space-y-6" method="POST" action="#" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-body text-sm text-text">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-surface border border-line-strong text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-body text-sm text-text">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-surface border border-line-strong text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Organisation */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="organisation" className="font-body text-sm text-text">
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    className="bg-surface border border-line-strong text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition"
                    placeholder="Your organisation"
                  />
                </div>

                {/* Role / Enquiry Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="enquiry-type" className="font-body text-sm text-text">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiry-type"
                    name="enquiry-type"
                    required
                    className="bg-surface border border-line-strong text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="production">Production Company</option>
                    <option value="trainee">Trainee / Intern</option>
                    <option value="funder">Funder / Partner</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-sm text-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="bg-surface border border-line-strong text-text px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="font-body text-xs font-semibold uppercase tracking-widest bg-gold text-bg px-6 py-3 hover:bg-gold-soft transition w-full"
                >
                  Send Enquiry
                </button>

                <p className="text-muted text-sm mt-4">
                  We respond to all enquiries within two business days.
                </p>
              </form>
            </Reveal>

            {/* Right: Contact Details & CTAs */}
            <Reveal>
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="font-display text-lg font-600 text-text mb-2">Email</h3>
                  <a
                    href="mailto:info@safilmacademy.org"
                    className="font-body text-base text-gold hover:text-gold-soft transition"
                  >
                    info@safilmacademy.org
                  </a>
                </div>

                {/* LinkedIn */}
                <div>
                  <h3 className="font-display text-lg font-600 text-text mb-2">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/company/sa-film-academy"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-base text-gold hover:text-gold-soft transition"
                  >
                    SA Film Academy
                  </a>
                </div>

                {/* Cineterns CTA */}
                <div className="border border-gold p-6 bg-surface">
                  <h3 className="font-display text-lg font-600 text-text mb-3">
                    For Trainees & Interns
                  </h3>
                  <p className="font-body text-sm text-text mb-4 leading-relaxed">
                    Access the Cineterns placement portal to view current opportunities and submit your profile.
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_CINETERNS_URL || 'https://cineterns.vercel.app/'}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-bg transition"
                  >
                    Access Cineterns Portal →
                  </a>
                </div>

                {/* GreenSet CTA */}
                <div className="border border-gold p-6 bg-surface">
                  <h3 className="font-display text-lg font-600 text-text mb-3">
                    For Production Companies
                  </h3>
                  <p className="font-body text-sm text-text mb-4 leading-relaxed">
                    Explore GreenSet, our sustainability framework and toolkit for the South African film industry.
                  </p>
                  <a
                    href="https://www.greenset.org/"
                    target="_blank"
                    rel="noopener"
                    className="inline-block font-body text-xs font-semibold uppercase tracking-widest border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-bg transition"
                  >
                    Learn About GreenSet →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FilmstripDivider />
    </>
  );
}
