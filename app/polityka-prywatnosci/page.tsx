'use client';

import { useEffect } from 'react';
import { ArrowLeft, Shield, Mail, FileText } from 'lucide-react';

export default function PolitykaPrywatnosciPage() {
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
            <Shield className="w-12 h-12 text-[#AB8A62]" strokeWidth={1.5} />
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/70 block mb-2">
                Riva Zegrze
              </span>
              <h1 
                className="text-4xl md:text-5xl font-light"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Polityka Prywatności
              </h1>
            </div>
          </div>
          
          <p className="text-white/80 text-lg font-light leading-relaxed">
            Dbamy o bezpieczeństwo Twoich danych osobowych zgodnie z przepisami RODO
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
              Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych przez Administratora.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <Section 
              number="1" 
              title="Administrator danych osobowych"
              icon={<Shield className="w-6 h-6" />}
            >
              <p className="mb-4">Administratorem danych osobowych jest:</p>
              <div className="bg-[#f1f1ed] p-6 rounded-lg border border-[#d4d6ce]">
                <p className="font-medium text-[#1a4d2e] mb-2">Dominika Sworowska-Lis</p>
                <p className="text-sm text-[#6e7a73] mb-1">działająca w ramach</p>
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
              title="Cele przetwarzania danych osobowych"
              icon={<FileText className="w-6 h-6" />}
            >
              <p className="mb-4">Dane osobowe przetwarzane są w celu:</p>
              <ul className="space-y-3">
                <ListItem>realizacji rezerwacji apartamentów,</ListItem>
                <ListItem>obsługi płatności online,</ListItem>
                <ListItem>kontaktu z klientem w sprawach związanych z rezerwacją,</ListItem>
                <ListItem>realizacji obowiązków księgowych i podatkowych.</ListItem>
              </ul>
            </Section>

            {/* Section 3 */}
            <Section 
              number="3" 
              title="Podstawa prawna przetwarzania danych"
            >
              <p className="mb-4">Podstawą prawną przetwarzania danych osobowych są:</p>
              <div className="space-y-4">
                <LegalBasis 
                  article="art. 6 ust. 1 lit. b RODO"
                  description="przetwarzanie niezbędne do wykonania umowy (rezerwacja noclegu),"
                />
                <LegalBasis 
                  article="art. 6 ust. 1 lit. c RODO"
                  description="przetwarzanie niezbędne do wypełnienia obowiązków prawnych wynikających z przepisów prawa."
                />
              </div>
            </Section>

            {/* Section 4 */}
            <Section 
              number="4" 
              title="Odbiorcy danych osobowych"
            >
              <p className="mb-4">Dane osobowe mogą być przekazywane następującym podmiotom:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <RecipientCard 
                  name="Przelewy24"
                  entity="PayPro S.A."
                  purpose="operator płatności online"
                />
                <RecipientCard 
                  name="Hotres"
                  purpose="dostawca systemu rezerwacyjnego"
                />
              </div>
            </Section>

            {/* Section 5 */}
            <Section 
              number="5" 
              title="Okres przechowywania danych"
            >
              <p className="mb-4">Dane osobowe przechowywane są:</p>
              <ul className="space-y-3">
                <ListItem>przez okres wymagany przepisami prawa podatkowego i rachunkowego,</ListItem>
                <ListItem>do momentu przedawnienia ewentualnych roszczeń wynikających z zawartej umowy.</ListItem>
              </ul>
            </Section>

            {/* Section 6 */}
            <Section 
              number="6" 
              title="Prawa osób, których dane dotyczą"
            >
              <p className="mb-4">Osobie, której dane dotyczą, przysługuje prawo do:</p>
              <div className="grid md:grid-cols-2 gap-3">
                <RightCard text="dostępu do swoich danych osobowych" />
                <RightCard text="ich sprostowania" />
                <RightCard text="żądania usunięcia danych" />
                <RightCard text="żądania ograniczenia przetwarzania" />
              </div>
              <div className="mt-6 p-4 bg-[#AB8A62]/10 border-l-4 border-[#AB8A62] rounded">
                <p className="text-sm text-[#6e7a73]">
                  Przysługuje również prawo do <strong className="text-[#1a4d2e]">wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO)</strong>.
                </p>
              </div>
            </Section>

            {/* Section 7 */}
            <Section 
              number="7" 
              title="Postanowienia końcowe"
            >
              <div className="space-y-4">
                <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych.</p>
                <p>Polityka prywatności obowiązuje od momentu jej publikacji na stronie internetowej.</p>
              </div>
            </Section>

          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#4A6B5E] to-[#6e7a73] text-white p-8 rounded-lg text-center">
            <h3 
              className="text-2xl font-light mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Masz pytania dotyczące przetwarzania danych?
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

      {/* Footer placeholder - your existing footer will be here */}
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

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="w-5 h-5 text-[#AB8A62] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function LegalBasis({ article, description }: { article: string; description: string }) {
  return (
    <div className="bg-[#f1f1ed] p-4 rounded border-l-4 border-[#AB8A62]">
      <p className="font-medium text-[#1a4d2e] mb-1">{article}</p>
      <p className="text-sm text-[#6e7a73]">{description}</p>
    </div>
  );
}

function RecipientCard({ name, entity, purpose }: { name: string; entity?: string; purpose: string }) {
  return (
    <div className="bg-[#f1f1ed] p-4 rounded border border-[#d4d6ce]">
      <p className="font-medium text-[#1a4d2e] mb-1">{name}</p>
      {entity && <p className="text-xs text-[#8a968f] mb-2">{entity}</p>}
      <p className="text-sm text-[#6e7a73]">{purpose}</p>
    </div>
  );
}

function RightCard({ text }: { text: string }) {
  return (
    <div className="bg-[#f1f1ed] p-4 rounded border border-[#d4d6ce] flex items-center gap-3">
      <svg className="w-5 h-5 text-[#AB8A62] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-sm text-[#6e7a73]">{text}</span>
    </div>
  );
}
