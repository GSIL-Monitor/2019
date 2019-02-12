

存储 
	sessionStorage.setItem("name", "hzzly");
	localStorage.setItem("blog", "hzzly.github.io");
	// 多次添加 相同的 key value 只添加了一次  
	// 相同的 key  会覆盖 vlaue

获取
	sessionStorage.getItem("name")
	localStorage.getItem("blog")

删除 
	sessionStorage.removeItem("name")
	localStorage.removeItem("blog")

清除所有
	sessionStorage.clear()
	localStorage.clear()



存取对象
	//存
	var Info = {
		'name': 'hzzly',
		'age': 21,
		'school': 'ECUT',
		'city': 'NanChang'
	}
	localStorage.Info = JSON.stringify(Info)
	sessionStorage.Info = JSON.stringify(Info)
	//取
	var storageLanguage = JSON.parse(localStorage.Info)	

存取数组
 
	//存
	var language = ['HTML/HTML5', 'CSS/CSS3', 'JavaScript', 'Vue', 'React']
	localStorage.language = JSON.stringify(language)
	sessionStorage.language = JSON.stringify(language)
	//取
	var storageLanguage = JSON.parse(localStorage.language)

遍历

	for(var i = 0; i < localStorage.length; i++){
	    var key = localStorage.key(i);
	    var value = localStorage.getItem(key);   
	    console.log(value)
	}
