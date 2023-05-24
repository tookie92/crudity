'use client';
import Button from "../Button";
import Input from "../components/Input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form"


const HomePage = () => {

  const{
    register,
    handleSubmit,
    formState:{
      errors
    }
  }= useForm<FieldValues>({
    defaultValues:{
      name:''
    }
  });

  const onSubmit: SubmitHandler<FieldValues>= (data)=>{
    console.log(data);
  }
    return ( <>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Creer un todo</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-4">
                  <Input id="name" label="name" errors={errors} register={register}/>
                  <Button type="submit">Add</Button>
              </div>
           </form>
      </div>
    </> );
}
 
export default HomePage;