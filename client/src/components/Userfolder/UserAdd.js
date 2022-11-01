import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {useHistory} from "react-router-dom"
import { useParams } from "react-router-dom";

const UserAdd = (input) => {
    
    const params = useParams();
    const [fname,setFName] = useState("");
    const [file,setFile] = useState("");

    const history = useHistory();

    const setdata = (e)=>{
        setFName(e.target.value)
    }

    const setimgfile = (e)=>{
        setFile(e.target.files[0])
    }

    const addUserData = async(e)=>{
        e.preventDefault();
        //history.push(`/UserProfile/${params.id}`)
        var formData = new FormData();
        formData.append("photo",file)
        formData.append("fname",fname);
        //formData.append("mobile",params.id)

        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }

        const res = await axios.post(`/register/${params.id}`,formData,config);
       
        if(res.data.status == 201){
            history.push(`/UserProfile/${params.id}`)
        }else{
            console.log("error")
        }
    }

    return (
        <>
            <div className='container mt-3'>
                <h1>Upload Your Img Here</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Name</Form.Label>
                        <Form.Control type="text" name='fname' onChange={setdata} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select Your Image</Form.Label>
                        <Form.Control type="file" name='photo' onChange={setimgfile} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={addUserData}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UserAdd