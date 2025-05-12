function healthRegenCalc() {
     let maxHPInput = document.querySelector("#maxHP").value;
     let healthRegen = document.querySelector("#healthRegen").value;
     let vitality = document.querySelector("#vitality").value;

     let healthRegenAmount = (maxHPInput/100+1.5) * healthRegen / 100 * vitality / 100;
     let resultElement = document.querySelector("#naturalRegenAmount").innerHTML;
     console.log(resultElement.value);
     resultElement = healthRegenAmount;

}

document.querySelector("#health_stats_save").addEventListener("click", healthRegenCalc);