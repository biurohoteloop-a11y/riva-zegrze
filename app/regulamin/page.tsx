'use client';

import { useEffect } from 'react';
import { ArrowLeft, FileText, Mail, AlertCircle, CreditCard, Ban, Calendar } from 'lucide-react';

export default function RegulaminPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navigation Spacer */}
      <div className="h-20" />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#4A6B5E] to-[#6e7a73] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Powrót do strony głównej</span>
          </a>
          
          <div className="flex items-center gap-4 mb-6">
            <FileText className="w-12 h-12 text-[#AB8A62]" strokeWidth={1.5} />
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/70 block mb-2">
                Riva Zegrze
              </span>
              <h1 
                className="text-4xl md:text-5xl font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Regulamin Rezerwacji i Sprzedaży Usług
              </h1>
            </div>
          </div>
          
          <p className="text-white/80 text-lg font-light leading-relaxed">
            Warunki wynajmu apartamentów i zasady pobytu w Riva Zegrze
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#f7f6f4]">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Info Box */}
          <div className="bg-white border-l-4 border-[#AB8A62] p-6 mb-12 shadow-sm">
            <p className="text-sm text-[#6e7a73] leading-relaxed">
              <strong className="text-[#1a4d2e]">Data ostatniej aktualizacji:</strong> 19 stycznia 2026<br/>
              Niniejszy regulamin określa zasady rezerwacji i świadczenia usług noclegowych w obiekcie Riva Zegrze Apartamenty.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <Section 
              number="1" 
              title="Dane sprzedawcy"
              icon={<FileText className="w-6 h-6" />}
            >
              <p className="mb-4">Sprzedawcą i usługodawcą jest:</p>
              <div className="bg-[#f1f1ed] p-6 rounded-lg border border-[#d4d6ce]">
                <p className="font-medium text-[#1a4d2e] mb-3">Open One Sp. z o.o. S.k.</p>
                <div className="space-y-1 text-sm text-[#6e7a73]">
                  <p>ul. Odkryta 6/8</p>
                  <p>03-140 Warszawa</p>
                  <p>NIP: 5242877732</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#d4d6ce]">
                  <a 
                    href="mailto:wynajem@rivazegrze.pl" 
                    className="inline-flex items-center gap-2 text-[#AB8A62] hover:text-[#967447] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">wynajem@rivazegrze.pl</span>
                  </a>
                </div>
              </div>
            </Section>

            {/* Section 2 */}
            <Section 
              number="2" 
              title="Przedmiot umowy"
            >
              <div className="space-y-4">
                <p>Przedmiotem umowy jest świadczenie usług noclegowych polegających na rezerwacji i wynajmie apartamentów w obiekcie <strong className="text-[#1a4d2e]">Riva Zegrze Apartamenty</strong>.</p>
                <div className="bg-[#AB8A62]/10 border-l-4 border-[#AB8A62] p-4 rounded">
                  <p className="text-sm">
                    <strong className="text-[#1a4d2e]">Umowa zostaje zawarta</strong> w momencie skutecznego dokonania rezerwacji i zaksięgowania płatności.
                  </p>
                </div>
              </div>
            </Section>

            {/* Section 3 - WAŻNE! */}
            <Section 
              number="3" 
              title="Zasady pobytu"
              icon={<AlertCircle className="w-6 h-6" />}
            >
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Ban className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-red-900 mb-2">UWAGA! Całkowity zakaz organizowania imprez</p>
                    <p className="text-sm text-red-700">
                      Na terenie obiektu obowiązuje całkowity zakaz organizowania imprez, w tym w szczególności:
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-center gap-2 text-sm text-red-800">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    wieczorów panieńskich,
                  </li>
                  <li className="flex items-center gap-2 text-sm text-red-800">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    wieczorów kawalerskich,
                  </li>
                  <li className="flex items-center gap-2 text-sm text-red-800">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                    spotkań o charakterze imprezowym.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <InfoBox 
                  icon="🌙"
                  title="Cisza nocna"
                  description="Obowiązuje w godzinach 22:00 – 6:00"
                />
                <InfoBox 
                  icon="🏡"
                  title="Charakter obiektu"
                  description="Obiekt przeznaczony jest wyłącznie do spokojnego wypoczynku"
                />
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-yellow-900">
                  <strong>⚠️ Konsekwencje naruszenia regulaminu:</strong><br/>
                  W przypadku naruszenia zasad regulaminu obiekt zastrzega sobie prawo do <strong>natychmiastowego zakończenia pobytu bez zwrotu kosztów</strong>.
                </p>
              </div>
            </Section>

            {/* Section 4 */}
            <Section 
              number="4" 
              title="Płatności"
              icon={<CreditCard className="w-6 h-6" />}
            >
              <p className="mb-4">Płatności realizowane są online za pośrednictwem systemu <strong className="text-[#1a4d2e]">Przelewy24</strong>.</p>
              
              <div className="bg-[#f1f1ed] p-6 rounded-lg border border-[#d4d6ce] mb-6">
                <h4 className="font-medium text-[#1a4d2e] mb-3">Dostępne metody płatności:</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  <PaymentMethod icon="💳" label="Karty płatnicze" />
                  <PaymentMethod icon="🏦" label="Szybkie przelewy" />
                  <PaymentMethod icon="📱" label="BLIK" note="(jeśli dostępny)" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-[#d4d6ce]">
                <h4 className="font-medium text-[#1a4d2e] mb-3">Operator płatności kartowych</h4>
                <div className="text-sm text-[#6e7a73] space-y-1">
                  <p>Operatorem kart płatniczych jest <strong className="text-[#1a4d2e]">PayPro SA Agent Rozliczeniowy</strong></p>
                  <p>ul. Pastelowa 8, 60-198 Poznań</p>
                  <p>Wpisany do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego</p>
                  <p>prowadzonego przez Sąd Rejonowy Poznań Nowe Miasto i Wilda w Poznaniu</p>
                  <p>VIII Wydział Gospodarczy KRS pod numerem 0000347935</p>
                  <p>NIP: 7792369887, REGON: 301345068</p>
                </div>
              </div>
            </Section>

            {/* Section 5 */}
            <Section 
              number="5" 
              title="Anulowanie rezerwacji"
              icon={<Calendar className="w-6 h-6" />}
            >
              <div className="bg-[#AB8A62]/10 border-l-4 border-[#AB8A62] p-6 rounded">
                <p className="text-[#6e7a73]">
                  Szczegółowe warunki anulowania rezerwacji, terminy oraz ewentualny zadatek <strong className="text-[#1a4d2e]">określane są w procesie rezerwacyjnym przed dokonaniem płatności</strong>.
                </p>
              </div>
            </Section>

            {/* Section 6 */}
            <Section 
              number="6" 
              title="Prawo odstąpienia od umowy"
            >
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <p className="text-sm text-blue-900 mb-2">
                  <strong>Zgodnie z art. 38 pkt 12 ustawy o prawach konsumenta:</strong>
                </p>
                <p className="text-sm text-blue-800">
                  Prawo odstąpienia od umowy zawartej na odległość <strong>nie przysługuje</strong>, jeżeli umowa dotyczy świadczenia usług noclegowych w oznaczonym terminie.
                </p>
              </div>
            </Section>

            {/* Section 7 */}
            <Section 
              number="7" 
              title="Siłownia i basen"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <FacilityCard 
                  icon="🏋️"
                  title="Siłownia"
                  description="Korzystanie z siłowni odbywa się zgodnie z odrębnym regulaminem"
                />
                <FacilityCard 
                  icon="🏊"
                  title="Basen"
                  description="Korzystanie z basenu odbywa się zgodnie z odrębnym regulaminem"
                />
              </div>
              <p className="mt-4 text-sm text-[#8a968f]">
                Regulaminy są udostępniane Gościom i stanowią integralną część pobytu.
              </p>
            </Section>

            {/* Section 8 */}
            <Section 
              number="8" 
              title="Postanowienia końcowe"
            >
              <div className="space-y-4">
                <p>Regulamin obowiązuje od momentu jego publikacji na stronie internetowej.</p>
                <div className="bg-[#f1f1ed] p-4 rounded border border-[#d4d6ce]">
                  <p className="text-sm text-[#6e7a73]">
                    W sprawach nieuregulowanych zastosowanie mają <strong className="text-[#1a4d2e]">przepisy prawa polskiego</strong>.
                  </p>
                </div>
              </div>
            </Section>

          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#4A6B5E] to-[#6e7a73] text-white p-8 rounded-lg text-center">
            <h3 
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Masz pytania dotyczące regulaminu?
            </h3>
            <p className="text-white/80 mb-6">
              Skontaktuj się z nami – chętnie wyjaśnimy wszelkie wątpliwości
            </p>
            <a 
              href="mailto:wynajem@rivazegrze.pl"
              className="inline-flex items-center gap-2 bg-white text-[#1a4d2e] px-8 py-3 rounded hover:bg-[#AB8A62] hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm tracking-wider uppercase">Wyślij wiadomość</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

// ============================================
// HELPER COMPONENTS
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
    <div className="bg-white p-8 rounded-lg shadow-sm border border-[#d4d6ce]">
      <div className="flex items-start gap-4 mb-6">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 bg-[#AB8A62]/10 rounded-lg flex items-center justify-center text-[#AB8A62]">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-light text-[#AB8A62]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {number}.
            </span>
            <h2 
              className="text-2xl font-light text-[#1a4d2e]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="text-[#6e7a73] leading-relaxed pl-16">
        {children}
      </div>
    </div>
  );
}

function InfoBox({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex items-center gap-4 bg-[#f1f1ed] p-4 rounded border border-[#d4d6ce]">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="font-medium text-[#1a4d2e]">{title}</p>
        <p className="text-sm text-[#6e7a73]">{description}</p>
      </div>
    </div>
  );
}

function PaymentMethod({ icon, label, note }: { icon: string; label: string; note?: string }) {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded border border-[#d4d6ce]">
      <span className="text-2xl">{icon}</span>
      <div className="text-sm">
        <p className="text-[#1a4d2e] font-medium">{label}</p>
        {note && <p className="text-xs text-[#8a968f]">{note}</p>}
      </div>
    </div>
  );
}

function FacilityCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-[#f1f1ed] p-5 rounded border border-[#d4d6ce] text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="font-medium text-[#1a4d2e] mb-2">{title}</h4>
      <p className="text-sm text-[#6e7a73]">{description}</p>
    </div>
  );
}
