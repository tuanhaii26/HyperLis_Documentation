// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuanhaii26.github.io',
	base: '/HyperLis_Documentation',
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
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: '/HyperLis_Documentation/favicon.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/HyperLis_Documentation/favicon-32x32.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/HyperLis_Documentation/favicon-16x16.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/HyperLis_Documentation/apple-touch-icon.png' } },
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
					label: 'Bắt đầu',
					items: [
						{ label: 'Tổng quan về HyperLis', slug: 'getting-started/overview' },
						{ label: 'Cài đặt HyperLis', slug: 'getting-started/installation' },
						{ label: 'Lưu ý sử dụng HyperLis', slug: 'getting-started/safety-policy' },
						{ label: 'Câu hỏi thường gặp (FAQ)', slug: 'getting-started/faq' },
						{ label: 'Về HyperLis & Tác giả', slug: 'getting-started/about-hyperlis' },
						// { label: 'Kích hoạt & Ủng hộ (Donate)', slug: 'getting-started/activation-donation' },
						{ label: 'Cài đặt ngôn ngữ', slug: 'getting-started/language' },
						{ label: 'Nhật ký thay đổi (Changelog)', slug: 'getting-started/changelog' },
					],
				},
				{
					label: '1. Dashboard',
					items: [
						{ label: 'Giao diện Dashboard', slug: 'dashboard/dashboard' },
					],
				},
				{
					label: '2. Chung',
					items: [
						{ label: 'Hệ thống', slug: 'general/system' },
						{ label: 'Ứng dụng', slug: 'general/apps' },
						{ label: 'Quyền riêng tư', slug: 'general/privacy' },
						{ label: 'Ổ đĩa', slug: 'general/disk-drives' },
					],
				},
				{
					label: '3. Windows',
					items: [
						{ label: 'Hệ thống', slug: 'windows/system' },
						{ label: 'Quyền riêng tư', slug: 'windows/privacy' },
						{ label: 'Chơi game', slug: 'windows/gaming' },
						{ label: 'Chế độ nguồn', slug: 'windows/power-plan' },
						{ label: 'Cập nhật Windows (Windows Update)', slug: 'windows/windows-update' },
						{ label: 'Thanh tác vụ', slug: 'windows/taskbar' },
						{ label: 'Quản lý AI trên trình duyệt', slug: 'windows/browser-ai' },
						{ label: 'Mở rộng', slug: 'windows/extras' },
						{ label: 'Tinh chỉnh nâng cao', slug: 'windows/advanced-tweaking' },
					],
				},
				{
					label: '4. Ứng dụng UWP',
					items: [
						{ label: 'Ứng dụng UWP', slug: 'uwp-apps/uwp-apps' },
					],
				},
				{
					label: '5. Khởi chạy',
					items: [
						{ label: 'Khởi chạy', slug: 'startup-apps/startup-apps' },
					],
				},
				{
					label: '6. Tải xuống',
					items: [
						{ label: 'Tải xuống', slug: 'download/download' },
					],
				},
				{
					label: '7. Dọn dẹp',
					items: [
						{ label: 'Dọn dẹp', slug: 'cleaning/cleaning' },
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
						{ label: 'USB Boot', slug: 'usb-boot/usb-boot' },
					],
				},
				{
					label: '10. Phần cứng',
					items: [
						{ label: 'Phần cứng', slug: 'hardware-info/hardware-info' },
					],
				},
				{
					label: '11. QL Bản quyền',
					items: [
						{ label: 'Quản lý bản quyền', slug: 'manage-license/manage-license' },
					],
				},
				{
					label: '12. Đổi phiên bản',
					items: [
						{ label: 'Đổi phiên bản Windows', slug: 'convert-skus/convert-skus' },
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
						{ label: 'Tính năng khác', slug: 'extend-features/extend-features' },
					],
				},
				{
					label: '15. WSAP',
					items: [
						{ label: 'Cài đặt Windows tự động (WSAP)', slug: 'wsap/wsap' },
					],
				},
				{
					label: '16. Sửa lỗi',
					items: [
						{ label: 'Sửa lỗi máy in', slug: 'errors/printer-errors' },
						{ label: 'Sửa lỗi Windows', slug: 'errors/windows-errors' },
					],
				},
				{
					label: '17. Cài đặt',
					items: [
						{ label: 'Cài đặt', slug: 'settings/settings' },
					],
				},
			],
		}),
	],
});
