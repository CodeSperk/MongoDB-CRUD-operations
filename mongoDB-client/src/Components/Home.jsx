const Home = () => {

  const handleNewUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    // console.log(user);

    fetch("http://localhost:5000/users", {
      method:"POST",
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data);
      if(data.insertedId){
        alert("User Added Successfully");
        form.reset();
      }
    });
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to Mongo Db Crud operations</h1>
      <h2 className="mt-6 text-2xl font-bold uppercase">Add new users</h2>


      <form action="" onSubmit={handleNewUser} className="flex flex-col border-4 mt-4 max-w-96 mx-auto p-6 gap-4">
        <input type="text" name="name" placeholder="User Name" className="py-2 px-4 bg-gray-200 rounded outline-none"/>
        <input type="email" name="email" placeholder="User email" className="py-2 px-4 bg-gray-200 rounded outline-none"/>
        <input type="submit" value="Submit" className="py-2 px-4 bg-blue-900 text-white uppercase cursor-pointer hover:bg-blue-800 mt-6"/>
      </form>
    </div>
  );
};

export default Home;