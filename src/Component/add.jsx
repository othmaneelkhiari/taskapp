import { useEffect, useState } from 'react'
import '../App.css'
import truecheck from '../checkmark.svg'
import axios from "axios";




export default function Addtask()
{
    const [task,setTask] = useState(null)
    const [aler,setAler] = useState(null)
    const handleChagetasks = (e)=>{
        setTask(e.target.value)
    }
    const [data,setData] = useState(null)
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3030/api/v1/tasks`);
        setData(data.taask);
      };
      
      
      const deleteTask = async (_id,name) => {
        try {
            const  dataX  = await axios.delete(`http://localhost:3030/api/v1/tasks/${_id}`);
            setAler(
                <div className=" font-bold text-red-500">
                    Deleting task : “{name}“ succes 
                </div>
        )
        } catch (error) {
            console.log(error)
        }
          
        };

        const addTask = async () => {
            try {
                const  ds  = await axios.post(`http://localhost:3030/api/v1/tasks/`,{name:task});  
                setAler(
                        <div className=" font-bold text-green-500">
                            Adding task : “{task}“ succes
                        </div>
                )
            } catch (error) {
                console.log(error)
            }
        };
        
        useEffect(() => {
          getData();
        }, [deleteTask]);

    return (
        <>
        
            <div className="flex place-content-center place-items-center h-screen p-10">
                <div className='w-full lg:w-1/3 md:w-1/2 xl:1/4 2xl:1/5 shadow-lg  bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <div className='flex w-full place-items-center place-content-center'>
                        <input onChange={handleChagetasks}  type="text" placeholder=' add ur task here' className='bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="" />
                        <button type="button" onClick={addTask} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r text-sm px-5 py-2.5 w-30 h-10  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40">Add tasks</button>
                    </div>
                    <div className='w-full'>
                    <ul className="my-4 space-y-3">
                    {aler?aler:''}
                        {data && data.map((a)=>




                            <li>
                                <div  className="flex duration-1000	 items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-100 group hover:shadow-lg dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <img className={a.doing == 1 ?'w-5':'w-5 opacity-0'} src={truecheck} alt="" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">{a.name}</span>
                                    <button className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-white bg-red-600 rounded dark:bg-gray-700 dark:text-gray-400' onClick={()=>deleteTask(a._id,a.name)}>Delete</button>
                                    <button type='button' className='cursor-pointer inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-white bg-blue-600 rounded dark:bg-gray-700 dark:text-gray-400' data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">Edite</button>
                                </div>
                            </li>



                        )}
                    </ul>
                    </div>
                </div>
            </div>
                
        </>
    )
}