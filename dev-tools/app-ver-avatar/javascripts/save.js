function save_0() { 
    alert('暂不支持，可手动截图保存~')
}

function save_1() {
    //#proMain:要截图的DOM元素
    //useCORS:true:解决跨域问题
    html2canvas(document.querySelector('#avatar'), { useCORS: true }).then(function (canvas) {
        //获取年月日作为文件名
        var timers = new Date();
        var fullYear = timers.getFullYear();
        var month = timers.getMonth() + 1;
        var date = timers.getDate();
        var randoms = Math.random() + '';
        //年月日加上随机数
        var numberFileName = fullYear + '' + month + date + randoms.slice(3, 10);
        var imgData = canvas.toDataURL();
        //保存图片
        var saveFile = function (data, filename) {
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;

            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        };
        //最终文件名+文件格式
        var filename = numberFileName + '.png';
        // saveFile(imgData, filename);
        document.body.appendChild(canvas); // 把截的图显示在网页上
    })
}

function save_2() {
    html2canvas(document.querySelector('#avatar'), {
        onrendered: function (canvas) {
            document.body.appendChild(canvas);

            // var image = new Image();
            // image.src = canvas.toDataURL("image/png");
            // document.body.appendChild(image);
        }
    })
}

function save_3() {
    let container = document.getElementById('avatar')
    console.log(container)
    html2canvas(container).then(canvas => {
        document.body.appendChild(canvas);
        // let imgData = canvas.toDataURL()
        // let link = document.createElement('a')
        // link.href = imgData
        // link.download = 'test.png'
        // link.click()
    })
}