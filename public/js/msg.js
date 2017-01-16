var icons = [{
		name: "贴吧表情",
		path: "img/tieba/",
		maxNum: 50,
		file: ".jpg",
		placeholder: "<{alias}>",
		alias: {
			1: "呵呵",
			2: "哈哈",
			3: "吐舌",
			4: "啊",
			5: "酷",
			6: "怒",
			7: "开心",
			8: "汗",
			9: "泪",
			10: "黑线",
			11: "鄙视",
			12: "不高兴",
			13: "真棒",
			14: "钱",
			15: "疑问",
			16: "阴脸",
			17: "吐",
			18: "咦",
			19: "委屈",
			20: "花心",
			21: "呼~",
			22: "笑脸",
			23: "冷",
			24: "太开心",
			25: "滑稽",
			26: "勉强",
			27: "狂汗",
			28: "乖",
			29: "睡觉",
			30: "惊哭",
			31: "生气",
			32: "惊讶",
			33: "喷",
			34: "爱心",
			35: "心碎",
			36: "玫瑰",
			37: "礼物",
			38: "彩虹",
			39: "星星月亮",
			40: "太阳",
			41: "钱币",
			42: "灯泡",
			43: "茶杯",
			44: "蛋糕",
			45: "音乐",
			46: "haha",
			47: "胜利",
			48: "大拇指",
			49: "弱",
			50: "OK"
		},
		title: {
			1: "呵呵",
			2: "哈哈",
			3: "吐舌",
			4: "啊",
			5: "酷",
			6: "怒",
			7: "开心",
			8: "汗",
			9: "泪",
			10: "黑线",
			11: "鄙视",
			12: "不高兴",
			13: "真棒",
			14: "钱",
			15: "疑问",
			16: "阴脸",
			17: "吐",
			18: "咦",
			19: "委屈",
			20: "花心",
			21: "呼~",
			22: "笑脸",
			23: "冷",
			24: "太开心",
			25: "滑稽",
			26: "勉强",
			27: "狂汗",
			28: "乖",
			29: "睡觉",
			30: "惊哭",
			31: "生气",
			32: "惊讶",
			33: "喷",
			34: "爱心",
			35: "心碎",
			36: "玫瑰",
			37: "礼物",
			38: "彩虹",
			39: "星星月亮",
			40: "太阳",
			41: "钱币",
			42: "灯泡",
			43: "茶杯",
			44: "蛋糕",
			45: "音乐",
			46: "haha",
			47: "胜利",
			48: "大拇指",
			49: "弱",
			50: "OK"
		}
	}
];

$(function () {
	var conUl = document.getElementById('con-ul');
	var aLi = conUl.getElementsByTagName('li');
	var url = 'http://' + window.location.hostname + '/msg?ajax=true';
	$.ajax({
		type: "GET",
		url: url,
		dataType: "json",
		jsonp:"callback",
		success: function(msgs) {
			msgs.forEach(function(msg){
				// console.log(msg);
				var newLi = document.createElement('li');
				newLi.innerHTML += '<div class="icon"><img src="' + 'img/1.jpg' + '" alt=""></div><h2>' + msg.uin + '</h2><div class="time"><span>' + msg.date + '</span><span>&nbsp;' + msg.time + '</span></div><div class="text">' + emojisParse(msg.content, icons) + '</div>';
				if (aLi.length) {
					conUl.insertBefore(newLi, aLi[0]);
				} else {
					conUl.appendChild(newLi);
				}
				newLi.style.opacity = 0;

				fadeOut(newLi, 100);
			})
		},
		error: function () {
			alert('加载失败！');
		}
	});
});

