//使用时需要加入jquery


class GameEvent {
    /** 
     * @para {eventName} 事件的名称
     *  @para {parameters} 事件的参数，可以有很多个
     * @return  {GameEvent}  对象
     * @desc 游戏事件的构造函数，实际上就是各自成就事件，什么什么的
    */
    constructor(eventNameOreventObj, ...parameters) {
        if ('object' === typeof eventNameOreventObj) {
            let eventObj = eventNameOreventObj;
            this.eventName = eventObj.eventName;
            this.parameters = eventObj.parameters;
        } else if ('string' === typeof eventNameOreventObj) {
            let eventName = eventNameOreventObj;
            this.eventName = eventName;
            this.parameters = parameters;
        }
    }

    /**
     * 执行游戏的事件
     */
    executeGameEvent() {
        switch (this.eventName) {
            case '获得成就':
                $achievementManager.addAchievement(this.parameters[0], this.parameters[1]);
                break;
            case '储存进度':
                // alert(this.parameters)
                $storyManager.saveStoryStage(this.parameters[0], this.parameters[1]);
                break;
            default:


        }
    }
}


//立绘，日语为たちえ

class Tachie {
    //人物以及表情
    /** 
 * @para {character} 角色的名称
 *  @para {expression}表情
 *  @para {expressionType} 具体的表情
 * @return  {GameEvent}  对象
 * @desc 游戏事件的构造函数，实际上就是各自成就事件，什么什么的
*/
    constructor(characterOrtachieObj = "萤雪", expression = "正常") {
        if ('object' === typeof characterOrtachieObj) {
            let tachieObj = characterOrtachieObj
            this.character = tachieObj.character;
            this.expression = tachieObj.expression;

        } else {
            let characterName = characterOrtachieObj
            this.character = characterName
            this.expression = expression
        }
    }


    /**
     * 更新立绘的信息
     */
    updateTachie() {
        $("#ying-xue img")[0].src = `./img/${this.character}-${this.expression}.png`
    }
}


//游戏的剧本，注意这个并不是脚本！！！！而是游戏的分镜头稿本。
class GameScript {

    constructor(contentOrgamescriptObj = '', tachie = new Tachie(), gameEvent = new GameEvent()) {

        // 如果传进来的值是一个对象，说明是一个json对象
        if ('object' === typeof contentOrgamescriptObj) {
            let gameScriptObj = contentOrgamescriptObj;
            this.content = gameScriptObj.content;
            this.tachie = new Tachie(gameScriptObj.tachie)
            this.gameEvent = new GameEvent(gameScriptObj.gameEvent)
        } else {
            let content = contentOrgamescriptObj
            // 否则用默认的构造函数
            this.content = content;
            this.tachie = tachie;
            this.gameEvent = gameEvent;
        }


    }
}







//玩家


var $userInfo = {
    userName: "名字",
    exp: 0,
}


//////////////////////////////////萤雪小姐姐的代码/////////////////////

var $YingXue = {
    fullname: "萤雪",
    age: 26,
    type: ["淑女", "傲娇", "腹黑"],
    likePoint: 0
}

//改变好感度
$YingXue.changeLikePoint = function (num) {
    this.likePoint += num;
}
$YingXue.data = {}


// //萤雪小姐姐的初始化函数
// $YingXue.init = function () {

//     // 更新当前用户登录时间
//     var date = new Date()
//     var nowTime = d.getDate()
//     chrome.storage.sync.set({ "lastTime": nowTime }, () => {
//     });
// }

//萤雪小姐姐会检测你上一次的登录时间，如果长时间没有登录，她会生气的
$YingXue.checkLoginTime = function () {
    var temp = 0;
    chrome.storage.sync.get('lastTime', (value) => {
        temp = value;
    })
}


// // 废弃！！！！千万不要用
// $YingXue.speak = function (text) {
//     let utterance = new SpeechSynthesisUtterance(text);
//     // utterance.lang = 'zh'
//     utterance.pitch = 2;//表示说话的音高，数值，范围从0（最小）到2（最大）。默认值为1
//     utterance.volume = 1; //声音的音量，区间范围是0到1，默认是1
//     utterance.rate = 1; //语速，数值，默认值是1，范围是0.1到10，表示语速的倍数，例如2表示正常语速的两倍。
//     speechSynthesis.speak(utterance);

