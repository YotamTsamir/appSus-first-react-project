import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const STORAGE_KEY = "notesDB" 

export const notesService = {
    query,
}

const gNotes = storageService.loadFromStorage() || [
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
     type: "note-img",
     info: {
     url: "https://www.aaha.org/contentassets/150b34dfaf984d19a277b4ab52a5461d/image17jpn.png",
     
     title: "Bobi and Me"
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
     title: "Learn this SH!T"
     },
    },
    // {
    //  id: utilService.makeId(),
    //  type: "note-video",
    //  info: {
    //  url: "https://www.youtube.com/embed/7-9wXQpzESo",
    //  title: "Yotams study song"
    //  },
    
    // },
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

function _createNotes() {
    const notes = storageService.loadFromStorage(STORAGE_KEY)
    if(!notes || !notes.length){
        storageService.saveToStorage(STORAGE_KEY, gNotes)
    }
}