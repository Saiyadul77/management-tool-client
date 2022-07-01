import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddTask = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        const url = `https://remembrance-bunnyhug-48402.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },    // coma na deoar karone lal bati dekhaise
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast('Additing your Task!!');

                }
            })
    };

    return (
        <div className=''>
            <h1 className='text-center mt-3 text-2xl'>Add Your Task</h1>
            <div className='justify-center items-center ml-40 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 input w-full max-w-xs' placeholder='Task Title'{...register("name", { required: true })} /> <br />
                    <textarea className='mb-2 input w-full max-w-xs' placeholder='Add Details'{...register("description")} /> <br />
                    <input className='text-white bg-primary input w-full max-w-xs' type="submit" value="Enter" />
                </form>
            </div>

        </div>
    );
};

export default AddTask;