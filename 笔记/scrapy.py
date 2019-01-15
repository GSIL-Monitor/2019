    

总纲 ：基本概念 -- 内置服务---解决特定问题---拓展scrapy 


创建项目--定义容器----编写蜘蛛并提取---使用容器 保存数据




item  

    item          是简单的容器 定义了类似于字典的api
    
    声明item       使用class 和 field对象 声明 
    
    itemr字段      field对象指明了每个字段的元数据
      
    配合item       创建item    获取字段和所有字段的值  设置字段的值  
     
    拓展item        添加更多的字段  或修改某些字段的元数据
    
    item对象           
    
    字段对象




spiders
    spiders类  定义了如何爬网站 
     
     定义了爬取的动作 ： 是否跟进链接  

     爬取item  从页面中提取结构化的数据

     参数    方法



选择器

    使用选择器

    内建选择器



item loaders

    用item loaders 装载 items    需要实例化

    输入 输出 处理器   


item pipeline
    当spider中被收集之后  他将会被传递itempipeline  一些组件会按照一定的顺序执行对item的处理
    
    典型的应用
    
    清理HTML数据
    验证爬取的数据
    查重
    将爬取的结果保存到数据库中


    每个item pipeline组件都是一个独立的python类

    方法

        process_item(item, spider)
        该方法必须返回一个item

        open_spider(spider)
        当spider被启用时 这个方法被调用 

        close_spider(spider)
        当spider被关闭时 这个方法被调用


    启用一个 pipeline    把他的类添加到  ITEM_PIPELINES 配置  分配给每一个类整数值 item将按照数字从高到低的顺序运行  范围1-1000


feed exports
    序列化
        我们把 变量 从内存中变成可存储或可传输的过程叫 序列化
        把磁盘序列化的变量读到内存中叫  反序列化
        dumps方法把任意对象序列化成一个str    字典变str
        loads 反序列化成字典                 str 变字典
    存储：
        一堆方法





引擎

    引擎负责控制数据流在系统所有组件中流动  并在相应动作发生时触发事件  


调度

    调度器 从引擎接受request并就将他们入队 以便 引擎请求他们时提供给引擎

下载器

    下载器负责获取页面数据并提交给  中间件  引擎  spider

下载中间件

    下载器中间件是在引擎及下载器之间的特定钩子  处理下载器传递给引擎的响应 其提供了一种简单的机制 通过插入自定义代码来拓展scrapy功能

蜘蛛

    spider 是scrapy用户编写用于分析response 并提取item(即获取到的item)或额外跟进的URL类 每个蜘蛛负责处理一个或一些特定的网站


spider中间件
    
    spider中间件是在引擎和蜘蛛之间的钩子  处理spider的输入和输出 自定义代码来扩建

item pipeline

    管道负责处理被spider提取出来的item  典型的处理有清理验证及持久化  例如存取到数据库中








从上到下

破局点

目录
scrapy.cfg             项目的配置文件
tutorial               该项目的python模块  之后您将在此加入代码
tutorial/items.py      项目中的items文件
tutorial/pipelines.py  项目中的pipelines文件
tutorial/settings.py   项目中的设置文件
tutorial/apiders.py    放置apiders代码的目录

item是保存爬取数据的容器
spider 蜘蛛  是用户编写的爬取数据的类

pipeline 主要用于接收从spider中返回的 Item


















测试 页面 http://quotes.toscrape.com/tag/inspirational/page/2/

选择器   xpath  正则  字段

名字  用于区分不同的蜘蛛
开始URL----解析 

response对象将作为唯一的参数传递给该函数 该方法负责解析提取返回的数据  生成item 以及生成新链接 
蜘蛛的代码保存在蜘蛛里面


ItemLoader提供了一种简单高效，可扩展的方式来填充字段。


取消配置settings.py中下面几行的注释



流程
输入scrapy crawl '项目名称'----->2读取setting.py配置信息-------->3执行spiders目录下的爬虫程序，执行_init_()方法和parse()方法-------->4在parse方法里解析html，返回一个item实例-------->4按照配置顺序执行pipelines.py(可多个)执行逻辑，一般是存储。--------->5程序结束。



