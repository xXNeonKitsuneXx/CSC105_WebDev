import { createContext, useState, useContext } from "react";

const CommentContext = createContext({ comments: [], setComments: () => { } });
export default CommentContext;

const CommentContextProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    return <CommentContext.Provider value={{ comments, setComments }} > {children} </CommentContext.Provider>;
}

export { CommentContextProvider };