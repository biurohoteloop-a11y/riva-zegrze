import Navigation from '../../components/layout/Navigation';
import {
  Waves,
  MapPin,
  Phone,
  Mail,
  Sun,
  Waves as WaveIcon,
  Dumbbell,
  Anchor,
  Car,
  Coffee,
  Sailboat,
  TreePine,
  Bike,
  Fish,
} from 'lucide-react';

const apartamenty = [
  {
    name: 'Apartament C1',
    href: '/apartamenty/apartament-c1',
    desc: 'Nowoczesny apartament z tarasem i prywatnym ogródkiem, bezpośrednio nad Jeziorem Zegrzyńskim. 38 m², komfortowo dla 4 osób, idealny na rodzinny weekend.',
  },
  {
    name: 'Apartament Deluxe B10',
    href: '/apartamenty/apartament-deluxe-b10',
    desc: 'Przestronny apartament w najwyższym standardzie — z dbałością o każdy detal. Idealny na wyjątkowy, romantyczny weekend nad wodą pod Warszawą.',
  },
  {
    name: 'Apartament C4',
    href: '/apartamenty/apartament-c4',
    desc: 'Komfortowe, jasne wnętrze w spokojnej części Zegrza Południowego, zaledwie kilka kroków od brzegu zalewu i strefy rekreacyjnej.',
  },
  {
    name: 'Apartament D7',
    href: '/apartamenty/apartament-d7',
    desc: 'Kameralny apartament z dostępem do krytego basenu i siłowni. Świetny wybór na spokojny pobyt z dala od miejskiego zgiełku.',
  },
];

const udogodnienia = [
  { icon: WaveIcon, label: 'Kryty, podgrzewany basen', desc: 'Czynny przez cały rok, niezależnie od pogody.' },
  { icon: Anchor, label: 'Prywatna plaża nad zalewem', desc: 'Bezpośredni dostęp do wody i pomostu.' },
  { icon: Dumbbell, label: 'Siłownia na terenie', desc: 'Pełne wyposażenie dla aktywnych gości.' },
  { icon: Sun, label: 'Tarasy i ogródki', desc: 'Własna przestrzeń na świeżym powietrzu.' },
  { icon: Car, label: 'Bezpłatny parking', desc: 'Miejsce dla Twojego samochodu na miejscu.' },
  { icon: Coffee, label: 'W pełni wyposażone kuchnie', desc: 'Gotuj ulubione dania jak w domu.' },
];

const atrakcje = [
  { icon: Sailboat, label: 'Sporty wodne', desc: 'Żeglarstwo, kajaki, deska SUP i windsurfing na wyciągnięcie ręki.' },
  { icon: Fish, label: 'Wędkarstwo', desc: 'Jedne z najlepszych łowisk w okolicy Warszawy.' },
  { icon: Bike, label: 'Trasy rowerowe', desc: 'Malownicze ścieżki wzdłuż brzegu Jeziora Zegrzyńskiego.' },
  { icon: TreePine, label: 'Lasy i spacery', desc: 'Otaczające zalew lasy idealne na wędrówki i grzybobranie.' },
];

