pie = 0;
gold = 0;
neso = 8;
song = 3090;
click = 0;
clicktotal = 0;

showtime = false;
showtimegauge = 0;

gainPerClick = 1;
multpClick = 1;
songMultpClick = 1;

gainPerSec = 0;
multpSec = 1;
songMultpSec = 1;

$("#pie").text(pie);

//Save load
{
    neso = JSON.parse(window.localStorage.getItem('neso'));
    if (isNaN(neso) === true || neso == null) {
        neso = 8;
    }
    pie = JSON.parse(window.localStorage.getItem('pie'));
    if (isNaN(pie) === true || pie == null) {
        pie = 0;
    }
    gold = JSON.parse(window.localStorage.getItem('gold'));
    if (isNaN(gold) === true || gold == null) {
        gold = 0;
    }
    click = JSON.parse(window.localStorage.getItem('click'));
    if (isNaN(click) === true || click == null) {
        click = 0;
    }
    gainPerClick = JSON.parse(window.localStorage.getItem('gainPerClick'));
    if (isNaN(gainPerClick) === true || gainPerClick == null) {
        gainPerClick = 1;
    }
    multpClick = JSON.parse(window.localStorage.getItem('multpClick'));
    if (isNaN(multpClick) === true || multpClick == null) {
        multpClick = 1;
    }
    gainPerSec = JSON.parse(window.localStorage.getItem('gainPerSec'));
    if (isNaN(gainPerSec) === true || gainPerSec == null) {
        gainPerSec = 0;
    }
}

//Neso and skills
{

    nesoData = [
        {
            name:"Chika Takami",
            status:"2nd year",
            colorCode:"FF9643",
            desc:"Dumb ass",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"Riko Sakurauchi",
            status:"2nd year",
            colorCode:"FF7777",
            desc:"Woman",
            skillDesc:"",
            skill:function(){
                showtimegauge=256;
                showtimeCounter.call();
            }
        },
        {
            name:"Kanan Matsuura",
            status:"3rd year",
            colorCode:"00D29D",
            desc:"Illegal",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"Dia Kurosawa",
            status:"3rd year",
            colorCode:"E43B3B",
            desc:"Fangirl",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"You Watanabe",
            status:"2nd year",
            colorCode:"279ED6",
            desc:"Florida",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"Yoshiko Tsushima",
            status:"1st year",
            colorCode:"C3C3C3",
            desc:"Dumb ass but less",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"Hanamaru kunikida",
            status:"1st year",
            colorCode:"EFD600",
            desc:"Borgar",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"Mari Ohara",
            status:"Deceased",
            colorCode:"C550FF",
            desc:"Sex offender",
            skillDesc:"",
            skill:function(){

            }
        },
        {
            name:"Ruby Kurosawa",
            status:"1st year",
            colorCode:"F273C4",
            desc:"",
            skillDesc:"",
            skill:function(){

            }
        },

    ];


    function nesoChoose() {
        $("#neso").attr("src","img/eatpie/"+neso+".png");
        $("#idolsel").attr("src","img/eatpie/idol/"+neso+".png");
        $("#nesoName").text(nesoData[neso].name);
        $("#status").text(nesoData[neso].status);
        $("#nesoDesc").text(nesoData[neso].desc);

        for(i=0;i<9;i++){
            if(darkmode===1){
                $("#neso"+i).attr("style","padding:12px;border: 2px solid #cdcdcd;background-color: rgb(61, 60, 62);");
            }
            else{
                $("#neso"+i).attr("style","padding:12px;border: 2px solid #cdcdcd;background-color:white");
            }

        }
        $("#neso"+neso).attr("style","padding:12px;border: 2px solid #"+nesoData[neso].colorCode+";background-color:#"+nesoData[neso].colorCode);
    }
    $("#neso0").click(function(){
        neso=0;
        nesoChoose.call();

    });
    $("#neso1").click(function(){
        neso=1;
        nesoChoose.call();
    });
    $("#neso2").click(function(){
        neso=2;
        nesoChoose.call();
    });
    $("#neso3").click(function(){
        neso=3;
        nesoChoose.call();
    });
    $("#neso4").click(function(){
        neso=4;
        nesoChoose.call();
    });
    $("#neso5").click(function(){
        neso=5;
        nesoChoose.call();
    });
    $("#neso6").click(function(){
        neso=6;
        nesoChoose.call();
    });
    $("#neso7").click(function(){
        neso=7;
        nesoChoose.call();
    });
    $("#neso8").click(function(){
        neso=8;
        nesoChoose.call();
    });
}

