import React from 'react'
import TableSearch from '../../components/TableSearch'
const data = [
  {
      key: 1213,
      name: 'Size 1',
      direction: '120 x 120',
      dateCreate: '21-2-2023',
      dateUpdate: '21-2-2023'
  },
  {
      key: 1214,
      name: 'Size 1',
      direction: '120 x 120',
      dateCreate: '2018-07-22',
      dateUpdate: '2018-07-22'
  }
  ]
  const initValues = {
    key: 0,
    name: '',
    direction: '',
    createAt:new Date(),
    updateAt:new Date()
  }
  const types = [
    "number",
    "string",
    "string",
    "date",
    "date"

  ]
function Size() {
    const lable = [
        "key","Name","Direction","DateCrate","DateUpdate"
    ]
  return (
   <TableSearch lable={lable} data={data} types={types} initValues={initValues}/>
  )
}

export default Size
