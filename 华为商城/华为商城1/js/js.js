// JavaScript Document



window.onload = function(){
	//变色
  /*  var abody  = document.getElementById('abody');
	var a = abody.getElementsByTagName('a')
	var color  = document.getElementById('color');
	color.onclick = function()
	{    for(var i= 0;i<a.length;i++)
	      {
			  a[i].style.color = 'white';
	      }
		 abody.style.background = 'black';
		 
	}*/

//startMove	
function getStyle(obj, attr) {
    return obj.currentStyle?obj.currentStyle[attr]:window.getComputedStyle(obj, false)[attr];
}

function getByClassName(parent, name) {
    var aResult = [];
    var arr = parent.getElementsByTagName('*');
    for (var i=0,len=arr.length; i<len;i++) {
        if (arr[i].className===name) {
            aResult.push(arr[i]);
        }
    }
    return aResult;
}

function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for(var attr in json) {
            var icur = 0;
            if (attr==='opacity') {
                icur = parseInt(parseFloat(getStyle(obj, attr))*100);
            } else {
                icur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - icur)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            if (icur!==json[attr]) {
                bStop = false;
            }
            if (attr==='opacity') {
                obj.style.opacity = (icur + speed) /100;
                obj.style.filter = "alpha(opacity="+(icur+speed)+")";
            } else {
                obj.style[attr] = icur + speed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    },30);
}
//

//返回顶部/导航悬浮
  var wrap =document.getElementById('wrap');
  var oTop = document.getElementById("totop");
  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  var sidea = document.getElementById('side-bar');
  var lis = document.querySelectorAll('#side-bar ul li input');
  oTop.style.left = screenw - oTop.offsetWidth +"px";
  oTop.style.top = screenh - oTop.offsetHeight + "px";
  window.onscroll = function(){
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    oTop.style.top = screenh - oTop.offsetHeight + scrolltop+"px";
	 wrap.style.top =scrolltop + "px";//将元素top定位
	 
//侧导航定位
	if(scrolltop>300){
     sidea.style.display = 'block';
	}
	else{
		sidea.style.display = 'none';
	}
    if((scrolltop>500)&&(1500>scrolltop)){
     lis[0].style.color ='white';
	 lis[0].style.background = 'black';
	  
	}
	else{
     lis[0].style.color ='black';
	 lis[0].style.background = 'white';
	 lis[0].style.opacity=0.6;
   }
       if((scrolltop>1500)&&(2200>scrolltop)){
     lis[1].style.color ='white';
	 lis[1].style.background = 'black';
	
	}
	else{
     lis[1].style.color ='black';
	 lis[1].style.background = 'white';
	 lis[1].style.opacity=0.6;
   }
       if((scrolltop>2200)&&(2920>scrolltop)){
     lis[2].style.color ='white';
	 lis[2].style.background = 'black';
	}
	else{
     lis[2].style.color ='black';
	 lis[2].style.background = 'white';
	 lis[2].style.opacity=0.6;
   }
       if((scrolltop>2920)&&(3640>scrolltop)){
     lis[3].style.color ='white';
	 lis[3].style.background = 'black';

	}
	else{
     lis[3].style.color ='black';
	 lis[3].style.background = 'white';
	 lis[3].style.opacity=0.6;
   }
 lis[0].onclick = function(){document.documentElement.scrollTop = document.body.scrollTop = 700;}
 lis[1].onclick = function(){document.documentElement.scrollTop = document.body.scrollTop = 1800;}
 lis[2].onclick = function(){document.documentElement.scrollTop = document.body.scrollTop = 2600;}
 lis[3].onclick = function(){document.documentElement.scrollTop = document.body.scrollTop = 3400;}
 
  }
  oTop.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
	
  }
  //侧栏
 	
 
//分享栏
var sharebtn = document.getElementById('a');
var share = document.getElementById('share');
share.onmouseover  = function(){
 startMove(share,{right:0});
}
share.onmouseout  = function(){
 startMove(share,{right:-94});
}


