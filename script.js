const ACCESS_PASSWORD = "CPL2026QN";

if (sessionStorage.getItem("cplAuthorized") !== "yes") {
    document.body.style.overflow = "hidden";

    const loginScreen = document.createElement("div");
    loginScreen.id = "loginScreen";

    loginScreen.innerHTML = `
        <div class="login-card">
            <div class="login-brand">
                <span>Color</span>
                <span>Personality</span>
                <span>Lab</span>
            </div>

            <div class="login-line"></div>

            <p class="login-label">認定講師専用ページ</p>

            <input
                id="passwordInput"
                type="password"
                placeholder="パスワード"
                autocomplete="current-password"
            >

            <button id="loginButton" type="button">
                ログイン
            </button>

            <p id="loginError"></p>
        </div>
    `;

    const loginStyle = document.createElement("style");

    loginStyle.textContent = `
        #loginScreen {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background:
                radial-gradient(circle at top left, rgba(170, 184, 198, 0.30), transparent 42%),
                linear-gradient(145deg, #f7f5f0, #e9edf0);
            font-family: "Yu Mincho", "Hiragino Mincho ProN", serif;
        }

        .login-card {
            width: min(390px, 100%);
            padding: 54px 38px 44px;
            text-align: center;
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(80, 88, 96, 0.14);
            border-radius: 28px;
            box-shadow: 0 24px 60px rgba(48, 55, 62, 0.15);
        }

        .login-brand {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: fit-content;
            margin: 0 auto;
            color: #3f454b;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 36px;
            line-height: 1.02;
            letter-spacing: 0.02em;
        }

        .login-line {
            width: 44px;
            height: 1px;
            margin: 28px auto;
            background: #8a9299;
        }

        .login-label {
            margin: 0 0 26px;
            color: #6c7278;
            font-size: 15px;
            letter-spacing: 0.18em;
        }

        #passwordInput {
            box-sizing: border-box;
            width: 100%;
            padding: 15px 16px;
            border: 1px solid #c9ced2;
            border-radius: 10px;
            background: #ffffff;
            color: #363b40;
            font-size: 16px;
            outline: none;
        }

        #passwordInput:focus {
            border-color: #7c8790;
            box-shadow: 0 0 0 3px rgba(124, 135, 144, 0.12);
        }

        #loginButton {
            width: 100%;
            margin-top: 18px;
            padding: 15px;
            border: 0;
            border-radius: 10px;
            background: #4b535b;
            color: #ffffff;
            font-family: inherit;
            font-size: 16px;
            letter-spacing: 0.14em;
            cursor: pointer;
        }

        #loginButton:hover {
            background: #373e44;
        }

        #loginError {
            min-height: 22px;
            margin: 15px 0 0;
            color: #9b4b4b;
            font-size: 14px;
        }
    `;

    document.head.appendChild(loginStyle);
    document.body.appendChild(loginScreen);

    const passwordInput = document.getElementById("passwordInput");
    const loginButton = document.getElementById("loginButton");
    const loginError = document.getElementById("loginError");

    function checkPassword() {
        if (passwordInput.value === ACCESS_PASSWORD) {
            sessionStorage.setItem("cplAuthorized", "yes");
            loginScreen.remove();
            loginStyle.remove();
            document.body.style.overflow = "";
        } else {
            loginError.textContent = "パスワードが違います。";
            passwordInput.value = "";
            passwordInput.focus();
        }
    }

    loginButton.addEventListener("click", checkPassword);

    passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });

    passwordInput.focus();
}
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

for (let y = 1926; y <= 2030; y++) {
  yearSelect.add(new Option(`${y}年`, y));
}

for (let m = 1; m <= 12; m++) {
  monthSelect.add(new Option(`${m}月`, m));
}

function updateDays() {
  const year = Number(yearSelect.value);
  const month = Number(monthSelect.value);

  const days = new Date(year, month, 0).getDate();

  daySelect.innerHTML = "";

  for (let d = 1; d <= days; d++) {
    daySelect.add(new Option(`${d}日`, d));
  }
}

yearSelect.addEventListener("change", updateDays);
monthSelect.addEventListener("change", updateDays);

updateDays();
function hello(){

    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;

    

    const code = table[year][month - 1];

    let kettei = code + Number(day);

    if(kettei > 60){
        kettei = kettei - 60;
    }

    const typeNo = typeMap[kettei];
    const data = typeData[typeNo];

    if(data){
        document.getElementById("typeName").innerHTML = data.name;
        document.getElementById("typeNameEn").innerHTML = data.en;
        document.getElementById("typeNameEnText").innerHTML = data.en;
        document.getElementById("typeImage").src = data.image;
        document.getElementById("typeDescription").innerHTML =
            data.description.replace(/\n/g, "<br>");
       document.getElementById("typePoint").innerHTML =
    data.point
        .trim()
        .split("\n")
        .map(line => `<div>${line.trim()}</div>`)
        .join("");

        if(typeNo >= 3 && typeNo <= 6){
            document.getElementById("colorTypeEn").innerHTML = "Solid Color";
            document.getElementById("typeSymbol").src = "images/solid-symbol.png";
            document.getElementById("colorTypeJa").innerHTML = "ソリッドカラータイプ";
            document.querySelector(".result-hero").style.backgroundImage =
'url("images/solid-watercolor-bg.png")';
document.querySelector(".closing-section").style.backgroundImage =
'url("images/solid-watercolor-bg.png")';
            document.getElementById("mainMessage").innerHTML =
                "主人公は、一人ひとり。<br>だから、<br>一人ひとりを大切に見る。";
            document.getElementById("colorTypeEn").style.color = "#4B2E83";
            document.getElementById("colorTypeJa").style.color = "#6B5A8E";       
        } else if(typeNo >= 7 && typeNo <= 10){
            document.getElementById("colorTypeEn").innerHTML = "Blend Color";
            document.getElementById("typeSymbol").src = "images/blend-symbol.png";
            document.getElementById("colorTypeJa").innerHTML = "ブレンドカラータイプ";
            document.querySelector(".result-hero").style.backgroundImage =
'url("images/blend-watercolor-bg.png")';
document.querySelector(".closing-section").style.backgroundImage = 'url("images/blend-watercolor-bg.png")';
            document.getElementById("mainMessage").innerHTML =
                "主人公は、私と大切な人。<br>だから、<br>人と人との関係を見る。";
            document.getElementById("colorTypeEn").style.color = "#7A2E45";
            document.getElementById("colorTypeJa").style.color = "#8A5A68";   
        } else if(typeNo >= 11 && typeNo <= 14){
            document.getElementById("colorTypeEn").innerHTML = "Rainbow Color";
            document.getElementById("typeSymbol").src = "images/rainbow-symbol.png";
            document.getElementById("colorTypeJa").innerHTML = "レインボーカラータイプ";
            document.querySelector(".result-hero").style.backgroundImage =
'url("images/rainbow-watercolor-bg.png")';
document.querySelector(".closing-section").style.backgroundImage =
'url("images/rainbow-watercolor-bg.png")';
            document.getElementById("mainMessage").innerHTML =
                "主人公は、世界の中の私。<br>だから、<br>世界全体を見る。";
            document.getElementById("colorTypeEn").style.color = "#C8A24A";
            document.getElementById("colorTypeJa").style.color = "#A88C4A";  
        }
    }

    document.getElementById("resultCard").style.display = "block";
}
