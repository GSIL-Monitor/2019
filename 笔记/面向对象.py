15.面向对象-----------------------------------------------------------------------------------------------------------------------------------

面向对象的程序设计并不是全部。对于一个软件质量来说，面向对象的程序设计只是用来解决扩展性
优点是：解决了程序的扩展性。对某一个对象单独修改，会立刻反映到整个体系中，如对游戏中一个人物参数的特征和技能修改都很容易。
缺点：
    1.   管理linux系统的shell脚本就不适合用面向对象去设计，面向过程反而更加适合。
    2    无法向面向过程的程序设计流水线式的可以很精准的预测问题的处理流程与结果
应用场景：需求经常变化的软件，一般需求的变化都集中在用户层，互联网应用，企业内部软件，游戏等都是面向对象的程序设计大显身手的好地方




类与对象

    这与函数的使用是类似的，先定义函数，后调用函数，类也是一样的，在程序中需要先定义类，后调用类
    
    不一样的是，调用函数会执行函数体代码返回的是函数体执行的结果，而调用类会产生对象，返回的是对象
    
    属性用变量表识 方法用函数表识   
    因而类中     最常见       ：        变量    和    函数    的定义
    
 





    定义了 学生类
        class OldboyStudent:
            school='oldboy'
            def learn(self):
                print('is learning')
                
            def eat(self):
                print('is eating')
            
            def sleep(self):
                print('is sleeping')
            def __init__(self,name,age,sex):
                self.name=name
                self.age=age
                self.sex=sex
        s1=OldboyStudent('李坦克','男',18)        
        print(s1.name)                       对象.属性                          
    
    
        OldboyStudent.x = 1
        OldboyStudent.school = 'Ol '          
        print(OldboyStudent.x)               类.属性
        print(OldboyStudent.school)
    
    
    
        类的数据属性是所有对象共享的              id相同
        print(id(OldboyStudent.school))    2824859775136                                                                                         
        print(id(s1.school))               2824859775136                                                    
                                                       
        类的函数属性是绑定给对象用的    obj.对象称为绑定方法
        print(OldboyStudent.learn)             内存地址不一样
        print(s1.learn)
     
            注意：
              1.类中可以有任意python代码，这些代码在类定义阶段便会执行
              2.因而会产生新的名称空间，用来存放类的变量名与函数名，可以通过OldboyStudent.__dict__查看
               
              4.点是访问属性的语法，类中定义的名字，都是类的属性
    
    
        python为内置类属性
          类名.__name__# 类的名字(字符串)
          类名.__doc__# 类的文档字符串
          类名.__base__# 类的第一个父类(在讲继承时会讲)
          类名.__bases__# 类所有父类构成的元组(在讲继承时会讲)
          类名.__dict__# 类的字典属性
          类名.__module__# 类定义所在的模块
          类名.__class__# 实例对应的类(仅新式类中)
        
        
        程序中 类的用法
            .:专门用来访问属性，本质操作的就是__dict__
            类名           属性名
          查  OldboyStudent.school #等于经典类的操作OldboyStudent.__dict__['school']
          改  OldboyStudent.school='Old' #等于经典类的操作OldboyStudent.__dict__['school']='Oldboy'
          增  OldboyStudent.x=1 #等于经典类的操作OldboyStudent.__dict__['x']=1
          删  del OldboyStudent.x #等于经典类的操作OldboyStudent.__dict__.pop('x')
        
        类属性查找
        类有两种属性：数据属性和函数属性
        
        1. 类的数据属性是所有对象共享的  id 相同
        
        2. 类的函数属性是绑定给对象用的 
            类的函数属性是绑定给对象使用的,  对象.方法 称为绑定方法,   内存地址都不一样
            ps:id是python的实现机制,并不能真实反映内存地址,如果有内存地址,还是以内存地址为准
        
    
    
    类中定义的函数  :  是类的函数属性，类可以使用，但必须遵循函数的参数规则，有几个参数需要传几个参数
    类中定义的函数  :  是给对象使用的，而且是绑定到对象的，虽然所有对象指向的都是相同的功能，但是绑定到不同的对象就是不同的绑定方法
    强调：绑定到对象的方法的特殊之处在于，绑定给谁就由谁来调用，谁来调用，就会将‘谁’本身当做第一个参数传给方法，即自动传值（方法__init__也是一样的道理）
    注意：绑定到对象的方法的这种自动传值的特征，决定了在类中定义的函数都要默认写一个参数self，self可以是任意名字，但是约定俗成地写出self。
        例子： 
            class OldboyStudent:
                school='oldboy'
                def __init__(self,name,age,sex):
                    self.name=name
                    self.age=age
                    self.sex=sex
                def learn(self):        
                    print('%s is learning' %self.name) #新增self.name
            
                def eat(self):
                    print('%s is eating' %self.name)
            
                def sleep(self):
                    print('%s is sleeping' %self.name)
            
            
            s1=OldboyStudent('李坦克','男',18)
            s2=OldboyStudent('王大炮','女',38)
            s3=OldboyStudent('牛榴弹','男',78)
            
            OldboyStudent.learn(s1) #李坦克 is learning
            OldboyStudent.learn(s2) #王大炮 is learning
            OldboyStudent.learn(s3) #牛榴弹 is learning
            
            s1.learn() #等同于OldboyStudent.learn(s1)
            s2.learn() #等同于OldboyStudent.learn(s2)
            s3.learn() #等同于OldboyStudent.learn(s3)
    
    
    程序中 的对象
        #调用类，或称为实例化，得到对象
        s1=OldboyStudent()
        s2=OldboyStudent()
        s3=OldboyStudent()
        如此，s1、s2、s3都一样了，而这三者除了相似的属性之外还有各种不同的属性，这就用到了__init__
        #注意： __init__方法是在对象产生之后才会执行，只用来为对象进行初始化操作，可以有任意代码，但一定不能有返回值
    
        class OldboyStudent:
             
            def __init__(self,name,age,sex):
                self.name=name
                self.age=age
                self.sex=sex
        s1=OldboyStudent('李坦克','男',18) #先调用类产生空对象s1，然后调用OldboyStudent.__init__(s1,'李坦克','男',18)
        print(s1.name)   obj.name会先从obj自己的名称空间里找name，找不到则去类中找，类也找不到就找父类
        s1.name='牛榴弹'  
        print(s1.name)
        print(s1.__dict__)  #{'name': '牛榴弹', 'age': '男', 'sex': 18}
    
    
    
    对象的用法
        执行了__init__    s1.name = "李坦克"  产生了 对象的名称空间    名称空间用来放名字
        
        查 s2.name #s2.__dict__['name']
        改 s2.name='王三炮' #s2.__dict__['name']='王三炮'
        增 s2.course='python' #s2.__dict__['course']='python'
        删 del s2.course #s2.__dict__.pop('course')
    
