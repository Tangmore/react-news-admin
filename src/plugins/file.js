/* -------------------------------文件下载 start------------------------------------- */
    export function creatDownLoad(fileName, res) {
        const content = res;
        const blob = new Blob([content]);
        // const fileName = '导出信息.xlsx';
        if ('download' in document.createElement('a')) { // 非IE下载
            const elink = document.createElement('a');
            elink.download = fileName;
            elink.style.display = 'none';
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href);// 释放URL 对象
            document.body.removeChild(elink);
        } else { // IE10+下载
            navigator.msSaveBlob(blob, fileName);
        }
    }

/* -------------------------------图片压缩 start------------------------------------- */
    //base64转码（压缩完成后的图片为base64编码，这个方法可以将base64编码转回file文件）
    function dataURLtoFile(dataurl,fileName) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], fileName,{ type: mime });
    }
    //压缩图片
    export function compressImg(file) {
        let files;
        let fileName = file.name;
        let fileSize = parseFloat(parseInt(file.size) / 1024 / 1024).toFixed(2);
        let read = new FileReader();
        read.readAsDataURL(file);
        return new Promise(((resolve, reject) => {
        read.onload = function (e) {
            let img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                //默认按比例压缩
                let w = this.width;
                    let h = this.height;
                //生成canvas
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');
                let base64;
                // 创建属性节点
                canvas.setAttribute('width', w);
                canvas.setAttribute('height', h);
                ctx.drawImage(this, 0, 0, w, h);
                if (fileSize < 1) {
                    //如果图片小于一兆 那么不执行压缩操作
                    base64 = canvas.toDataURL(file.type, 1);
                } else if (fileSize > 1 && fileSize < 2) {
                    //如果图片大于1M并且小于2M 那么压缩0.5
                    base64 = canvas.toDataURL(file.type, 0.5);
                } else {
                    //如果图片超过2m 那么压缩0.2
                    base64 = canvas.toDataURL(file.type, 0.2);
                }
                // 回调函数返回file的值（将base64编码转成file）
                files = dataURLtoFile(base64,fileName); //如果后台接收类型为base64的话这一步可以省略
                resolve(files)
            };
        };
        }))
    } 
  
