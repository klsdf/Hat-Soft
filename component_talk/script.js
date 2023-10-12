let pageNo = 1;
let msgsPerPage = 1000; //每页显示的留言数量 

// 发送留言的函数
document.getElementById('msgForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止提交表单的默认行为
    let inputBox = document.getElementById('inputBox');
    let msg = inputBox.value;

    if(msg=="")
    {
        alert("不允许发送空白的留言哦！")
        return
    }
    inputBox.value = "";

    fetch(serverUrl+'/liuyan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: msg }),
    })
    .then(response => response.json())
    .then(data => {
        // 在这里处理服务器的回应
    })
    .catch((error) => console.error('Error:', error));
});

// 显示留言的函数
function displayMessages() {
    fetch(serverUrl+`/liuyan?page=${pageNo}&limit=${msgsPerPage}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let msgBoard = document.getElementById('msgBoard');
        msgBoard.innerHTML = ""; // 清空留言板
        data.forEach(msg => {
            let p = document.createElement('p');
            p.innerText = msg.message;
            msgBoard.append(p);
        });
    })
    .catch((error) => console.error('Error:', error));
}

// 在页面加载时显示留言
window.onload = function() {
    displayMessages();
}




function test() {
    console.log('test')
}

//节流
function throttle(func, delay) {
    let preTime =0;
    return function () {
        let nowTime = new Date()
        if(nowTime-preTime > delay){
            test()
            preTime = nowTime;
        }

    }
}

window.addEventListener('click', throttle(test, 1000))

