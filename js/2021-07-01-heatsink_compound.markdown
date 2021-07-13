---
layout: post
title: Giải thích kem tản nhiệt Thermal Paste-Pad
date: '2021-07-01 8:00'
image: /images/heatsink_compound/coumpound.png
excerpt: >-
  Giới thiệu về kem tản nhiệt dạng lỏng và cứng, hay còn gọi là Thermal Paste (Coumpound Heatsink). Sau đó giải thích về sự quan trọng và các mức độ cần thiết của việc thay kem thường xuyên. Đồng thời chỉ ra sự khác biệt giữa các loại kem. 
comments: true
---
 
Kem Tản Nhiệt hay còn gọi là Thermal Paste là một yếu tố không thể thiếu và cực kỳ quan trọng với bộ phận tản nhiệt của các bộ [vi xử lý bán dẫn](#).Tại sao nó lại cần thiết như vậy? Tại sao để lắp bộ phận tản nhiệt lên Cpu, Gpu,... người ta luôn cần tra một lớp keo tản nhiệt lên bề mặt của chúng?. Khi nào thì dùng kem dạng lỏng hoặc dạng rắn ? 

## Tại sao lại cần đến Kem Tản Nhiệt? Nó hoạt động ra sao?

Trên lý thuyết, khi nhiệt sinh ra từ vi xử lý sẽ được truyền hết toàn bộ qua bộ phận tản nhiệt. Nhờ bề mặt tiếp xúc của chúng, rồi tỏa ra môi trường xung quanh. Nhờ đó, nhiệt độ của vi xử lý sẽ được giảm đi và trở nên ổn định. Tuy vậy việc này chỉ có thể xảy ra khi bề mặt tiếp xúc giữa vi xử lý và phiến tản nhiệt hoàn toàn nhẵn 100% và giả thuyết đó gần như không thể xảy ra. Giữa 2 bề mặt tiếp xúc này sẽ luôn tồn tại những khe hở như trong hình minh họa ở dưới đây.

<div class="fig figcenter fighighlight">
  <img src="/images/heatsink_compound/3-lop.jpg">
  <div class="figcaption"><br>Hình ảnh miêu tả khoảng trống của bề mặt tiếp xúc.
  </div>
</div>

Phần màu trắng thể hiện các khe hở tồn tại giữa 2 bề mặt tiếp xúc. Những khe hở này là nơi không khí xuất hiện và không khí thì độ dẫn nhiệt thấp, không khí làm giảm hiệu năng của bộ phận tản nhiệt đi rất nhiều. Do đó kem tản nhiệt sinh ra để giải quyết vấn đề này, kem sẽ giúp lấp đầy chỗ trống và giúp liên kết, dẫn nhiệt, truyền nhiệt từ các nguồn nhiệt sang bộ phận tản nhiệt tốt hơn. Những loại kem này tuy không thể dẫn nhiệt bằng kim loại nhưng chúng vẫn truyền nhiệt tốt hơn không khí!
<br>

Nếu không sử dụng keo tản nhiệt, máy tính của bạn rất dễ gặp phải vấn đề `quá nhiệt` gây chậm lag, đơ thậm chí là sập máy ngay trong lúc làm việc. Vấn đề này xảy ra quá nhiều không chỉ giảm hiệu năng mà còn làm giảm tuổi thọ của linh kiện và những vấn đề nghiệm trọng hơn.

## Vậy Keo tản nhiệt là gì? Có bao nhiêu loại Keo Tản Nhiệt?

Kem tản nhiệt là một dạng hợp chất được cấu thành từ các chất có khả năng dẫn nhiệt cao. Có 2 loại kem tản nhiệt chính:
<div class="fig figcenter fighighlight">
  <img src="/images/heatsink_compound/pas.jpg">
  <div class="figcaption"><br>Kem tản nhiệt màu xám, nằm trên miếng Cpu.
  </div>
</div>

`Dạng lỏng`: thường được sử dụng trong trường hợp truyền lượng lớn nhiệt độ (Gpu, Cpu), dạng lỏng có 3 thành phần phổ biến bao gồm:

- Kim loại lỏng: Đây là loại keo tản nhiệt có hiệu năng tốt nhất bởi khả năng dẫn nhiệt rất cao của kim loại. Tuy nhiên kim loại ngoài dẫn nhiệt ra, chúng còn dẫn cả điện rất tốt nên khi sử dụng nếu để keo dính vào phần mạch có thể gây chập rất nguy hiểm cho linh kiện.
-> Không nên sử dụng cho laptop hoặc pc (máy tính cá nhân) có bo mạch nhỏ (mini-atx, micro-atx).

- Gốm lỏng: Loại keo tản nhiệt này có hiệu quả kém hơn một chút so với keo kim loại, bù lại loại keo này có ưu điểm là không dẫn điện nên rất an toàn.
-> Nên sử dụng cho laptop và pc.

- Silicon lỏng: loại keo thường được bán kèm cùng với tản nhiệt mặc định của CPU và trong các bộ tản nhiệt chất lượng thấp. Hiệu quả của loại keo này kém hơn nhiều so với 2 loại trên.

<div class="fig figcenter fighighlight">
  <img src="/images/heatsink_compound/pad.jpg">
  <div class="figcaption"><br>Miếng tản nhiệt dạng rắn màu xanh nước biển trên các Phase điện và Gpu Ram.
  </div>
</div>

`Dạng rắn`: thường được sử dụng cho các thành phần không cần tản nhiệt nhanh, đa số là dùng cho (Chipset, Cpu Gpu Phase, Ram, Ssd, Hdd,...). Dạng này chỉ có 1 thành phần duy nhất là Silicon.

Erorr T-03: "Cannot fetch data" -b522--stack