class Butacas
{
    
    /**
     * 
     * @param {int} filas, cantidad de filas 
     * @param {int} columnas, cantidad de columnas 
     * @param {Array} ocupadas, listado de ids reservados 
     */
    constructor(filas,columnas,ocupadas) 
    {
        this.filas = filas;
        this.columnas = columnas;
        this.cant = this.filas * this.columnas;
        this.butacas = [];
        let posicion;
        let estaOcupada = ocupadas.shift();
        for (let i=1;i<=this.filas;i++) {
            for (let j=1;j<=this.columnas;j++) {
                posicion = (i-1) * this.columnas + j;
                console.log(posicion);
                this.butacas[posicion] = true;
                if (posicion==estaOcupada) {
                    this.butacas[posicion] = false;
                    estaOcupada = ocupadas.shift();
                }
            }
        }
    }

    /**
     *  <div class="butaca">
     *      <input type="checkbox" id="checkbox2" />
     *      <label for="checkbox2"></label>
     *  </div>
     */
    render() 
    {
        const butacasHtml = document.getElementById("id-butacas");
        this.butacas.forEach(function(valor, indice) {
            let nodo = document.createElement('div');
            nodo.className = "butaca";
            let input = document.createElement('input');
            input.type = "checkbox";
            input.id = indice;
            if (valor==false) {
                input.disabled = true;
            }
            let label = document.createElement('label');
            label.setAttribute("for",indice);
            nodo.appendChild(input);
            nodo.appendChild(label);
            butacasHtml.appendChild(nodo);
        });
    }

    nodoHtml(id,estaLibre) 
    {
        nodo = document.createElement('div',{class:"butaca"});
        input = document.createElement('input');
        label = document.createElement('label');
        nodo.appendChild(input);
        nodo.appendChild(label);
        return nodo;
    }
    

    
}