# Thanh tác vụ

## Căn trái thanh tác vụ
Di chuyển các biểu tượng taskbar về phía bên trái (kiểu Windows 10).
* Thay đổi căn chỉnh nút Start và biểu tượng về bên trái
* Được ưa thích bởi người dùng quen với Windows 10
* Áp dụng ngay mà không cần khởi động lại

### Giá trị Registry bị ảnh hưởng
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
  * `TaskbarAl` = `0` (REG_DWORD)

## Tắt Widget
Tắt bảng Widgets trên taskbar Windows 11.
* Xóa widget Thời tiết/Tin tức khỏi taskbar
* Dừng dịch vụ Widgets chạy nền
* Giải phóng không gian taskbar

### Giá trị Registry bị ảnh hưởng
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
  * `TaskbarDa` = `0` (REG_DWORD)

## Thu nhỏ biểu tượng
Bật các biểu tượng taskbar nhỏ hơn để taskbar gọn hơn.
* Giảm chiều cao của taskbar
* Cung cấp thêm không gian màn hình
* Cài đặt phổ biến cho người dùng màn hình nhỏ

### Giá trị Registry bị ảnh hưởng
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
  * `TaskbarSmallIcons` = `1` (REG_DWORD)

## Tắt Trung tâm thông báo
Tắt Notification Center và Toast Notifications của Windows.
* Ngăn các thông báo (toast) hiện lên màn hình
* Hữu ích để tránh bị làm phiền khi chơi game hoặc thuyết trình

### Lưu ý
Trên Windows 11, việc này có thể làm mất flyout Lịch khi nhấn vào đồng hồ.

### Giá trị Registry bị ảnh hưởng
* `HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Explorer`
  * `DisableNotificationCenter` = `1` (REG_DWORD)
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\PushNotifications`
  * `ToastEnabled` = `0` (REG_DWORD)

## Tắt Chat
Tắt tích hợp Microsoft Teams Chat trên taskbar.
* Xóa biểu tượng Chat khỏi taskbar
* Dừng tiến trình Teams nền khỏi tự khởi động
* Hữu ích nếu bạn không dùng Microsoft Teams

### Giá trị Registry bị ảnh hưởng
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
  * `TaskbarMn` = `0` (REG_DWORD)
* `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer`
  * `HideSCAMeetNow` = `1` (REG_DWORD)
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer`
  * `HideSCAMeetNow` = `1` (REG_DWORD)

## Tắt Stickers
Tắt tính năng Desktop Stickers (Nhãn dán màn hình).
* Xóa khả năng đặt nhãn dán trên màn hình
* Dừng các tiến trình nền liên quan
* Làm gọn trải nghiệm màn hình

### Giá trị Registry bị ảnh hưởng
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PolicyManager\current\device\Stickers`
  * `EnableStickers` = `0` (REG_DWORD)

## Sửa lỗi ghim vào Taskbar
Sửa các sự cố ghim ứng dụng vào taskbar.
* Giải quyết lỗi 'Ghim vào thanh tác vụ' không hoạt động
* Cập nhật các mục registry cho việc ghim taskbar
* Hữu ích sau các bản cập nhật Windows làm hỏng tính năng này

### Giá trị Registry bị ảnh hưởng
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System`
  * `EnableLUA` = `1` (REG_DWORD)
  * `ConsentPromptBehaviorAdmin` = `0` (REG_DWORD)
  * `PromptOnSecureDesktop` = `0` (REG_DWORD)
