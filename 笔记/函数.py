

函数--------------------------------------------------------------------------------------------------------------------------------------
    定义函数(形参)  调用函数(实参)
    
    函数体系 
    
    1 函数是什么
    
    2 为什么要用函数
    
    3 函数的分类  
        内置函数  
        自定义函数
    
    4. 定义函数
        语法
        有参函数 
        无参函数
        空函数
    
    5. 调用函数
        如何调用
        函数的返回值
        参数的应用：形参 实参 位置参数  关键字参数  默认参数 *args  **kwargs
    
    6. 函数对象
    7. 函数嵌套
    8.名称空间 作用域
    
    
    1 函数是什么   函数是具备某一种功能的工具   要用函数 需要先定义 再使用
    
    2 为什么要用函数   因为方便  将一段经常需要使用的代码封装起来,在需要使用时可以直接调用
    
    3 函数的分类 
    内置函数 
    
    为了方便我们的开发  针对一些简单的功能  python解释器 已经为我们定义好了内置函数  拿来就用 无需再定义
    
    自定义函数 
    
    内置函数功能有限  没有想要的功能就自己定义  以后遇到应用场景 调用自定义函数即可

4. 定义函数

    语法模板

    def 函数名(参数1,参数2,参数3,.....)
        """注释"""
        函数体系
        return 返回值
    #函数名要有意义   


    定义一个函数

    def square_sum(a,b):
        c = a**2+b**2       #函数内部进行的运算     先执行等号右边  
        return c            #返回c 的值  也就是输出功能 python允许不返回值 也允许返回多个值  以逗号隔开 相当于一个元组 

        #return后面的语句不执行   当没有return时 函数自动返回none    none多用于关键字参数传递的默认值

    这个函数的功能是 计算 两个数 的平方和
    
    首先 def 这个关键字通知python 我在定义一个函数  函数名是square_sum
    
    括号中的 a , b  是参数  是对函数输入 
    
    
    函数在定义阶段都干了哪些事？
    
    #只检测语法，不执行代码
    也就说，语法错误在函数定义阶段就会检测出来，而代码的逻辑错误只有在执行时才会知道
    
    
    定义函数的三种形式
    无参数 应用场景  简单的用户交互 和打印
    # 进入 下一页 返回 主页  你好 .......     交互界面是人和计算机进行信息交换的通道
    有参数 根据传来的参数才能执行相应的逻辑  
    空函数 设计代码结构


5. 调用函数
    def square_sum(a,b):
    c = a**2+b**2   
    return c        
    print(square_sum(2,3))

    python通过位置知道 2,3 对应 a, b  

    函数的调用形式 

        语句形式：函数名()
        表达式形式：3*len('hello')
        当中另外一个函数的参数：range(len('hello'))


    函数的返回值 
        返回给调用方   返回多个值    return a,b,c      以逗号隔开 相当于一个元组    
        
        return 的作用 结束函数   返回一个对象
        
        通常有参函数   有明确的的结果  有返回值
        通常无参函数   没有返回值

        return两种写法   
        第一种  用一个列表存储 abc 3个变量的值

        d = [a,b,c]
        return d 
        return [a,b,c]     

        第二种 return a,b,c





