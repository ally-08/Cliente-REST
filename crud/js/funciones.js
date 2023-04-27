async function ObtenerDatos () {

        const url = 'http://localhost:8000/api/editoriales'

        const response = await fetch(url)
        const jsonData = await response.json()
        let editoriales = [];
        jsonData.forEach(element => {
            let miEditorial = {
                "codigo_editorial": element['codigo_editorial'],
                "nombre_editorial": element['nombre_editorial'],
                "contacto": element['contacto'],
                "telefono": element['telefono'],
            }

            editoriales.push(miEditorial)
        });

        return editoriales;
    }

 async function Datos() {
        let editoriales = await ObtenerDatos();
        let $tabla = document.getElementById("tabla");
        
        editoriales.forEach(element => {
            let $tr = document.createElement("tr");
            $tr.innerHTML =
           `<td>${element['codigo_editorial']}</td>
            <td>${element['nombre_editorial']}</td>
            <td>${element['contacto']}</td>
            <td>${element['telefono']}</td>
            <td>
            <a href='modificar.html?id=${element['codigo_editorial']}' class="waves-effect waves-light btn">Modificar</a>
            <a href='#' onclick="EliminarDatos('${element['codigo_editorial']}')" class="waves-effect waves-light btn">Eliminar</a>
            </td>
            `
            $tabla.appendChild($tr)
        });

    }

    async function insertarDatos() {
        let btnAddEditorial = document.getElementById("add-editorial")

        btnAddEditorial.addEventListener("click", function () {
            e.preventDefault();
        })

        let editorial={
            "codigo_editorial": document.getElementById("codigo_editorial").value,
            "nombre_editorial": document.getElementById("nombre_editorial").value,
            "contacto": document.getElementById("contacto").value,
            "telefono": document.getElementById("telefono").value,
        }

                     
        const url = 'http://localhost:8000/api/editoriales'
        const response = await fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editorial),
        })

        console.log(editorial)
        if(response.ok){
            window.location.href="index.html"
        }
        else{
            console.log(response)
        }
    }

     async function EliminarDatos(id){
        let Eliminar = confirm (`Desea eliminar la editorial ${id}?`)

        if(Eliminar){
            let url=`http://localhost:8000/api/editoriales/${id}`

            const response = await fetch (url,{
                method:"DELETE",
            })

            if(response.ok){
                console.log(response)
                window.location.replace("index.html")
            }
            else{
                console.error(response.error)
            }
        }
    }

    async function ShowDatos(){
        let param = new URLSearchParams(window.location.search);
        let id = param.get("id");
    
        let url = `http://localhost:8000/api/editoriales/${id}`
        const response = await fetch(url, {
            method: "GET",
        })
        const jsonData = await response.json()
        setTimeout(() => {
            
            let miEditorial = {
                "codigo_editorial": jsonData['codigo_editorial'],
                "nombre_editorial": jsonData['nombre_editorial'],
                "contacto": jsonData['contacto'],
                "telefono": jsonData['telefono'],
            }
            console.log(miEditorial)
            
            
                document.getElementById("codigo_editorial").value = miEditorial.codigo_editorial
        
                document.getElementById("nombre_editorial").value = miEditorial.nombre_editorial
        
                document.getElementById("contacto").value = miEditorial.contacto
        
                document.getElementById("telefono").value = miEditorial.telefono
        }, 0);

}

async function updateData() {
    let btnUpdateEditorial = document.getElementById("update-editorial")

    btnUpdateEditorial.addEventListener("click", (e)=> {
        e.preventDefault()
    })

    let param = new URLSearchParams(window.location.search);
    let id = param.get("id");


    let url = `http://localhost:8000/api/editoriales/${id}`
    let editorial = {
        "codigo_editorial": document.getElementById("codigo_editorial").value,
        "nombre_editorial": document.getElementById("nombre_editorial").value,
        "contacto": document.getElementById("contacto").value,
        "telefono": document.getElementById("telefono").value,
    }

    console.log(editorial)
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(editorial),
    })
    if (response.ok) {
        window.location.href = "index.html"
    } else {
        alert(response.error)
    }
}

   