蜘蛛 将请求的链接 通过引擎 交给调度器----调度器处理后  通过引擎 下载中间件 交给 下载器---下载器向互联网发请求 下载数据 通过引擎 交给管道保存----提取新链接 通过引擎交给 调度 


item方法：
字段对象 （常用）
class scrapy.item.field()    field 是内置字典的一个别名

item对象
class scrapy.item.Item()




Spider中的方法：
parse()

处理首页图片url, 调用parse_item()
处理首页上的分页，获得下一页url，调用parse()
处理列表页url, 获得列表页上图片url，调用parse_item；处理页面上分页url, 获得下一页url，递归调用parse()
parse_item()
获得内容页上的图片url，图片src保存在item loader中。

 




获取数据的途径

企业生产数据  大型互联网公司

数据管理咨询公司

政府/机构 提供的公开数据

第三方购买数据

爬虫抓取


数据网站

互联网
    百度指数
    阿里指数
    腾讯指数
    微博指数


政府机构数据
    统计局 国家数据
    世界银行
    纳斯达克
    undata

数据管理咨询公司
    艾瑞
    埃森哲
    麦肯锡  mckinsey greater China


 买数据
    数据堂
    国云数据市场
    贵阳大数据交易所   













scrapy模板

import scrapy

字段
class dingdianitem(scrapy):
    name = scrapy.Fieid()
    author = scrapy.Fieid()


蜘蛛

class myspider(scrapy,spider):
    
    name = "dingdian"
    allowed_domains = "baidu.com"
    bash_url = "http://www.baidu.com"
    bashurl = ".html"

    def start_request(self):

        for i in range(1,11)
            url = self.bash_url + str(i) + "_1" + self.bashurl
            yield request(url, self.parse)
    
    def parse(self,response):
        print(response.body）)


<GET http://capi.douyucdn.cn/api/v1/getVerticalRoom?limit=20&offset=6580>



xpath返回的是 列表     xpath打印出来 乱码  要加 extract() 转换成Unicode字符串


item['name'] = name[0].encode('gbk')    Unicode字符串 用 encode转码


scrapy 的settings文件   包括  项目名  并发 延迟 远程 请求头 下载中间件  蜘蛛中间件  管道  http缓存

项目名 文件名     类
douyu.pipelines.ImagesPipeline  

列表的一个值 是字符串



scrapy 方法   梳理      xpath    http协议          
































































Cache-Control:private,no-store,max-age=0,no-cache,must-revalidate,post-check=0,pre-check=0
Connection:keep-alive
Content-Encoding:br
Content-Security-Policy:default-src * blob:;img-src * data: blob:;frame-src 'self' *.zhihu.com getpocket.com note.youdao.com safari-extension://com.evernote.safari.clipper-Q79WDW8YH9 weixin: zhihujs: v.qq.com v.youku.com www.bilibili.com *.vzuu.com;script-src 'self' *.zhihu.com *.google-analytics.com zhstatic.zhihu.com res.wx.qq.com 'unsafe-eval' unpkg.zhimg.com unicom.zhimg.com blob:;style-src 'self' *.zhihu.com unicom.zhimg.com 'unsafe-inline';connect-src * wss:
Content-Type:text/html; charset=utf-8
Date:Thu, 25 Jan 2018 06:41:12 GMT
Expires:Fri, 02 Jan 2000 00:00:00 GMT
Pragma:no-cache
Server:ZWS
Set-Cookie:_xsrf=199be898-cf22-43b9-b05e-ae07f79eaf4d; path=/; domain=.zhihu.com
Transfer-Encoding:chunked
Vary:Accept-Encoding
X-Backend-Server:heifetz.heifetz.757b2859---10.6.117.2:31013[10.6.117.2:31013]
X-Frame-Options:DENY
X-Req-ID:10C65E405A697C07
X-Req-SSL:proto=TLSv1.2,sni=,cipher=ECDHE-RSA-AES256-GCM-SHA384




