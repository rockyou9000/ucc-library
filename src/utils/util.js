/* eslint-disable */
export const cookie = {
  get: function (cookieName) {
    var theCookie = "" + document.cookie;
    var ind = theCookie.indexOf(cookieName + "=");
    if (ind == -1 || cookieName == "")
      return "";
    var ind1 = theCookie.indexOf(';', ind);
    if (ind1 == -1)
      ind1 = theCookie.length;
    return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
  },
  set: function (name, value, days) {
    days = days !== undefined ? days : 365;
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/; domain=.bilibili.com";
  },
  delete: function (name) {
    this.set(name, '', -1);
  }
}

export const localStorage = {
  _support: process.env.VUE_ENV === 'client' && window && window.localStorage && typeof window.localStorage == 'object' ? true : false,
  getItem: function(key) {
    if (this._support) {
      return window.localStorage.getItem(key)
    } else {
      return null
    }
  },
  setItem: function(key, value) {
    if (this._support) {
      window.localStorage.setItem(key, value)
    }
  },
  removeItem: function(key) {
    if (this.getItem(key)) {
      window.localStorage.removeItem(key)
    }
  }
}

export function readFromLocal(key) {
  if (localStorage._support) {
      return localStorage.getItem(key);
  } else {
      return cookie.get(key);
  }
}

export function saveToLocal(key, val, days) {
  if (localStorage._support) {
      return localStorage.setItem(key, val);
  } else {
      return cookie.set(key, val, days);
  }
}

export function checkInView (el, padding) {
  if (!el) return
  let rect = el.getBoundingClientRect()
  let p = padding || 0
  // 只判断了纵向
  return rect.top < window.innerHeight + p && rect.bottom >= 0
}

export function throttle (fn, delay, mustRunDelay){
  let timer = null
  let t_start
  return function(){
    let context = this, args = arguments, t_curr = +new Date()
    clearTimeout(timer)
    if(!t_start){
      t_start = t_curr
    }
    if(t_curr - t_start >= mustRunDelay){
      fn.apply(context, args)
      t_start = t_curr
    }
    else {
      timer = setTimeout(function(){
        fn.apply(context, args)
      }, delay)
    }
  }
}

export const formatNum = (n) =>{
  if(parseInt(n) < 0 || n == null || n == undefined){
		return '--'
	}
  if(String(n).indexOf('.') != -1 || String(n).indexOf('-') != -1){
		return n
	}
  if(parseInt(n) === 0){
    return 0
  }
	n = parseInt(n)
	if(n >= 10000 && n < 100000000){
		return (n / 10000).toFixed(1) + '万'
	}else if(n >= 100000000){
		return (n / 100000000).toFixed(1) + '亿'
	}else{
		return n
	}
}

function fromatNum(n){
  return n < 10 ? '0'+n : n
}

export const formatDate = (t) => {
  if(!t) return
  let date = new Date(t);
  let Y = date.getFullYear() + '-';
  let M = fromatNum(date.getMonth()+1) + '-';
  let D = fromatNum(date.getDate());
  return Y+M+D;
}

export const formatDateTime = (t) =>{
  if(!t) return
	let date = new Date(t);
	let Y = date.getFullYear() + '-';
	let M = fromatNum(date.getMonth()+1) + '-';
	let D = fromatNum(date.getDate());
	let h = fromatNum(date.getHours()) + ':';
	let m = fromatNum(date.getMinutes()) + ':';
	let s = fromatNum(date.getSeconds());
	return Y+M+D+' '+h+m+s;
}

//数字转换为时间格式
export const formatDuration = (n) =>{
	if(String(n).indexOf(':') != -1){
		return n
	}
  let hour, min, sec, secStr, minStr
  if(n < 60) {
    secStr = n < 10 ? `0${n}` : n
    return `00:${secStr}`
  } else if(n < 3600) {
    sec = n % 60
    min = parseInt(n / 60)
    secStr = sec < 10 ? `0${sec}` : sec
    minStr = min < 10 ? `0${min}` : min
    return `${minStr}:${secStr}`
  } else {
    sec = n % 60
    min = parseInt((n % 3600) / 60)
    hour = parseInt(n / 3600)
    secStr = sec < 10 ? `0${sec}` : sec
    minStr = min < 10 ? `0${min}` : min
    return `${hour}:${minStr}:${secStr}`
  }
}

export const trimHttp = (url) =>{
  return url ? url.replace(/^http:/, '') : ''
}

export const webp = function(){
    try{
        return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
    }catch(err) {
        return false;
    }
}()