// }

$ai = {};

$ai.speak = function (str) {
    $ai.keyWordCheck(str)
}

// 关键字识别
$ai.keyWordCheck = function (str) {
    var keyword =  /成就|Achievement/;
    if( keyword.test(str) === true){
        $storyManager._storys = [
            new GameScript("哎呀，成就系统是我擅长的呢！", new Tachie("萤雪", "开心", "指点江山")),
            new GameScript("成就系统的发送会接受两个参数", new Tachie("萤雪", "开心", "收到1")),
            new GameScript("第一个是成就的标题，第二个是内容！", new Tachie("萤雪", "开心", "收到1"))
        ]
        $storyManager.playStory()
        return
    }

    keyword =  /帽子社|hat-soft/;
    if( keyword.test(str) === true){
        $storyManager._storys = [
            new GameScript("帽子社吗？", new Tachie("萤雪", "正常", "正常")),
            new GameScript("我们就是由帽子社的社长闫辰祥开发出来的哦！", new Tachie("萤雪", "正常", "正常")),
            new GameScript("如果你能找到帽子社官网，也许会看到一些有趣的东西呢！", new Tachie("萤雪", "正常", "正常")),
        ]
        $storyManager.playStory()
        return
    }

    keyword =  /你好|您好/;
    if( keyword.test(str) === true){
        $storyManager._storys = [
            new GameScript("您好啊！", new Tachie("萤雪", "开心", "收到1")),
        ]
        $storyManager.playStory()
        return
    }


    keyword =  /名字|叫什么/;
    if( keyword.test(str) === true){
        $storyManager._storys = [
            new GameScript("我叫萤雪哦！", new Tachie("萤雪", "开心", "淑女笑1")),
        ]
        $storyManager.playStory()
        return
    }

    keyword =  /密码|隐藏/;
    if( keyword.test(str) === true){
        $storyManager._storys = [
            new GameScript("游戏之中存在很多隐藏的关卡哦！", new Tachie("萤雪", "开心", "淑女笑1")),
            new GameScript("遇到困难的话，可以多从前端的页面代码中寻找线索。", new Tachie("萤雪", "开心", "淑女笑1")),
        ]
        $storyManager.playStory()
        return
    }
}




//////////////////////////萤雪的触摸处理//////////////////////////////////////////////


