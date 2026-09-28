<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<title>JARVIS</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#060a10;
  --bg-deep:#020408;
  --panel:rgba(18,28,38,.55);
  --panel-border:rgba(79,209,255,.18);
  --cyan:#4fd1ff;
  --cyan-dim:#1c6f8c;
  --violet:#8c6bff;
  --amber:#ffb454;
  --danger:#ff5470;
  --text:#dbeeff;
  --text-dim:#7fa3b8;
}

*{
  box-sizing:border-box;
}

html,body{
  height:100%;
  margin:0;
}

body{
  background:
    radial-gradient(circle at 20% 15%,rgba(79,209,255,.07),transparent 40%),
    radial-gradient(circle at 85% 80%,rgba(140,107,255,.08),transparent 45%),
    var(--bg-deep);
  color:var(--text);
  font-family:'Rajdhani',sans-serif;
  font-size:16px;
  overflow-x:hidden;
  min-height:100%;
}

.scanlines{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:1;
  background:repeating-linear-gradient(
    0deg,
    rgba(79,209,255,.02) 0 1px,
    transparent 1px 3px
  );
  opacity:.5;
}

#boot{
  position:fixed;
  inset:0;
  z-index:50;
  background:var(--bg-deep);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:14px;
  transition:opacity .6s;
}

#boot .ring{
  width:84px;
  height:84px;
  border-radius:50%;
  border:2px solid var(--cyan-dim);
  border-top-color:var(--cyan);
  animation:spin 1.1s linear infinite;
}

#boot .label{
  font-family:'Orbitron';
  letter-spacing:4px;
  color:var(--cyan);
  font-size:13px;
}

@keyframes spin{
  to{transform:rotate(360deg)}
}

.shell{
  display:flex;
  min-height:100vh;
  min-height:100dvh;
  position:relative;
  z-index:2;
}

.sidebar{
  width:88px;
  flex-shrink:0;
  border-right:1px solid var(--panel-border);
  background:linear-gradient(
    180deg,
    rgba(10,16,24,.9),
    rgba(6,10,16,.9)
  );
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:18px 0;
  gap:6px;
  padding-top:calc(18px + env(safe-area-inset-top,0px));
}

.brand{
  font-family:'Orbitron';
  color:var(--cyan);
  font-size:11px;
  letter-spacing:2px;
  writing-mode:vertical-rl;
  margin-bottom:28px;
  opacity:.8;
}

.nav-btn{
  width:56px;
  height:56px;
  border-radius:14px;
  border:1px solid transparent;
  background:transparent;
  color:var(--text-dim);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:3px;
  cursor:pointer;
  font-family:'Rajdhani';
  font-size:10px;
  letter-spacing:1px;
  transition:all .2s;
}

.nav-btn svg{
  width:20px;
  height:20px;
  stroke:currentColor;
  fill:none;
  stroke-width:1.6;
}

.nav-btn:hover{
  color:var(--text);
  background:rgba(79,209,255,.06);
}

.nav-btn.active{
  color:var(--cyan);
  background:rgba(79,209,255,.1);
  border-color:var(--panel-border);
  box-shadow:0 0 18px rgba(79,209,255,.15) inset;
}

.main{
  flex:1;
  min-width:0;
  padding:22px 26px 40px;
  max-width:1200px;
  margin:0 auto;
  width:100%;
}

.topbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:22px;
  gap:12px;
  flex-wrap:wrap;
}

.title-block h1{
  font-family:'Orbitron';
  font-size:20px;
  margin:0;
  letter-spacing:2px;
  color:#fff;
}

.title-block p{
  margin:2px 0 0;
  color:var(--text-dim);
  font-size:13px;
}

.status-pill{
  display:flex;
  align-items:center;
  gap:8px;
  padding:8px 14px;
  border:1px solid var(--panel-border);
  border-radius:100px;
  background:var(--panel);
  backdrop-filter:blur(10px);
  font-size:12px;
  color:var(--text-dim);
}

.dot{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--danger);
  box-shadow:0 0 8px var(--danger);
}

.dot.on{
  background:#4dffa0;
  box-shadow:0 0 8px #4dffa0;
}

.panel{
  background:var(--panel);
  border:1px solid var(--panel-border);
  border-radius:18px;
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  padding:20px;
  position:relative;
  overflow:hidden;
}

.panel::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:1px;
  background:linear-gradient(
    90deg,
    transparent,
    rgba(79,209,255,.6),
    transparent
  );
}

.panel h2{
  font-family:'Orbitron';
  font-size:13px;
  letter-spacing:2px;
  color:var(--cyan);
  margin:0 0 14px;
  font-weight:500;
}

.view{
  display:none;
}

.view.active{
  display:block;
  animation:fade .35s ease;
}

