import React from 'react'
import TableSearch from '../../components/TableSearch'
const data = [
  {
      key: 1,
      name: 'Samsung',
      Description: 'Dien thoai',
      ImageUrl: '120 x 120',
      dateCreate: '21-2-2023',
      dateUpdate: '21-2-2023'
  },
  {
      key: 2,
      name: 'Sony',
      Description: 'Dien thoai',
      ImageUrl: '120 x 120',
      dateCreate: '2018-07-22',
      dateUpdate: '2018-07-22'
  }
  ]
  const initValues = {
    key: 0,
    name: '',
    Description: '',
    ImageUrl: '',
    createAt:new Date(),
    updateAt:new Date()
  }
  const types = [
    "number",
    "string",
    "string",
    "string",
    "date",
    "date"

  ]
function Brand() {
    const lable = [
        "key","Name","Description","ImageUrl","DateCreate","DateUpdate"
    ]
  return (
   <TableSearch lable={lable} data={data} types={types} initValues={initValues}/>
  )
}

export default Brand