//TODO:注意！！！！！！！！！
$YingXue.init = function () {

    // 阻止右键的菜单
    document.oncontextmenu = function () {
        return false;
    }



    $("#game #ying-xue").draggable({
        axis: "x",//只能横向移动
        distance: 50, //只有鼠标拖动了50px之后才开始移动
        start: function () {
            $storyManager._storys = [
                new GameScript("啊呀，，，别晃我", new Tachie("萤雪", "生气")),
            ]
            $storyManager._storyProgress = 0;
            $("#game #dialog-area").show();
            $storyManager.next()
        },
        drag: function () {
            // $storyManager._storys = [

            //     new GameScript("", new Tachie("萤雪", "开心", "坏笑")),
            // ]
            // $storyManager._storyProgress = 0;
            // $("#game #dialog-area").show();
            // $storyManager.next()
        },
        stop: function () {
            $storyManager._storys = [
                new GameScript("终于好了，", new Tachie("萤雪", "坏笑")),
            ]
            $storyManager._storyProgress = 0;
            $("#game #dialog-area").show();
            $storyManager.next()
        }
    });

    $('body').delegate("#game #ying-xue", 'mousedown', function (e) {
        e.preventDefault()
        // alert("鼠标事件");
        //  1 = 鼠标左键 left; 2 = 鼠标中键; 3 = 鼠标右键


        //鼠标左键
        if (1 == e.which) {

            let seed = Math.random() * 100;//0-100
            if (seed >= 0 && seed < 20) {
                $storyManager._storys = [
                    new GameScript("欸，您这是在摸我吗？", new Tachie("萤雪", "生气")),
                    new GameScript("不可以随便摸人家啦！", new Tachie("萤雪", "生气")),

                ]
            } else if (seed >= 20 && seed < 40) {
                $storyManager._storys = [
                    new GameScript("有点痒哦~", new Tachie("萤雪", "微笑"))
                ]
            } else if (seed >= 40 && seed < 60) {
                $storyManager._storys = [
                    new GameScript("唔，，这么喜欢我吗？", new Tachie("萤雪", "坏笑"))
                ]
            }
            else if (seed >= 60 && seed < 80) {
                $storyManager._storys = [
                    new GameScript("欸~", new Tachie("萤雪", "生气"))
                ]
            }
            else if (seed >= 80 && seed < 100) {
                $storyManager._storys = [
                    new GameScript("有何贵干？", new Tachie("萤雪", "微笑"))
                ]
            }
            $storyManager._storyProgress = 0;
            $("#game #dialog-area").show();
            $storyManager.next()

        }





        // 鼠标右键
        if (3 == e.which) {
            e.preventDefault()
            e.stopPropagation();

            $storyManager._storys = [
                new GameScript(`有什么需要帮助的吗? <br/>
                <input type="submit" id="隐藏萤雪" value="隐藏萤雪">
                <input type="submit" id="打开工具网页" value="打开工具网页">
                <input type="submit" id="聊天" value="聊天">`, new Tachie("萤雪", "微笑2"))
            ]
            $storyManager.playStory()

   
            $("#聊天")
            .button()
            .click(function (event) {
                event.preventDefault();
                $storyManager._storys = [
                    new GameScript("和游戏一样，可以用代码和我聊天哦~", new Tachie("萤雪", "微笑2")),
                    new GameScript("在控制台中输入$ai.speak(str)来和我聊聊吧！", new Tachie("萤雪", "微笑2")),
                ]
                $storyManager.playStory()
            });

            $("#打开工具网页")
                .button()
                .click(function (event) {
                    event.preventDefault();
                    window.open("https://klsdf.github.io/");
                });

            $("#隐藏萤雪")
                .button()
                .click(function (event) {
                    event.preventDefault();
                    $("#ying-xue").hide()
                    $("#dialog-area").hide()
                });
        }

    })

}


//当点击输入框的时候
$YingXue.onFocusInput = function () {
    var 触发概率 = 20
    // 触发萤雪小姐姐的对话
    let seed = Math.random() * 100
    if (seed < 触发概率) {
        $storyManager._storys = [
            new GameScript("准备查找学习资料吗？", new Tachie("萤雪", "开心", "坏笑")),
            new GameScript("今天也要坚持学习js哦~", new Tachie("萤雪", "开心", "淑女笑2")),
        ]
        $storyManager.playStory()
    }

}








//////////////////////游戏系统控制管理///////////////////
const $systemManager = {}


//游戏的开始
$systemManager.startgame = function (storymod) {
    $(document).ready(function () {
        $systemManager.createGameArea();//创建游戏区域
        $systemManager.loadCSS();//加载CSS样式
        $systemManager.initBind();//更新绑定事件

        $storyManager._storyMode = storymod || 'galgame'

        $storyManager.init();//初始化游戏

        $YingXue.init();

    });
}
$systemManager.initBind = function () {

    $("body").on('click', "#game #dialog-area", function () {
        $storyManager.next();//要是点击对话框的话，就会进行下一个剧情
    })
}


$systemManager.loadCSS = function () {
    var stylesheet = document.createElement("link")
    stylesheet.rel = "stylesheet"
    stylesheet.href = "./main.css"
    stylesheet.type = "text/css"
    document.head.appendChild(stylesheet)
}


$systemManager.createGameArea = function () {
    $("body").append(`
    <div id="game">
        <div id="ying-xue">
            <img height="500" src="./game/assert/image/萤雪立绘/正常/正常.png" alt="">
        </div>
        <div id="dialog-area">
         
        </div>
    </div>
`);
}









///////////////////////剧情处理系统////////////////////////////////

var $storyManager = {}
$storyManager._storyMode = "galgame"

$storyManager._storys = []
$storyManager._storyProgress = 0;//游戏中某一个故事的进度
$storyManager._sectionNum = 0;//游戏章节的进度


