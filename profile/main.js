
class Assert {

}



class GameInfo {
    constructor(title, info,img, link, tag) {
        this.title = title;
        this.info = info;
        this.img = img;
        this.link = link;
        this.tag = tag;
    }
}



class ProjectInfo {
    constructor(title, info, companies, myPart) {
        this.title = title;
        this.info = info;
        this.companies = companies;
        this.myPart = myPart;

    }

}


class ArticleInfo {
    constructor(title, info) {
        this.title = title;
        this.info = info;
    }
}



class MusicInfo{
    constructor(title,info)
    {
        this.title = title;
        this.info = info;
    }



}


let games = [
    new GameInfo("姆姆因子", "RTS类对战游戏","./img/game2.png", "https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm",
    ["RTS","单局对抗","细胞战争"]),
    
    new GameInfo("还乡", "生存类战棋+塔防的设计","./img/game1.png", "https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm",
    ["新棋","塔防","生存"]),
    
    new GameInfo("山的那边", "RPG游戏,使用RPGMV制作","./img/game1.png", "https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm",
    ["解密RPG","多周目剧情"]),
    
    new GameInfo("文芒", "ADV文字解密类游戏","./img/game1.png", "https://pan.baidu.com/s/1w-LD3yarHCF9ZaCAoNSIcA?pwd=kg2g",
    ["文字解密RPG","叙事向","线性关卡"]),
    
    new GameInfo("迪亚特洛夫行动", "叙事向卡牌游戏","./img/game1.png", "https://pan.baidu.com/s/1KwuZL7IZdihQBiZBtKygZQ?pwd=c6tk",
    ["卡牌","叙事向","生存"]),
    
    new GameInfo("奈尔效应", "空间解密游戏","./img/game1.png", "https://pan.baidu.com/s/1rIQh3zN_RXrgZeQodHGWMQ?pwd=dkhs ",
    ["空间解密","叙事向","手书风格"]),
]





let projects = [
    new ProjectInfo("Vis", ""),
    new ProjectInfo("Vis2D", ""),
    new ProjectInfo("聊天女仆", ""),
    new ProjectInfo("音游", ""),
]



let info = []





let musics = [


]






// var game1_html = "<div class='game-name'>"+game1.title+"</div><p>"+game1.info+"</p><p><a href='#'>游戏下载链接</a></p><div>游戏设计思想</div>";





$(document).ready(function () {


    for (let i = 0; i < games.length; i++) {
 
        console.log(games[i].tag)
        $('.game-section').append(`
        <div class="game-item">
            <div class="left-area">
                <img src="${games[i].img}" alt="游戏截图1">
                <div class="game-tag-bar">
                    <span class="game-tag">${games[i].tag[0]}</span>
                    <span class="game-tag">${games[i].tag[1]}</span>
                    <span class="game-tag">${games[i].tag[2]}</span>
                </div>
        
            </div>
            <div class="right-area">
                <div class="game-name">${games[i].title}</div>
                <div class="game-info">${games[i].info}</div>
                <div class="game-download">游戏下载链接<a target="_blank" href="${games[i].link}" >点击下载</a></div>
            </div>
        </div>
            `)

    }


    $('.game-section').show();
    $('.article-section, .music-section').hide();




    $('#articles').click(function () {
        $('.article-section').show();
        $('.game-section, .music-section').hide();
    });

    $('#games').click(function () {
        $('.game-section').show();
        $('.article-section, .music-section').hide();
    });

    $('#music').click(function () {
        $('.music-section').show();
        $('.article-section, .game-section').hide();
    });
});