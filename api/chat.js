<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#071018">
<title>MARS JARVIS</title>
<style>
:root{
  --bg:#050a0f;
  --panel:#09131c;
  --panel2:#0c1822;
  --line:#18303f;
  --cyan:#42d9ff;
  --cyan2:#7be7ff;
  --text:#dceef5;
  --muted:#76909d;
  --green:#62e6a6;
  --red:#ff6d7d;
  --shadow:0 0 35px rgba(66,217,255,.08);
}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;background:radial-gradient(circle at 50% 0%,#102331 0,#050a0f 42%,#030609 100%);color:var(--text);font-family:Inter,system-ui,Arial,sans-serif}
body{overflow-x:hidden}
button,input,select{font:inherit}
button{cursor:pointer}
#boot{
 position:fixed;inset:0;background:#030609;z-index:9999;
 display:flex;align-items:center;justify-content:center;
 color:var(--cyan);letter-spacing:5px;font-size:14px;
 transition:opacity .6s
}
#app{min-height:100vh}
header{
 height:68px;border-bottom:1px solid var(--line);
 display:flex;align-items:center;justify-content:space-between;
 padding:0 22px;background:rgba(4,10,15,.86);
 backdrop-filter:blur(16px);position:sticky;top:0;z-index:20
}
.logo{font-weight:800;letter-spacing:4px;color:var(--cyan)}
.status{font-size:11px;letter-spacing:2px;color:var(--muted)}
.status span{color:var(--green)}
nav{display:flex;gap:7px;flex-wrap:wrap}
.nav-btn{
 border:1px solid var(--line);background:#08121a;color:var(--muted);
 padding:8px 11px;border-radius:7px;font-size:11px;letter-spacing:1px
}
.nav-btn.active,.nav-btn:hover{color:var(--cyan);border-color:#255a6c}
main{max-width:1200px;margin:auto;padding:24px}
.view{display:none}
.view.active{display:block}
.grid{display:grid;grid-template-columns:1.3fr .7fr;gap:18px}
.panel{
 background:linear-gradient(145deg,rgba(10,23,33,.96),rgba(5,12,18,.96));
 border:1px solid var(--line);border-radius:14px;padding:20px;
 box-shadow:var(--shadow)
}
h1,h2,h3{margin:0}
h1{font-size:26px;letter-spacing:2px}
h2{font-size:12px;letter-spacing:3px;color:var(--cyan);margin-bottom:15px}
.hint{font-size:12px;line-height:1.6;color:var(--muted)}
.hero{min-height:500px;display:flex;flex-direction:column;align-items:center;justify-content:center}
.orb{
 width:190px;height:190px;border-radius:50%;
 border:1px solid #267b92;
 background:radial-gradient(circle,#163848 0,#0b202c 35%,#061018 68%,transparent 70%);
 box-shadow:0 0 30px rgba(66,217,255,.15),inset 0 0 35px rgba(66,217,255,.1);
 display:flex;align-items:center;justify-content:center;
 margin:25px auto;position:relative
}
.orb:before,.orb:after{
 content:"";position:absolute;border-radius:50%;border:1px solid rgba(66,217,255,.2)
}
.orb:before{inset:-16px}
.orb:after{inset:-32px;border-style:dashed}
.orb.listening{animation:pulse 1s infinite}
@keyframes pulse{50%{transform:scale(1.035);box-shadow:0 0 55px rgba(66,217,255,.28)}}
.orb-core{
 width:55px;height:55px;border-radius:50%;
 background:#55dfff;box-shadow:0 0 28px #42d9ff
}
.transcript{
 width:min(700px,100%);min-height:70px;text-align:center;
 border-top:1px solid var(--line);border-bottom:1px solid var(--line);
 padding:18px;color:#a9cbd7;font-size:16px
}
.voice-controls{display:flex;gap:12px;margin-top:22px}
.round-btn{
 width:48px;height:48px;border-radius:50%;
 border:1px solid #21495a;background:#091720;color:var(--cyan);
 display:grid;place-items:center
}
.round-btn.active{background:#103342;border-color:var(--cyan)}
.round-btn svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.7}
.log{max-height:330px;overflow:auto;display:flex;flex-direction:column;gap:8px}
.log-row{
 padding:10px 12px;border:1px solid #122936;border-radius:8px;
 font-size:12px;color:#9bb4bf;background:#071017
}
.log-row.jarvis{color:#cdebf3;border-color:#194353}
.who{display:inline-block;width:48px;color:var(--cyan);font-size:9px;letter-spacing:1px}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.stat{
 border:1px solid var(--line);border-radius:10px;padding:16px;background:#071119
}
.stat strong{display:block;font-size:25px;color:var(--cyan);margin-top:5px}
.list{display:flex;flex-direction:column;gap:10px}
.item{
 display:flex;justify-content:space-between;gap:10px;
 padding:13px;border:1px solid var(--line);border-radius:9px;background:#071119
}
.item p{margin:0;font-size:13px}.meta{font-size:10px;color:var(--muted);margin-top:5px}
.actions{display:flex;gap:5px}
.icon-btn{
 width:28px;height:28px;border:1px solid var(--line);
 background:#09151d;color:#9eb8c3;border-radius:5px
}
.field{margin-bottom:16px}
.field label{display:block;font-size:10px;letter-spacing:2px;color:var(--muted);margin-bottom:7px}
input,select{
 width:100%;background:#050c12;color:var(--text);
 border:1px solid var(--line);border-radius:7px;padding:11px;outline:none
}
input:focus,select:focus{border-color:#2e7288}
.btn{
 border:1px solid #27657a;background:#0b2631;color:var(--cyan);
 border-radius:7px;padding:10px 14px;font-size:11px;letter-spacing:1px
}
.btn.ghost{background:transparent;color:var(--muted)}
.switch-row{
 display:flex;align-items:center;justify-content:space-between;
 padding:13px 0;border-bottom:1px solid #122632;font-size:13px
}
.switch{
 width:43px;height:23px;border-radius:20px;background:#15232b;
 border:1px solid #27404b;position:relative
}
.switch:after{
 content:"";position:absolute;width:17px;height:17px;top:2px;left:2px;
 border-radius:50%;background:#60717a;transition:.2s
}
.switch.on{background:#103746;border-color:#28758c}
.switch.on:after{left:22px;background:var(--cyan);box-shadow:0 0 10px #42d9ff}
.app-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.app-btn{
 padding:13px;text-align:left;background:#071119;color:var(--text);
 border:1px solid var(--line);border-radius:8px
}
.app-btn strong{display:block;color:#bde9f4;font-size:12px}
.app-btn span{display:block;color:var(--muted);font-size:10px;margin-top:4px}
#confirmBox{
 display:none;margin-top:14px;padding:14px;border:1px solid #735b25;
 border-radius:8px;background:#171207
}
.confirm-title{color:#f0c66a;font-size:10px;letter-spacing:2px}
.confirm-text{font-size:12px;margin:8px 0 12px}
.priority{font-size:9px;margin-right:7px;color:var(--cyan)}
@media(max-width:800px){
 .grid{grid-template-columns:1fr}
 .cards{grid-template-columns:1fr}
 header{height:auto;min-height:68px;gap:10px;flex-wrap:wrap;padding:12px}
 nav{width:100%}
 main{padding:14px}
 .hero{min-height:430px}
}
</style>
</head>
<body>
<div id="boot">INITIALIZING MARS JARVIS</div>

<div id="app">
<header>
  <div class="logo">MARS JARVIS</div>
  <div class="status">SYSTEM <span>ONLINE</span></div>
  <nav>
    <button class="nav-btn active" data-view="home">HOME</button>
    <button class="nav-btn" data-view="memory">MEMORY</button>
    <button class="nav-btn" data-view="tasks">TASKS</button>
    <button class="nav-btn" data-view="voice">VOICE</button>
    <button class="nav-btn" data-view="settings">SETTINGS</button>
  </nav>
</header>

<main>

<section class="view active" id="view-home">
<div class="grid">
<div class="panel hero">
<h1>GOOD EVENING, SIR.</h1>
<p class="hint">MARS JARVIS personal intelligence interface</p>
<div class="orb" id="homeOrb">
  <div class="orb-core"></div>
</div>
<p class="hint">Voice interface ready</p>
<button class="btn" id="homeStart">START LISTENING</button>
</div>

<div>
<div class="panel">
<h2>SYSTEM OVERVIEW</h2>
<div class="cards">
<div class="stat"><span class="hint">NOTES</span><strong id="statNotes">0</strong></div>
<div class="stat"><span class="hint">OPEN TASKS</span><strong id="statTasksOpen">0</strong></div>
<div class="stat"><span class="hint">DONE</span><strong id="statTasksDone">0</strong></div>
</div>
</div>

<div class="panel" style="margin-top:18px">
<h2>JARVIS</h2>
<p class="hint">
Conversational AI is enabled through the secure backend.
JARVIS responds naturally instead of relying only on predefined commands.
</p>
</div>
</div>
</div>
</section>

<section class="view" id="view-memory">
<div class="panel">
<h2>MEMORY</h2>
<div style="display:flex;gap:8px;margin-bottom:15px">
<input id="noteInput" placeholder="Enter a note...">
<button class="btn" id="addNoteBtn">ADD</button>
</div>
<div class="list" id="notesList"></div>
</div>
</section>

<section class="view" id="view-tasks">
<div class="panel">
<h2>TASKS</h2>
<div style="display:grid;grid-template-columns:1fr 130px auto;gap:8px;margin-bottom:15px">
<input id="taskInput" placeholder="New task...">
<select id="taskPriority">
<option value="low">LOW</option>
<option value="med" selected>MEDIUM</option>
<option value="high">HIGH</option>
</select>
<button class="btn" id="addTaskBtn">ADD</button>
</div>
<div class="list" id="tasksList"></div>
</div>
</section>

<section class="view" id="view-voice">
<div class="panel">
<h2>VOICE CONSOLE</h2>
<div class="hero" style="min-height:430px">
<div class="orb" id="voiceOrb">
<div class="orb-core"></div>
</div>
<div class="transcript" id="transcript">
Say "Jarvis" followed by anything you want.
</div>
<div class="voice-controls">
<button class="round-btn" id="ptt" title="Push to talk">
<svg viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0M12 19v3"/></svg>
</button>
<button class="round-btn" id="continuousToggle" title="Continuous listening">
<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>
</button>
<button class="round-btn" id="muteBtn" title="Mute spoken responses">
<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19 5l-4 4m0 6l4-4"/></svg>
</button>
</div>
</div>

<h2 style="margin-top:6px">COMMAND HISTORY</h2>
<div class="log" id="voiceLog"></div>
</div>
</section>

<section class="view" id="view-settings">

<div class="panel">
<h2>AI CORE</h2>
<div class="field">
<label>AI BACKEND URL</label>
<input type="url" id="aiBackendInput"
placeholder="https://mars-jarvis.vercel.app">
<p class="hint">
Only enter your Vercel backend URL here.
Never put your Gemini API key into this field.
</p>
</div>
<button class="btn" id="saveAiBackend">SAVE AI BACKEND</button>
</div>

<div class="panel" style="margin-top:16px">
<h2>VOICE</h2>
<p class="hint">
JARVIS uses the German speech engine available on your device.
A deeper German voice is preferred when the browser/device provides one.
</p>
</div>

<div class="panel" style="margin-top:16px">
<h2>APP CONTROL</h2>

<div class="switch-row">
<span>App control enabled</span>
<div class="switch" id="swAppControl"></div>
</div>

<div class="switch-row">
<span>Always require confirmation</span>
<div class="switch on" id="swAppConfirm"></div>
</div>

<p class="hint">
A GitHub Pages website cannot arbitrarily control installed Android apps.
This interface can safely open supported app/web destinations.
True Android system control can be added later through a dedicated Android companion app.
</p>

<div class="app-grid" style="margin-top:12px">
<button class="app-btn" data-app="youtube">
<strong>YouTube</strong><span>Open app/website</span>
</button>
<button class="app-btn" data-app="spotify">
<strong>Spotify</strong><span>Open app/website</span>
</button>
<button class="app-btn" data-app="whatsapp">
<strong>WhatsApp</strong><span>Open app/website</span>
</button>
<button class="app-btn" data-app="chrome">
<strong>Chrome</strong><span>Open website</span>
</button>
</div>

<div id="confirmBox">
<div class="confirm-title">ACTION CONFIRMATION</div>
<div class="confirm-text" id="confirmText"></div>
<button class="btn" id="confirmYes">CONFIRM</button>
<button class="btn ghost" id="confirmNo">CANCEL</button>
</div>
</div>

</section>
</main>
</div>

<script>
(() => {
"use strict";

const $ = s => document.querySelector(s);

const state = {
  notes: [],
  tasks: [],
  conversations: [],
  settings: {
    continuous: false,
    speak: true,
    appControl: false,
    appConfirm: true,
    aiBackend: ""
  }
};

let muted = false;
let continuousMode = false;
let pttHeld = false;
let recognition = null;
let recognitionReady = false;
let pendingAction = null;

function uid(){
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function queueSave(){
  localStorage.setItem("mars_jarvis_state", JSON.stringify(state));
}

function localLoad(){
  try{
    const saved = JSON.parse(localStorage.getItem("mars_jarvis_state") || "null");
    if(saved){
      Object.assign(state, saved);
      state.settings = Object.assign({
        continuous:false,
        speak:true,
        appControl:false,
        appConfirm:true,
        aiBackend:""
      }, saved.settings || {});
    }
  }catch(e){
    console.error("Load error:", e);
  }

  const oldBackend = localStorage.getItem("mars_jarvis_ai_backend");
  if(oldBackend && !state.settings.aiBackend){
    state.settings.aiBackend = oldBackend;
  }
}

function switchView(name){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  const view = document.getElementById("view-" + name);
  const button = document.querySelector('[data-view="' + name + '"]');

  if(view) view.classList.add("active");
  if(button) button.classList.add("active");
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

function escapeHtml(s){
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function truncate(s,n){
  return s.length > n ? s.slice(0,n) + "…" : s;
}

/* NOTES */

function renderNotes(){
  const list = $("#notesList");
  list.innerHTML = "";

  if(!state.notes.length){
    list.innerHTML = '<p class="hint">No notes yet.</p>';
    updateStats();
    return;
  }

  state.notes.slice().reverse().forEach(n => {
    const card = document.createElement("div");
    card.className = "item";

    card.innerHTML =
      '<div>' +
      '<p>' + escapeHtml(n.text) + '</p>' +
      '<div class="meta">' +
      new Date(n.ts).toLocaleString("de-DE") +
      '</div>' +
      '</div>' +
      '<div class="actions">' +
      '<button class="icon-btn" data-act="del">×</button>' +
      '</div>';

    card.querySelector("[data-act=del]").addEventListener("click", () => {
      state.notes = state.notes.filter(x => x.id !== n.id);
      renderNotes();
      updateStats();
      queueSave();
    });

    list.appendChild(card);
  });

  updateStats();
}

function addNote(text){
  text = (text || "").trim();
  if(!text) return null;

  const note = {
    id: uid(),
    text,
    ts: Date.now()
  };

  state.notes.push(note);
  renderNotes();
  queueSave();

  return note;
}

$("#addNoteBtn").addEventListener("click", () => {
  addNote($("#noteInput").value);
  $("#noteInput").value = "";
});

$("#noteInput").addEventListener("keydown", e => {
  if(e.key === "Enter"){
    addNote(e.target.value);
    e.target.value = "";
  }
});

/* TASKS */

function renderTasks(){
  const list = $("#tasksList");
  list.innerHTML = "";

  if(!state.tasks.length){
    list.innerHTML = '<p class="hint">No tasks yet.</p>';
    updateStats();
    return;
  }

  state.tasks.slice().reverse().forEach(t => {
    const card = document.createElement("div");
    card.className = "item";

    const priLabel =
      t.priority === "high" ? "HIGH" :
      t.priority === "low" ? "LOW" : "MED";

    card.innerHTML =
      '<div>' +
      '<p style="' + (t.done ? "text-decoration:line-through;opacity:.55" : "") + '">' +
      '<span class="priority">' + priLabel + '</span>' +
      escapeHtml(t.text) +
      '</p>' +
      '<div class="meta">' +
      new Date(t.ts).toLocaleString("de-DE") +
      '</div>' +
      '</div>' +
      '<div class="actions">' +
      '<button class="icon-btn" data-act="done">✓</button>' +
      '<button class="icon-btn" data-act="del">×</button>' +
      '</div>';

    card.querySelector("[data-act=done]").addEventListener("click", () => {
      t.done = !t.done;
      renderTasks();
      updateStats();
      queueSave();
    });

    card.querySelector("[data-act=del]").addEventListener("click", () => {
      state.tasks = state.tasks.filter(x => x.id !== t.id);
      renderTasks();
      updateStats();
      queueSave();
    });

    list.appendChild(card);
  });

  updateStats();
}

function addTask(text, priority){
  text = (text || "").trim();
  if(!text) return null;

  const t = {
    id: uid(),
    text,
    priority: priority || "med",
    done:false,
    ts:Date.now()
  };

  state.tasks.push(t);
  renderTasks();
  queueSave();

  return t;
}

$("#addTaskBtn").addEventListener("click", () => {
  addTask($("#taskInput").value, $("#taskPriority").value);
  $("#taskInput").value = "";
});

$("#taskInput").addEventListener("keydown", e => {
  if(e.key === "Enter"){
    addTask(e.target.value, $("#taskPriority").value);
    e.target.value = "";
  }
});

function updateStats(){
  $("#statNotes").textContent = state.notes.length;
  $("#statTasksOpen").textContent = state.tasks.filter(t => !t.done).length;
  $("#statTasksDone").textContent = state.tasks.filter(t => t.done).length;
}

/* VOICE */

function getPreferredVoice(){
  const voices = window.speechSynthesis.getVoices();

  return (
    voices.find(v =>
      /male|männlich/i.test(v.name) &&
      /^de(-|$)/i.test(v.lang)
    ) ||
    voices.find(v =>
      /male|männlich/i.test(v.name)
    ) ||
    voices.find(v =>
      /^de(-|$)/i.test(v.lang)
    ) ||
    voices.find(v =>
      /^de/i.test(v.lang)
    ) ||
    null
  );
}

function speak(text){
  logVoice("jarvis", text);

  if(
    state.settings.speak === false ||
    muted ||
    !("speechSynthesis" in window)
  ) return;

  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  const voice = getPreferredVoice();

  if(voice) u.voice = voice;

  u.lang = voice?.lang || "de-DE";
  u.rate = 0.92;
  u.pitch = 0.72;
  u.volume = 1;

  window.speechSynthesis.speak(u);
}

if("speechSynthesis" in window){
  window.speechSynthesis.onvoiceschanged = () => {};
}

function logVoice(who,text){
  const log = $("#voiceLog");

  const row = document.createElement("div");
  row.className = "log-row" + (who === "jarvis" ? " jarvis" : "");

  row.innerHTML =
    '<span class="who">' +
    (who === "jarvis" ? "JARVIS" : "YOU") +
    "</span>" +
    escapeHtml(text);

  log.prepend(row);

  while(log.children.length > 20){
    log.removeChild(log.lastChild);
  }

  if(who !== "system"){
    state.conversations.push({
      who,
      text,
      ts: Date.now()
    });

    if(state.conversations.length > 200){
      state.conversations.shift();
    }

    queueSave();
  }
}

function conversationForAI(){
  return state.conversations
    .slice(-20)
    .map(x => ({
      role: x.who === "jarvis" ? "assistant" : "user",
      content: x.text
    }));
}

/* AI */

async function askAI(message){
  const backend = (state.settings.aiBackend || "").trim();

  if(!backend){
    speak(
      "Mein KI-Backend ist noch nicht eingerichtet. " +
      "Öffne die Einstellungen und trage die Backend-URL ein."
    );
    switchView("settings");
    return;
  }

  try{
    $("#transcript").textContent =
      "JARVIS verarbeitet deine Anfrage…";

    const response = await fetch(
      backend.replace(/\/$/,"") + "/api/chat",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          message,
          conversation:conversationForAI()
        })
      }
    );

    const data = await response.json();

    if(!response.ok){
      console.error("AI backend error:", data);
      throw new Error(data.error || "HTTP " + response.status);
    }

    speak(
      data.reply ||
      "Entschuldigung, ich konnte gerade keine Antwort erzeugen."
    );

  }catch(error){
    console.error("AI error:", error);

    speak(
      "Ich konnte den KI-Dienst gerade nicht erreichen. " +
      "Prüfe bitte die Backend-URL und den Server."
    );
  }
}

/* APP CONTROL */

const appUrls = {
  youtube: "https://www.youtube.com/",
  spotify: "https://open.spotify.com/",
  whatsapp: "https://web.whatsapp.com/",
  chrome: "https://www.google.com/"
};

function requestAppAction(app){
  if(!state.settings.appControl){
    speak("App-Steuerung ist derzeit deaktiviert.");
    return;
  }

  if(!appUrls[app]) return;

  if(state.settings.appConfirm){
    pendingAction = app;

    $("#confirmText").textContent =
      "Soll ich " + app.charAt(0).toUpperCase() + app.slice(1) + " öffnen?";

    $("#confirmBox").style.display = "block";

    speak(
      "Ich kann " +
      app.charAt(0).toUpperCase() +
      app.slice(1) +
      " öffnen. Soll ich fortfahren?"
    );

    return;
  }

  window.open(appUrls[app], "_blank");
}

document.querySelectorAll(".app-btn").forEach(btn => {
  btn.addEventListener("click", () => requestAppAction(btn.dataset.app));
});

$("#confirmYes").addEventListener("click", () => {
  if(pendingAction && appUrls[pendingAction]){
    window.open(appUrls[pendingAction], "_blank");
  }

  pendingAction = null;
  $("#confirmBox").style.display = "none";
});

$("#confirmNo").addEventListener("click", () => {
  pendingAction = null;
  $("#confirmBox").style.display = "none";
  speak("Aktion abgebrochen.");
});

/* COMMAND HANDLER */

async function handleCommand(raw){
  const cmd = raw.trim();

  if(!cmd) return;

  $("#transcript").textContent = cmd;
  logVoice("you", cmd);

  const lower = cmd.toLowerCase();
  let m;

  if(
    (m = lower.match(
      /^(?:jarvis[, ]*)?(?:save |add |take )?note[:\s]+(.+)/
    ))
  ){
    const originalStart = cmd.toLowerCase().indexOf(m[1]);
    const noteText =
      originalStart >= 0 ?
      cmd.slice(originalStart) :
      cmd;

    addNote(noteText);
    switchView("memory");
    speak("Ich habe die Notiz gespeichert.");
    return;
  }

  if(
    /^(?:jarvis[, ]*)?show(?: my)? notes?$/.test(lower)
  ){
    switchView("memory");
    speak(
      "Hier sind deine Notizen. Insgesamt " +
      state.notes.length +
      "."
    );
    return;
  }

  if(
    (m = lower.match(
      /^(?:jarvis[, ]*)?(?:add |create )?task[:\s]+(.+)/
    ))
  ){
    let text = m[1];
    let priority = "med";

    const pm = text.match(
      /\b(high|medium|med|low)\s*priority\b/
    );

    if(pm){
      priority =
        pm[1].startsWith("h") ? "high" :
        pm[1].startsWith("l") ? "low" :
        "med";

      text = text.replace(pm[0],"").trim();
    }

    addTask(text, priority);
    switchView("tasks");
    speak("Aufgabe hinzugefügt.");
    return;
  }

  if(
    /^(?:jarvis[, ]*)?show(?: my)? tasks?$/.test(lower)
  ){
    switchView("tasks");
    speak(
      "Hier sind deine Aufgaben. " +
      state.tasks.filter(t => !t.done).length +
      " sind noch offen."
    );
    return;
  }

  if(
    /^(?:jarvis[, ]*)?(?:go |open |show )?home$/.test(lower)
  ){
    switchView("home");
    speak("Home geöffnet.");
    return;
  }

  if(
    /^(?:jarvis[, ]*)?(?:go |open |show )?memory$/.test(lower)
  ){
    switchView("memory");
    speak("Memory geöffnet.");
    return;
  }

  if(
    /^(?:jarvis[, ]*)?(?:go |open |show )?tasks?$/.test(lower)
  ){
    switchView("tasks");
    speak("Tasks geöffnet.");
    return;
  }

  if(
    /^(?:jarvis[, ]*)?(?:go |open |show )?voice$/.test(lower)
  ){
    switchView("voice");
    speak("Voice-Konsole geöffnet.");
    return;
  }

  if(
    /^(?:jarvis[, ]*)?(?:go |open |show )?settings?$/.test(lower)
  ){
    switchView("settings");
    speak("Settings geöffnet.");
    return;
  }

  if(
    /^(?:open )?youtube$/.test(lower)
  ){
    requestAppAction("youtube");
    return;
  }

  if(
    /^(?:open )?spotify$/.test(lower)
  ){
    requestAppAction("spotify");
    return;
  }

  if(
    /^(?:open )?whatsapp$/.test(lower)
  ){
    requestAppAction("whatsapp");
    return;
  }

  /* Everything else goes to Gemini */
  await askAI(cmd);
}

/* SPEECH RECOGNITION */

const SpeechRec =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

function setupRecognition(){
  if(!SpeechRec){
    recognitionReady = false;
    $("#transcript").textContent =
      "Speech Recognition wird von diesem Browser nicht unterstützt.";
    return;
  }

  recognition = new SpeechRec();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "de-DE";

  recognition.onstart = () => {
    recognitionReady = true;
    $("#voiceOrb").classList.add("listening");
    $("#homeOrb").classList.add("listening");
  };

  recognition.onend = () => {
    $("#voiceOrb").classList.remove("listening");
    $("#homeOrb").classList.remove("listening");

    if(continuousMode){
      setTimeout(() => {
        try{
          recognition.start();
        }catch(e){}
      },400);
    }
  };

  recognition.onerror = e => {
    console.error("Speech error:", e);
  };

  recognition.onresult = event => {
    let interim = "";

    for(
      let i = event.resultIndex;
      i < event.results.length;
      i++
    ){
      const result = event.results[i];
      const text = result[0].transcript;

      if(result.isFinal){
        const finalText = text.trim();

        if(!finalText) continue;

        const lower = finalText.toLowerCase();

        if(
          pttHeld ||
          lower.includes("jarvis") ||
          !continuousMode
        ){
          const stripped =
            finalText.replace(
              /^\s*(hey\s+)?jarvis[,]?\s*/i,
              ""
            );

          if(stripped.trim()){
            handleCommand(stripped);
          }
        }
      }else{
        interim += text;
      }
    }

    if(interim){
      $("#transcript").textContent = interim;
    }
  };
}

function startListening(){
  if(!recognition){
    setupRecognition();
  }

  if(!recognition) return;

  try{
    recognition.start();
  }catch(e){}
}

function stopListening(){
  if(!recognition) return;

  try{
    recognition.stop();
  }catch(e){}
}

$("#ptt").addEventListener("mousedown", () => {
  pttHeld = true;
  startListening();
});

$("#ptt").addEventListener("mouseup", () => {
  pttHeld = false;

  if(!continuousMode){
    stopListening();
  }
});

$("#ptt").addEventListener("touchstart", e => {
  e.preventDefault();
  pttHeld = true;
  startListening();
},{passive:false});

$("#ptt").addEventListener("touchend", e => {
  e.preventDefault();
  pttHeld = false;

  if(!continuousMode){
    stopListening();
  }
},{passive:false});

$("#continuousToggle").addEventListener("click", () => {
  continuousMode = !continuousMode;

  $("#continuousToggle")
    .classList.toggle("active", continuousMode);

  state.settings.continuous = continuousMode;
  queueSave();

  if(continuousMode){
    startListening();
  }else{
    stopListening();
  }
});

$("#muteBtn").addEventListener("click", () => {
  muted = !muted;

  $("#muteBtn").classList.toggle("active", muted);

  state.settings.speak = !muted;
  queueSave();
});

$("#homeStart").addEventListener("click", () => {
  switchView("voice");
  startListening();
});

/* SETTINGS */

$("#swAppControl").addEventListener("click", function(){
  this.classList.toggle("on");
  state.settings.appControl =
    this.classList.contains("on");

  queueSave();
});

$("#swAppConfirm").addEventListener("click", function(){
  this.classList.toggle("on");
  state.settings.appConfirm =
    this.classList.contains("on");

  queueSave();
});

$("#saveAiBackend").addEventListener("click", () => {
  state.settings.aiBackend =
    $("#aiBackendInput").value
      .trim()
      .replace(/\/$/,"");

  localStorage.setItem(
    "mars_jarvis_ai_backend",
    state.settings.aiBackend
  );

  queueSave();

  speak(
    state.settings.aiBackend
      ? "KI-Backend gespeichert."
      : "KI-Backend entfernt."
  );
});

function applySettingsToUI(){
  $("#swAppControl")
    .classList.toggle(
      "on",
      !!state.settings.appControl
    );

  $("#swAppConfirm")
    .classList.toggle(
      "on",
      state.settings.appConfirm !== false
    );

  muted = state.settings.speak === false;
  continuousMode = !!state.settings.continuous;

  $("#continuousToggle")
    .classList.toggle("active", continuousMode);

  $("#muteBtn")
    .classList.toggle("active", muted);

  $("#aiBackendInput").value =
    state.settings.aiBackend || "";
}

localLoad();
applySettingsToUI();
renderNotes();
renderTasks();
updateStats();
setupRecognition();

setTimeout(() => {
  const boot = $("#boot");

  if(boot){
    boot.style.opacity = "0";

    setTimeout(() => {
      boot.remove();
    },650);
  }
},900);

})();
</script>
</body>
</html>
