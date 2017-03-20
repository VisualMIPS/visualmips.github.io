/**
* Convert From/To Binary/Decimal/Hexadecimal in JavaScript
* https://gist.github.com/faisalman
*
* Copyright 2012-2015, Faisalman <fyzlman@gmail.com>
* Licensed under The MIT License
* http://www.opensource.org/licenses/mit-license
*/

var ConvertBase = function (num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};
    
// binary to decimal
ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
};

// binary to hexadecimal
ConvertBase.bin2hex = function (num) {
    return ConvertBase(num).from(2).to(16);
};

// decimal to binary
ConvertBase.dec2bin = function (num) {
    return ConvertBase(num).from(10).to(2);
};

// decimal to hexadecimal
ConvertBase.dec2hex = function (num) {
    return ConvertBase(num).from(10).to(16);
};

// hexadecimal to binary
ConvertBase.hex2bin = function (num) {
    return ConvertBase(num).from(16).to(2);
};

// hexadecimal to decimal
ConvertBase.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
};

this.ConvertBase = ConvertBase;
    


/*
* Usage example:
* ConvertBase.bin2dec('111'); // '7'
* ConvertBase.dec2hex('42'); // '2a'
* ConvertBase.hex2bin('f8'); // '11111000'
* ConvertBase.dec2bin('22'); // '10110'
*/

// Current state : Binary
// Binary -> Hex
// on button press && state === Binary
function mipsRegisterBinary2Hex(registerNumber){
    var mipsRegister = document.getElementById("mipsRegister"+registerNumber)
    var mipsRegisterBinaryButton = document.getElementById("mipsRegister"+registerNumber+"BinaryButton")
    var mipsRegisterHexButton = document.getElementById("mipsRegister"+registerNumber+"HexButton")
    var mipsRegisterDecimalButton = document.getElementById("mipsRegister"+registerNumber+"DecimalButton")

    mipsRegister.innerHTML = (ConvertBase.bin2hex(mipsRegister.innerHTML)).toUpperCase()
    
    mipsRegisterBinaryButton.className = "btn waves-effect waves-light black btn-small"
    mipsRegisterHexButton.className = "btn waves-effect waves-light red btn-small"
}

// Binary -> Decimal
function mipsRegisterBinary2Decimal(registerNumber){
    var mipsRegister = document.getElementById("mipsRegister"+registerNumber)
    var mipsRegisterBinaryButton = document.getElementById("mipsRegister"+registerNumber+"BinaryButton")
    var mipsRegisterHexButton = document.getElementById("mipsRegister"+registerNumber+"HexButton")
    var mipsRegisterDecimalButton = document.getElementById("mipsRegister"+registerNumber+"DecimalButton")

    mipsRegister.innerHTML = ConvertBase.bin2dec(mipsRegister.innerHTML)
    
    mipsRegisterBinaryButton.className = "btn waves-effect waves-light black btn-small"
    mipsRegisterDecimalButton.className = "btn waves-effect waves-light red btn-small"
}


// Current state : Hex
// Hex -> Binary
function mipsRegisterHex2Binary(registerNumber){
    var mipsRegister = document.getElementById("mipsRegister"+registerNumber)
    var mipsRegisterBinaryButton = document.getElementById("mipsRegister"+registerNumber+"BinaryButton")
    var mipsRegisterHexButton = document.getElementById("mipsRegister"+registerNumber+"HexButton")
    var mipsRegisterDecimalButton = document.getElementById("mipsRegister"+registerNumber+"DecimalButton")

    mipsRegister.innerHTML = ConvertBase.hex2bin(mipsRegister.innerHTML)
    
    mipsRegisterHexButton.className = "btn waves-effect waves-light black btn-small"
    mipsRegisterBinaryButton.className = "btn waves-effect waves-light red btn-small"
}
// Hex -> Decimal
function mipsRegisterHex2Decimal(registerNumber){
    var mipsRegister = document.getElementById("mipsRegister"+registerNumber)
    var mipsRegisterBinaryButton = document.getElementById("mipsRegister"+registerNumber+"BinaryButton")
    var mipsRegisterHexButton = document.getElementById("mipsRegister"+registerNumber+"HexButton")
    var mipsRegisterDecimalButton = document.getElementById("mipsRegister"+registerNumber+"DecimalButton")

    mipsRegister.innerHTML = ConvertBase.hex2dec(mipsRegister.innerHTML)
    
    mipsRegisterHexButton.className = "btn waves-effect waves-light black btn-small"
    mipsRegisterDecimalButton.className = "btn waves-effect waves-light red btn-small"
}