@keyframes fade{
  from{
    opacity:0;
    transform:translateY(6px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:16px;
  margin-bottom:16px;
}

.stat{
  padding:18px;
}

.stat .num{
  font-family:'Orbitron';
  font-size:30px;
  color:#fff;
  font-weight:700;
}

.stat .lbl{
  color:var(--text-dim);
  font-size:12px;
  letter-spacing:1px;
  margin-top:4px;
}

.hud-ring-wrap{
  display:flex;
  align-items:center;
  justify-content:center;
  padding:28px 0;
}

.hud-ring{
  width:180px;
  height:180px;
  border-radius:50%;
  border:1px solid var(--panel-border);
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
}

.hud-ring:before,
.hud-ring:after{
  content:"";
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(79,209,255,.15);
}

.hud-ring:before{
  inset:16px;
}

.hud-ring:after{
  inset:32px;
  animation:pulse 3s ease-in-out infinite;
}

@keyframes pulse{
  0%,100%{opacity:.4}
  50%{opacity:1}
}

.hud-core{
  font-family:'Orbitron';
  color:var(--cyan);
  font-size:12px;
  letter-spacing:2px;
  text-align:center;
}

.feed{
  display:flex;
  flex-direction:column;
  gap:8px;
  max-height:220px;
  overflow-y:auto;
}

.feed-item{
  font-size:13px;
  color:var(--text-dim);
  border-left:2px solid var(--cyan-dim);
  padding-left:10px;
}

.feed-item b{
  color:var(--text);
  font-weight:600;
}

.toolbar{
  display:flex;
  gap:10px;
  margin-bottom:16px;
  flex-wrap:wrap;
}

input[type=text],
input[type=url],
textarea,
select{
  background:rgba(6,10,16,.6);
  border:1px solid var(--panel-border);
  border-radius:10px;
  color:var(--text);
  padding:10px 12px;
  font-family:'Rajdhani';
  font-size:14px;
  outline:none;
  flex:1;
  min-width:160px;
}

input:focus,
textarea:focus,
select:focus{
  border-color:var(--cyan);
}

button{
  cursor:pointer;
  font-family:'Rajdhani';
  font-weight:600;
}

.btn{
  background:linear-gradient(
    135deg,
    rgba(79,209,255,.18),
    rgba(140,107,255,.14)
  );
  border:1px solid var(--panel-border);
  color:var(--cyan);
  border-radius:10px;
  padding:10px 18px;
  font-size:13px;
  letter-spacing:.5px;
  transition:all .15s;
}

.btn:hover{
  border-color:var(--cyan);
  box-shadow:0 0 14px rgba(79,209,255,.25);
}

.btn.ghost{
  background:transparent;
  color:var(--text-dim);
}

.card-list{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.item-card{
  padding:14px 16px;
  background:rgba(6,10,16,.4);
  border:1px solid var(--panel-border);
  border-radius:12px;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
}

.item-card .body{
  flex:1;
  min-width:0;
}

.item-card .body p{
  margin:0;
  word-break:break-word;
}

.item-card .meta{
  font-size:11px;
  color:var(--text-dim);
  margin-top:4px;
  letter-spacing:.5px;
}

.item-card .actions{
  display:flex;
  gap:6px;
  flex-shrink:0;
}

.icon-btn{
  width:30px;
  height:30px;
  border-radius:8px;
  border:1px solid var(--panel-border);
  background:transparent;
  color:var(--text-dim);
  display:flex;
  align-items:center;
  justify-content:center;
}

.icon-btn:hover{
  color:var(--cyan);
  border-color:var(--cyan);
}

.pri{
  display:inline-block;
  padding:2px 8px;
  border-radius:100px;
  font-size:10px;
  letter-spacing:1px;
  margin-right:8px;
}

.pri.high{
  background:rgba(255,84,112,.15);
  color:var(--danger);
}

.pri.med{
  background:rgba(255,180,84,.15);
  color:var(--amber);
}

.pri.low{
  background:rgba(79,209,255,.12);
  color:var(--cyan);
}

.done{
  opacity:.45;
  text-decoration:line-through;
}

.empty{
  color:var(--text-dim);
  font-size:13px;
  padding:20px 0;
  text-align:center;
}

/* VOICE */

.voice-stage{
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:30px 10px;
  gap:20px;
}

.orb{
  width:150px;
  height:150px;
  border-radius:50%;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(79,209,255,.35),
      rgba(6,10,16,.9) 70%
    );
  border:1px solid var(--panel-border);
  transition:box-shadow .2s;
}

.orb.listening{
  box-shadow:0 0 40px rgba(79,209,255,.5);
  animation:orbpulse 1.4s ease-in-out infinite;
}

@keyframes orbpulse{
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.05)}
}

.orb.speaking{
  box-shadow:0 0 45px rgba(140,107,255,.55);
}

.orb svg{
  width:44px;
  height:44px;
  stroke:var(--cyan);
  fill:none;
  stroke-width:1.4;
}

.transcript{
  min-height:26px;
  color:var(--text-dim);
  font-size:14px;
  text-align:center;
  max-width:760px;
}

.voice-mode{
  color:var(--cyan);
  font-family:'Orbitron';
  font-size:11px;
  letter-spacing:1px;
}

.voice-controls{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  justify-content:center;
}

.round-btn{
  width:52px;
  height:52px;
  border-radius:50%;
  border:1px solid var(--panel-border);
  background:var(--panel);
  color:var(--text);
  display:flex;
  align-items:center;
  justify-content:center;
}

.round-btn svg{
  width:20px;
  height:20px;
  stroke:currentColor;
  fill:none;
  stroke-width:1.6;
}

.round-btn.active{
  border-color:var(--cyan);
  color:var(--cyan);
  box-shadow:0 0 14px rgba(79,209,255,.3);
}

.log{
  display:flex;
  flex-direction:column;
  gap:8px;
  margin-top:10px;
  max-height:300px;
  overflow-y:auto;
}

.log-row{
  font-size:13px;
  padding:8px 10px;
  border-radius:8px;
  background:rgba(6,10,16,.4);
}

.log-row .who{
  color:var(--cyan);
  font-weight:600;
  margin-right:6px;
}

.log-row.jarvis .who{
  color:var(--violet);
}

/* SETTINGS */

.field{
  margin-bottom:16px;
}

.field label{
  display:block;
  font-size:12px;
  color:var(--text-dim);
  letter-spacing:1px;
  margin-bottom:6px;
}

.hint{
  font-size:12px;
  color:var(--text-dim);
  margin-top:6px;
  line-height:1.5;
}

.hint a{
  color:var(--cyan);
}

.switch-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:12px 0;
  border-bottom:1px solid rgba(79,209,255,.08);
}

.switch{
  width:42px;
  height:24px;
  border-radius:100px;
  background:rgba(79,209,255,.15);
  position:relative;
  cursor:pointer;
  border:1px solid var(--panel-border);
  flex-shrink:0;
}

.switch.on{
  background:var(--cyan-dim);
}

.switch:after{
  content:"";
  position:absolute;
  top:2px;
  left:2px;
  width:18px;
  height:18px;
  border-radius:50%;
  background:#fff;
  transition:transform .2s;
}

.switch.on:after{
  transform:translateX(18px);
}

.app-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:10px;
}

.app-btn{
  padding:14px;
  background:rgba(6,10,16,.45);
  border:1px solid var(--panel-border);
  border-radius:12px;
  color:var(--text);
  text-align:left;
}

.app-btn strong{
  display:block;
  color:var(--cyan);
  margin-bottom:3px;
}

.app-btn span{
  font-size:11px;
  color:var(--text-dim);
}

#confirmBox{
  display:none;
  margin-top:14px;
  padding:14px;
  border:1px solid rgba(255,180,84,.35);
  border-radius:12px;
  background:rgba(255,180,84,.06);
}

#confirmBox.show{
  display:block;
}

.confirm-title{
  color:var(--amber);
  font-family:'Orbitron';
  font-size:12px;
  letter-spacing:1px;
}

.confirm-text{
  font-size:13px;
  margin:8px 0 12px;
  color:var(--text);
}

@media(max-width:720px){

  .shell{
    flex-direction:column;
  }

  .sidebar{
    width:100%;
    flex-direction:row;
    justify-content:space-around;
    padding:10px 6px;
    position:sticky;
    top:0;
    z-index:10;
    padding-top:calc(
      10px + env(safe-area-inset-top,0px)
    );
  }

  .brand{
    display:none;
  }

  .nav-btn{
    width:auto;
    flex:1;
    height:48px;
  }

  .main{
    padding:16px;
  }
}

::-webkit-scrollbar{
  width:6px;
}

::-webkit-scrollbar-thumb{
  background:var(--cyan-dim);
  border-radius:4px;
}
</style>
</head>

<body>

<div class="scanlines"></div>

<div id="boot">
  <div class="ring"></div>
  <div class="label">INITIALIZING JARVIS</div>
</div>

<div class="shell">

<nav class="sidebar">

