(()=>{"use strict";var e={6321:e=>{e.exports=JSON.parse('{"Mリーグルール":{"配給原点":25000,"順位点":["+30.0","+10.0","-10.0","-30.0"],"赤牌":{"m":1,"p":1,"s":1},"連風牌は2符":true,"クイタンあり":true,"喰い替え許可レベル":0,"場数":2,"途中流局あり":false,"流し満貫あり":false,"ノーテン宣言あり":true,"ノーテン罰あり":true,"最大同時和了数":1,"連荘方式":2,"トビ終了あり":false,"オーラス止めあり":false,"延長戦方式":0,"一発あり":true,"裏ドラあり":true,"カンドラあり":true,"カン裏あり":true,"カンドラ後乗せ":false,"ツモ番なしリーチあり":true,"リーチ後暗槓許可レベル":1,"ダブル役満あり":false,"役満の複合あり":true,"数え役満あり":false,"役満パオあり":true,"切り上げ満貫あり":true},"Classicルール":{"配給原点":30000,"順位点":["+12.0","+4.0","-4.0","-12.0"],"赤牌":{"m":0,"p":0,"s":0},"連風牌は2符":false,"クイタンあり":true,"喰い替え許可レベル":2,"場数":2,"途中流局あり":false,"流し満貫あり":false,"ノーテン宣言あり":false,"ノーテン罰あり":false,"最大同時和了数":1,"連荘方式":1,"トビ終了あり":false,"オーラス止めあり":false,"延長戦方式":0,"一発あり":false,"裏ドラあり":false,"カンドラあり":false,"カン裏あり":false,"カンドラ後乗せ":false,"ツモ番なしリーチあり":true,"リーチ後暗槓許可レベル":0,"ダブル役満あり":false,"役満の複合あり":false,"数え役満あり":false,"役満パオあり":false,"切り上げ満貫あり":false}}')}},a={};function n(i){var p=a[i];if(void 0!==p)return p.exports;var t=a[i]={exports:{}};return e[i](t,t.exports,n),t.exports}(()=>{
/*!
 *  電脳麻将: 和了点計算 v2.3.6
 *
 *  Copyright(C) 2017 Satoshi Kobayashi
 *  Released under the MIT license
 *  https://github.com/kobalab/Majiang/blob/master/LICENSE
 */
const{hide:e,show:a,fadeIn:i,fadeOut:p}=Majiang.UI.Util,t=n(6321),u={};function l(){let e=$('input[name="paistr"]').val();if(!e)return!1;let a,n=Majiang.Shoupai.fromString(e);$('input[name="paistr"]').val(n.toString()),0==$('input[name="zimo"]:checked').val()&&n._zimo&&(a=n._zimo+"=",n.dapai(n._zimo)),n.menqian||($('input[name="lizhi"]').prop("checked",!1),$('input[name="fubaopai"]').parent().addClass("hide"),$('input[name="yifa"]').prop("checked",!1).prop("disabled",!0),$('input[name="tianhu"]').prop("checked",!1)),n._fulou.find((e=>e.replace(/0/g,"5").match(/^[mpsz](\d)\1\1.*\1.*$/)))||$('input[name="lingshang"]').prop("checked",!1);let p=$.makeArray($('input[name="baopai"]')).map((e=>Majiang.Shoupai.valid_pai($(e).val()))).filter((e=>e)),l=$.makeArray($('input[name="fubaopai"]')).map((e=>Majiang.Shoupai.valid_pai($(e).val()))).filter((e=>e)),c=+$('input[name="lizhi"]:checked').val()||0,o=$('select[name="rule"]').val();if(o=o?"-"==o?JSON.parse(localStorage.getItem("Majiang.rule")||"{}"):t[o]:{},o=Majiang.rule(o),o["一発あり"]||$('input[name="yifa"]').prop("checked",!1),!o["カンドラあり"]){for(;p.length>1;)p.pop();for(;l.length>1;)l.pop()}if(!o["カン裏あり"])for(;l.length>1;)l.pop();o["裏ドラあり"]||(l=null);let h={rule:o,zhuangfeng:+$('select[name="zhuangfeng"]').val(),menfeng:+$('select[name="menfeng"]').val(),hupai:{lizhi:c,yifa:$('input[name="yifa"]').prop("checked"),qianggang:$('input[name="qianggang"]').prop("checked"),lingshang:$('input[name="lingshang"]').prop("checked"),haidi:$('input[name="haidi"]').prop("checked")?a?2:1:0,tianhu:+$('input[name="tianhu"]:checked').val()||0},baopai:p,fubaopai:c?l:null,jicun:{changbang:0,lizhibang:0}},m=Majiang.Util.hule(n,a,h)||{};const r={player:["","","",""],defen:[0,0,0,0],changbang:h.jicun.changbang,lizhibang:h.jicunlizhibang,shan:{baopai:h.baopai,fubaopai:h.fubaopai,paishu:0},player_id:[0,1,2,3]},s={l:h.menfeng,shoupai:e,baojia:a?(h.menfeng+2)%2:null,fubaopai:h.fubaopai,fu:m.fu,fanshu:m.fanshu,damanguan:m.damanguan,defen:m.defen,hupai:m.hupai,fenpei:m.fenpei};new Majiang.UI.HuleDialog($(".hule-dialog"),u.pai,r).hule(s),i($(".hule-dialog")),$('input[name="baopai"]').val("");for(let e=0;e<p.length;e++)$('input[name="baopai"]').eq(e).val(p[e]);$('input[name="fubaopai"]').val(""),l||(l=[]);for(let e=0;e<l.length;e++)$('input[name="fubaopai"]').eq(e).val(l[e]);let f="#"+[e,p.join(","),l.join(","),$('input[name="zimo"]:checked').val(),$('select[name="zhuangfeng"]').val(),$('select[name="menfeng"]').val(),$('input[name="lizhi"]:checked').val(),+$('input[name="yifa"]').prop("checked"),+$('input[name="haidi"]').prop("checked"),+$('input[name="lingshang"]').prop("checked"),+$('input[name="qianggang"]').prop("checked"),+$('input[name="tianhu"]:checked').val()||0].join("/");return o=$('select[name="rule"]').val(),o&&(f+=`/${o}`),"-"==o?history.replaceState("","",location.href.replace(/#.*$/,"")):history.replaceState("","",f),!1}$((function(){u.pai=Majiang.UI.pai("#loaddata");for(let e of Object.keys(t))$('select[name="rule"]').append($("<option>").val(e).text(e));localStorage.getItem("Majiang.rule")&&$('select[name="rule"]').append($("<option>").val("-").text("カスタムルール")),$("form").on("submit",l),$("form").on("reset",(function(){e($(".hule-dialog")),$('input[name="fubaopai"]').parent().addClass("hide"),$('input[name="tianhu"]').next().text("地和"),$('input[name="tianhu"]').val(2),$('form input[name="paistr"]').focus()})),$('input[name="zimo"]').on("change",(function(){1==$(this,":checked").val()?$('input[name="qianggang"]').prop("checked",!1):($('input[name="lingshang"]').prop("checked",!1),$('input[name="tianhu"]').prop("checked",!1))})),$('select[name="menfeng"]').on("change",(function(){0==$(this,":selected").val()?($('input[name="tianhu"]').next().text("天和"),$('input[name="tianhu"]').val(1)):($('input[name="tianhu"]').next().text("地和"),$('input[name="tianhu"]').val(2))})),$('input[name="lizhi"]').on("change",(function(){if($(this).prop("checked")){let e=1==$(this).val()?2:1;$(`input[name="lizhi"][value="${e}"]`).prop("checked",!1),$('input[name="fubaopai"]').parent().removeClass("hide"),$('input[name="yifa"]').prop("disabled",!1),$('input[name="tianhu"]').prop("checked",!1)}else $('input[name="fubaopai"]').parent().addClass("hide"),$('input[name="yifa"]').prop("checked",!1).prop("disabled",!0)})),$('input[name="yifa"]').on("change",(function(){$(this).prop("checked")&&$('input[name="lingshang"]').prop("checked",!1)})),$('input[name="haidi"]').on("change",(function(){$(this).prop("checked")&&($('input[name="lingshang"]').prop("checked",!1),$('input[name="qianggang"]').prop("checked",!1),$('input[name="tianhu"]').prop("checked",!1))})),$('input[name="lingshang"]').on("change",(function(){$(this).prop("checked")&&($('input[name="yifa"]').prop("checked",!1),$('input[name="haidi"]').prop("checked",!1),$('input[name="qianggang"]').prop("checked",!1),$('input[name="tianhu"]').prop("checked",!1),$('input[name="zimo"][value="1"]').click())})),$('input[name="qianggang"]').on("change",(function(){$(this).prop("checked")&&($('input[name="haidi"]').prop("checked",!1),$('input[name="lingshang"]').prop("checked",!1),$('input[name="tianhu"]').prop("checked",!1),$('input[name="zimo"][value="0"]').click())})),$('input[name="tianhu"]').on("change",(function(){$(this).prop("checked")&&($('input[name="lizhi"]').prop("checked",!1),$('input[name="fubaopai"]').parent().addClass("hide"),$('input[name="yifa"]').prop("checked",!1).prop("disabled",!0),$('input[name="haidi"]').prop("checked",!1),$('input[name="lingshang"]').prop("checked",!1),$('input[name="qianggang"]').prop("checked",!1),$('input[name="zimo"][value="1"]').click())})),function(e){if(e){let[a,n,i,p,t,u,l,c,o,h,m,r,s]=e.split(/\//);n=(n||"").split(/,/),i=(i||"").split(/,/),s=decodeURIComponent(s||""),$('input[name="paistr"]').val(a);for(let e=0;e<n.length;e++)$('input[name="baopai"]').eq(e).val(n[e]);for(let e=0;e<i.length;e++)$('input[name="fubaopai"]').eq(e).val(i[e]);$(`input[name="zimo"][value="${p}"]`).click(),$('select[name="zhuangfeng"]').val(t||0),$('select[name="menfeng"]').val(u||0),$(`input[name="lizhi"][value="${l}"]`).click(),+c&&$('input[name="yifa"]').click(),+o&&$('input[name="haidi"]').click(),+h&&$('input[name="lingshang"]').click(),+m&&$('input[name="qianggang"]').click(),+r&&$('input[name="tianhu"]').click(),s&&$('select[name="rule"]').val(s),$("form").submit()}else{let e="m123p123z1z1,s1-23,z222=",a=["z1"];$('input[name="paistr"]').val(e).focus();for(let e=0;e<a.length;e++)$('input[name="baopai"]').eq(e).val(a[e])}}(location.hash.replace(/^#/,""))}))})()})();