import React, { useState } from 'react'
import CustomerModel from '../../Model/CustomerModel';
import './Customer.css'

// rafce

const Customer = () => {

    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [address,setAddress] = useState('');
    const [email,setEmal] = useState('');

    const [customers,setCustomers] = useState<CustomerModel[]>([])

    const saveCustomer = (e:InputEvent)=>{  
        e.preventDefault();
        const newCustomer = new CustomerModel(name,age,address,email);
        setCustomers([...customers,newCustomer])
        alert("Customer Saved")
    }

  return (
    <div className=''>

        <h1>Customer Form</h1>
        {customers.map((cus)=>(
            <div>
                <p>{cus.name}</p>
                <p>{cus.age}</p>
                <p>{cus.address}</p>
                <p>{cus.eamil}</p>
            </div>
        ))}
        <form action="" >
            <div className='formWrapper'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                    <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Age</label>
                    <input type="number" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e)=>{setAge(parseInt(e.target.value))}}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Address</label>
                    <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e)=>{setAddress(e.target.value)}}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>email</label>
                    <input type="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  onChange={(e)=>{setEmal(e.target.value)}}/>
                </div>
            </div>
            <div className='m-10'>
            <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center' onClick={saveCustomer}>Save</button>
            </div>
        
        </form>
    </div>
  )
}

export default Customer