import React, { useEffect } from 'react';
import { useState } from 'react'
import {  AiOutlineDelete, AiOutlineEdit, AiOutlineFileExcel, AiOutlineSearch } from 'react-icons/ai';

import { MdAdd, MdNumbers } from 'react-icons/md';


function TableSearch(props) {
    const {load,lable,data,initValues,types} = props
    const [edit,setEdit] = useState(false)
    const [stateAll,setSateAll] = useState(false)
    const [arraySelect,setArraySelect] = useState([])
    const keys = Object.keys(initValues)
    const [values,setValues] = useState(Object.values(initValues))

    useEffect( ()=>{
        setArraySelect(new Array(data.length).fill(false))
    },[load])
    const handleSelectAll = ()=>{
        setSateAll(!stateAll)
        stateAll ? setArraySelect(arraySelect.map(x=>x=false)) : setArraySelect(arraySelect.map(x=>x=true))
    }

    const handleChangeSelect = (data,index) =>{

        
            let array = arraySelect.map((array,id) => 
     
            id === Number(index)  ?  !array : array
            
           )
            setArraySelect(array)
            setValues(Object.values(data))
    }
    const handleChangeEdit = e =>{        
        let value = values.map((value,index)=>
        value =  index === Number(e.target.name) ? e.target.value : value
        )
        setValues(value)
    }
  return (
    <>
    <div className="search-table">
      <div className='search-group'>
        <i className="icon">
          <AiOutlineSearch />
        </i>
        <input type={'search'}></input>
      </div>
      <div className='tool'>
      <button className='num' >
            <span>
                <MdNumbers className='icon' />
                {data.length}
            </span>
        </button>
        <button className='add' >
            <span>
                <MdAdd className='icon' />
                Add
            </span>
        </button>
        <button className='export'>
                <AiOutlineFileExcel className='icon' />
                Export
        </button>
        <button className='delete'>
                <AiOutlineDelete className='icon' />
                Delete
        </button>
        <button  className='tool-select'>
                <AiOutlineEdit className='icon' />
                Edit
                <label class="switch">
                <input type="checkbox" checked={edit} disabled={stateAll} onChange={()=>{setEdit(!edit)}}/>
                <span class="slider round"></span>
                </label>
                 
        </button>
      </div>
    </div>
    <div className='table'>
        <table>
            <thead>
                <tr>
                    <th><input disabled={edit} checked={(stateAll || arraySelect.every(x => x===true)) ? true : false} type={'checkbox'} onClick={
                        handleSelectAll
                    }></input></th>
                    {
                        lable.map((lb,id) =>
                        <th key={id}>
                            {lb}
                        </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {data.map((data,index)=>
                <>
                <tr className={arraySelect[index] ? 'trcheck' : ''} key={data.key}>
                <td> <input name={index}  checked={arraySelect[index]} type={'checkbox'} disabled={edit && arraySelect.find((x,id)=> id !== index && x===true)} onClick = {() =>
                    handleChangeSelect(data,index)
                    }
                ></input>
                </td>
                {
                    Object.values(data).map((values,index) =>
                         <td>{types[index]==='image'? <img src={values.toString()} height={150} width={150}/> :values.toString()}</td>
                    )
                }
             
                </tr>
                { edit && arraySelect[index] &&
                <tr className={arraySelect[index] ? 'trcheck' : ''}>
                    <td colSpan={lable.length+1}>
                    <form className='form-edit'>
                        { keys.map((key,index) =>

                        <div className='form-group'>
                            <label>{lable[index]}</label>
                            {types[index] ==='image' ? <input type='file'/>   :<input type={types[index]} name={index} value={values[index]}
                             onChange={handleChangeEdit}></input>}
                        </div>
                        )}
                        <button type='submit' >Save</button>
                    </form>
                    </td>
                </tr>
}
                </>
                )}
            </tbody>
        </table>

    </div>
    </>
  );
}

export default TableSearch;
