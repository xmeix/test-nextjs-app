"use client"

const Todo = ({todo}) => {
    
    return ( 
        <div className="todo">
            {todo.title}
        </div>
     );
}
 
export default Todo;