//Cheats
{
    $("#cheatnavbar").click(function(){
        $("#piebox").val(pie);
        $("#multpclickbox").val(multpClick);
        $("#multpsecbox").val(gainPerSec);

    });

    $("#x2PieCheat").click(function(){
        pie*=2;
    });
    $("#p1000PieCheat").click(function(){
        pie+=1000;
    });

    $("#cheatbutton").click(function(){
        if($("#piebox").val()!=""){

        }
        pie = Math.round($("#piebox").val());
        multpClick = Math.round($("#multpclickbox").val());
        gainPerSec = Math.round($("#multpsecbox").val());
        if(isNaN(pie)===true||pie==null){
            pie = 0;
        }
        if(isNaN(multpClick)===true||multpClick==null){
            multpClick = 1;
        }
        if(isNaN(gainPerSec)===true||gainPerSec==null){
            gainPerSec = 0;
        }
        if(multpClick<1||multpClick==null){
            multpClick = 1;
        }

        vibecheck.call();

        $("#ppc").text("PPc (Pies per click) : "+Math.round(gainPerClick*multpClick));

    });
}

function pies(){
    if(showtime===false){
        pie+= Math.round(gainPerClick*multpClick*songMultpClick);
    }
    else{
        pie+= Math.round((gainPerClick*multpClick*songMultpClick)*3);
    }
    $("#pie").text(pie);

    click++;
    clicktotal++;
    if(showtime===false){
        showtimegauge+=Math.floor(Math.random() * 3)+5;
    }

    if(click>=50){
        $("#neso").attr("style","transform: scale(1.02);");
        if(click>=100){
            $("#neso").attr("style","transform: scale(1.06);");
            if(click>=150){
                $("#neso").attr("style","transform: scale(1.1);");
                if(click>=200){
                    $("#neso").attr("style","transform: scale(1.15);");
                    if(click>=250){
                        $("#neso").attr("style","transform: scale(1);");
                        pie = pie + (145*multpClick*songMultpClick);
                        click = 0;
                        gold+= 10;
                    }
                }
            }
        }
    }
    $("#clickbar").attr("style","width:"+click/2.5+"%;");
    if(pie>=9999999999){
        $("#pie").attr("style","font-size:3.2rem;");
        if(pie>=99999999999){
            $("#pie").attr("style","font-size:3.0rem;");
        }
    }



}

//Showtime
{
    function showtimeCounter(){
        if(showtime===false){
            $("#showtimebar").attr("style","position:absolute;left:40px;clip:rect(0,"+showtimegauge+"px,24px,0)");
        }
        if(showtimegauge>=256){
            if(song!==3090){
                $("#playersong").attr("src","img/eatpie/album/songfile/"+song+"st.mp3");
                player = document.getElementById("player");
                player.load();
                $("#player").trigger("play");

            }
            showtime = true;
            showtimeCounter2 = 256;
            $("#showtimebar").attr("src","img/eatpie/showtimebaron.png");
            $("#showtimeIMG").attr("src","img/eatpie/showtimeon.png");
            showtimeFN.call();

        }


    }

    showtimeCounter2 = 0;
    function showtimeFN(){
        setTimeout(() => {
            if(showtimeCounter2>0){
                showtimeCounter2-=0.25;
                showtimegauge-=0.25;
                $("#showtimebar").attr("style","position:absolute;left:40px;clip:rect(0,"+showtimegauge+"px,24px,0)");
                showtimeFN.call();
            }
            else{
                showtime = false;
                showtimegauge = 0;
                $("#showtimebar").attr("style","position:absolute;left:40px;clip:rect(0,"+showtimegauge+"px,24px,0)");
                $("#showtimebar").attr("src","img/eatpie/showtimebar.png");
                $("#showtimeIMG").attr("src","img/eatpie/showtime.png");
                songLoad.call()
            }
        }, 25);
    }
}