参数 
    

    参数书写位置
    在函数调用中： 位置参数 --> 关键字参数 -->元组形式-->字典形式
    在函数头部： 一般参数-->默认参数-->元组形式-->字典形式

    形参与实参

        形参即变量名，实参即变量值，函数调用时，将值绑定到变量名上，函数调用结束，解除绑定

    位置参数：按照从左到右的顺序定义参数
        位置形参：必选参数
        位置实参： 按位置给形参传值


    默认参数：形参再定义时就已经为其赋值    
        可以传值也可以不传值，经常需要变得参数定义成位置形参，变化较小的参数定义成默认参数（形参）
        注意的问题：
                1. 只在定义时赋值一次
                2. 默认参数的定义应该在位置形参右面
                3. 默认参数通常应该定义成不可变类型

        默认参数  可以不传  不传就用默认的 如果用户指定了参数，那么用户指定的参数就会代替默认参数。 
        
        def a(a,b=10):
            c = a+b
            print(c)
        a(10)


        def add_end(L=[]):
            L.append('END')
            return L
        print(add_end())
     


    可变长参数：
        可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个  tuple
        可变长指的是实参值的个数不固定
        而实参有按位置和按关键字两种形式定义，针对这两种形式的可变长，形参对应有两种解决方案来完整地存放它们，分别是*args，**kwargs                                            
        def argsFunc(a, *args):
            print a
            print args
            
        >>> argsFunc(1, 2, 3, 4)
            1 (2, 3, 4)                              
                              

    关键字参数 ：   按照key=value 的形式定义实参
        
        0个或任意个   这些关键字参数在函数内部自动组装为一个 dict   试想你正在做一个用户注册的功能，除了用户名和年龄是必填项外，其他都是可选项，利用关键字参数来定义这个函数就能满足注册的需求。
        无需按照位置传值  
        注意：
            关键字参数必须在位置实参的右面
            对同一个形参不能重复传值


        def person(name, age, **kw):
            print 'name:', name, 'age:', age, 'other:', kw
        >>> person('Michael', 30)
        name: Michael age: 30 other: {}
        >>> person('Bob', 35, city='Beijing')
        name: Bob age: 35 other: {'city': 'Beijing'}

    




     


    在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。

        不可变类型 
        变量赋值 a=5 a=10  不是产生了新的值  而是产生了新的 a

        可变类型
        变量赋值 la=[1,2,3,4]  再赋值 la[2]=5   列表的值被修改了

    函数的参数传递 

        值传递   整数、字符串、元组  基本数据类型的变量，变量传递给函数后，函数会在内存中复制一个新的变量，从而不影响原来的变量。
        a = 1
        def change_integer(a):
            a = a + 1
            return a
        
        print change_integer(a)
        print a
        
        
        引用传递   列表传递给函数的是一个指针，指针指向序列在内存中的位置，在函数中对列表的操作将在原有内存中进行，从而影响原有变量。
        
        b = [1,2,3]
        
        def change_list(b):
            b[0] = b[0] + 1
            return b
        
        print change_list(b)
        print b


    返回值当参数
        def a():
            a=10
            return a    #  一个函数要用另一个函数的返回值    把返回值保存成起来  当参数传过去
        def b(a):
            a = a+10
            return a    
        z=a()
        x=b(z)
        print(x)
    

    函数当参数

        def plus(a,b):
            print(a+b)
        def run(fun,a,b):
            fun(a,b)
        
        run(plus,3,5)
        
        run(plus,3,50)
        
                   
                             
匿名函数 
    
    def a(x,y):
        print(x+y)

    a = lambda x,y : print(x+y)
    a(3,3)

    >>> (lambda x,y: x if x> y else y)(101,102)
    102 
 
