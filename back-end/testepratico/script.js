/*ler as seguintes informações
codigo
horas trabalhadas no mes
turno de trabalho{
    matutino
    vespertino
    noturno 
}
categoria{
    operario
    gerente
}
-validação dos turnos e categorias
-sempreconstras maiusculas
-calcular valor da hora trabalhada
-salário mínimo é 450,00

if(categoria == G && turno == N){
    valorDaHoraTrabalhada = 18% de 450
}
if(categoria == M turno V)

*/
    function CalcularSalario(){
       const categoria = document.getElementById("Categoria").value;
       const horaMes = document.getElementById("horaMes").value;
       const codigo = document.getElementById("Codigo").value;
       const turno = document.getElementById("turno").value;
       const salarioM = 450
       const valorDaHora = 0

        if(categoria === 'G' && turno === 'N'){
            valorDaHora = salarioM * 0.18
        }
        else if(categoria === 'G' && turno === 'M' || turno === 'V'){
            valorDaHora = salarioM * 0.15
        }
        else if(categoria === 'G' && turno === 'V'){
            valorDaHora = salarioM * 0.15
        }
        if(categoria === 'O' && turno === 'N'){
            valorDaHora = salarioM * 0.13
        }
        else if(categoria === 'O' && turno === 'M' || turno === 'V'){
            valorDaHora = salarioM * 0.10
        }
        else if(categoria === 'O' && turno === 'V'){
            valorDaHora = salarioM * 0.10
        }
    }
    console.log(CalcularSalario(valorDaHora))

