// renk modu (renkler style.css'te)
function applyTheme(name) {
  if (name !== "pink") name = "main";
  document.documentElement.dataset.mode = name;
  document.querySelectorAll(".mode button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.mode === name))
  );
  try { localStorage.setItem("mode", name); } catch (e) {}
}

// sertifikalar: ad, tarih, doğrulama kodu
const CERTS = [
  ["Yazılım Tasarım Desenleri", "29.05.2026", "AJaS7Jgn4M"],
  ["Uygulamalarla Nesne Yönelimli Programlama", "25.05.2026", "pKmhq1LBad"],
  ["Güvenli Yazılım Geliştirme", "03.06.2026", "oJpSgyvkjp"],
  ["T-SQL ile Veri Tabanı Programlama", "19.05.2026", "2NwcJ76AZn"],
  ["Versiyon Kontrolleri: Git ve GitHub", "22.12.2025", "vpWcn9aeE4"],
  ["Proje Yönetimi", "03.06.2026", "ax1hrn282Y"],
];

// klasörler (sıra = ekrandaki sıra)
const FILES = [
  {
    id: "kimlik",
    no: "00",
    tab: "Kimlik Dosyası",
    x: "0%",
    peek: ["Hakkımda", "Bilgisayar Programcılığı · İstanbul"],
    card: "assets/kimlik-karti.webp",
    heading: "Merhaba, ben Elzem.",
    meta: [
      ["Şehir", "İstanbul"],
      ["Yabancı dil", "İngilizce (B1)"],
    ],
    body: `
      <p>Manisa Celal Bayar Üniversitesi Bilgisayar Programcılığı öğrencisiyim. Yazılım tarafında beni en çok içine çeken şey, ekranın arkasında dönen sistem mantığı; verinin nasıl tutulduğu, bir talebin hangi adımlardan geçip güvenli bir sonuca ulaştığı.</p>
      <p>C#, Java ve PHP ile geliştirme yapıyor; veritabanı mimarisi ve siber güvenlik alanlarında kendimi geliştiriyorum. Bir projede hem arka plan kurgusunu oluşturmak hem de tasarım gözüyle detaylara dokunmak üretme biçimimin en sevdiğim parçası.</p>
      <p>Bu dosyada üzerinde çalıştığım projeleri, tamamladığım eğitimleri ve kullandığım araçları bir araya getirdim. Dosyaları karıştırmaktan çekinme.</p>
    `,
    excerpt: {
      title: "Odak Noktalarım",
      html: `
        <ul class="dash">
          <li>Backend &amp; Sistem Mimarisi</li>
          <li>Veritabanı &amp; Veri Akışı</li>
          <li>Güvenli Kodlama &amp; Siber Güvenlik</li>
          <li>Görsel &amp; Teknik Bakış Açısı</li>
        </ul>`,
    },
    receipt: {
      title: "EĞİTİM",
      lines: [
        ["Okul", "MCBÜ"],
        ["Bölüm", "Bilgisayar Programcılığı"],
        ["Derece", "Önlisans"],
        ["Başlangıç", "2025"],
      ],
    },
  },

  {
    id: "teknik-servis",
    no: "01",
    tab: "Teknik Servis Sistemi",
    x: "30%",
    ongoing: true,
    peek: ["Dosya 01", "Ekip projesi · PHP arka yüz & güvenlik"],
    heading: "Teknik Servis Sistemi",
    meta: [
      ["Ekip", "3 kişi"],
      ["Benim rolüm", "PHP arka yüz &amp; güvenlik"],
      ["Proje", "PHP, SQL Server, HTML/CSS"],
    ],
    body: `
      <p>Teknik servislerin arıza ve talep kayıtlarını yönetebilmesi için geliştirdiğimiz web uygulamasının arka yüzünü yazıyorum.</p>
      <p>Oturum ve rol bazlı erişim kontrolü, CSRF koruması, kayıt/giriş akışları ve kullanıcı panellerinin sunucu tarafındaki mantığını kurguladım. Veritabanı tarafında da şema kurulumu ve test/şifre geçiş adımlarında sürece dahil oldum.</p>
      <p>Uygulamanın arayüz ile veritabanı arasındaki işleyişini birbirine bağlayan, güvenli ve düzenli bir yapı kurmaya odaklanıyorum.</p>
    `,
    excerpt: {
      title: "Benim katkım",
      html: `
        <ul class="dash">
          <li>Oturum &amp; rol kontrolü</li>
          <li>CSRF &amp; giriş güvenliği</li>
          <li>Kullanıcı, teknisyen &amp; yönetici panelleri</li>
          <li>Arka yüz &amp; veri bağlantısı</li>
        </ul>`,
    },
    receipt: {
      title: "KAYNAK KOD",
      lines: [["Depo", "Henüz paylaşılmadı"]],
      stamp: "YAKINDA",
    },
  },

  {
    id: "gider-takip",
    no: "02",
    tab: "Gider Takip API",
    x: "60%",
    ongoing: true,
    peek: ["Dosya 02", "Java · Spring Boot · MySQL"],
    heading: "Harcamaları kayıt altına alan bir API",
    meta: [
      ["Dil", "Java 21"],
      ["Çatı", "Spring Boot"],
      ["Veri tabanı", "MySQL"],
    ],
    body: `
      <p>Spring Boot ile geliştirdiğim ilk REST API projesi. Harcamaları başlık, tutar, kategori ve tarih bilgileriyle yönetiyor; ekleme, listeleme, güncelleme ve silme işlemlerini MySQL üzerinde tutuyor.</p>
      <p>Kod yapısını katmanlı mimariye göre kurguladım; iş kurallarını, veri erişimini ve istek akışını birbirinden ayırarak daha okunabilir ve bakımı kolay bir yapı oluşturdum.</p>
      <p class="code-label">ExpenseService.java</p>
      <pre class="code"><code>public Expense updateExpense(
        Long id, Expense updated) {
    Expense existing = getExpenseById(id);
    existing.setBaslik(updated.getBaslik());
    existing.setMiktar(updated.getMiktar());
    existing.setKategori(updated.getKategori());
    existing.setTarih(updated.getTarih());
    return expenseRepository.save(existing);
}</code></pre>
    `,
    excerpt: {
      title: "Kullandıklarım",
      html: `
        <ul class="dash">
          <li>Java 21</li>
          <li>Spring Boot</li>
          <li>Spring Data JPA</li>
          <li>MySQL</li>
          <li>Lombok · Maven</li>
          <li>Git · GitHub</li>
        </ul>`,
    },
    receipt: {
      title: "KAYNAK KOD",
      lines: [
        ["Depo", "expense-tracker-api"],
        ["Yer", "GitHub"],
      ],
      link: ["Depoyu aç →", "https://github.com/Elzemaltiokka/expense-tracker-api"],
    },
  },

  {
    id: "sertifikalar",
    no: "03",
    tab: "Sertifikalar",
    x: "12%",
    peek: ["Dosya 03", "6 eğitim · BTK Akademi · doğrulanabilir"],
    heading: "Sertifika Fişleri",
    meta: [
      ["Kurum", "BTK Akademi"],
      ["Tarih", "2025 – 2026"],
      ["Doğrulama", "Her fişte bağlantı var"],
    ],
    body: `
      <p>Temelimi pekiştirmek için tamamladığım eğitimler. Fişleri istediğin gibi dağıtabilirsin.</p>
      <div class="slips">
        ${CERTS.map(
          ([name, date, id], i) => `
          <div class="slip" data-drag style="--r:${[-2, 1.5, -1, 2, -1.5, 1][i % 6]}deg">
            <span class="slip-no">No. ${String(i + 1).padStart(2, "0")}</span>
            <span class="slip-title">${name}</span>
            <span class="slip-meta">BTK Akademi · ${date}</span>
            <a class="slip-link" href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=${id}" target="_blank" rel="noopener">Sertifikayı gör →</a>
            <span class="slip-stamp">✓</span>
          </div>`
        ).join("")}
      </div>
    `,
  },

  {
    id: "beceriler",
    no: "04",
    tab: "Beceriler",
    x: "42%",
    peek: ["Dosya 04", "C# · Java · PHP · SQL"],
    heading: "Çalıştığım diller ve araçlar",
    meta: [],
    body: `
      ${[
        ["Programlama dilleri", ["C#", "Java", "PHP"]],
        ["Veri tabanı", ["SQL", "MySQL", "Microsoft SQL Server", "T-SQL"]],
        ["Çatılar", ["Spring Boot", "Spring Data JPA"]],
        ["Yaklaşımlar", ["Nesne Yönelimli Programlama", "Tasarım Desenleri", "Güvenli Yazılım Geliştirme", "Proje Yönetimi"]],
        ["Versiyon kontrolü", ["Git", "GitHub"]],
      ]
        .map(
          ([g, items]) => `
        <div class="tag-group">
          <h3>${g}</h3>
          <ul class="tags">${items.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>`
        )
        .join("")}
    `,
    excerpt: {
      title: "Kod dışında",
      html: `
        <ul class="dash">
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere Pro</li>
          <li>Blender</li>
        </ul>`,
    },
  },

  {
    id: "iletisim",
    no: "05",
    tab: "İletişim",
    x: "70%",
    peek: ["Dosya 05", "E-posta · LinkedIn · GitHub"],
    heading: "İletişime geçmek için",
    meta: [],
    body: `
      <p>Bir proje, staj ya da iş fırsatı için bana yazabilirsin.</p>
      <ul class="contact">
        <li><span>E-posta</span><a href="mailto:elzemaltiokka44@gmail.com">elzemaltiokka44@gmail.com</a></li>
        <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/elzem-alt%C4%B1okka-9023353a2/" target="_blank" rel="noopener">elzem-altıokka</a></li>
        <li><span>GitHub</span><a href="https://github.com/Elzemaltiokka" target="_blank" rel="noopener">Elzemaltiokka</a></li>
      </ul>
    `,
  },
];

const cabinet = document.getElementById("cabinet");
const home = document.getElementById("home");
const view = document.getElementById("file");

const SEAL = `<img class="seal" src="assets/logo.png" alt="" draggable="false">`;

const ONGOING = `
  <svg class="ink-stamp" viewBox="0 0 140 140" aria-label="Devam ediyor">
    <defs><path id="ring" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"/></defs>
    <circle cx="70" cy="70" r="66" fill="none" stroke="currentColor" stroke-width="3"/>
    <circle cx="70" cy="70" r="38" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <text font-size="13.5" letter-spacing="3.2" fill="currentColor"><textPath href="#ring">DEVAM EDİYOR · DEVAM EDİYOR ·</textPath></text>
    <text x="70" y="66" text-anchor="middle" font-size="12" fill="currentColor">EA</text>
    <text x="70" y="84" text-anchor="middle" font-size="13" fill="currentColor">2026</text>
  </svg>`;

// hover yazısı sonraki sekmenin altında kalmasın
function peekSide(i) {
  const next = FILES[i + 1];
  if (!next) return "";
  return parseFloat(next.x) < 45 ? "right" : "";
}

function renderCabinet() {
  cabinet.innerHTML = FILES.map(
    (f, i) => `
    <a class="folder" href="#${f.id}" style="--i:${i + 1};--c:var(--f-${f.id});--ink:var(--i-${f.id});--x:${f.x}">
      <span class="tab"><span>${f.tab}</span></span>
      ${f.card ? `<img class="peek-clip" src="assets/klips.png" alt="" draggable="false">` : ""}
      <span class="band">
        <span class="peek ${peekSide(i)}"><span>${f.peek[0]}</span><span>${f.peek[1]}</span></span>
      </span>
    </a>`
  ).join("");
}

function renderFile(f) {
  const others = FILES.filter((o) => o.id !== f.id);

  const receipt = f.receipt
    ? `
    <aside class="receipt" data-drag>
      <svg class="clip" viewBox="0 0 24 60" aria-hidden="true"><path d="M8 52V12a6 6 0 0 1 12 0v36a9 9 0 0 1-18 0V16" fill="none" stroke="#7b7b7b" stroke-width="2.2" stroke-linecap="round"/></svg>
      <p class="receipt-title">${f.receipt.title}</p>
      <dl>${f.receipt.lines.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>
      ${f.receipt.link ? `<a href="${f.receipt.link[1]}" target="_blank" rel="noopener">${f.receipt.link[0]}</a>` : ""}
      ${f.receipt.stamp ? `<span class="r-stamp">${f.receipt.stamp}</span>` : ""}
    </aside>`
    : "";

  const excerpt = f.excerpt
    ? `
    <section class="excerpt" data-drag>
      <span class="badge">Ek ${f.no}</span>
      <h3>${f.excerpt.title}</h3>
      ${f.excerpt.html}
      ${SEAL}
    </section>`
    : "";

  const card = f.card
    ? `
    <figure class="id-card">
      <img class="klips" src="assets/klips.png" alt="" draggable="false">
      <img class="card-img" src="${f.card}" alt="Elzem Altıokka — Computer Programming kimlik kartı" draggable="false">
    </figure>`
    : "";

  const meta = f.meta.length
    ? `<dl class="meta">${f.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>`
    : "";

  view.innerHTML = `
    <div class="file-head">
      <a class="back" href="#">← Arşive dön</a>
      <p class="crumb">Arşiv / Dosya ${f.no}</p>
    </div>
    <div class="desk ${f.excerpt ? "" : "solo"} ${f.receipt ? "has-receipt" : ""} ${f.card ? "has-card" : ""}" style="--c:var(--f-${f.id});--ink:var(--i-${f.id})">
      <span class="front-tab">${f.tab}</span>
      ${card}
      ${excerpt}
      <article class="paper" data-drag>
        <span class="badge">Dosya #${f.no}</span>
        ${f.ongoing ? ONGOING : ""}
        <h2>${f.heading}</h2>
        ${meta}
        <div class="body">${f.body}</div>
        ${SEAL}
      </article>
      ${receipt}
      <nav class="side-tabs" aria-label="Diğer dosyalar">
        ${others.map((o) => `<a href="#${o.id}" style="--c:var(--f-${o.id});--ink:var(--i-${o.id})">${o.tab}</a>`).join("")}
      </nav>
    </div>
  `;
}

// kâğıtları sürükleme (sadece masaüstü)
let topZ = 10;
const canDrag = window.matchMedia("(min-width: 821px)");
const PAD = 8;

// kâğıtlar klasörün dışına çıkmasın, aşağı kaçıp kaybolmasın
function clampShift(el, rect, dx, dy) {
  const desk = el.closest(".desk").getBoundingClientRect();
  const left = Math.max(desk.left, 0) + PAD;
  const right = Math.min(desk.right, view.clientWidth) - PAD;
  const top = desk.top + PAD;
  const bottom = desk.bottom - PAD;
  const fit = (d, min, max) => Math.min(Math.max(d, Math.min(min, max)), Math.max(min, max));
  return [
    fit(dx, left - rect.left, right - rect.right),
    fit(dy, top - rect.top, bottom - rect.bottom),
  ];
}

function getShift(el) {
  // tarayıcı "100px 0px" değerini "100px" diye kısaltabiliyor
  const [x = 0, y = 0] = (el.style.translate || "").split(" ").map((v) => parseFloat(v) || 0);
  return [x, y];
}

view.addEventListener("pointerdown", (e) => {
  if (!canDrag.matches || e.button !== 0) return;
  const el = e.target.closest("[data-drag]");
  if (!el || e.target.closest("a, button, pre")) return;
  e.preventDefault(); // sürüklerken yazılar seçilmesin

  const [tx, ty] = getShift(el);
  const rect = el.getBoundingClientRect();
  const sx = e.clientX, sy = e.clientY, st = view.scrollTop;
  let moved = false;

  const move = (ev) => {
    let dx = ev.clientX - sx, dy = ev.clientY - sy;
    if (!moved && Math.hypot(dx, dy) < 4) return;
    if (!moved) {
      moved = true;
      el.classList.add("dragging");
      el.style.zIndex = ++topZ;
    }
    // sürüklerken sayfa kaydırılırsa diye
    const scrolled = view.scrollTop - st;
    const r = { left: rect.left, right: rect.right, top: rect.top - scrolled, bottom: rect.bottom - scrolled };
    [dx, dy] = clampShift(el, r, dx, dy + scrolled);
    el.style.translate = `${tx + dx}px ${ty + dy}px`;
  };
  const up = () => {
    el.classList.remove("dragging");
    el.removeEventListener("pointermove", move);
    el.removeEventListener("pointerup", up);
    el.removeEventListener("pointercancel", up);
    el.removeEventListener("lostpointercapture", up);
  };
  // fare pencerenin dışında bırakılsa bile sürükleme bitsin
  el.setPointerCapture(e.pointerId);
  el.addEventListener("pointermove", move);
  el.addEventListener("pointerup", up);
  el.addEventListener("pointercancel", up);
  el.addEventListener("lostpointercapture", up);
});

// pencere küçülünce yana taşan kâğıtları geri çek
window.addEventListener("resize", () => {
  if (view.hidden) return;
  view.querySelectorAll("[data-drag]").forEach((el) => {
    if (!el.style.translate) return;
    const [tx, ty] = getShift(el);
    const r = el.getBoundingClientRect();
    const [dx] = clampShift(el, r, 0, 0);
    if (dx) el.style.translate = `${tx + dx}px ${ty}px`;
  });
});

// kod kutuya sığsın diye yazıyı küçültüyor
function fitCode() {
  view.querySelectorAll(".code").forEach((pre) => {
    pre.style.whiteSpace = "pre";
    let size = 12.5;
    pre.style.fontSize = size + "px";
    while (pre.scrollWidth > pre.clientWidth && size > 8.5) {
      size -= 0.5;
      pre.style.fontSize = size + "px";
    }
    if (pre.scrollWidth > pre.clientWidth) pre.style.whiteSpace = "pre-wrap";
  });
}
window.addEventListener("resize", () => { if (!view.hidden) fitCode(); });

// sayfa geçişleri
function route() {
  const id = location.hash.slice(1);
  const f = FILES.find((x) => x.id === id);
  if (f) {
    renderFile(f);
    view.hidden = false;
    home.setAttribute("aria-hidden", "true");
    document.body.classList.add("is-open");
    view.scrollTop = 0;
    fitCode();
    document.title = `${f.tab} — Elzem Altıokka`;
  } else {
    view.hidden = true;
    home.removeAttribute("aria-hidden");
    document.body.classList.remove("is-open");
    document.title = "Elzem Altıokka — Portfolyo";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !view.hidden) location.hash = "";
});

applyTheme(document.documentElement.dataset.mode);
document.querySelectorAll(".mode button").forEach((b) =>
  b.addEventListener("click", () => applyTheme(b.dataset.mode))
);

renderCabinet();
window.addEventListener("hashchange", route);
route();
// ilk açılışta animasyon oynamasın, sonra normale dönsün
requestAnimationFrame(() => requestAnimationFrame(() =>
  document.documentElement.classList.remove("boot", "boot-file")
));
