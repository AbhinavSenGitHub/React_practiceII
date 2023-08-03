import React, { useState } from 'react'
import axios from "axios";
const Home = () => {

    const [msg, setMsg] = useState('');

    const submit = async(e) => {
      
        e.preventDefault()

        try{
            await axios.post('http://localhost:8000/app', {
                msg
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            <form  action="" method ="post">
                <input type="text" name="username" onChange={(e) => { setMsg(e.target.value) }} placeholder='name user' />
                <button type="submit" onClick={submit} value="Submit">Submit</button>
            </form>
        </div>
    )
}

export default Home