<div class="brand">JARVIS</div>

<button class="nav-btn active" data-view="home">
<svg viewBox="0 0 24 24">
<path d="M3 11l9-8 9 8"/>
<path d="M5 10v10h14V10"/>
</svg>
HOME
</button>

<button class="nav-btn" data-view="memory">
<svg viewBox="0 0 24 24">
<rect x="4" y="3" width="16" height="18" rx="2"/>
<path d="M8 8h8M8 12h8M8 16h5"/>
</svg>
MEMORY
</button>

<button class="nav-btn" data-view="tasks">
<svg viewBox="0 0 24 24">
<path d="M9 11l3 3L22 4"/>
<path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
</svg>
TASKS
</button>

<button class="nav-btn" data-view="voice">
<svg viewBox="0 0 24 24">
<rect x="9" y="2" width="6" height="12" rx="3"/>
<path d="M5 10a7 7 0 0014 0M12 19v3"/>
</svg>
VOICE
</button>

<button class="nav-btn" data-view="settings">
<svg viewBox="0 0 24 24">
<circle cx="12" cy="12" r="3"/>
<path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.9 2.9l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 01-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 01-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.9-2.9l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.9-2.9l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.6V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.9 2.9l.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z"/>
</svg>
SETTINGS
</button>

</nav>

<main class="main">

<div class="topbar">

<div class="title-block">
<h1 id="viewTitle">HOME</h1>
<p id="viewSub">JARVIS system overview</p>
</div>

<div style="display:flex;gap:10px;align-items:center;">

<div class="status-pill">
<span class="dot" id="driveDot"></span>
<span id="driveStatus">Drive offline</span>
</div>

<button class="btn" id="authBtn">
Sign in
</button>

</div>

</div>

<!-- HOME -->

<section class="view active" id="view-home">

<div class="grid">

<div class="panel stat">
<div class="num" id="statNotes">0</div>
<div class="lbl">SAVED NOTES</div>
</div>

<div class="panel stat">
<div class="num" id="statTasksOpen">0</div>
<div class="lbl">OPEN TASKS</div>
</div>

<div class="panel stat">
<div class="num" id="statTasksDone">0</div>
<div class="lbl">COMPLETED</div>
</div>

</div>

<div class="panel">

<div class="hud-ring-wrap">

<div class="hud-ring">

<div class="hud-core" id="homeGreeting">
JARVIS<br>
ONLINE
</div>

</div>

</div>

</div>

<div class="panel" style="margin-top:16px;">

<h2>RECENT ACTIVITY</h2>

<div class="feed" id="activityFeed">
<div class="empty">
No activity yet.
</div>
</div>

</div>

</section>

<!-- MEMORY -->

<section class="view" id="view-memory">

<div class="panel">

<h2>ADD NOTE</h2>

<div class="toolbar">

<input
type="text"
id="noteInput"
placeholder="Type a note..."
>

<button class="btn" id="addNoteBtn">
Save note
</button>

</div>

<input
type="text"
id="noteSearch"
placeholder="Search notes..."
style="margin-bottom:14px;"
>

<div class="card-list" id="notesList"></div>

</div>

</section>

<!-- TASKS -->

<section class="view" id="view-tasks">

<div class="panel">

<h2>ADD TASK</h2>

<div class="toolbar">

<input
type="text"
id="taskInput"
placeholder="Task description..."
>

<select
id="taskPriority"
style="flex:0 0 130px;"
>

<option value="high">
High priority
</option>

<option value="med" selected>
Medium priority
</option>

<option value="low">
Low priority
</option>

</select>

<button class="btn" id="addTaskBtn">
Add task
</button>

</div>

<div class="card-list" id="tasksList"></div>

</div>

</section>

<!-- VOICE -->

<section class="view" id="view-voice">

<div class="panel">

<h2>JARVIS VOICE CONSOLE</h2>

<div class="voice-stage">

<div class="orb" id="orb">

<svg viewBox="0 0 24 24">
<rect x="9" y="2" width="6" height="12" rx="3"/>
<path d="M5 10a7 7 0 0014 0M12 19v3"/>
</svg>

</div>

<div class="voice-mode" id="voiceMode">
PUSH TO TALK
</div>

<div class="transcript" id="transcript">
Drücke den Freisprech-Button oder Push-to-Talk.
</div>

<div class="voice-controls">

<button
class="round-btn"
id="ptt"
title="Push to talk"
>

<svg viewBox="0 0 24 24">
<rect x="9" y="2" width="6" height="12" rx="3"/>
<path d="M5 10a7 7 0 0014 0M12 19v3"/>
</svg>

</button>

<button
class="round-btn"
id="continuousToggle"
title="Dauerhaftes Freisprechen"
>

<svg viewBox="0 0 24 24">
<circle cx="12" cy="12" r="9"/>
<path d="M8 12h8"/>
</svg>

</button>

<button
class="round-btn"
id="muteBtn"
title="Mute"
>

<svg viewBox="0 0 24 24">
<path d="M11 5L6 9H2v6h4l5 4V5z"/>
<path d="M19 5l-4 4m0 6l4-4"/>
</svg>

</button>

</div>

</div>

<h2 style="margin-top:6px;">
COMMAND HISTORY
</h2>

<div class="log" id="voiceLog"></div>

</div>

</section>

<!-- SETTINGS -->

<section class="view" id="view-settings">

<div class="panel">

<h2>AI CORE</h2>

<div class="field">

<label>
AI BACKEND URL
</label>

<input
type="url"
id="aiBackendInput"
placeholder="https://dein-backend.vercel.app"
>

<p class="hint">
Hier kommt nur die URL deines Backends hinein.
Niemals einen API-Key hier eintragen.
</p>

</div>

<button class="btn" id="saveAiBackend">
Save AI backend
</button>

</div>

<div class="panel" style="margin-top:16px;">

<h2>APP CONTROL</h2>

<div class="switch-row">

<span>
App control enabled
</span>

<div
class="switch"
id="swAppControl">
</div>

</div>

<div class="switch-row">

<span>
Always require confirmation
</span>

<div
class="switch on"
id="swAppConfirm">
</div>

</div>

<p class="hint">
JARVIS kann aus dem Browser sichere Webseiten öffnen.
Für echte Android-App-Steuerung wird später eine Android-Begleit-App benötigt.
</p>

<div class="app-grid" style="margin-top:12px;">

<button
class="app-btn"
data-app="youtube">
<strong>YouTube</strong>
<span>Öffnen</span>
</button>

<button
class="app-btn"
data-app="spotify">
<strong>Spotify</strong>
<span>Öffnen</span>
</button>

<button
class="app-btn"
data-app="whatsapp">
<strong>WhatsApp</strong>
<span>Öffnen</span>
</button>

<button
class="app-btn"
data-app="instagram">
<strong>Instagram</strong>
<span>Öffnen</span>
</button>

