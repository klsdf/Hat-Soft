//场景类
class Scence {
  constructor() {

    // if(Scence.exist==true){

    //   content.removeChild(document.getElementsByTagName('canvas')[0]);
    //   Scence.exist=false;
    // }

    content.innerHTML += `<canvas width="1022.8px" height="500px">您的浏览器不支持canvas</canvas>`;
    var canvas = document.getElementsByTagName('canvas')[document.getElementsByTagName('canvas').length - 1]; //获取canvas元素
    // var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d'); //获取上下文环境（画笔）
    var text = "hello world";
    ctx.font = "bold 30px 微軟雅黑";
    var x = 160;
    var y = 200;
    ctx.fillText(text, x, y);

    canvas.tabIndex = 1000;//让canvas支持键盘监控
    canvas.style.outline = "none";//消除焦点
    canvas.onkeydown = function (event) {

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 87) { //上
        ctx.fillText(text, x, y--);
      } else if (e && e.keyCode == 83) { //下
        ctx.fillText(text, x, y++);
      } else if (e && e.keyCode == 65) { //左
        ctx.fillText(text, x--, y);
      } else if (e && e.keyCode == 68) { //右
        ctx.fillText(text, x++, y);
      }
      //结束战斗
      story.data.ableToContinue = true;
    };


    // Scence.exist=true;
  }

}

class Music {
  constructor() {
    //游戏音乐
    this.audio = new Audio("");//音乐初始化
    this.audio.volume = 0.5;//默认音量一半
  }


  bgmPlay(src) {
    if (src)
      this.audio.src = src;

    this.audio.loop = true;
    if (this.audio.paused == true) {
      this.audio.play();//播放
    }

  }
}