//顶部	
var morebtn = document.getElementById('morebtn');
var more = document.getElementById('more');
morebtn.onmouseover = function(){
	more.style.display = 'block';
  }
 more.onmouseover = function(){
	more.style.display = 'block';
  }
  more.onmouseout = function(){
    more.style.display = 'none';
   }
    morebtn.onmouseout = function(){
    more.style.display = 'none';
   }

//侧栏/轮播图
var hot = document.getElementById('hot-img')
var aimg = document.querySelectorAll('#hot-img img');
var bspan = document.querySelectorAll('#follow span');
var leftbtn = document.getElementById('leftbtn');
var rightbtn = document.getElementById('rightbtn');

function showimg (index){
	for(var i = 0;i<aimg.length;i++)
    {
		aimg[i].index = i;
		bspan[i].index = i;
		aimg[i].style.zindex = 100-i;
		aimg[i].style.opacity = 0 ;
		bspan[i].style.background = 'gray';
	}
 aimg[index].style.opacity = 1;
 bspan[index].style.background = 'white';
}
showimg(0);
var count =1;
function imgmove()
{
		if(count ==4)
		{
			count = 0;
		}
		showimg(count);
		count++;
}
var timerb = null;
timerb = setInterval(imgmove,4000);

//小圆点
for(var i =0;i<bspan.length;i++)
{
	bspan[i].onmouseover = function()
	{
		clearInterval(timerb);
		showimg(this.index)
		timerb = setInterval(imgmove,4000);
	}
}
//向左向右按钮
leftbtn.onclick =function() {
	clearInterval(timerb);
 	if(count==0)
	{
		count = 4; 
	}
	count--;
	showimg(count);
	timerb = setInterval(imgmove,4000);
}
rightbtn.onclick = function(){
	clearInterval(timerb);
	imgmove();
	timerb = setInterval(imgmove,4000);
}

//向左向右按钮
hot.onmouseover = function(){
	startMove(leftbtn,{opacity:100});
	startMove(rightbtn,{opacity:100});
}
hot.onmouseout = function(){
	startMove(leftbtn,{opacity:20});
	startMove(rightbtn,{opacity:20});
}
//侧栏
var alistli = document.querySelectorAll('#list ul li');
var alistdiv = document.getElementsByClassName('list-more');
var listimg = document.querySelectorAll('.list-more-last ul li div');
for(var i = 0;i<alistli.length;i++)
{
	alistli[i].index=i;
	alistdiv[i].index = i;
}
for(var i = 0;i<alistli.length;i++)
{
	alistli[i].onmouseover = function()
	{
		alistdiv[this.index].style.display = 'block';
	}
	alistli[i].onmouseout = function()
	{
		alistdiv[this.index].style.display = 'none';
	}
	
}
for(var i = 0;i<alistdiv.length;i++)
{
	alistdiv[i].onmouseover = function()
	{
		alistdiv[this.index].style.display = 'block';
	}
	alistdiv[i].onmouseout = function()
	{
		alistdiv[this.index].style.display = 'none';
	}
	
}
//图片上移
for(var i=0;i<listimg.length;i++)
{
 	listimg[i].index=i;
}
for(var i=0;i<listimg.length;i++)
{
   listimg[i].onmouseover = function(){
   		startMove(listimg[this.index],{top:4});
   }
   listimg[i].onmouseout = function(){
   		startMove(listimg[this.index],{top:0});
   }
}

var message = document.getElementById('message');
var messageul = document.getElementById('messageul');
setInterval(function(){
					 if(messageul.offsetTop<-81)
					 { 
						 messageul.style.top = 0+'px';
					 }
					 messageul.style.top = messageul.offsetTop - 27 +'px';
					 },2000)