function income(){
    pie = Math.round(pie + (gainPerSec*multpSec*songMultpSec));
    $("#pie").text(pie);
}
setInterval (income, 998);

//2x upgrade
{
    price2x = 35;
    priceMultp2x = 3;
    twoxlvl = 0;
    twoxlvl = JSON.parse(window.localStorage.getItem('twoxlvl'));
    if(isNaN(twoxlvl)===true||twoxlvl==null){
        twoxlvl = 0;
    }
    $("#2x").text(Math.round(price2x)+" pies");
    if(twoxlvl>0){
        for(i=0;i<twoxlvl;i++){
            price2x *= priceMultp2x;
        }
        $("#2x").text(Math.round(price2x)+" pies");
    }
    $("#2xlvl").text("Lvl: "+twoxlvl);
    $("#ppc").text("PPc (Pies per click) : "+Math.round(gainPerClick*multpClick));

    $("#2x").click(function(){

        if(pie>=price2x){
            pie -= price2x;
            multpClick *= 2;
            price2x *= priceMultp2x;
            $("#2x").text(Math.round(price2x)+" pies");
            twoxlvl++;
            $("#2xlvl").text("Lvl : "+twoxlvl)

        }
        $("#ppc").text("PPc (Pies per click) : "+Math.round(gainPerClick*multpClick));
        songBonus.call();

    });
}

