// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hyperlis.docs.local',
	integrations: [
		starlight({
			title: 'HyperLis Docs',
			description: 'Tài liệu hướng dẫn kỹ thuật và tối ưu hóa hệ thống với HyperLis',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Tiếng Việt',
					lang: 'vi',
				},
			},
			logo: {
				src: './src/assets/logo.png',
			},
			favicon: '/favicon.png',
			social: {
				github: 'https://github.com/ZitTechLab/HyperLis',
				facebook: 'https://www.facebook.com/ZitTechLab/',
			},
			lastUpdated: true,
			components: {
				ThemeSelect: './src/components/ThemeToggle.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/favicon.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
			],
			customCss: [
				'@fontsource/inter/400.css',
				'@fontsource/inter/500.css',
				'@fontsource/inter/600.css',
				'@fontsource/inter/700.css',
				'./src/styles/custom.css',
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			sidebar: [
				{
					label: '1. Tổng quan',
					items: [
						{ label: 'Tổng quan về HyperLis', slug: 'overview/overview' },
						{ label: 'Cài đặt & Xác thực', slug: 'overview/installation-activation' },
						{ label: 'Giao diện Dashboard', slug: 'overview/dashboard' },
						{ label: 'Chính sách an toàn', slug: 'overview/safety-policy' },
						{ label: 'Câu hỏi thường gặp (FAQ)', slug: 'overview/faq' },
						{ label: 'Về HyperLis & Tác giả', slug: 'overview/about-hyperlis' },
						{ label: 'Kích hoạt & Ủng hộ (Donate)', slug: 'overview/activation-donation' },
						{ label: 'Cài đặt ngôn ngữ', slug: 'overview/language' },
						{ label: 'Nhật ký thay đổi (Changelog)', slug: 'overview/changelog' },
					],
				},
				{
					label: '2. Chung',
					items: [
						{ label: 'Tối ưu hóa hiệu suất', slug: 'general/optimize-performance' },
						{ label: 'Tắt báo cáo lỗi (Error Reporting)', slug: 'general/error-reporting' },
						{ label: 'Tắt SmartScreen', slug: 'general/smartscreen' },
						{ label: 'Tắt tối ưu hóa toàn màn hình', slug: 'general/fullscreen-optimizations' },
						{ label: 'Tắt máy in & Fax', slug: 'general/print-fax-service' },
						{ label: 'Tắt phím trợ năng (Sticky Keys)', slug: 'general/sticky-keys' },
						{ label: 'Tối ưu ổ đĩa & NTFS', slug: 'general/disk-drives' },
						{ label: 'Quyền riêng tư & Tác vụ theo dõi', slug: 'general/privacy-telemetry' },
						{ label: 'Tắt theo dõi từ ứng dụng (App Telemetry)', slug: 'general/app-telemetry' },
					],
				},
				{
					label: '3. Windows',
					items: [
						{ label: 'Hệ thống & Quyền riêng tư', slug: 'windows/system-privacy' },
						{ label: 'Chơi game & Chế độ nguồn', slug: 'windows/gaming-optimizations' },
						{ label: 'Cập nhật Windows (Windows Update)', slug: 'windows/windows-update' },
						{ label: 'Thanh tác vụ & Tinh chỉnh mở rộng', slug: 'windows/taskbar-extras' },
						{ label: 'Quản lý AI trên trình duyệt', slug: 'windows/browser-ai' },
					],
				},
				{
					label: '4. Ứng dụng UWP',
					items: [
						{ label: 'Gỡ bỏ ứng dụng - Safe Preset', slug: 'uwp-apps/safe-preset' },
						{ label: 'Tùy chỉnh & Gỡ bỏ nâng cao', slug: 'uwp-apps/aggressive-customize' },
						{ label: 'Quản lý gói UWP Packages', slug: 'uwp-apps/packages' },
						{ label: 'Quản lý Windows Capabilities', slug: 'uwp-apps/capabilities' },
						{ label: 'Tính năng tùy chọn Optional Features', slug: 'uwp-apps/optional-features' },
						{ label: 'Nhật ký thực thi PowerShell / Log', slug: 'uwp-apps/powershell-terminal-log' },
					],
				},
				{
					label: '5. Khởi chạy',
					items: [
						{ label: 'Quản lý ứng dụng khởi chạy', slug: 'startup-apps/startup-management' },
						{ label: 'Sao lưu cấu hình (Backup)', slug: 'startup-apps/backup' },
						{ label: 'Khôi phục cấu hình (Restore)', slug: 'startup-apps/restore' },
					],
				},
				{
					label: '6. Tải xuống',
					items: [
						{ label: 'Tổng quan phân hệ Tải xuống', slug: 'downloads/downloads-overview' },
						{ label: 'Cài đặt Runtimes & Thư viện bổ trợ', slug: 'downloads/runtimes' },
						{ label: 'Phần mềm thiết yếu & Tiện ích', slug: 'downloads/essential-apps' },
					],
				},
				{
					label: '7. Dọn dẹp',
					items: [
						{ label: 'Windows & Bộ nhớ RAM', slug: 'cleanup/windows-ram' },
						{ label: 'Dọn dẹp trình duyệt', slug: 'cleanup/browser-cleaning' },
						{ label: 'Phương thức dọn dẹp', slug: 'cleanup/cleaning-methods' },
						{ label: 'Dọn rác với Disk Cleanup', slug: 'cleanup/disk-cleanup' },
						{ label: 'Tối ưu hóa ổ đĩa (TRIM / Defrag)', slug: 'cleanup/optimize-drives' },
					],
				},
				{
					label: '8. Mạng',
					items: [
						{ label: 'Thông tin card mạng (NIC)', slug: 'network/network-information' },
						{ label: 'Đổi DNS & Quản lý DNS', slug: 'network/dns-management' },
						{ label: 'Tối ưu hóa mạng', slug: 'network/network-optimization' },
						{ label: 'Kiểm tra Ping & Độ trễ', slug: 'network/ping-tool' },
					],
				},
				{
					label: '9. USB Boot',
					items: [
						{ label: 'Tạo USB Boot cài Windows', slug: 'usb-boot/usb-boot' },
					],
				},
				{
					label: '10. Phần cứng',
					items: [
						{ label: 'Thông tin phần cứng & Sức khỏe', slug: 'hardware/hardware-info' },
					],
				},
				{
					label: '11. QL Bản quyền',
					items: [
						{ label: 'Quản lý bản quyền (License Management)', slug: 'license/license-management' },
					],
				},
				{
					label: '12. Đổi phiên bản (Convert SKUs)',
					items: [
						{ label: 'Chuyển đổi phiên bản Windows (Convert SKUs)', slug: 'convert-skus/convert-skus' },
					],
				},
				{
					label: '13. Cài đặt Office',
					items: [
						{ label: 'Cài đặt Microsoft Office', slug: 'office-setup/office-setup' },
					],
				},
				{
					label: '14. Tính năng khác',
					items: [
						{ label: 'Tiện ích hệ thống mở rộng', slug: 'extend-features/system-utilities' },
					],
				},
				{
					label: '15. WSAP',
					items: [
						{ label: 'Cài đặt Windows tự động (WSAP)', slug: 'wsap/wsap' },
					],
				},
				{
					label: '16. Sửa lỗi máy in',
					items: [
						{ label: 'Sửa lỗi máy in qua mạng LAN', slug: 'printer-repair/printer-errors' },
					],
				},
				{
					label: '17. Sửa lỗi Windows',
					items: [
						{ label: 'Sửa lỗi Windows & Quét SFC/DISM', slug: 'windows-repair/fix-windows-errors' },
					],
				},
			],
		}),
	],
});
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tuanhaii26.github.io', // Thay bằng domain github của bạn
  base: '/HyperLis_Documentation',          // Tên repository trên GitHub (ví dụ: '/my-astro-web')
});
