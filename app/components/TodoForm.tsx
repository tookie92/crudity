'use client';

import React from 'react'
import Input from './Input'
import Button from '../Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function TodoForm() {
    const navigate = useRouter();
    const{
        register,
        handleSubmit,
        formState:{
          errors
        }
      }= useForm<FieldValues>({
        defaultValues:{
          title:'',
          complete:false
        }
      });
    
      const onSubmit: SubmitHandler<FieldValues>= (data)=>{
        axios.post('/api/todos/', data)
        .then((response)=>{
            console.log(response.data);
            navigate.refresh()
        })
      
        
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-4">
                  <Input id="title" label="title" errors={errors} register={register}/>
                  <Button type="submit">Add</Button>
              </div>
           </form>
  )
}
