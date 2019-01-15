path.dirname(path)  返回 path 的目录名
	console.log(path.dirname('/foo/bar/baz/asdf/a.txt'));  
	// /foo/bar/baz/asdf
	console.log(path.dirname('/foo/bar/baz/asdf/'));  
	// /foo/bar/baz

path.basename(path[, ext])  返回路径的最后一个部分，即文件名。 ext为需要截掉的后缀  
	console.log(path.basename('/foo/bar/baz/asdf/a.txt')); 
	// a.txt
	console.log(path.basename('/foo/bar/baz/asdf/a.txt','.txt'));  
	// a	

path.extname(path) 返回拓展名 
	path.extname('index.html');
	// 返回: '.html'
	
	path.extname('index.');
	// 返回: '.'
	
	path.extname('index');
	// 返回: ''
	
	path.extname('.index');
	// 返回: ''



分隔符

	path.delimiter 路径分隔符 \
	path.sep       文件分隔符 ;
	
	var path = require('path');
	console.log(path.delimiter); //win下为“;”
	console.log(path.sep);  // win下为\


规范化路径
	path.normalize(path) 规范化路径
		path.normalize('C:\\temp\\\\foo\\bar\\..\\');
		// 返回: 'C:\\temp\\foo\\'
		
		path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar');
		// 返回: 'C:\\temp\\foo\\bar'
	
	
	path.join(...paths)  连接路径  
		如果连接后的路径是一个空字符串，则返回 '.'，表示当前工作目录。
		
		path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
		// 返回: '/foo/bar/baz/asdf'
		path.join()
		// "."




path.relative(from, to) 从 from 到 to 的相对路径（基于当前工作目录）
	path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
	// 返回: '..\\..\\impl\\bbb'

path.resolve([...paths])路径片段处理成绝对路径

	path.resolve('/foo/bar', './baz');
	// 返回: 'C:\\foo\\bar\\baz'
	
	path.resolve('/foo/bar', '/baz');
	// 返回: 'C:\\baz'

	path.resolve('wwwroot', 'a/png/', '../gif/image.gif');
	// 返回: 'C:\\Users\\sky\\wwwroot\\a\\gif\\image.gif'


path.parse('C:\\path\\dir\\file.txt');  返回一个对象
// 返回:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

│          dir        │    base    │
├──────┬────────────  ├──────┬─────┤
│ root │              │ name │ ext │
" C:\      path\dir   \ file  .txt "




