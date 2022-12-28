import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
        addNewNote: (state, action ) => {

        
        },
        setActiveNote: (state, action) =>{

        },
        setNotes: (state, action) =>{

        },
        setSaving: (state) =>{

        },
        updateNote: (state, action) =>{

        },
        deleteNote: ( state, action ) =>{
        
        }
    }
})


export const { addNewNote, setActiveNote, setNotes, setSaving, updateNote, deleteNote} = journalSlice.actions;