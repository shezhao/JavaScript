
function qqFindPhone() {
    const qqStr = document.getElementById('textInput').value;
    const apiUrl = 'https://zy.xywlapi.cc/qqapi'; // 替换为实际的API端点
    const url = `${apiUrl}?qq=${qqStr}`; // 将QQ号码作为URL参数传递

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('网络请求失败');
        }
        return response.json();
    })
    .then(data => {
        // 假设存在名为displayQQ的函数用于显示数据
        displayQQ(data);
    })
    .catch(error => {
        // 处理异常情况
        console.error('发生错误:', error);
    });
}

function displayQQ(data) {
    // 假设页面上有一个 id 为 qq_display 的元素用于显示 QQ 数据
    const qqDisplay = document.getElementById('qq_display');

    // 清空之前的内容
    qqDisplay.innerHTML = '';

    // 创建一个新的 <div> 元素用于显示 QQ 数据
    const qqInfoDiv = document.createElement('div');

    // 假设 API 返回的数据结构为 { qq: 'QQ号码', phone: '电话号码' }
    const qqNumber = data.qq;
    const phoneNumber = data.phone;
    const qqStatus = data.message;
    const phoneAddress = data.phonediqu;
    

    // 创建文本节点，显示 QQ 号码和电话号码
    const qqText = document.createTextNode(`QQ号码：${qqNumber}`);
    const phoneText = document.createTextNode(`电话号码：${phoneNumber}`);
    const qqStatusText = document.createTextNode(`查询情况：${qqStatus}`);
    const phoneAddressText = document.createTextNode(`电话号码所属地：${phoneAddress}`);


    // 将文本节点添加到新创建的 <div> 元素中
    qqInfoDiv.appendChild(qqText);
    qqInfoDiv.appendChild(document.createElement('br')); // 添加换行
    qqInfoDiv.appendChild(qqStatusText);
    qqInfoDiv.appendChild(document.createElement('br')); // 添加换行 添加换行
    qqInfoDiv.appendChild(phoneText);
    qqInfoDiv.appendChild(document.createElement('br'));
    qqInfoDiv.appendChild(phoneAddressText);
    // 将新创建的 <div> 元素添加到页面上
    qqDisplay.appendChild(qqInfoDiv);
}
