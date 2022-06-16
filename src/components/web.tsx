/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'




import { useForm } from "react-hook-form";

import Reuse from 'public-import/build/index';

import '../../node_modules/public-import/web.css'

function hemlcode(){
    
    
    
    
    const iv={account:"5SE", segment:"",center:"Ireland",domine:"http://phenom.com",tenats:"10",sales:"18b81a5l4"};

    const [disabled,setdisabled]=useState(true);

    const [formvalues,setformvalues]=useState(iv);    

    const { register, handleSubmit,  formState: { errors } } = useForm({
        defaultValues:iv
    });

    

   
    
    const onsubmit =(event:any)=>{            
        alert(JSON.stringify(event));
        
        setdisabled(true);
        console.log(formvalues)
    }
    
    const html=(
                <form>
                            <div>
                                            <div className="inline field">
                                                <div className='lable'>Account Name</div>
                                                <div className='info'>
                                                    <input type="text"    disabled={disabled}  
                                                     {...register('account',{
                                                         
                                                         maxLength:8,
                                                         pattern:/[A]+[a-zA-Z]*$/i ,
                                                         required: "required",                                         

                                                     })}
                                                    />
                                                    {errors?.account?.type==='required'&& <p>This field is required</p>}
                                                    {errors?.account?.type==='maxLength'&&  <p>account cannot exceed 8 characters</p>}
                                                    {errors?.account?.type==='pattern' && <p>Alphabetical characters only</p>}  
                                                    
                                                                                                      
                                                </div>
                                            </div>

                                            <div className='inline field'>
                                                <div className='lable'>Customer Segment</div>
                                                <div className='info'>
                                                    <input type='text'  disabled={disabled}
                                                    
                                                    {...register('segment',{
                                                        
                                                        maxLength:10,
                                                        required: "required",

                                                    })}
                                                    ></input>
                                                     {errors?.segment?.type==='required'&& <p>This field is required</p>}
                                                     {errors?.segment?.type==='maxLength'&&  <p>segment cannot exceed 10 characters</p>}
                                                </div>

                                            </div>
                                            <div className='inline field'>
                                                <div className='lable'>Data cente</div>
                                                <div className='info'>
                                                    <input type='text'   disabled={disabled}
                                                    
                                                    {...register('center',{
                                                        
                                                        maxLength:10,
                                                        required: "required",

                                                    })}
                                                    ></input>
                                                     {errors?.center?.type==='required'&& <p>This field is required</p>}
                                                     {errors?.center?.type==='maxLength'&&  <p>segment cannot exceed 10 characters</p>}
                                                </div>

                                            </div>
                                            <div className='inline field'>
                                                <div className='lable'>Domine Name</div>
                                                <div className='info'>
                                                    <input type='text'   disabled={disabled}
                                                    
                                                    {...register('domine',{
                                                        
                                                        required: "required",
                                                        pattern:/[a-zA-Z0-9]+[\\.]?([a-zA-Z0-9]+)?[\\@][a-z]{3,9}[\\.][a-z]{2,5}/g
                                                    })} 
                                                    ></input>
                                                     {errors?.domine?.type==='required'&& <p>This field is required</p>}
                                                     {errors?.domine?.type==='pattern' && <p>emain not correct</p>}
                                                </div>

                                            </div>
                                            <div className='inline field'>
                                                <div className='lable'>NO. of traines</div>
                                                <div className='info'>
                                                    <input type='text'   disabled={disabled}
                                                    
                                                    {...register('tenats',{
                                                        
                                                        maxLength:30,
                                                        required: "required",

                                                    })} 
                                                    ></input>
                                                     {errors?.tenats?.type==='required'&& <p>This field is required</p>}
                                                     {errors?.tenats?.type==='maxLength'&&  <p>meximum exceed 30 members</p>}
                                                </div>

                                            </div>
                                            <div className='inline field'>
                                                <div className='lable'>Salesforce Id</div>
                                                <div className='info'>
                                                    <input type='text'   disabled={disabled}
                                                    
                                                    {...register('sales',{
                                                        
                                                        maxLength:10,
                                                        required: "required",
                                                        pattern:/[a-zA-Z0-9]{6,10}/g,
                                                    })}
                                                    ></input>
                                                     {errors?.sales?.type==='required'&& <p>This field is required</p>}
                                                     {errors?.sales?.type==='maxLength'&&  <p>segment cannot exceed 10 characters</p>}
                                                     {errors?.sales?.type==='pattern' && <p>invalid id</p>}
                                                </div>

                                            </div>
                                            
                            </div>



                <br />
                
                </form>

    )
    const foot=(
        <div onClick={()=> setdisabled(false)}>
            {disabled===true && <div><svg className="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000"  d="M14,4 L20,10 L14,4 Z M22.2942268,5.29422684 C22.6840146,5.68401459 22.6812861,6.3187139 22.2864907,6.71350932 L9,20 L2,22 L4,15 L17.2864907,1.71350932 C17.680551,1.319449 18.3127724,1.31277239 18.7057732,1.70577316 L22.2942268,5.29422684 Z M3,19 L5,21 M7,17 L15,9"></path></svg>
            Edit Account Information</div>}
            {disabled===false && <div onClick={handleSubmit(onsubmit)} id='name'>Update Details</div>}
        </div>
    )

    return(
        <Reuse  header={html}  footer={foot}  />
    )
}
export default hemlcode

