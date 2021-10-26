class Character {
  constructor() {
    this.name = "";
    this.hp = 20;
    this.mp = 10;
    this.atk = 5;
    this.def = 3;
    this.exp = 0;
    this.level = 0;
    this.items = [
      { name: "回血药", num: 3, describe: "回复5点HP" },
      { name: "烟雾弹", num: 2, describe: "可以从战斗中逃脱" }
    ];
    this.equips = [
      { type: "武器", name: "短剑", describe: "看上去很弱小，实际上也确实如此（伤害：1）", damage: 1 },
      { type: "衣服", name: "衬衫", describe: "衬衫的价格是，九磅十五便士（防御：1）", defence: 1 },
      { type: "护身符", name: "没有", describe: "等有钱了，，说不定就买得起了" },
    ];
  }

  maxExp() {
    return character.level * 1.5 + 10;
  }

  useItem(itemName) {
    this.items.forEach(item=>{
      if(item.name==itemName){
        if(item.num==0){
          alert("数量不足！");
          return;
        }
        switch(itemName){
          //物品的逻辑代码
          case '回血药': this.hp+=5;break;
          case '烟雾弹' : alert("逃跑");break;
        }
        item.num--;
      }
    })


  }
}
