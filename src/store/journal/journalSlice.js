import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: null,
        // activeNote: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: '12/12/2022',
        //     imageUrls: [], 
        // }
    },
    reducers: {
        savingNewNote: (state) =>{

            state.isSaving = true
        },
        addNewNote: (state, action ) => {

            state.notes.push( action.payload );
            state.isSaving = false
        },
        setActiveNote: (state, action) =>{

            state.active = action.payload
        },
        setNotes: (state, action) =>{
            state.notes = action.payload
        },
        setSaving: (state) =>{
            state.isSaving = true
        },
        updateNote: (state, action) =>{
            state.isSaving = false;
            state.notes = state.notes.map( note =>{

                if ( note.id === action.payload.id ){
                    return action.payload;
                }
                return note
            })
        },
        deleteNote: ( state, action ) =>{
        
        }
    }
})


export const { addNewNote, setActiveNote, setNotes, setSaving, updateNote, deleteNote, savingNewNote} = journalSlice.actions;