// Current state : Decimal
// Decimal -> Binary
function mipsRegisterDecimal2Binary(registerNumber){
    var mipsRegister = document.getElementById("mipsRegister"+registerNumber)
    var mipsRegisterBinaryButton = document.getElementById("mipsRegister"+registerNumber+"BinaryButton")
    var mipsRegisterHexButton = document.getElementById("mipsRegister"+registerNumber+"HexButton")
    var mipsRegisterDecimalButton = document.getElementById("mipsRegister"+registerNumber+"DecimalButton")

    mipsRegister.innerHTML = ConvertBase.dec2bin(mipsRegister.innerHTML)
    
    mipsRegisterDecimalButton.className = "btn waves-effect waves-light black btn-small"
    mipsRegisterBinaryButton.className = "btn waves-effect waves-light red btn-small"
}
// Decimal -> Hex
function mipsRegisterDecimal2Hex(registerNumber){
    var mipsRegister = document.getElementById("mipsRegister"+registerNumber)
    var mipsRegisterBinaryButton = document.getElementById("mipsRegister"+registerNumber+"BinaryButton")
    var mipsRegisterHexButton = document.getElementById("mipsRegister"+registerNumber+"HexButton")
    var mipsRegisterDecimalButton = document.getElementById("mipsRegister"+registerNumber+"DecimalButton")

    mipsRegister.innerHTML = (ConvertBase.dec2hex(mipsRegister.innerHTML)).toUpperCase()
    
    mipsRegisterDecimalButton.className = "btn waves-effect waves-light black btn-small"
    mipsRegisterHexButton.className = "btn waves-effect waves-light red btn-small"
}

var mipsRegister0Active = "decimal"
var mipsRegister1Active = "decimal"
var mipsRegister2Active = "decimal"
var mipsRegister3Active = "decimal"
var mipsRegister4Active = "decimal"
var mipsRegister5Active = "decimal"
var mipsRegister6Active = "decimal"
var mipsRegister7Active = "decimal"
var mipsRegister8Active = "decimal"
var mipsRegister9Active = "decimal"
var mipsRegister10Active = "decimal"
var mipsRegister11Active = "decimal"
var mipsRegister12Active = "decimal"
var mipsRegister13Active = "decimal"
var mipsRegister14Active = "decimal"
var mipsRegister15Active = "decimal"
var mipsRegister16Active = "decimal"
var mipsRegister17Active = "decimal"
var mipsRegister18Active = "decimal"
var mipsRegister19Active = "decimal"
var mipsRegister20Active = "decimal"
var mipsRegister21Active = "decimal"
var mipsRegister22Active = "decimal"
var mipsRegister23Active = "decimal"
var mipsRegister24Active = "decimal"
var mipsRegister25Active = "decimal"
var mipsRegister26Active = "decimal"
var mipsRegister27Active = "decimal"
var mipsRegister28Active = "decimal"
var mipsRegister29Active = "decimal"
var mipsRegister30Active = "decimal"
var mipsRegister31Active = "decimal"
var programCounter = "decimal"
var nextProgramCounter = "decimal"
var nextNextProgramCounter = "decimal"
var hi = "decimal"
var lo = "decimal"

function subButtonLogicHandler(registerNumber,currentActiveState){

    switch(registerNumber){
        case 0:
            mipsRegister0Active = currentActiveState; break;
        case 1:
            mipsRegister1Active = currentActiveState; break;
        case 2:
            mipsRegister2Active = currentActiveState; break;
        case 3:
            mipsRegister3Active = currentActiveState; break;
        case 4:
            mipsRegister4Active = currentActiveState; break;
        case 5:
            mipsRegister5Active = currentActiveState; break;
        case 6:
            mipsRegister6Active = currentActiveState; break;
        case 7:
            mipsRegister7Active = currentActiveState; break;
        case 8:
            mipsRegister8Active = currentActiveState; break;
        case 9:
            mipsRegister9Active = currentActiveState; break;
        case 10:
            mipsRegister10Active = currentActiveState; break;
        case 11:
            mipsRegister11Active = currentActiveState; break;
        case 12:
            mipsRegister12Active = currentActiveState; break;
        case 13:
            mipsRegister13Active = currentActiveState; break;
        case 14:
            mipsRegister14Active = currentActiveState; break;
        case 15:
            mipsRegister15Active = currentActiveState; break;
        case 16:
            mipsRegister16Active = currentActiveState; break;
        case 17:
            mipsRegister17Active = currentActiveState; break;
        case 18:
            mipsRegister18Active = currentActiveState; break;
        case 19:
            mipsRegister19Active = currentActiveState; break;
        case 20:
            mipsRegister20Active = currentActiveState; break;
        case 21:
            mipsRegister21Active = currentActiveState; break;
        case 22:
            mipsRegister22Active = currentActiveState; break;
        case 23:
            mipsRegister23Active = currentActiveState; break;
        case 24:
            mipsRegister24Active = currentActiveState; break;
        case 25:
            mipsRegister25Active = currentActiveState; break;
        case 26:
            mipsRegister26Active = currentActiveState; break;
        case 27:
            mipsRegister27Active = currentActiveState; break;
        case 28:
            mipsRegister28Active = currentActiveState; break;
        case 29:
            mipsRegister29Active = currentActiveState; break;
        case 30:
            mipsRegister30Active = currentActiveState; break;
        case 31:
            mipsRegister31Active = currentActiveState; break;
        case -1:
            programCounter = currentActiveState; break;
        case -2:
            nextProgramCounter = currentActiveState; break;
        case -3:
            nextNextProgramCounter = currentActiveState; break;
        case -4:
            hi = currentActiveState; break;
        case -5:
            lo = currentActiveState; break;
        default: 
            break;
    }
}