#传智
     
类属性 实例属性 
    class Tool(object):

    #类属性
    num = 0

    #方法
    def __init__(self, new_name):
        #实例属性
        self.name = new_name
        #类属性+=1
        Tool.num += 1


    tool1 = Tool("铁锹")
    tool2 = Tool("工兵铲")
    tool3 = Tool("水桶")
    
    print(Tool.num)

实例方法 类方法 静态方法

    class Game(object):
    
        #类属性
        num = 0
    
        #实例方法
        def __init__(self):
            #实例属性
            self.name = "laowang"
    
        #类方法
        @classmethod
        def add_num(cls):
            cls.num = 100
    
        #静态方法
        @staticmethod
        def print_menu():
            print("----------------------")
            print("    穿越火线V11.1")
            print(" 1. 开始游戏")
            print(" 2. 结束游戏")
            print("----------------------")
    
    game = Game()
    #Game.add_num()#可以通过类的名字调用类方法
    game.add_num()#还可以通过这个类创建出来的对象 去调用这个类方法
    print(Game.num)
    
    #Game.print_menu()#通过类 去调用静态方法
    game.print_menu()#通过实例对象 去调用静态方法
    






     __str__()方法
    
    class Cat:
        """定义了一个Cat类"""
    
        #初始化对象
        def __init__(self, new_name, new_age):
            self.name = new_name
            self.age = new_age
    
        def __str__(self):
            return "%s的年龄是:%d"%(self.name, self.age)
    
        #方法
        def eat(self):
            print("猫在吃鱼....")
    
        def drink(self):
            print("猫正在喝kele.....")
    
        def introduce(self):
            print("%s的年龄是:%d"%(self.name, self.age))
    
    #创建一个对象
    tom = Cat("汤姆", 40)
    
    lanmao = Cat("蓝猫", 10)
    
    
    print(tom)
    print(lanmao)
    
    
    私有方法 
    
    class Dog:
    
        #私有方法
        def __send_msg(self):
            print("------正在发送短信------")
    
        #公有方法
        def send_msg(self, new_money):
            if new_money>10000:
                self.__send_msg()
            else:
                print("余额不足,请先充值 再发送短信")
    
    dog = Dog()
    dog.send_msg(100)
    
    多态
    
    class Dog(object):
        def print_self(self):
            print("大家好,我是xxxx,希望以后大家多多关照....")
    
    class Xiaotq(Dog):
        def print_self(self):
            print("hello everybody, 我是你们的老大,我是xxxx")
    
    
    def introduce(temp):
        temp.print_self()
    
    
    dog1 = Dog()
    dog2 = Xiaotq()
    
    introduce(dog1)
    introduce(dog2)
    