6.函数对象
    函数是第一类对象，即函数可以当作数据传递

     可以被引用
     可以当作参数传递
     返回值可以是函数
     可以当作容器类型的元素

     lambda函数
    在展开之前，我们先提一下lambda函数。可以利用lambda函数的语法，定义函数。lambda例子如下：
    
    func = lambda x,y: x + y
    print func(3,4)
    lambda生成一个函数对象。该函数参数为x,y，返回值为x+y。函数对象赋给func。func的调用与正常函数无异。
    
     
    
    以上定义可以写成以下形式：
    
    def func(x, y):
        return x + y
     
    
    函数作为参数传递
    函数可以作为一个对象，进行参数传递。函数名(比如func)即该对象。比如说:
    
    
    def test(f, a, b):
        print 'test'
        print f(a, b)
    
    test(func, 3, 5)
    
    test函数的第一个参数f就是一个函数对象。将func传递给f，test中的f()就拥有了func()的功能。
    
     
    
    我们因此可以提高程序的灵活性。可以使用上面的test函数，带入不同的函数参数。比如:
    
    test((lambda x,y: x**2 + y), 6, 9)
     
    
    map()函数
    map()是Python的内置函数。它的第一个参数是一个函数对象。
    
    re = map((lambda x: x+3),[1,3,5,6])
    这里，map()有两个参数，一个是lambda所定义的函数对象，一个是包含有多个元素的表。map()的功能是将函数对象依次作用于表的每一个元素，每次作用的结果储存于返回的表re中。map通过读入的函数(这里是lambda函数)来操作数据（这里“数据”是表中的每一个元素，“操作”是对每个数据加3）。
    
    在Python 3.X中，map()的返回值是一个循环对象。可以利用list()函数，将该循环对象转换成表。
    
     
    
    如果作为参数的函数对象有多个参数，可使用下面的方式，向map()传递函数参数的多个参数：
    
    re = map((lambda x,y: x+y),[1,2,3],[6,7,9])
    map()将每次从两个表中分别取出一个元素，带入lambda所定义的函数。
    
     
    
    filter()函数
    filter函数的第一个参数也是一个函数对象。它也是将作为参数的函数对象作用于多个元素。如果函数对象返回的是True，则该次的元素被储存于返回的表中。filter通过读入的函数来筛选数据。同样，在Python 3.X中，filter返回的不是表，而是循环对象。
    
     
    
    filter函数的使用如下例:
    
    
    def func(a):
        if a > 100:
            return True
        else:
            return False
    
    print filter(func,[10,56,101,500])
    
     
    
    reduce()函数
    reduce函数的第一个参数也是函数，但有一个要求，就是这个函数自身能接收两个参数。reduce可以累进地将函数作用于各个参数。如下例：
    
    print reduce((lambda x,y: x+y),[1,2,5,7,9])
    reduce的第一个参数是lambda函数，它接收两个参数x,y, 返回x+y。
    
    reduce将表中的前两个元素(1和2)传递给lambda函数，得到3。该返回值(3)将作为lambda函数的第一个参数，而表中的下一个元素(5)作为lambda函数的第二个参数，进行下一次的对lambda函数的调用，得到8。依次调用lambda函数，每次lambda函数的第一个参数是上一次运算结果，而第二个参数为表中的下一个元素，直到表中没有剩余元素。
    
    上面例子，相当于(((1+2)+5)+7)+9
    



7. 函数嵌套     

    闭包属于嵌套函数


    def max(x,y):
        return x if x > y else y
    
    def max4(a,b,c,d):
        res1=max(a,b)
        res2=max(res1,c)
        res3=max(res2,d)
        return res3
    print(max4(1,2,3,4))



8.名称空间 作用域

    名称空间 是存放名字的地方    x=1，1存放于内存中，那名字x存放在哪里呢？名称空间正是存放名字x与1绑定关系的地方）
    
    三种名称空间 
    
        python test.py
        python解释器先启动  因而首先加载的是 内置名称空间
    
        执行test.py 文件 然后以文件为基础 加载 全局名称空间  
    
        在执行文件的过程中 如果调用函数 则临时产生局部名称空间  
    
        局部名称空间--->全局名称空间--->内置名称空间
    
        需要注意的是：在全局无法查看局部的，在局部可以查看全局的， 
    
    
    作用域即范围
            - 全局范围（内置名称空间与全局名称空间属于该范围）：全局存活，全局有效
    　     - 局部范围（局部名称空间属于该范围）：临时存活，局部有效
           作用域关系是在函数定义阶段就已经固定的，与函数的调用位置无关，
    
    
    global
    
    
    num = 1
    def fun1():
        global num  # 需要使用 global 关键字声明
        print(num) 
        num = 123
        print(num)
    fun1() 
    当内部作用域想修改外部作用域的变量时，就要用到global和nonlocal关键字
    
    
    def outer():
        num = 10
        def inner():
            nonlocal num   # nonlocal关键字声明
            num = 100
            print(num)
        inner()
        print(num)
    outer()
    
    
    如果要修改嵌套作用域 中的变量则需要 nonlocal 关键字 
    
    
    LEGB 代表名字查找顺序: locals -> enclosing function -> globals -> __builtins__
    locals 是函数内的名字空间，包括局部变量和形参
    enclosing 外部嵌套函数的名字空间（闭包中常见）
    globals 全局变量，函数定义所在模块的名字空间
    builtins 内置模块的名字空间
    
    
    列表  字典 当全局变量 不用加 global   可以修改