//商品展示上移
	var f3rightimg = document.querySelectorAll('.f3right ul li div');
   for(var i=0;i<f3rightimg.length;i++)
	{
		f3rightimg[i].index=i;
	}
	for(var i=0;i<f3rightimg.length;i++)
	{
	  f3rightimg[i].onmouseover = function(){
			startMove(f3rightimg[this.index],{top:6});
	   }
	   f3rightimg[i].onmouseout = function(){
			startMove(f3rightimg[this.index],{top:0});
	   }
	   
	}
//精品推荐 
var leftbtn1 = document.getElementById('leftbtn1');
var rightbtn1 = document.getElementById('rightbtn1');
var common4ul = document.getElementById('common4ul');
var commona = document.getElementById('common4');
 rightbtn1.onclick = function(){
  	 if(common4ul.offsetLeft<217){
		  leftbtn1.style.display = 'block';
		 }
		 else{leftbtn1.style.display = 'none';}
	if(common4ul.offsetLeft<-1519){
		  rightbtn1.style.display = 'none';
		 }
	if(common4ul.offsetLeft>-1519){
		rightbtn1.style.display = 'block';
		}	 

 	 common4ul.style.left = common4ul.offsetLeft - 217  + 'px' ;
  }
   leftbtn1.onclick = function(){
  	   	 if(common4ul.offsetLeft<217){
		  leftbtn1.style.display = 'block';
		 }
		 if(common4ul.offsetLeft>-434){
		  leftbtn1.style.display = 'none';
		 }
	if(common4ul.offsetLeft<-1519){
		  rightbtn1.style.display = 'none';
		 }
	if(common4ul.offsetLeft>-1953){
		rightbtn1.style.display = 'block';
		}	 

 	 common4ul.style.left = common4ul.offsetLeft + 217  + 'px' ;
  }
//精品推荐 图片上移
	var common4img = document.querySelectorAll('.common4 ul li div');
   for(var i=0;i<common4img.length;i++)
	{
		common4img[i].index=i;
	}
	for(var i=0;i<common4img.length;i++)
	{
	  common4img[i].onmouseover = function(){
			startMove(common4img[this.index],{top:6});
	   }
	   common4img[i].onmouseout = function(){
			startMove(common4img[this.index],{top:0});
	   }
	   
	}
common4ul.onmouseover = function(){
	startMove(leftbtn1,{opacity:100});
	startMove(rightbtn1,{opacity:100});
}
common4ul.onmouseout = function(){
	startMove(leftbtn1,{opacity:40});
	startMove(rightbtn1,{opacity:40});
}



//轮播2
var common5 = document.getElementById('common5')
var common5img = document.querySelectorAll('#common5 img');
var aspan = document.querySelectorAll('#afollow span');


function showimga (index){
	for(var i = 0;i<common5img.length;i++)
    {
		common5img[i].index = i;
		aspan[i].index = i;
		common5img[i].style.zindex = 100-i;
		common5img[i].style.opacity = 0 ;
		aspan[i].style.background = 'gray';
	}
 common5img[index].style.opacity = 1;
 aspan[index].style.background = 'white';
}
showimga(0);
var counta =1;
function imgmovea()
{
		if(counta ==3)
		{
			counta = 0;
		}
		showimga(counta);
		counta++;
}
var timera = null;
timera = setInterval(imgmovea,4000);

//小圆点
for(var i =0;i<aspan.length;i++)
{
	aspan[i].onmouseover = function()
	{
		clearInterval(timera);
		showimga(this.index)
		timera = setInterval(imgmovea,4000);
	}
}
//更多商品展示
	var common6img = document.querySelectorAll('#common6 ul li div');
   for(var i=0;i<common6img.length;i++)
	{
		common6img[i].index=i;
	}
	for(var i=0;i<common6img.length;i++)
	{
	  common6img[i].onmouseover = function(){
			startMove(common6img[this.index],{top:6});
	   }
	   common6img[i].onmouseout = function(){
			startMove(common6img[this.index],{top:0});
	   }
	   
	}

}