window.onload = function () {
	var text = document.getElementById('input');
	var reminder = document.getElementById('reminder');
	var btn = document.getElementById('sbutton');
	var conUl = document.getElementById('con-ul');
	var aLi = conUl.getElementsByTagName('li');
	var num = 0;
	var timer1 = null; //当输入内容为空或者输入字符超过，文本框闪动
	var iNow = 0;
	var selectIcon = 'img/1.jpg'; //用于保存所选择图片的路径
	var date = new Date();
	var str = toDou(date.getHours()) + ':' + toDou(date.getMinutes()); //获取当前时间
	var str2 = toDou(date.getMonth() + 1) + '-' + date.getDate(); //获取当前日期
	var userName = ['周杰伦', '哆啦A梦', '牛尔', '郭德纲', '孙燕姿', '柴碧云', '冯昆鹏', '奥巴马', '赵本山'];

	text.onfocus = function () {
		change();
		text.oninput = text.onpropertychange = change;
	}
	text.onblur = function () {
		if (text.value == '') {
			reminder.innerHTML = '';
			// reminder.className = '';
		}
	}
	//点击发布按钮
	btn.onclick = function () {
		// var randomNum = Math.floor(Math.random() * userName.length);
		// var randomNum2 = Math.floor(Math.random()*userPhone.length);
		if (text.value == '' || num > 140) {
			clearInterval(timer1);
			timer1 = setInterval(function () {
					if (iNow == 5) {
						clearInterval(timer1);
						iNow = 0;
					} else {
						iNow++;
					}
					if (iNow % 2) {
						text.style.background = '#ff9797';
					} else {
						text.style.background = '';
					}
				}, 100);
		} else {
			var url = 'http://' + window.location.hostname + '/msg/add';
			$.ajax({
				type: "POST",
				url: url,
				data: {
					uin: '425618025',
					content: text.value
				},
				dataType: "json",
				jsonp:"callback",
				success:  function(msg) {
					var newLi = document.createElement('li');
					newLi.innerHTML += '<div class="icon"><img src="' + selectIcon + '" alt=""></div><h2>' + msg.uin + '</h2><div class="time"><span>' + msg.date + '</span><span>&nbsp;' + msg.time + '</span></div><div class="text">' + emojisParse(msg.content, icons) + '</div>';
					if (aLi.length) {
						conUl.insertBefore(newLi, aLi[0]);
					} else {
						conUl.appendChild(newLi);
					}
					newLi.style.opacity = 0;

					fadeOut(newLi, 100);
					text.value = '';
				},
				error:  function() {
					alert('发布失败！');
				}
			});
			change();
		}
	}
	//判断输入字符的多少
	function change() {
		var mark = document.getElementById('mark');
		var tValue = text.value;

		// console.log(text);
		num = Math.ceil(getLength(tValue) / 2);

		if (num < 140) {
			reminder.innerHTML = '还可以输入<em style="color: green">' + (140 - num) + '</em> 个字';
			reminder.className = 'dis';
		} else {
			reminder.innerHTML = '已超出<em style="color:red">' + (num - 140) + '</em> 个字';
		}

		if (text.value == '' || num > 140) {
			btn.className = 'con-go';
		} else {
			btn.className = 'con-go active';
		}
	}
}

function addMsg(uin, content) {}

//正则：用于区分中文为两个字节
function getLength(str) {
	return String(str).replace(/[^\x00-\xff]/g, 'aa').length;
}
//淡入淡出
function fadeOut(obj, tarrget) {
	obj.alpha = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
			var current = parseInt(current * 100);
			var speed = (tarrget - obj.alpha) / 8;
			if (obj.alpha == tarrget) {
				clearInterval(timer);
			} else {
				obj.alpha += speed;
				obj.style.opacity = obj.alpha / 100;
			}
		}, 30);
}
//补0函数
function toDou(n) {
	if (n < 10) {
		return '0' + n;
	} else {
		return '' + n;
	}
}

$(function () {
	$("#input").emoji({
		showTab: false,
		animation: 'none',
		icons: icons
	});

	// var conUl = document.getElementById('con-ul');
	// var conP = conUl.getElementsByTagName('p');
});