</div>

<div id="confirmBox">

<div class="confirm-title">
ACTION CONFIRMATION
</div>

<div
class="confirm-text"
id="confirmText">
</div>

<button
class="btn"
id="confirmYes">
Confirm
</button>

<button
class="btn ghost"
id="confirmNo">
Cancel
</button>

</div>

</div>

<div class="panel" style="margin-top:16px;">

<h2>
GOOGLE DRIVE
</h2>

<div class="field">

<label>
OAuth Client ID
</label>

<input
type="text"
id="clientIdInput"
placeholder="xxxx.apps.googleusercontent.com"
>

<p class="hint">
Deine bestehenden Google-Drive-Funktionen bleiben erhalten.
</p>

</div>

<button
class="btn"
id="saveClientId">
Save &amp; sign in
</button>

</div>

<div class="panel" style="margin-top:16px;">

<h2>
VOICE
</h2>

<div class="switch-row">

<span>
Continuous listening on load
</span>

<div
class="switch"
id="swContinuous">
</div>

</div>

<div class="switch-row">

<span>
Spoken responses
</span>

<div
class="switch on"
id="swSpeak">
</div>

</div>

</div>

<div class="panel" style="margin-top:16px;">

<h2>
SYSTEM
</h2>

<p class="hint">
JARVIS speichert lokale Daten und deine bestehenden Einstellungen.
</p>

<button
class="btn ghost"
id="signOutBtn">
Sign out
</button>

</div>

</section>

</main>
</div>

<script>