Request Headers
view source
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding:gzip, deflate, br
Accept-Language:zh-CN,zh;q=0.9
Cache-Control:max-age=0
Connection:keep-alive
Cookie:q_c1=c4a8dde43a95446eaf27b06129233a19|1516804860000|1516804860000; _zap=7c08c36d-b845-4d4d-9a2e-94ccdcde203d; __utmv=51854390.000--|3=entry_date=20180125=1; l_cap_id="YzJlNmRmODVlNDRlNGY5OTk0ODA1NTM3ZjQzMjVmNjU=|1516852563|e503dc882340e0ef8ecd31cb94cecae01f73a8f2"; r_cap_id="OWYzZWYyMWIzMDAxNDFkMTk5MTBlMDUwNTUxNjgxZmI=|1516852563|fded22bb0e516b88d9aae58a5d63e096baffe6f1"; cap_id="MDQwN2ZlMjAxYmFiNDVhY2FkNjRmZDQ2ZDJhMjhmMDE=|1516852563|6a16b2a71dbba1b98d6e71cdbe40d8701350fddd"; __utma=51854390.1751431137.1516851232.1516851232.1516852566.2; __utmz=51854390.1516852566.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; aliyungf_tc=AQAAALiBe0XXNAEABDQTb1qB1th4IjT5; d_c0="AHDso2gWCw2PTk-85641bVW7xgA1H91a6-I=|1516862371"; _xsrf=199be898-cf22-43b9-b05e-ae07f79eaf4d; capsion_ticket="2|1:0|10:1516862410|14:capsion_ticket|44:MGM5MzdhZTY1ZDk0NGFjNzkyY2E0YTZjMjUwYzRiZmE=|c326893749332f5663bdd9fe8fd066fe71941fd8d2bd150b5624a46933bf7249"; z_c0="2|1:0|10:1516862460|4:z_c0|92:Mi4xZTYtVkFnQUFBQUFBY095amFCWUxEU1lBQUFCZ0FsVk5fTWxXV3dDOXhjWkJ4UjdNcHNPU29yOHZOU1dmdk9PYXVB|09bceca6cbf2bec882b2c6eed962d1c525d269771d8c4a3148b848dd13c2518b"; unlock_ticket="ABAMHlcMcQkmAAAAYAJVTQSDaVocvH4alW9ceH7PzUByAkFHpOOFyA=="
DNT:1
Host:www.zhihu.com
Referer:https://www.zhihu.com/signup?next=%2F
Upgrade-Insecure-Requests:1
User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36






digits