function getMIPSRegisterLogicHandler(registerNumber){
    switch(registerNumber){
        case 0:
            return mipsRegister0Active
        case 1:
            return mipsRegister1Active
        case 2:
            return mipsRegister2Active
        case 3:
            return mipsRegister3Active
        case 4:
            return mipsRegister4Active
        case 5:
            return mipsRegister5Active
        case 6:
            return mipsRegister6Active
        case 7:
            return mipsRegister7Active
        case 8:
            return mipsRegister8Active
        case 9:
            return mipsRegister9Active
        case 10:
            return mipsRegister10Active
        case 11:
            return mipsRegister11Active
        case 12:
            return mipsRegister12Active
        case 13:
            return mipsRegister13Active
        case 14:
            return mipsRegister14Active
        case 15:
            return mipsRegister15Active
        case 16:
            return mipsRegister16Active
        case 17:
            return mipsRegister17Active
        case 18:
            return mipsRegister18Active
        case 19:
            return mipsRegister19Active
        case 20:
            return mipsRegister20Active
        case 21:
            return mipsRegister21Active
        case 22:
            return mipsRegister22Active
        case 23:
            return mipsRegister23Active
        case 24:
            return mipsRegister24Active
        case 25:
            return mipsRegister25Active
        case 26:
            return mipsRegister26Active
        case 27:
            return mipsRegister27Active
        case 28:
            return mipsRegister28Active
        case 29:
            return mipsRegister29Active
        case 30:
            return mipsRegister30Active
        case 31:
            return mipsRegister31Active
        case -1:
            return programCounter
        case -2:
            return nextProgramCounter
        case -3:
            return nextNextProgramCounter
        case -4:
            return hi
        case -5:
            return lo
        default: 
            break;
    }
}

function buttonLogicHandler(registerNumber,buttonPressed){
    var x = getMIPSRegisterLogicHandler(registerNumber)

    if(x === "binary"){
        if(buttonPressed === "hex"){
            mipsRegisterBinary2Hex(registerNumber)
            subButtonLogicHandler(registerNumber,"hex")
        }
        else if(buttonPressed === "decimal"){
            mipsRegisterBinary2Decimal(registerNumber)
            subButtonLogicHandler(registerNumber,"decimal")
        }
    }
    else if(x === "hex"){
        if(buttonPressed === "decimal"){
            mipsRegisterHex2Decimal(registerNumber)
            subButtonLogicHandler(registerNumber,"decimal")
        }
        else if(buttonPressed === "binary"){
            mipsRegisterHex2Binary(registerNumber)
            subButtonLogicHandler(registerNumber,"binary")
        }
    }
    else if(x === "decimal"){
        if(buttonPressed === "hex"){
            mipsRegisterDecimal2Hex(registerNumber)
            subButtonLogicHandler(registerNumber,"hex")
        }
        else if(buttonPressed === "binary"){
            mipsRegisterDecimal2Binary(registerNumber)
            subButtonLogicHandler(registerNumber,"binary")
        }
    }
}

window.onload = function() {
    // detect OS for Electron download
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="macOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    var e = document.getElementById('operatingSystem')
    e.innerHTML = "<br>Your OS : " + OSName;

}

function setToDecimal(){
    for(i=-5 ; i<32;i ++){
        buttonLogicHandler(i,"decimal");
    }
}