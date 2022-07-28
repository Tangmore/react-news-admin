/**
 * 根据设计图设置UI比例
 */
class Rem {
    constructor(designWidth) {
        this.designWidth = designWidth;
    }

    autoFont() {
        let whdef = this.designWidth / 100.0;// 表示750的设计图,使用100PX的默认值
        let bodyWidth = document.body.clientWidth>this.designWidth?this.designWidth/2:document.body.clientWidth;// 当前窗口的宽度
        let rem = bodyWidth / whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
        // console.log('bodyWidth=' + bodyWidth + ';html-font-size===' + rem + 'px');
    }

}

let rem = new Rem(750);

function setRem() {
    rem.autoFont();
}

window.addEventListener('load', setRem);
window.addEventListener('resize', setRem);
export default setRem;