(function(){

"use strict";

/* =========================================================
   JARVIS CORE
========================================================= */

const DEFAULT_DATA = {

  notes:[],
  tasks:[],
  research:[],

  settings:{
    continuous:false,
    speak:true,
    appControl:false,
    appConfirm:true,
    aiBackend:""
  },

  conversations:[]

};

let state = structuredClone(DEFAULT_DATA);

let driveFileId = null;
let accessToken = null;
let gisClient = null;
let saveTimer = null;

let pendingAction = null;

const $ = s => document.querySelector(s);

const $$ = s => document.querySelectorAll(s);


/* =========================================================
   HELPERS
========================================================= */

function uid(){

  return Date.now().toString(36) +
    Math.random().toString(36).slice(2,7);

}

function nowStr(){

  return new Date().toLocaleString(
    "de-DE",
    {
      month:"short",
      day:"numeric",
      hour:"2-digit",
      minute:"2-digit"
    }
  );

}

function truncate(s,n){

  return s.length > n
    ? s.slice(0,n)+"…"
    : s;

}

function escapeHtml(s){

  const d = document.createElement("div");

  d.textContent = s;

  return d.innerHTML;

}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function localSave(){

  try{

    localStorage.setItem(
      "jarvis_data",
      JSON.stringify(state)
    );

    localStorage.setItem(
      "jarvis_client_id",
      $("#clientIdInput").value || ""
    );

    localStorage.setItem(
      "jarvis_backend",
      state.settings.aiBackend || ""
    );

  }catch(e){

    console.error(e);

  }

}


function localLoad(){

  try{

    const raw =
      localStorage.getItem("jarvis_data");

    if(raw){

      state = Object.assign(
        structuredClone(DEFAULT_DATA),
        JSON.parse(raw)
      );

    }

  }catch(e){

    console.error(e);

  }

  state.settings =
    Object.assign(
      structuredClone(DEFAULT_DATA.settings),
      state.settings || {}
    );

  try{

    const backend =
      localStorage.getItem("jarvis_backend");

    if(backend){

      state.settings.aiBackend = backend;

    }

    const clientId =
      localStorage.getItem("jarvis_client_id");

    if(clientId){

      $("#clientIdInput").value = clientId;

    }

  }catch(e){}

}


/* =========================================================
   DRIVE
========================================================= */

function setDriveStatus(
  connected,
  label
){

  $("#driveDot")
    .classList
    .toggle("on",!!connected);

  $("#driveStatus").textContent =
    label ||
    (
      connected
        ? "Drive connected"
        : "Drive offline"
    );

  $("#authBtn").textContent =
    connected
      ? "Sign out"
      : "Sign in";

}


function loadGis(cb){

  if(
    window.google &&
    google.accounts
  ){

    cb();
    return;

  }

  const s =
    document.createElement("script");

  s.src =
    "https://accounts.google.com/gsi/client";

  s.async = true;

  s.onload = cb;

  document.head.appendChild(s);

}


function initAuth(){

  const clientId =
    $("#clientIdInput").value.trim();

  if(!clientId){

    alert(
      "Bitte zuerst deine Google OAuth Client ID eintragen."
    );

    switchView("settings");

    return;

  }

  loadGis(()=>{

    gisClient =
      google.accounts.oauth2.initTokenClient({

        client_id:clientId,

        scope:
          "https://www.googleapis.com/auth/drive.appdata",

        callback:
        async response => {

          if(response.error){

            setDriveStatus(
              false,
              "Auth failed"
            );

            return;

          }

          accessToken =
            response.access_token;

          setDriveStatus(
            true,
            "Drive connected"
          );

          try{

            await driveFindOrCreateFile();

            await driveLoad();

            renderAll();

          }catch(e){

            console.error(e);

          }

        }

      });

    gisClient.requestAccessToken();

  });

}


async function driveApi(
  path,
  opts={}
){

  const response =
    await fetch(
      "https://www.googleapis.com"+path,
      Object.assign(
        {},
        opts,
        {
          headers:
            Object.assign(
              {},
              opts.headers || {},
              {
                Authorization:
                  "Bearer "+accessToken
              }
            )
        }
      )
    );

  if(!response.ok){

    throw new Error(
      "Drive API error "+response.status
    );

  }

  return response;

}


async function driveFindOrCreateFile(){

  const q =
    encodeURIComponent(
      "name='jarvis-data.json' and trashed=false"
    );

  const response =
    await driveApi(
      "/drive/v3/files?spaces=appDataFolder&q="+
      q+
      "&fields=files(id,name)"
    );

  const data =
    await response.json();

  if(
    data.files &&
    data.files.length
  ){

    driveFileId =
      data.files[0].id;

  }else{

    const meta = {

      name:"jarvis-data.json",

      parents:["appDataFolder"]

    };

    const create =
      await driveApi(
        "/drive/v3/files?fields=id",
        {
          method:"POST",

          headers:{
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(meta)
        }
      );

    driveFileId =
      (await create.json()).id;

    await driveSave();

  }

}


async function driveLoad(){

  if(!driveFileId) return;

  try{

    const response =
      await driveApi(
        "/drive/v3/files/"+
        driveFileId+
        "?alt=media"
      );

    const text =
      await response.text();

    if(text){

      state =
        Object.assign(
          structuredClone(DEFAULT_DATA),
          JSON.parse(text)
        );

    }

  }catch(e){

    console.error(e);

  }

}


async function driveSave(){

  localSave();

  if(
    !accessToken ||
    !driveFileId
  ){

    return;

  }

  try{

    await driveApi(
      "/upload/drive/v3/files/"+
      driveFileId+
      "?uploadType=media",
      {
        method:"PATCH",

        headers:{
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(state)
      }
    );

  }catch(e){

    console.error(e);

  }

}


function queueSave(){

  clearTimeout(saveTimer);

  saveTimer =
    setTimeout(
      driveSave,
      600
    );

}


function signOut(){

  accessToken = null;

  driveFileId = null;

  setDriveStatus(
    false,
    "Drive offline"
  );

}


$("#authBtn")
  .addEventListener(
    "click",
    ()=>{
      accessToken
        ? signOut()
        : initAuth();
    }
  );


$("#signOutBtn")
  .addEventListener(
    "click",
    signOut
  );


$("#saveClientId")
  .addEventListener(
    "click",
    ()=>{
      localSave();
      initAuth();
    }
  );


/* =========================================================
   NAVIGATION
========================================================= */

const titles = {

  home:[
    "HOME",
    "JARVIS system overview"
  ],

  memory:[
    "MEMORY",
    "JARVIS memory archive"
  ],

  tasks:[
    "TASKS",
    "Mission queue"
  ],

  voice:[
    "VOICE CONSOLE",
    "Speak to JARVIS"
  ],

  settings:[
    "SETTINGS",
    "JARVIS configuration"
  ]

};


function switchView(name){

  $$(".nav-btn")
    .forEach(
      button =>
        button.classList.toggle(
          "active",
          button.dataset.view === name
        )
    );

  $$(".view")
    .forEach(
      view =>
        view.classList.toggle(
          "active",
          view.id ===
          "view-"+name
        )
    );

  $("#viewTitle").textContent =
    titles[name][0];

  $("#viewSub").textContent =
    titles[name][1];

}


$$(".nav-btn")
  .forEach(
    button =>
      button.addEventListener(
        "click",
        ()=>{
          switchView(
            button.dataset.view
          );
        }
      )
  );


/* =========================================================
   ACTIVITY
========================================================= */

function pushActivity(text){

  const feed =
    $("#activityFeed");

  if(
    feed.querySelector(".empty")
  ){

    feed.innerHTML = "";

  }

  const row =
    document.createElement("div");

  row.className =
    "feed-item";

  row.innerHTML =
    "<b>"+
    nowStr()+
    "</b> — "+
    escapeHtml(text);

  feed.prepend(row);

  while(
    feed.children.length > 8
  ){

    feed.removeChild(
      feed.lastChild
    );

  }

}


/* =========================================================
   NOTES
========================================================= */

function renderNotes(filter){

  const list =
    $("#notesList");

  list.innerHTML = "";

  const search =
    (filter || "").toLowerCase();

  const items =
    state.notes
      .filter(
        note =>
          !search ||
          note.text
            .toLowerCase()
            .includes(search)
      )
      .sort(
        (a,b)=>b.ts-a.ts
      );

  if(!items.length){

    list.innerHTML =
      '<div class="empty">No notes yet.</div>';

    return;

  }

  items.forEach(note=>{

    const card =
      document.createElement("div");

    card.className =
      "item-card";

    card.innerHTML =
      '<div class="body">'+
      '<p contenteditable="true" class="editable">'+
      escapeHtml(note.text)+
      '</p>'+
      '<div class="meta">'+
      new Date(note.ts)
        .toLocaleString(
          "de-DE",
          {
            month:"short",
            day:"numeric",
            hour:"2-digit",
            minute:"2-digit"
          }
        )+
      '</div>'+
      '</div>'+
      '<div class="actions">'+
      '<button class="icon-btn" data-act="del">×</button>'+
      '</div>';

    card
      .querySelector(".editable")
      .addEventListener(
        "blur",
        e=>{
          note.text =
            e.target.textContent.trim();

          queueSave();
        }
      );

    card
      .querySelector("[data-act=del]")
      .addEventListener(
        "click",
        ()=>{
          state.notes =
            state.notes.filter(
              item =>
                item.id !== note.id
            );

          renderNotes(
            $("#noteSearch").value
          );

          updateStats();

          queueSave();

        }
      );

    list.appendChild(card);

  });

}


function addNote(text){

  text =
    (text || "").trim();

  if(!text) return null;

  const note = {

    id:uid(),
    text,
    ts:Date.now()

  };

  state.notes.push(note);

  renderNotes();

  updateStats();

  queueSave();

  pushActivity(
    'Note saved: "'+
    truncate(text,40)+
    '"'
  );

  return note;

}


$("#addNoteBtn")
  .addEventListener(
    "click",
    ()=>{
      addNote(
        $("#noteInput").value
      );

      $("#noteInput").value = "";

    }
  );


$("#noteInput")
  .addEventListener(
    "keydown",
    event=>{
      if(event.key === "Enter"){

        addNote(event.target.value);

        event.target.value = "";

      }
    }
  );


$("#noteSearch")
  .addEventListener(
    "input",
    event =>
      renderNotes(event.target.value)
  );


/* =========================================================
   TASKS
========================================================= */

function renderTasks(){

  const list =
    $("#tasksList");

  list.innerHTML = "";

  const order = {
    high:0,
    med:1,
    low:2
  };

  const items =
    [...state.tasks].sort(
      (a,b)=>
        (a.done-b.done) ||
        (order[a.priority] -
         order[b.priority]) ||
        (b.ts-a.ts)
    );

  if(!items.length){

    list.innerHTML =
      '<div class="empty">No tasks yet.</div>';

    return;

  }

  items.forEach(task=>{

    const card =
      document.createElement("div");

    card.className =
      "item-card";

    const label = {

      high:"HIGH",
      med:"MED",
      low:"LOW"

    }[task.priority];

    card.innerHTML =
      '<div class="body">'+
      '<p class="'+
      (task.done ? "done" : "")+
      '">'+
      '<span class="pri '+
      task.priority+
      '">'+
      label+
      '</span>'+
      escapeHtml(task.text)+
      '</p>'+
      '<div class="meta">'+
      new Date(task.ts)
        .toLocaleString(
          "de-DE",
          {
            month:"short",
            day:"numeric",
            hour:"2-digit",
            minute:"2-digit"
          }
        )+
      '</div>'+
      '</div>'+
      '<div class="actions">'+
      '<button class="icon-btn" data-act="done">✓</button>'+
      '<button class="icon-btn" data-act="del">×</button>'+
      '</div>';

    card
      .querySelector("[data-act=done]")
      .addEventListener(
        "click",
        ()=>{
          task.done =
            !task.done;

          renderTasks();

          updateStats();

          queueSave();

        }
      );

    card
      .querySelector("[data-act=del]")
      .addEventListener(
        "click",
        ()=>{
          state.tasks =
            state.tasks.filter(
              item =>
                item.id !== task.id
            );

          renderTasks();

          updateStats();

          queueSave();

        }
      );

    list.appendChild(card);

  });

}


function addTask(
  text,
  priority
){

  text =
    (text || "").trim();

  if(!text) return null;

  const task = {

    id:uid(),
    text,
    priority:priority || "med",
    done:false,
    ts:Date.now()

  };

  state.tasks.push(task);

  renderTasks();

  updateStats();

  queueSave();

  return task;

}


$("#addTaskBtn")
  .addEventListener(
    "click",
    ()=>{
      addTask(
        $("#taskInput").value,
        $("#taskPriority").value
      );

      $("#taskInput").value = "";

    }
  );


$("#taskInput")
  .addEventListener(
    "keydown",
    event=>{
      if(event.key === "Enter"){

        addTask(
          event.target.value,
          $("#taskPriority").value
        );

        event.target.value = "";

      }
    }
  );


function updateStats(){

  $("#statNotes").textContent =
    state.notes.length;

  $("#statTasksOpen").textContent =
    state.tasks.filter(
      task=>!task.done
    ).length;

  $("#statTasksDone").textContent =
    state.tasks.filter(
      task=>task.done
    ).length;

}


/* =========================================================
   VOICE / SPEECH
========================================================= */

const SpeechRec =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

let recognition = null;

let listening = false;

let continuousMode = false;

let muted = false;

let pttHeld = false;

let speaking = false;


/* ---------------------------------------------------------
   VOICE SELECTION
--------------------------------------------------------- */

function getBestGermanVoice(){

  const voices =
    window.speechSynthesis
      .getVoices();

  if(!voices.length){

    return null;

  }

  const german =
    voices.filter(
      voice =>
        /^de(-|_)/i.test(
          voice.lang
        )
    );

  const maleWords =
    /male|männlich|mann|markus|hans|stefan|thomas|daniel|google deutsch/i;

  return (

    german.find(
      voice =>
        maleWords.test(
          voice.name
        )
    ) ||

    german.find(
      voice =>
        /google/i.test(
          voice.name
        )
    ) ||

    german[0] ||

    voices.find(
      voice =>
        maleWords.test(
          voice.name
        )
    ) ||

    voices[0]

  );

}


/* ---------------------------------------------------------
   SPEAK
--------------------------------------------------------- */

function speak(text){

  if(!text) return;

  logVoice(
    "jarvis",
    text
  );

  if(
    state.settings.speak === false ||
    muted ||
    !("speechSynthesis" in window)
  ){

    return;

  }

  window.speechSynthesis.cancel();

  speaking = true;

  stopListening();

  $("#orb")
    .classList
    .add("speaking");

  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  const voice =
    getBestGermanVoice();

  if(voice){

    utterance.voice =
      voice;

    utterance.lang =
      voice.lang;

  }else{

    utterance.lang =
      "de-DE";

  }

  /*
    Ruhiger, tieferer Klang.
    Die tatsächliche Stimme hängt
    vom Gerät/Browser ab.
  */

  utterance.rate =
    0.92;

  utterance.pitch =
    0.72;

  utterance.volume =
    1;

  utterance.onend = ()=>{

    speaking = false;

    $("#orb")
      .classList
      .remove("speaking");

    if(
      continuousMode &&
      !muted
    ){

      setTimeout(
        startListening,
        250
      );

    }

  };

  utterance.onerror = ()=>{

    speaking = false;

    $("#orb")
      .classList
      .remove("speaking");

    if(continuousMode){

      setTimeout(
        startListening,
        250
      );

    }

  };

  window.speechSynthesis
    .speak(utterance);

}


/*
  Manche Android-Browser laden Stimmen
  erst nach einem kurzen Moment.
*/

if(
  "speechSynthesis" in window
){

  window.speechSynthesis
    .onvoiceschanged = ()=>{
      getBestGermanVoice();
    };

}


/* =========================================================
   VOICE LOG
========================================================= */

function logVoice(
  who,
  text
){

  const log =
    $("#voiceLog");

  const row =
    document.createElement("div");

  row.className =
    "log-row"+
    (
      who === "jarvis"
        ? " jarvis"
        : ""
    );

  row.innerHTML =
    '<span class="who">'+
    (
      who === "jarvis"
        ? "JARVIS"
        : "YOU"
    )+
    '</span>'+
    escapeHtml(text);

  log.prepend(row);

  while(
    log.children.length > 20
  ){

    log.removeChild(
      log.lastChild
    );

  }

  if(
    who === "you" ||
    who === "jarvis"
  ){

    state.conversations.push({

      who,
      text,
      ts:Date.now()

    });

    if(
      state.conversations.length > 200
    ){

      state.conversations.shift();

    }

    queueSave();

  }

}


function conversationForAI(){

  return state.conversations
    .slice(-20)
    .map(
      item=>({

        role:
          item.who === "jarvis"
            ? "assistant"
            : "user",

        content:item.text

      })
    );

}


/* =========================================================
   AI
========================================================= */

async function askAI(message){

  const backend =
    (
      state.settings.aiBackend ||
      ""
    ).trim();

  if(!backend){

    speak(
      "Mein KI-Backend ist noch nicht eingerichtet."
    );

    switchView("settings");

    return;

  }

  try{

    $("#transcript").textContent =
      "JARVIS verarbeitet...";

    const response =
      await fetch(
        backend.replace(/\/$/,"")+
        "/api/chat",
        {
          method:"POST",

          headers:{
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({

              message,

              conversation:
                conversationForAI()

            })

        }
      );

    if(!response.ok){

      throw new Error(
        "HTTP "+response.status
      );

    }

    const data =
      await response.json();

    if(
      data.action
    ){

      handleAIAction(
        data.action
      );

    }

    speak(
      data.reply ||
      "Ich konnte gerade keine Antwort erzeugen."
    );

  }catch(error){

    console.error(
      "JARVIS AI error:",
      error
    );

    speak(
      "Der KI-Dienst ist gerade nicht erreichbar."
    );

  }

}


/* =========================================================
   APP CONTROL
========================================================= */

const appTargets = {

  youtube:{
    label:"YouTube",
    url:"https://www.youtube.com/",
    intent:
      "intent://www.youtube.com/#Intent;package=com.google.android.youtube;scheme=https;end"
  },

  spotify:{
    label:"Spotify",
    url:"https://open.spotify.com/",
    intent:
      "intent://open.spotify.com/#Intent;package=com.spotify.music;scheme=https;end"
  },

  whatsapp:{
    label:"WhatsApp",
    url:"https://web.whatsapp.com/",
    intent:
      "intent://send/#Intent;package=com.whatsapp;scheme=whatsapp;end"
  },

  instagram:{
    label:"Instagram",
    url:"https://www.instagram.com/",
    intent:
      "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end"
  }

};


function openApp(target){

  pendingAction = null;

  $("#confirmBox")
    .classList
    .remove("show");

  pushActivity(
    "Opening "+target.label
  );

  /*
    Auf Android versuchen wir zuerst,
    die echte App über intent:// zu öffnen.

    Falls das nicht funktioniert,
    bleibt die normale Webseite.
  */

  let opened = false;

  try{

    if(target.intent){

      window.location.href =
        target.intent;

      opened = true;

    }

  }catch(error){

    console.warn(
      "Android app intent failed",
      error
    );

  }

  /*
    Browser-Fallback
  */

  setTimeout(
    ()=>{
      if(
        document.visibilityState === "visible"
      ){

        window.open(
          target.url,
          "_blank",
          "noopener"
        );

      }

    },
    1200
  );

}


function requestAppAction(app){

  const target =
    appTargets[app];

  if(!target){

    speak(
      "Diese App ist noch nicht eingerichtet."
    );

    return;

  }

  if(
    !state.settings.appControl
  ){

    speak(
      "App-Steuerung ist deaktiviert."
    );

    return;

  }

  if(
    state.settings.appConfirm !== false
  ){

    pendingAction =
      ()=>openApp(target);

    $("#confirmText")
      .textContent =
      target.label+
      " öffnen?";

    $("#confirmBox")
      .classList
      .add("show");

    return;

  }

  openApp(target);

}


$("#confirmYes")
  .addEventListener(
    "click",
    ()=>{
      if(pendingAction){

        pendingAction();

      }
    }
  );


$("#confirmNo")
  .addEventListener(
    "click",
    ()=>{

      pendingAction = null;

      $("#confirmBox")
        .classList
        .remove("show");

      speak(
        "Aktion abgebrochen."
      );

    }
  );


$$(".app-btn")
  .forEach(
    button =>
      button.addEventListener(
        "click",
        ()=>{
          requestAppAction(
            button.dataset.app
          );
        }
      )
  );


/* =========================================================
   COMMAND HANDLER
========================================================= */

async function handleCommand(raw){

  const command =
    raw.trim();

  if(!command){

    return;

  }

  $("#transcript")
    .textContent =
    command;

  logVoice(
    "you",
    command
  );

  const lower =
    command.toLowerCase();


  /*
    NOTE
  */

  let match =
    lower.match(
      /^(?:hey\s+)?(?:jarvis[, ]*)?(?:save|speichere|add|füge hinzu|take)\s+(?:note|notiz)[:\s]+(.+)/i
    );

  if(match){

    addNote(
      match[1]
    );

    switchView(
      "memory"
    );

    speak(
      "Notiz gespeichert."
    );

    return;

  }


  /*
    SHOW NOTES
  */

  if(
    /^(?:hey\s+)?(?:jarvis[, ]*)?(?:show|zeige)\s+(?:my\s+)?(?:notes|notizen)$/i
      .test(lower)
  ){

    switchView(
      "memory"
    );

    speak(
      "Du hast "+
      state.notes.length+
      " Notizen."
    );

    return;

  }


  /*
    TASK
  */

  match =
    lower.match(
      /^(?:hey\s+)?(?:jarvis[, ]*)?(?:add|create|füge hinzu|erstelle)\s+(?:task|aufgabe)[:\s]+(.+)/i
    );

  if(match){

    addTask(
      match[1],
      "med"
    );

    switchView(
      "tasks"
    );

    speak(
      "Aufgabe hinzugefügt."
    );

    return;

  }


  /*
    SHOW TASKS
  */

  if(
    /^(?:show|zeige)\s+(?:my\s+)?(?:tasks|aufgaben)$/i
      .test(lower)
  ){

    switchView(
      "tasks"
    );

    speak(
      "Du hast "+
      state.tasks.filter(
        task=>!task.done
      ).length+
      " offene Aufgaben."
    );

    return;

  }


  /*
    NAVIGATION
  */

  match =
    lower.match(
      /^(?:go to|open|öffne|wechsel zu|wechsle zu|gehe zu)\s+(home|memory|tasks|voice|settings|startseite|erinnerungen|aufgaben|sprache|einstellungen)$/i
    );

  if(match){

    const map = {

      home:"home",
      startseite:"home",

      memory:"memory",
      erinnerungen:"memory",

      tasks:"tasks",
      aufgaben:"tasks",

      voice:"voice",
      sprache:"voice",

      settings:"settings",
      einstellungen:"settings"

    };

    const view =
      map[
        match[1].toLowerCase()
      ];

    switchView(view);

    speak(
      "Geöffnet."
    );

    return;

  }


  /*
    APP CONTROL

    Beispiele:

    Öffne YouTube
    Wechsel zu YouTube
    Gehe zu YouTube
    Starte Spotify
  */

  match =
    lower.match(
      /^(?:öffne|oeffne|open|starte|wechsel zu|wechsle zu|gehe zu|geh zu)\s+(youtube|spotify|whatsapp|instagram)$/i
    );

  if(match){

    requestAppAction(
      match[1]
        .toLowerCase()
    );

    return;

  }


  /*
    Wenn kein lokaler Befehl erkannt wurde,
    geht die Anfrage an Gemini.
  */

  await askAI(
    command
  );

}


/* =========================================================
   FUTURE AI ACTION SUPPORT
========================================================= */

function handleAIAction(action){

  if(!action){

    return;

  }

  if(
    action.type === "open_app" &&
    appTargets[action.app]
  ){

    requestAppAction(
      action.app
    );

  }

}


/* =========================================================
   SPEECH RECOGNITION
========================================================= */

function setupRecognition(){

  if(!SpeechRec){

    $("#transcript")
      .textContent =
      "Spracherkennung wird in diesem Browser nicht unterstützt.";

    return;

  }

  recognition =
    new SpeechRec();

  recognition.continuous = true;

  recognition.interimResults = true;

  recognition.lang = "de-DE";


  recognition.onstart = ()=>{

    setOrb(true);

  };


  recognition.onresult = event =>{

    let interim = "";

    let finalText = "";


    for(
      let i = event.resultIndex;
      i < event.results.length;
      i++
    ){

      const text =
        event.results[i][0].transcript;

      if(
        event.results[i].isFinal
      ){

        finalText += text;

      }else{

        interim += text;

      }

    }


    if(interim){

      $("#transcript")
        .textContent =
        interim;

    }


    if(finalText){

      const lower =
        finalText.toLowerCase();


      /*
        WICHTIG:

        Im dauerhaften Freisprechen
        braucht der Benutzer NICHT
        jedes Mal "JARVIS" zu sagen.

        Bei Push-to-Talk ebenfalls
        direkt verarbeiten.
      */

      if(
        pttHeld ||
        continuousMode ||
        lower.includes("jarvis")
      ){

        const cleaned =
          finalText.replace(
            /^\s*(?:hey\s+)?jarvis[,]?\s*/i,
            ""
          );


        if(
          cleaned.trim()
        ){

          handleCommand(
            cleaned
          );

        }

      }

    }

  };


  recognition.onerror = event =>{

    console.warn(
      "Speech recognition error:",
      event.error
    );

    setOrb(false);

  };


  recognition.onend = ()=>{

    setOrb(false);

    /*
      Dauerhaftes Freisprechen:
      nach dem Ende automatisch
      wieder zuhören.
    */

    if(
      continuousMode &&
      !speaking
    ){

      setTimeout(
        ()=>{
          startListening();
        },
        250
      );

    }

  };

}


function setOrb(on){

  listening = on;

  $("#orb")
    .classList
    .toggle(
      "listening",
      on
    );

}


function startListening(){

  if(
    speaking
  ){

    return;

  }

  if(!recognition){

    setupRecognition();

  }

  if(!recognition){

    return;

  }

  try{

    recognition.start();

    setOrb(true);

  }catch(error){

    /*
      start() kann einen Fehler werfen,
      wenn es bereits läuft.
    */

    console.debug(
      "Recognition already running."
    );

  }

}


function stopListening(){

  if(recognition){

    try{

      recognition.stop();

    }catch(error){}

  }

  setOrb(false);

}


/* =========================================================
   PUSH TO TALK
========================================================= */

$("#ptt")
  .addEventListener(
    "mousedown",
    ()=>{
      pttHeld = true;
      startListening();
    }
  );


$("#ptt")
  .addEventListener(
    "touchstart",
    event=>{
      event.preventDefault();
      pttHeld = true;
      startListening();
    }
  );


["mouseup","mouseleave"]
  .forEach(
    eventName =>
      $("#ptt")
        .addEventListener(
          eventName,
          ()=>{
            if(pttHeld){

              pttHeld = false;

              if(!continuousMode){

                stopListening();

              }

            }

          }
        )
  );


["touchend","touchcancel"]
  .forEach(
    eventName =>
      $("#ptt")
        .addEventListener(
          eventName,
          ()=>{
            if(pttHeld){

              pttHeld = false;

              if(!continuousMode){

                stopListening();

              }

            }

          }
        )
  );


/* =========================================================
   CONTINUOUS HANDS-FREE MODE
========================================================= */

$("#continuousToggle")
  .addEventListener(
    "click",
    ()=>{

      continuousMode =
        !continuousMode;

      state.settings.continuous =
        continuousMode;

      $("#continuousToggle")
        .classList
        .toggle(
          "active",
          continuousMode
        );

      $("#swContinuous")
        .classList
        .toggle(
          "on",
          continuousMode
        );

      $("#voiceMode")
        .textContent =
        continuousMode
          ? "HANDS-FREE • LISTENING"
          : "PUSH TO TALK";

      queueSave();


      if(continuousMode){

        startListening();

        $("#transcript")
          .textContent =
          "Freisprechen aktiviert. Ich höre zu.";

      }else{

        stopListening();

        $("#transcript")
          .textContent =
          "Freisprechen deaktiviert.";

      }

    }
  );


/* =========================================================
   MUTE
========================================================= */

$("#muteBtn")
  .addEventListener(
    "click",
    ()=>{

      muted =
        !muted;

      state.settings.speak =
        !muted;

      $("#muteBtn")
        .classList
        .toggle(
          "active",
          muted
        );

      $("#swSpeak")
        .classList
        .toggle(
          "on",
          !muted
        );

      queueSave();

      if(muted){

        window.speechSynthesis
          ?.cancel();

      }

    }
  );


/* =========================================================
   SETTINGS
========================================================= */

$("#swContinuous")
  .addEventListener(
    "click",
    function(){

      continuousMode =
        !continuousMode;

      this.classList
        .toggle(
          "on",
          continuousMode
        );

      $("#continuousToggle")
        .classList
        .toggle(
          "active",
          continuousMode
        );

      state.settings.continuous =
        continuousMode;

      $("#voiceMode")
        .textContent =
        continuousMode
          ? "HANDS-FREE • LISTENING"
          : "PUSH TO TALK";

      queueSave();

      if(continuousMode){

        startListening();

      }else{

        stopListening();

      }

    }
  );


$("#swSpeak")
  .addEventListener(
    "click",
    function(){

      const enabled =
        this.classList
          .toggle("on");

      state.settings.speak =
        this.classList.contains("on");

      muted =
        !state.settings.speak;

      $("#muteBtn")
        .classList
        .toggle(
          "active",
          muted
        );

      queueSave();

    }
  );


$("#swAppControl")
  .addEventListener(
    "click",
    function(){

      this.classList
        .toggle("on");

      state.settings.appControl =
        this.classList.contains("on");

      queueSave();

    }
  );


$("#swAppConfirm")
  .addEventListener(
    "click",
    function(){

      this.classList
        .toggle("on");

      state.settings.appConfirm =
        this.classList.contains("on");

      queueSave();

    }
  );


$("#saveAiBackend")
  .addEventListener(
    "click",
    ()=>{

      state.settings.aiBackend =
        $("#aiBackendInput")
          .value
          .trim()
          .replace(/\/$/,"");

      localStorage.setItem(
        "jarvis_backend",
        state.settings.aiBackend
      );

      queueSave();

      pushActivity(
        "AI backend saved."
      );

      speak(
        state.settings.aiBackend
          ? "KI-Backend gespeichert."
          : "KI-Backend entfernt."
      );

    }
  );


/* =========================================================
   APPLY SETTINGS
========================================================= */

function applySettingsToUI(){

  continuousMode =
    !!state.settings.continuous;

  muted =
    state.settings.speak === false;

  $("#swContinuous")
    .classList
    .toggle(
      "on",
      continuousMode
    );

  $("#swSpeak")
    .classList
    .toggle(
      "on",
      !muted
    );

  $("#swAppControl")
    .classList
    .toggle(
      "on",
      !!state.settings.appControl
    );

  $("#swAppConfirm")
    .classList
    .toggle(
      "on",
      state.settings.appConfirm !== false
    );

  $("#continuousToggle")
    .classList
    .toggle(
      "active",
      continuousMode
    );

  $("#muteBtn")
    .classList
    .toggle(
      "active",
      muted
    );

  $("#voiceMode")
    .textContent =
    continuousMode
      ? "HANDS-FREE • LISTENING"
      : "PUSH TO TALK";

  $("#aiBackendInput")
    .value =
    state.settings.aiBackend || "";

}


/* =========================================================
   START
========================================================= */

localLoad();

applySettingsToUI();

renderNotes();

renderTasks();

updateStats();

setupRecognition();


setTimeout(
  ()=>{
    $("#boot")
      .style
      .opacity = "0";

    setTimeout(
      ()=>{
        $("#boot")
          ?.remove();
      },
      650
    );

  },
  900
);

})();

</script>

</body>
</html>
