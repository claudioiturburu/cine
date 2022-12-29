class Butacas
{
    
    /**
     * Setea los elemento necesarios para renderizar
     * @param {string} idDiv, id donde se completaran las butacas 
     * @param {Array} butacas, json [{id:int,libre:bool}] 
     */
    constructor(idDiv,butacas,columnas=15) {
        this.butacas = butacas;
        this.idDiv = idDiv;
        this.width = 900/15*columnas;
    }

    /**
     * Renderiza las butacas libres y ocupadas
     *  <div class="butaca">
     *      <input type="checkbox" id="id_de_la_butaca" />
     *      <label for="id_de_la_butaca"></label>
     *  </div>
     */
    render() 
    {
        let contenedor = document.getElementById("id-contenedor");
        contenedor.setAttribute("style","width:"+this.width);
        let butacasHtml = document.getElementById(this.idDiv);
        butacasHtml.setAttribute("style","width:"+this.width);
        this.butacas.forEach(function(valor, indice) {
            let id = valor.id;
            let libre = valor.libre;

            let nodo = document.createElement('div');
            nodo.className = "butaca";
            let input = document.createElement('input');
            input.type = "checkbox";
            input.id = id;
            if (libre==false) {
                input.disabled = true;
                nodo.title = "butaca reservada";
            }
            else {
                nodo.title = "click para seleccionar la butaca";
            }
            let label = document.createElement('label');
            label.setAttribute("for",id);
            label.innerHTML = id;
            nodo.appendChild(input);
            nodo.appendChild(label);
            butacasHtml.appendChild(nodo);
        });
    }
    
}