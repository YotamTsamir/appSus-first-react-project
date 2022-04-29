import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const STORAGE_KEY = "notesDB" 

export const notesService = {
    query,
    addNote,
    deleteNote,
    loadImageFromInput,
    editNote,
}

const gNotes = storageService.loadFromStorage() || [
    
    {
        id: utilService.makeId(),
        type: "note-video",
        info: {
        url: "https://www.youtube.com/embed/nJfrThH92WU",
        title: "Learn this $h!t too!"
        },
       },
    {
     id: utilService.makeId(),
     type: "note-txt",
     isPinned: true,
     info: {
        txt: "Fullstack Me Baby!"
     }
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        info: {
        label: "What to know about JS",
        todos: [
        { txt: "You can add properties to almost everything", doneAt: null },
        { txt: "Functions are objects", doneAt: 187111111 },
        { txt: "For... in loops iterate over property names, not values", doneAt: 187111111 },
        { txt: "Variable scoping", doneAt: 187111111 },
        { txt: "Variables that aren’t explicitly declared can be global", doneAt: 187111111 },
        { txt: "JavaScript never \"sleep()s\"", doneAt: 187111111 },
        { txt: "Automatic type conversions", doneAt: 187111111 },
        { txt: "JavaScript is not just for browsers", doneAt: 187111111 },
        ]
        }
       },
    {
     id: utilService.makeId(),
     type: "note-img",
     info: {
     url: "https://images-na.ssl-images-amazon.com/images/I/51IWL7y8ecL._SX397_BO1,204,203,200_.jpg",
     
     title: "Read this!"
     },
     style: {
     backgroundColor: "#00d"
     }
    },
    {
     id: utilService.makeId(),
     type: "note-video",
     info: {
     url: "https://www.youtube.com/embed/hQAHSlTtcmY",
     title: "Learn this $h!t!"
     },
    },

    {
     id: utilService.makeId(),
     type: "note-todos",
     info: {
     label: "Get my stuff together",
     todos: [
     { txt: "Driving liscence", doneAt: null },
     { txt: "Coding power", doneAt: 187111111 }
     ]
     }
    }
];

function query() {
    let notes = storageService.loadFromStorage(STORAGE_KEY)
    if(!notes){
        notes = _createNotes()
        storageService.saveToStorage(STORAGE_KEY, gNotes)
    } 
    return Promise.resolve(notes)
}

function addNote(note) {
    let notes = storageService.loadFromStorage(STORAGE_KEY)
    if(!notes || !notes.length) notes = []
    const idx = notes.findIndex((savedNote) => savedNote.id === note.id)
    if(idx !== -1) return Promise.resolve()
    notes = [note,...notes]
    storageService.saveToStorage(STORAGE_KEY, notes)
    return Promise.resolve()
}

function deleteNote(noteId){
    let notes = storageService.loadFromStorage(STORAGE_KEY)
    notes = notes.filter(note => note.id !== noteId)
    console.log(notes)
    storageService.saveToStorage(STORAGE_KEY,notes)
    return Promise.resolve()
}

function _createNotes() {
    const notes = storageService.loadFromStorage(STORAGE_KEY)
    if(!notes || !notes.length){
        storageService.saveToStorage(STORAGE_KEY, gNotes)
    }
}

function loadImageFromInput(ev, onImageReady){
    // document.querySelector('.share-container').innerHTML = ''
    return new Promise((resolve) => {
        var reader = new FileReader()
    
        reader.onload = (event) => {
            var img = new Image()
            img.src = event.target.result
            resolve(img.src)
            // img.onload = onImageReady.bind(null, img)
        }
        reader.readAsDataURL(ev.target.files[0])
    })

}

function editNote(note) {
    let notes = storageService.loadFromStorage(STORAGE_KEY)
    const idx = notes.findIndex((savedNote) => note.id === savedNote.id)
    notes.splice(idx, 1, note)
    storageService.saveToStorage(STORAGE_KEY, notes)
    return Promise.resolve()
}