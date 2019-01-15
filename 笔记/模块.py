模块 

    什么是模块

    常见的场景 一个模块 就是包含了一组功能的python文件 比如 spam.py   模块名为spam  通过import.spam 使用
    
    模块可以分为四个通用的类别：
        1. 使用python编写的py文件 
        2. 已被编译为共享库的dll的c++库
        3. 把一系列模块组装到一起的文件夹   文件夹下有一个__init__.py 文件 给文件夹称为包
        4. 使用c编写并连接到python解释器的内置模块
        
    
    为什么要用模块
    从文件级别组织程序 方便管理
    我们不仅可以把这些文件当做脚本去执行，还可以把他们当做模块来导入到其他的模块中，实现了功能的重复利用
    拿来主义 提升开发效率


    这里有一个文件 spam.py  模块名为spam
    print('from the spam.py')
    
    money=1000
    
    def read1():
        print('spam模块：',money)
    
    def read2():
        print('spam模块')
        read1()
    
    def change():
        global money
        money=0
        
        
        
    
    
import 的使用
    只有第一次生效    模块可以包含可执行的语句和函数的定义，这些语句的目的是初始化模块，它们只在模块名第一次遇到导入import语句时才执行
    
    sys.module    我们可以从sys.module中找到当前已经加载的模块，sys.module是一个字典，内部包含模块名与模块对象的映射，该字典决定了导入模块时是否需要重新导入。
    
     在第一次导入模块时会做三件事：
        1. 为源文件(spam模块)创建新的名称空间，在spam中定义的函数和方法若是使用到了global时访问的就是这个名称空间。
        2. 在新创建的命名空间中执行模块中包含的代码，见初始导入import spam   事实上函数定义也是“被执行”的语句，模块级别函数定义的执行将函数名放入模块全局名称空间表，用globals()可以查看 
           print(globals())  结果： {'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x00000223E3687048>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, '__file__': 'C:/Users/sky/PycharmProjects/untitled/f.py', '__cached__': None, 'spam': <module 'spam' from 'C:\\Users\\sky\\PycharmProjects\\untitled\\spam.py'>}
        3. 创建名字spam来引用该命名空间
    
     被导入模块有独立的名称空间
    
        每个模块都是一个独立的名称空间，定义在这个模块中的函数，把这个模块的名称空间当做全局名称空间，这样我们在编写自己的模块时，就不用担心我们定义在自己模块中全局变量会在被导入时，与使用者的全局变量冲突
        例子：
        1. test.money 与 spam.money 不冲突
            #test.py
            import spam 
            money=10
            print(spam.money)
            print(money)
    
        2.read1与spam.read1不冲突
            #test.py
            import spam
            def read1():
                print('========')
            spam.read1()
            read1()
    
        3. 执行spam.change()操作的全局变量money仍然是spam中的
    
            import spam
            money=1
            spam.change()
            print(money)
        
        
        
             
    "from ... import..." 的使用

    为模块名起别名  模块名区分大小写
        import spam as sm
        import sys,os,re
        from spam import read1,read2
        from spam import read1 as read     
        from spam import read1,read2,money 

        from spam import * 
            把spam中所有的不是以下划线(_)开头的名字都导入到当前位置
            
            可以使用__all__来控制*（用来发布新版本），在spam.py中新增一行
    
            __all__=['money','read1'] #这样在另外一个文件中用from spam import *就这能导入列表中规定的两个名字

        
        from 与 import 的对比
    
            唯一的区别就是：使用"from...import..."则是将spam中的名字直接导入到当前的名称空间中，所以在当前名称空间中，
            直接使用名字就可以了、无需加前缀：spam.
    
            "from...import..."的方式有好处也有坏处
            好处：使用起来方便了
            坏处：容易与当前执行文件中的名字" 冲突
    


            测试1：导入的函数read1，执行时仍然回到spam.py中寻找全局变量money
            #test.py
            from spam import read1
            money=1000
            read1()
            '''
            执行结果:
            from the spam.py
            spam->read1->money 1000
            '''
            
            测试2:导入的函数read2，执行时需要调用read1(),仍然回到spam.py中找read1()
            #test.py
            from spam import read2
            def read1():
                print('==========')
            read2()
            
            '''
            执行结果:
            from the spam.py
            spam->read2 calling read
            spam->read1->money 1000
            '''
            
            有重名 read1  就会用当前的
            
            测试3:导入的函数read1，被当前位置定义的read1覆盖掉了
            #test.py
            from spam import read1
            def read1():
                print('==========')
            read1()
            '''
            执行结果:
            from the spam.py
            ==========
            '''
            
            测试4 导入的方法在执行时，始终是以源文件为准的
            from spam import money,read1
            money=100 #将当前位置的名字money绑定到了100
            print(money) #打印当前的名字
            read1() #读取spam.py中的名字money,仍然为1000
            
            '''
            from the spam.py
            100
            spam->read1->money 1000
            '''
    
    
    
    
    模块的查找顺序是：

    内存中已经加载的模块->内置模块->sys.path路径中包含的模块
    
    
    模块搜索路径：
    当一个命名为spam的模块被导入时
        解释器首先会从内建模块中寻找该名字
        找不到，则去sys.path中找该名字
    
    sys.path从以下位置初始化
        1 执行文件所在的当前目录
        2 PTYHONPATH（包含一系列目录名，与shell变量PATH语法一样）
        3 依赖安装时默认指定的
    
    注意：在支持软连接的文件系统中，执行脚本所在的目录是在软连接之后被计算的，换句话说，包含软连接的目录不会被添加到模块的搜索路径中
    
    在初始化后，我们也可以在python程序中修改sys.path,执行文件所在的路径默认是sys.path的第一个目录，在所有标准库路径的前面。这意味着，当前目录是优先于标准库目录的，需要强调的是：我们自定义的模块名不要跟python标准库的模块名重复，除非你是故意的，傻叉。
    

    
    一个python文件 两种用途：
        一：脚本，一个文件就是整个程序，用来被执行
        二：模块，文件中存放着一堆功能，用来被导入使用
    
    
    python为我们内置了全局变量__name__，
        当文件被当做脚本执行时：__name__ 等于'__main__'
        当文件被当做模块导入时：__name__等于模块名

    作用：用来控制.py文件在不同的应用场景下执行不同的逻辑
         if __name__ == '__main__':

包
    什么是包
    强调包的本质：包内的模块是用来被导入的，而不是被执行的
    
    包是一种通过使用‘.模块名’来组织python模块名称空间的方式。
    
    #具体的：包就是一个包含有__init__.py文件的文件夹，所以其实我们创建包的目的就是为了用文件夹将文件/模块组织起来
    
    #需要强调的是：
    　　1. 在python3中，即使包下没有__init__.py文件，import 包仍然不会报错，而在python2中，包下一定要有该文件，否则import 包报错
    
    　　2. 创建包的目的不是为了运行，而是被导入使用，记住，包只是模块的一种形式而已，包的本质就是一种模块
    
    
    
    为什么要用包

    包的本质就是一个文件夹，那么文件夹唯一的功能就是将文件组织起来
    随着功能越写越多，我们需要一个文件夹
    
    注意：
    1. 凡是在导入时带点的，点的左边都必须是一个包，否则非法。可以带有一连串的点，如item.subitem.subsubitem,
    2. import导入文件时，产生名称空间中的名字来源于文件，import 包，产生的名称空间的名字同样来源于文件，即包下的__init__.py，导入包本质就是在导入该文件
    
    3. 包A和包B下有同名模块也不会冲突，如A.a与B.a来自俩个命名空间
    
    
    
    包的使用

    1、示范文件
    
        glance/                   #Top-level package
        
        ├── __init__.py      #Initialize the glance package
        
        ├── api                  #Subpackage for api
        
        │   ├── __init__.py
        
        │   ├── policy.py
        
        │   └── versions.py
        
        ├── cmd                #Subpackage for cmd
        
        │   ├── __init__.py
        
        │   └── manage.py
        
        └── db                  #Subpackage for db
        
            ├── __init__.py
        
            └── models.py
        
        #文件内容
        
        #policy.py
        def get():
            print('from policy.py')
        
        #versions.py
        def create_resource(conf):
            print('from version.py: ',conf)
        
        #manage.py
        def main():
            print('from manage.py')
        
        #models.py
        def register_models(engine):
            print('from models.py: ',engine)
        
        包所包含的文件内容
        
        
        
        执行文件与示范文件在同级目录下
        
    2、包的使用之import 
    
         import glance.db.models
         glance.db.models.register_models('mysql') 
        单独导入包名称时不会导入包中所有包含的所有子模块，如
        
        #在与glance同级的test.py中
        import glance
        glance.cmd.manage.main()      
        
        '''
        执行结果：
        AttributeError: module 'glance' has no attribute 'cmd'
        
        ''' 
        解决方法：
        
            #glance/__init__.py
            from . import cmd          顶级包的__init__里 导入分包     默认加载cmd
            
            #glance/cmd/__init__.py
            from . import manage
            执行：
            
             #在于glance同级的test.py中
             import glance
             glance.cmd.manage.main()
    
    
    3、包的使用之from ... import ...
    
        需要注意的是from后import导入的模块，必须是明确的一个不能带点，否则会有语法错误，如：from a import b.c是错误语法
    
        from glance.db import models
        models.register_models('mysql')
        
        from glance.db.models import register_models  直接导入方法
        register_models('mysql')  调用方法
    
    
    4、from glance.api import *
    
        在讲模块时，我们已经讨论过了从一个模块内导入所有*，此处我们研究从一个包导入所有*。
    
        此处是想从包api中导入所有，实际上该语句只会导入包api下__init__.py文件中定义的名字，我们可以在这个文件中定义__all___:
    
        #在__init__.py中定义
        x=10
        
        def func():                              导入所有包*   导入包api下__init__.py
            print('from api.__init.py')    
        
        __all__=['x','func','policy']
    
    
    
        此时我们在于glance同级的文件中执行from glance.api import *就导入__all__中的内容（versions仍然不能导入）。
    
        练习：
            
            from glance import *            glance 里的 __init__ 没有  get()  main()                
    
            get()
            create_resource('a.conf')       报错   没有导入   
            main()                                
            register_models('mysql')
    
    
            #在glance.__init__.py中                          
            from .api.policy import get                   在__init__ 里导入 get 等
            from .api.versions import create_resource   
                                                                  
            from .cmd.manage import main
            from .db.models import  register_models
    
            __all__=['get','create_resource','main','register_models']
    
    
    
    5、绝对导入和相对导入
    
        我们的最顶级包glance是写给别人用的，然后在glance包内部也会有彼此之间互相导入的需求，这时候就有绝对导入和相对导入两种方式：
        
        绝对导入：以glance作为起始
        
        相对导入：用.或者..的方式最为起始（只能在一个包中使用，不能用于不同目录内）
        
        例如：我们在glance/api/version.py中想要导入glance/cmd/manage.py
    
        在glance/api/version.py
        
        #绝对导入
        from glance.cmd import manage
        manage.main()
        
        #相对导入
        from ..cmd import manage
        manage.main()
    
    
    
        测试结果：注意一定要在于glance同级的文件中测试
        
        from glance.api import versions 
    
    
        
    6、 !  包以及包所包含的模块都是用来被导入的，而不是被直接执行的。而环境变量都是以执行文件为准的
    
        比如我们想在glance/api/versions.py中导入glance/api/policy.py，有的同学一抽这俩模块是在同一个目录下，十分开心的就去做了，它直接这么做
    
        #在version.py中
        
        import policy
        policy.get()
        没错，我们单独运行version.py是一点问题没有的，运行version.py的路径搜索就是从当前路径开始的，于是在导入policy时能在当前目录下找到
    
        比如我们在于glance同级下的一个test.py文件中导入version.py  test.py 当前目录下没有policy.py


常用模块

time

print(time.time())
time.sleep(1000000)

时间加减
import datetime

# print(datetime.datetime.now()) #返回 2016-08-19 12:47:03.941925
#print(datetime.date.fromtimestamp(time.time()) )  # 时间戳直接转成日期格式 2016-08-19
# print(datetime.datetime.now() )
# print(datetime.datetime.now() + datetime.timedelta(3)) #当前时间+3天
# print(datetime.datetime.now() + datetime.timedelta(-3)) #当前时间-3天
# print(datetime.datetime.now() + datetime.timedelta(hours=3)) #当前时间+3小时
# print(datetime.datetime.now() + datetime.timedelta(minutes=30)) #当前时间+30分


import random

print(random.random())  # (0,1)----float    大于0且小于1之间的小数

print(random.randint(1, 3))  # [1,3]    大于等于1且小于等于3之间的整数

print(random.randrange(1, 3))  # [1,3)    大于等于1且小于3之间的整数

print(random.choice([1, '23', [4, 5]]))  # 1或者23或者[4,5]

print(random.sample([1, '23', [4, 5]], 2))  # 列表元素任意2个组合

print(random.uniform(1, 3))  # 大于1小于3的小数，如1.927109612082716

item = [1, 3, 5, 7, 9]
random.shuffle(item)  # 打乱item的顺序,相当于"洗牌"
print(item)

sys.argv           命令行参数List，第一个元素是程序本身路径
sys.exit(n)        退出程序，正常退出时exit(0)
sys.version        获取Python解释程序的版本信息
sys.maxint         最大的Int值
sys.path           返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值
sys.platform       返回操作系统平台名称

os.getcwd() 获取当前工作目录，即当前python脚本工作的目录路径
os.chdir("dirname")  改变当前脚本工作目录；相当于shell下cd
os.curdir  返回当前目录: ('.')
os.pardir  获取当前目录的父目录字符串名：('..')
os.makedirs('dirname1/dirname2')    可生成多层递归目录
os.removedirs('dirname1')    若目录为空，则删除，并递归到上一级目录，如若也为空，则删除，依此类推
os.mkdir('dirname')    生成单级目录；相当于shell中mkdir dirname
os.rmdir('dirname')    删除单级空目录，若目录不为空则无法删除，报错；相当于shell中rmdir dirname
os.listdir('dirname')    列出指定目录下的所有文件和子目录，包括隐藏文件，并以列表方式打印
os.remove()  删除一个文件
os.rename("oldname","newname")  重命名文件/目录
os.stat('path/filename')  获取文件/目录信息
os.sep    输出操作系统特定的路径分隔符，win下为"\\",Linux下为"/"
os.linesep    输出当前平台使用的行终止符，win下为"\t\n",Linux下为"\n"
os.pathsep    输出用于分割文件路径的字符串 win下为;,Linux下为:
os.name    输出字符串指示当前使用平台。win->'nt'; Linux->'posix'
os.system("bash command")  运行shell命令，直接显示
os.environ  获取系统环境变量
os.path.abspath(path)  返回path规范化的绝对路径
os.path.split(path)  将path分割成目录和文件名二元组返回
os.path.dirname(path)  返回path的目录。其实就是os.path.split(path)的第一个元素
os.path.basename(path)  返回path最后的文件名。如何path以／或\结尾，那么就会返回空值。即os.path.split(path)的第二个元素
os.path.exists(path)  如果path存在，返回True；如果path不存在，返回False
os.path.isabs(path)  如果path是绝对路径，返回True
os.path.isfile(path)  如果path是一个存在的文件，返回True。否则返回False
os.path.isdir(path)  如果path是一个存在的目录，则返回True。否则返回False
os.path.join(path1[, path2[, ...]])  将多个路径组合后返回，第一个绝对路径之前的参数将被忽略
os.path.getatime(path)  返回path所指向的文件或者目录的最后存取时间
os.path.getmtime(path)  返回path所指向的文件或者目录的最后修改时间
os.path.getsize(path) 返回path的大小

