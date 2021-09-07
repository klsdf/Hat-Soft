var character = new Character();
var story = new Story();

new Vue({
  el: '#app',
  data: {
    character: character,
    story: story,
    systemData: {
      set: false,
      fontSize: 15,
      characterShow: true,
    },
  },

  computed: {
    maxExp() {
      return this.character.maxExp()
    }
  },
  methods: {
    save: function () {
      var storage = window.localStorage;
      storage.setItem("character", JSON.stringify(this.character));
      //储存故事进度
      storage.setItem("storyPosition", story.data.content_num);
      alert("保存成功！")
    },
    load: function () {
      var storage = window.localStorage;
      var temp = JSON.parse(storage.getItem("character"));
      for (let key in temp) {
        this.character[key] = temp[key];
      }

      //读取故事进度

      story.data.content_num = storage.getItem("storyPosition");
      story.data.ableToContinue = true;

      alert("读取成功！")
    },
    option: function () {
      this.systemData.set=!this.systemData.set;
    },
    musicSet: function () {
      this.systemData.musicSet = !this.systemData.musicSet;
    },
    fontSet: function () {
      this.systemData.fontSet = !this.systemData.fontSet;
    },
    enlargeFont: function () {
      this.systemData.fontSize++;
    },
    reduceFont: function () {
      this.systemData.fontSize--;
    },
    enlargeBGM: function () {
      story.audio.volume += 0.05;
    },
    reduceBGM: function () {
      story.audio.volume -= 0.05;
    },
    findMe: function () {
      alert(`
      F11全屏，回车和空格键进行游戏
      作者QQ：1796655849`);
    },
    useItem: function (itemName) {
      character.useItem(itemName)
      this.hp = character.hp;
    },
    showCharacter: function () {
      this.systemData.characterShow = !this.systemData.characterShow;
    }
  },
})
