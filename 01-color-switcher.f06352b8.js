!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},n=null;t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,t.stopBtn.disabled=!0})),t.startBtn.addEventListener("click",(function(){n=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.startBtn.disabled=!0,t.stopBtn.disabled=!1}),1e3)}))}();
//# sourceMappingURL=01-color-switcher.f06352b8.js.map