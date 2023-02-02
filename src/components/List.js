import {useSelector} from 'react-redux'



function List() {

let todo=useSelector(state=>state.todos)

    return (    
        <div>
                <div className="display-1 text-secondary text-center">List</div>
                {
                    todo.map((obj,idx)=> <div className="display-4 text-center">{obj}</div>
                    )
                }
        </div>
     );
}   

export default List;