$storyManager.init = function () {
    $storyManager.initStorys()
}



$storyManager.initStorys = function () {
    $storyManager.loadAndPlayStory()
}

//来判断并加载全局的剧情进度
$storyManager.loadAndPlayStory = function () {
    $storyManager._storys = [
        new GameScript("欢迎来到萤雪浏览器助手！", new Tachie("萤雪", "微笑2"))
    ]
    $storyManager.playStory()
    // chrome.storage.sync.get(['storyProgress'], function (result) {

    //     // 注意这里！获取到的数据需要再点一下才能拿到
    //     let storyProgress = result.storyProgress
    //     // 如果第一次游玩的话，默认保存第0章作为开始
    //     if (typeof (storyProgress) == "undefined") {
    //         $storyManager.saveStoryStage(0, 0)
    //     }

    //     //读取章节的信息
    //     chrome.storage.sync.get(['storyProgress'], function (result) {

    //         let storyProgress = result.storyProgress;
    //         $storyManager.loadStorys(storyProgress.sectionNum, storyProgress.storyNum)
    //     })

    // });
}



//剧情下一个内容
$storyManager.next = function () {

    //如果剧情播放完毕，则保存进度并关闭对话框
    if ($storyManager._storyProgress >= $storyManager._storys.length) {
        $("#dialog-area").hide();


        //保存当前进度
        // $storyManager.saveStoryStage()

        return void 0;
    }


    const gameScript = $storyManager._storys[$storyManager._storyProgress]
    $("#dialog-area")[0].innerHTML = gameScript.content;
    // $YingXue.speak($("#dialog-area")[0].innerText)
    gameScript.tachie.updateTachie();
    gameScript.gameEvent.executeGameEvent();

    $storyManager._storyProgress++
}


$storyManager.loadStorys = function (sectionNum, storyNum) {

    new Promise((resolve, reject) => {
        $.getJSON(`./game/storys/section${sectionNum}/story${storyNum}.json`, function (data) {
            // console.log("===================");
            resolve(data)
        });
    }).then(data => {
        console.log(`已经加载章节，目前为第${sectionNum} 章，第${storyNum}篇故事`)
        $.each(data, function (index, value) {
            $storyManager._storys[index] = new GameScript(value)
        });
        $storyManager.playStory()
    })

}


//保存游戏进度
$storyManager.saveStoryStage = function (sectionNum, storyNum) {
    //要是没有传入参数的话
    // if ('undefined' ==typeof (sectionNum)  || 'undefined' ==typeof( storyNum)) {
    //     chrome.storage.sync.get(['storyProgress'], function (result) {
    //         $storyManager._sectionNum = ++result.storyProgress
    //     })
    //     chrome.storage.sync.set({ storyProgress: $storyManager._sectionNum }, function () {
    //         console.log('保存章节进度');
    //     });
    // } else {
    chrome.storage.sync.set({ storyProgress: { sectionNum: sectionNum, storyNum: storyNum } }, function () {
        console.log(`保存章节进度为${sectionNum}，故事进度为${sectionNum}`);
        // $storyManager._sectionNum = storyProgress.sectionNum
    });
    // }


}

$storyManager.playStory = function () {

    $("#game #dialog-area").show();
    $("#game #ying-xue").show()
    $storyManager._storyProgress = 0;//故事进度为0
    $storyManager.next();//开始后默认先进入剧情

}















// $storyManager.progress = 0;

// $storyManager.storys = [
//     {
//         message: `您好，我是<i style ="color:rgb(105,164,245);">萤雪</i>`,
//         script: `获得成就`,
//         parameter: `第一次使用插件！`
//     }, {
//         message: `萤是<abbr title="指飞行的萤火虫" style =" color:rgb(246, 205, 54);">流萤</abbr>的萤`,

//     }, {
//         message: `雪是<abbr title="指大雪" style ="color:rgb(54,122,193);">鹤雪</abbr>的雪`,

//     }, {
//         message: `我的名字呢，则是取自<strong title="也就是萤囊萤雪啦">萤窗雪案</strong>中萤雪二字，`,

//     }, {
//         message: `这么说来，小女子还没有过问过您的姓名呢？`,
//     }, {
//         message: "",
//         script: "输入名字"
//     }, {
//         message: `真是个好名字呢。`,