export const formatImg = (url,w,h) =>{
  if(!url){
    return url
  }
  var suffix = url.match(/(.*\.(jpg|jpeg|gif|png|bmp))(\?.*)?/)
  //路径是否包含/bfs/
  var isBfs = url.indexOf('/bfs/') != -1 ? true : false
  //是否是GIF图片
  if(!suffix || suffix[2] === 'gif' || suffix[2] === 'bmp' || !isBfs){
    return url
  }
  //裁剪规则
  var cut = (w && h) ? '@' + w + 'w_' + h + 'h' : '@'
  //图片后参数 比如视频动态图
  var args = suffix[3] ? suffix[3] : ''
  if(webp){
    return suffix[1] + cut + '.webp' + args
  }else{
    return suffix[1] + cut + '.' + suffix[2] + args
  }
}

export const isBeta = (items) =>{
  var isOpen = false;
  var mantissa = cookie.get('DedeUserID').slice(-1);

  if (mantissa && $.isArray(items)) {
      isOpen = $.inArray(+mantissa, items) > -1;
  }
  return isOpen;
}

export const Cantor = {
    create: function(n) {
        var i;
        var factorial = [];
        factorial[0] = 1;
        for (i = 1; i < n; i++) {
            factorial[i] = factorial[i - 1] * i;
        }
        return factorial;
    },
    encode: function(list, n) {
        var i, j;
        var len = list.length;
        var factorial = this.create(n);
        var count = [];
        for (i = 0; i < len; i++) { //获得当前未出现的比他小的数，即它右边有几个比他小的数
            count[i] = 0;
            for (j = 0; j < i; j++) {
                if (list[j] > list[i]) {
                    count[j]++;
                }
            }
        }
        var hash = 0;
        for (i = 0; i < len; i++) {
            hash += count[i] * factorial[len - i - 1];
        }
        return hash.toString(32);
    },
    decode: function(hash, len) {
        hash = parseInt(hash, 32)
        var i, j, k;
        var xs = [],
            js = [];
        var list = [];
        var factorial = this.create(len);
        for (i = len - 1, j = 0; i >= 0; i--, j++) { //辗转相除
            xs[j] = hash / factorial[i];
            if (hash != 0) {
                hash = hash % factorial[i];
            }
            js[i] = 1;
        }
        for (i = 0; i < len; i++) { //找剩下子集中的第xs[i]大元素
            var t = 0;
            for (j = 0; j < len; j++) {
                t += js[j];
                if (t > xs[i]) {
                    list[i] = j;
                    js[j] = 0;
                    break;
                }
            }
        }
        return list;
    }
}

export const isEmptyObject = (o) =>{
  return JSON.stringify(o) === '{}' ? true : false
}

function getDevicePixelRatio() {
  let ratio = 1
  if(typeof window === 'undefined') return ratio
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
    // Only allow for values > 1
    ratio = window.screen.systemXDPI / window.screen.logicalXDPI
  }
  else if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio
  }
  return ratio
}

export const DPR = getDevicePixelRatio

export const uuid = function () {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
}

export const log = function () {
  if (window.console && typeof window.console.log === 'function') {
    return function (module, msg) {
      window.console.log('[' + module + '] ' + msg)
    }
  } else {
    return function () {
    }
  }
}

//自定义数据上报
export const customReport = function(name,ops) {
  if(window.spmReportData){
    var obj = ops ? ops : name
    window.spmReportData[name] = obj
  }
}

//获取csrf
export const csrf = function(){
  try{
    return cookie.get('bili_jct') || ''
  }catch(err) {
    return ''
  }
}()

//首屏加载完成时间标准 (firstscreenfinish)
export const fsfReport = function(img){
  if(img){
    if(img.complete || img.width){
      window.performance.timing.firstscreenfinish =  new Date().getTime()
    }else{
      img.onload = function(){
        if (window.performance && window.performance.timing) {
          window.performance.timing.firstscreenfinish =  new Date().getTime()
        }
      }
    }
  }
}

export const query = function(name){
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
      return unescape(r[2])
  }
  return null
}

//快速判断是否登录 不严谨 要求不高的情况下可以用
export const isLogin = function(){
  return cookie.get('DedeUserID') ? true : false
}

//处理av+数字
export const avLink = function(str) {
  return str.replace(/av([0-9]+)/g,'<a target="_blank" href="//www.bilibili.com/video/av$1">av$1</a>')
}

//处理sm+数字
export const smLink = function(str) {
  return str.replace(/sm([0-9]+)/g,'<a target="_blank" href="http://acg.tv/sm$1">sm$1</a>')
}

//是否宽屏
export const wideScreen = function(){
  return window.innerWidth >= 1400 ? true : false
}
