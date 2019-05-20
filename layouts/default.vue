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

body {
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-top: 0px;
}

a{
   word-break: break-all;
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
<style lang="stylus">
// colors
$accentColor = #1565C0
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

// code
$lineNumbersWrapperWidth = 3.5rem
$codeLang = js ts html md vue css sass scss less stylus go java c sh yaml py

a
  font-weight 500
  color $accentColor
  text-decoration none

h1, h2, h3, h4, h5, h6
  font-weight 600
  line-height 1.25
  .content:not(.custom) > &
    margin-top (0.5rem - $navbarHeight)
    padding-top ($navbarHeight + 1rem)
    margin-bottom 0
    &:first-child
      margin-top -1.5rem
      margin-bottom 1rem
      + p, + pre, + .custom-block
        margin-top 2rem
  &:hover .header-anchor
    opacity: 1

p
  code
    color lighten($textColor, 20%)
    padding 0.25rem 0.5rem
    margin 0
    font-size 0.85em
    background-color rgba(27,31,35,0.05)
    border-radius 3px

.content
  pre, pre[class*="language-"]
    line-height 1.4
    padding 1.25rem 1.5rem
    margin 0.85rem 0
    background-color $codeBgColor
    border-radius 6px
    overflow auto
    code
      color #fff
      padding 0
      background-color transparent
      border-radius 0

div[class*="language-"]
  color #d3d3d3
  position relative
  background-color $codeBgColor
  border-radius 6px
  .highlight-lines
    user-select none
    padding-top 1.3rem
    position absolute
    top 0
    left 0
    width 100%
    line-height 1.4
    .highlighted
      background-color rgba(0, 0, 0, 66%)
  pre, pre[class*="language-"]
    overflow-x: auto;
    line-height: 1.2;
    padding: 1rem 1rem;
    background transparent
    position relative
    z-index 1
  &::before
    position absolute
    z-index 3
    top 0.8em
    right 1em
    font-size 0.75rem
    color rgba(255, 255, 255, 0.4)
  &:not(.line-numbers-mode)
    .line-numbers-wrapper
      display none
  &.line-numbers-mode
    .highlight-lines .highlighted
        position relative
        &:before
          content ' '
          position absolute
          z-index 3
          left 0
          top 0
          display block
          width $lineNumbersWrapperWidth
          height 100%
          background-color rgba(0, 0, 0, 66%)
    pre
      padding-left $lineNumbersWrapperWidth + 1 rem
      vertical-align middle
    .line-numbers-wrapper
      position absolute
      top 0
      width $lineNumbersWrapperWidth
      text-align center
      color rgba(255, 255, 255, 0.3)
      padding 1.25rem 0
      line-height 1.4
      br
        user-select none
      .line-number
        position relative
        z-index 4
        user-select none
        font-size 0.85em
    &::after
      content ''
      position absolute
      z-index 2
      top 0
      left 0
      width $lineNumbersWrapperWidth
      height 100%
      border-radius 6px 0 0 6px
      border-right 1px solid rgba(0, 0, 0, 66%)
      background-color $codeBgColor


for lang in $codeLang
  div{'[class~="language-' + lang + '"]'}
    &:before
      content ('' + lang)

div[class~="language-javascript"]
  &:before
    content "js"

div[class~="language-typescript"]
  &:before
    content "ts"

div[class~="language-markup"]
  &:before
    content "html"

div[class~="language-markdown"]
  &:before
    content "md"

div[class~="language-json"]:before
  content "json"

div[class~="language-ruby"]:before
  content "rb"

div[class~="language-python"]:before
  content "py"

div[class~="language-bash"]:before
  content "sh"
</style>