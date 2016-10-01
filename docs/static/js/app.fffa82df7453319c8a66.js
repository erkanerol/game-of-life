webpackJsonp([2,0],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(25),o=i(r),u=n(70),a=i(u);new o["default"]({el:"#app",render:function(t){return t(a["default"])}})},26:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.neighbors=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]},27:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;var r=n(32),o=i(r),u=n(34),a=i(u),s=n(35),d=i(s),l=n(26);e.Game=function(){function t(e,n){(0,a["default"])(this,t),this.row=e,this.column=n,this.matrix=new Array(e);for(var i=0;i<this.row;i++){this.matrix[i]=new Array(n);for(var r=0;r<this.column;++r)this.matrix[i][r]=0}}return(0,d["default"])(t,[{key:"next",value:function(){for(var t=new Array(this.row),e=0;e<this.row;e++){t[e]=new Array(this.column);for(var n=0;n<this.column;++n)t[e][n]=this.getNextValueOfCell(e,n)}return t}},{key:"getNumberOfLiveNeighbours",value:function(t,e){var n=0,i=!0,r=!1,u=void 0;try{for(var a,s=(0,o["default"])(l.neighbors);!(i=(a=s.next()).done);i=!0){var d=a.value;t+d[0]>=0&&t+d[0]<this.row&&e+d[1]>=0&&e+d[1]<this.column&&(n+=this.matrix[t+d[0]][e+d[1]])}}catch(c){r=!0,u=c}finally{try{!i&&s["return"]&&s["return"]()}finally{if(r)throw u}}return n}},{key:"getNextValueOfCell",value:function(t,e){var n=this.getNumberOfLiveNeighbours(t,e);if(0===this.matrix[t][e]){if(3===n)return 1}else{if(n<2)return 0;if(n>3)return 0}return this.matrix[t][e]}},{key:"addColumn",value:function(){for(var t=0;t<this.row;++t)this.matrix[t].push(0);return this.column++,this.matrix}},{key:"addRow",value:function(){for(var t=new Array(this.column),e=0;e<this.column;++e)t[e]=0;return this.matrix.push(t),this.row++,this.matrix}},{key:"deleteColumn",value:function(){for(var t=0;t<this.row;++t)this.matrix[t].pop();return this.column--,this.matrix}},{key:"deleteRow",value:function(){return this.matrix.pop(),this.row--,this.matrix}}]),t}()},28:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(73),o=i(r),u=n(72),a=i(u),s=n(71),d=i(s);e["default"]={components:{MyTitle:o["default"],MyFooter:a["default"],GameBoard:d["default"]}}},29:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),o=n(25),u=i(o);e["default"]={data:function(){return{msg:"Game Board",game:new r.Game(5,5),isPlaying:!1}},methods:{myclick:function(t,e){u["default"].set(this.game.matrix[t],e,1-this.game.matrix[t][e])},next:function(){u["default"].set(this.game,"matrix",this.game.next())},addColumn:function(){this.game.addColumn()},addRow:function(){this.game.addRow()},deleteColumn:function(){this.game.deleteColumn()},deleteRow:function(){this.game.deleteRow()},start:function(){this.isPlaying=!0,this.loop()},loop:function(){this.isPlaying&&(this.next(),setTimeout(this.loop,1e3))},stop:function(){this.isPlaying=!1}},name:"game-board"}},30:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{msg:"coded by ",user:"@erkanerol",blog:"https://erkanerol.github.io/"}},name:"my-footer"}},31:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{msg:"Conway's Game of Life Simulation"}},name:"my-title"}},66:function(t,e){},67:function(t,e){},68:function(t,e){},69:function(t,e){},70:function(t,e,n){var i,r;n(66),i=n(28);var o=n(74);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},71:function(t,e,n){var i,r;n(69),i=n(29);var o=n(77);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-4",t.exports=i},72:function(t,e,n){var i,r;n(67),i=n(30);var o=n(75);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-2",t.exports=i},73:function(t,e,n){var i,r;n(68),i=n(31);var o=n(76);r=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(r=i=i["default"]),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-3",t.exports=i},74:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_h("my-title")," ",_h("game-board")," ",_h("my-footer")])},staticRenderFns:[]}},75:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("p",[_s(msg)+" ",_h("a",{attrs:{href:blog}},[_s(user)])])])},staticRenderFns:[]}},76:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"mytitle"},[_h("h1",[_s(msg)])])},staticRenderFns:[]}},77:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("div",{staticClass:"game-panel"},[_l(game.matrix,function(t,e){return _h("div",{staticClass:"row"},[_l(t,function(t,n){return _h("div",{staticClass:"cell","class":{live:t,death:!t},on:{click:function(t){myclick(e,n)}}})})])})," ",_m(0)," ",_h("button",{attrs:{id:"next",disabled:isPlaying},on:{click:next}},["Next"])," ",_h("button",{attrs:{id:"start",disabled:isPlaying},on:{click:start}},["Start"])," ",_h("button",{attrs:{id:"stop",disabled:!isPlaying},on:{click:stop}},["Stop"])," ",_m(1),_m(2)," ",_h("button",{attrs:{id:"deleteColumn",disabled:isPlaying},on:{click:deleteColumn}},["-"])," ",_m(3)," ",_h("button",{attrs:{id:"addColumn",disabled:isPlaying},on:{click:addColumn}},["+"])," ",_m(4),_m(5)," ",_h("button",{attrs:{id:"deleteRow",disabled:isPlaying},on:{click:deleteRow}},["-"])," ",_m(6)," ",_h("button",{attrs:{id:"addRow",disabled:isPlaying},on:{click:addRow}},["+"])])])},staticRenderFns:[function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("p",["Column"])},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("p",["Row"])}]}}});
//# sourceMappingURL=app.fffa82df7453319c8a66.js.map