export const reducer=(state,action)=>{
    if(action.type == "ADD"){
        //action.type,action.payload
        const allBooks = [...state.books,action.payload]

        return {
            ...state,
            books:allBooks,
            isModalOpen:true,
            modalText:"book is added"


        }

    }

    if(action.type == "REMOVE"){
        const filterdBooks = [...state.books].filter(book=>book.id !== action.payload);
        return {
            books:filterdBooks,
            isModalOpen:true,
            modalText:"Book is Removed !"
        }
    }

    return state;
}