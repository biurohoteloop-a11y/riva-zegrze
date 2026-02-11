'use client';

import { useEffect } from 'react';
import { ArrowLeft, Clock, AlertTriangle, MapPin, Phone, Mail, Calendar, Info } from 'lucide-react';

export default function InformacjeORezerwacjiPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navigation Spacer */}
      <div className="h-20" />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#4A6B5E] to-[#6e7a73] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Powrót do strony głównej</span>
          </a>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <Info className="w-10 h-10 sm:w-12 sm:h-12 text-[#AB8A62] flex-shrink-0" strokeWidth={1.5} />
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/70 block mb-2">
                Riva Zegrze
              </span>
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Informacje o Rezerwacji
              </h1>
            </div>
          </div>
          
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Wszystko co musisz wiedzieć o procesie rezerwacji i wynajmu apartamentów
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20 bg-[#f7f6f4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Info Box */}
          <div className="bg-white border-l-4 border-[#AB8A62] p-4 sm:p-6 mb-8 sm:mb-12 shadow-sm">
            <p className="text-xs sm:text-sm text-[#6e7a73] leading-relaxed">
              <strong className="text-[#1a4d2e]">Wynajem apartamentów z systemem rezerwacji online</strong><br/>
              Rezerwacje realizowane są za pośrednictwem polskiego systemu rezerwacyjnego <strong>Hotres</strong> (PMS - Property Management System).
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8 sm:space-y-12">
            
            {/* Section 1 - Czas realizacji */}
            <Section 
              number="1" 
              title="Czas realizacji usługi noclegowej"
              icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6" />}
            >
              <div className="space-y-6">
                <div className="bg-[#f1f1ed] p-4 sm:p-6 rounded-lg border border-[#d4d6ce]">
                  <h4 className="font-medium text-[#1a4d2e] mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#AB8A62] flex-shrink-0" />
                    <span>Godziny zameldowania i wymeldowania</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <TimeBox 
                      label="Check-in (Zameldowanie)"
                      time="od godziny 15:00"
                      description="Apartament jest gotowy do odbioru"
                    />
                    <TimeBox 
                      label="Check-out (Wymeldowanie)"
                      time="do godziny 11:00"
                      description="Prosimy o opuszczenie apartamentu"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-5 rounded">
                  <p className="text-xs sm:text-sm text-blue-900 mb-2">
                    <strong>📅 Proces rezerwacji:</strong>
                  </p>
                  <ol className="text-xs sm:text-sm text-blue-800 space-y-2 ml-2 sm:ml-4">
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-[20px] flex-shrink-0">1.</span>
                      <span>Wybór apartamentu i terminu w systemie rezerwacyjnym Hotres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-[20px] flex-shrink-0">2.</span>
                      <span>Dokonanie płatności online przez Przelewy24</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-[20px] flex-shrink-0">3.</span>
                      <span>Potwierdzenie rezerwacji zostaje wysłane automatycznie na e-mail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-[20px] flex-shrink-0">4.</span>
                      <span>Instrukcje dostępu do apartamentu otrzymasz na 24h przed przyjazdem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium min-w-[20px] flex-shrink-0">5.</span>
                      <span>Usługa noclegowa realizowana jest w zarezerwowanym terminie</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#d4d6ce]">
                  <h4 className="font-medium text-[#1a4d2e] mb-3 text-sm sm:text-base">⏱️ Natychmiastowe potwierdzenie</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a73]">
                    Po zaksięgowaniu płatności otrzymujesz <strong className="text-[#1a4d2e]">natychmiastowe potwierdzenie rezerwacji</strong> na podany adres e-mail. 
                    Rezerwacja jest wiążąca i gwarantuje dostępność apartamentu w wybranym terminie.
                  </p>
                </div>

                {/* Anulowanie rezerwacji */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-5 rounded">
                  <h4 className="font-medium text-yellow-900 mb-3 text-sm sm:text-base">
                    🔄 Anulowanie rezerwacji
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-yellow-800">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0">✅</span>
                      <p>
                        <strong>Co najmniej 14 dni przed planowanym przyjazdem</strong> → zwrot 100% wpłaconej kwoty
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0">❌</span>
                      <p>
                        <strong>Krócej niż 14 dni przed planowanym przyjazdem</strong> → brak możliwości zwrotu
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-yellow-300">
                      <p className="text-xs text-yellow-700">
                        <strong>💡 Przykład:</strong> Rezerwacja na 15 czerwca → anulowanie do 1 czerwca (włącznie) daje pełny zwrot, anulowanie 2 czerwca lub później → brak zwrotu.
                      </p>
                    </div>
                  </div>
                  <a 
                    href="/regulamin"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-yellow-700 hover:text-yellow-900 mt-3 font-medium"
                  >
                    Szczegóły w regulaminie →
                  </a>
                </div>
              </div>
            </Section>

            {/* Section 2 - Wyjątki */}
            <Section 
              number="2" 
              title="Przypadki, w których usługa nie może być świadczona"
              icon={<AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />}
            >
              <div className="space-y-4">
                <p className="text-[#6e7a73] text-sm sm:text-base">
                  Usługa noclegowa może nie być świadczona wyłącznie w następujących, wyjątkowych okolicznościach:
                </p>

                <div className="space-y-3">
                  <ExceptionCard 
                    icon="⚡"
                    title="Siła wyższa"
                    description="Klęski żywiołowe, powodzie, pożary, działania wojenne, pandemia, nakazy władz państwowych uniemożliwiające świadczenie usług noclegowych"
                  />
                  <ExceptionCard 
                    icon="🏗️"
                    title="Awarie techniczne"
                    description="Poważne awarie instalacji (woda, prąd, ogrzewanie), które w istotny sposób uniemożliwiają korzystanie z apartamentu"
                  />
                  <ExceptionCard 
                    icon="⚖️"
                    title="Decyzje administracyjne"
                    description="Nakazy lub zakazy wydane przez organy administracji publicznej, Sanepid lub inne instytucje państwowe"
                  />
                  <ExceptionCard 
                    icon="🚫"
                    title="Naruszenie regulaminu"
                    description="Rażące naruszenie regulaminu przez Gościa (zakaz imprez, niszczenie mienia, zakłócanie spokoju)"
                  />
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-5 rounded mt-6">
                  <p className="text-xs sm:text-sm text-green-900 mb-2">
                    <strong>✅ Gwarancja w przypadku problemów:</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-green-800">
                    W przypadku wystąpienia którejkolwiek z powyższych sytuacji, <strong>Gość otrzymuje pełny zwrot wpłaconych środków</strong> lub możliwość zmiany terminu rezerwacji na inny, dogodny termin bez dodatkowych opłat.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#d4d6ce]">
                  <p className="text-xs sm:text-sm text-[#6e7a73]">
                    <strong className="text-[#1a4d2e]">📞 Natychmiastowa komunikacja:</strong><br/>
                    W razie zaistnienia jakichkolwiek problemów, niezwłocznie informujemy Gościa telefonicznie i e-mailowo oraz proponujemy rozwiązanie.
                  </p>
                </div>
              </div>
            </Section>

            {/* Section 3 - System rezerwacyjny */}
            <Section 
              number="3" 
              title="System rezerwacyjny i płatności"
              icon={<Info className="w-5 h-5 sm:w-6 sm:h-6" />}
            >
              <div className="space-y-4">
                <div className="bg-[#f1f1ed] p-4 sm:p-6 rounded-lg border border-[#d4d6ce]">
                  <h4 className="font-medium text-[#1a4d2e] mb-3 text-sm sm:text-base">🖥️ Polski system rezerwacyjny</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a73] mb-4">
                    Rezerwacje apartamentów realizowane są za pośrednictwem <strong className="text-[#1a4d2e]">polskiego systemu PMS (Property Management System) - Hotres</strong>.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#6e7a73]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#AB8A62] mt-1 flex-shrink-0">✓</span>
                      <span>Bezpieczne zarządzanie rezerwacjami</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#AB8A62] mt-1 flex-shrink-0">✓</span>
                      <span>Automatyczne potwierdzenia i przypomnienia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#AB8A62] mt-1 flex-shrink-0">✓</span>
                      <span>Aktualizacja dostępności w czasie rzeczywistym</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#AB8A62] mt-1 flex-shrink-0">✓</span>
                      <span>Zgodność z polskimi przepisami prawa</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#d4d6ce]">
                  <h4 className="font-medium text-[#1a4d2e] mb-3 text-sm sm:text-base">💳 Bezpieczne płatności online</h4>
                  <p className="text-xs sm:text-sm text-[#6e7a73] mb-3">
                    Płatności realizowane są wyłącznie przez <strong className="text-[#1a4d2e]">Przelewy24</strong> - wiodący polski operator płatności online.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    <PaymentFeature icon="🔒" label="Szyfrowane SSL" />
                    <PaymentFeature icon="💳" label="Karty płatnicze" />
                    <PaymentFeature icon="🏦" label="Przelewy" />
                    <PaymentFeature icon="📱" label="BLIK" />
                    <PaymentFeature icon="✅" label="PCI DSS" />
                    <PaymentFeature icon="🇵🇱" label="Polski operator" />
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 4 - Dane kontaktowe */}
            <Section 
              number="4" 
              title="Dane kontaktowe"
              icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6" />}
            >
              <div className="bg-gradient-to-br from-[#4A6B5E] to-[#6e7a73] text-white p-6 sm:p-8 rounded-lg">
                <h3 className="text-lg sm:text-xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Potrzebujesz pomocy z rezerwacją?
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Kontakt telefoniczny i email */}
                  <div className="space-y-4">
                    <ContactItem 
                      icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                      label="Telefon"
                      value="+48 510 038 038"
                      link="tel:+48510038038"
                    />
                    <ContactItem 
                      icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5" />}
                      label="E-mail"
                      value="wynajem@rivazegrze.pl"
                      link="mailto:wynajem@rivazegrze.pl"
                    />
                  </div>

                  {/* Adres */}
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg border border-white/20">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#AB8A62] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-2 text-sm sm:text-base">Adres obiektu:</p>
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                          <strong>Riva Zegrze</strong><br/>
                          Rybaki 11<br/>
                          05-130 Zegrze Południowe
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs sm:text-sm text-white/80">
                    <strong className="text-white">Godziny dostępności:</strong> Codziennie 8:00 - 20:00
                  </p>
                </div>
              </div>
            </Section>

            {/* Section 5 - Dane sprzedawcy */}
            <Section 
              number="5" 
              title="Dane sprzedawcy usług"
            >
              <div className="bg-[#f1f1ed] p-4 sm:p-6 rounded-lg border border-[#d4d6ce]">
                <p className="font-medium text-[#1a4d2e] mb-3 text-sm sm:text-base">Open One Sp. z o.o. S.k.</p>
                <div className="space-y-1 text-xs sm:text-sm text-[#6e7a73]">
                  <p>ul. Odkryta 6/8</p>
                  <p>03-140 Warszawa</p>
                  <p>NIP: 5242877732</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#d4d6ce] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <a 
                    href="mailto:wynajem@rivazegrze.pl" 
                    className="inline-flex items-center gap-2 text-[#AB8A62] hover:text-[#967447] transition-colors text-xs sm:text-sm"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="break-all">wynajem@rivazegrze.pl</span>
                  </a>
                  <a 
                    href="tel:+48510038038" 
                    className="inline-flex items-center gap-2 text-[#AB8A62] hover:text-[#967447] transition-colors text-xs sm:text-sm"
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>+48 510 038 038</span>
                  </a>
                </div>
              </div>
            </Section>

          </div>

          {/* Additional Links */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <LinkCard 
              title="Regulamin rezerwacji"
              description="Szczegółowe warunki rezerwacji i pobytu"
              link="/regulamin"
              icon="📋"
            />
            <LinkCard 
              title="Polityka prywatności"
              description="Ochrona danych osobowych zgodnie z RODO"
              link="/polityka-prywatnosci"
              icon="🔒"
            />
          </div>

        </div>
      </section>
    </>
  );
}

