function openOtherPage(p1, p2, p3, p4) {
    // 要传递的字符
    var character1 = p1;  //url地址
    var character2 = p2;  //资源来源
    var character3 = p3;  //作者信息
    var character4 = p4;  //联系方式
    // 对参数进行编码
    var encodedC1 = encodeURIComponent(character1);
    var encodedC2 = encodeURIComponent(character2);
    var encodedC3 = encodeURIComponent(character3);
    var encodedC4 = encodeURIComponent(character4);
    // 将字符作为参数拼接到 URL 中
    window.location.href = "Advert.html?c1=" + encodedC1 + "&c2=" + encodedC2 + "&c3=" + encodedC3 + "&c4=" + encodedC4;
}
function consoles(){
    alert("未开通,敬请期待!");
}