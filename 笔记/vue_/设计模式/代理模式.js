送花
	var Flower = function(){}
	var xiaoming = {
		sendFlower:function(target){
			var flower = new Flower();
			target.receiveFlower(flower)
		}
	}

	var A = {
		receiveFlower:function(flower){
			console.log('收到花'+ flower)
		}
	}

	xiaoming.sendFlower(A)



代理送花

	var Flower = function(){}

	var xiaoming = {
		sendFlower: function(target){
			var flower = new Flower();
			target.receiveFlower(flower);
		}
	}

	var B ={
		r*eceiveFlower:function(flower){
			A.listenGoodMood(function(){
				A.receiveFlower(flowe);
			})
		}
	}

	var A = {
		receiveFlower:function(flower){
			console.log('收到花'+flower)
		}
		listenGoodMood:function(fn){
			setTimeout(function(){
				 fn()
				 console.log(fn)
			},10000)
			
		}
	}

	xiaoming.sendFlower(B)


虚拟代理实现图片预加载

	var myImage = (function(){
		var imgNode = document.createElement('img')
		document.body.appendChild(imgNode)
		return{
			setSrc:function(src){
				imgNode.src = src
			}
		}
	})();
	var proxyImage = (function(){
		var img = new Image
		img.onload = function(){
			myImage.setSrc(this.src)
		}
		return {
			setSrc:function(src){
				myImage.setSrc('chrome-search://ntpicon/size/24@1.25x/https://c1178396429.github.io/resume/blue/blue.html')
				img.src = src
			}
		}

	})()
	proxyImage.setSrc('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548338252307&di=387e015f96b3f5dd0b690ea9056e8278&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F03744625954bd29a8012193a3552ff6.jpg')