// ============================================
// HELPER COMPONENTS - MOBILE OPTIMIZED
// ============================================

function Section({ 
  number, 
  title, 
  icon, 
  children 
}: { 
  number: string; 
  title: string; 
  icon?: React.ReactNode; 
  children: React.ReactNode 
}) {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm border border-[#d4d6ce]">
      <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#AB8A62]/10 rounded-lg flex items-center justify-center text-[#AB8A62]">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
            <span className="text-2xl sm:text-3xl font-light text-[#AB8A62] flex-shrink-0" style={{ fontFamily: 'Playfair Display, serif' }}>
              {number}.
            </span>
            <h2 
              className="text-lg sm:text-2xl font-light text-[#1a4d2e] leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="text-[#6e7a73] leading-relaxed sm:pl-16 text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
}

function TimeBox({ label, time, description }: { label: string; time: string; description: string }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded border border-[#d4d6ce]">
      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8a968f] mb-1">{label}</p>
      <p className="text-xl sm:text-2xl font-light text-[#1a4d2e] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
        {time}
      </p>
      <p className="text-[10px] sm:text-xs text-[#6e7a73]">{description}</p>
    </div>
  );
}

function ExceptionCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg border border-[#d4d6ce] flex items-start gap-3">
      <span className="text-xl sm:text-2xl flex-shrink-0">{icon}</span>
      <div className="min-w-0">
        <h4 className="font-medium text-[#1a4d2e] mb-1 text-sm sm:text-base">{title}</h4>
        <p className="text-xs sm:text-sm text-[#6e7a73]">{description}</p>
      </div>
    </div>
  );
}

function PaymentFeature({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <span className="text-lg sm:text-xl flex-shrink-0">{icon}</span>
      <span className="text-[#6e7a73]">{label}</span>
    </div>
  );
}

function ContactItem({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-[#AB8A62] flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs text-white/70 mb-0.5">{label}</p>
        <a 
          href={link}
          className="text-white hover:text-[#AB8A62] transition-colors font-medium text-sm sm:text-base break-all"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

function LinkCard({ title, description, link, icon }: { title: string; description: string; link: string; icon: string }) {
  return (
    <a 
      href={link}
      className="bg-white p-4 sm:p-6 rounded-lg border border-[#d4d6ce] hover:border-[#AB8A62] transition-all hover:shadow-md group"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="text-2xl sm:text-3xl flex-shrink-0">{icon}</span>
        <div className="min-w-0">
          <h3 className="font-medium text-[#1a4d2e] mb-1 group-hover:text-[#AB8A62] transition-colors text-sm sm:text-base">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6e7a73]">{description}</p>
        </div>
      </div>
    </a>
  );
}
