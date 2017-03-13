!function(a){"use strict";function c(a,c){b.types.set(a,c)}function h(a){return new e("GenericParam",a)}function i(a){if(null==a)return[];var b="function"==typeof a[d.reflection]?a[d.reflection]().properties||[]:a;return Object.getOwnPropertyNames(b)}function j(a,b){for(var c=a.length,d=Array(c>b?c-b:0),e=b;e<c;e++)d[e-b]=a[e];return d}function k(a){return null!=a&&"function"==typeof a.ToString?a.ToString():String(a)}function l(a,b){if(a===b)return!0;if(null==a)return null==b;if(null==b)return!1;if(Object.getPrototypeOf(a)!==Object.getPrototypeOf(b))return!1;if("function"==typeof a.Equals)return a.Equals(b);if(Array.isArray(a)){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(!l(a[c],b[c]))return!1;return!0}if(ArrayBuffer.isView(a)){if(a.byteLength!==b.byteLength)return!1;for(var d=new DataView(a.buffer),e=new DataView(b.buffer),c=0;c<a.byteLength;c++)if(d.getUint8(c)!==e.getUint8(c))return!1;return!0}return a instanceof Date&&a.getTime()==b.getTime()}function m(a,b){if(a===b)return 0;if(null==a)return null==b?0:-1;if(null==b)return 1;if(Object.getPrototypeOf(a)!==Object.getPrototypeOf(b))return-1;if("function"==typeof a.CompareTo)return a.CompareTo(b);if(Array.isArray(a)){if(a.length!=b.length)return a.length<b.length?-1:1;for(var c=0,d=0;c<a.length;c++)if(0!==(d=m(a[c],b[c])))return d;return 0}if(ArrayBuffer.isView(a)){if(a.byteLength!=b.byteLength)return a.byteLength<b.byteLength?-1:1;for(var e=new DataView(a.buffer),f=new DataView(b.buffer),c=0,g=0,h=0;c<a.byteLength;c++){if(g=e.getUint8(c),h=f.getUint8(c),g<h)return-1;if(g>h)return 1}return 0}return a instanceof Date?m(a.getTime(),b.getTime()):a<b?-1:1}function n(a,b){if(a===b)return!0;for(var c=i(a),d=0;d<c.length;d++)if(!l(a[c[d]],b[c[d]]))return!1;return!0}function o(a,b){if(a===b)return 0;for(var c=i(a),d=0;d<c.length;d++){var e=m(a[c[d]],b[c[d]]);if(0!==e)return e}return 0}function p(a,b){if(a===b)return!0;if(a.Case!==b.Case)return!1;for(var c=0;c<a.Fields.length;c++)if(!l(a.Fields[c],b.Fields[c]))return!1;return!0}function q(a,b){if(a===b)return 0;var c=m(a.Case,b.Case);if(0!==c)return c;for(var d=0;d<a.Fields.length;d++)if(c=m(a.Fields[d],b.Fields[d]),0!==c)return c;return 0}function r(a,b,c){return null==a?b:null!=c?c(a):a}function s(a,b){var c="g";return c+=1&b?"i":"",c+=2&b?"m":"",new RegExp(a,c)}function t(a){return a.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function v(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function x(a,b,c){var d={token:function(c,d){return b(c)(d)},startState:function(){return new w({contents:c})},copyState:function(b){return{contents:b.contents}}};CodeMirror.defineMode(a,function(a,b){return d})}function y(a){return a===!1?null:a===!0?a:null}function z(a){var b=a;return null==b?null:a}function A(a,b){var c=z(b);return null==c?null:a}function B(a,b){var c=y(b);return null==c?null:a}function C(a){var b=a.eatSpace();return function(b){return B(a,b)}(b)}function D(a,b){var c=b.match(s(a),!0,!1);return function(a){return A(b,a)}(c)}function E(a){return a.skipToEnd(),a}function F(a,b){var c=void 0,d=C(a);if(null!=d)c="var2";else{var e=function(){var a="ADDI|ADDIU|ANDI|ORI|XORI|BEQ|BGEZAL|BGEZ|BGTZ|BLEZ|BLTZAL|BLTZ|BNE|LB|LBU|LH|LWL|LW|LWR|SB|SH|SW|LUI|SLTI|SLTIU|JAL|J|ADDU|ADD|AND|OR|SRAV|SRA|SRLV|SRL|SLLV|SLL|SUBU|SUB|XOR|SLTU|SLT|DIVU|DIV|MULTU|MULT|JR|JALR|MFHI|MFLO|MTHI|MTLO";return function(b){return D(a,b)}}()(a);if(null!=e)c="keyword";else{var f=function(){var a="^[a-zA-Z][a-zA-Z0-9]*";return function(b){return D(a,b)}}()(a);if(null!=f)c="atom";else{var g=void 0,h=function(){var a="^#";return function(b){return D(a,b)}}()(a);if(null!=h){var i=E(h);g=null!=i?[0,i]:[1]}else g=[1];switch(g[0]){case 0:c="comment";break;case 1:var j=function(){var a="^[0-9][0-9]*";return function(b){return D(a,b)}}()(a);if(null!=j)c="number";else{var k=function(){var a="^.";return function(b){return D(a,b)}}()(a);c=null!=k?"keyword":null}}}}}return c}function H(a){return document.getElementById(a)}function L(a){return a&&a instanceof I}function M(a,b){void 0===b&&(b=!1);var c,d,e;return b?(a>>>=0,(e=0<=a&&a<256)&&(d=K[a])?d:(c=O(a,(0|a)<0?-1:0,!0),e&&(K[a]=c),c)):(a|=0,(e=-128<=a&&a<128)&&(d=J[a])?d:(c=O(a,a<0?-1:0,!1),e&&(J[a]=c),c))}function N(a,b){if(void 0===b&&(b=!1),isNaN(a)||!isFinite(a))return b?Z:Y;if(b){if(a<0)return Z;if(a>=V)return ca}else{if(a<=-W)return da;if(a+1>=W)return ba}return a<0?N(-a,b).neg():O(a%U|0,a/U|0,b)}function O(a,b,c){return new I(a,b,c)}function Q(a,b,c){if(void 0===b&&(b=!1),void 0===c&&(c=10),0===a.length)throw Error("empty string");if("NaN"===a||"Infinity"===a||"+Infinity"===a||"-Infinity"===a)return Y;if("number"==typeof b?(c=b,b=!1):b=!!b,c=c||10,c<2||36<c)throw RangeError("radix");var d=a.indexOf("-");if(d>0)throw Error("interior hyphen");if(0===d)return Q(a.substring(1),b,c).neg();for(var e=N(P(c,8)),f=Y,g=0;g<a.length;g+=8){var h=Math.min(8,a.length-g),i=parseInt(a.substring(g,g+h),c);if(h<8){var j=N(P(c,h));f=f.mul(j).add(N(i))}else f=f.mul(e),f=f.add(N(i))}return f.unsigned=b,f}function R(a){return a instanceof I?a:"number"==typeof a?N(a):"string"==typeof a?Q(a):O(a.low,a.high,a.unsigned)}function fa(a){return a<0?"ff"+(16777215-(Math.abs(a)-1)).toString(16):a.toString(16)}function ga(a){function e(a){return!(null===a||"object"!=typeof a||a instanceof Number||a instanceof String||a instanceof Boolean)}function f(a,b){return a.replace(ea,function(a,c,d,f,g,h){switch(h){case"f":case"F":b=b.toFixed(g||6);break;case"g":case"G":b=b.toPrecision(g);break;case"e":case"E":b=b.toExponential(g);break;case"O":b=k(b);break;case"A":try{b=JSON.stringify(b,function(a,b){return b&&b[Symbol.iterator]&&!Array.isArray(b)&&e(b)?Array.from(b):b&&"function"==typeof b.ToString?k(b):b})}catch(a){b="{"+Object.getOwnPropertyNames(b).map(function(a){return a+": "+String(b[a])}).join(", ")+"}"}break;case"x":b=fa(Number(b));break;case"X":b=fa(Number(b)).toUpperCase()}var i=d.indexOf("+")>=0&&parseInt(b)>=0;if(!isNaN(f=parseInt(f))){var j=f>=0&&d.indexOf("0")>=0?"0":" ";b=ha(b,Math.abs(f)-(i?1:0),j,f<0)}var l=c+(i?"+"+b:b);return l.replace(/%/g,"%%")})}function g(a){return function(b){var c=f(a,b);return ea.test(c)?g(c):d(c.replace(/%%/g,"%"))}}for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];var d;if(0===b.length)return function(b){return d=b,ea.test(a)?g(a):d(a)};for(var h=0;h<b.length;h++)a=f(a,b[h]);return a.replace(/%%/g,"%")}function ha(a,b,c,d){c=c||" ",a=String(a),b-=a.length;for(var e=-1;++e<b;)a=d?a+c:c+a;return a}function ia(a,b,c,d){if(c="number"==typeof c?c:null,d="number"==typeof d?d:null,c<0)throw new Error("Count cannot be less than zero");if(0===c)return[];b=Array.isArray(b)?b:j(arguments,1),b=b.map(function(a){return t(a)}),b=b.length>0?b:[" "];for(var e,f=0,g=[],h=new RegExp(b.join("|"),"g");(null==c||c>1)&&null!==(e=h.exec(a));)(!d||e.index-f>0)&&(c=null!=c?c-1:c,g.push(a.substring(f,e.index))),f=h.lastIndex;return(!d||a.length-f>0)&&g.push(a.substring(f)),g}function ja(a){return ia(a," ",",","\t","\n","\r","\f").filter(function(){var a="";return function(b){return a!==b}}())}function ka(a,b){for(var c=b||new la,d=a.length-1;d>=0;d--)c=new la(a[d],c);return c}function oa(a,b,c){var d=ua(function(a){return 0!=a},ta(function(b,c){return a(b,c)},b,c));return null!=d?d:ra(b)-ra(c)}function pa(a){return b={},b[Symbol.iterator]=function(){return a()[Symbol.iterator]()},b;var b}function qa(a,b,c){if(Array.isArray(c)||ArrayBuffer.isView(c))return c.reduce(a,b);for(var d=void 0,e=0,f=c[Symbol.iterator]();d=f.next(),!d.done;e++)b=a(b,d.value,e);return b}function ra(a){return Array.isArray(a)||ArrayBuffer.isView(a)?a.length:qa(function(a,b){return a+1},0,a)}function sa(a,b){return pa(function(){return va(function(b){var c=b.next();return c.done?null:[a(c.value),b]},b[Symbol.iterator]())})}function ta(a,b,c){return pa(function(){var d=b[Symbol.iterator](),e=c[Symbol.iterator]();return va(function(){var b=d.next(),c=e.next();return b.done||c.done?null:[a(b.value,c.value),null]})})}function ua(a,b,c){for(var d=0,e=b[Symbol.iterator]();;d++){var f=e.next();if(f.done)return void 0===c?null:c;if(a(f.value,d))return f.value}}function va(a,b){return c={},c[Symbol.iterator]=function(){return{next:function(){var c=a(b);return null!=c?(b=c[1],{done:!1,value:c[0]}):{done:!0}}}},c;var c}function xa(a,b){return"MapOne"===b.Case?a+1:"MapNode"===b.Case?xa(xa(a+1,b.Fields[2]),b.Fields[3]):a}function ya(a){return xa(0,a)}function za(){return new wa("MapEmpty",[])}function Aa(a){return"MapOne"===a.Case?1:"MapNode"===a.Case?a.Fields[4]:0}function Ba(a,b,c,d){var e=[a,d],f=function(){var e=Aa(a),f=Aa(d),g=e<f?f:e;return new wa("MapNode",[b,c,a,d,g+1])};return"MapEmpty"===e[0].Case&&"MapEmpty"===e[1].Case?new wa("MapOne",[b,c]):f()}function Ca(a,b,c,d){var e=Aa(a),f=Aa(d);if(f>e+2){if("MapNode"===d.Case){if(Aa(d.Fields[2])>e+1){if("MapNode"===d.Fields[2].Case)return Ba(Ba(a,b,c,d.Fields[2].Fields[2]),d.Fields[2].Fields[0],d.Fields[2].Fields[1],Ba(d.Fields[2].Fields[3],d.Fields[0],d.Fields[1],d.Fields[3]));throw new Error("rebalance")}return Ba(Ba(a,b,c,d.Fields[2]),d.Fields[0],d.Fields[1],d.Fields[3])}throw new Error("rebalance")}if(e>f+2){if("MapNode"===a.Case){if(Aa(a.Fields[3])>f+1){if("MapNode"===a.Fields[3].Case)return Ba(Ba(a.Fields[2],a.Fields[0],a.Fields[1],a.Fields[3].Fields[2]),a.Fields[3].Fields[0],a.Fields[3].Fields[1],Ba(a.Fields[3].Fields[3],b,c,d));throw new Error("rebalance")}return Ba(a.Fields[2],a.Fields[0],a.Fields[1],Ba(a.Fields[3],b,c,d))}throw new Error("rebalance")}return Ba(a,b,c,d)}function Da(a,b,c,d){if("MapOne"===d.Case){var e=a.Compare(b,d.Fields[0]);return e<0?new wa("MapNode",[b,c,new wa("MapEmpty",[]),d,2]):0===e?new wa("MapOne",[b,c]):new wa("MapNode",[b,c,d,new wa("MapEmpty",[]),2])}if("MapNode"===d.Case){var e=a.Compare(b,d.Fields[0]);return e<0?Ca(Da(a,b,c,d.Fields[2]),d.Fields[0],d.Fields[1],d.Fields[3]):0===e?new wa("MapNode",[b,c,d.Fields[2],d.Fields[3],d.Fields[4]]):Ca(d.Fields[2],d.Fields[0],d.Fields[1],Da(a,b,c,d.Fields[3]))}return new wa("MapOne",[b,c])}function Ea(a,b,c){var d=Fa(a,b,c);if(null!=d)return d;throw new Error("key not found")}function Fa(a,b,c){if("MapOne"===c.Case){var d=a.Compare(b,c.Fields[0]);return 0===d?c.Fields[1]:null}if("MapNode"===c.Case){var d=a.Compare(b,c.Fields[0]);return d<0?Fa(a,b,c.Fields[2]):0===d?c.Fields[1]:Fa(a,b,c.Fields[3])}return null}function Ga(a,b,c){if("MapOne"===c.Case)return 0===a.Compare(b,c.Fields[0]);if("MapNode"===c.Case){var d=a.Compare(b,c.Fields[0]);return d<0?Ga(a,b,c.Fields[2]):0===d||Ga(a,b,c.Fields[3])}return!1}function Ha(a,b,c){for(var d=c.next();!d.done;)b=Da(a,d.value[0],d.value[1],b),d=c.next();return b}function Ia(a,b){var c=b[Symbol.iterator]();return Ha(a,za(),c)}function Ja(a){return null!=a.tail?"MapOne"===a.head.Case?a:Ja("MapNode"===a.head.Case?ka([a.head.Fields[2],new wa("MapOne",[a.head.Fields[0],a.head.Fields[1]]),a.head.Fields[3]],a.tail):a.tail):new la}function Ka(a){return{stack:Ja(new la(a,new la)),started:!1}}function La(a){function b(a){if(null==a.stack.tail)return null;if("MapOne"===a.stack.head.Case)return[a.stack.head.Fields[0],a.stack.head.Fields[1]];throw new Error("Please report error: Map iterator, unexpected stack for current")}if(a.started){if(null==a.stack.tail)return{done:!0,value:null};if("MapOne"===a.stack.head.Case)return a.stack=Ja(a.stack.tail),{done:null==a.stack.tail,value:b(a)};throw new Error("Please report error: Map iterator, unexpected stack for moveNext")}return a.started=!0,{done:null==a.stack.tail,value:b(a)}}function Na(a,b){var c=new Ma;return c.tree=b,c.comparer=a||new ma,c}function Oa(a,b){return b=b||new ma,Na(b,a?Ia(b,a):za())}function Pa(a,b){return Ea(b.comparer,a,b.tree)}function Ra(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function Va(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function Xa(a){var b=Pa(a[0],Ta.IMap),c=new Sa.Register("Register",[Number.parseInt(a[1])]),d=new Sa.Register("Register",[Number.parseInt(a[2])]),e=new Sa.Half("Half",[Number.parseInt(a[3])]);return new Ta.I_type(b,c,d,e)}function Ya(a){var b=Pa(a[0],Ta.JMap),c=new Ta.Targetval("Targetval",[Number.parseInt(a[1])]);return new Ta.J_type(b,c)}function Za(a){var b=Pa(a[0],Ta.RMap),c=new Sa.Register("Register",[Number.parseInt(a[1])]),d=new Sa.Register("Register",[Number.parseInt(a[2])]),e=new Sa.Register("Register",[Number.parseInt(a[3])]),f=new Ta.Shiftval("Shiftval",[Number.parseInt(a[4])]);return new Ta.R_type(b,c,d,e,f)}function $a(a){if(Ta.IMap.has(a[0]))return new Ta.Instruction("I",[Xa(a)]);if(Ta.JMap.has(a[0]))return new Ta.Instruction("J",[Ya(a)]);if(Ta.RMap.has(a[0]))return new Ta.Instruction("R",[Za(a)]);throw new Error("Invalid Opcode: Does not exist in MIPS I!")}function ab(a,b){_a.save(a,b)}function bb(a){return _a.load(a)}function zb(a,b){a.innerHTML=b}function Ab(){var a=function(b){var c=db.getLine(b),d=ja(c);""!==c&&ga("Instr: %A")(function(a){console.log(a)})($a(d))},b=function b(c){return function(d){c===d?a(d):(a(c),b(c+1)(d))}};b(0)(db.lastLine())}function Bb(){return"0"}function Cb(){zb(mb,"0"),zb(nb,"0"),zb(ob,"0"),zb(pb,"0"),zb(qb,"0"),zb(rb,"0"),zb(sb,"0"),zb(tb,"0"),zb(ub,"0"),zb(vb,"0"),zb(wb,"0"),zb(xb,"0"),zb(yb,"0")}function Db(){return"2"}function Eb(){return"3"}var b=function(){var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};return"undefined"==typeof a.__FABLE_CORE__&&(a.__FABLE_CORE__={types:new Map,symbols:{reflection:Symbol("reflection")}}),a.__FABLE_CORE__}(),d=b.symbols,e=function(){function a(a,b,c){this.kind=a,this.definition=b,this.generics=c}return a.prototype.Equals=function(a){return this.kind===a.kind&&this.definition===a.definition&&("object"==typeof this.generics?n(this.generics,a.generics):this.generics===a.generics)},a}(),u=(new e("Any"),new e("Unit"),function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}()),w=function(){function a(b){v(this,a),this.State=b}return u(a,[{key:d.reflection,value:function(){return{type:"App.CodeMirrorInterface.CodeMirrorState",interfaces:["FSharpRecord","System.IEquatable","System.IComparable"],properties:{State:h("T")}}}},{key:"Equals",value:function(a){return n(this,a)}},{key:"CompareTo",value:function(a){return o(this,a)}}]),a}();c("App.CodeMirrorInterface.CodeMirrorState",w),x("arm",function(a){return function(b){return F(a,b)}},0);var G={lineNumbers:!0,styleActiveLine:"true",matchBrackets:"true",mode:"arm",theme:"monokai"},I=function(){function a(a,b,c){this.eq=this.equals,this.neq=this.notEquals,this.lt=this.lessThan,this.lte=this.lessThanOrEqual,this.gt=this.greaterThan,this.gte=this.greaterThanOrEqual,this.comp=this.compare,this.neg=this.negate,this.abs=this.absolute,this.sub=this.subtract,this.mul=this.multiply,this.div=this.divide,this.mod=this.modulo,this.shl=this.shiftLeft,this.shr=this.shiftRight,this.shru=this.shiftRightUnsigned,this.Equals=this.equals,this.CompareTo=this.compare,this.ToString=this.toString,this.low=0|a,this.high=0|b,this.unsigned=!!c}return a.prototype.toInt=function(){return this.unsigned?this.low>>>0:this.low},a.prototype.toNumber=function(){return this.unsigned?(this.high>>>0)*U+(this.low>>>0):this.high*U+(this.low>>>0)},a.prototype.toString=function(a){if(void 0===a&&(a=10),a=a||10,a<2||36<a)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(da)){var b=N(a),c=this.div(b),d=c.mul(b).sub(this);return c.toString(a)+d.toInt().toString(a)}return"-"+this.neg().toString(a)}for(var e=N(P(a,6),this.unsigned),f=this,g="";;){var h=f.div(e),i=f.sub(h.mul(e)).toInt()>>>0,j=i.toString(a);if(f=h,f.isZero())return j+g;for(;j.length<6;)j="0"+j;g=""+j+g}},a.prototype.getHighBits=function(){return this.high},a.prototype.getHighBitsUnsigned=function(){return this.high>>>0},a.prototype.getLowBits=function(){return this.low},a.prototype.getLowBitsUnsigned=function(){return this.low>>>0},a.prototype.getNumBitsAbs=function(){if(this.isNegative())return this.eq(da)?64:this.neg().getNumBitsAbs();for(var a=0!=this.high?this.high:this.low,b=31;b>0&&0==(a&1<<b);b--);return 0!=this.high?b+33:b+1},a.prototype.isZero=function(){return 0===this.high&&0===this.low},a.prototype.isNegative=function(){return!this.unsigned&&this.high<0},a.prototype.isPositive=function(){return this.unsigned||this.high>=0},a.prototype.isOdd=function(){return 1===(1&this.low)},a.prototype.isEven=function(){return 0===(1&this.low)},a.prototype.equals=function(a){return L(a)||(a=R(a)),(this.unsigned===a.unsigned||this.high>>>31!==1||a.high>>>31!==1)&&(this.high===a.high&&this.low===a.low)},a.prototype.notEquals=function(a){return!this.eq(a)},a.prototype.lessThan=function(a){return this.comp(a)<0},a.prototype.lessThanOrEqual=function(a){return this.comp(a)<=0},a.prototype.greaterThan=function(a){return this.comp(a)>0},a.prototype.greaterThanOrEqual=function(a){return this.comp(a)>=0},a.prototype.compare=function(a){if(L(a)||(a=R(a)),this.eq(a))return 0;var b=this.isNegative(),c=a.isNegative();return b&&!c?-1:!b&&c?1:this.unsigned?a.high>>>0>this.high>>>0||a.high===this.high&&a.low>>>0>this.low>>>0?-1:1:this.sub(a).isNegative()?-1:1},a.prototype.negate=function(){return!this.unsigned&&this.eq(da)?da:this.not().add($)},a.prototype.absolute=function(){return!this.unsigned&&this.isNegative()?this.negate():this},a.prototype.add=function(a){L(a)||(a=R(a));var b=this.high>>>16,c=65535&this.high,d=this.low>>>16,e=65535&this.low,f=a.high>>>16,g=65535&a.high,h=a.low>>>16,i=65535&a.low,j=0,k=0,l=0,m=0;return m+=e+i,l+=m>>>16,m&=65535,l+=d+h,k+=l>>>16,l&=65535,k+=c+g,j+=k>>>16,k&=65535,j+=b+f,j&=65535,O(l<<16|m,j<<16|k,this.unsigned)},a.prototype.subtract=function(a){return L(a)||(a=R(a)),this.add(a.neg())},a.prototype.multiply=function(a){if(this.isZero())return Y;if(L(a)||(a=R(a)),a.isZero())return Y;if(this.eq(da))return a.isOdd()?da:Y;if(a.eq(da))return this.isOdd()?da:Y;if(this.isNegative())return a.isNegative()?this.neg().mul(a.neg()):this.neg().mul(a).neg();if(a.isNegative())return this.mul(a.neg()).neg();if(this.lt(X)&&a.lt(X))return N(this.toNumber()*a.toNumber(),this.unsigned);var b=this.high>>>16,c=65535&this.high,d=this.low>>>16,e=65535&this.low,f=a.high>>>16,g=65535&a.high,h=a.low>>>16,i=65535&a.low,j=0,k=0,l=0,m=0;return m+=e*i,l+=m>>>16,m&=65535,l+=d*i,k+=l>>>16,l&=65535,l+=e*h,k+=l>>>16,l&=65535,k+=c*i,j+=k>>>16,k&=65535,k+=d*h,j+=k>>>16,k&=65535,k+=e*g,j+=k>>>16,k&=65535,j+=b*i+c*h+d*g+e*f,j&=65535,O(l<<16|m,j<<16|k,this.unsigned)},a.prototype.divide=function(a){if(L(a)||(a=R(a)),a.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?Z:Y;var b=0,c=Y,d=Y;if(this.unsigned){if(a.unsigned||(a=a.toUnsigned()),a.gt(this))return Z;if(a.gt(this.shru(1)))return _;d=Z}else{if(this.eq(da)){if(a.eq($)||a.eq(aa))return da;if(a.eq(da))return $;var e=this.shr(1),f=e.div(a).shl(1);return f.eq(Y)?a.isNegative()?$:aa:(c=this.sub(a.mul(f)),d=f.add(c.div(a)))}if(a.eq(da))return this.unsigned?Z:Y;if(this.isNegative())return a.isNegative()?this.neg().div(a.neg()):this.neg().div(a).neg();if(a.isNegative())return this.div(a.neg()).neg();d=Y}for(c=this;c.gte(a);){b=Math.max(1,Math.floor(c.toNumber()/a.toNumber()));for(var g=Math.ceil(Math.log(b)/Math.LN2),h=g<=48?1:P(2,g-48),i=N(b),j=i.mul(a);j.isNegative()||j.gt(c);)b-=h,i=N(b,this.unsigned),j=i.mul(a);i.isZero()&&(i=$),d=d.add(i),c=c.sub(j)}return d},a.prototype.modulo=function(a){return L(a)||(a=R(a)),this.sub(this.div(a).mul(a))},a.prototype.not=function(){return O(~this.low,~this.high,this.unsigned)},a.prototype.and=function(a){return L(a)||(a=R(a)),O(this.low&a.low,this.high&a.high,this.unsigned)},a.prototype.or=function(a){return L(a)||(a=R(a)),O(this.low|a.low,this.high|a.high,this.unsigned)},a.prototype.xor=function(a){return L(a)||(a=R(a)),O(this.low^a.low,this.high^a.high,this.unsigned)},a.prototype.shiftLeft=function(a){return L(a)&&(a=a.toInt()),a&=63,0===a?this:a<32?O(this.low<<a,this.high<<a|this.low>>>32-a,this.unsigned):O(0,this.low<<a-32,this.unsigned)},a.prototype.shiftRight=function(a){return L(a)&&(a=a.toInt()),a&=63,0===a?this:a<32?O(this.low>>>a|this.high<<32-a,this.high>>a,this.unsigned):O(this.high>>a-32,this.high>=0?0:-1,this.unsigned)},a.prototype.shiftRightUnsigned=function(a){if(L(a)&&(a=a.toInt()),a&=63,0===a)return this;var b=this.high;if(a<32){var c=this.low;return O(c>>>a|b<<32-a,b>>>a,this.unsigned)}return 32===a?O(b,0,this.unsigned):O(b>>>a-32,0,this.unsigned)},a.prototype.toSigned=function(){return this.unsigned?O(this.low,this.high,!1):this},a.prototype.toUnsigned=function(){return this.unsigned?this:O(this.low,this.high,!0)},a.prototype.toBytes=function(a){return a?this.toBytesLE():this.toBytesBE()},a.prototype.toBytesLE=function(){var a=this.high,b=this.low;return[255&b,b>>>8&255,b>>>16&255,b>>>24&255,255&a,a>>>8&255,a>>>16&255,a>>>24&255]},a.prototype.toBytesBE=function(){var a=this.high,b=this.low;return[a>>>24&255,a>>>16&255,a>>>8&255,255&a,b>>>24&255,b>>>16&255,b>>>8&255,255&b]},a.prototype[d.reflection]=function(){return{type:"System.Int64",interfaces:["FSharpRecord","System.IComparable"],properties:{low:"number",high:"number",unsigned:"boolean"}}},a}(),J={},K={},P=Math.pow,S=65536,T=1<<24,U=S*S,V=U*U,W=V/2,X=M(T),Y=M(0),Z=M(0,!0),$=M(1),_=M(1,!0),aa=M(-1),ba=O(-1,2147483647,!1),ca=O(-1,-1,!0),da=O(0,-2147483648,!1),ea=/(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/,la=function(){function a(a,b){this.head=a,this.tail=b}return a.prototype.ToString=function(){return"["+Array.from(this).map(k).join("; ")+"]"},a.prototype.Equals=function(a){if(this===a)return!0;for(var b=this[Symbol.iterator](),c=a[Symbol.iterator]();;){var d=b.next(),e=c.next();if(d.done)return!!e.done;if(e.done)return!1;if(!l(d.value,e.value))return!1}},a.prototype.CompareTo=function(a){if(this===a)return 0;for(var b=0,c=this[Symbol.iterator](),d=a[Symbol.iterator]();;){var e=c.next(),f=d.next();if(e.done)return f.done?b:-1;if(f.done)return 1;if(b=m(e.value,f.value),0!=b)return b}},Object.defineProperty(a.prototype,"length",{get:function(){for(var a=this,b=0;null!=a.tail;)a=a.tail,b++;return b},enumerable:!0,configurable:!0}),a.prototype[Symbol.iterator]=function(){var a=this;return{next:function(){var b=a;return a=a.tail,{done:null==b.tail,value:b.head}}}},a.prototype[d.reflection]=function(){return{type:"Microsoft.FSharp.Collections.FSharpList",interfaces:["System.IEquatable","System.IComparable"]}},a}(),ma=function(){function a(a){this.Compare=a||m}return a.prototype[d.reflection]=function(){return{interfaces:["System.IComparer"]}},a}(),wa=(function(){function a(a){this.iter=a}return a.prototype.MoveNext=function(){var a=this.iter.next();return this.current=a.value,!a.done},Object.defineProperty(a.prototype,"Current",{get:function(){return this.current},enumerable:!0,configurable:!0}),a.prototype.Reset=function(){throw new Error("JS iterators cannot be reset")},a.prototype.Dispose=function(){},a}(),function(){function a(a,b){this.Case=a,this.Fields=b}return a}()),Ma=function(){function a(){}return a.prototype.ToString=function(){return"map ["+Array.from(this).map(k).join("; ")+"]"},a.prototype.Equals=function(a){return 0===this.CompareTo(a)},a.prototype.CompareTo=function(a){var b=this;return this===a?0:oa(function(a,c){var d=b.comparer.Compare(a[0],c[0]);return 0!==d?d:m(a[1],c[1])},this,a)},a.prototype[Symbol.iterator]=function(){var a=Ka(this.tree);return{next:function(){return La(a)}}},a.prototype.entries=function(){return this[Symbol.iterator]()},a.prototype.keys=function(){return sa(function(a){return a[0]},this)},a.prototype.values=function(){return sa(function(a){return a[1]},this)},a.prototype.get=function(a){return Ea(this.comparer,a,this.tree)},a.prototype.has=function(a){return Ga(this.comparer,a,this.tree)},a.prototype.set=function(a,b){throw new Error("not supported")},a.prototype.delete=function(a){throw new Error("not supported")},a.prototype.clear=function(){throw new Error("not supported")},Object.defineProperty(a.prototype,"size",{get:function(){return ya(this.tree)},enumerable:!0,configurable:!0}),a.prototype[d.reflection]=function(){return{type:"Microsoft.FSharp.Collections.FSharpMap",interfaces:["System.IEquatable","System.IComparable","System.Collections.Generic.IDictionary"]}},a}(),Qa=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),Sa=function(a){var b=a.Word=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Types.Word",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Word:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Types.Word",b);var e=a.Half=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Types.Half",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Half:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Types.Half",e);var f=a.Byte=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Types.Byte",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Byte:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Types.Byte",f);var g=a.Register=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Types.Register",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Register:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Types.Register",g);var h=a.Memory=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Types.Memory",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Memory:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();return c("VisualMIPS.Types.Memory",h),a}({}),Ta=function(a){var b=a.I_Opcode=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.I_Opcode",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{ADDI:[],ADDIU:[],ANDI:[],BEQ:[],BGEZ:[],BGEZAL:[],BGTZ:[],BLEZ:[],BLTZ:[],BLTZAL:[],BNE:[],LB:[],LBU:[],LH:[],LUI:[],LW:[],LWL:[],LWR:[],ORI:[],SB:[],SH:[],SLTI:[],SLTIU:[],SW:[],XORI:[]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Instructions.I_Opcode",b);var e=a.J_Opcode=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.J_Opcode",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{J:[],JAL:[]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Instructions.J_Opcode",e);var f=a.R_Opcode=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.R_Opcode",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{ADD:[],ADDU:[],AND:[],DIV:[],DIVU:[],JALR:[],JR:[],MFHI:[],MFLO:[],MTHI:[],MTLO:[],MULT:[],MULTU:[],OR:[],SLL:[],SLLV:[],SLT:[],SLTU:[],SRA:[],SRAV:[],SRL:[],SRLV:[],SUB:[],SUBU:[],XOR:[]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Instructions.R_Opcode",f);var j=(a.IMap=Oa(ka([["ADDI",new b("ADDI",[])],["ADDIU",new b("ADDIU",[])],["ANDI",new b("ANDI",[])],["ORI",new b("ORI",[])],["XORI",new b("XORI",[])],["BEQ",new b("BEQ",[])],["BGEZ",new b("BGEZ",[])],["BGEZAL",new b("BGEZAL",[])],["BGTZ",new b("BGTZ",[])],["BLEZ",new b("BLEZ",[])],["BLTZ",new b("BLTZ",[])],["BLTZAL",new b("BLTZAL",[])],["BNE",new b("BNE",[])],["LB",new b("LB",[])],["LBU",new b("LBU",[])],["LH",new b("LH",[])],["LW",new b("LW",[])],["LWL",new b("LWL",[])],["LWR",new b("LWR",[])],["SB",new b("SB",[])],["SH",new b("SH",[])],["SW",new b("SW",[])],["LUI",new b("LUI",[])],["SLTI",new b("SLTI",[])],["SLTIU",new b("SLTIU",[])]]),new ma(m)),a.JMap=Oa(ka([["J",new e("J",[])],["JAL",new e("JAL",[])]]),new ma(m)),a.RMap=Oa(ka([["ADD",new f("ADD",[])],["ADDU",new f("ADDU",[])],["AND",new f("AND",[])],["OR",new f("OR",[])],["SRA",new f("SRA",[])],["SRAV",new f("SRAV",[])],["SRL",new f("SRL",[])],["SRLV",new f("SRLV",[])],["SLL",new f("SLL",[])],["SLLV",new f("SLLV",[])],["SUB",new f("SUB",[])],["SUBU",new f("SUBU",[])],["XOR",new f("XOR",[])],["SLT",new f("SLT",[])],["SLTU",new f("SLTU",[])],["DIV",new f("DIV",[])],["DIVU",new f("DIVU",[])],["MULT",new f("MULT",[])],["MULTU",new f("MULTU",[])],["JR",new f("JR",[])],["JALR",new f("JALR",[])],["MFHI",new f("MFHI",[])],["MFLO",new f("MFLO",[])],["MTHI",new f("MTHI",[])],["MTLO",new f("MTLO",[])]]),new ma(m)),a.Shiftval=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.Shiftval",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Shiftval:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}());c("VisualMIPS.Instructions.Shiftval",j);var k=a.Targetval=function(){function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.Targetval",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{Targetval:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Instructions.Targetval",k);var l=a.I_type=function(){function a(b,c,d,e){Ra(this,a),this.opcode=b,this.r_s=c,this.r_t=d,this.immed=e}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.I_type",interfaces:["FSharpRecord","System.IEquatable","System.IComparable"],properties:{opcode:b,r_s:Sa.Register,r_t:Sa.Register,immed:Sa.Half}}}},{key:"Equals",value:function(a){return n(this,a)}},{key:"CompareTo",value:function(a){return o(this,a)}}]),a}();c("VisualMIPS.Instructions.I_type",l);var r=a.J_type=function(){function a(b,c){Ra(this,a),this.opcode=b,this.target=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.J_type",interfaces:["FSharpRecord","System.IEquatable","System.IComparable"],properties:{opcode:e,target:k}}}},{key:"Equals",value:function(a){return n(this,a)}},{key:"CompareTo",value:function(a){return o(this,a)}}]),a}();c("VisualMIPS.Instructions.J_type",r);var s=a.R_type=function(){function a(b,c,d,e,f){Ra(this,a),this.opcode=b,this.r_s=c,this.r_t=d,this.r_d=e,this.shift=f}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.R_type",interfaces:["FSharpRecord","System.IEquatable","System.IComparable"],properties:{opcode:f,r_s:Sa.Register,r_t:Sa.Register,r_d:Sa.Register,shift:j}}}},{key:"Equals",value:function(a){return n(this,a)}},{key:"CompareTo",value:function(a){return o(this,a)}}]),a}();c("VisualMIPS.Instructions.R_type",s);var t=a.Instruction=function(){
function a(b,c){Ra(this,a),this.Case=b,this.Fields=c}return Qa(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Instructions.Instruction",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{I:[l],J:[r],R:[s]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();return c("VisualMIPS.Instructions.Instruction",t),a}({}),Ua=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),Wa=function(){function a(b,c){Va(this,a),this.Case=b,this.Fields=c}return Ua(a,[{key:d.reflection,value:function(){return{type:"VisualMIPS.Parser.parseResponse",interfaces:["FSharpUnion","System.IEquatable","System.IComparable"],cases:{OK:[],ParseError:[],VarValue:["number"]}}}},{key:"Equals",value:function(a){return p(this,a)}},{key:"CompareTo",value:function(a){return q(this,a)}}]),a}();c("VisualMIPS.Parser.parseResponse",Wa);var _a=function(a){a.load=function(a){return r(localStorage.getItem(a),null,function(a){return function(a){return a}(function(a){return JSON.parse(a)}(a))})},a.save=function(a,b){localStorage.setItem(a,JSON.stringify(b))};return a}({}),cb=H("editor"),db=CodeMirror.fromTextArea(cb,G);ab("hello","world");var eb=function(){var a=bb("hello");if(null!=a)return a;throw new Error("/Users/jian/Desktop/Jian/EIE3/Spring/HLP/HLP_Project/src/VisualMipsWeb/webComponent/src/main.fs",93,14)}(),fb="ADD 1,2,3      # this is a comment!";db.setValue(fb);var gb=db.getLine(0),hb=H("execute"),ib=H("reset"),jb=H("stepBackwards"),kb=H("stepForwards"),lb=H("errorLog"),mb=H("mipsRegister0"),nb=H("mipsRegister1"),ob=H("mipsRegister2"),pb=H("mipsRegister3"),qb=H("mipsRegister4"),rb=H("mipsRegister5"),sb=H("mipsRegister6"),tb=H("mipsRegister7"),ub=H("mipsRegister8"),vb=H("mipsRegister9"),wb=H("mipsRegister10"),xb=H("mipsRegister11"),yb=H("mipsRegister12");hb.addEventListener("click",function(a){return Ab(),null}),ib.addEventListener("click",function(a){return Cb(),null}),jb.addEventListener("click",function(a){return zb(ob,"101010101010101"),null}),kb.addEventListener("click",function(a){return zb(pb,"101010101010101"),null}),a.Util=_a,a.saveToLocalStorage=ab,a.loadToLocalStorage=bb,a.editId=cb,a.cmEditor=db,a.getValue=eb,a.z=fb,a.mm=gb,a.executeButton=hb,a.resetButton=ib,a.stepBackwardsButton=jb,a.stepForwardsButton=kb,a.errorLog=lb,a.HTMLRegister0=mb,a.HTMLRegister1=nb,a.HTMLRegister2=ob,a.HTMLRegister3=pb,a.HTMLRegister4=qb,a.HTMLRegister5=rb,a.HTMLRegister6=sb,a.HTMLRegister7=tb,a.HTMLRegister8=ub,a.HTMLRegister9=vb,a.HTMLRegister10=wb,a.HTMLRegister11=xb,a.HTMLRegister12=yb,a.modifyRegisterInHTML=zb,a.executeHandler=Ab,a.executeButtonHandler=Bb,a.resetButtonHandler=Cb,a.stepBackwardsButtonHandler=Db,a.stepForwardsButtonHandler=Eb}(this.files=this.files||{});