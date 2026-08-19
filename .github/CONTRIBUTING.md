# Hướng Dẫn Cập Nhật & Đóng Góp Tài Liệu HyperLis Qua GitHub

Chào mừng bạn đến với kho tài liệu chính thức của **HyperLis Docs**! Tài liệu được xây dựng trên nền tảng Astro + Starlight, tối ưu để chỉnh sửa nhanh chóng ngay trên giao diện web của GitHub mà không cần cài đặt môi trường phức tạp.

---

## 1. Cách Thêm Hoặc Chỉnh Sửa Bài Viết (Markdown / MDX)

### Chỉnh sửa trực tiếp bài viết đang có:
1. Truy cập bài viết trên website documentation.
2. Cuộn xuống cuối trang và nhấn nút **"Chỉnh sửa trang này" (Edit this page)**.
3. GitHub sẽ mở trực tiếp trình chỉnh sửa file `.mdx`.
4. Thực hiện chỉnh sửa nội dung và nhấn **Commit changes...**.

### Thêm một bài viết mới:
1. Vào thư mục `src/content/docs/` trên GitHub.
2. Chọn thư mục phân hệ phù hợp (ví dụ: `toi-uu-he-thong/windows/` hoặc `extend-features/`).
3. Nhấn **Add file > Create new file**.
4. Đặt tên file kết thúc bằng đuôi `.mdx` (ví dụ: `tinh-nang-moi.mdx`).
5. Copy mẫu chuẩn từ [`src/templates/bai-viet-mau.mdx`](../src/templates/bai-viet-mau.mdx) và điền nội dung.
6. Mở file [`astro.config.mjs`](../astro.config.mjs), thêm mục vào danh sách `sidebar` nếu cần xuất hiện trên menu.

---

## 2. Cách Cập Nhật Hình Ảnh Minh Họa

1. Tải ảnh chụp màn hình lên thư mục tương ứng trong `public/images/hyperlis/`:
   * `public/images/hyperlis/dashboard/`
   * `public/images/hyperlis/general/`
   * `public/images/hyperlis/windows/`
   * `public/images/hyperlis/uwp-apps/`
   * `public/images/hyperlis/cleaning/`
   * `public/images/hyperlis/network/`
   * `public/images/hyperlis/usb-boot/`
   * `public/images/hyperlis/hardware/`
   * `public/images/hyperlis/extend/`
   * `public/images/hyperlis/printer-errors/`
   * `public/images/hyperlis/fix-windows/`
2. Nhúng ảnh vào bài viết qua component `<Screenshot />`:
   ```mdx
   <Screenshot 
     src="/images/hyperlis/windows/gaming-mode.png" 
     alt="Chế độ chơi game trong HyperLis" 
     caption="Hình 2.1: Giao diện bật Chế độ chơi game" 
     title="Gaming Mode"
   />
   ```
3. **Cơ chế tự động an toàn**: Nếu ảnh chưa được tải lên hoặc đường dẫn bị sai, component sẽ tự động chuyển sang hình placeholder mặc định, không làm gãy layout hay lỗi website.

---

## 3. Cách Cập Nhật Lịch Sử Phát Hành (Changelog)

Khi HyperLis có phiên bản mới, bạn chỉ cần mở file [`src/data/changelog.json`](../src/data/changelog.json) và thêm một mục mới vào đầu file theo mẫu:

```json
"v1.0.7 Chính thức": {
    "title": "HYPERLIS - Nhật ký thay đổi v1.0.7 Chính thức",
    "summary_title": "TÓM TẮT PHÁT HÀNH",
    "content": [
        "Nội dung cập nhật thứ nhất.",
        "Nội dung cập nhật thứ hai."
    ],
    "version_label": "THÔNG TIN PHIÊN BẢN",
    "version_value": "v1.0.7 Chính thức"
}
```

Hệ thống sẽ tự động cập nhật và phân phối nội dung mới tới toàn bộ các trang tài liệu liên quan.

---

## 4. Tự Động Triển Khai (CI/CD GitHub Actions)

Mỗi khi bạn commit hoặc merge Pull Request vào nhánh `main`, GitHub Actions sẽ tự động biên dịch và triển khai phiên bản tài liệu mới nhất lên GitHub Pages trong vòng 1-2 phút.