//故事叙事类
class Story {
  constructor() {
    this.music=new Music();

    //数据初始化
    this.data = {
      content_num: 0,
      ableToContinue: true,
    }




    //游戏剧本
    this.gameScripts = [
      {
        type: "title",
        words: "第一章"
      },
      {
        type: "specialEffect",
        specialEffect: `content.style.animationName='changeToDark'; content.style.animationDuration='1500ms';
        characterBar.style.animationName='changeToDark'; characterBar.style.animationDuration='1500ms';
        settingBar.style.animationName='changeToDark'; settingBar.style.animationDuration='1500ms';
        `,
        words: `首先是黑色。`,
      },
      {
        type: "specialEffect",
        specialEffect: `content.classList.add("whitePoint"); `,
        words: `然后是白色的点。`,
      },
      {
        type: "text",
        words: `注视着这亘古不变的黑与白，我的意识渐渐开始回归。`,
      },
      {
        type: "text",
        words: `我沉睡了多久呢？一年？一天？一分钟，还是已经过了数万年？`,
      },
      {
        type: "text",
        words: `“……醒……。”`,
      },
      {
        type: "text",
        words: `好熟悉的声音啊。`,
      },
      {
        type: "text",
        words: `“…………醒醒……求。”`,
      },
      {
        type: "text",
        words: `究竟是在哪里听过呢？这声音是那样熟悉，却又那样悲伤。`,
      },
      {
        type: "text",
        words: `“这一次……失败……”`,
      },
      {
        type: "text",
        words: `这是，她的声音？那道扑朔的影子在我眼前一晃而过。`,
      },
      {
        type: "text",
        words: `“快醒醒。”`,
      },
      {
        type: "text",
        words: `我试着回想着她的事情，但是那朦胧的记忆却像她的声音一样渐渐散去。取而代之的是……`,
      },
      {
        type: "bgmPlay",
        src: "./music/016-午睡与暖阳.mp3"
      },
      {
        type: "text",
        words: `“喂，快醒醒啊！”`,
      },
      {
        type: "text",
        words: `“。。。”`,
      },
      {
        type: "text",
        words: `“唔，这都叫不醒吗？”`,
      },
      {
        type: "text",
        words: `“真是的……只好拿出那一招了，看招！！”`,
      },
      {
        type: "text",
        words: `“欸？？？？？”`,
      },
      {
        type: "text",
        words: `“哇，原来你醒着呢啊！”`,
      },
      {
        type: "specialEffect",
        specialEffect: `
        content.classList.remove("whitePoint"); 
        content.style.animationName='inTheForest'; content.style.animationDuration='1500ms';
        characterBar.style.animationName='inTheForest'; characterBar.style.animationDuration='1500ms';
        settingBar.style.animationName='inTheForest'; settingBar.style.animationDuration='1500ms';`,
        words: `我努力睁开眼，一道道柔和的光柱穿过茂密的树林，打在我的脸上。`,
      },
      {
        type: "text",
        words: `虽然仍觉得有些许刺眼，但是我很快就适应了眼前的场景。`,
      },
      {
        type: "text",
        words: `“喂，我说，你这是准备叫人起床还是准备杀人啊。”我望向眼前这个声音。那是一个大约1米75左右的精壮青年，他右手举着一把短剑，停留在向我劈来的姿势上。`,

      },
      {
        type: "text",
        words: `当然了，我右手的短剑成功挡住了他的剑路。对于一名专业的剑客来说，时刻保持危机意识可是基本功。`,

      },
      {
        type: "text",
        words: `他收回了剑：“你既然醒着就别装睡了，赶紧的，大家马上就要出发了。我这次来叫你，你今天可不得去镇上请我好酒好肉的搓一顿？”`,
      },
      {
        type: "text",
        words: `我这才意识到身边的人们基本上都已经整理好了行装。于是急忙起身。`,
      },
      {
        type: "text",
        words: `“行了，我上次帮你抢购《基督山伯爵》的大恩大德，你这得请我多少顿才能还回来。”就像往常一样，我们开始有一句没一句的互相拌嘴。但是我内心却总觉得漏了点什么。`,
      },
      {
        type: "text",
        words: `我刚才是不是做了什么梦？我不由得回忆起刚才的梦境，但是奇怪的是，明明知道做了梦，明明那样印象深刻，但是现在却连一点点内容都想不起来。`,
      },
      {
        type: "text",
        words: `“算了，想不起来啦。与其在意这种虚幻的东西，还不如打起精神来，顺利的话，今晚就能到林西镇了。”我自我安慰般的想着。`,
      },

      {
        type: "text",
        words: `话是这么说，我对今天的目的地<b>林西镇</b>也确实是期盼已久了。林西镇是一个还算繁荣的小镇，对我们来说也是重要的交易场所。`,
      },
      {
        type: "text",
        words: `你问我们是谁？哦，差点都忘了介绍了。我叫<input id="nameCharacter" type="text" maxlength="6"  placeholder="请输入姓名" /> <input value="点击修改" type="button" onclick=" let name = document.getElementById('nameCharacter').value; character.name=name;" />`,
      },
      {
        type: "text",
        words: `是一个大学毕业生。`,
      },
      {
        type: "text",
        words: "我大学学的是侠客系，也就是当今所谓的“四大天坑”专业之一。当初报考的时候纯粹就是想着以后国家包分配，以后可以去哪个镖局里面混混日子什么的。结果，就在我入学的第一年，一道圣旨降下来，道士、侠客系等等专业，国家将不再包分配，到我毕业的时候，这些专业就已经从铁饭碗变成了现在的天坑。",
      },
      {
        type: "text",
        words: "我听说东洋那边的武士系和西洋那边的骑士系现在过的也不怎么样，不过我想总比我过的好。我隐约记得上一次接到活大概还是两个月前，隔壁村的地主老爷带着一大帮人半夜三点突然来敲我家的门。我硬着头皮开了门，要不是他带的人堵住了我家的后窗，我觉得我平时不会做出这种愚蠢的行为的。",
      },
    ]


    document.onkeydown = function (event) {
      //如果被阻塞，那么按键失灵
      if (story.data.ableToContinue == false)
        return;
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 32 || e && e.keyCode == 13) { //按空格或者回车可以显示文本
        story.show();
      }
    };

  }

  //展示文字或者战斗场景等等。
  show() {
    if (this.data.content_num == this.gameScripts.length) {
      content.innerHTML += `<p>完了</p>`;
      return;
    }
    var gameScripts = this.gameScripts[this.data.content_num];


    switch (gameScripts.type) {
      case "specialEffect":
        eval(gameScripts.specialEffect);
        content.innerHTML += `<p>${this.gameScripts[this.data.content_num].words}</p>`;
        break;
      case "text":
        content.innerHTML += `<p>${this.gameScripts[this.data.content_num].words}</p>`;
        break;
      case "battle":
       new Scence();
        this.data.ableToContinue = false;
        break;
      case "title":
        content.innerHTML += `<h1>${this.gameScripts[this.data.content_num].words}</h1>`;
        break;
      case "bgmPlay":
        this.music.bgmPlay(gameScripts.src);
        break;

    }


    this.data.content_num++;

  }


}


function elementPosition(obj) {
  var curleft = 0, curtop = 0;
  if (obj.offsetParent) {
    curleft = obj.offsetLeft;
    curtop = obj.offsetTop;
    while (obj = obj.offsetParent) {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    }
  }
  return { x: curleft, y: curtop };
}
function ScrollToControl(id) {
  var elem = document.getElementById(id);
  var scrollPos = elementPosition(elem).y;
  scrollPos = scrollPos - document.documentElement.scrollTop;
  var remainder = scrollPos % 50;
  var repeatTimes = (scrollPos - remainder) / 50;
  ScrollSmoothly(scrollPos, repeatTimes);
  window.scrollBy(0, remainder);
}
var repeatCount = 0;
var cTimeout;
var timeoutIntervals = new Array();
var timeoutIntervalSpeed;
function ScrollSmoothly(scrollPos, repeatTimes) {
  if (repeatCount < repeatTimes) {
    window.scrollBy(0, 50);
  }
  else {
    repeatCount = 0;
    clearTimeout(cTimeout);
    return;
  }
  repeatCount++;
  cTimeout = setTimeout("ScrollSmoothly('" + scrollPos + "','" + repeatTimes + "')", 10);
}