9.高阶函数 

    函数名可以当参数 
    函数名可以作为返回值

 


10.闭包函数
    两个条件： 1.一个内部函数  2.引用外部环境的变量    那么这个内部函数 就是一个闭包 

    def a(jia):
    
        def b(bei):
    
            return jia+bei
    
        return b   
    
    p=a(123)  传123 给jia  返回 b b带上了jia 一起返回        如何携带外层参数  外层函数返回参数给我
    
    print(p(123))
    
    
    
    def a(name):
        def b():
            return name+"hello"
        return b
    p = a("q")
    print(p())
    
    函数是一个对象，所以可以作为某个函数的返回结果。      闭包 把函数当返回值

    一个函数和它的环境变量合在一起，就构成了一个闭包(closure)
    
    你也可以把一个类实例看成闭包，当你在构造这个类时，使用了不同的参数，这些参数就是闭包里的包，这个类对外提供的方法就是闭包的功能。但是类远远大于闭包，因为闭包只是一个可以执行的函数，但是类实例则有可能提供很多方法。

    外面的参数刚好是里面的变量

    如果外函数在结束的时候发现有自己的临时变量将来会在内部函数中用到，就把这个临时变量绑定给了内部函数  然后自己再结束
    

    需要传递函数本身这个对象时，不要加括号。
    而在执行这个函数的时候，需要加括号。

    装饰器就是闭包函数的一种应用场景



11.装饰器
    装饰器 把 函数 当 参数
    
    装饰器就是一种闭包
    
    更准确的定义 装饰器  可以是： 函数  类 (例: classmethod和property)   不太准确  实例方法 (例: FLask类的实例app的route方法) ,  类方法
    
    
    装饰器的作用
        引入日志
        执行函数前预备处理
        执行函数后清理功能
        记录函数的运行状况
        缓存计算结果
         
    
    
    
    装饰器的运行顺序  ：使用多个装饰器时的运行顺序；最外围/上面的装饰器最晚生效；
    开放封闭原则   
    强调装饰器的原则：1 不修改被装饰对象的源代码 2 不修改被装饰对象的调用方式
    装饰器的目标：在遵循1和2的前提下，为被装饰对象添加新功能
    
    只要python解释器执行到这行代码 就会自动装饰  不用等到调用才装饰


      1  4    f1
    def  w1(func):
    
         5    9
        def inner():
    
             10
            print("---正在验证权限----")
             11  14
            func()     
          6
        return inner
     2   12
    def f1():
         13
        print("---f1---")
    7     3
    f1 = w1(f1)
    8  15
    f1()
    
    
    
    
    装饰器把下面的函数当参数    装饰器和下面的函数是一体的
    w1(func) ---> inner  ---->func()---->f1()
    
    1    3
    def w1(func):
         4    8
        def inner():
              9
            print("---正在验证权限----")
             10  13
            func()     
         5
        return inner
    #f1 = w1(f1)
    2  6  11
    @w1           
    def f1():
         12
        print("---f1---")
    7   14
    f1()  
    
    
    指向谁  执行谁
    
    
    两个装饰器
    
    1   9
    def a(fn):
        10    14                                         3
        def wrapped():
            15
            print("----1---")                            
                          16  24 
            return "<c>" + fn() + "</b>"                 
        11
        return wrapped
    2   5
    def b(fn):
        6     17                                         
        def wrapped():
             18
            print("----2---")                            
                           19 23
            return "<i>" + fn() + "</i>"                 
         7
        return wrapped
    
    3  20
    @a
    4  8  12
    @b                                                   
    
    def test3():              
        21
        print("----3---")
          22
        return "hello world-3"
     13 25    
    ret = test3()                                         
    26
    print(ret)
    
    
    def w1(func):
        print("---正在装饰1----")                  3
        def inner():
            print("---正在验证权限1----")                 4
            func()
        return inner
    
    def w2(func):
        print("---正在装饰2----")                  2
        def inner():
            print("---正在验证权限2----")                 5
            func()
        return inner
    @w1
    @w2                                           1
    def f1():
        print("---f1---")
    f1()                                                 6
    
    
    装饰有参数的函数  和 不定长参数
    
    def func(functionName):
        print("---func---1---")
        def func_in(      形参    *args **kwargs     ):#如果a,b 没有定义,那么会导致16行的调用失败
            print("---func_in---1---")
            functionName(   实参   *args **kwargs       )#如果没有把a,b当做实参进行传递,那么会导致调用12行的函数失败
            print("---func_in---2---")
    
        print("---func---2---")
        return func_in
    
    
    @func
    def test(   形参      ):
        print("----test-a=%d,b=%d---"%(a,b))
    
    
    test(     实参     )
    
    
    对有返回值的函数 进行装饰
    
    def func(functionName):
        print("---func---1---")
        
        def func_in(): #★(2)
    
            print("---func_in---1---")
            ret = functionName() #保存 返回来的haha  (3)
            print("---func_in---2---") 
            return ret #把haha返回岛17行处的调用
    
        print("---func---2---")
        return func_in
    
    @func
    
    def test(): #(4)
    
    
        print("----test----")
        return "haha"
    
    ret = test()   #(1)
    print("test return value is %s"%ret)
    
    返回路线  4--->3--->2---->1


    通用装饰器
    def func(functionName):
        def func_in(*args, **kwargs):
            print("-----记录日志-----")
            ret = functionName(*args, **kwargs)
            return ret
    
        return func_in
    
    @func
    def test():
        print("----test----")
        return "haha"
    
    @func
    def test2():
        print("----test2---")
    
    @func
    def test3(a):
        print("-----test3--a=%d--"%a)
    
    ret = test()
    print("test return value is %s"%ret)
    
    a = test2()
    print("test2 return value is %s"%a)
    
    
    test3(11)    

    
