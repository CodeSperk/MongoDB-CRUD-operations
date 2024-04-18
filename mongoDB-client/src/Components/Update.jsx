import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = {name, email};
  
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data=>{
      if(data.modifiedCount === 0){
        alert("You have not changed anything");
      }
      if(data.modifiedCount>0){
        alert("Updated successfully!")
      }
    })
  }

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold uppercase">Edit User</h1>

      <form action="" onSubmit={handleUpdate} className="flex flex-col border-2 mt-6 max-w-96 mx-auto p-6 gap-4">
        <input type="text" name="name" defaultValue={user.name}  className="py-2 px-4 bg-gray-200 rounded outline-none"/>
        <input type="email" name="email" defaultValue={user.email} className="py-2 px-4 bg-gray-200 rounded outline-none"/>
        <input type="submit" value="Update" className="py-2 px-4 bg-blue-400 text-white uppercase cursor-pointer hover:bg-blue-800 mt-6"/>
      </form>
    </div>
  );
};

export default Update;