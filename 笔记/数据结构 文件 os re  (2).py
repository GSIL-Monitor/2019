

pycharm 激活  https://jetlicense.nss.im/
 
漂亮汤
urllib
字符串
变量
字典
列表array
元组
集合
迭代器
数据结构
输入输出
文件
内存读写
序列化 

迭代器
os模块
sys
模块
包
断言调试
正则re
xpath

进程

第一阶段: 《头发护理》《算法导论》《软件工程》《数据结构》《编译原理》  
第二阶段: 《莫生气》《佛经》《老子》《思想政治》《论持久战》  
第三阶段: 《颈椎病康复指南》《腰椎间盘突出日常护理》《心脏病的预防与防治》《高血压降压宝典》《强迫症的自我恢复》  
第四阶段: 《迷恋》 《自私与贪婪》 《走向奴役之路》  
第五阶段: 《活着》

 

对象调用方法
 








http---------------------------------------------------


请求报文是由请求方法 



requests  



    r = requests.get('https://www.baidu.com/')   获取网址 
    r.text  str文本
    r.content   二进制内容
    
    r.headers['User-Agent']
    
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
    
    
    cookies  通过在客户端记录的信息确定用户的身份
    
    session  通过在服务器端记录的信息确定用户的身份
    
    
    主要
    
    请求
    headers  显示客户端发送到服务器的http请求 的 头 包含了客户端信息  cookies 传输状态
    textview 显示post 请求的body部分为文本
    webforms 显示请求的get参数 和 post body 内容
    hexview  用十六进制数据显示请求
    auth     显示响应头中的代理和授权信息
    raw      将整个请求显示为纯文本
    json     显示json格式文件
    xml      用分级xml树来显示响应
    
    响应
    transformer    显示响应的编码信息
    header         用分级视图显示响应的头
    textview       文本显示
    imageview      显示响应图片
    hexiew         十六进制显示
    auth           显示响应头中的代理和授权信息
    privacy        显示此请求私密的跑p3p信息
    
    
    
    
    
    
    响应
    
    HTTP/1.1 200 OK ：状态行，此处表示请求成功
    
    Content-Length：内容长度，浏览器可以持久进行HTTP连接才需要这个数据
    ：可以请求网页实体的一个或多个子范围字段
    
    Content-Encoding：文档的编码方法，利用gzip方法能有效减少html文件的下载时间
    
    Content-Type：后面的文档属于什么MIME（消息类型的因特网标准）类型
    
    Date：当前的GMT时间
    
    Etag：请求变量的实体标签的当前值
    
    Keep-Alive：永久连接，使客户端与服务器之间的连接持续有效
    
    Last-Modified：请求资源的最后修改时间
    
    Server：web服务器软件名称
    
    Vary：告诉下游代理是使用缓存响应还是从原始服务器相应
    
    X-Via：告诉代理客户端响应是通过哪里发送的
    X-Client-IP': '111.19.50.239'
      
    X-UA-Compatible :  IE=Edge     网页的兼容性模式设置
    
    Set-Cookie	
    设置和页面关联的Cookie。
    Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论 
       
    Location	
    表示客户应当到哪里去提取文档。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。
      
    
    Refresh的：N秒之后刷新本页面或访问指定页面
    而不是"每隔N秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个Refresh头，而发送204状态代码则可以阻止浏览器继续刷新，不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。 
    
     
    
      
    X-Content-Type-Options :  nosniff      文档类型
      
     
    报头
     
    
    Proxy-Connection：代理服务器连接
    
    Cookie：HTTP请求发送时，会将保存在该请求域名下所有的cookie值发送给服务器。
    
    Accept：告诉服务器，客户端支持的数据类型。

    
    Accept-Charset：告诉服务器，客户端采用的编码。
    
    
    
    Accept-Encoding：告诉服务器，客户机支持的数据压缩格式。
    
     
    
    Accept-Language：告诉服务器，客户机的语言环境。
    
    
    Accept-Ranges	可以请求网页实体的一个或者多个子范围字段
    
    
    Host：客户机通过这个头告诉服务器，指定请求的服务器的域名和端口号   Host: www.zcmhi.com
    
     
    
    If-Modified-Since:客户机通过这个头告诉服务器，资源的缓存时间。
    
     
    
    Referer:客户机通过这个头告诉服务器，它是从哪个资源来访问服务器的。（一般用于防盗链）
    
     
    
    User-Agent:客户机通过这个头告诉服务器，客户机的软件环境。
    
     
    
    Cookie：客户机通过这个头告诉服务器，可以向服务器带数据。
    
     
    
    Connection：客户机通过这个头告诉服务器，请求完后是关闭还是保持链接。
    
     
    
    Date：客户机通过这个头告诉服务器，客户机当前请求时间。
    
     
    
    响应头
     
    
    Location:这个头配合302状态码使用，告诉用户端找谁。
    
    
    Server:服务器通过这个头，告诉浏览器服务器的类型
    
    。
    Content-Encoding:服务器通过这个头，告诉浏览器数据采用的压缩格式。
    
    
    Content-Length:服务器通过这个头，告诉浏览器回送数据的长度。
    
    
    Content-Language：服务器通过这个头，告诉服务器的语言环境。
    
    
    Content-Type:服务器通过这个头，回送数据的类型
    
    
    Last-Modified:服务器通过这个头，告诉浏览器当前资源的缓存时间。
    
    
    Refresh:服务器通过这个头，告诉浏览器隔多长时间刷新一次。
    
    
    Content-Disposition:服务器通过这个头，告诉浏览器以下载的方式打开数据。
    
    
    Transfer-Encoding:服务器通过这个头，告诉浏览器数据的传送格式。
    
    
    ETag:与缓存相关的头。
    
    
    Expires:服务器通过这个头，告诉浏览器把回送的数据缓存多长时间。-1或0不缓存。
    
    
    Cache-Control和Pragma：服务器通过这个头，也可以控制浏览器不缓存数据。
    
    
    Connection:服务器通过这个头，响应完是保持链接还是关闭链接。
    
    
    Date:告诉客户机，返回响应的时间。
    
    Authorization	HTTP授权的授权证书
    
    Cache-Control: no-cache  指定请求和响应遵循的缓存机制
    
    
    From: user@email.com  发出请求的用户的Email
    
    If-Match	只有请求内容与实体相匹配才有效
    
    If-Modified-Since	如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码
    
    If-None-Match	如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变
    
    Range	只请求实体的一部分，指定范围
    
    
    Proxy-Authorization	连接到代理的授权证书
    
    
    
    
    
    
    r.cookies  
    >>> s=requests.Session()
    >>> s.get( http://httpbin.org/cookies/set/number/123456789')
    <Response [200]>
    >>> r=s.get('http://httpbin.org/cookies')
    >>> print(r.text)
    {
      "cookies": {
        "number": "123456789"
      }
    }
    
    
    
    
    
    r.encoding  编码
    
     r.status_code 状态码
    
     r.json
    
     json_str = json.dumps(data)   字典转字符串
     data2 = json.loads(json_str)  字符串转字典
    
    
     # 写入 JSON 数据
    with open('data.json', 'w') as f:
        json.dump(data, f)
    
    # 读取数据
    with open('data.json', 'r') as f:
        data = json.load(f)
    
    语句体（with-body）：with 语句包裹起来的代码块，在执行语句体之前会调用上下文管
    
    理器的 __enter__() 方法，执行完语句体之后会执行 __exit__() 方法。
    
    
    
    写入文本
    
    with open(name,mode,encoding) as file：
      file.write()
    
    name：包含文件名称的字符串，比如：‘xiaozhu.txt’; 
    mode：决定了打开文件的模式,只读/写入/追加等; 
    encoding：表示我们要写入数据的编码，一般为 utf-8 或者 gbk ; 
    file：表示我们在代码中对文件的命名。
    
    
    
    
    
     r = requests.get('https://github.com/timeline.json', stream=True)
     r.raw.read(10)
     
    
    
     r.url
    
     r.history
    
    
    
    
    url 传参
    
     payload = {'key1': 'value1', 'key2': ['value2', 'value3']}
    
     r = requests.get('http://httpbin.org/get', params=payload)  效果相同 
     print(r.url)
    result：http://httpbin.org/get?key1=value1&key2=value2&key2=value3
       
    r = requests.get('http://httpbin.org/get?key1=value1&key2=value2&key2=value3')  效果相同 
    r.text
    
    
    
    定制请求头
    
     url = 'https://api.github.com/some/endpoint'
     headers = {'user-agent': 'my-app/0.0.1'}
    
     r = requests.get(url, headers=headers)
    
    
    
    
    
    
    
    
     
    
    
    








-----------------------------------漂亮汤-----------------------


    漂亮汤     string
    
    
    class="boldest"
    获取boldest  tag['class']
    
    设置  tag['class'] = 'verybold'
    
    删除
    del tag['class']
    
    
    soup.body.b     返回第一个匹配结果     
    # <b>The Dormouse's story</b>
    
    
    
            标签名   属性     直接子节点  同content
    find_all( name , attrs , recursive , string , **kwargs )  方法搜索当前tag的所有tag子节点,并判断是否符合过滤器的条件
    name 参数   
    soup.find_all("title")
    
    find_all(text="文本节点")
    
    soup.find_all(id='link2')
    # [<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]
    
    
    获取属性src
    .find("img")["src"]
    
    Ss= soup.find_all("img")
    for i in Ss:
    	print(i["src"])
    
    
    
    li里面 的 <div class="pic">
    
    li.find('div' , {'class':'pic'})
    
    
    
    
    <tr class="row">                标签     类
                       soup.find_all('tr', 'row')
    
    
    
    
    
    find.find_all  一个大的里面的小的
    soup.find(class_='grid_view').find_all('li')
    
    
    
    
    attrs参数
    data_soup.find_all(attrs={"data-foo": "value"})
    # [<div data-foo="value">foo!</div>]
    
    
    模糊搜索 title   只用于class
    soup.find_all(class_=re.compile("itl"))
    # [<p class="title"><b>The Dormouse's story</b></p>]
    
    
    找所有的<a> <b> 
    soup.find_all(["a", "b"])
    # [<b>The Dormouse's story</b>,
    #  <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
    
    
    soup.find_all() 获取所有 和soup.select()一样都是列表list，
    而soup.find()只返回第一个符合条件的结果，
    所以soup.find()后面可以直接接.text或者get_text()来获得标签中的文本。
    
    
    
    
    匹配 开始 结束 任意  ^  $  *
    soup.select('a[href^="http://example.com/"]')
    # [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
    #  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
    #  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
    
    soup.select('a[href$="tillie"]')
    # [<a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
    
    soup.select('a[href*=".com/el"]')
    # [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>]
    
    获取<ul>里的<li>  
    for ul in soup.select('ul'):
    	print(ul.select('li'))
        
        获取属性值
    	print(ul['id'])
    
    
    匹配有属性的语句
    soup.select('a[href]')
    
    
    子节点
    soup.select("head > title")
    
    查找 class
    soup.select(".sister")
    soup.select("[class~=sister]")
    
    查找 id
    
    soup.select("#link1")
    
    soup.select("a#link2")
    
    
    
    
    
    
    
    css 选择器
    
    
    
    
    
    元素选择器
    
    通配符  *  选择所有
    
    element  元素选择器 
    
    #id id选择符
    
    .class  类选择符
    
    
    
    关系选择
    
    包含关系   E F   被e包含的所有f元素
    
    子选择     E>F   只选择子元素
    
    相邻       E+F           
    
    
    属性选择
    
    
    a[target]  选择所有带target的a标签
    [target=-blank]  选择所有使用[target=-blank]的元素
    [title~=flower]	选择标题属性包含单词"flower"的所有元素
    
    
    a[src^="https"]  选择以https开头的属性
    a[src$=".pdf"]	 选择以pdf结尾的属性
    a[src*="runoob"] 选择属性值中包含runoob的所有元素
    
    
    
    伪类选择器
    
    a：link          未访问连接
    
    a:visited       访问过的连接
    a：active        鼠标点击时
    a：hover         鼠标悬浮时
    input：focur     获取焦点时
    p:first-letter	 选择每一个<P>元素的第一个字母	
    p:first-line	 选择每一个<P>元素的第一行	
    p:first-child	 指定只有当<p>元素是其父级的第一个子级的样式。
    p:before         之前
    p:after          之后
    
    p:first-of-type	选择每个p元素是其父级的第一个p元素	
    p:last-of-type	选择每个p元素是其父级的最后一个p元素	
    p:only-of-type	选择每个p元素是其父级的唯一p元素	
    p:only-child	选择每个p元素是其父级的唯一子元素	
    p:nth-child(2)	选择每个p元素是其父级的第二个子元素	
    p:nth-last-child(2)	选择每个p元素的是其父级的第二个子元素，从最后一个子项计
    
    
    ：target   指向当前激活的元素
    ：enabled   启用的
    ：disabled  禁用的
    
    
    
    
    
    
    
    
    
    ul.get_text()
    
    
    find_parents()  
    find_parent()
    
    find_next_siblings()   
    find_next_sibling()
    
    
    find_previous_siblings() 
    find_previous_sibling()
    
    find_all_next() 
    find_next()
    
    find_all_previous() 
    find_previous()
    
    
    找所有的tag.name
    for tag in soup.find_all(True):
        print(tag.name)
    
    
    
    
    
    for link in soup.find_all('a'):
        print(link.get('href'))
        # http://example.com/elsie
        # http://example.com/lacie
        # http://example.com/tillie
    
    
    
    内容
    tag=soup.p
    print(tag.contents[0])
    #The Dormouse's story
    
    tag.contents
    ["The Dormouse's story"]
    
    tag.children           子节点
    tag.descendants        孙节点
    tag.parent             父节点
    
    tag.next_sibling       下一个兄弟节点    
    tag.previous_sibling   上一个兄弟节点   
    
    
    .next_element          下一个元素节点
    .previous_element      上一个元素节点
    
    
    迭代
    .next_elements    .previous_elements  元素迭代
    
    .next_siblings    .previous_siblings 属性可以对当前节点的兄弟节点迭代输出:
    
    
    tag.string  只有一个子节点用string
    
    get_text()  获取内容  无视嵌套
    
    strings 循环
    r = requests.get('https://www.shanbay.com/wordlist/189943/551617/?page=1')
    soup = BeautifulSoup(r.text, "lxml" )
    for string in soup.strings:
        print(string)
    
    
    soup.a的下一个
    for sibling in soup.a.next_siblings:
        print(repr(sibling))
    
    
    
    
    soup.find(id="link3")的上一个
    
    for sibling in soup.find(id="link3").previous_siblings:
        print(repr(sibling))
    
    
    元素迭代
    for element in last_a_tag.next_elements:
        print(repr(element))
    
    
    
    
    import re
    for tag in soup.find_all(re.compile("^b")):
        print(tag.name)
    
    
    insert_before() 和 insert_after()方法在tag前后插入内容
    
    
    soup = BeautifulSoup("<b>stop</b>")
    tag = soup.new_tag("i")
    tag.string = "Don't"
    soup.b.string.insert_before(tag)
    soup.b
    # <b><i>Don't</i>stop</b>




 




urllib 
    
    headers = {
        "Host" : "www.renren.com",
        "Connection" : "keep-alive",
        #升级不用管
        #"Upgrade-Insecure-Requests" : "1",  升级不用管
        #User-Agent 一定要写  我是浏览器
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
        
        "Accept" : "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        #压缩格式  一定不能写  因为 不能处理
        #"Accept-Encoding" : "gzip, deflate, sdch",
        "Cookie" : "anonymid=jd3yw4aijuvu4a; depovince=GW; _r01_=1; JSESSIONID=abcY7fZRBthzK7dWlGpfw; ick_login=c737d712-496f-4cb2-bd34-65227f7ab2c6; t=d5ae462275092615ad3957a840a9d87d2; societyguester=d5ae462275092615ad3957a840a9d87d2; id=963689922; xnsid=b0557f9b; jebecookies=9e38bb7e-eb74-49b8-933b-df9984972f1a|||||; ver=7.0; loginfrom=null; jebe_key=038a634f-f5de-4ce2-8df0-1a709e4b4086%7C499428fb3d57ae49d69a1a7e3252f95d%7C1517460035605%7C1%7C1517460037174; wp_fold=0",
        #语言可以不写
        "Accept-Language" : "zh-CN,zh;q=0.9",
    }
    
    
    r = urllib.request.urlopen("http://www.baidu.com")
    
    
    
    
    r.status   状态码
      
    r.reason   返回ok
      
    r.getheaders   获取头
    r.getheaders('server')
    
    r.geturl  返回实际URL
    
    r.info    报头
    
    r.getcode   状态
    
    r.read()    读取
    
    
    
    urlopen(url,data,timeout)
    第一个参数url即为URL，第二个参数data是访问URL时要传送的数据，第三个timeout是设置超时时间。
    有data 就是post    没有data就是get
    第二三个参数是可以不传送的，data默认为空None，timeout默认为 socket._GLOBAL_DEFAULT_TIMEOUT
    
    
    urllib.request.urlopen('http://www.baidu.com') 向指定的URL地址发送请求  返回服务器响应的类文件件
    
    
    import urllib.parse
    import urllib.request
    response = urllib.request.urlopen('http://www.baidu.com')
    print(response.read().decode('utf-8'))
    
    data = bytes(urllib.parse.urlopen({'word':'hello'}),encode)
    response = urllib.request.urlopen('http://httpbin.org/post',data=data)
    print(response.read())
    
    type(response)






算术运算符
+ -  *  /  %  //取整   **幂

比较运算符
==等于  ！=   >  <   <=  >= 

赋值运算符
=   +=  -=   *=    /=   %=   **=    //=

身份运算符
is      is not

成员运算符
in      not in


逻辑运算符
and  or  not 






------------------------------字符串------------------------------
    
    
    切片
    
    s.split()       通过指定的分隔符对字符串进行切片 返回列表                                                                        
    
    s = "1.2.3.4.5.6.7"                             
    s.split(".",2)[2]   #用.分割 两次 取第三项
    结果：'3.4.5.6.7'
    
    s= "123456789"
    str[0:3] #截取第一位到第三位的字符
    str[:] #截取字符串的全部字符
    str[6:] #截取第七个字符到结尾
    str[:-3] #截取从头开始到倒数第三个字符之前
    str[2] #截取第三个字符
    str[-1] #截取倒数第一个字符
    str[::-1] #创造一个与原字符串顺序相反的字符串
    str[-3:-1] #截取倒数第三位与倒数第一位之前的字符
    str[-3:] #截取倒数第三位到结尾
    str[:-5:-3] #逆序截取
    s[-1:-3:-1]  98
    s[-3:-1]     78
    
    替换
    s.replace(" ","")   替换  空格替换成""
    
    遍历a-z
    echo{a..z}
    'abcdefghijklmnopqrstuvwxyz'
    for i in range(97,123):print chr(i)
    
    
    
    左右对齐
    rjust()、ljust()  center()
        >>> 'Hello World'.rjust(20)
        '           Hello World' 
        
        >>> 'Hello'.ljust(20)
        'Hello                 ' 
        
        >>> 'Hello'.center(20)
        '         Hello        ' 
        
        >>> 'Hello'.center(20, '=')
        '=======Hello======='
    
        打印表格
            def print (itemsDict, left, right):
                print('打印项目'.center(left + right, '-'))
                for k, v in itemsDict.items():
                    print(k.ljust(left, '.') + str(v).rjust(right))
            Items = {'sandwiches': 4, 'apples': 12, 'cups': 4, 'cookies': 8000}
            print(Items, 12, 5)
            print(Items, 20, 6
    
        结果：
            ---PICNIC ITEMS--
            sandwiches..    4
            apples......   12
            cups........    4
            cookies..... 8000
            -------PICNIC ITEMS-------
            sandwiches..........     4
            apples..............    12
            cups................     4
            cookies.............  8000
    
    
    
    is 是不是 系列     帐号和密码表单 用while  输入正确  就下一项
    
    s = “shi yan lou”
    s.title()      返回字符串的标题版本
    s.upper()      返回字符串的全部大写版本
    s.lower()      返回字符串的全部小写版本
    s.swapcase()   返回字符串大小写交换后的版本
    s.isalnum()    只有数字和字母
    s.isalpha()    只有字母
    s.isdigit()    只有数字
    s.islower()    只有小写
    s.isupper()    只有大写
    s.istitle()    是否为标题样式
    isnumeric()    只包含数字字符，则返回 True，否则返回 False  这种方法是只针对unicode对象。
    isspace()      只包含空白
    isdecimal()    只包含十进制字符
    
        a = "123"
        a.isnumeric()  报错
        a.isdigit()    True
        
        a = u"123"
        a.isnumeric()  True 
        a.isdigit()    True
        
        isdigit()
        True: Unicode数字，byte数字（单字节），全角数字（双字节），罗马数字
        False: 汉字数字
        Error: 无
        
        isdecimal()
        True: Unicode数字，，全角数字（双字节）
        False: 罗马数字，汉字数字
        Error: byte数字（单字节）
        
        isnumeric()
        True: Unicode数字，全角数字（双字节），罗马数字，汉字数字
        False: 无
        Error: byte数字（单字节）
    
    检查 开始   和    结束 
    startswith()  endswith()
    
     'Hello world!'.startswith('Hello')
      True
    
    
    
    join   合并
    
    s1 = "-"
    s2 = ""
    seq = ("r", "u", "n", "o", "o", "b") # 字符串序列
    print (s1.join( seq ))
    print (s2.join( seq ))
    以上实例输出结果如下：
    
    r-u-n-o-o-b
    runoob
    
    
    strip()  删除空白    rstrip()  lstrip() 
    
    >>> s = "www.foss.in" 
    >>> s.lstrip("cwsd.") #删除在字符串左边出现的'c','w','s','d','.'字符
    'foss.in'
    >>> s.rstrip("cnwdi.") #删除在字符串右边出现的'c','n','w','d','i','.'字符
    'www.foss'
    
      
           
    find   文本搜索 
    
    >>>info = 'abca'
    >>> print(info.find('a'))      # 从下标0开始，查找在字符串里第一个出现的子串，返回结果：0
    0
    >>> print(info.find('a', 1))   # 从下标1开始，查找在字符串里第一个出现的子串：返回结果3
    3
    >>> print(info.find('3'))      # 查找不到返回-1
    -1
    
    
    
    
    剪贴板拷贝粘贴 
    
    pyperclip 模块   有 copy()和 paste()函数
    
    
    
    
    
    原始字符串
    
    在字符串开始的引号之前加上 r，完全忽略所有的转义字符  在正则中常用
    
    注释  """    """
    
    
    
    upper()  lower()  没有改变字符串本身  返回 新字符串
    
    
    制表符
    
    "空格（‘ ’）、换页（‘\f’）、换行（‘\n’）、回车（‘\r’）、水平制表符（‘\t’）、垂直制表符（‘\v’）"
    

变量-----------------------------------------------------------------------------------

变量名 大小写敏感

支持增量赋值 n=n*10  == n*=10
不支持 自加1 Python 会将 --n 解释为-(-n) 从而得到 n , 同样 ++n 的结果也是 n

数字
 支持五种基本数字类型 
 int 有符号整数
 long 长整数
 bool 
 float
 complex



字典---------------------------------------------------------------------------------------------------------------
    dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
    增
    dict['hight'] = 177
    删
    del dict['name']    删除键'name'
    dict.clear()        清空字典
    del dict   
    
    改
    dict['age'] = 10
    查
    print("name" in dict)
    print(dict['name'])
    
    
    字典的内置函数
    dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
    len(dict)
    str(dict)
    type(dict)
    
    方法
    
    dict.clear                          删除所有元素
    
    dict.copy                           浅复制
      
    dict.fromkeys                       创建新字典
    
    dict.get(key)                       获取指定的键
    
    key in dict        
    
    dict.items()                        列表形式   常用来遍历
     
    dict.keys()                         所有的键  列表形式
    
    dict.vaules()                       所有值    列表形式
    
    dict.update(dict2)                  把 字典2 更新 到 字典1    更新改变原值  添加原值不变
    
    dict.setdefault(key,default)        键不存在时 设置新值
    
    dict.pop("name")                    删除指定值
    
    
    dict = {'Name': 'Runoob', 'Age': 7}
    for i,j in dict.items():
        print(i, ":", j)
    
    Name : Runoob
    Age : 7
    
    
    


列表array --------------------------------------------------------------------------------------------------------

    增
    list1.extend(list2)          扩展列表
    
    list.append(obj)             追加
    
    list.insert(1, 'Baidu')      位置  内容
    
    删
    
    list.pop()                   删除指定元素
    
    list.remove(obj)             删除第一个匹配
    
    del list[]
    
    改
    
    list1[0] = '0'  #元素赋值 
    
    查
    
    list1.index('a')             查找元素下标
    
    
    去重
    
    l1 = ['b','c','d','c','a','a']  
    l2 = list(set(l1))  
    
    
    排序
    list.sort([func])            对原列表进行排序
    
    反序
    list.reverse()               反向列表中元素
    
    
    list.count(obj)              计算出现次数




tuple  元组------------------------------------------------------

    创建元组 tup = ("google",)    只有一项时 要加逗号
    
    tup1 = ('Google', 'Runoob', 1997, 2000)
    tup2 = (1, 2, 3, 4, 5, 6, 7 )
    查
    print(tup1[0])  #google
    删 
    del tup1
    
    不能改  能组合
    tup3 = tup1 + tup2;
    print (tup3)
    
     不能 增加   没有 append 或 extend 方法。
     不能 删除   没有 remove 或 pop 方法。
    
    
    for i in range(100):
        print(b, end=',')
   
set  集合----------------------------------------------

    增
    name = set(['Tom','Lucy','Ben'])
    name.add('Juny')
    print(name)
     
    #输出：{'Lucy', 'Juny', 'Ben', 'Tom'}
    
    
    删
    
    n = set([2,3,4,5])
    n.remove(2)
    print(n)
     
    # 输出：{3, 4, 5}
    
    n = set([2,3,4])
    n.discard(3)
    print(n)
     
    #输出：{2, 4}
    
    name = set(['Tom','Lucy','Ben'])
    name.clear()
    print(name)
     
    #输出：set()
    
    
    len(s)                                               集合基数：集合s中元素个数
    set([obj])                                           可变集合工厂函数：ojb必须是支持迭代的，由obj中的元素创建集合，否则创建一个空集合
    frozenset([obj])                                     不可变集合工厂函数：执行方式好set()方法相同，但它返回的是不可变集合
                                        obj in s         成员测试
                                        obj not in s     非成员测试
                                        s == t           等价测试
                                        s != t           不等价测试
                                        s &lt; t        （严格意义上）子集测试
    s.issubset(t)                       s &lt;= t        子集测试
                                        s > t           （严格意义上）超集测试
    s.issuperset(t)                     s &gt;= t        超集测试
    s.union(t)                          s | t            合并操作
    s.intersec-tion(t)                  s & t            交集操作
    s.difference(t)                     s – t            差分操作
    s.symmetric_fifference(t)           s ^ t            对称差分操作
    s.copy()                                             赋值操作：返回s的（浅复制）副本
                                                          
    s.update(t)                         s |= t           （Union）修改操作：将t中的成员添加s
    s.intersection_update(t)            s &= t           交集修改操作：s中仅包括s和t中共有的成员
    s.difference_update(t)              s -= t           差修改操作：s中仅包括属于s但不属于t的成员
    s.symmetric_difference_ update(t)   s ^= t           对称差分修改操作：s中包括仅属于s或仅属于t的成员
    s.add(obj)                                           加操作：将obj添加到s
    s.remove(obj)                                        删除操作
    s.discard(obj)                                       丢弃操作：remove()的友好版本，如果s中存在ojb，从s中删除它
    s.pop()                                              Pop操作：移除并返回s中的任意一个值
    s.clear()                                            清除操作：移除s中的所有元素
    
















数据结构----------------------------------------------------------------------

    把列表当堆栈使用  
    >>> stack = [3, 4, 5]
    >>> stack.append(6)
    >>> stack.append(7)
    >>> stack
    [3, 4, 5, 6, 7]
    >>> stack.pop()
    7
    
    
    列表推导式
    
    >>> vec = [2, 4, 6]
    >>> [3*x for x in vec]
    [6, 12, 18]
    
    
    列表中每一项调用方法
    l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    q=[]
    for i in l:
         q.append(repr(i))
    
    双循环
    >>> vec1 = [2, 4, 6]
    >>> vec2 = [4, 3, -9]
    >>> [x*y for x in vec1 for y in vec2]
    [8, 6, -18, 16, 12, -36, 24, 18, -54]
    
    
    字典推导式
    
    {x: x**2 for x in (2, 4, 6)}
    {2: 4, 4: 16, 6: 36}
    
    
    
    dict(sape=4139, guido=4127, jack=4098)
    {'sape': 4139, 'jack': 4098, 'guido': 4127}
    
    
    
    for i, v in enumerate(['tic', 'tac', 'toe']):
    ...     print(i, v)
    0 tic
    1 tac
    2 toe
    
    
    先变成去重 再排序
    
    for f in sorted(set(basket)):
    ...     print(f)


输入输出--------------------------------------------------------------

    格式化 format 
    
    基本语法是通过{} 和 ：来代替 % 
    
    
    不设置指定位置，按默认顺序
    "{} {}".format("hello", "world")    
    'hello world'
    
    
    设置指定位置
    "{1} {0} {1}".format("hello", "world")  
    'world hello world'
    
    指定name url
    "网站名：{name}, 地址 {url}".format(name="菜鸟教程", url="www.runoob.com")
    
    
    通过列表索引设置参数
    my_list = ['菜鸟教程', 'www.runoob.com']
    print("网站名：{0[0]}, 地址 {0[1]}".format(my_list))  # "0" 是必须的
    
    
    table = {'Google': 1, 'Runoob': 2, 'Taobao': 3}
    for name, number in table.items():
       print('{0:10} ==> {1:10d}'.format(name, number))
    
    数字格式化
    
    {:.2f}      保留两位小数
    {:+.2f}     带符号保留小数点后两位  3.1415926   +3.14
    {:+.2f}     带符号保留小数点后两位 -3.1415926   -3.14
    {:.0f}      不带小数点
    {:0>2}      数字补0 填充左边 宽度为2
    {:x<4d}     数字补x 填充右边 宽度为4
    {:,}        以逗号分隔              1000000    1,000,000
    {:>10d}     右对齐(宽度为10)
    {:<10d}     左对齐(宽度为10)
    {:^10d}     中对齐(宽度为10)
    
    
    '{:b}'.format(11)   1011         
    '{:d}'.format(11)   11      
    '{:o}'.format(11)   13          
    '{:x}'.format(11)   b          
    '{:#x}'.format(11)  0xb              
    '{:#X}'.format(11)  0XB                   
    
     b、d、o、x 分别是二进制、十进制、八进制、十六进制。
    使用大括号 {} 来转义大括号
    
    print ("{} 对应的位置是 {{0}}".format("runoob"))
    runoob 对应的位置是 {0}









文件------------------------------------------------------------------

    打开关闭
    
    fo = open("foo.txt", "wb") 
    
    f.close()
    
    在磁盘上读写文件的功能都是由操作系统提供的  不允许普通程序直接操作磁盘
    
    读
    with open('test.txt','r',encoding="UTF-8") as f:
        print(f.read())          #读取文件全部内容
    with open('test.txt', 'r', encoding="UTF-8") as f:
        print(f.readlines())  # 读取文件每行内容，存入列表
    with open('test.txt', 'r', encoding="UTF-8") as f:
        print(f.readline())  # 读取文件一行内容
    with open('test.txt','rb') as f:
        print(f.read())          #字节读取模式读取文件全部内容
                                二进制模式不接受编码参数
    
    遇到 编码 错误 最简单的方式是直接忽略
    f = open('/Users/michael/gbk.txt', 'r', encoding='gbk', errors='ignore')
    
    
    
    写 
    
    with open('test1.txt','w',encoding="UTF-8") as f:
        f.write("hello world!\n")  #文本模式，需添加换行符
    
    with open('test1.txt','w',encoding="UTF-8") as f:
        f.writelines(["hello\n","world\n"])  #文本模式，需添加换行符
    
    with open('test1.txt','wb') as f:
        f.write("hello world".encode("utf-8"))  #b模式需对字符先编码
    
    with open("test1.txt",'wb') as f:
        f.writelines(["hello\n".encode("utf-8"),"world\n".encode("utf-8")]) #b模式需对字符串手动编码
    
    是否可读写
    
    import time
    f = open("1.py",'w',encoding="UTF-8") #b模式没有encoding
    print(f.writable())   #文件是否看可写
    print(f.readable())   #文件是否可读
    f.write("aa")
    f.flush()    #立刻将文件内容从内容刷入硬盘
    time.sleep(5)
    f.close()       #文件关闭，无flush时，关闭文件内容才刷入硬盘
    
    
控制光标
    with open("test.txt",'r',encoding="UTF-8") as f:
        f.seek(4,0)   #第一个参数表示移动的相对位置，第二个参数为0表示移动到文件开头，1表示就在当前位置，2表示移动到文件末尾
        print(f.read())
        print(f.tell())  #返回光标当前位置，执行为read()后为文件末尾
    #truncate为截断文件，文件必须可写，不可使用w或w+模式，会清空文件，建议使用r+或者a或a+模式
    with open("test.txt",'r+',encoding="UTF-8") as f:
        f.truncate(7)    #截取前7个字节的内容。
    
    
    
    file对象的属性
    
    file.closed 返回true如果文件已被关闭，否则返回false。
    file.mode   返回被打开文件的访问模式。
    file.name   返回文件的名称。
    file.softspace  如果用print输出后，必须跟一个空格符，则返回false。否则返回true。






https://nostarch.com/automatestuff/
zipfile

    读取 ZIP 文件
    zipobj = zipfile.ZipFile('z.zip')       打开或者新建一个zip文件对象  默认读取
    namelist()                  文件和文件夹列表
    filename()                  文件名
    getinfo()                   指定文件的详细信息
    infolist()                  所有文件的信息
    printdir()                  打印路径 修改时间 大小
    file_size()                 文件大小
    compress_size()             压缩大小
    setpassword(pwd)            设置zip文档的密码。
    writestr()                  将二进制数据直接写入到压缩文档。
    zipfile.is_zipfile('samples/archive.zip')    判断 zip文件
    zip.read('bb/cc.txt').decode('utf-8')        是字节形式.需要解码回utf-8
     
    解压


    例子：
    例子将保存在程序根目录下的txt.zip内的所有文件解压到Z:\\Setup目录： 
                  要解压的文件    保存在这里      解压密码
    ZipFile.extract(  member   [, path        [, pwd]])
    import zipfile, os
    zipFile = zipfile.ZipFile(os.path.join(os.getcwd(), 'txt.zip'))
    for file in zipFile.namelist():
        zipFile.extract(file, 'Z:\\Setup')
    zipFile.close()

    解压到目录k
    os.chdir('k:\\')
    shutil.unpack_archive('Z:\\untitled\\ming.zip')
    
    创建和添加到zip

    创建zip文件
        newZip = zipfile.ZipFile('new.zip', 'w')  
    将一个文件压缩到指定目录k
    import zipfile,os
    os.chdir('k:\\')
    # 新建压缩包，放文件进去,若压缩包已经存在，将覆盖。可选择用a模式，追加
    azip = zipfile.ZipFile('bb.zip', 'w')
    # write 将已经存在的文件复制到压缩包，包括路径中的所有文件夹 文件,压缩算法LZMA
    azip.write('Z:\\bb\\aa.txt', compress_type=zipfile.ZIP_LZMA)
    # 写入一个新文件到压缩包中，data是该文件的具体内容，可以是str或者是byte。
    # writestr是直接在压缩包里新建文件夹和文件，data参数是往该文件中写入的内容
    azip.writestr('bb\\cc.txt', data='Hello World', compress_type=zipfile.ZIP_DEFLATED)
    # 关闭资源
    azip.close()
    
    将整个文件夹添加到压缩包中 
    import zipfile,shutil,os
    azip = zipfile.ZipFile('bb.zip', 'w')
    for current_path, subfolders, filesname in os.walk(r'Z:\untitled\z'):
        print(current_path, subfolders, filesname)
        #  filesname是一个列表，我们需要里面的每个文件名和当前路径组合
        for file in filesname:
            # 将当前路径与当前路径下的文件名组合，就是当前文件的绝对路径
            azip.write(os.path.join(current_path, file))
    azip.close()
        
    
    
    遍历目录树 找到最大的文件

    import os
    for root, dirs, files in os.walk('z:\\'):
        for file in files:
            file_name = os.path.join(root, file)
            if os.path.getsize(file_name) > 1024*1024:
                print(file_name)
    
    查找指定后缀
    import os, shutil
    
    file_dir = input("请输入要查找的目录")
    file_dir = os.path.abspath(file_dir)
    file_list = []
    
    if not os.path.exists(file_dir):
        print("目录不存在")
    else:
        file_type = input("请输入要查找文件的扩展名")
        file_type = file_type.lower()
        for folder, subfolders, files in os.walk(file_dir):
            for fi in files:
                if fi.lower().endswith(file_type):
                    file_list.append(os.path.join(folder,fi))
    
    #复制
    cop = input("请输入存放文件袋目录：") 
    cop = os.path.abspath(cop)
    if not os.path.exists(cop):
        print("目录不存在")
    else:
        for file in file_list:
            shutil.copy(file,cop)
    print("ok")


    import shutil, os, re
    filedir = "Z:\\s"
    file_copy ="Z:\\e"
    
    ###使用正则表达式########
    totle = 0    #用来计算符合条件的文件数
    for n, f, file in os.walk(filedir):
        if len(file) != 0:
            filestr = ' '.join(file)
            print(filestr)
            filerex = re.findall(r'\S+.jpg|\S+.JPG', filestr)
            print(filerex)
            if len(filerex) != 0:
                for i in filerex:
                    filetotledir = n +'\\' + i
                    print(filetotledir)
                    shutil.copy(filetotledir, file_copy)
                    totle += 1
        else:
            continue
    print("总共找到 %d 个符合条件的文件" % totle)
    
    
    #不使用正则
    totle = 0    #用来计算符合条件的文件数
    for n, f, file in os.walk(filedir):
        if len(file) != 0:
            for i in file:
                if '.jpg' in i or  '.txt' in i:
                    filetotledir = n +'\\' + i
                    print(filetotledir)
                    shutil.copy(filetotledir, file_copy)
                    totle += 1
        else:
            continue
    print("总共找到 %d 个符合条件的文件" % totle)
    
                      指定字符
    # if filename.endswith('.txt') or filename.endswith('.pdf'):



shutil (shell 工具)   文件的 复制  移动 改名 删除(send2trash) 

    复制文件             文件           目标地
     shutil.copy("Z:\\d\\GitHub.exe", "Z:\\e")
        结果 'Z:\\e\\GitHubDesktopSetup.exe'
        
    复制文件 并改名
    shutil.copy("Z:\\d\\GitHub.exe", "Z:\\e\\G.exe")    
    
    复制文件夹                  创建新的文件夹s
    shutil.copytree("Z:\\e", "Z:\\s")
    'Z:\\s'
    
    
    移动文件
    shutil.move("Z:\\d\\YNote.exe", "Z:\\e")
    'Z:\\e\\YNote.exe'
    
    移动文件 并改名
    shutil.move("Z:\\d\\123.exe", "Z:\\e\\789.exe")
    
    
    删除文件
    import os
    for filename in os.listdir():
        if filename.endswith('.txt'):#endswith() 指定后缀
            os.unlink(filename)
            print(filename)
    
    os.unlink("Z:\\e\\789.txt")   删除文件
    os.rmdir("Z:\\e")             文件夹必须为空
    shutil.rmtree("Z:\\e")        删除所有文件和文件夹
    

            压缩       压缩后的文件名ming.zip      压缩格式      要压缩的文件夹
    shutil.make_archive('Z:\\untitled\\ming',     'zip',      'Z:\\untitled\\z')
            解压 bb.zip
    shutil.unpack_archive(r'D:\bb.zip')


内存读写




    要把str写入StringIO，我们需要先创建一个StringIO，然后，像文件一样写入即可：
    
    >>> from io import StringIO
    >>> f = StringIO()
    >>> f.write('hello')
    5
    >>> f.write(' ')
    1
    >>> f.write('world!')
    6
    >>> print(f.getvalue())
    hello world!
    
    getvalue()方法用于获得写入后的str。
    
    
    
    要读取StringIO，可以用一个str初始化StringIO，然后，像读文件一样读取：
    
    >>> from io import StringIO
    >>> f = StringIO('Hello!\nHi!\nGoodbye!')
    >>> while True:
    ...     s = f.readline()
    ...     if s == '':
    ...         break
    ...     print(s.strip())
    ...
    Hello!
    Hi!
    Goodbye!
    
    
    StringIO操作的只能是str，如果要操作二进制数据，就需要使用BytesIO。
    
    BytesIO实现了在内存中读写bytes，我们创建一个BytesIO，然后写入一些bytes：
    
    >>> from io import BytesIO
    >>> f = BytesIO()
    >>> f.write('中文'.encode('utf-8'))
    6
    >>> print(f.getvalue())
    b'\xe4\xb8\xad\xe6\x96\x87'
    请注意，写入的不是str，而是经过UTF-8编码的bytes。
    
    和StringIO类似，可以用一个bytes初始化BytesIO，然后，像读文件一样读取：
    
    >>> from io import BytesIO
    >>> f = BytesIO(b'\xe4\xb8\xad\xe6\x96\x87')
    >>> f.read()
    b'\xe4\xb8\xad\xe6\x96\x87'
    
    StringIO和BytesIO是在内存中操作str和bytes的方法，使得和读写文件具有一致的接口。
    
    

shelve模块   

    在python3中我们使用json或者pickle持久化数据，能dump多次，但只能load一次，因为先前的数据已经被后面dump的数据覆盖掉了。如果我们想要实现dump和load多次，可以使用shelve模块。shelve模块可以持久化所有pickle所支持的数据类型
    
    1、shelve模块是一个简单的key，value将内存数据通过文件持久化的模块。
    
    2、shelve模块可以持久化任何pickle可支持的python数据格式。
    
    3、shelve就是pickle模块的一个封装。
    
    4、shelve模块是可以多次dump和load。
    
    >>> import shelve
    >>> shelfFile = shelve.open('mydata')
    >>> cats = ['Zophie', 'Pooka', 'Simon']
    >>> shelfFile['cats'] = cats
    >>> shelfFile.close()
    
    >>> shelfFile = shelve.open('mydata')
    >>> list(shelfFile.keys())
    ['cats']
    >>> list(shelfFile.values())
    [['Zophie', 'Pooka', 'Simon']]
    >>> shelfFile.close()
    
    



序列化 


    把 变量 从内存中变成可存储的过程叫 序列化    然后 把序列化后的内容写入磁盘    反过来  把内容从序列化的对象读到内存中 叫 反序列化
    
    python 提供了pickle模块来实现 序列化
    
    
    import pickle 
    d = dict(name='abc',age=18,score=88)
    pickle.dumps(d)
    
    b'\x80\x03}q\x00(X\x03\x00\x00\x00ageq\x01K\x14X\x05\x00\x00\x00scoreq\x02KXX\x04\x00\x00\x00nameq\x03X\x03\x00\x00\x00Bobq\x04u.'
    
    dumps  字典   -->  二进制   然后把 二进制 写入文件  
    loads  二进制 -->  字典                  读到内存
    
    
    要在编程语言之间传递对象  必须把对象序列化为标准格式  如json  
    
    json = 字符串
    
    import json
    
    d = dict(name='abc',age=18,score=88)
    
    json.dumps(d)    '{"age": 20, "score": 88, "name": "Bob"}'
    对象变json
    
    
    json_str = '{"age": 20, "score": 88, "name": "Bob"}'
    json.loads(json_str)
    str 变 字典
    
    
csv
csv表示 （逗号分隔的值） 
csv文件是简化的电子表格，保存为纯文本文件    

CSV 文件中的每行代表电子表格中的一行，逗号分割了该行中的单元格   值没有类型，所有东西都是字符串； 没有字体大小或颜色 宽度和高度；没有多个工作表； 不能合并单元格；不能嵌入图像或图表

import csv,os
os.chdir('Z:\\e')
exampleFile = open('csv.csv')  
exampleReader = csv.reader(exampleFile)
exampleData = list(exampleReader)
print(exampleData)
结果：
[
 ['4/5/2015 13:34', 'Apples', '73'],
 ['4/5/2015 3:41', 'Cherries', '85'],
 ['4/6/2015 12:46', 'Pears', '14'],
 ['4/8/2015 8:59', 'Oranges', '52'],
 ['4/10/2015 2:07', 'Apples', '152'],
 ['4/10/2015 18:10', 'Bananas', '23'],
 ['4/10/2015 2:40', 'Strawberries', '98']
]

>>> exampleData[1][1]
'Cherries'
>>> exampleData[6][1]
'Strawberries'

exampleData[row][col] row 是 exampleData 中一个列表的下标， col 是该列表中你想访问的项的下标

exampleData[0][0]进入第一个列表，并给出第一个字符串。exampleData[0][2]进入
第一个列表，并给出第三个字符串 

for row in exampleReader:
                            行数                 
   print( str(exampleReader.line_num) + ' ' + str(row))

    1 ['4/5/2015 13:34',  'Apples', '73']
    2 ['4/5/2015 3:41',   'Cherries', '85']
    3 ['4/6/2015 12:46',  'Pears', '14']
    4 ['4/8/2015 8:59',   'Oranges', '52']
    5 ['4/10/2015 2:07',  'Apples', '152']
    6 ['4/10/2015 18:10', 'Bananas', '23']
    7 ['4/10/2015 2:40',  'Strawberries', '98']


写  csv.writer()

outputFile = open('output.csv', 'w', newline='')  #创建文件
outputWriter = csv.writer(outputFile)             
outputWriter.writerow(['Hello, world!', 'eggs', 'bacon', 'ham']) 
outputWriter.writerow([1, 2, 3.141592, 4])
outputFile.close()

      不常用制表符                     以制表符分割     终止符是'\n\n'  两倍间距           
outputWriter = csv.writer(outputFile, delimiter='\t', lineterminator='\n\n')
单元格是由制表符分隔的，我们就使用文件扩展名.tsv，表示制表符分隔的值


进程
multiprocessing模块就是跨平台版本的多进程模块。

multiprocessing模块提供了一个Process类来代表一个进程对象

join()方法可以等待子进程结束后再继续往下运行，通常用于进程间的同步。

Process
    Process([group [, target [, name [, args [, kwargs]]]]])
        target：表示这个进程实例所调⽤对象；
        args：表示调⽤对象的位置参数元组；
        kwargs：表示调⽤对象的关键字参数字典；
        name：为当前进程实例的别名；
        group：⼤多数情况下⽤不到；
    Process类常⽤⽅法：
        is_alive()：判断进程实例是否还在执⾏；
        join([timeout])：是否等待进程实例执⾏结束，或等待多少秒；
        start()：启动进程实例（创建⼦进程）；
        run()：如果没有给定target参数，对这个对象调⽤start()⽅法时，就将执⾏对象中的run()⽅法；
        terminate()：不管任务是否完成，⽴即终⽌；
    Process类常⽤属性：
        name：当前进程实例别名，默认为Process-N，N为从1开始递增的整数；
        pid：当前进程实例的PID值；
    

os模块

    打印当前目录下所有的文件名 文件大小  创建日期
    
    #!/usr/bin/env python3
    # -*- coding: utf-8 -*-
    
    from datetime import datetime
    import os
    
    pwd = os.path.abspath('.')
    
    print('      Size     Last Modified  Name')
    print('------------------------------------------------------------')
    
    for f in os.listdir(pwd):
        fsize = os.path.getsize(f)
        mtime = datetime.fromtimestamp(os.path.getmtime(f)).strftime('%Y-%m-%d %H:%M')
        flag = '/' if os.path.isdir(f) else ''
        print('%10d  %s  %s%s' % (fsize, mtime, f, flag))
    
    
     
    
     
    
    
    
    os.getcwd()                                                获取当前的工作路径
    os.chdir('C:\\Windows\\System32')                          切换路径
    
    os.name                                                    环境变量函数  nt 表示window操作系统   posix表示 Linux mac 
    os.environ                                                 显示系统的环境变量 以字典形式
    os.environ.get('PATH')                                     获取某个环境变量的值   
    os.path.abspath('.')'K:\\'                                 查看当前目录的绝对路径
    os.path.join(os.path.abspath('.'), 'z','1')'K:\\z\\1'      路径合成
    os.mkdir(os.path.join(os.path.abspath('.'), '新文件夹'))    创建文件夹
    os.makedirs("1/1/1")   
    os.makedirs('./image/', exist_ok=True)                                      创建多级目录
    os.rmdir(os.path.join(os.path.abspath('.'), '新文件夹'))    删除文件夹
    os.rename('test.txt', 'test.py')                           重命名文件
    os.remove('test.py')                                       删除文件    不存在时报错
    os.listdir('.')                                            列出当前的文件夹名和文件名 不含子目录
    [x for x in os.listdir('.')]                               显示当前所有的文件夹
    
 

    os.path  路径
    os.path.join()                     合成一个文件路径的字符串
        >>> import os
        >>> os.path.join('usr', 'bin', 'spam')
        'usr\\bin\\spam'

    """
    .\  当前文件夹
    ..\ 父级文件夹
    c:\ 绝对路径
    """
        
    判断检测  路径
    
    os.path.abspath(path)   返回参数的绝对路径的字符串
    os.path.isabs(path)， 参数是 绝对路径 True， 相对路径  False
    os.path.relpath(path, start)将返回从 start 路径到 path 的相对路径的字符串
    
    >>> os.path.abspath('.')
    'C:\\Python34'
    >>> os.path.abspath('.\\Scripts')
    'C:\\Python34\\Scripts'
    >>> os.path.isabs('.')
    False
    >>> os.path.isabs(os.path.abspath('.'))
    True
    
    
    >>> os.path.exists('C:\\Windows')                         
    True
    >>> os.path.exists('C:\\some_made_up_folder')             路径是否存在
    False
    >>> os.path.isdir('C:\\Windows\\System32')                是不是目录
    True
    >>> os.path.isfile('C:\\Windows\\System32')               是不是文件
    False
    >>> os.path.isdir('C:\\Windows\\System32\\calc.exe')
    False
        
        
        
        
    分割 路径
    
    ！
    os.path.dirname(path)   返回目录所在的路径   去掉文件名 
    
    os.path.basename(path)  返回文件名          去掉目录路径
    
    
    
    path = 'C:\\Windows\\System32\\calc.exe'
    os.path.basename(path)
    'calc.exe'
    
    os.path.dirname(path)
    'C:\\Windows\\System32'

    
    splitdrive(元组)           返回 盘符    和 路径    
    splitext(元组)             返回 文件名  和 扩展名            
    os.path.split(元组)        返回 目录路径 和 文件名   dirname+basename=os.path.split
    
    >>> 元组 = 'C:\\Windows\\System32\\calc.exe'
    >>> os.path.split(元组)
    ('C:\\Windows\\System32', 'calc.exe')
    

    
    os.path.sep 目录连接符 '\\'
    
    calcFilePath = 'C:\\Windows\\System32\\calc.exe'
    print(calcFilePath.split(    os.path.sep     ))
    ['C:', 'Windows', 'System32', 'calc.exe']
        
        
        
        
        
    查看文件大小和文件夹内容 
    
    os.path.getsize(path)  返回 path 参数中文件的字节数
    os.path.getsize('Z:\\untitled\\1.py')  
    
    
    
    os.listdir(path)       返回 文件名 字符串的列表，
    os.listdir('C:\\Windows\\System32')
    ['tu.png', ' Icon.png', ' age.png']
        
    
    目录遍历器

    遍历所有目录和文件名
    import os
    for ML, ZML, WJ in os.walk('Z:\\d\\Python\\A Byte of Python3(中文版)源码'):
        print(ML)
        for zi in ZML:
            print( zi)
        for w in WJ:
            print(w)
    
        参数
        os.walk(top[, topdown=True[, onerror=None[, followlinks=False]]])
        
        top -- 是你所要便利的目录的地址, 返回的是一个三元组(root,dirs,files)。
        
        root 所指的是当前正在遍历的这个文件夹的本身的地址
        dirs 是一个 list ，内容是该文件夹中所有的目录的名字(不包括子目录)
        files 同样是 list , 内容是该文件夹中所有的文件(不包括子目录)
        topdown --可选，为 True，则优先遍历 top 目录，否则优先遍历 top 的子目录(默认为开启)。如果 topdown 参数为 True，walk 会遍历top文件夹，与top 文件夹中每一个子目录。
        
        onerror -- 可选， 需要一个 callable 对象，当 walk 需要异常时，会调用。
        
        followlinks -- 可选， 如果为 True，则会遍历目录下的快捷方式(linux 下是 symbolic link)实际所指的目录(默认关闭)。
        



sys


    sys.argv 命令行参数List，第一个元素是程序本身路径
    
    sys.modules.keys() 返回所有已经导入的模块列表
    
    sys.exc_info() 获取当前正在处理的异常类,exc_type、exc_value、exc_traceback当前处理的异常详细信息
    
    sys.exit(n) 退出程序，正常退出时exit(0)
    
    sys.hexversion 获取Python解释程序的版本值，16进制格式如：0x020403F0
    
    sys.version 获取Python解释程序的版本信息
    
    sys.maxint 最大的Int值
    
    sys.maxunicode 最大的Unicode值
    
    sys.modules 返回系统导入的模块字段，key是模块名，value是模块
    
    sys.path 返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值
    
    sys.platform 返回操作系统平台名称
    
    sys.stdout 标准输出
    
    sys.stdin 标准输入
    
    sys.stderr 错误输出
    
    sys.exc_clear() 用来清除当前线程所出现的当前的或最近的错误信息
    
    sys.exec_prefix 返回平台独立的python文件安装的位置
    
    sys.byteorder 本地字节规则的指示器，big-endian平台的值是'big',little-endian平台的值是'little'
    
    sys.copyright 记录python版权相关的东西
    
    sys.api_version 解释器的C的API版本
    
    总结
    os模块负责程序与操作系统的交互，提供了访问操作系统底层的接口;sys模块负责程序与python解释器的交互，提供了一系列的函数和变量，用于操控python的运行时环境
    
    
    
    
    
    
    
    








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
    
    
    
    一个python文件 两种用途：
        一：脚本，一个文件就是整个程序，用来被执行
        二：模块，文件中存放着一堆功能，用来被导入使用
    
    
    python为我们内置了全局变量__name__，
        当文件被当做脚本执行时：__name__ 等于'__main__'
        当文件被当做模块导入时：__name__等于模块名
    
    作用：用来控制.py文件在不同的应用场景下执行不同的逻辑
        if __name__ == '__main__':
    
    
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




断言调试

    TypeError            类型错误    缺少参数
    SyntaxError          语法错误    少括号 引号 点
    NameError            名字错误    
    ModuleNotFoundError  模块错误
    


---------------------------------------------正则re-----------------------------------------------------------------------------------
正则是记录文本规则的代码   进行文本匹配的工具

    re.match(p, s  [, flags])        从首字母开始匹配 字符串包含子项  则成功 返回match对象 失败返回none  
    re.search(p, s  [, flags])       如果包含多个只返回第一个
    re.findall(p, s  [, flags])      返回匹配的全部 返回形式为数组
    re.finditer(p, s  [, flags])     返回全部       返回为迭代器
     
    p-----pattern	匹配的正则表达式
    s-----string	要匹配的字符串。
    flags	标志位，是否区分大小写，多行匹配等等。
    
    re.I IGNORECASE忽略大小写"""
    re.L LOCALE 表示特殊字符集 \w, \W, \b, \B, \s, \S 依赖于当前环境
    re.M MULTILINE多行模式
    re.S DOTALL即为' . '并且包括换行符在内的任意字符（' . '不包括换行符）
    re.U 表示特殊字符集 \w, \W, \b, \B, \d, \D, \s, \S 依赖于 Unicode 字符属性数据库
    re.X VERBOSE为了增加可读性，忽略空格和' # '后面的注释"""
    
    
     match
    
        import re
        pattern = re.compile(r'\d+')                    # 用于匹配至少一个数字
        
        m = pattern.match('one12twothree34four', 3, 10) # 从'1'的位置开始匹配，正好匹配
        print m                                         # 返回一个 Match 对象
        <_sre.SRE_Match object at 0x10a42aac0>
        >>> m.group(0)  #分组 
        '12'
        >>> m.start(0)   用于获取分组匹配的子串在整个字符串中的起始位置（子串第一个字符的索引）
        3
        >>> m.end(0)     # 结束位置
        5
        >>> m.span(0)    返回 开始位置 和结束位置
        (3, 5)
    
    compile  span  group
    
        >>> import re
        >>> pattern = re.compile(r'([a-z]+) ([a-z]+)', re.I)   # re.I 表示忽略大小写
        >>> m = pattern.match('Hello World Wide Web')
        >>> print m                               # 匹配成功，返回一个 Match 对象
        <_sre.SRE_Match object at 0x10bea83e8>
        
        >>> m.span(0)                             # 返回匹配成功的整个子串的索引
        (0, 11)
        >>> m.span(1)                             # 返回第一个分组匹配成功的子串的索引
        (0, 5)
        >>> m.span(2)                             # 返回第二个分组匹配成功的子串的索引
        (6, 11)
    
        >>> m.group(0)                            # 返回匹配成功的整个子串
        'Hello World'
        >>> m.group(1)                            # 返回第一个分组匹配成功的子串
        'Hello'
        >>> m.group(2)                            # 返回第二个分组匹配成功的子串
        'World'
        >>> m.groups()                            # 等价于 (m.group(1), m.group(2), ...)
        ('Hello', 'World')
       
        groups()返回多个值的元组
     	
    
     	someRegexValue = re.compile('foo', re.IGNORECASE | re.DOTALL | re.VERBOSE) 
                                             忽略大小写                   编写注释
       
    
    findall    
    
        import re
         
        pattern = re.compile(r'\d+')   # 查找数字
         
        result2 = pattern.findall('run88oob123google456', 0, 10)
          
        print(result2)
        
        结果：
        ['88', '12']   没有分组 返回列表  
                       有分组   返回元组的列表
    
    
    
    finditer
    
        import re
         
        it = re.finditer(r"\d+","12a32bc43jf3") 
        for match in it: 
            print (match.group() )
    
        结果：
        12 
        32 
        43 
        3
    
    
    sub 
    
    >>> namesRegex = re.compile(r'Agent \w+')
                         取代                         文本
    >>> namesRegex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
    'CENSORED gave the secret documents to CENSORED'
    
    
    例子  电话 邮箱  网址 qq  中文 邮编  日期  ip
    
            ^(.*):(.*)$   匹配 字典
             "\1" : "\2",
            
            ip
            ((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)   
             注释 (?#内容)  2[0-4]\d(?#200-249)|25[0-5](?#250-255)|[01]?\d\d?(?#0-199)
            
            
            电话


              029-11111111
                 0\d{2}-\d{8}

            
            (\d{3}|\(\d{3}\))?  
            (\s|-|\.)?  
            (\d{3})  
            (\s|-|\.)  
            (\d{4})  
            (\s*(ext|x|ext.)\s*(\d{2,5}))?
            
            
            邮箱
            
            [a-zA-Z0-9._%+-]+  
            @ # @ symbol
            [a-zA-Z0-9.-]+  
            (\.[a-zA-Z]{2,4}) 
            
            '''
            
            
            """
            [\u4e00-\u9fa5] 
            匹配中文字符
            [^\x00-\xff]
            匹配双字节字符(包括汉字在内)
            \n\s*\r
            匹配空白行
            [\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?
            匹配Email地址
            [a-zA-z]+://[^\s]*
            匹配网址URL
            \d{3}-\d{8}|\d{4}-\{7,8}
            匹配国内电话号码
            [1-9][0-9]{4,}
            匹配腾讯QQ号
            [1-9]\d{5}(?!\d)
            匹配中国邮政编码
            ^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$
            匹配18位身份证号
            ([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))
            匹配(年-月-日)格式日期
            ^[1-9]\d*$
            匹配正整数
            ^-[1-9]\d*$
            匹配负整数
            ^-?[1-9]\d*$
            匹配整数
            ^[1-9]\d*|0$
            匹配非负整数（正整数 + 0）
            ^-[1-9]\d*|0$
            匹配非正整数（负整数 + 0）
            ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$
            匹配正浮点数
            ^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$
            匹配负浮点数
    
    
    
    
    
    .  单个字符
    
    *  零次到n次
    
    常用的元字符
    
    \w \s \d \b  ^  $
    

    \w = [A-Za-z0-9_]   匹配字母、数字、下划线    不能匹配符号
    \s = [ \f\n\r\t\v]  匹配任何空白字符，包括空格、制表符、换页符等等。
    \d = [0-9]
    
    \f	
    匹配一个换页符。等价于 \x0c 和 \cL。
    
    \n	
    匹配一个换行符。等价于 \x0a 和 \cJ。
    
    \r	
    匹配一个回车符。等价于 \x0d 和 \cM。
    \t	
    匹配一个制表符。等价于 \x09 和 \cI。
    
    \v	
    匹配一个垂直制表符。等价于 \x0b 和 \cK。
    
    ^ 开始   $ 结束
    
    
    
    """
    
    
    常用限定符
    * 零次到多次
    + 一次到多次
    ？ 零次到一次
    {n} n次  
    {n,} n次到多次  {5,} 至少5位 不能少
    {n,m} n次到m次  
    
    {2} 是能匹配2位
    {5,12}  大于5位 小于12位
    
    
          
    







--------------------------------------Xpath-----------------------------------

    xpath 就是选择xml文件中节点的方法
    
    element 元素节点
    
    attribute 属性节点 
    
    text       文本
    
    namespace  名称空间节点
    
    processing-instruction    处理命令节点
    
    comment    注释节点
    
    root       根节点
    
    
    路径
    
    斜杠/ 作为路径内部的分隔符
    
    绝对路径 /
    
    一个点  表示当前路径
    
    两个点  表示上一级路径
    
    
    
    
    节点
     
    节点名称  表示选择该节点的所有子节点
    
    /    表示选择根节点
    
    //   表示选择任意位置的某个节点
    
    @    表示选择某个属性
    
    
    *    表示匹配任何元素节点
    
    @*   表示匹配任何属性值 
    
    node() 表示匹配 任何类型的节点
     
    
    
    
    
    
    
语法糖需要解析库    



python核心编程
第4章　Python对象
第5章　数字
第6章　序列：字符串、列表和元组
第7章　映像和集合类型
第8章　条件和循环
第9章　文件和输入输出
第10章　错误和异常
第11章　函数和函数式编程
第12章　模块
第13章　面向对象编程
第14章　执行环境


15 正则
16 套接字 udp 
17 网络客户端
18 线程进程
19 图形用户界面编程
20 web服务器
21 数据库