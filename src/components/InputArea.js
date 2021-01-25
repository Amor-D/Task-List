import React from "react";

function InputArea(props){
   const [input, setInput] = React.useState({
      title : "",
      note : ""
   });

   function handleInput(event){
      const {name, value} = event.target;
      setInput((prevValue)=>{
         return{
            ...prevValue,
            [name] : value
         }
      });
   }
   function saveNote(event){
      event.preventDefault();
      props.addNote(input);
      setInput({
         title : "",
         note : ""
      });
   }

   return(
      <form className="" action="index.html" method="post">
         <input onChange={handleInput} type="text" name="title" value={input.title} placeholder="Title" />
         <textarea onChange={handleInput} name="note" rows="3" value={input.note} placeholder="Note..."></textarea>
         <button onClick={saveNote} type="button" name="button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
         </button>
      </form>
   );
}

export default InputArea;
