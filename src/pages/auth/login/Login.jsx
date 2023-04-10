import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Login() {

  const [permissions, setPermissions] = useState([])

    function getPermissions(){
      axios.get("http://localhost:5000/permissions").then((permissions)=>{
        console.log(permissions.data)
        setPermissions(permissions.data)
      })
    }

    useEffect(()=>{
      getPermissions()
    }, [])

  return (
    <div className="permissions">
    {permissions.map((x) => (
      <div className="permission" key={x._id}>{x.name}</div>
    ))
    }
  </div>
  )
}
