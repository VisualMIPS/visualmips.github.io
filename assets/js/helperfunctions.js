function mipsRegisterBinary2Hex(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),d=document.getElementById("mipsRegister"+a+"HexButton");document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML=ConvertBase.bin2hex(b.innerHTML).toUpperCase(),c.className="btn waves-effect waves-light black",d.className="btn waves-effect waves-light red"}function mipsRegisterBinary2Decimal(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),e=(document.getElementById("mipsRegister"+a+"HexButton"),document.getElementById("mipsRegister"+a+"DecimalButton"));b.innerHTML=ConvertBase.bin2dec(b.innerHTML),c.className="btn waves-effect waves-light black",e.className="btn waves-effect waves-light red"}function mipsRegisterHex2Binary(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),d=document.getElementById("mipsRegister"+a+"HexButton");document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML=ConvertBase.hex2bin(b.innerHTML),d.className="btn waves-effect waves-light black",c.className="btn waves-effect waves-light red"}function mipsRegisterHex2Decimal(a){var b=document.getElementById("mipsRegister"+a),d=(document.getElementById("mipsRegister"+a+"BinaryButton"),document.getElementById("mipsRegister"+a+"HexButton")),e=document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML=ConvertBase.hex2dec(b.innerHTML),d.className="btn waves-effect waves-light black",e.className="btn waves-effect waves-light red"}function mipsRegisterDecimal2Binary(a){var b=document.getElementById("mipsRegister"+a),c=document.getElementById("mipsRegister"+a+"BinaryButton"),e=(document.getElementById("mipsRegister"+a+"HexButton"),document.getElementById("mipsRegister"+a+"DecimalButton"));b.innerHTML=ConvertBase.dec2bin(b.innerHTML),e.className="btn waves-effect waves-light black",c.className="btn waves-effect waves-light red"}function mipsRegisterDecimal2Hex(a){var b=document.getElementById("mipsRegister"+a),d=(document.getElementById("mipsRegister"+a+"BinaryButton"),document.getElementById("mipsRegister"+a+"HexButton")),e=document.getElementById("mipsRegister"+a+"DecimalButton");b.innerHTML=ConvertBase.dec2hex(b.innerHTML).toUpperCase(),e.className="btn waves-effect waves-light black",d.className="btn waves-effect waves-light red"}function subButtonLogicHandler(a,b){switch(a){case 0:mipsRegister0Active=b;break;case 1:mipsRegister1Active=b;break;case 2:mipsRegister2Active=b;break;case 3:mipsRegister3Active=b;break;case 4:mipsRegister4Active=b;break;case 5:mipsRegister5Active=b;break;case 6:mipsRegister6Active=b;break;case 7:mipsRegister7Active=b;break;case 8:mipsRegister8Active=b;break;case 9:mipsRegister9Active=b;break;case 10:mipsRegister10Active=b;break;case 11:mipsRegister11Active=b;break;case 12:mipsRegister12Active=b}}function getMIPSRegisterLogicHandler(a){switch(a){case 0:return mipsRegister0Active;case 1:return mipsRegister1Active;case 2:return mipsRegister2Active;case 3:return mipsRegister3Active;case 4:return mipsRegister4Active;case 5:return mipsRegister5Active;case 6:return mipsRegister6Active;case 7:return mipsRegister7Active;case 8:return mipsRegister8Active;case 9:return mipsRegister9Active;case 10:return mipsRegister10Active;case 11:return mipsRegister11Active;case 12:return mipsRegister12Active}}function buttonLogicHandler(a,b){var c=getMIPSRegisterLogicHandler(a);"binary"===c?"hex"===b?(mipsRegisterBinary2Hex(a),subButtonLogicHandler(a,"hex")):"decimal"===b&&(mipsRegisterBinary2Decimal(a),subButtonLogicHandler(a,"decimal")):"hex"===c?"decimal"===b?(mipsRegisterHex2Decimal(a),subButtonLogicHandler(a,"decimal")):"binary"===b&&(mipsRegisterHex2Binary(a),subButtonLogicHandler(a,"binary")):"decimal"===c&&("hex"===b?(mipsRegisterDecimal2Hex(a),subButtonLogicHandler(a,"hex")):"binary"===b&&(mipsRegisterDecimal2Binary(a),subButtonLogicHandler(a,"binary")))}var ConvertBase=function(a){return{from:function(b){return{to:function(c){return parseInt(a,b).toString(c)}}}}};ConvertBase.bin2dec=function(a){return ConvertBase(a).from(2).to(10)},ConvertBase.bin2hex=function(a){return ConvertBase(a).from(2).to(16)},ConvertBase.dec2bin=function(a){return ConvertBase(a).from(10).to(2)},ConvertBase.dec2hex=function(a){return ConvertBase(a).from(10).to(16)},ConvertBase.hex2bin=function(a){return ConvertBase(a).from(16).to(2)},ConvertBase.hex2dec=function(a){return ConvertBase(a).from(16).to(10)},this.ConvertBase=ConvertBase;var mipsRegister0Active="binary",mipsRegister1Active="binary",mipsRegister2Active="binary",mipsRegister3Active="binary",mipsRegister4Active="binary",mipsRegister5Active="binary",mipsRegister6Active="binary",mipsRegister7Active="binary",mipsRegister8Active="binary",mipsRegister9Active="binary",mipsRegister10Active="binary",mipsRegister11Active="binary",mipsRegister12Active="binary";