//PPs upgrades
{
    price1 = 20;
    priceMultp1 = 1.1;
    u1lvl = 0;
    u1lvl = JSON.parse(window.localStorage.getItem('u1lvl'));
    if(isNaN(u1lvl)===true||u1lvl==null){
        u1lvl = 0;
    }
    $("#u1").text(Math.round(price1)+" pies");
    if(u1lvl>0){
        for(i=0;i<u1lvl;i++){
            price1 *= priceMultp1;
        }
        $("#u1").text(Math.round(price1)+" pies");
    }
    $("#u1lvl").text("Lvl: "+u1lvl);

    $("#u1").click(function(){

        if(pie>=price1){
            pie -= price1;
            gainPerSec++;
            price1 *= priceMultp1;
            $("#u1").text(Math.round(price1)+" pies");
            u1lvl++;
            $("#u1lvl").text("Lvl: "+u1lvl);

        }
        purchaseUpgradePPs.call();
        songBonus.call();

    });


    price2 = 160;
    priceMultp2 = 1.1;
    u2lvl = 0;
    u2lvl = JSON.parse(window.localStorage.getItem('u2lvl'));
    if(isNaN(u2lvl)===true||u2lvl==null){
        u2lvl = 0;
    }
    $("#u2").text(Math.round(price2)+" pies");
    if(u2lvl>0){
        for(i=0;i<u2lvl;i++){
            price2 *= priceMultp2;
        }
        $("#u2").text(Math.round(price2)+" pies");
    }
    $("#u2lvl").text("Lvl: "+u2lvl);

    $("#u2").click(function(){

        if(pie>=price2){
            pie -= price2;
            gainPerSec += 3;
            price2 *= priceMultp2;
            $("#u2").text(Math.round(price2)+" pies");
            u2lvl++;
            $("#u2lvl").text("Lvl: "+u2lvl);
        }
        purchaseUpgradePPs.call();
        songBonus.call();

    });


    price3 = 1800;
    priceMultp3 = 1.1;
    u3lvl = 0;
    u3lvl = JSON.parse(window.localStorage.getItem('u3lvl'));
    if(isNaN(u3lvl)===true||u3lvl==null){
        u3lvl = 0;
    }
    $("#u3").text(Math.round(price3)+" pies");
    if(u3lvl>0){
        for(i=0;i<u3lvl;i++){
            price3 *= priceMultp3;
        }
        $("#u3").text(Math.round(price3)+" pies");
    }
    $("#u3lvl").text("Lvl: "+u3lvl);

    $("#u3").click(function(){

        if(pie>=price3){
            pie -= price3;
            gainPerSec += 11;
            price3 *= priceMultp3;
            $("#u3").text(Math.round(price3)+" pies");
            u3lvl++;
            $("#u3lvl").text("Lvl: "+u3lvl);
        }
        purchaseUpgradePPs.call();
        songBonus.call();

    });

    price4 = 20000;
    priceMultp4 = 1.1;
    u4lvl = 0;
    u4lvl = JSON.parse(window.localStorage.getItem('u4lvl'));
    if(isNaN(u4lvl)===true||u4lvl==null){
        u4lvl = 0;
    }
    $("#u4").text(Math.round(price4)+" pies");
    if(u4lvl>0){
        for(i=0;i<u4lvl;i++){
            price4 *= priceMultp4;
        }
        $("#u4").text(Math.round(price4)+" pies");
    }
    $("#u4lvl").text("Lvl: "+u4lvl);

    $("#u4").text(Math.round(price4)+" pies");
    $("#u4").click(function(){

        if(pie>=price4){
            pie -= price4;
            gainPerSec += 45;
            price4 *= priceMultp4;
            $("#u4").text(Math.round(price4)+" pies");
            u4lvl++;
            $("#u4lvl").text("Lvl: "+u4lvl);
        }
        purchaseUpgradePPs.call();
        songBonus.call();

    });

    price5 = 95000;
    priceMultp5 = 1.1;
    u5lvl = 0;
    u5lvl = JSON.parse(window.localStorage.getItem('u5lvl'));
    if(isNaN(u5lvl)===true||u5lvl==null){
        u5lvl = 0;
    }
    $("#u5").text(Math.round(price5)+" pies");
    if(u5lvl>0){
        for(i=0;i<u5lvl;i++){
            price5 *= priceMultp5;
        }
        $("#u5").text(Math.round(price5)+" pies");
    }
    $("#u5lvl").text("Lvl: "+u5lvl);

    $("#u5").text(Math.round(price5)+" pies");
    $("#u5").click(function(){

        if(pie>=price5){
            pie -= price5;
            gainPerSec += 165;
            price5 *= priceMultp5;
            $("#u5").text(Math.round(price5)+" pies");
            u5lvl++;
            $("#u5lvl").text("Lvl: "+u5lvl);
        }
        purchaseUpgradePPs.call();
        songBonus.call();

    });
}

$("#secimg").attr("style","filter: brightness(40%);");


function songBonus() {
    $("#ppcbonus").text("+ "+Math.round((gainPerClick*multpClick*songMultpClick)-(gainPerClick*multpClick))+" bonus");
    $("#ppsbonus").text("+ "+Math.round((gainPerSec*songMultpSec)-gainPerSec)+" bonus");
}

function purchaseUpgradePPs() {
    $("#pps").text("PPs (Pies per seconds) : "+Math.round(gainPerSec));
    if(gainPerSec>0){
        $("#secimg").attr("style","filter: brightness(100%);");
    }
}

$("#pps").text("PPs (Pies per seconds) : "+Math.round(gainPerSec));
if(gainPerSec>0){
    $("#secimg").attr("style","filter: brightness(100%);");
}



//That moment when you click on things

$("#neso").attr("src","img/eatpie/"+neso+".png");

$("#neso").click(function(){
    pies.call();
    showtimeCounter.call()
});

$("#cursor1").attr("style","display:none");
$("#cursor2").attr("style","display:none");
$("#cursor3").attr("style","display:none");

