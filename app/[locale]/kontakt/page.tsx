'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'; 
import { Calendar,Compass,Waves, Menu, X, Instagram, Facebook, MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navigation from '../../components/layout/Navigation';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-[#f1f1ed]">
        <ContactHero />
        <ContactInfo />
        <FAQSection />
        <ContactForm />
        <MapSection />
      </main>
      <MinimalFooter />
    </>
  );
}


// Hero Section
// ============================================
// CONTACT HERO - Z JARALLAX I RESPONSIVE
// ============================================

function ContactHero() {
  const t = useTranslations('contactPage.hero');
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const initParallax = async () => {
      if (typeof window !== 'undefined' && heroRef.current) {
        const { jarallax } = await import('jarallax');
        jarallax(heroRef.current, {
          speed: 0.6,
          imgSrc: '/images/gallery/baner-kontakt/zdjecie-kontakt.jpg',
          imgSize: 'cover',
          imgPosition: 'center 60%',
        });
      }
    };
    initParallax();
  }, []);

  return (
    <section
      ref={heroRef}
      className="jarallax relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0f0e0f]/40 z-10" />

      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.4em] uppercase font-light opacity-80 mb-4 block">
          {t('label')}
        </span>

        <h1
          className="text-4xl md:text-7xl font-light mb-4 md:mb-6 tracking-[0.15em] leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {t('title')}
        </h1>

        <p className="text-sm md:text-base font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
}

