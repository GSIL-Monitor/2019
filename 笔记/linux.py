


目录：


chown  
chmod  
git  
linux更新   sudo apt-get install  
更新软件源
正则
mysql



--------------------------------------------------------linux--------------------------------------------------------------------------------------------


通过域名查ip dig www.baidu.com 

dig命令可以单独查看每一级域名的NS记录。
$ dig ns com
$ dig ns stackexchange.com

+short参数可以显示简化的结果。
$ dig +short ns com
$ dig +short ns stackexchange.com

+trace参数可以显示DNS的整个分级查询过程


www.example.com真正的域名是www.example.com.root
根域名的下一级，叫做"顶级域名"（top-level domain，缩写为TLD）再下一级叫做"次级域名"（second-level domain，缩写为SLD）

主机名.次级域名.顶级域名.根域名
host .sld     .tld    .root

所谓"分级查询"，就是从根域名开始，依次查询每一级域名的NS记录，直到查到最终的IP地址，过程大致如下。

	从"根域名服务器"查到"顶级域名服务器"的NS记录和A记录（IP地址）
	从"顶级域名服务器"查到"次级域名服务器"的NS记录和A记录（IP地址）
	从"次级域名服务器"查出"主机名"的IP地址




Ctrl+d	键盘输入结束或退出终端
Ctrl+s	暂停当前程序，暂停后按下任意键恢复运行
Ctrl+z	将当前程序放到后台运行，恢复到前台为命令fg
Ctrl+a	将光标移至输入行头，相当于Home键
Ctrl+e	将光标移至输入行末，相当于End键
Ctrl+k	删除从光标所在位置到行末
Alt+Backspace	向前删除一个单词
Shift+PgUp	将终端显示向上滚动
Shift+PgDn	将终端显示向下滚动

*	匹配 0 或多个字符
?	匹配任意一个字符
[list]	匹配 list 中的任意单一字符
[!list]	匹配 除list 中的任意单一字符以外的字符
[0-9]	匹配 c1-c2 中的任意单一字符 如：[0-9] [a-z]
{string1,string2,...}	匹配 string1 或 string2 (或更多)其一字符串
{c1..c2}	匹配 c1-c2 中全部字符 如{1-10}


touch love{1..10}.txt



sudo apt-get update

whoami

创建用户  sudo adduser lilei

 切换用户  su -l lilei

 cat 命令用于读取指定文件的内容并打印到终端输出

 cat /etc/group | grep -E "shiyanlou"


把lilei添加到sudo用户组
groups lilei
lilei : lilei 
sudo usermod -G sudo lilei
lilei : sudo lilei 

在home里删除用户li
sudo deluser li --remove-home