screensetting = 1;
$("body").click(function(){

    x = event.clientX-25;
    y = event.clientY-25;
    if(screensetting===1){
        $("#cursor1").attr("style","position: absolute;left:"+x+"px;top:"+y+"px;z-index:5000;pointer-events:none");
        setTimeout(() => {$("#cursor1").attr("style","display:none");}, 60);
        setTimeout(() => {$("#cursor2").attr("style","position: absolute;left:"+x+"px;top:"+y+"px;z-index:5000;pointer-events:none");}, 65);
        setTimeout(() => {$("#cursor2").attr("style","display:none");}, 175);
        setTimeout(() => {$("#cursor3").attr("style","position: absolute;left:"+x+"px;top:"+y+"px;z-index:5000;pointer-events:none");}, 180);
        setTimeout(() => {$("#cursor3").attr("style","display:none");}, 370);
    }

});


//Songs
{

    slider = document.getElementById("volumeSlider");
    output = document.getElementById("volumeLevel");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        player.volume = slider.value/100;
    };

    player.volume = slider.value/100;



    function songLoad() {
        if(showtime===true){
            $("#playersong").attr("src","img/eatpie/album/songfile/"+song+"st.mp3");
            player = document.getElementById("player");
            player.load();

            $("#player").trigger("play");
        }
        else{
            $("#playersong").attr("src","img/eatpie/album/songfile/"+song+"loop.mp3");
            player = document.getElementById("player");
            player.load();

            $("#player").trigger("play");
        }



    }

    songCount = 3;
    for(i=1;i<=songCount;i++){
        $("#s"+i).attr("style","filter: brightness(50%);");
    }

    $("#s1").click(function(){
        song = 0;
        for(i=1;i<=songCount;i++){
            $("#s"+i).attr("style","filter: brightness(50%);");
        }
        $("#s1").attr("style","filter: brightness(102%);");
        songMultpClick = 1;
        songMultpSec = 1.2;
        songBonus.call();
        songLoad.call();


    });

    $("#s2").click(function(){
        song = 1;
        for(i=1;i<=songCount;i++){
            $("#s"+i).attr("style","filter: brightness(50%);");
        }
        $("#s2").attr("style","filter: brightness(102%);");
        songMultpClick = 1.2;
        songMultpSec = 1;
        songBonus.call();
        songLoad.call();
    });

    $("#s3").click(function(){
        song = 2;
        for(i=1;i<=songCount;i++){
            $("#s"+i).attr("style","filter: brightness(50%);");
        }
        $("#s3").attr("style","filter: brightness(102%);");
        songMultpClick = 1.1;
        songMultpSec = 1.1;
        songBonus.call();
        songLoad.call();
    });

}

//Settings
{
    darkmode = 0;

    $("#checkbox1").click(function(){
     if($("#checkbox1").prop("checked")==true){
         $("#body").attr("class","bgd");
         $("#woobleah").attr("src","img/eatpie/10.png");
         $("#banner").attr("class","col-12 p0 no-gutters bg1d row text-center");
         $("#card1").attr("class","card bggray shadow");
         $("#card2").attr("class","card bggray shadow");
         $("#card3").attr("class","card bggray shadow");
         for(i=0;i<5;i++){
             $("#modalheader"+i).attr("class","modal-header bggray");
             $("#modalbody"+i).attr("class","modal-body bggray");
         }
         for(i=0;i<9;i++){
             $("#neso"+i).attr("style","padding:12px;border: 2px solid #cdcdcd;background-color: rgb(61, 60, 62);");
         }
         $("p").css("color","rgb(235,235,235)");
         $("h1").css("color","rgb(235,235,235)");
         $("h3").css("color","rgb(195,195,195)");
        darkmode = 1;

     }
     else{
         $("#body").attr("class","bg");
         $("#woobleah").attr("src","img/eatpie/8.png");
         $("#banner").attr("class","col-12 p0 no-gutters bg1 row text-center");
         $("#card1").attr("class","card bgbrown shadow");
         $("#card2").attr("class","card bgbrown shadow");
         $("#card3").attr("class","card bgbrown shadow");
         for(i=0;i<5;i++){
             $("#modalheader"+i).attr("class","modal-header bgbrown");
             $("#modalbody"+i).attr("class","modal-body bgbrown");
         }
         for(i=0;i<9;i++){
             $("#neso"+i).attr("style","padding:12px;border: 2px solid #cdcdcd;background-color:white");
         }
         $("p").css("color","rgb(0,0,0)");
         $("h1").css("color","rgb(15, 15, 15)");
         $("h3").css("color","rgb(25, 25, 25)");
         darkmode = 0;

     }
    });


    $("#clickAnimationCheckbox").click(function(){
        if($("#clickAnimationCheckbox").prop("checked")==true){
            screensetting = 1;


        }
        else{
            screensetting = 0;

        }
    });



}

