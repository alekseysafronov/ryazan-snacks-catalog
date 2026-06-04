import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";
import solomkaAsset from "@/assets/solomka.png.asset.json";
import pistachiosAsset from "@/assets/pistachios.png.asset.json";
import nachosAsset from "@/assets/nachos.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Рязанские снэки — хрустящие снэки из сердца России" },
      { name: "description", content: "Производство фасованных снэков: чипсы, соломка, фисташки, начос, арахис, кальмары и рыба. Натуральные ингредиенты, рязанское качество." },
      { property: "og:title", content: "Рязанские снэки" },
      { property: "og:description", content: "Хрустящие, ароматные, натуральные снэки из Рязани." },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bitter:wght@600;800;900&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Янтарная соломка", tag: "Хрустящая • ароматная", img: solomkaAsset.url, accent: "var(--brand-orange)" },
  { name: "Фисташки Васаби", tag: "Острые • пикантные", img: pistachiosAsset.url, accent: "oklch(0.65 0.15 130)" },
  { name: "Начос Тайский перец", tag: "Огненные • смелые", img: nachosAsset.url, accent: "oklch(0.55 0.22 28)" },
];

const categories = [
  { title: "Чипсы и снэки", desc: "Картофель, кукуруза, начос" },
  { title: "Орехи", desc: "Арахис, фисташки, кешью" },
  { title: "Морепродукты", desc: "Кальмары, рыбка, анчоусы" },
  { title: "Соломка", desc: "Хрустящая, ароматная" },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--cream)_85%,transparent)] border-b border-border/60">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Рязанские снэки" className="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-primary">
            <a href="#products" className="hover:text-accent transition">Продукция</a>
            <a href="#about" className="hover:text-accent transition">О нас</a>
            <a href="#quality" className="hover:text-accent transition">Качество</a>
            <a href="#contact" className="hover:text-accent transition">Контакты</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-accent transition">
            Стать партнёром
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 rounded-full bg-accent" /> Производство в Рязани
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-primary">
              Хрустящие снэки
              <span className="block text-accent">из сердца России</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Чипсы, соломка, орехи, начос и морепродукты — отборные натуральные ингредиенты,
              рязанский характер и безупречное качество в каждой упаковке.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-[0_8px_30px_-8px_var(--brand-orange)] hover:translate-y-[-1px] transition">
                Смотреть продукцию
              </a>
              <a href="#contact" className="rounded-full border-2 border-primary px-7 py-3.5 text-base font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">
                Оптовые поставки
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[["12+", "лет на рынке"], ["40+", "вкусов"], ["100%", "качество"]].map(([k, v]) => (
                <div key={k}>
                  <div className="text-3xl font-black text-accent">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-br from-[var(--brand-yellow)] to-[var(--brand-orange)] opacity-30 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <img src={solomkaAsset.url} alt="Янтарная соломка" className="rounded-3xl shadow-2xl rotate-[-4deg] translate-y-6" />
              <img src={nachosAsset.url} alt="Начос" className="rounded-3xl shadow-2xl rotate-[4deg]" />
              <img src={pistachiosAsset.url} alt="Фисташки" className="rounded-3xl shadow-2xl rotate-[3deg] col-span-2 max-w-[70%] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="about" className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Что мы делаем</span>
              <h2 className="mt-3 text-4xl lg:text-5xl font-black">Четыре направления —<br/>один уровень качества</h2>
            </div>
            <p className="max-w-md text-primary-foreground/70">
              Мы фасуем и поставляем популярные снэки для розничных сетей,
              HoReCa и дистрибьюторов по всей России.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <div key={c.title} className="group relative rounded-3xl p-7 bg-[color-mix(in_oklab,var(--primary-foreground)_6%,transparent)] border border-[color-mix(in_oklab,var(--primary-foreground)_15%,transparent)] hover:bg-accent transition">
                <div className="text-5xl font-black text-accent group-hover:text-primary transition">0{i+1}</div>
                <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 group-hover:text-primary-foreground/90">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Хиты ассортимента</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black text-primary">Попробуйте Рязань на вкус</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {products.map((p) => (
              <article key={p.name} className="group rounded-[2rem] bg-card border border-border p-6 hover:shadow-2xl transition">
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${p.accent}, transparent 70%), var(--cream)` }}
                >
                  <img src={p.img} alt={p.name} className="w-[90%] group-hover:scale-105 transition duration-500" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-black text-primary">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary text-primary text-xs font-bold px-3 py-1.5">80 г</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[var(--brand-yellow)] via-[var(--brand-orange)] to-[var(--brand-brown)] p-10 lg:p-16 text-primary-foreground relative">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">100% качество.<br/>Без компромиссов.</h2>
              <p className="mt-5 text-lg text-primary-foreground/90">
                Только отборные натуральные ингредиенты, растительное масло
                и никакого ГМО. Идеально к пенному и к домашним посиделкам.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                ["Без ГМО", "Только проверенное сырьё"],
                ["Натуральное масло", "Растительные жиры высокого класса"],
                ["Свежесть", "Короткий путь от линии до полки"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-[color-mix(in_oklab,var(--brand-brown)_45%,transparent)] backdrop-blur p-6 border border-white/15">
                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="text-sm text-primary-foreground/80 mt-2">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="rounded-[2rem] bg-card border border-border p-10 lg:p-14 text-center">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Сотрудничество</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black text-primary">Поставим снэки в вашу сеть</h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Розница, опт, HoReCa и собственная торговая марка — обсудим условия,
              предоставим прайс и образцы.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+74912000000" className="rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground hover:bg-primary transition">
                +7 (4912) 00-00-00
              </a>
              <a href="mailto:hello@ryazan-snacks.ru" className="rounded-full border-2 border-primary px-7 py-3.5 font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">
                hello@ryazan-snacks.ru
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">г. Рязань, ул. Промышленная, 1 · Пн–Пт 9:00–18:00</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-10 w-auto" />
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Рязанские снэки</span>
          </div>
          <div className="text-sm text-muted-foreground">Сделано с хрустом в Рязани</div>
        </div>
      </footer>
    </div>
  );
}
