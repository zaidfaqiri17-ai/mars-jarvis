/* MARS JARVIS – Fix v2 (Ton + Apps öffnen, Android) */
(function(){
"use strict";
var android=/Android/i.test(navigator.userAgent||"");

/* 1) App-Steuerung einschalten (einmalig, v2) */
try{
  if(localStorage.getItem("mars_fix_v2")!=="1"){
    var d=JSON.parse(localStorage.getItem("mars_jarvis_data")||"{}");
    d.settings=d.settings||{};
    d.settings.appControl=true;
    localStorage.setItem("mars_jarvis_data",JSON.stringify(d));
    localStorage.setItem("mars_fix_v2","1");
  }
}catch(e){}

/* 2) Sprachausgabe */
var synth=window.speechSynthesis;
if(synth){
  var origSpeak=synth.speak.bind(synth), origCancel=synth.cancel.bind(synth), lastCancel=0;
  synth.cancel=function(){lastCancel=Date.now();return origCancel();};
  synth.speak=function(u){
    try{ /* Markdown/Emojis nicht mitsprechen */
      u.text=String(u.text||"").replace(/[*_`#>~]/g,"").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,"");
    }catch(e){}
    var wait=Math.max(0,300-(Date.now()-lastCancel))+150;
    setTimeout(function(){
      try{synth.resume();}catch(e){}
      origSpeak(u);
      setTimeout(function(){try{synth.resume();}catch(e){}},200);
    },wait);
  };
  var unlocked=false;
  document.addEventListener("pointerdown",function(){
    if(unlocked)return; unlocked=true;
    try{var s=new SpeechSynthesisUtterance(" ");s.volume=0;origSpeak(s);}catch(e){}
  },{passive:true});
}

/* 3) Bestätigungsknopf überall sichtbar (lag vorher nur in den Einstellungen) */
function dock(){
  var box=document.getElementById("confirmBox");
  if(!box||box.dataset.docked)return;
  box.dataset.docked="1";
  document.body.appendChild(box);
  var st=document.createElement("style");
  st.textContent="#confirmBox{position:fixed;left:12px;right:12px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:200;background:#0b1622;margin:0}#confirmBox .btn{padding:14px 22px;font-size:15px}";
  document.head.appendChild(st);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",dock);else dock();

/* 4) Apps als Android-App öffnen */
var linkApps={"www.youtube.com":"com.google.android.youtube","open.spotify.com":"com.spotify.music","www.tiktok.com":"com.zhiliaoapp.musically","www.snapchat.com":"com.snapchat.android","www.instagram.com":"com.instagram.android","www.roblox.com":"com.roblox.client"};
var launcherApps={"web.whatsapp.com":"com.whatsapp","www.minecraft.net":"com.mojang.minecraftpe","www.google.com":"com.android.chrome"};
var origOpen=window.open.bind(window);
window.open=function(url){
  if(android&&url){
    try{
      var a=new URL(url), fb=encodeURIComponent(url);
      if(linkApps[a.hostname]){
        location.href="intent://"+a.host+a.pathname+"#Intent;scheme=https;package="+linkApps[a.hostname]+";S.browser_fallback_url="+fb+";end";
        return {};
      }
      if(launcherApps[a.hostname]){
        location.href="intent:#Intent;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;package="+launcherApps[a.hostname]+";S.browser_fallback_url="+fb+";end";
        return {};
      }
    }catch(e){}
  }
  return origOpen.apply(window,arguments);
};

/* 5) Namensvarianten ("Google", "Tik Tok", "Insta", "What's App") abfangen,
      bevor die Anfrage an die KI geht */
var aliases=[
  ["youtube",/\b(you ?tube|jutub)\b/i],["tiktok",/\btik ?tok\b/i],
  ["snapchat",/\bsnap ?chat\b/i],["instagram",/\b(insta(gram)?)\b/i],
  ["whatsapp",/\bwhats? ?'?app\b/i],["chrome",/\b(chrome|google)\b/i],
  ["spotify",/\bspotify\b/i],["roblox",/\broblox\b/i],["minecraft",/\bminecraft\b/i]
];
var openWord=/\b(öffne|oeffne|öffnen|starte|starten|open|mach\b.*\bauf|aufmachen)\b/i;
var origFetch=window.fetch.bind(window);
window.fetch=function(url,opts){
  try{
    if(String(url).indexOf("/api/chat")>-1&&opts&&opts.body){
      var msg=String(JSON.parse(opts.body).message||"");
      if(openWord.test(msg)){
        for(var i=0;i<aliases.length;i++){
          if(aliases[i][1].test(msg)){
            var btn=document.querySelector('.app-btn[data-app="'+aliases[i][0]+'"]');
            if(btn){
              btn.click();
              return Promise.resolve(new Response(JSON.stringify({reply:"Verstanden. Tippe unten auf Confirm, dann öffne ich die App."}),{status:200,headers:{"Content-Type":"application/json"}}));
            }
          }
        }
      }
    }
  }catch(e){}
  return origFetch(url,opts);
};
})();
