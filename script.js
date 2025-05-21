function corrigir() {
    let pontTotal = 0;

    let r1 = document.getElementById("Q01").value;
    if (r1 === 'informaticaAndDS') {
        pontTotal += 1;
    }
    let r2 = document.getElementById("Q02").value;
    let PP2 = 0;

    if (r2.includes('Informática')) PP2 += 1;
    if (r2.includes('Administração')) PP2 += 1;
    if (r2.includes('Enfermagem')) PP2 += 1;
    if (r2.includes('Des. Sistemas')) PP2 += 1;

    
    if (PP2 === 4) {
        pontTotal += 1;
    }

    if (document.getElementById("check4").checked) pontTotal += 0.5;
    if (document.getElementById("check2").checked) pontTotal += 0.5;

  let r4 = document.getElementsByName("limpeza");
    if (r4 = document.getElementById("iso")) {
        pontTotal += 1;
    }

   let r5 = document.getElementsByName("VF");
    if (r5 = document.getElementById("ver")) {
        pontTotal += 1;
    }

    document.getElementById("nome").innerText = "Nome: " + document.getElementById("texto").value;
    document.getElementById("corretas").innerText = "Pontuação Total: " + pontTotal + " pontos";

    let percentual = (pontTotal / 5) * 100;
    document.getElementById("percentual").innerText = "Percentual: " + percentual.toFixed(2) + "%";

    document.querySelector("fieldset.hide").classList.remove("hide");
}