const faq = [
  {
    q: 'Gdzie nocować na weekend nad Jeziorem Zegrzyńskim?',
    a: 'Najwygodniejszą bazą na weekend nad Jeziorem Zegrzyńskim są kameralne apartamenty Riva Zegrze w Zegrzu Południowym. Położone są bezpośrednio nad wodą, a goście mają do dyspozycji kryty basen, prywatną plażę i siłownię. To komfortowa alternatywa dla hotelu — z pełną prywatnością, własną kuchnią i tarasem, na którym wypijesz poranną kawę z widokiem na taflę jeziora.',
  },
  {
    q: 'Ile zajmuje dojazd na noclegi nad wodą pod Warszawą?',
    a: 'Riva Zegrze to jedne z najbliżej położonych noclegów nad wodą pod Warszawą. Dojazd z centrum stolicy zajmuje około czterdziestu minut samochodem, a dogodne połączenia drogowe sprawiają, że bez trudu wyrwiesz się nad wodę nawet na jedno popołudnie. Bliskość Warszawy to ogromny atut — krótka podróż, a poczucie jak na prawdziwych wakacjach.',
  },
  {
    q: 'Czy są noclegi nad Zalewem Zegrzyńskim z basenem?',
    a: 'Tak. Apartamenty Riva Zegrze oferują noclegi nad Zalewem Zegrzyńskim z dostępem do krytego, podgrzewanego basenu, siłowni oraz prywatnej plaży. Z basenu skorzystasz niezależnie od pogody i pory roku, co czyni nasz kompleks doskonałym wyborem także na jesienny czy zimowy wypoczynek nad wodą.',
  },
  {
    q: 'Co robić w trakcie weekendu nad Zalewem Zegrzyńskim?',
    a: 'Zalew Zegrzyński to raj dla miłośników sportów wodnych — żeglarstwa, kajaków, deski SUP i kąpieli. Wokół znajdziesz trasy spacerowe i rowerowe, mariny oraz restauracje serwujące świeże ryby. Po aktywnym dniu możesz odpocząć przy basenie lub na prywatnej plaży naszego kompleksu. To idealne miejsce zarówno na aktywny, jak i leniwy weekend.',
  },
  {
    q: 'Czy apartamenty nad Jeziorem Zegrzyńskim są dobre dla rodzin z dziećmi?',
    a: 'Zdecydowanie tak. Przestronne apartamenty z w pełni wyposażonymi kuchniami, łagodne i piaszczyste plaże, kryty basen oraz bezpieczna, zielona okolica sprawiają, że Riva Zegrze to doskonały wybór na rodzinny weekend nad wodą pod Warszawą. Dzieci mają przestrzeń do zabawy, a rodzice — komfort i spokój.',
  },
];

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Weekend nad Jeziorem Zegrzyńskim — noclegi nad wodą pod Warszawą',
        description:
          'Przewodnik po weekendzie nad Jeziorem Zegrzyńskim: noclegi nad wodą pod Warszawą, apartamenty nad Zalewem Zegrzyńskim z basenem, plażą i siłownią.',
        image: 'https://rivazegrzeapartamenty.pl/images/og-image.jpg',
        author: { '@type': 'Organization', name: 'Riva Zegrze' },
        publisher: {
          '@type': 'Organization',
          name: 'Riva Zegrze',
          logo: {
            '@type': 'ImageObject',
            url: 'https://rivazegrzeapartamenty.pl/images/og-image.jpg',
          },
        },
        mainEntityOfPage: 'https://rivazegrzeapartamenty.pl/blog',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Strona główna',
            item: 'https://rivazegrzeapartamenty.pl',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://rivazegrzeapartamenty.pl/blog',
          },
        ],
      },
    ],
  };

  const linkClass =
    'text-[#AB8A62] underline underline-offset-4 decoration-[#AB8A62]/40 hover:decoration-[#AB8A62] transition-colors font-medium';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main className="relative bg-[#f1f1ed]">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[#1a4d2e]" />
          <img
            src="/images/gallery/okolica/T3S-RivaZegrze-4175-m.jpg"
            alt="Weekend nad Jeziorem Zegrzyńskim — apartamenty Riva Zegrze nad wodą pod Warszawą"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 pt-32 pb-20 text-center">
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#d8c7a6] font-light block mb-8">
              Riva Zegrze · Przewodnik
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Weekend nad Jeziorem
              <br />
              Zegrzyńskim
            </h1>
            <p className="text-base md:text-xl text-white/85 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Noclegi nad wodą pod Warszawą, które zamieniają zwykły wyjazd w
              prawdziwy odpoczynek — kameralne apartamenty nad Zalewem
              Zegrzyńskim z basenem, prywatną plażą i siłownią.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apartamenty"
                className="px-10 py-4 bg-[#AB8A62] text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-[#967447] transition-colors"
              >
                Zobacz apartamenty
              </a>
              <a
                href="/rezerwacja"
                className="px-10 py-4 border border-white/40 text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-white/10 transition-colors"
              >
                Sprawdź wolne terminy
              </a>
            </div>
          </div>
        </section>

        {/* LEAD */}
        <section className="py-24 lg:py-36 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block mb-6">
              Ucieczka od miasta
            </span>
            <h2
              className="text-3xl md:text-5xl font-light text-[#4a6b5e] leading-tight mb-10"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Cisza nad wodą — zaledwie 40 minut od Warszawy
            </h2>
            <p className="text-[#6e7a73] text-[17px] md:text-[18px] leading-relaxed font-light mb-6">
              Czasem nie trzeba jechać daleko, żeby naprawdę odpocząć.{' '}
              <strong className="font-medium text-[#4a6b5e]">
                Weekend nad Jeziorem Zegrzyńskim
              </strong>{' '}
              to najprostszy sposób, by zostawić zgiełk stolicy za sobą i
              odetchnąć pełną piersią — bez wielogodzinnej podróży, korków i
              planowania na tygodnie naprzód. Riva Zegrze oferuje komfortowe{' '}
              <strong className="font-medium text-[#4a6b5e]">
                noclegi nad wodą pod Warszawą
              </strong>
              , które łączą spokój natury z wygodą nowoczesnych apartamentów.
            </p>
            <p className="text-[#6e7a73] text-[17px] md:text-[18px] leading-relaxed font-light">
              Zaledwie czterdzieści minut od centrum Warszawy budzisz się z
              widokiem na taflę wody, pijesz poranną kawę na tarasie i słuchasz,
              jak fale delikatnie uderzają o brzeg. To miejsce stworzone dla par
              szukających romantycznej ucieczki, rodzin z dziećmi i każdego, kto
              marzy o krótkim resecie z dala od miejskiego pośpiechu.
            </p>
          </div>
        </section>

        {/* SECTION — WEEKEND */}
        <section className="py-24 lg:py-32 bg-[#f1f1ed]">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block mb-6">
                Jak zaplanować
              </span>
              <h2
                className="text-3xl md:text-5xl font-light text-[#1a4d2e] leading-tight mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Weekend nad Jeziorem Zegrzyńskim — jak go zaplanować
              </h2>
              <p className="text-[#6e7a73] text-[16px] md:text-[17px] leading-relaxed font-light mb-6">
                Idealny weekend nad Jeziorem Zegrzyńskim zaczyna się od
                zwolnienia tempa. Pierwszy dzień najlepiej poświęcić na powolne
                wejście w tryb wakacyjny — spacer brzegiem zalewu, leniwe
                popołudnie na tarasie i kolacja z widokiem na zachodzące nad
                wodą słońce. Drugi dzień to czas na aktywność: żeglarstwo,
                kajaki, deska SUP albo rowerowa wyprawa wzdłuż brzegu.
              </p>
              <p className="text-[#6e7a73] text-[16px] md:text-[17px] leading-relaxed font-light mb-8">
                Miłośnicy wędkarstwa znajdą tu jedne z najlepszych łowisk w
                okolicy Warszawy, a rodziny z dziećmi docenią łagodne, piaszczyste
                plaże. Wieczorem warto odwiedzić jedną z marin lub nadwodnych
                restauracji, a dzień zakończyć w ciszy własnego apartamentu.
                Poznaj wszystkie{' '}
                <a href="/aktywnosci" className={linkClass}>
                  atrakcje i aktywności nad Jeziorem Zegrzyńskim
                </a>
                , które przygotowaliśmy dla naszych gości.
              </p>
              <a
                href="/aktywnosci"
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#AB8A62] font-light hover:text-[#967447] transition-colors group"
              >
                <span className="w-6 h-px bg-[#AB8A62] group-hover:w-10 transition-all duration-300" />
                Zobacz atrakcje okolicy
              </a>
            </div>
            <div className="relative h-[360px] lg:h-[520px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#8a9b8e]" />
              <img
                src="/images/experience/T3S-RivaZegrze-RG-3669-m.jpg"
                alt="Noclegi nad Zalewem Zegrzyńskim — relaks nad wodą pod Warszawą"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION — NOCLEGI POD WARSZAWĄ */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block mb-6">
              Dlaczego Zegrze
            </span>
            <h2
              className="text-3xl md:text-5xl font-light text-[#4a6b5e] leading-tight mb-10"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Noclegi nad wodą pod Warszawą bez kompromisów
            </h2>
            <p className="text-[#6e7a73] text-[17px] md:text-[18px] leading-relaxed font-light mb-6">
              Szukasz{' '}
              <strong className="font-medium text-[#4a6b5e]">
                noclegów nad wodą pod Warszawą
              </strong>
              , które będą czymś więcej niż zwykłym pokojem w hotelu? Zegrze
              Południowe to jedna z najlepiej skomunikowanych nadwodnych
              lokalizacji w okolicy stolicy — dojedziesz tu w około czterdzieści
              minut, a mimo to poczujesz się jak na prawdziwych wakacjach. W
              Riva Zegrze zatrzymasz się w pełni wyposażonym apartamencie z
              własną kuchnią, salonem i tarasem lub balkonem z widokiem na
              okolicę.
            </p>
            <p className="text-[#6e7a73] text-[17px] md:text-[18px] leading-relaxed font-light">
              To rozwiązanie, które daje swobodę: sam decydujesz, o której jesz
              śniadanie, gotujesz ulubione dania i organizujesz dzień po swojemu.
              Bez recepcyjnych kolejek, bez sztywnych godzin i bez kompromisów.
              Sprawdź nasze{' '}
              <a href="/apartamenty" className={linkClass}>
                apartamenty nad Jeziorem Zegrzyńskim
              </a>{' '}
              i{' '}
              <a href="/rezerwacja" className={linkClass}>
                zarezerwuj pobyt bezpośrednio
              </a>
              .
            </p>
          </div>
        </section>

        {/* APARTAMENTY — INTERNAL LINKS */}
        <section className="py-24 lg:py-32 bg-[#d4d6ce]">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block mb-4">
                Gdzie się zatrzymać
              </span>
              <h2
                className="text-3xl md:text-5xl font-light text-[#1a4d2e] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Nasze apartamenty nad Jeziorem Zegrzyńskim
              </h2>
              <p className="text-[#5a6b62] text-[16px] md:text-[17px] leading-relaxed font-light">
                Nasze apartamenty nad Jeziorem Zegrzyńskim łączą nowoczesny
                design z bliskością natury. Każdy z nich zaprojektowano z myślą o
                komforcie i prywatności gości — od przytulnych wnętrz dla par po
                przestronne apartamenty idealne dla rodzin. Wybierz ten, który
                najlepiej odpowiada Twoim planom na weekend nad wodą.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {apartamenty.map((apt) => (
                <a
                  key={apt.href}
                  href={apt.href}
                  className="group bg-white flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="h-2 bg-[#AB8A62]" />
                  <div className="p-8 flex flex-col flex-1">
                    <h3
                      className="text-xl font-light text-[#1a4d2e] mb-4"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {apt.name}
                    </h3>
                    <p className="text-sm text-[#6e7a73] leading-relaxed font-light mb-6 flex-1">
                      {apt.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#AB8A62] font-light">
                      <span className="w-4 h-px bg-[#AB8A62] group-hover:w-8 transition-all duration-300" />
                      Sprawdź dostępność
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-14">
              <a
                href="/apartamenty"
                className="inline-block px-10 py-4 bg-[#1a4d2e] text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-[#143d24] transition-colors"
              >
                Zobacz wszystkie apartamenty
              </a>
            </div>
          </div>
        </section>

        {/* UDOGODNIENIA */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block mb-4">
                Co zyskujesz
              </span>
              <h2
                className="text-3xl md:text-5xl font-light text-[#4a6b5e] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Noclegi nad Zalewem Zegrzyńskim z pełnym komfortem
              </h2>
              <p className="text-[#6e7a73] text-[16px] md:text-[17px] leading-relaxed font-light">
                Decydując się na noclegi nad Zalewem Zegrzyńskim w Riva Zegrze,
                zyskujesz znacznie więcej niż tylko miejsce do spania. Na terenie
                kompleksu czeka na Ciebie kryty, podgrzewany basen, w pełni
                wyposażona siłownia oraz prywatna plaża z bezpośrednim dostępem
                do wody. To idealne połączenie wakacyjnego relaksu i codziennej
                wygody — wszystko, czego potrzebujesz na udany weekend nad wodą,
                w jednym miejscu.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {udogodnienia.map((u) => (
                <div
                  key={u.label}
                  className="flex items-start gap-5 p-6 border border-[#e3e4dd] bg-[#fafaf7]"
                >
                  <div className="w-12 h-12 flex-shrink-0 border border-[#d4d6ce] rounded-full flex items-center justify-center">
                    <u.icon className="w-5 h-5 text-[#AB8A62]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] text-[#1a4d2e] font-medium mb-1">
                      {u.label}
                    </h3>
                    <p className="text-sm text-[#8a968f] font-light leading-relaxed">
                      {u.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATRAKCJE — full-bleed image band */}
        <section className="relative py-28 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-[#1a4d2e]" />
          <img
            src="/images/gallery/okolica/T3S-RivaZegrze-4175-m.jpg"
            alt="Atrakcje nad Jeziorem Zegrzyńskim — sporty wodne i aktywności"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#d8c7a6] font-light block mb-4">
                Aktywny wypoczynek
              </span>
              <h2
                className="text-3xl md:text-5xl font-light text-white mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Atrakcje i aktywności nad Jeziorem Zegrzyńskim
              </h2>
              <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed font-light">
                Okolice Jeziora Zegrzyńskiego to prawdziwy raj dla osób, które
                nie lubią się nudzić. Akwen od lat przyciąga miłośników sportów
                wodnych, a wzdłuż brzegów ciągną się malownicze trasy spacerowe
                i rowerowe. Niezależnie od tego, czy planujesz aktywny weekend,
                czy spokojny relaks, nad Zalewem Zegrzyńskim znajdziesz coś dla
                siebie przez cały rok.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {atrakcje.map((a) => (
                <div
                  key={a.label}
                  className="border border-white/20 bg-white/5 backdrop-blur-sm p-8 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-5 border border-[#AB8A62]/50 rounded-full flex items-center justify-center">
                    <a.icon className="w-6 h-6 text-[#d8c7a6]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-light text-white mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {a.label}
                  </h3>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-[#f1f1ed]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#AB8A62] font-light block mb-4">
                Dobrze wiedzieć
              </span>
              <h2
                className="text-3xl md:text-5xl font-light text-[#1a4d2e]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Najczęstsze pytania
              </h2>
            </div>

            <div className="space-y-5">
              {faq.map((item) => (
                <div
                  key={item.q}
                  className="bg-white border border-[#d4d6ce] p-8 lg:p-10"
                >
                  <h3
                    className="text-lg md:text-xl font-light text-[#1a4d2e] mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.q}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#6e7a73] leading-relaxed font-light">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 lg:py-40 bg-[#8a9b8e] overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/60 font-light block mb-6">
              Zarezerwuj bezpośrednio
            </span>
            <h2
              className="text-3xl md:text-5xl font-light text-white leading-tight mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Zaplanuj swój weekend nad wodą
            </h2>
            <p className="text-white/85 text-[16px] md:text-[18px] leading-relaxed font-light mb-12 max-w-xl mx-auto">
              Sprawdź wolne terminy i zarezerwuj apartament nad Jeziorem
              Zegrzyńskim bezpośrednio — bez prowizji pośredników, z gwarancją
              najlepszej ceny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/rezerwacja"
                className="px-10 py-4 bg-[#AB8A62] text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-[#967447] transition-colors"
              >
                Sprawdź wolne terminy
              </a>
              <a
                href="/apartamenty"
                className="px-10 py-4 border border-white/50 text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-white/10 transition-colors"
              >
                Przeglądaj apartamenty
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#f1f1ed] text-[#1a4d2e] py-20 border-t border-[#d4d6ce]">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Waves className="w-8 h-8 text-[#AB8A62]" strokeWidth={1} />
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
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="text-xs tracking-[0.3em] uppercase mb-6 font-light text-[#AB8A62]">
                Odkryj
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Apartamenty', href: '/apartamenty' },
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
                <li className="flex items-start gap-3 text-sm text-[#6e7a73] font-light">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AB8A62]" strokeWidth={1.5} />
                  <span>
                    Rybaki 11<br />
                    05-130 Zegrze Południowe
                  </span>
                </li>
                <li>
                  <a href="tel:+48510038038" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors">
                    <Phone className="w-5 h-5 text-[#AB8A62]" strokeWidth={1.5} />
                    <span>+48 510 038 038</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:wynajem@rivazegrze.pl" className="flex items-center gap-3 text-sm text-[#6e7a73] font-light hover:text-[#1a4d2e] transition-colors">
                    <Mail className="w-5 h-5 text-[#AB8A62]" strokeWidth={1.5} />
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
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-[#d4d6ce] pt-8">
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
    </>
  );
}