12.迭代器 生成器  https://segmentfault.com/a/1190000010006272

      迭代器 是一个可以记住遍历位置的对象
      
      list=[1,2,3,4]
      it = iter(list)    # 创建迭代器对象
      print (next(it))   #输出迭代器的下一个元素
      
      
      list=[1,2,3,4]
      it = iter(list)    # 创建迭代器对象
      i=0
      print(it)
      while i<3:
          print (next(it))
          i=i+1
     迭代器的优缺点

        #优点：
          - 提供一种统一的、不依赖于索引的迭代方式
          - 惰性计算，节省内存
        #缺点：
          - 无法获取长度（只有在next完毕才知道到底有几个值）
          - 一次性的，只能往后走，不能往前退

     一次只生成一个  让我生我才生
     使用了 yield 的函数被称为生成器
     生成器是一个返回迭代器的函数，只能用于迭代操作

     在调用生成器运行的过程中，每次遇到 yield 时函数会暂停并保存当前所有的运行信息，返回 yield 的值, 并在下一次执行 next() 方法时从当前位置继续运行。

     可以通过generator.send(arg)来传入参数，这是协程模型。
     
     调用一个生成器函数，返回的是一个迭代器对象
        g = (x * x for x in range(10))
        >>> for n in g:
        ...     print n

13.递归与二分法
    递归调用的定义
    
     递归调用是函数嵌套调用的一种特殊形式，函数在调用时，直接或间接调用了自身，就是递归调用
    
    递归的特点：
        调用自身
        有一个结束条件
     
    python中的递归
        python中的递归效率低，需要在进入下一次递归时保留当前的状态，在其他语言中可以有解决方法：尾递归优化，即在函数的最后一步（而非最后一行)调用自己，尾递归优化：http://egon09.blog.51cto.com/9161406/1842475
        但是python又没有尾递归，且对递归层级做了限制
    
     总结递归的使用：
        1. 必须有一个明确的结束条件
    
        2. 每次进入更深一层递归时，问题规模相比上次递归都应有所减少
    
        3. 递归效率不高，递归层次过多会导致栈溢出（在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出）

14.内置函数

