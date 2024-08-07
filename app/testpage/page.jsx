'use client'
import { useState } from 'react'
import { writeImage } from '../server-functions/writeImage'

const INITIAL_VALUE = {
    name: '',
    age: '',
    image: null,
    imageUrl: null
}

export default function Page() {

    const [data, setData] = useState(INITIAL_VALUE)

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        formData.append("image", data.image)

        try {
            const response = await fetch("/api/sheet", {
                method: "POST",
                body: formData
            })

            if(!response) throw new Error('ERROR')
            
            console.log("SUCCESS")

        } catch(err) {
            console.log(err, "Error")
        }
        
        console.log(data, 'CLIENT DATA')
    }

    function handleChange(e) { 
        const name = e.target.name
        const value = e.target.value

        setData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleFileChange(e) {
        const name = e.target.name
        const value = e.target.files[0]

        setData(prevState => {
            let obj
            if(value) {
                const url = URL.createObjectURL(value)
                obj = {
                    ...prevState,
                    [name]: value,
                    imageUrl: url
                }
            }
            return obj
        })

    }

  return (
    <section
        style={{
            fontSize:'1rem'
        }}
    >
        <div
            style={{height:'100vh', display: 'flex', alignItems:'center', justifyContent:'center'}}
        >
            <form onSubmit={handleSubmit}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <label style={{color:'black'}} htmlFor="image">
                        Image
                    </label>
                    <input 
                        className='testing'
                        onChange={handleFileChange} 
                        name='image' type='file' />
                </div>
                <button style={{marginTop:'2em'}}>
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}



