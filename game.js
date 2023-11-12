


    //游戏代码 
    function createBullet() {
        let bullet = document.createElement('div');
        bullet.style.width = '20px';
        bullet.style.height = '50px';
        bullet.style.backgroundColor = 'white';
        bullet.style.position = 'absolute';
        bullet.style.textAlign = 'center';
        bullet.style.color = 'black';
        bullet.innerText = "子弹";
        bullet.setAttribute('component', 'collider'); // 添加component属性
        // 设置子弹的初始位置为playerDiv的位置
        var playerDiv = document.getElementById('player');
        bullet.style.top = playerDiv.style.top;
        bullet.style.left = playerDiv.style.left;

        // 把子弹添加到body
        document.body.appendChild(bullet);


        bullet.onColliderEnter = function (collider) {
            console.log("我是子弹，撞到我的人是" + collider.innerText)

            if (collider.innerText != "板子") {
                collider.innerText = collider.innerText.slice(0, -1);

                if (collider.innerText === '') {
                    collider.parentNode.removeChild(collider);
                }
            }

        }

        // 用定时器让子弹向上飞
        let intervalId = setInterval(() => {
            let currentTop = parseInt(bullet.style.top, 10);
            currentTop -= 50;  // 步长，可以按需调整
            bullet.style.top = currentTop + 'px';

            //如果子弹飞出屏幕,删除子弹并清除定时器
            if (currentTop < 0) {
                clearInterval(intervalId);
                bullet.parentNode.removeChild(bullet);
            }
        }, 50);  // 控制子弹飞行速度，数值越小飞得越快

        return bullet;
    }

    document.body.onkeydown = function (e) {
        if (e.keyCode === 32) { // '32' 是空格键的键码
            e.preventDefault();
            createBullet()
        }
    }
    class CollisionPair {
        constructor(node1, node2) {
            // 将两个节点排序，以保证 (node1, node2) 和 (node2, node1) 能被认为是同一对
            this.nodes = [node1, node2].sort((a, b) => (a.offsetLeft - b.offsetLeft) || (a.offsetTop - b.offsetTop));
        }

        equals(other) {
            return other.nodes[0] === this.nodes[0] && other.nodes[1] === this.nodes[1];
        }


        //已经废弃
        hash() {
            // 由于节点的唯一性，我们可以仅通过它们的参考来获取唯一的hash
            return `${this.nodes[0]}-${this.nodes[1]}`;
        }
    }
    class CollideSystem {

        //正在碰撞的物体对
        static collidingPairs = [];

        static has(pair) {
            for (let i = 0; i < CollideSystem.collidingPairs.length; i++) {
                if (CollideSystem.collidingPairs[i].equals(pair)) {
                    return true
                }

            }
            return false
        }

        static remove(pair) {
            for (let i = 0; i < CollideSystem.collidingPairs.length; i++) {
                if (CollideSystem.collidingPairs[i].equals(pair)) {
                    CollideSystem.collidingPairs.splice(i, 1);
                    return true
                }

            }
            return false
        }


        static update() {
            collider = document.querySelectorAll('[component~="collider"]');
            for (let i = 0; i < collider.length; i++) {
                for (let j = i + 1; j < collider.length; j++) {
                    let pair = new CollisionPair(collider[i], collider[j]);
                    if (CollideSystem.colliderEnter(collider[i], collider[j])) {


                        // 如果此对物体正在碰撞就继续遍历，否则记录下正在碰撞并触发onFirstEnter事件
                        if (CollideSystem.has(pair)) {

                            collider[i].onCollider?.(collider[j])
                            collider[j].onCollider?.(collider[i])
                        } else {
                            collider[i].onColliderEnter?.(collider[j]);
                            collider[j].onColliderEnter?.(collider[i]);
                            CollideSystem.collidingPairs.push(pair);
                        }


                    } else {

                        //如果现在没有碰撞，但是碰撞库里面有，说明停止碰撞了
                        if (CollideSystem.has(pair)) {

                            collider[i].onColliderExit?.(collider[j]);
                            collider[j].onColliderExit?.(collider[i]);
                            CollideSystem.remove(pair)
                        }

                        // 如果此对物体不再碰撞则删除，并触发离开事件


                        // CollideSystem.collidingPairs[0] = null
                    }
                }
            }
            window.requestAnimationFrame(CollideSystem.update);
        }


        static colliderEnter(node1, node2) {
            let l1 = node1.offsetLeft;
            let r1 = node1.offsetLeft + node1.offsetWidth;
            let t1 = node1.offsetTop;
            let b1 = node1.offsetTop + node1.offsetHeight;

            let l2 = node2.offsetLeft;
            let r2 = node2.offsetLeft + node2.offsetWidth;
            let t2 = node2.offsetTop;
            let b2 = node2.offsetTop + node2.offsetHeight;
            if (l2 >= r1 || r2 <= l1 || t2 >= b1 || b2 <= t1) {
                return false;
            } else {
                return true;
            }
        }
    }
    document.addEventListener("keydown", function (event) {
        var playerDiv = document.getElementById("player");
        var step = 10; // 控制移动的步长
        var style = window.getComputedStyle(playerDiv);
        var left = parseInt(style.left.replace("px", ""));
        var top = parseInt(style.top.replace("px", ""));

        switch (event.key) {
            case "w":
            case "ArrowUp":
                playerDiv.style.top = (top - step) + "px";
                break;
            case "a":
            case "ArrowLeft":
                playerDiv.style.left = (left - step) + "px";
                break;
            case "s":
            case "ArrowDown":
                playerDiv.style.top = (top + step) + "px";
                break;
            case "d":
            case "ArrowRight":
                playerDiv.style.left = (left + step) + "px";
                break;
        }
    });

    var collider = document.querySelectorAll('[component~="collider"]');
    // var collider = document.getElementsByClassName("collider")


    //调用该函数
    CollideSystem.update();


    document.getElementById("player").onColliderEnter = function (collider) {
        console.log("我是player，撞到我的人是" + collider.innerText)
    }
    document.getElementById("player").onCollider = function (collider) {
        console.log("我是player，一直撞我的人是" + collider.innerText)
    }
    document.getElementById("player").onColliderExit = function (collider) {
        console.log("我是player，不撞我的人是" + collider.innerText)
    }

//     const data = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Bob", age: 35 }
// ];
// const jsonData = JSON.stringify(data);
// const downloadLink = document.createElement("a");
// downloadLink.href = "data:text/json;charset=utf-8," + encodeURIComponent(jsonData);
// downloadLink.download = "data.json";
// downloadLink.click();
