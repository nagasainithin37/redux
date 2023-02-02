
import {useForm} from 'react-hook-form';
import { addToDo } from '../TodoSlice';
import { useDispatch } from 'react-redux';
function Entry() {


    const {register,handleSubmit,formState:{errors}}=useForm()
    let dispatch=useDispatch();
    let onFromSubmit=(obj)=>{
        let actionobj=addToDo(obj.todo)
        dispatch(actionobj)
    }

    return (    

        
        <div>
            <div className="display-1 text-primary text-center">Enter Todo</div>
            <form className='text-center' onSubmit={handleSubmit(onFromSubmit)} >

                <input type="text" className="form-control w-50 mx-auto mt-5" { ...register('todo',{required:true})} />
                <button className="btn btn-primary mt-3" type="submit" >Submit</button>

            </form>
        </div>
     );
}

export default Entry;