// import axios from 'axios'
const URL = 'https://jsonplaceholder.typicode.com/users'
let btn = document.querySelector('#loadData')
let p = document.querySelector('#outPut')

btn.addEventListener('click', function(){
    // fetch(URL)
    // .then(res =>res.json())
    // .then(data => {
    //     data.forEach((user) => {
    //         p.innerHTML=`${p.innerHTML} <br> Name: ${user.name}`
    //     })
    // })
    // .catch(err => console.log(err))
    axios.get(URL)
        .then(res => {
            res.data.forEach(user =>{
                p.innerHTML=`${p.innerHTML} <br> Name: ${user.name}`
            })
        })
        .catch(err => console.log(err))
})

// btn.addEventListener('click', function () {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = () => {
//         p.innerHTML = xhr.response
//     }
//     xhr.open('GET', URL)
//     xhr.send()

// })
// all Task System UI constent value

let mainForm = document.querySelector('#task-form')
let FirstName = document.querySelector("#FirstName")
let LastName = document.querySelector("#LastName")
let Message = document.querySelector("#Message")
let listItem = document.querySelector('#listItem')
// let FileUpload = document.querySelector('#FileUpload')


mainForm.addEventListener('submit', function (e) {
    // firstName
    if (FirstName.value === '') {
        alert('Add a task')
    }
    let ul = document.createElement('ul')
    ul.className = 'list-group'
    listItem.appendChild(ul)

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(FirstName.value))

    let a = document.createElement('a')
    a.className = 'close'
    a.innerHTML = 'X'
    a.addEventListener('click', function (e) {
        ul.removeChild(li)
    })
    li.appendChild(a)

    ul.appendChild(li)
    FirstName.value = ''

    e.preventDefault()
});

mainForm.addEventListener('submit', function (e) {
    // SecondFunction
    if (LastName.value === '') {
        alert('Add a task')
    }
    let ul = document.createElement('ul')
    ul.className = 'list-group'
    listItem.appendChild(ul)

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(LastName.value))
    let a = document.createElement('a')
    a.className = 'close'
    a.innerHTML = 'X'
    a.addEventListener('click', function (e) {
        ul.removeChild(li)
    })
    li.appendChild(a)
    ul.appendChild(li)
    LastName.value = ''

    e.preventDefault()
});

mainForm.addEventListener('submit', function (e) {
    // ThirdFunction
    if (Message.value === '') {
        alert('Add a task')
    }
    let ul = document.createElement('ul')
    ul.className = 'list-group'
    listItem.appendChild(ul)

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(Message.value))
    let a = document.createElement('a')
    a.className = 'close'
    a.innerHTML = 'X'
    a.addEventListener('click', function (e) {
        ul.removeChild(li)
    })
    li.appendChild(a)
    ul.appendChild(li)
    Message.value = ''
    axios.get(URL)
    .then(res => {
        res.data.forEach(user =>{
            p.innerHTML=`${p.innerHTML} <br> Name: ${user.name}`
        })
    })
    .catch(err => console.log(err))
    e.preventDefault()
});
/*
//Image storage location system
FileUpload.addEventListener('change', function(){
        // console.log(this.files)
        const reader = new FileReader();

    reader.addEventListener('load', ()=> {
        // console.log(reader.result)
        localStorage.setItem('recent-image', reader.result)
    })

        reader.readAsDataURL(this.files[0]);

    })
    document.addEventListener('DOMContentLoaded', ()=>{
        const recentImgDataUrl = localStorage.getItem('recent-image')
        if(recentImgDataUrl){
         document.querySelector('#imgPreview').setAttribute('src', recentImgDataUrl);
            
        }
    })
    */
//Remove Task
/*
function removes(e) {
    if (e.target.parentElement.classList.contains('close'))
        if (confirm('Are You sure')) {
            e.target.parentElement.parentElement.remove()
        }
}
*/
// PDF making system
function myPdf() {
    let formTablelistItem = document.querySelector('#listItem')
    let wind = window.open('', 'width:1000', 'height:900')
    wind.document.write(formTablelistItem.outerHTML)
    wind.className = 'bg-primary p-4'
    wind.document.close()
    wind.focus()
    wind.print()
    wind.close()

}