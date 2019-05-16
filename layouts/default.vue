<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  /* margin: 0; */
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

code {
  font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace;
  font-size: 13.5px;
}

.content code {
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.85em;
  background-color: rgba(27,31,35,0.05);
  border-radius: 3px;
}
.content pre,
.content pre[class*="hljs"] {
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: 0.85rem 0;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
}
.content pre code,
.content pre[class*="hljs true"] code {
  color: #fff;
  padding: 0;
  background-color: transparent;
  border-radius: 0;
}
div[class*="hljs true"] {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
}
div[class*="hljs true"] .highlight-lines {
  user-select: none;
  padding-top: 1.3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.4;
}
div[class*="hljs true"] .highlight-lines .highlighted {
  background-color: rgba(0,0,0,0.66);
}
div[class*="hljs true"] pre,
div[class*="hljs true"] pre[class*="hljs true"] {
  background: transparent;
  position: relative;
  z-index: 1;
}
div[class*="hljs true"]::before {
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 1em;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
}
div[class*="hljs true"]:not(.line-numbers-mode) .line-numbers-wrapper {
  display: none;
}
div[class*="hljs true"].line-numbers-mode .highlight-lines .highlighted {
  position: relative;
}
div[class*="hljs true"].line-numbers-mode .highlight-lines .highlighted:before {
  content: ' ';
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  display: block;
  width: 3.5rem;
  height: 100%;
  background-color: rgba(0,0,0,0.66);
}
div[class*="hljs true"].line-numbers-mode pre {
  padding-left: 4.5rem;
  vertical-align: middle;
}
div[class*="hljs true"].line-numbers-mode .line-numbers-wrapper {
  position: absolute;
  top: 0;
  width: 3.5rem;
  text-align: center;
  color: rgba(255,255,255,0.3);
  padding: 1.25rem 0;
  line-height: 1.4;
}
div[class*="hljs true"].line-numbers-mode .line-numbers-wrapper br {
  user-select: none;
}
div[class*="hljs true"].line-numbers-mode .line-numbers-wrapper .line-number {
  position: relative;
  z-index: 4;
  user-select: none;
  font-size: 0.85em;
}
div[class*="hljs true"].line-numbers-mode::after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 3.5rem;
  height: 100%;
  border-radius: 6px 0 0 6px;
  border-right: 1px solid rgba(0,0,0,0.66);
  background-color: #282c34;
}
div[class~="hljs truejs"]:before {
  content: 'js';
}
div[class~="hljs truets"]:before {
  content: 'ts';
}
div[class~="hljs truehtml"]:before {
  content: 'html';
}
div[class~="hljs truemd"]:before {
  content: 'md';
}
div[class~="hljs truevue"]:before {
  content: 'vue';
}
div[class~="hljs truecss"]:before {
  content: 'css';
}
div[class~="hljs truesass"]:before {
  content: 'sass';
}
div[class~="hljs truescss"]:before {
  content: 'scss';
}
div[class~="hljs trueless"]:before {
  content: 'less';
}
div[class~="hljs truestylus"]:before {
  content: 'stylus';
}
div[class~="hljs truego"]:before {
  content: 'go';
}
div[class~="hljs truejava"]:before {
  content: 'java';
}
div[class~="hljs truec"]:before {
  content: 'c';
}
div[class~="hljs truesh"]:before {
  content: 'sh';
}
div[class~="hljs trueyaml"]:before {
  content: 'yaml';
}
div[class~="hljs truepy"]:before {
  content: 'py';
}
div[class~="hljs truejs"]:before {
  content: "js";
}
div[class~="hljs truetypescript"]:before {
  content: "ts";
}
div[class~="hljs truemarkup"]:before {
  content: "html";
}
div[class~="hljs truemarkdown"]:before {
  content: "md";
}
div[class~="hljs truejson"]:before {
  content: "json";
}
div[class~="hljs trueruby"]:before {
  content: "rb";
}
div[class~="hljs truepython"]:before {
  content: "py";
}
div[class~="hljs truebash"]:before {
  content: "sh";
}

.custom-block .custom-block-title {
  font-weight: 600;
  margin-bottom: -0.4rem;
}
.custom-block.tip,
.custom-block.warning,
.custom-block.danger {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
}
.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #42b983;
}
.custom-block.warning {
  background-color: rgba(255,229,100,0.3);
  border-color: #e7c000;
  color: #6b5900;
}
.custom-block.warning .custom-block-title {
  color: #b29400;
}
.custom-block.warning a {
  color: #2c3e50;
}
.custom-block.danger {
  background-color: #ffe6e6;
  border-color: #c00;
  color: #4d0000;
}
.custom-block.danger .custom-block-title {
  color: #900;
}
.custom-block.danger a {
  color: #2c3e50;
}

</style>
