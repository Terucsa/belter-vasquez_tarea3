//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//Variables tabala
let headTable = document.getElementById('headTabla');
//Variable de bodyTabla


//funcion para agregar listeners a los botones
function agregarMonitores() {
    //TODO
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  //TODO
    
    //Funcion para mostrar body en la tabla
    let bodyTabla = paises.map(function(paisesTod){
        
            return `
            <thead>
                <tr class="trTabla">
                <td>Nombre:</td>
                <td>Capital:</td>
                <td>Idioma:</td>
                <td>Moneda:</td>
                </tr>
            </thead>
            <tbody id="">
                <tr class="trTabla">
                <td>${paisesTod.nombre}</td>
                <td>${paisesTod.capital}</td>
                <td>${paisesTod.idioma_oficial}</td>
                <td>${paisesTod.moneda}</td>
                </tr>
            </tbody>
            
                <section class="container-fluid">
                <img src="${paisesTod.bandera}" alt="" class"text-center">
                </section>
           
            `;  
        })
   document.getElementById('tablaGen').innerHTML = bodyTabla;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
}
