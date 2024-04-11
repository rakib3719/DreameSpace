import { GrDocumentUpdate } from "react-icons/gr";
import { MdEmail, MdSave } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { ContextAuth } from "../../context/AuthContext";


const UpdateProfile = () => {



    const formSUbmit =(e)=> {

        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
       updatesProfile(name, photo)
       .then(result => {
        console.log(result);
        location.reload(n)
       })
       .catch(
        (error)=> {
            console.log(error.message)
        }
       )

    }
    const {user, updatesProfile} = useContext(ContextAuth);

const [name, setName] = useState()
const [photoURL, setPhotoURL] = useState()

updatesProfile()


    const nameHandle = (e)=> {
const names = e.target.value;

setName(names)
    }
    const photoHandle = (e)=>{
        const photo = e.target.value;
        setPhotoURL(photo)
        console.log(photo);
    }
 
    return (
        <div  className="md:w-[70%] lg:w-[55%] mx-auto bg-[#F1F8E9] py-8 border rounded px-2 ">
      <form   onSubmit={formSUbmit}>

    <h1 className="text-orange-500 flex gap-2 font-bold text-lg items-center pl-4">    <GrDocumentUpdate /> Update your profile</h1>

    <hr />


    <div className="border-2 mt-6 grid grid-cols-4 py-4 px-2  items-center">






<div className=" sm:flex gap-2 flex flex-col items-center sm:flex-row ">
<MdEmail  className="text-orange-500 text-3xl    "/>
<h1 className="text-xl font-bold font-workSense   sm:px-2"> Email </h1>
</div>

<div className="col-span-3">
<input type="email" value={user.email}  className="input input-bordered w-full  bg-[#dcedc8]" />

</div>

    </div>


    <div className="border-2 mt-6 grid grid-cols-4 py-4 px-2  items-center">






<div className="flex gap-2 sm:flex   flex-col items-center sm:flex-row ">
<FaRegUserCircle className="text-orange-500 text-3xl   "/>
<h1 className="text-xl font-bold font-workSense   px-2"> Name</h1>
</div>

<div className="col-span-3">
<input name="name" onChange={nameHandle} value={name == null? user.displayName :name } type="text" placeholder="Type here" className="input input-bordered w-full bg-[#dcedc8]" />

</div>

    </div>



    <div className="border-2 mt-6 grid grid-cols-4 py-4 px-2  items-center">






<div className=" sm:flex gap-2 flex flex-col items-center sm:flex-row">
<FaRegUserCircle className="text-orange-500 mt-4 flex text-3xl   "/>
<h1 className="text-xl font-bold font-workSense    px-2"> Photo <br /> URL</h1>
</div>

<div className="col-span-3 ">
<input name="photo" onChange={photoHandle} value={photoURL == null ? user.photoURL: photoURL} type="text" placeholder="Type here" className="input input-bordered w-full  bg-[#dcedc8]" />

</div>

    </div>





 <div  className="">

 <button  className="flex ml-auto items-center font-bold font-workSense  gap-2 bg-orange-500 mt-4 text-right  btn">

<MdSave className="text-blue-950 flex text-3xl   "/>
<span>    Save </span>
</button>

 </div>


 
      </form>
        </div>
    );
};

export default UpdateProfile;