// Contact Info Cards - WYRÓWNANE WYSOKOŚCI
// ============================================
function ContactInfo() {
  const t = useTranslations('contactPage.info');

  const contactMethods = [
    {
      icon: <Phone size={28} strokeWidth={1.5} />,
      title: t('phone.label'),
      details: [t('phone.number')],
      action: t('phone.action'),
      description: t('phone.description'),
      link: 'tel:+48510038038'
    },
    {
      icon: <Mail size={28} strokeWidth={1.5} />,
      title: t('email.label'),
      details: [t('email.address')],
      action: t('email.action'),
      description: t('email.description'),
      link: 'mailto:wynajem@rivazegrze.pl'
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: t('address.label'),
      details: [t('address.line1'), t('address.line2')],
      action: t('address.action'),
      description: t('address.description'),
      link: 'https://maps.google.com/?q=Rybaki+11,+05-130+Zegrze+Południowe'
    },
    {
      icon: <Clock size={28} strokeWidth={1.5} />,
      title: t('hours.label'),
      details: [t('hours.reception'), t('hours.checkin'), t('hours.checkout')],
      action: t('hours.action'),
      description: t('hours.description'),
      link: '/informacje-o-rezerwacji'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#AB8A62] font-light mb-4 block">
            {t('sectionLabel')}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light mb-6" 
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#4A6B5E'
            }}
          >
            {t('sectionTitle')}
          </h2>
          <p className="text-[#6e7a73] font-light max-w-2xl mx-auto leading-relaxed">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, idx) => (
            <div key={idx} className="text-center group h-full">
              <div className="relative bg-white p-3 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="bg-[#f7f6f4] p-8 border border-[#e8e6e1] h-full flex flex-col">
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#C4A77D] rounded-full mb-6 group-hover:bg-[#C4A77D] transition-all duration-300 mx-auto">
                    <div className="text-[#C4A77D] group-hover:text-white transition-colors">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 
                    className="text-xl font-light mb-4" 
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: '#4A6B5E'
                    }}
                  >
                    {method.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 min-h-[4.5rem]">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-[#6e7a73] font-light text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  
                  <p className="text-xs text-[#8a968f] font-light mb-6 min-h-[3rem] flex items-center justify-center">
                    {method.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={method.link}
                      className="text-xs tracking-[0.2em] text-[#C4A77D] hover:text-[#AB8A62] transition-colors font-light flex items-center gap-2 mx-auto justify-center"
                    >
                      <span>{method.action.toUpperCase()}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                  
                </div>
                
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#C4A77D] opacity-50"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#C4A77D] opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#C4A77D] opacity-50"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#C4A77D] opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const t = useTranslations('contactPage.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP Scroll Animation
  useEffect(() => {
    const initAnimations = async () => {
      if (typeof window !== 'undefined' && faqRef.current) {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(
            faqRef.current.querySelector('.faq-header'),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: faqRef.current,
                start: 'top 80%',
              }
            }
          );

          gsap.fromTo(
            itemsRef.current.filter(Boolean),
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              scrollTrigger: {
                trigger: faqRef.current,
                start: 'top 70%',
              }
            }
          );
        } catch (error) {
          console.error('GSAP error:', error);
        }
      }
    };
    initAnimations();
  }, []);

  // FAQ keys array
  const faqKeys = [
    'checkin',
    'checkout', 
    'earlyLate',
    'extraBeds',
    'children',
    'pets',
    'parking',
    'garage',
    'quietHours',
    'parties'
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={faqRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(135deg, #f7f6f4 0%, #e8e9e4 50%, #f1f1ed 100%)'
        }}
      />

      <div className="absolute top-20 right-0 w-96 h-96 bg-[#d4d6ce]/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#8a968f]/10 blur-3xl"></div>
      
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236e7a73' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN - Header */}
          <div className="lg:col-span-4 faq-header">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-[#d4d6ce] mb-6">
              <div className="w-2 h-2 bg-[#AB8A62]"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#6e7a73] font-light">
                {t('sectionLabel')}
              </span>
            </div>

            <h2 
              className="text-5xl lg:text-6xl font-light mb-8 leading-tight" 
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#4A6B5E'
              }}
            >
              {t('sectionTitle')}
            </h2>
            
            <p className="text-[#6e7a73] font-light leading-relaxed mb-8">
              {t('sectionDescription')}
            </p>

            <div className="relative mb-12">
              <div className="flex items-center gap-3">
                <div className="w-16 h-px bg-[#AB8A62]"></div>
                <div className="w-2 h-2 border border-[#AB8A62] rotate-45"></div>
              </div>
            </div>

            {/* Contact CTA Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#e8e6e1] p-6 shadow-lg">
              <p className="text-sm text-[#6e7a73] font-light mb-4">
                {t('ctaText')}
              </p>
              
              <div className="space-y-3">
                <a 
                  href="tel:+48510038038"
                  className="flex items-center gap-3 text-[#AB8A62] hover:text-[#967447] transition-colors group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-[#d4d6ce] group-hover:border-[#AB8A62] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-sm font-light">+48 510 038 038</span>
                </a>
                
                <a 
                  href="mailto:wynajem@rivazegrze.pl"
                  className="flex items-center gap-3 text-[#AB8A62] hover:text-[#967447] transition-colors group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-[#d4d6ce] group-hover:border-[#AB8A62] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-sm font-light">wynajem@rivazegrze.pl</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FAQ List */}
          <div className="lg:col-span-8">
            <div className="bg-white/80 backdrop-blur-sm border border-[#e8e6e1] shadow-xl">
              <div className="divide-y divide-[#e8e6e1]">
                {faqKeys.map((key, index) => (
                  <div
                    key={key}
                    ref={(el) => { itemsRef.current[index] = el; }}
                    className="group"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-6 px-8 flex items-start justify-between text-left hover:bg-[#f7f6f4] transition-all duration-300"
                    >
                      <span className="flex-1 text-lg font-light text-[#4A6B5E] pr-8 group-hover:text-[#AB8A62] transition-colors">
                        {t(`items.${key}.question`)}
                      </span>
                      
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {openIndex === index ? (
                          <svg className="w-5 h-5 text-[#AB8A62] transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-[#8a968f] group-hover:text-[#AB8A62] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                          </svg>
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-6 px-8 bg-[#f7f6f4]/50">
                        <div className="w-12 h-px bg-[#AB8A62] mb-4"></div>
                        <p className="text-[#6e7a73] font-light leading-relaxed">
                          {t(`items.${key}.answer`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


// ============================================
function ContactForm() {
  const t = useTranslations('contactPage.form');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-[#f7f6f4]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#AB8A62] mb-4 block font-light">
            {t('sectionLabel')}
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light mb-6" 
            style={{ 
              fontFamily: 'Playfair Display, serif',
              color: '#4A6B5E'
            }}
          >
            {t('sectionTitle')}
          </h2>
          <p className="text-[#6e7a73] font-light">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Form with Frame */}
        <div className="relative bg-white p-3 shadow-lg">
          <form onSubmit={handleSubmit} className="bg-[#f7f6f4] p-8 lg:p-12 border border-[#e8e6e1]">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6e7a73] mb-2 font-light">
                  {t('nameLabel')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#d4d6ce] text-[#0f0e0f] font-light focus:outline-none focus:border-[#8a968f] transition-all"
                  placeholder={t('namePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6e7a73] mb-2 font-light">
                  {t('emailLabel')} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#d4d6ce] text-[#0f0e0f] font-light focus:outline-none focus:border-[#8a968f] transition-all"
                  placeholder={t('emailPlaceholder')}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6e7a73] mb-2 font-light">
                  {t('phoneLabel')}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#d4d6ce] text-[#0f0e0f] font-light focus:outline-none focus:border-[#8a968f] transition-all"
                  placeholder={t('phonePlaceholder')}
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6e7a73] mb-2 font-light">
                  {t('subjectLabel')}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-[#d4d6ce] text-[#0f0e0f] font-light focus:outline-none focus:border-[#8a968f] transition-all appearance-none bg-no-repeat bg-right pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238a968f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: '20px',
                    backgroundPosition: 'right 12px center'
                  }}
                >
                  <option value="">{t('subjectPlaceholder')}</option>
                  <option value="reservation">{t('subjectReservation')}</option>
                  <option value="info">{t('subjectInfo')}</option>
                  <option value="other">{t('subjectOther')}</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6e7a73] mb-2 font-light">
                {t('messageLabel')} *
              </label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-[#d4d6ce] text-[#0f0e0f] font-light focus:outline-none focus:border-[#8a968f] transition-all resize-none"
                placeholder={t('messagePlaceholder')}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 text-xs tracking-[0.25em] py-4 bg-[#8a968f] text-white hover:bg-[#7d8a83] transition-all font-light"
            >
              <Send size={16} strokeWidth={1.5} />
              <span>{t('submitButton')}</span>
            </button>

            {/* Privacy Note */}
            <p className="text-xs text-[#8a968f] text-center mt-6 font-light">
              {t('privacyNote')}
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}


// Map Section - Z PRAWIDŁOWYM ADRESEM
function MapSection() {
  return (
    <section className="h-[500px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8542!2d21.0397!3d52.5264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sRybaki%2011%2C%2005-130%20Zegrze%20Po%C5%82udniowe!5e0!3m2!1spl!2spl!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale"
      ></iframe>
      
      {/* Overlay Badge */}
      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl border border-[#d4d6ce] max-w-sm">
        <h3 
          className="text-2xl font-light text-[#0f0e0f] mb-2" 
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Odwiedź Nas
        </h3>
        <p className="text-sm text-[#6e7a73] font-light mb-4">
          Rybaki 11<br />
          05-130 Zegrze Południowe
        </p>
        <a 
          href="https://maps.google.com/?q=Rybaki+11,+05-130+Zegrze+Południowe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs tracking-[0.2em] text-[#8a968f] hover:text-[#AB8A62] transition-colors font-light"
        >
          OTWÓRZ W MAPACH →
        </a>
      </div>
    </section>
  );
}
// Minimal Footer – Riva Zegrze - Professional Pastel Version - MOBILE OPTIMIZED
function MinimalFooter() {
  return (
    <footer className="bg-[#f1f1ed] text-[#1a4d2e] py-20 border-t border-[#d4d6ce]">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
              </svg>
              <span
                className="text-2xl font-light tracking-[0.15em] text-[#1a4d2e]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                RIVA ZEGRZE
              </span>
            </div>
            <p className="text-sm text-[#6e7a73] leading-relaxed font-light mb-6">
              Kameralne apartamenty nad wodą. Spokój, komfort i bezpośrednia
              rezerwacja w wyjątkowej lokalizacji pod Warszawą.
            </p>
            
            {/* Awards/Certifications */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#AB8A62]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-[#8a968f]">Booking.com</span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Odkryj
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Apartamenty', href: '/rooms' },
                { label: 'Informacje o rezerwacji', href: '/informacje-o-rezerwacji' },
                { label: 'Wellness & Spa', href: '/activities' },
                { label: 'Galeria', href: '/galeria' },
                { label: 'O Nas', href: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#6e7a73] hover:text-[#1a4d2e] transition-colors font-light inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#AB8A62] transition-all duration-300"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> 

          {/* CONTACT */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#6e7a73] font-light group">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="group-hover:text-[#1a4d2e] transition-colors">
                  Riva Zegrze<br />
                  Rybaki 11<br />
                  05-130 Zegrze Południowe
                </span>
              </li>
              <li>
                <a href="tel:+48510038038" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+48 510 038 038</span>
                </a>
              </li>
              <li>
                <a href="mailto:wynajem@rivazegrze.pl" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors group">
                  <svg className="w-5 h-5 text-[#AB8A62]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>wynajem@rivazegrze.pl</span>
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER & SOCIAL */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
              Newsletter
            </h4>
            <p className="text-sm text-[#6e7a73] mb-4 font-light">
              Bądź na bieżąco z ofertami specjalnymi
            </p>
            
            {/* Newsletter Form */}
            <form className="mb-8">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Twój e-mail"
                  className="flex-1 px-4 py-3 bg-white border border-[#d4d6ce] text-sm text-[#6e7a73] placeholder:text-[#b6b9af] focus:outline-none focus:border-[#AB8A62] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#AB8A62] text-white hover:bg-[#967447] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Social */}
            <div className="space-y-3">
              <h5 className="text-xs tracking-[0.2em] uppercase font-light text-[#8a968f]">
                Social Media
              </h5>
              <div className="flex gap-3">
                {[
                  { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', label: 'Instagram' },
                  { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 border border-[#d4d6ce] hover:border-[#AB8A62] flex items-center justify-center transition-all duration-300 text-[#8a968f] hover:text-[#AB8A62] hover:bg-white group"
                    aria-label={social.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - ✅ MOBILE OPTIMIZED */}
        <div className="border-t border-[#d4d6ce] pt-8">
          
          {/* Copyright i Made by - zawsze na górze */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6">
            <p className="text-xs text-[#8a968f] font-light text-center sm:text-left">
              © {new Date().getFullYear()} Riva Zegrze. Wszystkie prawa zastrzeżone.
            </p>
            <a 
              href="https://hoteler.pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#8a968f] hover:text-[#AB8A62] transition-colors font-light group"
            >
              <span>Made with</span>
              <svg className="w-3 h-3 text-[#AB8A62] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">by Hoteler</span>
            </a>
          </div>

          {/* Linki prawne - stack na mobile, row na desktop */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6">
            {[
              { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
              { label: 'Regulamin', href: '/regulamin' },
              { label: 'Informacje o rezerwacji', href: '/informacje-o-rezerwacji' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-[#8a968f] hover:text-[#AB8A62] transition-colors font-light relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#AB8A62] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* NIP - osobna linia na dole, wyśrodkowana */}
          <div className="text-center pt-4 border-t border-[#d4d6ce]/50">
            <p className="text-xs text-[#8a968f] font-light">
              <span className="font-medium text-[#6e7a73]">Open One Sp. z o.o. S.k.</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="block sm:inline mt-1 sm:mt-0">
                <span className="font-medium text-[#6e7a73]">NIP:</span> 5242877732
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
