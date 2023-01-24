check = function () {
    document.getElementById('lock').style.display="none"
    document.getElementById('unlock').style.display="block"
    /*var d = new Date();
    var a = String(d.getMonth() + 1)
    if (a < 11) {
        a = "0" + a
    }
    var first = String(d.getFullYear()) + a + String(d.getDate())
    var second = window.btoa(first)
    var third = hex_md5(second)
    var x = 1232 - parseInt(String(d.getMonth() + 1) + String(d.getDate()))
    var key = x / parseInt(String(d.getMonth() + 1) + String(d.getDate())) * 10000000000000
    var key1 = String(key).substring(0, 1)
    var keynum1 = String(key).substring(parseInt(key1) - 1, parseInt(key1))
    var keynum2 = String(key).substring(parseInt(key1), parseInt(key1) + 1)
    var keynum3 = String(key).substring(parseInt(key1) + 1, parseInt(key1) + 2)
    var keynum4 = String(key).substring(parseInt(key1) + 2, parseInt(key1) + 3)
    var password = new Array()
    password[0] = String(third).substring(0, 4)
    password[1] = String(third).substring(4, 8)
    password[2] = String(third).substring(8, 12)
    password[3] = String(third).substring(12, 16)
    password[4] = String(third).substring(16, 20)
    password[5] = String(third).substring(20, 24)
    password[6] = String(third).substring(24, 28)
    password[7] = String(third).substring(28, 32)
    password[8] = String(third).substring(0, 4)
    password[9] = String(third).substring(4, 8)
    var show = password[keynum1] + password[keynum2] + password[keynum3] + password[keynum4]
    if(document.getElementById('password1').value == show){
        alert("密钥正确")
        document.getElementById('lock').style.display="none"
        document.getElementById('unlock').style.display="block"
    }else{
        alert("密钥错误")
    }*/
}
click1 = function () {
    document.getElementById('paragraph1').innerHTML = ""
    document.getElementById('paragraph2').innerHTML = ""
    document.getElementById('paragraph3').innerHTML = ""
    document.getElementById('paragraph4').innerHTML = ""
    document.getElementById('paragraph5').innerHTML = ""
    var obj = document.getElementById("select"); //定位id
    var index = obj.selectedIndex; // 选中索引
    var text = obj.options[index].text; // 选中文本
    var value = obj.options[index].value; // 选中值
    var name = document.getElementById("name").value
    var sname = document.getElementById("sname").value
    var place1 = document.getElementById("place1").value
    var place2 = document.getElementById("place2").value
    var forDo = document.getElementById("for").value
    var result = document.getElementById("result").value
    var radios = document.getElementsByName("a");
    var in1 = document.getElementById("in1").value
    var in2 = document.getElementById("in2").value
    var in3 = document.getElementById("in3").value
    var in4 = document.getElementById("in4").value
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            i++;
        }
    }
    var Btxt4
    var Ctxt4
    if (i == 2) {
        Btxt4 = "小哥"
        Ctxt4 = "他"
    } if (i == 3) {
        Btxt4 = "小妞"
        Ctxt4 = "她"
    }


    if (place1 == "" && place2 == "") {
        document.getElementById('paragraph1').innerHTML = "啊偶了喔，您有部分内容未填，出现在："
        document.getElementById('paragraph5').innerHTML = "主人公<发生地点>未填写"
        if (name == "" || sname == "" || forDo == "" || result == "" || in1 == "") {
            if (name == "" || sname == "") {
                document.getElementById('paragraph2').innerHTML = "<主人公名字>或<营销号名字>未填写"
            }
            if (forDo == "" || result == "") {
                document.getElementById('paragraph3').innerHTML = "主人公<起因>或<结果>未填写"
            }
            if (in1 == "") {
                document.getElementById('paragraph4').innerHTML = "主人公<过程>未填写"
            }
        }
    } else {
        if (name == "" || sname == "" || forDo == "" || result == "" || in1 == "") {
            document.getElementById('paragraph1').innerHTML = "啊偶了喔，您有部分内容未填，出现在："
            if (name == "" || sname == "") {
                document.getElementById('paragraph2').innerHTML = "<主人公名字>或<营销号名字>未填写"
            }
            if (forDo == "" || result == "") {
                document.getElementById('paragraph3').innerHTML = "主人公<起因>或<结果>未填写"
            }
            if (in1 == "") {
                document.getElementById('paragraph4').innerHTML = "主人公<过程>未填写"
            }
        } else {
            //start part1
            var len = 3;
            var rnd = Math.floor(Math.random() * len);
            var txt = new Array(len);
            txt[0] = "hello";
            txt[1] = "hi";
            txt[2] = "hey";
            //end
            //start part2
            var Alen = 2;
            var Arnd = Math.floor(Math.random() * Alen);
            var Atxt = new Array(Alen);
            Atxt[0] = "亲爱的";
            Atxt[1] = "";
            //end
            //start part3
            var Blen = 3;
            var Brnd = Math.floor(Math.random() * Blen);
            var Btxt = new Array(Blen);
            Btxt[0] = "观众朋友们";
            Btxt[1] = "观众老爷们";
            Btxt[2] = "朋友们";
            Btxt[3] = "";
            //end
            //start part4
            var Clen = 2
            var Crnd = Math.floor(Math.random() * Clen);
            var Ctxt = new Array(Clen);
            Ctxt[0] = "你们好,";
            Ctxt[1] = "大家好,";
            //end
            var part1 = txt[rnd] + "各位" + Atxt[Arnd] + Btxt[Brnd] + Ctxt[Crnd] + "我是"
            //end ph1

            //start ph2
            //start part1
            var len2 = 6;
            var rnd2 = Math.floor(Math.random() * len2);
            var txt2 = new Array(len2);
            txt2[0] = "喜欢我们视频的";
            txt2[1] = "喜爱我们视频的";
            txt2[2] = "热爱我们视频的";
            txt2[3] = "喜欢我们节目的";
            txt2[4] = "喜爱我们节目的";
            txt2[5] = "热爱我们节目的";
            //end
            //start part2
            var Alen2 = 2;
            var Arnd2 = Math.floor(Math.random() * Alen2);
            var Atxt2 = new Array(Alen2);
            Atxt2[0] = "观众朋友";
            Atxt2[1] = "小伙伴们";
            //end
            //start part3
            var Blen2 = 3;
            var Brnd2 = Math.floor(Math.random() * Blen2);
            var Btxt2 = new Array(Blen2);
            Btxt2[0] = "可以点击左上角的";
            Btxt2[1] = "可以单击左上角的";
            Btxt2[2] = "不妨点击左上角的";
            Btxt2[3] = "不妨单击左上角的";
            //end
            //start part4
            var Clen2 = 4
            var Crnd2 = Math.floor(Math.random() * Clen2);
            var Ctxt2 = new Array(Clen2);
            Ctxt2[0] = "小红心和关注,";
            Ctxt2[1] = "小爱心和关注,";
            Ctxt2[2] = "小红心加关注,";
            Ctxt2[3] = "小爱心加关注,";
            //end
            var part2 = txt2[rnd2] + Atxt2[Arnd2] + Btxt2[Brnd2] + Ctxt2[Crnd2] + "支持一下我们。"
            //end ph2

            //start ph3
            //start part1
            var len3 = 6;
            var rnd3 = Math.floor(Math.random() * len3);
            var txt3 = new Array(len3);
            txt3[0] = "随着科技越来越发达，";
            txt3[1] = "当今科技越来越发达，";
            txt3[2] = "现代科技的突飞猛进，";
            txt3[3] = "当代的科技突飞猛进，";
            txt3[4] = "随着科技的巨大飞跃，";
            txt3[5] = "现代科技的巨大飞跃，";
            //end
            //start part2
            var Alen3 = 6;
            var Arnd3 = Math.floor(Math.random() * Alen3);
            var Atxt3 = new Array(Alen3);
            Atxt3[0] = "我们的生活越来越便捷，";
            Atxt3[1] = "我们的生活越来越方便，";
            Atxt3[2] = "咱们的生活将变得便捷，";
            Atxt3[3] = "咱们的生活将变得方便，";
            Atxt3[4] = "大家的生活方式已改变，";
            Atxt3[5] = "大家的生活方式已不同，";
            //end
            //start part3
            var Blen3 = 6;
            var Brnd3 = Math.floor(Math.random() * Blen3);
            var Btxt3 = new Array(Blen3);
            Btxt3[0] = "人与人之间的交往也更加的方便，";
            Btxt3[1] = "人与人之间的交往也变得十分快，";
            Btxt3[2] = "人们也被互联网紧密联系在一起，";
            Btxt3[3] = "互联网也将人们紧紧联系在一起，";
            Btxt3[4] = "我们的交往距离也被大大的缩短，";
            Btxt3[5] = "咱们的交往方式也被科技而改变，";
            //end
            //start part4
            var Clen3 = 8
            var Crnd3 = Math.floor(Math.random() * Clen3);
            var Ctxt3 = new Array(Clen3);
            Ctxt3[0] = "这不，刚刚小编就被这则国外的事震惊了，一起来看看吧。";
            Ctxt3[1] = "这不，刚刚小编就被这则外国的事惊呆了，一起来看看吧。";
            Ctxt3[2] = "不瞒你说，刚刚小编就被这则国外的事震惊了，一起来看看吧。";
            Ctxt3[3] = "不满你说，刚刚小编就被这则外国的事惊呆了，一起来看看吧。";
            Ctxt3[4] = "这不，小编刚刚就被这则国外的事震给惊了，一起来看看吧。";
            Ctxt3[5] = "不满你说，小编刚刚就被这则外国的事吓了一跳，一起来看看吧。";
            Ctxt3[6] = "今天小编就给大家讲讲这则外国的事吧。";
            Ctxt3[7] = "今天就让小编我给大家讲讲发生在外国的事吧。";
            //end
            var part3 = txt3[rnd3] + Atxt3[Arnd3] + Btxt3[Brnd3] + Ctxt3[Crnd3]
            //end ph3

            //start ph4
            //start part1
            var len4 = 6;
            var rnd4 = Math.floor(Math.random() * len4);
            var txt4 = new Array(len4);
            txt4[0] = "这则故事是发生在";
            txt4[1] = "今天我讲的故事在";
            txt4[2] = "这起事件的发生在";
            txt4[3] = "发生事情的地点在";
            txt4[4] = "这件事情的发生在";
            txt4[5] = "今天说的这起事在";
            //end
            //start part2
            var Alen4 = 3;
            var Arnd4 = Math.floor(Math.random() * Alen4);
            var Atxt4 = new Array(Alen4);
            Atxt4[0] = "的一位外国";
            Atxt4[1] = "的一个外国";
            Atxt4[2] = "的一名外国";
            //end
            //start part4
            var Dlen4 = 6;
            var Drnd4 = Math.floor(Math.random() * Dlen4);
            var Dtxt4 = new Array(Dlen4);
            Dtxt4[0] = "疑惑";
            Dtxt4[1] = "惊讶";
            Dtxt4[2] = "可笑";
            Dtxt4[3] = "尴尬";
            Dtxt4[4] = "无聊";
            Dtxt4[5] = "不解";
            //end
            var part4 = txt4[rnd4] + place1 + place2 + "的一个" + value + "中" + Atxt4[Arnd4] + Btxt4 + "，" + Ctxt4 + "的名字是" + name + "，这位" + Btxt4 + "今天做的事情令小编十分的" + Dtxt4[Drnd4] + ":" + forDo + "。"
            //end ph4
            //start ph5
            var Indexlen = 2;
            var Indexrnd = Math.floor(Math.random() * Indexlen);
            var Indextxt = new Array(Indexlen);
            Indextxt[0] = "先是";
            Indextxt[1] = "首先";
            //start part1
            var len5 = 5;
            var rnd5 = Math.floor(Math.random() * len5);
            var txt5 = new Array(len5);
            txt5[0] = "整起了";
            txt5[1] = "干起了";
            txt5[2] = "弄起了";
            txt5[3] = "做起了";
            txt5[4] = "搞起了";
            //end part1
            //start part2
            var Alen5 = 4;
            var Arnd5 = Math.floor(Math.random() * Alen5);
            var Atxt5 = new Array(Alen5);
            Atxt5[0] = "然后";
            Atxt5[1] = "接下来";
            Atxt5[2] = "接着";
            Atxt5[3] = "紧接着";
            //end part2
            //万能感情机器
            var Blen5 = 10;
            var Brnd5 = Math.floor(Math.random() * Blen5);
            var Btxt5 = new Array(Blen5);
            Btxt5[0] = "疑惑";
            Btxt5[1] = "有趣";
            Btxt5[2] = "不解";
            Btxt5[3] = "无聊";
            Btxt5[4] = "好笑";
            Btxt5[5] = "尴尬";
            Btxt5[6] = "嫉妒";
            Btxt5[7] = "伤心";
            Btxt5[8] = "恐怖";
            Btxt5[9] = "害怕";
            var part5_1 = "这位" + Btxt4 + Indextxt[Indexrnd] + txt5[rnd5] + in1 + "的事情，这让小编感到十分的" + Btxt5[Brnd5] + "。"
            len5 = 5
            rnd5 = Math.floor(Math.random() * len5);
            txt5 = Array(len5);
            txt5[0] = "整起了";
            txt5[1] = "干起了";
            txt5[2] = "弄起了";
            txt5[3] = "做起了";
            txt5[4] = "搞起了";
            Alen5 = 4
            Arnd5 = Math.floor(Math.random() * Alen5);
            Atxt5 = Array(Alen5);
            Atxt5[0] = "然后";
            Atxt5[1] = "接下来";
            Atxt5[2] = "接着";
            Atxt5[3] = "紧接着";
            Blen5 = 10
            Brnd5 = Math.floor(Math.random() * Blen5);
            Btxt5 = Array(Blen5);
            Btxt5[0] = "疑惑";
            Btxt5[1] = "有趣";
            Btxt5[2] = "不解";
            Btxt5[3] = "无聊";
            Btxt5[4] = "好笑";
            Btxt5[5] = "尴尬";
            Btxt5[6] = "嫉妒";
            Btxt5[7] = "伤心";
            Btxt5[8] = "恐怖";
            Btxt5[9] = "害怕";
            var part5_2 = Atxt5[Arnd5] + Btxt4 + "又" + txt5[rnd5] + in2 + "的事情，这让小编感到十分的" + Btxt5[Brnd5] + "。"
            if (in2 == "") {
                part5_2 = ""
            }
            len5 = 5
            rnd5 = Math.floor(Math.random() * len5);
            txt5 = Array(len5);
            txt5[0] = "整起了";
            txt5[1] = "干起了";
            txt5[2] = "弄起了";
            txt5[3] = "做起了";
            txt5[4] = "搞起了";
            Alen5 = 4
            Arnd5 = Math.floor(Math.random() * Alen5);
            Atxt5 = Array(Alen5);
            Atxt5[0] = "然后";
            Atxt5[1] = "接下来";
            Atxt5[2] = "接着";
            Atxt5[3] = "紧接着";
            Blen5 = 10
            Brnd5 = Math.floor(Math.random() * Blen5);
            Btxt5 = Array(Blen5);
            Btxt5[0] = "疑惑";
            Btxt5[1] = "有趣";
            Btxt5[2] = "不解";
            Btxt5[3] = "无聊";
            Btxt5[4] = "好笑";
            Btxt5[5] = "尴尬";
            Btxt5[6] = "嫉妒";
            Btxt5[7] = "伤心";
            Btxt5[8] = "恐怖";
            Btxt5[9] = "害怕";
            var part5_3 = Atxt5[Arnd5] + "这位" + Btxt4 + txt5[rnd5] + in3 + "的事情，这让小编感到十分的" + Btxt5[Brnd5] + "。"
            if (in3 == "") {
                part5_3 = ""
            }
            len5 = 5
            rnd5 = Math.floor(Math.random() * len5);
            txt5 = Array(len5);
            txt5[0] = "整起了";
            txt5[1] = "干起了";
            txt5[2] = "弄起了";
            txt5[3] = "做起了";
            txt5[4] = "搞起了";
            Alen5 = 4
            Arnd5 = Math.floor(Math.random() * Alen5);
            Atxt5 = Array(Alen5);
            Atxt5[0] = "然后";
            Atxt5[1] = "接下来";
            Atxt5[2] = "接着";
            Atxt5[3] = "紧接着";
            Blen5 = 10
            Brnd5 = Math.floor(Math.random() * Blen5);
            Btxt5 = Array(Blen5);
            Btxt5[0] = "疑惑";
            Btxt5[1] = "有趣";
            Btxt5[2] = "不解";
            Btxt5[3] = "无聊";
            Btxt5[4] = "好笑";
            Btxt5[5] = "尴尬";
            Btxt5[6] = "嫉妒";
            Btxt5[7] = "伤心";
            Btxt5[8] = "恐怖";
            Btxt5[9] = "害怕";
            var part5_4 = Atxt5[Arnd5] + Btxt4 + "开始" + txt5[rnd5] + in4 + "的事情，这让小编感到十分的" + Btxt5[Brnd5] + "。"
            if (in4 == "") {
                part5_4 = ""
            }
            Alen5 = 4
            Arnd5 = Math.floor(Math.random() * Alen5);
            Atxt5 = Array(Alen5);
            Atxt5[0] = "最后";
            Atxt5[1] = "最终";
            Atxt5[2] = "到此为止";
            Atxt5[3] = "结局是";
            var part5_5 = Atxt5[Arnd5] + Btxt4 + "还是" + result + "了，"
            Blen5 = 10
            Brnd5 = Math.floor(Math.random() * Blen5);
            Btxt5 = Array(Blen5);
            Btxt5[0] = "疑惑";
            Btxt5[1] = "有趣";
            Btxt5[2] = "不解";
            Btxt5[3] = "无聊";
            Btxt5[4] = "好笑";
            Btxt5[5] = "尴尬";
            Btxt5[6] = "嫉妒";
            Btxt5[7] = "伤心";
            Btxt5[8] = "恐怖";
            Btxt5[9] = "害怕";
            var end_part = "不得不说国外的生活真是令我十分" + Btxt5[Brnd5] + "呢。"
            var part5 = part5_1 + part5_2 + part5_3 + part5_4 + part5_5 + end_part
            //end ph5
            var part6 = "好了今天的视频就到这里，" + part2 + "我们下期再见吧。"
            document.getElementById('paragraph1').innerHTML = part1 + sname + "，" + part2;
            document.getElementById('paragraph2').innerHTML = part3;
            document.getElementById('paragraph3').innerHTML = part4;
            document.getElementById('paragraph4').innerHTML = part5;
            document.getElementById('paragraph5').innerHTML = part6;
        }
    }
}
    ;