//Save
{
    function save()  {
        window.localStorage.setItem("neso", neso);
        window.localStorage.setItem("pie", pie);
        window.localStorage.setItem("gold", gold);
        window.localStorage.setItem("click", click);
        window.localStorage.setItem("gainPerClick", gainPerClick);
        window.localStorage.setItem("multpClick", multpClick);
        window.localStorage.setItem("gainPerSec", gainPerSec);

        window.localStorage.setItem("twoxlvl", twoxlvl);
        window.localStorage.setItem("u1lvl", u1lvl);
        window.localStorage.setItem("u2lvl", u2lvl);
        window.localStorage.setItem("u3lvl", u3lvl);
        window.localStorage.setItem("u4lvl", u4lvl);
        window.localStorage.setItem("u5lvl", u5lvl);

    }
    setInterval (save, 300000); //5 minutes

    $("#savebutton").click(function(){
        save.call();
    });

    $("#reset").click(function(){


        pie = 0;
        gold = 0;
        neso = 8;
        song = 3090;
        click = 0;
        clicktotal = 0;

        showtime = false;
        showtimegauge = 0;


        gainPerClick = 1;
        multpClick = 1;
        songMultpClick = 1;

        gainPerSec = 0;
        multpSec = 1;
        songMultpSec = 1;

        price2x = 35;
        priceMultp2x = 3;
        twoxlvl = 0;

        price1 = 20;
        priceMultp1 = 1.1;
        u1lvl = 0;

        price2 = 160;
        priceMultp2 = 1.1;
        u2lvl = 0;

        price3 = 1800;
        priceMultp3= 1.1;
        u3lvl = 0;

        price4 = 20000  ;
        priceMultp4 = 1.1;
        u4lvl = 0;

        price5 = 95000;
        priceMultp5 = 1.1;
        u5lvl = 0;

        localStorage.clear();

        save.call();
        vibecheck.call();
    });
}


$("#refreshbutton").click(function(){
    vibecheck.call();
});


function vibecheck(){
    purchaseUpgradePPs.call();
    songBonus.call();
    nesoChoose.call();
    $("#neso").attr("src","img/eatpie/"+neso+".png");
    $("#ppc").text("PPc (Pies per click) : "+Math.round(gainPerClick*multpClick));
    $("#showtimebar").attr("style","position:absolute;left:5px;clip:rect(0,"+showtimegauge+"px,24px,0)");
    $("#clickbar").attr("style","width:"+click/5+"%;");

    $("#2xlvl").text("Lvl: "+twoxlvl);
    $("#2x").text(Math.round(price2x)+" pies");

    $("#u1lvl").text("Lvl: "+u1lvl);
    $("#u1").text(Math.round(price1)+" pies");
    $("#u2lvl").text("Lvl: "+u2lvl);
    $("#u2").text(Math.round(price2)+" pies");
    $("#u3lvl").text("Lvl: "+u3lvl);
    $("#u3").text(Math.round(price3)+" pies");
    $("#u4lvl").text("Lvl: "+u4lvl);
    $("#u4").text(Math.round(price4)+" pies");
    $("#u5lvl").text("Lvl: "+u5lvl);
    $("#u5").text(Math.round(price5)+" pies");

}

vibecheck.call();

//USA #1 o7