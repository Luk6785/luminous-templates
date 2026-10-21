/* ------------------------------------------------------------------
 *  Render sản phẩm + lọc danh mục + chuyển ngôn ngữ (EN mặc định / VI).
 *  Dữ liệu lấy từ PRODUCTS, CATEGORIES, STORE trong products.js
 * ------------------------------------------------------------------ */

(function () {
  "use strict";

  // Chuỗi giao diện song ngữ
  const I18N = {
    en: {
      headerCta: "Gumroad page ↗",
      heroEyebrow: "🛍️ Premium HTML website templates",
      heroTitle: "Beautiful, SEO-ready sites,<br>deploy in minutes",
      heroSub: "Premium HTML website templates — buy once, use forever",
      heroCta1: "Browse templates",
      heroCta2: "See all on Gumroad",
      trust1: "✅ Secure checkout via Gumroad",
      trust2: "⚡ Instant download",
      trust3: "♾️ Pay once, use forever",
      sectionTitle: "All products",
      navProducts: "Products",
      all: "All",
      meta: "⚡ Instant download · HTML / CSS / JS",
      buy: "Buy on Gumroad →",
      empty: "No products in this category.",
      footerNote: "Showcase website. All transactions are securely processed by Gumroad.",
      free: "Free"
    },
    vi: {
      headerCta: "Trang Gumroad ↗",
      heroEyebrow: "🛍️ Mẫu website HTML cao cấp",
      heroTitle: "Website đẹp, chuẩn SEO,<br>sẵn sàng deploy trong vài phút",
      heroSub: "Mẫu website HTML cao cấp — mua một lần, dùng mãi mãi",
      heroCta1: "Khám phá mẫu website",
      heroCta2: "Xem tất cả trên Gumroad",
      trust1: "✅ Thanh toán an toàn qua Gumroad",
      trust2: "⚡ Tải về tức thì",
      trust3: "♾️ Mua một lần, dùng mãi mãi",
      sectionTitle: "Tất cả sản phẩm",
      navProducts: "Sản phẩm",
      all: "Tất cả",
      meta: "⚡ Tải về tức thì · HTML / CSS / JS",
      buy: "Mua trên Gumroad →",
      empty: "Không có sản phẩm nào trong danh mục này.",
      footerNote: "Website giới thiệu sản phẩm. Mọi giao dịch được xử lý an toàn bởi Gumroad.",
      free: "Miễn phí"
    }
  };

  // Ngôn ngữ mặc định: tiếng Anh
  let lang = "en";
  try { if (localStorage.getItem("lang") === "vi") lang = "vi"; } catch (e) {}
  const t = (k) => I18N[lang][k];

  let activeCat = "all"; // danh mục đang lọc

  const GRADIENTS = [
    "linear-gradient(135deg,#ff90e8,#ff5fdc)",
    "linear-gradient(135deg,#7c5cff,#b18cff)",
    "linear-gradient(135deg,#00c6a7,#1de9b6)",
    "linear-gradient(135deg,#ffa63d,#ff5f6d)"
  ];

  const money = (n) =>
    n > 0 ? "$" + new Intl.NumberFormat("en-US").format(n) : t("free");

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const catName = (key) => (CATEGORIES[key] ? CATEGORIES[key][lang] : key);

  // ---- Card ----
  function cardHTML(p, i) {
    const cover = p.img
      ? `<img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.title)}" loading="lazy">`
      : `<span style="background:${GRADIENTS[i % GRADIENTS.length]};position:absolute;inset:0;display:grid;place-items:center;padding:18px">${escapeHtml(p.title)}</span>`;
    const badge = p.badge ? `<span class="badge">${escapeHtml(p.badge[lang])}</span>` : "";
    const oldPrice = p.oldPrice ? `<span class="price-old">${money(p.oldPrice)}</span>` : "";

    return `
      <article class="card">
        <div class="card-cover">${badge}${cover}</div>
        <div class="card-body">
          <span class="card-cat">${escapeHtml(catName(p.cat))}</span>
          <h3 class="card-title">${escapeHtml(p.title)}</h3>
          <p class="card-desc">${escapeHtml(p.desc[lang])}</p>
          <div class="card-meta">${t("meta")}</div>
          <div class="card-price">
            <span class="price-now">${money(p.price)}</span>${oldPrice}
          </div>
          <a class="btn btn-primary btn-block gumroad-button"
             href="${escapeHtml(p.gumroadUrl)}"
             target="_blank" rel="noopener">${t("buy")}</a>
        </div>
      </article>`;
  }

  function renderGrid() {
    const list = activeCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeCat);
    const grid = document.getElementById("grid");
    const empty = document.getElementById("empty");
    grid.innerHTML = list.map(cardHTML).join("");
    empty.textContent = t("empty");
    empty.hidden = list.length > 0;
  }

  function buildFilters() {
    const cats = Array.from(new Set(PRODUCTS.map((p) => p.cat)));
    const wrap = document.getElementById("filters");
    wrap.innerHTML =
      `<button class="chip${activeCat === "all" ? " active" : ""}" data-cat="all">${escapeHtml(t("all"))}</button>` +
      cats.map((c) => `<button class="chip${activeCat === c ? " active" : ""}" data-cat="${c}">${escapeHtml(catName(c))}</button>`).join("");
  }

  function buildNav() {
    const cats = Array.from(new Set(PRODUCTS.map((p) => p.cat))).slice(0, 5);
    document.getElementById("nav").innerHTML =
      `<a href="#products">${escapeHtml(t("navProducts"))}</a>` +
      cats.map((c) => `<a href="#products">${escapeHtml(catName(c))}</a>`).join("");
  }

  // ---- Áp dụng text tĩnh theo ngôn ngữ ----
  function applyStaticText() {
    document.documentElement.lang = lang;
    document.title = STORE.name + " — " + (lang === "vi" ? "Mẫu website HTML cao cấp" : "Premium HTML website templates");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    // nút ngôn ngữ đang chọn
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  function applyStore() {
    document.getElementById("storeName").textContent = STORE.name;
    document.getElementById("footerName").textContent = STORE.name;
    ["profileLink", "heroProfile"].forEach((id) => {
      document.getElementById(id).href = STORE.gumroadProfile;
    });
  }

  function setLang(next) {
    lang = next === "vi" ? "vi" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyStaticText();
    buildNav();
    buildFilters();
    renderGrid();
  }

  // ---- Sự kiện ----
  document.getElementById("filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    buildFilters();
    renderGrid();
  });

  document.getElementById("langSwitch").addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (btn) setLang(btn.dataset.lang);
  });

  // ---- Khởi tạo ----
  applyStore();
  applyStaticText();
  buildNav();
  buildFilters();
  renderGrid();
})();
