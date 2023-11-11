import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className='text-slate-950 text-center font-semibold text-3xl p-4'>Event Admin</p>
      <div className='bg-sky-800 p-8 sm:mx-16 mx-8 mb-8'>
      <p className='text-slate-50 text-2xl text-center font-semibold'>Create/Update Event</p>


        <div className='sm:flex mt-6 sm:space-x-24'>
          <div class="input">
            <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Title</p>
            <input className=' w-full lg:w-96 bg-slate-200 p-1' type="title" name="title" required />
          </div>
          <div class="input">
            <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Author Name</p>
            <input className=' w-full lg:w-96 bg-slate-200 p-1' type="Author Name" name="Author Name" required />
           </div>
        </div>



        <div class="input">
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Body</p>
          <textarea className='w-full bg-slate-200 h-96 py-1 px-2' type="body" name="body" required/>
        </div>
        <div class="input">
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Brief Summary</p>
          <textarea className='w-full bg-slate-200 h-20 py-1 px-2' type="summary" name="summary" required/>
        </div>



        <div class="input">
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Upload Image</p>
          <input className='w-full bg-slate-200 p-1' type="file" accept='image/jpg, image/png , image/jpeg' required/>
        </div>



        <div className='lg:flex xl:space-x-96  sm:space-x-80'>
        <div class="input ">
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Location</p>
          <input className=' w-full lg:w-96 bg-slate-200 p-1' type="location" name="location" required />
        </div>
        <button className='text-slate-50 text-lg font-semibold py-1 px-8  bg-orange-600  rounded-3xl my-10'>POST</button>
        </div>
      </div>
    </div>
  );
}

export default App;
