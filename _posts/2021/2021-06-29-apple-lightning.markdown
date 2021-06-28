---
layout: post
title: Giải thích cổng sạc Apple Lightning
date: '2021-06-29 5:00'
image: /images/apple_lightning/lightning.jpg
excerpt: >-
  Giới thiệu về lịch sử ra đời của cổng sạc Lightning. Đồng thời chỉ cách nhận biết cáp sạc thật và giả, các loại cáp đời mới và cũ bằng phần mềm 3utools trên máy tính, hoặc là trực tiếp trên điện thoại với các thiết bị đã jailbreak.
comments: true
---

Lightning là một dạng cổng kết nối nguồn độc quyền được tạo ra bởi các kĩ sư làm việc tại [Apple Inc](https://www.hideonhp.github.io/playlist?list=PLYx7XA2nY5GfdAFycPLBdUDOUtdQIVoMf). Được tạo ra vào ngày 12 tháng 9 năm 2012, nhưng mãi đến tận ngày 25 tháng 11 năm 2012, Apple mới mua lại tên thương hiệu ["Lightning"](#) tại châu Âu từ tay [Harley-Davidson](#), và chính thức thương mại hóa sản phẩm mang tên Lightning.


## Apple Lightning có công nghệ gì?

Lightning là một cổng kết nối gồm có 8 chân để truyền tín hiệu số [Digital](#). Cổng Lightning có thể được cắm theo cả hai chiều và được tích hợp một số vi xử lý giúp cho việc `truyền tải dữ liệu` và `chống` các nhà sản xuất thứ ba tạo ra các phụ kiện kém chất lượng. Điều này đã tạo nên sự khác biệt đối với cổng [Apple 30-pin](#) cũ, vốn chỉ được thiết kế để cắm 1 chiều và hầu như không có bất cứ cơ chế bảo mật nào.

<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/head.jpg">
  <div class="figcaption"><br>Bên trái là cổng 30-pin cũ, còn bên phải là cổng lightning mới.
  </div>
</div>

Ngay cả khi bị rút gọn cổng kết nối, cổng lightning vẫn có thể kết nối đến hầu hết tất cả các thiết bị ngọai vi khác như những gì mà cổng 30-pin có thể kết nối được nhờ có [vi xử phụ](#) được tích hợp trên bo mạch chủ (mainboard).

## Các thiết bị nào chính thức đang sử dụng cổng Apple Lightning?

Các thiết bị do Apple sản xuất được sử dụng cổng kết nối Lightning tính đến tháng 6 năm 2021 gồm:

``` bash
- Đối với dòng sản phẩm Iphone:
IPhone 5, 5C, 5S.
Iphone 6/6 Plus, 6S/6S Plus.
Iphone SE, 7/7 Plus, 8/8 Plus.
Iphone X, XS/XS Max, XR, 11/11 Pro/11 Pro Max.
Iphone 12/12 Pro/ 12 Pro Max, SE 2020.
- Đối với dòng sản phẩm Ipad:
IPad (thế hệ thứ 4, 5, 6, 7, 8).
Ipad Mini (thế hệ thứ 1, 2, 3, 4, 5).
Ipad Air ( thế hệ thứ 1, 2, 3, 4).
Ipad Pro tất cả các dòng đời mới (Trừ bản thứ 3 trở xuống).
- Đối với dòng sản phẩm Ipod:
Ipod Nano 7.
Ipod Touch (thế hệ thứ 5, 6, 7)
- Đối với dòng phụ kiện:
Apple Pencil (thế hệ 1).
Apple Watch Dock.
Magic Keyboard.
Magic Mouse 2, Magic Trackpad 2.
Siri Remote cho Apple TV (thế hệ thứ 4 & thứ 5).
Hộp sạc AirPods.
EarPods với cổng kết nối Lightning.
Tai nghe BeatsX.
Loa Beats Pill+.
iPhone Lightning Dock.
- Các bộ chuyển đổi:
Bộ chuyển Lightning sang 30-pin, Micro USB.
Bộ chuyển Lightning sang USB Camera, USB 3 Camera.
Bộ chuyển Lightning sang VGA, Digital AV, jack tai nghe 3.5 mm.
```

và một số thiết bị sạc dự phòng của hãng thứ 3 đạt tiêu chuẩn [MFI](#).

## Tại sao không nên dùng cáp Lightning giả?

Đã có rất nhiều bài báo nói về vấn đề này. Bạn đọc có thể tìm hiểu thêm tại. [Với cáp Lightning giả này, hacker có thể chiếm quyền máy tính của bạn chỉ trong vài phút ](https://genk.vn/voi-cap-lightning-gia-nay-hacker-co-the-chiem-quyen-may-tinh-cua-ban-chi-trong-vai-phut-20190811164900984.chn) hoặc là [Tại sao cáp Lightning dỏm có thể hủy hoại iPhone?](https://vnreview.vn/tin-tuc-xa-hoi-so/-/view_content/content/2752378/tai-sao-cap-lightning-dom-co-the-huy-hoai-iphone).

## Có những  loại cáp hiện có ở trên thị trường?

Trên thị trường có rất nhiều loại cáp lightning khác nhau, mặc dù nhìn vẻ bề ngoài thì không thể nhận thấy sự khác biệt, nhưng ở bên trong lại sử dụng những loại chip khác nhau.

``` bash
Có 2 loại cáp `chính` là “sạc nhanh” và “sạc thường”, và 1 loại `phụ` là “phụ kiện”:
- Sạc nhanh: C52, C91, C94.
- Sạc thường: C48, E75.
- Phụ kiện: C100.
```

Tính đến thời điểm hiện tại, cáp sạc thường gần không thể nhận biết được thật hay giả bằng mắt và cả bằng phần mềm, do cơ chế bảo mật của cáp sạc thường đã bị bẻ khóa bởi `“pháp sư trung hoa”` từ tận… 2012, thời điểm ra mắt của cáp lightning.
Chính vì sự dể bẻ khóa của cáp thường, khi ra mắt thế hệ lightning sạc nhanh (2017), Apple đã cung cáp cơ chế mã hóa với thuật toán `SHA265`, điều này khiến cho việc bẻ khóa cáp sạc nhanh khó như bẻ khóa tiền mã hóa [Bitcoin](#).
Cho nên, trong bài viết này, chúng ra chỉ tập trung vào mục `“kiểm tra cáp sạc nhanh lightning là thật hay giả”`.
Với cáp thật thì chúng ta lại có 4 loại chính:
- Mfi: viết tắt của cụm từ `“Made for iPhone/iPad/iPod”`, đây là `chứng chỉ` được Apple đưa ra nhằm siết chặt việc quản lý phụ kiện dành cho `iPhone/iPad/iPod` được sản xuất bởi các `hãng thứ 3`. Chứng chỉ MFi là một trong những đảm bảo giúp người dùng tránh những rủi ro khi mua những phụ kiện có sử dụng điện cho thiết bị của Apple.
- Original: Gồm những phụ kiện được Apple chính thức `ủy quyền` cho các nhà máy [OEM](#) như Foxconn để sản xuất các phụ kiện chất lượng cao.
- Hacked: Gồm những phụ kiện không được sự cho phép lẫn công nhận của Apple, nhưng vẫn có vi xử lý giả để có thể sử dụng cho việc sạc hoặc truyền dữ liệu. Loại này hay còn được gọi là `Fake loại 1`.
- Pha-Ke (fake): Bao gồm các loại cáp kém chất lượng, có thể sạc và truyền dữ liệu nhưng `hoàn toàn` có thể gây ra sự `mất mát dữ liệu` hoặc `cháy nổ` do thiếu mất sự có mặt của những `bộ vi xử lý quan trọng`. Loại này nên tránh xa trước khi màn hình của bạn bị [liệt cảm ứng](#) hoặc [gây ra các vấn đề về pin](#). Tệ nhất là hỏng luôn cả điện thoại như anh bạn `Hiếu` mà tôi quen.

## Cách nhận biết loại cáp bằng phần mềm 3utools

Đầu tiên là phải tải phần mềm từ trang chủ của [3utools](http://www.3u.com/).
<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/3u.jpg">
  <div class="figcaption"><br>Phần mềm siêu hoàn hảo dành cho dòng sản phẩm của Apple.
  </div>
</div>
Sau khi đã kết nối thành công bằng sợi cáp mà bạn định `kiểm tra`. Hãy vào phần Toolbox.
<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/3u2.PNG">
  <div class="figcaption"><br>Sau đó mở mục Genuine.
  </div>
</div>
Sau khi đã mở thành công `Genuine Part`, ở đây chúng ta sẽ chọn `Test Accessories` để kiểm tra cáp.
<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/3u3.PNG">
  <div class="figcaption"><br>Sau đó chọn Test Accessories.
  </div>
</div>
Ở đây, 3u cho kết quả là phụ kiện được `sản xuất bởi hãng thứ 3`, tức là loại cáp `MFI`.
<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/3u4.PNG">
  <div class="figcaption"><br>Kết quả của cáp này là MFI.
  </div>
</div>
Bởi vì không có tiền để mua cáp xịn về thử và cũng không có ngu mà mua cáp kém chất lượng về, nên mình sẽ lấy hình ảnh bên 3u cung cấp để cho các bạn có cái nhìn rõ hơn.
<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/real.png">
  <div class="figcaption"><br>Đây là cáp chính hãng.
  </div>
</div>
<div class="fig figcenter fighighlight">
  <img src="/images/apple_lightning/hack.png">
  <div class="figcaption"><br>Đây là cáp hacked.
  </div>
</div>
Bên trên là cách kiểm tra cáp sạc lightning, nếu bạn muốn kiểm tra các phụ kiện như cổng chuyển hoặc tai nghe, các bạn có thể xem hướng dẫn tiếng anh [tại đây](https://www.3u.com/tutorial/articles/10368/how-to-use-genuine-accessories-detection).Hoặc là đợi mình làm bài hướng dẫn (nếu có điều kiện).