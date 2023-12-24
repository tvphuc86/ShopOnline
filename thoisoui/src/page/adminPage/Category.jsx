import React, { useEffect, useState } from 'react'
import TableSearch from '../../components/TableSearch'
import axios from 'axios'

  const initValues = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
  }
  const types = [
    "number",
    "string",
    "string",
    "image",
 ]
function Category() {
    const lable = [
        "ID","Name","Description","Image"
    ]
    const [data,setData] = useState([])
    const [load,setLoad] = useState(false)
    useEffect(()=>{
      axios.get(`https://localhost:44352/api/Category/getAll`)
      .then(rs => {
        let data = new Array()
        let data1 = rs.data.map(({id,name,description,imageUrl}) => {
          let temp = {
            id,
            name,
            description,
            imageUrl
          }
          data.push(temp)
        })
        setData(data)
        setLoad(true)
      })
    },[])
  return (
   <TableSearch load={load} lable={lable} data={data} types={types} initValues={initValues}/>
  )
}

export default Category
