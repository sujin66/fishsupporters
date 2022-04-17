
let nowSelect;
let nowLine = 0;
let oldLine = 0;
let canGoing = true;
filterSelection('all');
function filterSelection(ele_class){
    if(ele_class=='all'){
        nowSelect = $('.column');
    } else {
        nowSelect=$('.'+ele_class);
    }
    $('.column').hide().find('.content').css({opacity:0,top:300});
    nowSelect.show();
    nowLine = 0;
    canGoing=false;
    myAnimate();
}

$('.btn').click(function(){
    $('.btn').removeClass('active');
    $(this).addClass('active');

});



$(window).scroll(function(){
    if(canGoing){
        canGoing = false;
        let nowST = $(window).scrollTop();
        if(nowST>400 && nowST<=900){
            nowLine =1;
        }else if(nowST>900 && nowST<=1200){
            nowLine =2;
        }else if(nowST>1200 && nowST<=1600){
            nowLine =3;
        }else if(nowST>1600 && nowST<=2000){
            nowLine =4;
        }else if(nowST>2000 && nowST<=2400){
            nowLine =5;
        }else if(nowST>2400 && nowST<=2800){
            nowLine =6;
        }else if(nowST>2800 && nowST<=3200){
            nowLine =7;
        }else if(nowST>3200 && nowST<=3600){
            nowLine =8;
        }else if(nowST>3600 && nowST<=4000){
            nowLine =9;
        }else if(nowST>4000 && nowST<=4400){
            nowLine =10;
        }else if(nowST>4400 && nowST<=4800){
            nowLine =11;
        }else if(nowST>4800 && nowST<=5200){
            nowLine =12;
        }else if(nowST>5200 && nowST<=5600){
            nowLine =13;
        }else if(nowST>5600 && nowST<=6000){
            nowLine =14;
        }else if(nowST>6000 && nowST<=6400){
            nowLine =15;
        }else if(nowST>6400 && nowST<=6800){
            nowLine =16;
        }else if(nowST>6800 && nowST<=7200){
            nowLine =17;
        }else if(nowST>7200 && nowST<=7600){
            nowLine =18;
        }else if(nowST>7600 && nowST<=8000){
            nowLine =19;
        }else if(nowST>8000 && nowST<=8400){
            nowLine =20;
        }else if(nowST>8400 && nowST<=8400){
            nowLine =21;
        }else if(nowST>8800 && nowST<=9200){
            nowLine =22;
        }else if(nowST>9200 && nowST<=9600){
            nowLine =23;
        }else if(nowST>9600 && nowST<=10000){
            nowLine =24;
        }else if(nowST>10000 && nowST<=10400){
            nowLine =24;
        }else if(nowST>10400 && nowST<=10800){
            nowLine =25;
        }else if(nowST>10800 && nowST<=11200){
            nowLine =26;
        }else if(nowST>11200 && nowST<=11600){
            nowLine =27;
        }else if(nowST>11600 && nowST<=12000){
            nowLine =28;
        }else if(nowST>12000 && nowST<=12400){
            nowLine =29;
        }else if(nowST>12400 && nowST<=12800){
            nowLine =30;
        }else if(nowST>12800 && nowST<=13200){
            nowLine =31;
        }else if(nowST>13200 && nowST<=13600){
            nowLine =32;
        }else if(nowST>13600 && nowST<=14000){
            nowLine =33;
        }else if(nowST>14000 && nowST<=14400){
            nowLine =34;
        }else if(nowST>14400 && nowST<=14800){
            nowLine =35;
        }else if(nowST>14800 && nowST<=15200){
            nowLine =36;
        }else if(nowST>15200 && nowST<=15600){
            nowLine =37;
        }else if(nowST>15600 && nowST<=16000){
            nowLine =38;
        }else if(nowST>16000 && nowST<=16400){
            nowLine =39;
        }else if(nowST>16400 && nowST<=16800){
            nowLine =40;
        }else if(nowST>16800 && nowST<=17200){
            nowLine =41;
        }else if(nowST>17200 && nowST<=17600){
            nowLine =42;
        }else if(nowST>17600 && nowST<=18000){
            nowLine =43;
        }else if(nowST>18000 && nowST<=18400){
            nowLine =44;
        }else if(nowST>18400 && nowST<=18800){
            nowLine =45;
        }else if(nowST>18800 && nowST<=19200){
            nowLine =46;
        }else if(nowST>19200 && nowST<=19600){
            nowLine =47;
        }else if(nowST>19600 && nowST<=20000){
            nowLine =48;
        }else if(nowST>20000 && nowST<=20400){
            nowLine =49;
        }else if(nowST>20400 && nowST<=20800){
            nowLine =50;
        }else if(nowST>20800 && nowST<=21200){
            nowLine =51;
        }
        if(nowLine>oldLine){
            myAnimate();
        }else{
            canGoing = true;
        }
    }
});

function myAnimate(){
    let start = (oldLine+1)*4;
    if(nowLine==0){
        start = 0;
    }
    oldLine = nowLine;
    for (i = start; i < nowSelect.length && i < (nowLine+1)*4; i++) {
        nowSelect.eq(i).find('.content')
        .delay((i-nowLine*4)*500)
        .animate({
            opacity:1,
            top:0
        },700,'easeOutExpo');
    }
    canGoing=true;
    $(window).scroll();
}



