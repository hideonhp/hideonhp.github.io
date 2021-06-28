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

It doesn't require much. Basically you write your "normal" Python function, and then add a decorator to the function definition (If you aren't so familiar with decorators read [this](https://www.thecodeship.com/patterns/guide-to-python-function-decorators/) or [that](https://realpython.com/blog/python/primer-on-python-decorators/) for an introduction). There exist different kind of decorators you can use, but the `@jit` might be the one of choice for the beginning. The other decorators can be used to e.g. create numpy universal functions `@vectorize` or write code that will be executed on a CUDA GPU `@cuda`. I won't cover these decorators in this article, but maybe in another. For now, let's just have a look on the basic steps.
The code example they provide is a summation function of a 2d-array (you probably would never calculate this way) but here is the code:

```python
from numba import jit
from numpy import arange

# jit decorator tells Numba to compile this function.
# The argument types will be inferred by Numba when function is called.
@jit
def sum2d(arr):
    M, N = arr.shape
    result = 0.0
    for i in range(M):
        for j in range(N):
            result += arr[i,j]
    return result

a = arange(9).reshape(3,3)
print(sum2d(a))
```
As you can see, all that is done is, that a Numba decorator was added to the function definition, and voilá this function will run pretty fast.
But here comes the caveat of the whole joy: You can only use Numpy and standard libraries inside the functions you want to speed up with Numba and not even all of their functionality. The good point: They have a pretty decent [documentation](http://numba.pydata.org/numba-doc/0.35.0/index.html), where everything that is supported is listed. See [here](http://numba.pydata.org/numba-doc/0.35.0/reference/pysupported.html) for the supported Python features and [here](http://numba.pydata.org/numba-doc/0.35.0/reference/numpysupported.html) for the supported Numpy features (for the current version 0.35). But let me tell you, that's enough! Remember, Numba isn't meant to speed up your database queries or any image processing functionality of a third party library. Their aim is to speed up array-oriented computations and this can be perfectly done using their supported functions.

## Example and Speed comparison

I'm not the biggest fan of this kind of examples like above, the typical Python user would never implement like this, but instead call `numpy.sum`. Instead I'll give you another example, where you can't simply fall back to a highly optimized library like Numpy. To better understand this example, maybe first a little background story (If you aren't interested in the context of the code you'll see in the example, you can directly [skip](#code) this and go directly to the code).

From what I've studied, I would consider myself a Hydrologist and one thing we do a lot is to simulate rainfall-runoff processes. Simpler said: We have time series of e.g. rain and air temperature and try to model the how much discharge you can expect in a river to any given time step of that series. It might be a bit more complicated like this, but let me tell you: not much! So the models we typically use iterate over the input arrays and for each time step, we update some model internal states (e.g. storages that simulate the soil moisture, snow pack or the interception of water in e.g. the trees). At the end of each time step, the discharge is calculated, which is not only depended on the rain, that has fallen at the same time step, but also at the internal model states (or storages), which in their case are depended on the state and input of previous time steps.
Well you maybe see the problem: We have to calculate the whole process time step by time step and Python is natively really slow for this!
This is why most of the models are implemented in Fortran or C/C++, which only a few of us understand and the most just apply them. Python at the same time is used by more people, is far more understandable and easier to start with, but as said before: slow for this kind of array-oriented calculations.
But what if Numba allows us to do the same thing in Python, without much of a performance loss? I think at least for model understanding and development, this might come handy (Therefore I created recently a project called [RRMPG - Rainfall-Runoff-Modelling-Playground](http://rrmpg.readthedocs.io/en/latest/index.html)).

Okay now let's check what we got. We'll use one of the simplest models, the ABC-Model which was developed by M. B. Fiering in 1967 for educational purpose, and compare the speed of the of native Python code against Numba optimized code and a Fortran implementation. Please not that this model is not what we use in reality (as the name suggests) but I thought it might be a better Idea to give an example, which you have to implement from scratch and can't fall back to e.g. Numpy.

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
