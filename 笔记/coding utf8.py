1、#!/usr/bin/python
是用来说明脚本语言是 python 的

是要用 /usr/bin下面的程序（工具）python，这个解释器，来解释 python 脚本，来运行 python 脚本的。

 

2、# -*- coding: utf-8 -*-
是用来指定文件编码为 utf-8 的

详情可以参考：PEP 0263 — Defining Python Source Code Encodings

在此，详细的（主要是翻译）解释一下，为何要加这个编码声明，以及如何添加编码声明：

 

2.1 使用文件编码声明以前所遇到的问题
Python 2.1 中，想要输入 Unicode 字符，只能用基于 Latin-1 的 "unicode-escape" 的方式输入 -> 对于其他非 Latin-1 的国家和用户，想要输入 Unicode 字符，就显得很繁琐，不方便。

希望是：

编程人员，根据自己的喜好和需要，以任意编码方式输入字符串，都可以，这样才正常。

 

2.2 建议选用的方案
所以，才有人给 Python 官方建议，所以才有此PEP 0263。

此建议就是：

允许在 Python 文件中，通过文件开始处的，放在注释中的，字符串形式的，声明，声明自己的 python 文件，用何种编码。

由此，需要很多地方做相应的改动，尤其是 Python 文件的解析器，可以识别此种文件编码声明。

 

2.3 具体如何声明python文件编码？
上面已经说了，是，文件开始处的，放在注释中的，字符串形式的，声明。

那具体如何声明，以什么样的格式去声明呢？

其实就是，你之前就见过的，这种：

# -*- coding: utf-8 -*-
对此格式的详细解释是：

如果没有此文件编码类型的声明，则 python 默认以ASCII编码去处理；如果你没声明编码，但是文件中又包含非ASCII编码的字符的话，python解析器去解析的 python 文件，自然就会报错了。
必须放在python文件的第一行或第二行
支持的格式，可以有三种：
带等于号的：
# coding=<encoding name>
最常见的，带冒号的（大多数编辑器都可以正确识别的）：
#!/usr/bin/python
# -*- coding: <encoding name> -*-
vim的：
#!/usr/bin/python
# vim: set fileencoding=<encoding name> :
更加精确的解释是：
符合正则表达式：
"^[ \t\v]*#.*?coding[:=][ \t]*([-_.a-zA-Z0-9]+)"
的都可以，很明显，如果你熟悉正则表达式，也就可以写出来，其他一些合法的编码声明，以 utf-8 为例，比如：
coding:         utf-8
coding=utf-8
coding=                  utf-8
encoding:utf-8
crifanEncoding=utf-8
为了照顾特殊的Windows中的带BOM（’\xef\xbb\xbf’）的UTF-8：
如果你的python文件本身编码是带 BOM 的 UTF-8，即文件前三个字节是：’\xef\xbb\xbf’，那么：

即使你没有声明文件编码，也自动当做是UTF-8的编码
如果你声明了文件编码，则必须是声明了（和你文件编码本身相一致的）UTF-8，否则（由于声明的编码和实际编码不一致，自然）会报错；
 

2.4 python文件编码声明所遵循的理念
1.单个的完整的python源码文件中，只用单一的编码。

->不允许嵌入了多种的编码的数据，否则会导致（python解释器去解析你的python文件时）报编码错误。

2.Python的分词器+编译器，会按照如下的逻辑去工作：

读取文件
不同的文件，根据其声明的编码去解析为Unicode
转换为UTF-8字符串
针对UTF-8字符串，去分词
编译之，创建Unicode对象
要注意的是：

Python中的标识符，都是ASCII的。