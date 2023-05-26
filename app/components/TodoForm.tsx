'use client';

import React, { useCallback, useState } from 'react'
import Input from './Input'
import Button from '../Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';


export default function TodoForm() {
    const [isActivated, setIsActivated]=useState(false);
    const toggle = useCallback(()=>{
      if (isActivated) {
        setIsActivated(false);
      }else{
        setIsActivated(true);
      }
    },[isActivated])
    const navigate = useRouter();
    const{
        register,
        handleSubmit,
        reset,
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
        try {
          
          if(!data.title || data.title === 0){
              throw new Error("le titre ne peut etre vide")
          }
  
          axios.post('/api/todos/', data)
          .then((response)=>{
              console.log(response.data);
              toast.success(`${data.title} a ete cree avec succes`)
            })
            .then(()=>{
              reset();
            })
            .finally(()=>{
            navigate.refresh()

          })
          
        
        } catch (error: any) {
          toast.error(error.message)
        }
        //reset({title: ""})
        
      }
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-4">
                  <Input  id="title" label="title" errors={errors} register={register}/>
                  <Button  type="submit">Add</Button>
              </div>
           </form>
  )
}
