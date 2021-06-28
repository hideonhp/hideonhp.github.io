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

Tính đến thời điểm hiện tại, cáp sạc thường gần không thể nhận biết được thật hay giả bằng mắt và cả bằng phần mềm, do cơ chế bảo mật của cáp sạc thường đã bị bẻ khóa bởi “pháp sư trung hoa” từ tận… 2012, thời điểm ra mắt của cáp lightning.
Chính vì sự dể bẻ khóa của cáp thường, khi ra mắt thế hệ lightning sạc nhanh (2017), Apple đã cung cáp cơ chế mã hóa với thuật toán SHA265, điều này khiến cho việc bẻ khóa cáp sạc nhanh khó như bẻ khóa tiền mã hóa Bitcoin.
Cho nên, trong bài viết này, tôi chỉ tập trung vào mục “kiểm tra cáp sạc nhanh lightning là thật hay giả” thay vì cáp sạc thường.
-
Với cáp thật thì chúng ta lại có 3 loại chính:
- Mfi: MFi là viết tắt của cụm từ “Made for iPhone/iPad/iPod”, đây là chứng chỉ được Apple đưa ra nhằm siết chặt việc quản lý phụ kiện dành cho iPhone/iPad/iPod được sản xuất bởi các hãng thứ 3. Chứng chỉ MFi là một trong những đảm bảo giúp người dùng tránh những rủi ro khi mua những phụ kiện có sử dụng điện cho thiết bị của Apple.
- Original: Là những phụ kiện được Apple ủy quyền cho các nhà máy [OEM](#) như Foxconn để sản xuất các phụ kiện chất lượng cao.
- Hacked:  


The ABC-Models is a three parameter model (a, b, c, hence the name), that only receives rain as input and only has one storage. A fraction of the rain is immediately lost, due to evapotranspiration (parameter b), another fraction percolates through the soil to the groundwater storage (parameter a), and the last parameter c stands for the amount of groundwater, that leaves the storage into the stream. The code in Python, with the use of Numpy arrays might look like this:

<a name="code"></a>
```python
import numpy as np

# pure Python implementation of the ABC-Model
def abc_model_py(a, b, c, rain):
    # initialize array for the stream discharge of each time step
    outflow = np.zeros((rain.size), dtype=np.float64)

    # placeholder, in which we save the storage content of the previous and
    # current timestep
    state_in = 0
    state_out = 0
    for i in range(rain.size):
        # Update the storage
        state_out = (1 - c) * state_in + a * rain[i]
        # Calculate the stream discharge
        outflow[i] = (1 - a - b) * rain[i] + c * state_out
        # Overwrite the storage variable
        state_in = state_out
    return outflow
```

And how will this look like using Numba? Well, not much different (I removed the comments, since it's basically the same).

```python
@jit
def abc_model_numba(a, b, c, rain):
    outflow = np.zeros((rain.size), dtype=np.float64)
    state_in = 0
    state_out = 0
    for i in range(rain.size):
        state_out = (1 - c) * state_in + a * rain[i]
        outflow[i] = (1 - a - b) * rain[i] + c * state_out
        state_in = state_out
    return outflow
```

I run these models with random numbers as input, just to compare the computation time, and also compared the time against a Fortran implementation (see more details [here](http://rrmpg.readthedocs.io/en/latest/examples/speed_comparision.html)). Let's just have a look at the numbers:

```python
# Measure the execution time of the Python implementation
py_time = %timeit -r 5 -n 10 -o abc_model_py(0.2, 0.6, 0.1, rain)

>> 6.94 s ± 258 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)

# Measure the execution time of the Numba implementation
numba_time = %timeit -r 5 -n 10 -o abc_model_numba(0.2, 0.6, 0.1, rain)

>> 32.6 ms ± 52.7 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)

# Measure the execution time of the Fortran implementation
fortran_time = %timeit -r 5 -n 10 -o abc_model_fortran(0.2, 0.6, 0.1, rain)

>> 23.4 ms ± 934 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)

# Compare the pure Python vs Numba optimized time
py_time.best / numba_time.best

>> 205.15122150338178

# Compare the time of the fastes numba and fortran run
numba_time.best / fortran_time.best

>> 1.451113966128858
```
By adding just one decorator we are 205 times faster as the pure Python code and roughly as fast as Fortran? Well not bad, huh?

(Note that in a previous version the Numba optimized function was minimally faster than the Fortran implementation. By switching from the f2py wrapper to Cython the Fortran time was reduced, so Fortran is now a bit faster. See [this pull request](https://github.com/kratzert/RRMPG/pull/3) for further details.

I'll end my introduction here and hope some of you are now motivated to have a look into the Numba library. My idea is to write a small series of Numba articles/tutorials in the future with more technical information, while this article should have served only as a appetizer.
