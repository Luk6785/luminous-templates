# Luminous Templates — Website bán sản phẩm (link tới Gumroad)

Website tĩnh giới thiệu sản phẩm số. Mỗi sản phẩm có nút **"Mua trên Gumroad"**
trỏ thẳng tới trang bán hàng Gumroad và mở checkout overlay ngay trên trang.

Dữ liệu sản phẩm (10 mẫu HTML template) được lấy thật từ
`https://lukluminous.gumroad.com`.

## Cấu trúc

```
Shop/
├─ index.html        # Trang chính
├─ css/styles.css    # Giao diện (tông màu Gumroad)
├─ js/products.js    # DỮ LIỆU sản phẩm — sửa ở đây
└─ js/app.js         # Logic render + lọc danh mục
```

## Chạy thử

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
npx serve .
```

## Thêm / sửa sản phẩm

Mở `js/products.js`, sửa trong mảng `PRODUCTS`. Mỗi sản phẩm:

```js
{
  id: 11,
  title: "Tên sản phẩm",
  price: 19,                 // giá USD (khớp với Gumroad)
  oldPrice: 0,               // giá gạch ngang, 0 = ẩn
  category: "Danh mục",
  desc: "Mô tả ngắn.",
  img: "https://...",        // ảnh bìa; để "" sẽ tự sinh gradient
  slug: "ma-san-pham",       // phần sau /l/ trong link Gumroad
  badge: "Mới"               // nhãn góc ảnh; "" = ẩn
}
```

Link mua được tạo tự động: `GUMROAD_BASE + slug`
(ví dụ `https://lukluminous.gumroad.com/l/ljpews`).

Đổi tên cửa hàng / slogan / link ở object `STORE` cuối file `products.js`.

## Checkout overlay

`index.html` đã nạp `https://gumroad.com/js/gumroad.js` và nút mua có class
`gumroad-button`, nên khi khách bấm **Mua** sẽ hiện cửa sổ thanh toán Gumroad
ngay trên trang (không rời website). Thanh toán & giao sản phẩm do Gumroad xử lý.
