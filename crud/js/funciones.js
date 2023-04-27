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
                <a href='#' onclick="ShowDatos('${element['codigo_editorial']}')">Modificar</a>
                <a href='#' onclick="EliminarDatos('${element['codigo_editorial']}')">Eliminar</a>
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
            console.log(response)
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

    async function ShowDatos(id){
        window.location.href ="modificar.html"

        let url = `http://localhost:8000/api/editoriales/${id}`

        const response = await fetch(url, {
            method:"GET",
        })
        const jsonData = await response.json()
        setTimeout(() => {
            if(window.location.href= "http://localhost/crud/modificar.html"){
              let miEditorial ={
                "codigo_editorial": jsonData['codigo_editorial'],
                "nombre_editorial": jsonData['nombre_editorial'],
                "contacto": jsonData['codigo_editorial'],
                "telefono": jsonData['codigo_editorial'],
            }
            console.log(miEditorial)  

            document.getElementById("codigo_editorial").value=miEditorial.codigo_editorial
            document.getElementById("nombre_editorial").value=miEditorial.nombre_editorial
            document.getElementById("contacto").value=miEditorial.contacto
            document.getElementById("telefono").value=miEditorial.telefono
            }
            else{
                alert("No es la pagina correcta")
            }
        }, 1000);
    }

   
