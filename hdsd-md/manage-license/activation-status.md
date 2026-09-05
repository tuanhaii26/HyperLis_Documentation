# Trạng thái kích hoạt hệ thống

Khu vực hiển thị tổng quan tình trạng giấy phép sử dụng của Windows trên máy tính hiện tại.

## Thẻ trạng thái & Phương thức bản quyền
* Thẻ lớn phía trên cung cấp trạng thái trực quan với biểu tượng màu sắc rõ ràng:
  * **Đã kích hoạt:** Hệ điều hành đang chạy với giấy phép hợp lệ.
  * **Chưa kích hoạt:** Hệ thống chưa được cấp phép hoặc khóa kích hoạt đã hết hạn
  * **Cảnh báo bản quyền / Không khớp bản quyền gốc:** Phát hiện máy tính đang sử dụng giấy phép kích hoạt ảo hoặc phiên bản Windows cài đặt không trùng khớp với giấy phép nhà sản xuất gốc đi kèm máy.
* Bốn ô thông số nhanh:
  * **Trạng thái:** Tình trạng cấp phép hiện tại (Đã kích hoạt / Chưa kích hoạt).
  * **Phương thức:** Kênh kích hoạt (Bản quyền số, Giấy phép nhà sản xuất OEM, Khóa kích hoạt theo lô KMS/KMS38).
  * **Ngày kích hoạt:** Thời gian thiết bị ghi nhận bản quyền hoặc ngày cài đặt hệ điều hành.
  * **Tình trạng:** Kết quả xác thực tính hợp lệ từ máy chủ cấp phép Microsoft (Hợp lệ / Không hợp lệ).

## Nhận diện cảnh báo không khớp bản quyền
Hệ thống tự động đọc bảng thông số phần cứng trong BIOS/UEFI để phát hiện các tình huống xung đột:
* **Không khớp phiên bản:** Máy tính có khóa gốc của nhà sản xuất nhưng hệ thống đang cài đặt phiên bản khác kích hoạt qua công cụ bên thứ ba (Ví dụ máy tính có khóa gốc của nhà sản xuất dành cho bản Home nhưng hệ thống đang cài đặt bản Pro.)
* **Kích hoạt KMS38:** Giấy phép kích hoạt qua phương thức giả lập máy chủ nội bộ với hạn sử dụng tới năm 2038.
* **Kích hoạt qua máy chủ KMS ngoài:** Hệ thống liên kết tới địa chỉ máy chủ kích hoạt định kỳ của bên thứ ba.

## Kiểm tra lại trạng thái
* Nút: **Kiểm tra lại trạng thái**
* Công dụng: Quét lại toàn bộ các dịch vụ bảo vệ bản quyền phần mềm và giao diện cấp phép của Windows để làm mới thông tin bản quyền.