封装
用双下划线开头的方式将属性隐藏起来（设置成私有的）
class A:
    def fa(self):
        print('from A')
    def test(self):
        self.fa()

class B(A):
    def __fa(self):
        print('from B')

b=B()
b.test()
封装不是单纯意义的隐藏   目的是隔离复杂度
电视机本身是一个黑盒子，隐藏了所有细节，但是一定会对外提供了一堆按钮，这些按钮也正是接口的概念，所以说，封装并不是单纯意义的隐藏！！！



继承

    继承是一种创建新类的方式  新类可以继承一个或多个父类  python支持多继承  父类又称基类 超类  子类又称派生类
    
    子类会“”遗传”父类的属性，从而解决代码重用问题
    
    继承分为 单继承 和 多继承   
    
    class f1:   #定义父类
        pass
    
    class f2:   #定义父类
        pass
    
    class z1(f1):  单继承        自己有就用自己的  自己没有再继承
        pass
    
    class z2(f1,f2):  多继承
        pass
    
    查看继承
    __base__只查看从左到右继承的第一个子类，__bases__则是查看所有继承的父类
    
    python3中统一都是新式类  都默认继承object
    

    继承与抽象（先抽象再继承）
        继承描述的是子类与父类之间的关系，是一种什么是什么的关系。要找出这种关系，必须先抽象再继承
        
        抽象 = 抽取比较像的部分 当做一 类   
        
        继承：是基于抽象的结果，通过编程语言去实现它，肯定是先经历抽象这个过程，才能通过继承的方式去表达出抽象的结构。
        
        class Hero:
            def __init__(self,nickname,aggressivity,life_value):
                self.nickname=nickname
                self.aggressivity=aggressivity
                self.life_value=life_value
        
            def attack(self,enemy):
                enemy.life_value-=self.aggressivity
        class Garen(Hero):
            pass
        
        class Riven(Hero):
            pass
        
        g1=Garen('草丛伦',100,300)
        r1=Riven('锐雯雯',57,200)
        
        print(g1.life_value)
        r1.attack(g1)
        print(g1.life_value)
    
    
        先找本地  找不到 往上找    
        class Foo:
            def f1(self):
                print('Foo.f1')
        
            def f2(self):
                print('Foo.f2')
                self.f1()          #self=bar() 所以调用bar的f1
        
        class Bar(Foo):
            def f1(self):
                print('Foo.f1')
        
        
        b=Bar()
        b.f2()

    继承原理 
        顺序 
    
        class A(object):
        def test(self):                                      5
            print('from A')                                  A
                                              
    class B(A):
        def test(self):                       3                                5
            print('from B')                   B                                C                    
    
    class C(A):
        def test(self):
            print('from C')
                                              2                                4
    class D(B):                               D                                E
        def test(self):
            print('from D') 
    
    class E(C):
        def test(self):
            print('from E')                                   1
    
    class F(D,E):                                             F
        # def test(self):
        #     print('from F')
        pass
    f1=F()
    f1.test()
    print(F.__mro__) #只有新式才有这个属性可以查看线性列表，经典类没有这个属性
    
    #新式类继承顺序:F->D->B->E->C->A
    新式类广度优先
    经典类深度优先
    
    
    子类中调用父类的方法

    第一种 指名道姓，即父类名.父类方法()
    
    class Vehicle:  # 定义交通工具类
        Country = 'China'
        
        def __init__(self, name):
            self.name = name
        
        def run(self):
            print('开动啦...')
    class Subway(Vehicle):  # 地铁
        
        def __init__(self, name):
            Vehicle.__init__(self, name)
        
        def run(self):
            print('地铁%s号线欢迎您' % "13")
            Vehicle.run(self)
    
    line13 = Subway('中国地铁')
    line13.run()
    
    
    class A:
        def __init__(self):
            print('A的构造方法')
    class B(A):
        def __init__(self):
            print('B的构造方法')
            A.__init__(self)
    
    
    class C(A):
        def __init__(self):
            print('C的构造方法')
            A.__init__(self)
    
    
    class D(B,C):
        def __init__(self):
            print('D的构造方法')
            B.__init__(self)
            C.__init__(self)
    
        pass
    f1=D() #A.__init__被重复调用
    
    第二种 
    super() 函数是用于 调用父类(超类)的一个方法。
    
    super 是用来解决多重继承问题的，直接用类名调用父类方法在使用单继承的时候没问题，但是如果使用多继承，会涉及到查找顺序（MRO）、重复调用（钻石继承）等种种问题。
    
    class A:
        def test(self):
            super().test()
    class B:
        def test(self):
            print('from B')
    class C(A,B):
        pass
    
    c=C()
    c.test() #打印结果:from B
    
    
    print(C.mro())

    类当参数
    
    class Animal(metaclass=abc.ABCMeta): #同一类事物:动物
        
        def talk(self):
            pass
    class Cat(Animal): #属于动物的另外一种形态：猫
        def talk(self):
            print('say miao')
    
    def func(animal): #对于使用者来说，自己的代码根本无需改动
        animal.talk()
    
    cat1=Cat() #实例出一只猫
    func(cat1) #甚至连调用方式也无需改变，就能调用猫的talk功能

