//轮播图1
var all = ['images/indexImages/banner_bg0.png', 'images/indexImages/banner_bg1.png', 'images/indexImages/banner_bg2.png']
var bannerBG = 1;
var banner = document.getElementById('banner_action')
setInterval('srtat()', 2000) //无线循环
function srtat() {
	banner.innerHTML = '<img src="images/indexImages/banner_bg' + bannerBG + '.png" alt="" />'
	bannerBG++;
	if(bannerBG == 3) {
		bannerBG = 0;
	}
}

function bannerLeft() {
	if(bannerBG == 0 || bannerBG == 1 || bannerBG == 2) {

		banner.innerHTML = '<img src="images/indexImages/banner_bg' + bannerBG + '.png" alt="" />'
		bannerBG++
		if(bannerBG == 3) {
			bannerBG = 0;
		}
	}
}

function bannerRight() {
	if(bannerBG == 0 || bannerBG == 1 || bannerBG == 2) {
		banner.innerHTML = '<img src="images/indexImages/banner_bg' + bannerBG + '.png" alt="" />'
		bannerBG--
		if(bannerBG == -1) {
			bannerBG = 2;
		}
	}
}
//轮播图2国内游
var gny = document.getElementById('gny')
var gnPic=0;
function gny1() {
	gnPic++
	gny.innerHTML = '<img src="images/indexImages/guoneitu'+gnPic+'.png" alt="" />'
	if(gnPic==3){
		gnPic=0;
	}
}

function gny2() {
	gnPic++
	gny.innerHTML = '<img src="images/indexImages/guoneitu'+gnPic+'.png" alt="" />'
		if(gnPic==3){
		gnPic=0;
	}
}
function gny3() {
	gnPic++
	
	gny.innerHTML = '<img src="images/indexImages/guoneitu'+gnPic+'.png" alt="" />'
		if(gnPic==3){
		gnPic=0;
	}
}

////小车运动 方案一
//var scrollFunc=function(e){ 
//  e=e || window.event; 
//  var t1=document.getElementById("article_car"); 
//  if(e.wheelDelta){//IE/Opera/Chrome 
//      t1.value=e.wheelDelta; 
//      console.log(e.wheelDelta);
//      if(e.wheelDelta<0){
////      		t1.className='article_car_move';
//      }else{
////     	 	t1.className='article_car_paused';
//      }
//  }
//} 
///*注册事件*/ 
//if(document.addEventListener){ 
//  document.addEventListener('DOMMouseScroll',scrollFunc,false); 
//}//W3C 
//window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 

//小车运动  方法二

