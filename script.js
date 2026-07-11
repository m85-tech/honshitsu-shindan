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
            document.getElementById("mainMessage").innerHTML =
                "主人公は、一人ひとり。<br>だから、<br>一人ひとりを大切に見る。";
            document.getElementById("colorTypeEn").style.color = "#4B2E83";
            document.getElementById("colorTypeJa").style.color = "#6B5A8E";       
        } else if(typeNo >= 7 && typeNo <= 10){
            document.getElementById("colorTypeEn").innerHTML = "Blend Color";
            document.getElementById("typeSymbol").src = "images/blend-symbol.png";
            document.getElementById("colorTypeJa").innerHTML = "ブレンドカラータイプ";
            document.getElementById("mainMessage").innerHTML =
                "主人公は、私と大切な人。<br>だから、<br>人と人との関係を見る。";
            document.getElementById("colorTypeEn").style.color = "#7A2E45";
            document.getElementById("colorTypeJa").style.color = "#8A5A68";   
        } else if(typeNo >= 11 && typeNo <= 14){
            document.getElementById("colorTypeEn").innerHTML = "Rainbow Color";
            document.getElementById("typeSymbol").src = "images/rainbow-symbol.png";
            document.getElementById("colorTypeJa").innerHTML = "レインボーカラータイプ";
            document.getElementById("mainMessage").innerHTML =
                "主人公は、世界の中の私。<br>だから、<br>世界全体を見る。";
            document.getElementById("colorTypeEn").style.color = "#C8A24A";
            document.getElementById("colorTypeJa").style.color = "#A88C4A";  
        }
    }

    document.getElementById("resultCard").style.display = "block";
}