组合
    class Equip: #武器装备类
        def fire(self):
            print('release Fire skill')
    
    class Riven: #英雄Riven的类,一个英雄需要有装备,因而需要组合Equip类
        camp='Noxus'
        def __init__(self,nickname):
            self.nickname=nickname
            self.equip=Equip() #用Equip类产生一个装备,赋值给实例的equip属性  类可以当值
    
    r1=Riven('锐雯雯')
    r1.equip.fire() #可以使用组合的类产生的对象所持有的方法
    
    
    1.继承的方式
    
    通过继承建立了派生类与基类之间的关系，它是一种'是'的关系，比如白马是马，人是动物。
    
    当类之间有很多相同的功能，提取这些共同的功能做成基类，用继承比较好，比如老师是人，学生是人
    
    2.组合的方式
    
    用组合的方式建立了类与组合的类之间的关系，它是一种‘有’的关系, 瑞雯雯有武器


抽象类

抽象类是一个特殊的类，它的特殊之处在于只能被继承，不能被实例化
 如果说类是从一堆对象中抽取相同的内容而来的，那么抽象类就是从一堆类中抽取相同的内容而来的，内容包括数据属性和函数属性。

抽象类中只能有抽象方法（没有实现功能），该类不能被实例化，只能被继承，且子类必须实现抽象方法。这一点与接口有点类似，但其实是不同的

抽象类与接口

抽象类的本质还是类，指的是一组类的相似性，包括数据属性（如all_type）和函数属性（如read、write），而接口只强调函数属性的相似性。

抽象类是一个介于类和接口直接的一个概念，同时具备类和接口的部分特性，可以用来实现归一化设计 




