/* ------------------------------------------------------------------
 *  DỮ LIỆU SẢN PHẨM  (lấy thật từ lukluminous.gumroad.com)
 *  Song ngữ: mỗi mô tả / danh mục có bản { en, vi }.
 * ------------------------------------------------------------------
 *  Nút "Mua" trỏ thẳng tới: https://lukluminous.gumroad.com/l/<slug>
 *   - price : số, đơn vị USD (đồng bộ với giá trên Gumroad)
 *   - slug  : mã sản phẩm trên Gumroad (phần sau /l/)
 *   - img   : ảnh bìa; để trống "" sẽ tự sinh ảnh gradient theo tên.
 *   - cat   : key danh mục (xem CATEGORIES bên dưới)
 * ------------------------------------------------------------------ */

const GUMROAD_BASE = "https://lukluminous.gumroad.com/l/";

// Tên danh mục song ngữ
const CATEGORIES = {
  bundle:     { en: "Bundle",            vi: "Gói combo" },
  restaurant: { en: "Restaurant",        vi: "Nhà hàng" },
  fitness:    { en: "Fitness",           vi: "Thể thao" },
  saas:       { en: "SaaS / Business",   vi: "SaaS / Doanh nghiệp" },
  realestate: { en: "Real Estate",       vi: "Bất động sản" },
  portfolio:  { en: "Portfolio",         vi: "Portfolio" },
  health:     { en: "Health",            vi: "Sức khỏe" },
  beauty:     { en: "Beauty",            vi: "Làm đẹp" },
  event:      { en: "Event",             vi: "Sự kiện" }
};

const PRODUCTS = [
  {
    id: 1,
    title: "The Complete HTML Template Bundle – 9 Websites",
    price: 39,
    oldPrice: 112,
    cat: "bundle",
    desc: {
      en: "All 9 professional HTML website templates in one pack — save over 60% vs buying separately. Ready to customize and deploy.",
      vi: "Trọn bộ 9 mẫu website HTML chuyên nghiệp — tiết kiệm hơn 60% so với mua lẻ. Sẵn sàng tùy biến và deploy."
    },
    img: "https://public-files.gumroad.com/oj05stz8us7wif2q8476e92kxyzi",
    slug: "ljpews",
    badge: { en: "Save 65%", vi: "Tiết kiệm 65%" }
  },
  {
    id: 2,
    title: "Maison – Fine Dining Restaurant HTML Template",
    price: 15, oldPrice: 0, cat: "restaurant",
    desc: {
      en: "Elegant fine-dining restaurant template: menu, table booking and a refined food gallery.",
      vi: "Mẫu website nhà hàng fine-dining sang trọng: thực đơn, đặt bàn, gallery món ăn tinh tế."
    },
    img: "https://public-files.gumroad.com/02u4sm30y8fr9y5vadwbbd97g85e",
    slug: "ghipaa", badge: null
  },
  {
    id: 3,
    title: "Pulse – Gym & Fitness HTML Template",
    price: 14, oldPrice: 0, cat: "fitness",
    desc: {
      en: "Energetic gym & fitness landing page: class schedule, membership plans and trainer lineup.",
      vi: "Landing page phòng gym & fitness năng động: lịch tập, gói hội viên, đội ngũ huấn luyện viên."
    },
    img: "https://public-files.gumroad.com/g61i80258wmnni66mtu8xtt6yut6",
    slug: "rjzytv", badge: null
  },
  {
    id: 4,
    title: "Nimbus – SaaS Landing Page HTML Template",
    price: 15, oldPrice: 0, cat: "saas",
    desc: {
      en: "Modern SaaS landing page: pricing table, feature list and conversion-optimized CTAs.",
      vi: "Landing page SaaS hiện đại: bảng giá, danh sách tính năng và CTA tối ưu chuyển đổi."
    },
    img: "https://public-files.gumroad.com/5x6y31ymz2hwwqoljbihjy68ptx0",
    slug: "vcpgcy", badge: { en: "Best seller", vi: "Bán chạy" }
  },
  {
    id: 5,
    title: "Haven – Real Estate HTML Template",
    price: 14, oldPrice: 0, cat: "realestate",
    desc: {
      en: "Real estate website: property listings, search filters and a clear listing-detail page.",
      vi: "Website bất động sản: danh sách BĐS, bộ lọc tìm kiếm và trang chi tiết căn hộ trực quan."
    },
    img: "https://public-files.gumroad.com/qghgxgt4tdy1v1lk2vh2f5urbq2y",
    slug: "dmape", badge: null
  },
  {
    id: 6,
    title: "Folio – Portfolio HTML Template",
    price: 9, oldPrice: 0, cat: "portfolio",
    desc: {
      en: "Minimal portfolio template for designers, developers and freelancers to showcase their work.",
      vi: "Mẫu portfolio tối giản cho designer, developer và freelancer trình bày dự án ấn tượng."
    },
    img: "https://public-files.gumroad.com/gf5tkwoptfielaupwui8rmyql5k0",
    slug: "dkheac", badge: null
  },
  {
    id: 7,
    title: "Brew – Cafe & Restaurant HTML Template",
    price: 9, oldPrice: 0, cat: "restaurant",
    desc: {
      en: "Cozy cafe & restaurant website: menu, brand story and a reservation form.",
      vi: "Website cafe & nhà hàng ấm cúng: menu, câu chuyện thương hiệu và form đặt chỗ."
    },
    img: "https://public-files.gumroad.com/wtqf9m8fwwdqjjj64a064lfvsklc",
    slug: "iocbkn", badge: null
  },
  {
    id: 8,
    title: "Smile – Dental Clinic HTML Template",
    price: 12, oldPrice: 0, cat: "health",
    desc: {
      en: "Dental clinic website: service catalog, appointment booking and doctor profiles.",
      vi: "Website phòng khám nha khoa: danh mục dịch vụ, đặt lịch hẹn và giới thiệu đội ngũ bác sĩ."
    },
    img: "https://public-files.gumroad.com/jsi2zwlaz9glc9x1ca8sk9utklhi",
    slug: "xwjnf", badge: null
  },
  {
    id: 9,
    title: "Lumi – Spa & Beauty Salon HTML Template",
    price: 12, oldPrice: 0, cat: "beauty",
    desc: {
      en: "Spa & beauty salon website: service menu, booking and a relaxing space gallery.",
      vi: "Website spa & thẩm mỹ viện: bảng dịch vụ, đặt lịch và gallery không gian thư giãn."
    },
    img: "https://public-files.gumroad.com/ya93ojwegf2ngbgi2zynn4gw9eq7",
    slug: "nicylq", badge: null
  },
  {
    id: 10,
    title: "Vow – Wedding Invitation HTML Template",
    price: 12, oldPrice: 0, cat: "event",
    desc: {
      en: "Online wedding invitation: timeline, photo album and an RSVP form for guests.",
      vi: "Thiệp cưới online: timeline, album ảnh và form xác nhận tham dự (RSVP) cho khách mời."
    },
    img: "https://public-files.gumroad.com/47oj63doidapfgat7u7598sobdbt",
    slug: "dtkkq", badge: { en: "New", vi: "Mới" }
  }
];

// Gắn link Gumroad đầy đủ cho từng sản phẩm
PRODUCTS.forEach((p) => { p.gumroadUrl = GUMROAD_BASE + p.slug; });

/* Thông tin cửa hàng – tên không đổi theo ngôn ngữ */
const STORE = {
  name: "Luminous Templates",
  gumroadProfile: "https://lukluminous.gumroad.com"
};
