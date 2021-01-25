import React from "react";
import Header from "./Header";
import InputArea from "./InputArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
   const [notes, setNotes] = React.useState([]);

   function addNote(newNote) {
      setNotes((prevNotes) => {
         return [
            ...prevNotes,
            newNote
         ]
      });
   }

   function deleteNote(noteID){
      setNotes((prevNote)=>{
         return prevNote.filter((note, index)=>{
            return  index !== noteID
         });
      });
   }
   return (
   <>
      <Header />
      <InputArea addNote={addNote} />
      {notes.map((note, index) => (
               <Note key={index} id={index} title={note.title} note={note.note} deleteNote={deleteNote} />
            )
         )
      }
      <Footer/>
   </>);
}

export default App;
