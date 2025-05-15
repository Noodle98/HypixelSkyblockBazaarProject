// Function for calculating natural health regen amount
function healthRegenCalc() {
     let maxHPInput = document.querySelector("#maxHP").value;
     let healthRegen = document.querySelector("#healthRegen").value;
     let vitality = document.querySelector("#vitality").value;

     let healthRegenAmount = (maxHPInput/100+1.5) * healthRegen / 100 * vitality / 100;
     const healthRegenBreadText = "HP healed per natural health regen tick (every 2 sec): ";
     document.querySelector("#naturalRegenAmount").innerHTML = healthRegenBreadText + Math.round(healthRegenAmount);
     console.log(healthRegenAmount);
}



// EventListener to call healthRegenCalc() when health_stats_save button is clicked
document.querySelector("#healthStatsSave").addEventListener("click", healthRegenCalc);