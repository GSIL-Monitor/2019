export default {
  //封装Cookie函数
  Cookie(name, value, options) {
    // 如果第二个参数存在
    if (typeof value != 'undefined') {
      options = options || {};
      if (value === null) {
        // 设置失效时间
        options.expires = -1;
      }
      var expires = '';
      // 如果存在事件参数项，并且类型为 number，或者具体的时间，那么分别设置事件
      if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
        var date;
        if (typeof options.expires == 'number') {
          date = new Date();
          date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        } else {
          date = options.expires;
        }
        expires = '; expires=' + date.toUTCString();
      }
      var path = options.path ? '; path=' + options.path : '', // 设置路径
        domain = options.domain ? '; domain=' + options.domain : '', // 设置域 
        secure = options.secure ? '; secure' : ''; // 设置安全措施，为 true 则直接设置，否则为空

      // 把所有字符串信息都存入数组，然后调用 join() 方法转换为字符串，并写入 Cookie 信息
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // 如果第二个参数不存在
      var CookieValue = null;
      if (document.cookie && document.cookie != '') {
        var Cookie = document.cookie.split(';');
        for (var i = 0; i < Cookie.length; i++) {
          var Cookie = (Cookie[i] || "").replace(/^\s+|\s+$/g, "");
          if (Cookie.substring(0, name.length + 1) == (name + '=')) {
            CookieValue = decodeURIComponent(Cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return CookieValue;
    }
  },
  //深度拷贝对象
  deepCopy: function (obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          result[key] = this.deepCopy(obj[key]); //递归复制
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  },
  // 关闭窗口时清除信息
  clearMessage(obj) {
    var arr = Object.keys(obj)
    arr.forEach(function (item) {
      obj[item] = ''
    })

  },
  //搜索流量节流
  throttle(fn, time) {
    time = time || 2000;
    var clock
    clearTimeout(clock);
    var arg = arguments;
    clock = setTimeout(function () {
      fn()
    }, time);

  },
  //判断请求添加接口成功或失败
  app(res, fn1, fn2) {
    if (res.data.code == 0) {
      this.$message.success('添加成功')
      fn1() || null
    } else {
      this.$message.error('添加失败')
      fn2() || null
    }
  },
  //对象属性过滤器
  formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
  },
  //下拉搜索框公用方法
  dropSearch(v, cb) {
    var result, clock
    fn().then(res => {
      result = res.data.rows;
      clearTimeout(clock)
      clock = setTimeout(() => {
        cb(result)
      }, 1000 * Math.random())
    });
  }
}
