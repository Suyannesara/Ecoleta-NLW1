
function populateUFs(){ 
    
    const ufselect = document.querySelector("select[name = uf]") 

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => { return rees.json() })
    .then( states => {
        ufselect.innerHTML= ufselect.innerHTML + `<option value = "1">Valor</option>`
    })
}

populateUFs()

document
    .querySelector("select[name = uf]")
    //Jeito de criar uma function(arrow function) ()=> {}
    .addEventListener("change", () => {
        console.log("mudeiiiii")
    })