import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { loadNotes } from "../../helpers"
import { addNewNote, setActiveNote, savingNewNote, setNotes } from "./journalSlice"


export const startNewNote = () =>{
    return async( dispatch, getState ) =>{
        
        dispatch( savingNewNote() );
        
        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id

        dispatch( addNewNote(newNote) );
        dispatch( setActiveNote(newNote) );
    }
}

export const startLoadingNotes = () =>{
    return async(dispatch, getState)=>{

        const { uid } = getState().auth
        if( !uid ) throw new Error('El UID del usuario no existe')

        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))
    }
}