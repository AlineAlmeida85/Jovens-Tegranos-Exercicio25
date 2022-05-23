function verificar() {
    console.log("teste ok");

    let Dia = document.getElementById("inputDia").value;
    let Mes = document.getElementById("inputMes").value;

    let signo = "";
    
    let msg = "Voce não digitou uma data válida"
    
    if (Mes == 01 &&  Dia > 20 && Mes == 2 && Dia < 19) {
        signo = "Aquário";
        }else if (Mes==2 && Dia>18 || Mes==3 && Dia<20) {
        signo = "Peixes";
        }else if (Mes==3 && Dia>19 || Mes==4 && Dia<21) {
        signo = "Áries";
        }else if (Mes==4 && Dia>20 || Mes==5 && Dia<21) {
        signo = "Touro";
        }else if (Mes==5 && Dia>20 || Mes==6 && Dia<21){
        signo = "Gêmeos";
        }else if (Mes==6 && Dia>20 || Mes==7 && Dia<22) {
        signo = "Câncer";
        }else if (Mes==7 && Dia>21 || Mes==8 && Dia<23) {
        signo = "Leão";
        }else if (Mes==8 && Dia>22 || Mes==9 && Dia<23) {     
          signo = "Virgem";
        }else if (Mes==9 && Dia>22 || Mes==10 && Dia<23){
          signo = "Libra";
        }else if (Mes==10 && Dia>22 || Mes==11 && Dia<22){
          signo = "Escorpião";
        }else if (Mes==11 && Dia>21 || Mes==12 && Dia<22){
          signo = "Sagitário";
        }else if (Mes==12 && Dia>21 || Mes==1 && Dia<22){
          signo = "Capricórnio";
        } else {
            result.innerHTML = msg;
        }
        
        result.innerHTML = signo;
       
    
                            
    console.log(Dia);
    console.log(Mes);
    console.log(signo);

                                                              


}