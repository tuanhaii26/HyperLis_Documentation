# 🚀 HyperLis Documentation

Website tài liệu hướng dẫn kỹ thuật chính thức cho giải pháp tối ưu hóa Windows **HyperLis**, được xây dựng trên nền tảng **Astro** và **Starlight** theo tiêu chuẩn giao diện hiện đại phong cách Tailwind CSS Documentation.

---

## 🛠️ Công Nghệ Sử Dụng

* **Framework**: [Astro 5](https://astro.build/) & [@astrojs/starlight](https://starlight.astro.build/)
* **Typography**: Inter (Google Fonts via `@fontsource/inter`)
* **Search Engine**: Pagefind (Tìm kiếm tĩnh tức thì)
* **Styling**: Vanilla CSS Design System (Custom Slate/Zinc neutral palette, Hyper Blue accents)
* **CI/CD**: GitHub Actions tự động build & deploy lên GitHub Pages

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
HyperLis_Documentation/
├── .github/
│   ├── workflows/deploy.yml   # CI/CD tự động deploy lên GitHub Pages
│   └── CONTRIBUTING.md        # Hướng dẫn đóng góp nội dung
├── public/
│   ├── favicon.png            # Icon Tab trình duyệt
│   ├── favicon.svg            # Vector Favicon
│   └── images/hyperlis/       # Thư mục chứa hình ảnh minh họa theo phân hệ
├── src/
│   ├── assets/                # Logo và tài nguyên nội bộ
│   ├── components/            # Custom components (Screenshot, BeforeAfter, ChangelogFeed)
│   ├── content/
│   │   ├── docs/              # 51+ bài viết tài liệu (.mdx) theo 8 phân hệ
│   │   └── i18n/              # File cấu hình ngôn ngữ Tiếng Việt chuẩn hóa
│   ├── data/
│   │   └── changelog.json     # Dữ liệu nhật ký phiên bản chính thức
│   ├── styles/
│   │   └── custom.css         # Hệ thống giao diện Tailwind CSS Docs inspired
│   └── templates/
│       └── bai-viet-mau.mdx   # Mẫu chuẩn 8 phần để viết bài mới
├── astro.config.mjs           # Cấu hình Starlight, Sidebar, Theme, Social Links
└── package.json
```

---

## 🚀 Hướng Dẫn Phát Triển Cục Bộ

```bash
# 1. Cài đặt dependencies
npm install

# 2. Khởi động Development Server
npm run dev
# Truy cập: http://localhost:4321/

# 3. Biên dịch và kiểm tra đóng gói tĩnh
npm run build

# 4. Xem trước bản build tĩnh
npm run preview
```

---

## 📝 Đóng Góp & Cập Nhật Nội Dung Qua GitHub

Xem chi tiết tại [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md):
* **Cập nhật bài viết**: Nhấn nút *"Chỉnh sửa trang này"* ở chân trang bất kỳ.
* **Thêm bài viết mới**: Copy mẫu từ `src/templates/bai-viet-mau.mdx` vào `src/content/docs/`.
* **Thêm ảnh minh họa**: Tải ảnh vào thư mục phân hệ tương ứng trong `public/images/hyperlis/`.
* **Cập nhật phiên bản mới**: Thêm mục mới vào `src/data/changelog.json`.

---

## 👨‍💻 Nhóm Phát Triển & Liên Hệ

* **Tác giả**: **Lê Minh Đức** (HCMUTE) & **Tuấn Hải** (HUTECH)
* **Facebook**: [Zịt Tech Lab](https://www.facebook.com/ZitTechLab/)
* **GitHub**: [ZitTechLab/HyperLis](https://github.com/ZitTechLab/HyperLis)
