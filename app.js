let addTask = document.querySelectorAll('.addTask')
let madal = document.getElementById('madal')
let close = document.getElementById('close')
let taskList = document.querySelectorAll('.taskList')
let form = document.getElementById('form')
let taskArray = JSON.parse(localStorage.getItem('task')) || [[], [], [], []]

window.addEventListener("DOMContentLoaded", () => {
  addTask.forEach((item, i) => {
    item.addEventListener('click', () => {
      toggleMadal("flex")
      form.selected.value = `${i + 1}`
    })
  })
  close.addEventListener('click', () => {
    toggleMadal("none")
  })
  displayTask()
})
window.addEventListener("click", (e) => {
  if (e.target === madal) {
    toggleMadal("none")
  }
})

function displayTask() {
  taskArray.forEach((item, i) => {
    taskList[i].innerHTML = ""
    item.forEach(item2 => {
      taskList[i].innerHTML += `<p class="bg-white py-1.5 rounded px-3 text-xl">${item2}</p>`
    })
  })
}

function toggleMadal(status) {
  madal.style.display = `${status}`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (form.task_name.value.trim()) {
    toggleMadal("none")
    taskArray[+form.selected.value - 1].push(`${form.task_name.value}`)
    setStorage()
    form.reset()
    displayTask()
  }
})

function setStorage() {
  localStorage.setItem("task", JSON.stringify(taskArray))
}