Access-Control-Allow-Credentials:true
Access-Control-Allow-Headers:Authorization,Content-Type,X-API-Version,X-XSRF-TOKEN,X-UDID
Access-Control-Allow-Methods:GET,PATCH,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Origin:https://www.zhihu.com
Connection:keep-alive
Content-Encoding:gzip
Content-Length:36
Content-Type:application/json; charset=utf-8
Date:Tue, 23 Jan 2018 13:40:32 GMT
Server:ZWS
Vary:Accept-Encoding
X-Backend-Server:zhihu-web.zapi-account.555728fb---10.3.213.2:31009[10.3.213.2:31009]
X-Req-ID:DCE4D015A673B50
X-Req-SSL:proto=TLSv1.2,sni=,cipher=ECDHE-RSA-AES256-GCM-SHA384
X-Za-Experiment:default:None,ge3:ge3_9,ge2:ge2_1,nwebQAGrowth:experiment,new_live_feed_mediacard:old,show_video_upload_attention:true,is_office:false,new_question_diversion:true,enable_vote_down_reason_menu:enable,nweb_growth_people:default,android_db_follow_recommend_hide:open,is_show_unicom_free_entry:unicom_free_entry_off,app_store_rate_dialog:close,top_weight_search:new_top_search,android_profile_panel:panel_b,live_store:ls_a2_b1_c1_f2,nweb_search:nweb_search_heifetz,hybrid_zhmore_video:no,new_mobile_column_appheader:new_header,android_db_comment_with_repin_record:open,android_db_repin_selection:open,growth_search:s1,qrcode_login:qrcode,qaweb_related_readings_content_control:close,enable_tts_play:post,feed_hybrid_topic_recom_button_icon:yes,android_pass_through_push:all,qaweb_thumbnail_abtest:new,se_e:0,android_db_recommend_action:open,zcm-lighting:zcm,android_db_feed_hash_tag_style:button,is_new_noti_panel:no,wechat_share_modal:wechat_share_modal_show,nweb_search_suggest:default,growth_banner:default
X-Za-Response-Id:5545fa030792cd869fa9d60c0df26854
Request Headers
view source
accept:application/json, text/plain, */*
Accept-Encoding:gzip, deflate, br
Accept-Language:zh-CN,zh;q=0.9
authorization:oauth c3cef7c66a1843f8b3a9e6a1e3160e20
Connection:keep-alive
Content-Length:252
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryXGpJUoX2gFQROkfV
Cookie:q_c1=73560474a22445af9e31793d01a673b5|1516628245000|1516628245000; _zap=7ec73eac-30b2-4f17-bfb9-c11e3242d4e9; __utmv=51854390.000--|3=entry_date=20180123=1; aliyungf_tc=AQAAAMkdHwgOnA4AIDQTb2PSDRL48hfr; l_n_c=1; _xsrf=4567ef5aa6de44bed186c94ca4b13e09; __utma=51854390.749593694.1516632618.1516705240.1516712056.3; __utmc=51854390; __utmz=51854390.1516712056.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; d_c0="AGCrQwDZCA2PTgOiB9Oa458MQZjxemKV2mc=|1516712055"; _xsrf=4567ef5aa6de44bed186c94ca4b13e09; l_cap_id="NGUyMzRiNzNkNDRlNDQxYzhmNmYwZWQ2MjI5ZjI5Mzc=|1516713352|af1b3e608c1e3e64f896a05b3fb35321eb303274"; r_cap_id="ZDEyZTY1ZGI2NmZiNGQ5NGFmYTJhOWJkYWFiZjAxZWU=|1516713352|3a0ea80b236b2f84c9414d73844b0724ae994404"; cap_id="NGI1ZDQyMzQ3NjlhNDE4NTkxZGU0OTRhYWE3NDZmOTE=|1516713352|5361e4fcf6f1e64bff58961237ad74e1bdab6524"; capsion_ticket="2|1:0|10:1516714814|14:capsion_ticket|44:OGFmMzExZDdiNWEzNDI0ZmFiMWI5ZjAzYzhkMGRlZjU=|b6f8094fd804ecf01d3e73409bc17d006385c9d2921a0f1cb9fed7f945d5dfa9"
DNT:1
Host:www.zhihu.com
Origin:https://www.zhihu.com
Referer:https://www.zhihu.com/signup?next=%2F
User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36
X-UDID:AGCrQwDZCA2PTgOiB9Oa458MQZjxemKV2mc=
X-Xsrftoken:4567ef5aa6de44bed186c94ca4b13e09
Request Payload
------WebKitFormBoundaryXGpJUoX2gFQROkfV
Content-Disposition: form-data; name="username"

+8615667190231
------WebKitFormBoundaryXGpJUoX2gFQROkfV
Content-Disposition: form-data; name="sms_type"

text
------WebKitFormBoundaryXGpJUoX2gFQROkfV--




register_form

Access-Control-Allow-Credentials:true
Access-Control-Allow-Headers:Authorization,Content-Type,X-API-Version,X-XSRF-TOKEN,X-UDID
Access-Control-Allow-Methods:GET,PATCH,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Origin:https://www.zhihu.com
Connection:keep-alive
Content-Encoding:gzip
Content-Length:134
Content-Type:application/json; charset=utf-8
Date:Tue, 23 Jan 2018 13:40:07 GMT
Server:ZWS
Vary:Accept-Encoding
X-Backend-Server:zhihu-web.zapi-account.8be6db46---10.2.52.2:31008[10.2.52.2:31008]
X-Req-ID:DBE77FA5A673B37
X-Req-SSL:proto=TLSv1.2,sni=,cipher=ECDHE-RSA-AES256-GCM-SHA384
X-Za-Experiment:default:None,ge3:ge3_9,ge2:ge2_1,nwebQAGrowth:experiment,new_live_feed_mediacard:old,show_video_upload_attention:true,is_office:false,new_question_diversion:true,enable_vote_down_reason_menu:enable,nweb_growth_people:default,android_db_follow_recommend_hide:open,is_show_unicom_free_entry:unicom_free_entry_off,app_store_rate_dialog:close,top_weight_search:new_top_search,android_profile_panel:panel_b,live_store:ls_a2_b1_c1_f2,nweb_search:nweb_search_heifetz,hybrid_zhmore_video:no,new_mobile_column_appheader:new_header,android_db_comment_with_repin_record:open,android_db_repin_selection:open,growth_search:s1,qrcode_login:qrcode,qaweb_related_readings_content_control:close,enable_tts_play:post,feed_hybrid_topic_recom_button_icon:yes,android_pass_through_push:all,qaweb_thumbnail_abtest:new,se_e:0,android_db_recommend_action:open,zcm-lighting:zcm,android_db_feed_hash_tag_style:button,is_new_noti_panel:no,wechat_share_modal:wechat_share_modal_show,nweb_search_suggest:default,growth_banner:default
X-Za-Response-Id:f6ae687aa3426011e0c23548c3331fc8
Request Headers
view source
accept:application/json, text/plain, */*
Accept-Encoding:gzip, deflate, br
Accept-Language:zh-CN,zh;q=0.9
authorization:oauth c3cef7c66a1843f8b3a9e6a1e3160e20
Connection:keep-alive
Content-Length:153
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrqBkN64qsysQckZ7
Cookie:q_c1=73560474a22445af9e31793d01a673b5|1516628245000|1516628245000; _zap=7ec73eac-30b2-4f17-bfb9-c11e3242d4e9; __utmv=51854390.000--|3=entry_date=20180123=1; aliyungf_tc=AQAAAMkdHwgOnA4AIDQTb2PSDRL48hfr; l_n_c=1; _xsrf=4567ef5aa6de44bed186c94ca4b13e09; __utma=51854390.749593694.1516632618.1516705240.1516712056.3; __utmc=51854390; __utmz=51854390.1516712056.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; d_c0="AGCrQwDZCA2PTgOiB9Oa458MQZjxemKV2mc=|1516712055"; _xsrf=4567ef5aa6de44bed186c94ca4b13e09; l_cap_id="NGUyMzRiNzNkNDRlNDQxYzhmNmYwZWQ2MjI5ZjI5Mzc=|1516713352|af1b3e608c1e3e64f896a05b3fb35321eb303274"; r_cap_id="ZDEyZTY1ZGI2NmZiNGQ5NGFmYTJhOWJkYWFiZjAxZWU=|1516713352|3a0ea80b236b2f84c9414d73844b0724ae994404"; cap_id="NGI1ZDQyMzQ3NjlhNDE4NTkxZGU0OTRhYWE3NDZmOTE=|1516713352|5361e4fcf6f1e64bff58961237ad74e1bdab6524"; capsion_ticket="2|1:0|10:1516714759|14:capsion_ticket|44:Y2FhZGM3MzdkYTA3NDY3ZDgxOTM2NTdkNWJkNTY0NmI=|fe7a3b284b9d1d9a2d34dacc9f7544c9c505d8db7abbefdb48b1882008ed6999"
DNT:1
Host:www.zhihu.com
Origin:https://www.zhihu.com
Referer:https://www.zhihu.com/signup?next=%2F
User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36
X-UDID:AGCrQwDZCA2PTgOiB9Oa458MQZjxemKV2mc=
X-Xsrftoken:4567ef5aa6de44bed186c94ca4b13e09
Request Payload
------WebKitFormBoundaryrqBkN64qsysQckZ7
Content-Disposition: form-data; name="phone_no"

+8615667190231
------WebKitFormBoundaryrqBkN64qsysQckZ7--


------WebKitFormBoundarybe0zFfBPBoWPQRvj
Content-Disposition: form-data; name="items"

[["answer",301127532,"touch"]]
------WebKitFormBoundarybe0zFfBPBoWPQRvj--

 
ue=




模拟登陆

 bs4  requests urllib   scrapy  flask
破解验证码

爬标签 图片   js  

存储  redis  mongodb





cookie = {} 

raw_cookies = '' 

for line in raw_cookies.split(';'):
    key,value = line.split("=", 1)
    cookie[key] = value
 








