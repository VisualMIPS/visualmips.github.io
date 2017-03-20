function mipsRegisterBinary2Hex(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),d=document.getElementById("mipsRegister"+a+"HexButton");document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML="0x"+ConvertBase.bin2hex(b.innerHTML.substring(1)).toUpperCase(),c.className="btn waves-effect waves-light black btn-small",d.className="btn waves-effect waves-light red btn-small"}function mipsRegisterBinary2Decimal(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),e=(document.getElementById("mipsRegister"+a+"HexButton"),document.getElementById("mipsRegister"+a+"DecimalButton"));b.innerHTML=ConvertBase.bin2dec(b.innerHTML.substring(1)),c.className="btn waves-effect waves-light black btn-small",e.className="btn waves-effect waves-light red btn-small"}function mipsRegisterHex2Binary(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),d=document.getElementById("mipsRegister"+a+"HexButton");document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML="b"+ConvertBase.hex2bin(b.innerHTML.substring(2)),d.className="btn waves-effect waves-light black btn-small",c.className="btn waves-effect waves-light red btn-small"}function mipsRegisterHex2Decimal(a){var b=document.getElementById("mipsRegister"+a),d=(document.getElementById("mipsRegister"+a+"BinaryButton"),document.getElementById("mipsRegister"+a+"HexButton")),e=document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML=ConvertBase.hex2dec(b.innerHTML.substring(2)),d.className="btn waves-effect waves-light black btn-small",e.className="btn waves-effect waves-light red btn-small"}function mipsRegisterDecimal2Binary(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),e=(document.getElementById("mipsRegister"+a+"HexButton"),document.getElementById("mipsRegister"+a+"DecimalButton"));b.innerHTML="b"+ConvertBase.dec2bin(b.innerHTML),e.className="btn waves-effect waves-light black btn-small",c.className="btn waves-effect waves-light red btn-small"}function mipsRegisterDecimal2Hex(a){var b=document.getElementById("mipsRegister"+a),d=(document.getElementById("mipsRegister"+a+"BinaryButton"),document.getElementById("mipsRegister"+a+"HexButton")),e=document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML="0x"+ConvertBase.dec2hex(b.innerHTML).toUpperCase(),e.className="btn waves-effect waves-light black btn-small",d.className="btn waves-effect waves-light red btn-small"}function subButtonLogicHandler(a,b){switch(a){case 0:mipsRegister0Active=b;break;case 1:mipsRegister1Active=b;break;case 2:mipsRegister2Active=b;break;case 3:mipsRegister3Active=b;break;case 4:mipsRegister4Active=b;break;case 5:mipsRegister5Active=b;break;case 6:mipsRegister6Active=b;break;case 7:mipsRegister7Active=b;break;case 8:mipsRegister8Active=b;break;case 9:mipsRegister9Active=b;break;case 10:mipsRegister10Active=b;break;case 11:mipsRegister11Active=b;break;case 12:mipsRegister12Active=b;break;case 13:mipsRegister13Active=b;break;case 14:mipsRegister14Active=b;break;case 15:mipsRegister15Active=b;break;case 16:mipsRegister16Active=b;break;case 17:mipsRegister17Active=b;break;case 18:mipsRegister18Active=b;break;case 19:mipsRegister19Active=b;break;case 20:mipsRegister20Active=b;break;case 21:mipsRegister21Active=b;break;case 22:mipsRegister22Active=b;break;case 23:mipsRegister23Active=b;break;case 24:mipsRegister24Active=b;break;case 25:mipsRegister25Active=b;break;case 26:mipsRegister26Active=b;break;case 27:mipsRegister27Active=b;break;case 28:mipsRegister28Active=b;break;case 29:mipsRegister29Active=b;break;case 30:mipsRegister30Active=b;break;case 31:mipsRegister31Active=b;break;case-1:programCounter=b;break;case-2:nextProgramCounter=b;break;case-3:hi=b;break;case-4:lo=b}}function getMIPSRegisterLogicHandler(a){switch(a){case 0:return mipsRegister0Active;case 1:return mipsRegister1Active;case 2:return mipsRegister2Active;case 3:return mipsRegister3Active;case 4:return mipsRegister4Active;case 5:return mipsRegister5Active;case 6:return mipsRegister6Active;case 7:return mipsRegister7Active;case 8:return mipsRegister8Active;case 9:return mipsRegister9Active;case 10:return mipsRegister10Active;case 11:return mipsRegister11Active;case 12:return mipsRegister12Active;case 13:return mipsRegister13Active;case 14:return mipsRegister14Active;case 15:return mipsRegister15Active;case 16:return mipsRegister16Active;case 17:return mipsRegister17Active;case 18:return mipsRegister18Active;case 19:return mipsRegister19Active;case 20:return mipsRegister20Active;case 21:return mipsRegister21Active;case 22:return mipsRegister22Active;case 23:return mipsRegister23Active;case 24:return mipsRegister24Active;case 25:return mipsRegister25Active;case 26:return mipsRegister26Active;case 27:return mipsRegister27Active;case 28:return mipsRegister28Active;case 29:return mipsRegister29Active;case 30:return mipsRegister30Active;case 31:return mipsRegister31Active;case-1:return programCounter;case-2:return nextProgramCounter;case-3:return hi;case-4:return lo}}function buttonLogicHandler(a,b){var c=getMIPSRegisterLogicHandler(a);"binary"===c?"hex"===b?(mipsRegisterBinary2Hex(a),subButtonLogicHandler(a,"hex")):"decimal"===b&&(mipsRegisterBinary2Decimal(a),subButtonLogicHandler(a,"decimal")):"hex"===c?"decimal"===b?(mipsRegisterHex2Decimal(a),subButtonLogicHandler(a,"decimal")):"binary"===b&&(mipsRegisterHex2Binary(a),subButtonLogicHandler(a,"binary")):"decimal"===c&&("hex"===b?(mipsRegisterDecimal2Hex(a),subButtonLogicHandler(a,"hex")):"binary"===b&&(mipsRegisterDecimal2Binary(a),subButtonLogicHandler(a,"binary")))}function setToDecimal(){for(i=-4;i<32;i++)buttonLogicHandler(i,"decimal")}var ConvertBase=function(a){return{from:function(b){return{to:function(c){return parseInt(a,b).toString(c)}}}}};ConvertBase.bin2dec=function(a){return ConvertBase(a).from(2).to(10)},ConvertBase.bin2hex=function(a){return ConvertBase(a).from(2).to(16)},ConvertBase.dec2bin=function(a){return ConvertBase(a).from(10).to(2)},ConvertBase.dec2hex=function(a){return ConvertBase(a).from(10).to(16)},ConvertBase.hex2bin=function(a){return ConvertBase(a).from(16).to(2)},ConvertBase.hex2dec=function(a){return ConvertBase(a).from(16).to(10)},this.ConvertBase=ConvertBase;var mipsRegister0Active="decimal",mipsRegister1Active="decimal",mipsRegister2Active="decimal",mipsRegister3Active="decimal",mipsRegister4Active="decimal",mipsRegister5Active="decimal",mipsRegister6Active="decimal",mipsRegister7Active="decimal",mipsRegister8Active="decimal",mipsRegister9Active="decimal",mipsRegister10Active="decimal",mipsRegister11Active="decimal",mipsRegister12Active="decimal",mipsRegister13Active="decimal",mipsRegister14Active="decimal",mipsRegister15Active="decimal",mipsRegister16Active="decimal",mipsRegister17Active="decimal",mipsRegister18Active="decimal",mipsRegister19Active="decimal",mipsRegister20Active="decimal",mipsRegister21Active="decimal",mipsRegister22Active="decimal",mipsRegister23Active="decimal",mipsRegister24Active="decimal",mipsRegister25Active="decimal",mipsRegister26Active="decimal",mipsRegister27Active="decimal",mipsRegister28Active="decimal",mipsRegister29Active="decimal",mipsRegister30Active="decimal",mipsRegister31Active="decimal",programCounter="decimal",nextProgramCounter="decimal",nextNextProgramCounter="decimal",hi="decimal",lo="decimal";window.onload=function(){var a="Unknown OS";navigator.appVersion.indexOf("Win")!=-1&&(a="Windows"),navigator.appVersion.indexOf("Mac")!=-1&&(a="macOS"),navigator.appVersion.indexOf("X11")!=-1&&(a="UNIX"),navigator.appVersion.indexOf("Linux")!=-1&&(a="Linux");var b=document.getElementById("operatingSystem");b.innerHTML="<br>Your OS : "+a};