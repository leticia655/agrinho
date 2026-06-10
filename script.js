// MODAL
function abrir(text){
document.getElementById("texto").innerText = text;
document.getElementById("modal").style.display = "flex";
}

function fechar(){
document.getElementById("modal").style.display = "none";
}

/* =======================
   GRÁFICO 1 - PRODUÇÃO
======================= */
new Chart(document.getElementById("grafico1"),{
type:"bar",
data:{
labels:["Soja","Milho","Café","Carne","Algodão"],
datasets:[{
label:"Produção Brasil (milhões)",
data:[155,120,55,95,40],
backgroundColor:"#0b5d1e"
}]
}
});

/* =======================
   GRÁFICO 2 - EXPORTAÇÃO
======================= */
new Chart(document.getElementById("grafico2"),{
type:"doughnut",
data:{
labels:["China","EUA","Europa","Outros"],
datasets:[{
data:[45,20,25,10],
backgroundColor:["#2e7d32","#66bb6a","#a5d6a7","#81c784"]
}]
}
});