复制 限制
javascript:(function(){ eval(function(p,a,c,k,e,r){ e=function(c){ return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){ while(c--)r[e(c)]=k[c]||e(c);k=[function(e){ return r[e]}];e=function(){ return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 2=8;5 3=2.K;3.7=3.k=3.e=3.9=3.6=3.y=3.7=3.z=2.7=2.k=2.e=2.9=2.6=4;2.7=2.6=2.c=2.9=p(){ r t};g(8.n||8){ d=4;c=4;6=4}5 a=8.15(\'*\');o(5 i=a.q-1;i>=0;i--){ 5 b=a[i];g(b.n||b){ d=4;c=4}}s(h(\'%u%v%w%x%j%17%A%B%C%j%D\')+\'\\E\'+h(\'%F%G%H%I%J%l%L%l%M%N%O%P%Q%R%S%T%U%V%W%X%Y\')+\'\\Z.10.11\');3.m.13=\'14!f\';3.m.16=\'12!f\';',62,70,'||doc|bd|null|var|oncontextmenu|onselectstart|document|onkeydown|arAllElements|elmOne|onmousedown|onmouseup|onpaste|important|with|unescape||u5236|oncopy|u7528|style|wrappedJSObject|for|function|length|return|alert|true|u5DF2|u89E3|u9664|u590D|onmousemove|ondragstart|u53F3|u952E|u9650|uFF01|u000d|u66F4|u591A|u7CBE|u5F69|u5B9E|body|u5e94|uFF0C|u8BF7|u5173|u6CE8|u300E|u0065|u5f27|u5ea6|u7535|u5b50|u5546|u52a1|u300F|u000dwww|ehudu|com|text|webkitUserSelect|auto|getElementsByTagName|MozUserSelect|u4E0E'.split('|'),0,{ }))})()


cat <file name>  查看文件内容

 

Linux 里面一切皆文件   python 一切皆对象

一个目录同时具有读权限和执行权限才可以打开并查看内部文件，而一个目录要有写权限才允许在其中创建其它文件

Linux 下以 . 开头的文件为隐藏文件

 
ls -Al  所有的目录和文件



ls 参数

-a                显示所有文件名列表，包括隐藏文件（文件名以句点开始）

-A                与-a类似，但不列出 . 和 ..目录项

-l                 列出每个文件的更多信息

-m               显示用逗号分割的文件名，文件列表的宽度与屏幕的宽度相同

-h                从K(千字节)、M（兆字节）、和G（千兆字节）中选择合适的单位显示文件的大小

-r                 以相反的顺序列出目录层次结构

-R                递归列出子目录的内容

-t                 按最后一次修改时间的顺序显示文件

-u                按最后一次访问时间的顺序显示文件

-x                按行显示文件列表（默认情况下，按列显示）

-X                按文件扩展名的顺序显示文件，没有扩展名的文件首先被列出

-1                一行显示一个文件

-d                只显示目录名称

-F                该选项在每个目录后显示斜杠（/）;在每个可执行文件后显示星号（*）;在每个符号链接后显示符号@


drwxr-xr-x  
crw-rw-rw-
  
d 目录 
l 软连接
b 块设备
c 字符设备
s socket
p 通道
- 表示普通文件  




换回到 shiyanlou 用户身份，使用以下命令变更文件所有者为 shiyanlou ：
$ cd /home/li
$ ls 111
-rw-rw-r-- 1 li li 0 Dec 20 14:06 111
$ sudo chown root 111
$ ls 111
-rw-rw-r-- 1 root li 0 Dec 20 14:06 111

 

在 111文件里写入hello shiyanlou
echo "echo \"hello shiyanlou\"" >111


chmod 命令
chmod(选项)(参数)
u User，即文件或目录的拥有者；
g Group，即文件或目录的所属群组；
o Other，除了文件或目录拥有者或所属群组之外，其他用户皆属于这个范围；
a All，即全部的用户，包含拥有者，所属群组以及其他用户；
r 读取权限，数字代号为“4”;
w 写入权限，数字代号为“2”；
x 执行或切换权限，数字代号为“1”；
- 不具任何权限，数字代号为“0”；
s 特殊功能说明：变更文件或目录的权限。

r=4,w=2,x=1
-rw------- (600) -- 只有属主有读写权限。  
-rw-r--r-- (644) -- 只有属主有读写权限；而属组用户和其他用户只有读权限。  
-rwx------ (700) -- 只有属主有读、写、执行权限。  
-rwxr-xr-x (755) -- 属主有读、写、执行权限；而属组用户和其他用户只有读、执行权限。  
-rwx--x--x (711) -- 属主有读、写、执行权限；而属组用户和其他用户只有执行权限。  
-rw-rw-rw- (666) -- 所有用户都有文件读、写权限。这种做法不可取。  
-rwxrwxrwx (777) -- 所有用户都有读、写、执行权限。更不可取的做法。  


touch 创建文件

mkdir 创建目录

rm test 删除测试文件

mv 源目录文件 目的目录
mv 旧文件名   新文件名
 
rename  批量重命名

查看文件 

cat 顺序 -n 打印行号
tac 倒序 

nl -b a -n rz -w 3 2.py
-b a ：表示不论是否为空行，也同样列出行号(类似 cat -n)
-n rz ：行号在自己栏位的最右方显示，且加 0 ；
-w ：行号栏位的占用的位数

more 和 less 命令分页查看文件

 more 2.py  显示文件内容60%


 
 tail head  查看文件
tail -n 20 2.py   查看文件20行


创建变量名a
declare  a

 
搜索文件 

whereis，which，find   locate






把/etc/apt文件夹下面的sources.list的所有权转让给用户 shiyanlou
$ sudo chown shiyanlou /etc/apt/sources.list 
$ sudo chmod 700 /etc/apt/sources.list  




压缩 zip 只能使用绝对 否则不起作用

zip

-h 以K，M，G为单位，提高信息的可读性

-r:表示递归打包包含子目录的全部内容

-q:表示为安静模式，即不向屏幕输出信息

-o:表示输出文件，需在其后紧跟打包输出文件名

-[1-9]:设置压缩等级，1 表示最快压缩但体积大，9 表示体积最小但耗时最久。

-x:排除我们上一次创建的 zip 文件，否则又会被打包进这一次的压缩文件中

-e：创建加密压缩包

-l:将 LF（换行） 转换为 CR+LF(windows 回车加换行)




如果你想让你在 Linux 创建的 zip 压缩文件在 Windows 上解压后没有任何问题，那么你还需要对命令做一些修改：

$ zip -r -l -o shiyanlou.zip /home/shiyanlou
 

# 基本使用
$ unzip shiyanlou.zip
# 静默且指定解压目录，目录不存在会自动创建
$ unzip -q shiyanlou.zip -d ziptest
# 使用 -O（英文字母，大写 o）参数指定编码类型
$ unzip -O GBK 中文压缩文件.zip


tar


# 创建一个 tar 包：
$ tar -cf shiyanlou.tar ~
# 解压
$ mkdir tardir
$ tar -xf shiyanlou.tar -C tardir
# 查看不解包文件 -t 参数
$ tar -tf shiyanlou.tar
# 创建不同格式压缩文件（gzip）
$ tar -czf shiyanlou.tar.gz ~
#解压gzip
$ tar -xzf shiyanlou.tar.gz
-c:创建一个 tar 包文件

-f:指定创建的文件名,文件名必须写在-f参数后

-v:以可视的的方式输出打包的文件

-P:保留绝对符（默认不保留，防止解压到根目录）

-x:解压

-C:解压到指定的已存在目录

-z:使用gzip压缩




文件大小排序


du

2. du -s /usr/* | sort -rn

这是按字节排序

 

3. du -sh /usr/* | sort -rn

这是按兆（M）来排序

 

4.选出排在前面的10个

du -s /usr/* | sort -rn | head

 

5.选出排在后面的10个

du -s /usr/* | sort -rn | tail




 内建命令 
xxx is a shell builtin
 外部命令 
xxx is /usr/sbin/xxx
#若是得到alias的结果，说明该指令为命令别名所设定的名称；
xxx is an alias for xx --xxx

 














 cut 命令，打印每一行的某一字段
# 打印/etc/passwd文件中以:为分隔符的第1个字段和第6个字段分别表示用户名和其家目录：
$ cut /etc/passwd -d ':' -f 1,6

# 前五个（包含第五个）
$ cut /etc/passwd -c -5
# 前五个之后的（包含第五个）
$ cut /etc/passwd -c 5-
# 第五个
$ cut /etc/passwd -c 5
# 2到5之间的（包含第五个）
$ cut /etc/passwd -c 2-5
-d：用来定义分隔符，默认为tab键，一般与-f配合使用（如果分隔符是空格，必须是两个单引号之间确实有一个空格，是一个哦，不是支持多个）

-f：需要选取的字段，根据-d切分的字段集选取，下标从1开始

-s：表示不包括那些不含分隔符的行，用于去掉注释或者标题一类的信息

-c：以字符为单位进行分割，可以选取指定字符

-b：以字节为单位进行分割，可以选取指定字节，这些字节位置将忽略多字节字符边界（比如：汉字），除非同时指定了-n参数

-n：取消分割多字节字符，只能和-b参数配合使用，即如果字符的最后一个字节落在由-b参数列表指定的范围之内，则该字符将被选出，否则，该字符将被排除。

grep 命令，在文本中或 stdin 中查找匹配字符串
grep命令是很强大的，也是相当常用的一个命令，它结合正则表达式可以实现很复杂却很高效的匹配和查找
查找，按照单引号匹配的内容进行搜索
grep -n 'a' abc.txt:搜索abc.txt 文件中带a的内容
- n:表示结果中带有行号。
- i:忽略大小写
-v: 取反 grep -v -n 'a' abc.txt:不带a

使用格式
grep [命令选项]... 用于匹配的表达式 [文件]...

# 搜索/home/zhangwang目录下所有包含"zhangwang"的所有文本文件，并显示出现在文本中的行号：
$ grep -rnI "zhangwang" ~
wc 命令，简单小巧的计数工具
wc 命令用于统计并输出一个文件中行、单词和字节的数目

# 输出/etc/passwd文件的统计信息：
$ wc /etc/passwd
# 行数
$ wc -l /etc/passwd
# 单词数
$ wc -w /etc/passwd
# 字节数
$ wc -c /etc/passwd
# 字符数
$ wc -m /etc/passwd
# 最长行字节数
$ wc -L /etc/passwd
sort 排序命令
将输入按照一定方式排序，然后再输出,它支持的排序有按字典排序,数字排序，按月份排序，随机排序，反转排序，指定特定字段进行排序等等。

# 字典排序
$ cat /etc/passswd | sort
# 反转排序
$ cat /etc/passwd | sort -r
# 按特定字段排序
$ cat /etc/passwd | sort -t':' -k 3
# 按照数字排序就要加上-n参数
$ cat /etc/passwd | sort -t':' -k 3 -n
-t参数用于指定字段的分隔符，这里是以":"作为分隔符；-k 字段号用于指定对哪一个字段进行排序

uniq 去重命令
uniq命令可以用于过滤或者输出重复行。

# 让history去掉命令后面的参数然后去掉重复的命令
$ history | cut -c 8- | cut -d ' ' -f 1 | uniq
# uniq命令只能去连续重复的行，不是全文去重，所以要达到预期效果，我们先排序：
$ history | cut -c 8- | cut -d ' ' -f 1 | sort | uniq
# 输出重复行
# 输出重复过的行（重复的只输出一个）及重复次数
$ history | cut -c 8- | cut -d ' ' -f 1 | sort | uniq -dc
# 输出所有重复的行
$ history | cut -c 8- | cut -d ' ' -f 1 | sort | uniq -D










tr 命令

-d 删除和set1匹配的字符，注意不是全词匹配也不是按字符顺序匹配

-s 去除set1指定的在输入文本中连续并重复的字符

# 删除 "hello world" 中所有的'o','l','h'
$ echo 'hello world' | tr -d 'olh'
# 将"hello" 中的ll,去重为一个l
$ echo 'hello' | tr -s 'l'



join file1 file2  将两个文件中相同的一行合并在一起  横向合并

-a<1或2> 除了显示原来的输出内容之外，还显示指令文件中没有相同栏位的行。
-e<字符串> 若[文件1]与[文件2]中找不到指定的栏位，则在输出中填入选项中的字符串。
-i或--igore-case 比较栏位内容时，忽略大小写的差异。
-o<格式> 按照指定的格式来显示结果。
-t<字符> 使用栏位的分隔字符。
-v<1或2> 跟-a相同，但是只显示文件中没有相同栏位的行。
-1<栏位> 连接[文件1]指定的栏位。
-2<栏位> 连接[文件2]指定的栏位。
--help 显示帮助。
--version 显示版本信息。


paste  将多个文件合并在一起 
  $ echo hello > file1
  $ echo shiyanlou > file2
  $ echo www.shiyanlou.com > file3

paste -d ':' file1 file2 file3

  $ paste -s file1 file2 file3
  -d	指定合并的分隔符，默认为Tab
  -s	不合并到一行，每个文件为一行
  







在线安装
sudo apt-get install cowsay
# 如果你在安装一个软件之后，无法立即使用Tab键补全这可命令,使用下述命令刷新
$ source ~/.zshrc


apt-get命令后可以接不同的工具实现不同的效果，描述如下：
工具 说明

install 其后加上软件包名，用于安装一个软件包

update 从软件源镜像服务器上下载/更新用于更新本地软件源的软件包列表

upgrade 升级本地可更新的全部软件包，但存在依赖问题时将不会升级，通常会在更新之前执行一次update

dist-upgrade 解决依赖关系并升级(存在一定危险性)

remove 移除已安装的软件包，包括与被移除软件包有依赖关系的软件包，但不包含软件包的配置文件

autoremove 移除之前被其他软件包依赖，但现在不再被使用的软件包

purge 与remove相同，但会完全移除软件包，包含其配置文件

clean 移除下载到本地的已经安装的软件包，默认保存在/var/cache/apt/archives/

autoclean 移除已安装的软件的旧版本软件包

apt-get后还可以更一些常见的参数，对这些参数的描述如下：

-y 自动回应是否安装软件包的选项，在一些自动化安装脚本中使用这个参数将十分有用

-s 模拟安装

-q 静默安装方式，指定多个q或者-q=#,#表示数字，用于设定静默级别，这在你不想要在安装软件包时屏幕输出过多时很有用

-f 修复损坏的依赖关系

-d 只下载不安装

--reinstall 重新安装已经安装但可能存在问题的软件包

--install-suggests 同时安装APT给出的建议安装的软件包

实例

安装 更新

# 重装
$ sudo apt-get --reinstall install w3m
# 更新软件源
$ sudo apt-get update
# 升级没有依赖问题的软件包
$ sudo apt-get upgrade
# 升级并解决依赖关系
$ sudo apt-get dist-upgrade
# 卸载
$ sudo apt-get remove w3m

# 不保留配置文件的移除
$ sudo apt-get purge w3m
# 或者 sudo apt-get --purge remove
# 移除不再需要的被依赖的软件包
$ sudo apt-get autoremove





安装deb



dpkg的常见参数

-i 安装指定deb包

-R 后面加上目录名，用于安装该目录下的所有deb安装包

-r remove，移除某个已安装的软件包

-I 显示deb包文件的信息

-s 显示已安装软件的信息

-S 搜索已安装的软件包
-L 显示已安装软件包的目录信息

使用实例

$ cp /var/cache/apt/archives/emacs24_24.3+1-4ubuntu1_amd64.deb ~
# 安装之前参看deb包的信息
$ sudo dpkg -I emacs24_24.3+1-4ubuntu1_amd64.deb
# dpkg并不能为你解决依赖关系
$ sudo dpkg -i emacs24_24.3+1-4ubuntu1_amd64.deb
# 修复依赖关系的安装
$ sudo apt-get -f install

# 查看已安装软件包的安装目录
$ sudo dpkg -L emacs











--------------------------------------------git----------------------------------------------------------


 


创建一个git用户
用于执行Git服务

adduser git

#创建自动登录文件
mkdir /home/git/.ssh/
touch /home/git/.ssh/authorized_keys

客户端生成自动登录公钥
（生成公钥命令：ssh-keygen -t rsa）
将其保存到/home/git/.ssh/authorized_keys文件中，一行一个；

初始化Git仓库
假定/git/test/作为Git仓库；

mkdir -p /git/test/    #创建文件夹

cd /git
chown git:git test/    #权限设置

cd ./test/
git init --bare .git/    #创建裸库

chown -R git:git .git
克隆仓库
git clone git@***:/git/test/.git #替换成服务器IP









git基本操作





创建数据库
$ git init
在要创建数据库的目录里执行init命令。
入门篇 【教程1 Git的基础】 新建数据库


添加
$ git add <filepattern>
在filepattern可以直接指定文件名。此外，也可以指令通配字符 ( 例如“*.txt” )。如果指令 ".” , 可以将子目录里的所有文件添加到索引
添加-p选项，就可以只添加文件修改的其中一部分。 如果添加 -i 选项，那么可以选择用对话形式显示添加在索引的文件。
入门篇 【教程1 Git的基础】 提交文件



提交
$ git commit  
添加-a选项，就可以检测出修改的文件 (不包括新添加的文件)，将其添加至索引并提交。这些操作只要一个指令就可以完成了。添加-m选项，就可以指令提交 “提交信息”。如果不添加-m选项，就会启动修改提交信息的编辑器。
入门篇 【教程1 Git的基础】 提交文件


状态
$ git status
添加-s选项，就可以不显示讲解。如果再添加-b选项，就不显示讲解，但显示分支的名称。

写在.gitignore文件里的文件不会被托管 
举例 
/dist  不托管根目录下的dist文件  其他地方的会托管




查看修改文件的差异
$ git diff
不指定选项可以显示工作树和索引的差异。添加－cached 选项可以显示索引与HEAD的差异。如果指定HEAD或提交，则可以显示工作树和指定HEAD之间的差异。


显示提交记录
$ git log
若要查看特定文件的提交记录，请指定文件名称。


查看提交的详细记录
$ git show <commit>
show命令的参数可以指定log命令参阅的提交与HEAD。


修改，移动文件的名称或目录的名称
$ git mv <oldfilename> <newfilename>


删除文件
$ git rm <file>


删除文件夹aaa
git commit -m "delete aaa"


git commit -m "delete raindow"


删除非管理对象的文件
$ git clean
添加-n选项就可以查看即将被删除的文件。如果添加-f选项，就立即删除文件。
在默认程序里，.gitignore指定的文件不在删除范围内。如果添加-x选项，.gitignore指定的文件也成为删除对象了。


还原正在手头上修改，还没被添加到索引里的文件
$ git checkout -- <file>


删除已添加到索引的文件
$ git reset HEAD -- <file>


只添加已提交过的文件到索引
$ git add -u



分支操作

显示分支清单
$ git branch
添加-a选项，就可以显示包括远端分支在内的分支清单。

创建分支
$ git branch <branchname>

高级篇 【教程1 操作分支】 1. 建立分支


修改分支的名称
$ git branch -m <oldbranch> <newbranch>

删除分支
$ git branch -d <branchname>
若有未合并到HEAD的提交，则不能删除分支。如果要强制删除未提交的分支，请添加-D选项执行。

高级篇 【教程1 操作分支】 4. 删除分支


切换分支
$ git checkout <branch>
如果添加-b 选项，只需1个命令就可以执行新建分支和已建分支之间的切换。 

高级篇 【分支】 分支的切换


高级篇 【教程1 操作分支】 2. 切换分支


合并分支
$ git merge <branch>
如果添加 --no-ff 选项，就是fast-forward合并也可以建立合并提交。这是记录分支存在过的非常有用的选项。

高级篇 【分支】 分支的合并


高级篇 【教程1 操作分支】 3. 合并分支




 






























--------------------------------------------vi --------------------------------

按Esc进入普通模式，在该模式下使用方向键或者h,j,k,l键可以移动游标。

 
h	左
l	右（小写L）
j	下
k	上
w	移动到下一个单词
b	移动到上一个单词

 

在普通模式下使用下面的键将进入插入模式，并可以从相应的位置开始输入

命令	说明
i	在当前光标处进行编辑
I	在行首插入
A	在行末插入
a	在光标后插入编辑
o	在当前行后插入一个新行
O	在当前行前插入一个新行
cw	替换从光标所在位置后到一个单词结尾的字符

 
从普通模式输入:进入命令行模式，输入w回车，保存文档

 从普通模式输入:进入命令行模式，输入wq回车，保存并退出编辑

以下为其它几种退出方式：

命令	说明
:q!	强制退出，不保存
:q	退出
:wq!	强制保存并退出
:w <文件>	另存为
:saveas 文件	另存为
:x	保存并退出
:wq	保存并退出
 
普通模式下输入Shift+zz即可保存退出vim

 
进入普通模式，使用下列命令可以进行文本快速删除：

 
x	删除游标所在的字符
X	删除游标所在前一个字符
Delete	同x
dd	删除整行
dw	删除一个单词（不适用中文）
d$或D	删除至行尾
d^	删除至行首
dG	删除到文档结尾处
d1G	删至文档首部

行间跳转 
nG (n Shift+g)	游标移动到第 n 行(如果默认没有显示行号，请先进入命令模式，输入:set nu以显示行号)
gg	游标移动到到第一行
G (Shift+g)	到最后一行


行内跳转
普通模式下使用下列命令在行内按照单词为单位进行跳转

命令	说明
w	到下一个单词的开头
e	到当前单词的结尾
b	到前一个单词的开头
ge	到前一个单词的结尾
0或^	到行头
$	到行尾
f<字母>	向后搜索<字母>(非常实用)
F<字母>	向前搜索<字母>并跳转到第一个匹配的位置
t<字母>	向后搜索<字母>并跳转到第一个匹配位置之前的一个字母(不常用)
T<字母>	向前搜索<字母>并跳转到第一个匹配位置之后的一个字母(不常用)
依次进行如下操作练习：

在普通模式下，任意跳转到一行，使用w跳转到一个单词的开头，然后使用dw删除这个单词
在普通模式下，使用e跳转到一个单词的结尾，并使用~将游标所在字母变成大写或小写

 ？向上查找 / 向下查找
\#  向前（上）找，\* 向后（下）找
 
普通模式下输入/icmp查找字符串icmp
普通模式下输入n查找下一个icmp
普通模式下输入？tcp向上查找字符串tcp
普通模式下输入N查找上一个出现的tcp





高级查找
普通模式下输入\*寻找游标所在处的单词
普通模式下输入\#同上，但 \# 是向前（上）找，\*则是向后（下）找
普通模式下输入g\*同\* ，但部分符合该单词即可
普通模式下输入g\#同\# ，但部分符合该单词即可



--------------------------------mysql--------------------------




mysql 是关系型数据库管理系统 关系型数据库是建立在关系数据库模型基础上的数据库
借助于集合代数等概念和方法来处理数据库中的数据 



安装 mysql 服务端  核心程序
sudo apt-get install mysql-server

安装 MySQL 客户端

sudo apt-get install mysql-client

安装结束后 用命令验证是否安装成功 并启动
sudo netstat -tap | grep mysql

需要的东西
sudo apt-get install libfreetype6
sudo apt-get install libaio1


启动服务 

sudo service mysql start















 -----------------------------------------python -----------------------------------

在函数之间空一格
在类之间空两格


添加可执行权限  chmod +x hello.py

内置函数

filter()函数接收一个函数 f 和一个list，根据判断结果自动过滤掉不符合条件的元素 留下符合条件的元素组成新list









字符串的方法 

s = “shi yan lou”
s.title()      返回字符串的标题版本
s.upper()      返回字符串的全部大写版本
s.lower()      返回字符串的全部小写版本
s.swapcase()   返回字符串大小写交换后的版本
s.isalnum()    检查字符串是否只有数字和字母
s.isalpha()    检查字符串之中是否只有字母
s.isdigit()    检查所有字符串是否只有数字
s.islower()    检查所有字符串是否只有小写
s.isupper()    检查所有字符串是否只有大写
s.istitle()    检查所有字符串是否为标题样式

 
s.split()       通过指定的分隔符对字符串进行切片 返回列表                                                                        
s.replace(" ","")   替换  空格替换成""

x = "1.2.3.4.5.6.7"                             
x.split(".",2)[2]   #用.分割 两次 取第三项
结果：'3.4.5.6.7'


切片
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



遍历a-z
echo{a..z}
'abcdefghijklmnopqrstuvwxyz'
for i in range(97,123):print(chr(i))







 
 









列表
>>> x=[1,2,3,4,5]
>>> x[2:0]=[100]     添加列表  在第三个位置添加100
>>> x
[1, 2, 100, 3, 4, 5]







---------------------------------------------正则-----------------------------------------------------------------------------------


re.match(p, s  [, flags])        从首字母开始匹配 字符串包含子项  则成功 返回match对象 失败返回none  
re.search(p, s  [, flags])       如果包含多个只返回第一个
re.findall(p, s  [, flags])      返回匹配的全部 返回形式为数组
re.finditer(p, s  [, flags])     返回全部       返回为迭代器
 
p-----pattern	匹配的正则表达式
s-----string	要匹配的字符串。
flags	标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。


正则是记录文本规则的代码   

正则表达式是用来进行文本匹配的工具


.  单个字符

*  零次到n次

常用的元字符

\w \s \d \b  ^  $

wsd匹配字符   b匹配位置

\d =[0-9]

电话号
029-11111111
0\d{2}-\d{8}


匹配单词 露天\b  不露天

\w  匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'   不能匹配符号

\W =不匹配\w



\s = [ \f\n\r\t\v]  匹配任何空白字符，包括空格、制表符、换页符等等。  

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






常用限定符
* 零次到多次
+ 一次到多次
？ 零次到一次
{n} n次  
{n,} n次到多次  {5,} 至少5位 不能少
{n,m} n次到m次  

{2} 是能匹配2位
{5,12}  大于5位 小于12位


ip
((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)   
 注释 (?#内容)  2[0-4]\d(?#200-249)|25[0-5](?#250-255)|[01]?\d\d?(?#0-199)      


























