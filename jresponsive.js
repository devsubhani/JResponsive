/*
Copyright (c) <2013> <Tuyen Le> http://tlportfolio.my-board.org/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function(e){if(!window.console)(function(){var e,t;t=function(){function t(){this.__buffer.push(arguments)}var n=setInterval(function(){var t;if(window.console&&console.log&&!console.__buffer){clearInterval(n);t=Function.prototype.bind?Function.prototype.bind.call(console.log,console):console.log;for(var r=0;r<e.__buffer.length;r++)t.apply(console,e.__buffer[r])}},1e3);this.log=t;this.error=t;this.warn=t;this.info=t;this.__buffer=[]};e=window.console=new t})();e.fn.jresponsive=function(t,n){var r={actual_width:0,actual_height:0,number:0,min_size:0,max_size:0,hspace:0,vspace:0,nav_size:0,container_name:"",class_name:"",width:0,height:0,left:0,top:0,row:0,transformation:"",callback:null,content_array:[],innit:function(t,n,i,s,o,u,a,f,l,c,h){if(t!==undefined){r.min_size=t}if(n!==undefined){r.max_size=n+s}if(i!==undefined){r.height=i}if(u!==""){r.nav_size=e(u).width()}if(s!==undefined){r.hspace=s}if(o!==undefined){r.vspace=o}if(h!==undefined){r.callback=h}r.transformation=c;r.content_array=l;r.container_name=a;r.class_name=f;r.getScreensize()},getScreensize:function(){var t=e(r.container_name).width();r.actual_width=t-r.nav_size;var n=e(r.container_name).height();r.actual_height=n;r.getNumber()},getNumber:function(){var e=r.actual_width/r.max_size;e=e-e%1;var t=r.actual_width%r.max_size;if(t==0){r.number=e}else{r.number=e+1}if(r.number>r.content_array.length){r.number=r.content_array.length}r.getWidth()},getWidth:function(){if(r.actual_width<r.max_size){r.width=r.actual_width-r.hspace}else{var e=r.actual_width%r.number;r.width=r.actual_width/r.number+e/r.number-r.hspace+r.hspace/r.number;if(r.width<r.min_size){r.number=r.number-1;var e=r.actual_width%r.number;r.width=r.actual_width/r.number+e/r.number-r.hspace+r.hspace/r.number}if(r.width>r.max_size){r.width=r.max_size}}r.getLeft()},getLeft:function(){r.left=r.width+r.hspace;r.getTop()},getTop:function(){r.top=r.height+r.vspace;r.getHeight()},getHeight:function(){if(r.height==0){r.height=r.width}r.setRow()},setRow:function(){r.row=Math.round(r.actual_height/r.height)*3;s.innit(r.width,r.height,r.left,r.top,r.number,r.row,r.container_name,r.actual_width,r.class_name,r.content_array,r.transformation)}};var s={check:0,length:0,actual_width:0,width:0,height:0,left:0,top:0,number:0,row:0,transformation:"",container_name:"",class_name:"",content_array:[],arrayD:[],old_arrayD:[],add:0,innit:function(e,t,n,r,i,o,u,a,f,l,c){s.width=e;s.height=t;s.left=n;s.top=r;s.row=o;s.number=i;s.container_name=u;s.actual_width=a;s.content_array=l;s.class_name=f;s.transformation=c;s.getAdd()},getAdd:function(){if(s.old_arrayD.length>0){s.add=s.content_array.length-(s.content_array.length-s.old_arrayD.length)}s.getRow()},getRow:function(){if(s.old_arrayD.length>0){var e=(s.old_arrayD[0].width+5)*s.old_arrayD[0].height*s.old_arrayD.length;s.length=s.old_arrayD.length;s.row=Math.round(e/s.actual_width/s.top)*3+1}else{s.row=Math.round(s.content_array.length/s.number)*3+1}s.getDiv()},getDiv:function(){for(j=0;j<s.row;j++){count=1;for(i=0;i<s.number;i++){if(count<=s.length||s.check==0){if(i==0){top_div=s.top*j;if(j==0){s.arrayD.push({width:s.width,height:s.height,left:0,top:0});if(s.check!==1){s.old_arrayD.push({width:s.width,height:s.height,left:0,top:0})}}else{s.arrayD.push({width:s.width,height:s.height,left:0,top:top_div});if(s.check!==1){s.old_arrayD.push({width:s.width,height:s.height,left:0,top:top_div})}}left_div=s.left}else{s.arrayD.push({width:s.width,height:s.height,left:left_div,top:top_div});if(s.check!==1){s.old_arrayD.push({width:s.width,height:s.height,left:left_div,top:top_div})}left_div=left_div+s.left}count=count+1}}}s.arrayD.splice(s.content_array.length,s.arrayD.length-s.content_array.length);s.old_arrayD.splice(s.content_array.length,s.old_arrayD.length-s.content_array.length);if(s.check==0){s.createDivs()}else{s.arrayD.splice(s.old_arrayD.length,s.arrayD.length-s.old_arrayD.length);s.animateDivs()}},createDiv:function(t,n,r,i,o,u){var a='<div class="'+s.class_name+'"'+'id="'+t+'" style="display: block; width: '+n+"px; height: "+r+"px; left: "+i+"px; top: "+o+'px;">';var u=u;var f="</div>";var l=a+u+f;e(s.container_name).append(l)},createDivs:function(t){var n=s.add;for(n;n<s.arrayD.length;n++){s.createDiv(n,s.arrayD[n].width,s.arrayD[n].height,s.arrayD[n].left,s.arrayD[n].top,s.content_array[n])}s.check=s.check+1;e("body").css("height",s.arrayD[s.arrayD.length-1].top+s.arrayD[s.arrayD.length-1].height);e(s.container_name).css("height",s.arrayD[s.arrayD.length-1].top+s.arrayD[s.arrayD.length-1].height);s.arrayD=[];if(r.callback!==null){r.callback()}},animateDivs:function(){if(s.transformation=="animation"){for(g=0;g<s.old_arrayD.length;g++){e("#"+g).animate({width:s.arrayD[g].width,height:s.arrayD[g].height,left:s.arrayD[g].left,top:s.arrayD[g].top},400)}}else if(s.transformation=="fade"){for(g=0;g<s.old_arrayD.length;g++){e("#"+g).css({width:s.arrayD[g].width,height:s.arrayD[g].height,left:s.arrayD[g].left,top:s.arrayD[g].top,opacity:.1},500);e("#"+g).animate({opacity:1},500)}}e("body").css("height",s.arrayD[s.arrayD.length-1].top+s.arrayD[s.arrayD.length-1].height);e(this.container_name).css("height",s.arrayD[s.arrayD.length-1].top+s.arrayD[s.arrayD.length-1].height);s.arrayD=[];if(r.callback!==null){r.callback()}}};jresponsive={array:[],add:function(e){jresponsive.array=e;s.check=0;r.innit(s.old_arrayD[0].min_size,s.old_arrayD[0].max_size,s.old_arrayD[0].height,r.hspace,r.vspace,"",s.container_name,s.class_name,jresponsive.array)}};settings=jQuery.extend({min_size:100,max_size:250,height:300,hspace:10,vspace:10,nav_name:"",class_name:"",content_array:"",add:"",transformation:"animation"},t);var o=this;if(settings.add!==""){s.check=0}e("body").css("height",1e4);var u=null;r.innit(settings.min_size,settings.max_size,settings.height,settings.hspace,settings.vspace,settings.nav_name,"#"+e(o).attr("id"),settings.class_name,settings.content_array,settings.transformation,n);e(window).bind("resize",function(){if(u!=null)clearTimeout(u);u=setTimeout(function(){r.innit(settings.min_size,settings.max_size,settings.height,settings.hspace,settings.vspace,settings.nav_name,"#"+e(o).attr("id"),settings.class_name,settings.content_array,settings.transformation,n)},500)})}})(jQuery)