//HTML精确定位:scrollLeft,scrollWidth,clientWidth,offsetWidth 
//scrollHeight: 获取对象的滚动高度。 
//scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离 
//scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 
//scrollWidth:获取对象的滚动宽度 
//offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度 
//offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置 
//offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
//event.clientX 相对文档的水平座标 
//event.clientY 相对文档的垂直座标 
//event.offsetX 相对容器的水平坐标 
//event.offsetY 相对容器的垂直坐标 
//document.documentElement.scrollTop 垂直方向滚动的值 
//event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
//
//这里是javascript中建造迁移转变代码的常用属性
//页可见区域宽： document.body.clientWidth;
//网页可见区域高： document.body.clientHeight;
//网页可见区域宽： document.body.offsetWidth   （包含边线的宽）;
//网页可见区域高： document.body.offsetHeight （包含边线的宽）;
//网页正文全文宽： document.body.scrollWidth;
//网页正文全文高： document.body.scrollHeight;
//网页被卷去的高： document.body.scrollTop;
//网页被卷去的左： document.body.scrollLeft;
//网页正文项目组上： window.screenTop;
//网页正文项目组左： window.screenLeft;
//屏幕辨别率的高： window.screen.height;
//屏幕辨别率的宽： window.screen.width;
//屏幕可用工作区高度： window.screen.availHeight;
var article_car = document.getElementById('article_car')
onscroll = function() {
	var article_top = document.body.scrollTop;
	console.log(article_top)
	var rood1 = 235 - article_top;
	if(article_top < 155) {
		article_car.style.cssText = 'position: absolute;top: 60px;left:' + rood1 + 'px;'
	}
	var rood2 = 126 - article_top - 155;
	if(article_top > 155) {
		article_car.style.cssText = 'position: absolute;top: 60px;left:80px;transform: rotateZ(' + rood2 + 'deg);'
	}
	var rood3 = article_top - 170;
	if(article_top > 240) {
		article_car.style.cssText = 'position: absolute;top: ' + rood3 + 'px;left:80px;transform: rotateZ(90deg);'
	}
	var rood4 = 1110 + 100 - article_top
	if(article_top > 1120) {
		article_car.style.cssText = 'position: absolute;top: 955px;left:80px;transform: rotateZ(' + rood4 + 'deg);'
	}
	var rood5 = article_top * 7 - 7800 + 300 - 835;
	if(article_top > 1200) {
		article_car.style.cssText = 'position: absolute;top: 955px;left:' + rood5 + 'px;transform: rotateZ(0deg);'
	}
	var rood6 = article_top * 6 - 8580;

	if(article_top > 1430) {
		article_car.style.cssText = 'position: absolute;top: 955px;left:1670px;transform: rotateZ(' + rood6 + 'deg);'
	}
	var rood7 = article_top * 2 - 2790 + 860;
	if(article_top > 1445) {
		article_car.style.cssText = 'position: absolute;top:' + rood7 + 'px;left:1670px;transform: rotateZ(90deg);'
	}
	var rood8 = article_top * 7 - 7800 + 45;
	if(article_top > 1840) {
		article_car.style.cssText = 'position: absolute;top:1750px;left:1670px;transform: rotateZ(' + rood8 + 'deg);'
	}
	var rood9 = 1670 - article_top * 7 + 12971;
	if(article_top > 1854) {
		article_car.style.cssText = 'position: absolute;top:1750px;left:' + rood9 + 'px;transform: rotateZ(180deg);'
	}

	var rood10 = 180 - article_top * 3 + 6240;
	if(article_top > 2080) {
		article_car.style.cssText = 'position: absolute;top:1750px;left:80px;transform: rotateZ(' + rood10 + 'deg);'
	}
	var rood11 = article_top - 2110 + 1750;
	if(article_top > 2110) {
		article_car.style.cssText = 'position: absolute;top:' + rood11 + 'px;left:80px;transform: rotateZ(90deg);'
		article_car.style.zIndex = '0'
	}
	var rood11 = article_top - 2110 + 1750;

	if(article_top > 2355) {
		article_car.style.cssText = 'position: absolute;top:2100px;left:80px;transform: rotateZ(90deg);'
		article_car.style.zIndex = '0'
	}
	var rood12 = article_top - 2110 + 1750;
	if(article_top > 2400) {
		article_car.style.cssText = 'position: absolute;top:2380px;left:925px;transform: rotateZ(90deg);'
		article_car.style.zIndex = '0'
	}
	var rood13 = article_top - 2510 + 2300;
	if(article_top > 2600) {
		article_car.style.cssText = 'position: absolute;top:' + rood13 + 'px;left:925px;transform: rotateZ(90deg);'
		article_car.style.zIndex = '0'
	}
	var rood14 = 80 - article_top + 2900 + 50;
	if(article_top > 2939) {
		article_car.style.cssText = 'position: absolute;top:2734px;left:925px;transform: rotateZ(' + rood14 + 'deg);'
	}
	var rood15 = article_top * 6 - 18156 + 915;

	if(article_top > 3028) {
		article_car.style.cssText = 'position: absolute;top:2734px;left:' + rood15 + 'px;transform: rotateZ(0deg);'
	}
	var rood16 = article_top * 5 - 15768;
	if(article_top > 3152) {
		article_car.style.cssText = 'position: absolute;top:2734px;left:1675px;transform: rotateZ(' + rood16 + 'deg);'
	}
	var rood17 = article_top - 3160 + 2730;
	if(article_top > 3172) {
		article_car.style.cssText = 'position: absolute;top:' + rood17 + 'px;left:1675px;transform: rotateZ(90deg);'
		article_car.style.zIndex = '0'

	}
	if(article_top > 5200) {

		article_car.style.cssText = 'position: absolute;top:4800px;left:1675px;transform: rotateZ(90deg);'
		article_car.style.zIndex = '0'
	}
	//	路线标签
	if(article_top > 1970) {
		//		console.log(200000)
		var dis_1 = document.getElementById('dis_1');
		dis_1.classList.add('dis_open')
	}

	if(article_top > 2960) {
		//		console.log(200000)
		var dis_2 = document.getElementById('dis_zt_ti');
		dis_2.classList.add('dis_open')
	}
	if(article_top > 4670) {
		//		console.log(200000)
		var dis_2 = document.getElementById('dis_hot2');
		dis_2.classList.add('dis_open')
	}

	if(article_top > 730) {
		//		console.log(200000)
		var dis_2 = document.getElementById('jiebaner_title');
		dis_2.classList.add('dis_open')
	}

	if(article_top > 1620) {
		//		console.log(200000)
		var dis_2 = document.getElementById('guoneiyou_title');
		dis_2.classList.add('dis_open')
	}

}