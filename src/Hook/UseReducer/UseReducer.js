import React, {useReducer, useState} from 'react';
import {reducer} from "./reducer";


const booksData=[
    {id:1,name:"Pather Pachali"},
    {id:2,name:"Padma Nodir Majhi"},
    {id:3,name:"Sokuntala"}
]

const Modal=({modalText})=>{
   return <p>{modalText}</p>;
};





const UseReducer = () => {

    // const [books,setBooks]=useState(booksData);
    //
    // const [modalText,setModalText]=useState("");
    // const [isModalOpen,setIsModalOpen]=useState(false);

    const [bookState,dispatch]=useReducer(reducer,{
        books:booksData,
        isModalOpen:false,
        modalText:" "
    })

    const [bookName,setBookName]=useState("");



    const handelSubmit=(e)=>{
        e.preventDefault();
        const newBook = {id:new Date().getTime().toString(), name:bookName};

        dispatch({type:"ADD", payload:newBook});
        setBookName("");



        // setBooks((prevState)=>{
        //     const newBook = {id:new Date().getTime().toString(), name:bookName};
        //     return [...prevState,newBook];
        // });
        //
        // setIsModalOpen(true);
        // setModalText("Book is Added");
    }

    const removeBook=(id)=>{
        dispatch({type:"REMOVE",payload:id})
    }


    return (
        <div>
            <h1>Books List</h1>
            <form onSubmit={handelSubmit}>
                <div className="form-field">
                    <label htmlFor="bookName">Books Name: </label>
                    <input type="text" id="booksName" onChange={(e)=>{setBookName(e.target.value)}}/>
                </div>


                <button type="Submit">Add Book</button>
            </form>

            {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}

            {bookState.books.map((book)=>{
                const {id,name}=book
                return <li key={id}>
                    {name} <button onClick={()=>{removeBook(id)}}>Remove</button>
                </li>
            })}

        </div>
    );
};

export default UseReducer;