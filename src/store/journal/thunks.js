import { collection, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewNote, setActiveNote, savingNewNote } from "./journalSlice"


export const startNewNote = () =>{
    return async( dispatch, getState ) =>{
        
        dispatch( savingNewNote() );
        
        const { uid } = getState().auth

        const newNote = {
            tittle: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id
        //!dispatch
        dispatch( addNewNote(newNote) );
        dispatch( setActiveNote(newNote) );
        //dispatch startNewNote

    }
}