//  Variables
const form = document.querySelector('form')
const input = document.querySelector('input')
const btnAgregar = document.getElementById('botonAgregar')
const h2 = document.querySelector('h2')
const ul = document.getElementById('listaTareas')
const sinTareas = document.getElementById('vacio')



//  Funciones
btnAgregar.addEventListener('click', (e) => {
  e.preventDefault()
  const tarea = input.value

  //  Corre el código solo si el usuario NO pasa valores en blanco y pasa un texto mayor a 4 caracteres
  if(tarea !== '' && tarea.length >= 4){
    h2.classList.remove('d-none')
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'list-group-item-warning', 'd-flex', 'justify-content-between', 'align-items-center')
    li.innerText = tarea
    li.appendChild(agregarBotonEliminar())
    ul.classList.add('list-group', 'list-group-flush', 'border', 'border-warning', 'rounded-2', 'w-25', 'mx-auto')
    ul.appendChild(li)
    form.reset()
    sinTareas.classList.add('d-none')
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tarea agregada exitosamente",
      showConfirmButton: false,
      timer: 1500
    });
  } else{
    Swal.fire({
      title: "Ocurrió un error",
      text: "La tarea no pudo ser agregada a la lista",
      icon: "error"
    });
  }
})

const agregarBotonEliminar = () => {
  const btnEliminar = document.createElement('button')
  btnEliminar.innerText = 'Eliminar'
  btnEliminar.classList.add('btn', 'btn-danger')
  btnEliminar.addEventListener('click', (e) => {
    const item = e.target.parentElement
    ul.removeChild(item)

    //  Verificar que no hay tareas pendientes para volver a mostrar mensaje
    const items = document.querySelectorAll('.list-group-item')
    if(items.length === 0){
      ul.classList.remove('border')
      sinTareas.classList.remove('d-none')
    }
  })

  return btnEliminar
}