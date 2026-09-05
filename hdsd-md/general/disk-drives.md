# Ổ đĩa

## Tắt Superfetch
Vô hiệu hóa dịch vụ SysMain (Superfetch).
* Có thể giảm hoạt động đĩa trên HDD và SSD cũ
* Ngăn Windows tải trước ứng dụng vào RAM

### Lưu ý
Trên SSD NVMe hiện đại, tắt tính năng này có ít tác động.

### Giá trị Registry bị ảnh hưởng
* `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SysMain`
  * `Start` = `4` (REG_DWORD)
* `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters`
  * `EnableSuperfetch` = `0` (REG_DWORD)
  * `EnablePrefetcher` = `0` (REG_DWORD)
  * `SfTracingState` = `1` (REG_DWORD)

## Tắt dấu thời gian NTFS
Tắt cập nhật dấu thời gian tự động khi truy cập file trong NTFS.
* Cải thiện hiệu suất đĩa bằng cách giảm thao tác ghi
* Thời gian 'Truy cập lần cuối' trên file sẽ không còn được cập nhật
* Thường được khuyến nghị để tối ưu hiệu suất

### Giá trị Registry bị ảnh hưởng
* `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem`
  * `NtfsDisableLastAccessUpdate` = `1` (REG_DWORD)