//     }, {
//         message: `那么，请容我简述一下插件的功能吧`,

//     }, {
//         message: `插件有很多<b>“模块”</b>，其中最为重要的就是<b>搜索框模块</b>了，您可以在其中搜索`,

//     }, {
//         message: `除此之外，还有<b>课程表及日记模块</b>，您可以在这里制定学习计划和记录学习成果`,

//     }, {
//         message: `之后，便是<b>单词学习模块</b>，您可以输入一些单词，然后我便会每天来提醒您背诵他们。`,

//     }, {
//         message: `想要访问这些模块，只需要在屏幕两侧滚动鼠标滑轮即可。`
//     }
//     , {
//         message: `在模块内部滚动，则可以访问模块内部的内容`
//     }
//     , {
//         message: `小女子不才，在今后的学习生活中，请多关照啦~`,
//     }, {
//         message: ``,
//         script: `关闭页面`,

//     }
// ]

// $storyManager.showNextStory = function () {
//     var messageList = document.getElementById("messageList")
//     var messageBox = document.createElement("div")
//     messageBox.style.animationName = "淡入"
//     messageBox.style.animationDuration = "1s";


//     if ($storyManager.progress >= $storyManager.storys.length) {
//         message.innerHTML = "内容完毕";
//     } else {
//         var message = $storyManager.storys[$storyManager.progress].message;
//         var script = $storyManager.storys[$storyManager.progress].script;
//         if (script) {
//             var parameter = $storyManager.storys[$storyManager.progress].parameter;
//             if (script == "输入名字") {
//                 $userInfo.userName = prompt("您的名字是？")
//             }
//             if (script == "刷新浏览器")
//                 location.reload();
//             if (script == "获得成就")
//                 $achievementManager.addAchievement('欢迎使用萤雪', '第一次使用萤雪')
//             if (script == "关闭页面") {
//                 window.close();
//             }

//         }
//         messageBox.innerHTML = message;
//         $storyManager.progress++;

//     }

//     messageList.appendChild(messageBox);
// }




// window.onload = function () {


//     var app = document.getElementById("app")
//     app.parentNode.removeChild(app);
//     var msg = document.createElement("div")
//     msg.style.userSelect = 'none';
//     msg.id = "messageList"
//     msg.style.textAlign = "center";
//     msg.style.fontSize = "30px";
//     document.body.appendChild(msg);


//     // 打印第一句话
//     $storyManager.showNextStory();

//     //监听窗口
//     window.onclick = function () {
//         $storyManager.showNextStory();
//     }


//     chrome.storage.sync.set({ "firstUsePlugin": false }, () => {

//     });

// }











/////////////////////////////////成就系统//////////////////////////////
const $achievementManager = {}
$achievementManager._achievements = [];
$achievementManager.addAchievement = function (title, message) {
    //如果已经获得了这个成就，那么就不添加这个了
    for (let i = 0; i < $achievementManager._achievements.length; i++) {
        if ($gameAchievement._achievements[i].title == title)
            return false;

    }
    var achievmentRecord = { title, message }
    $achievementManager._achievements.push(achievmentRecord);


    //添加成就信息
    var achievmentNode = document.createElement("div");
    achievmentNode.classList += "achievment-node"

    var titleNode = document.createElement("div");
    titleNode.appendChild(document.createTextNode("获得成就：" + title))
    titleNode.classList += "title-node"


    var infoNode = document.createElement("div");
    infoNode.appendChild(document.createTextNode(message))
    infoNode.classList += "info-node"

    achievmentNode.appendChild(titleNode);
    achievmentNode.appendChild(infoNode);
    document.body.appendChild(achievmentNode);



    setTimeout(() => {

        achievmentNode.parentNode.removeChild(achievmentNode);

    }, 10000)




    chrome.notifications.create({
        type: 'basic',
        iconUrl: "../public/图标/帽子社图标128.png",
        title: title,
        message: message,//提示内容
        buttons: [
            { title: '我是按钮' }
        ],
        priority: 0
    }, function () {
        console.log("回调函数")
    });


    return true;

}


// 


