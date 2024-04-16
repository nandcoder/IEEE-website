import '../App.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
function Form() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [post, setPost] = useState(false);
  const [posted, setPosted] = useState(false);
  const [eventImage, setEventImage] = useState([]);
  const [files, setFiles] = useState([]);
  const [image, uploadImage] = useState(null);
  useEffect(() => {
    if (id) {
      try {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `https://eager-twill-ray.cyclic.app/api/events/${id}`
            );
            //console.log("All crimes are => ", response.data.result);
            setEvent(response.data);
            console.log('Successfully fetched ', response.data);
          } catch (error) {
            console.error('Error fetching events:', error);
          }
        };
        fetchData();
      } catch (err) {
        console.log('There was some error fetching the data ');
      }
    }
  }, []);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');
  const postGrp = { title, author, summary, body, location };
  console.log('event = ', event);
  console.log('Author is ', event.author);

  useEffect(() => {
    setTitle(event.title);
    setAuthor(event.author);
    setSummary(event.summary);
    setBody(event.body);
    setLocation(event.createdAt);
  }, []);
  console.log('Post group  is ', postGrp);
  // Helper Functions
  const getToken = () => {
    return Cookies.get('token');
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setEventImage(selectedImage);
  };
  // Post event function:
  async function postEvent(e) {
    const token = getToken();
    console.log('Form data Post group is  : ', postGrp);
    console.log('Token is ', token);
    try {
      const formData = new FormData();
      for (const key in postGrp) {
        formData.append(key, postGrp[key]);
      }
      formData.append('image', eventImage, eventImage.name);
      console.log('FORM DATA ', formData);
      const res = await axios.post(
        `https://ieee-1vzv.onrender.com/admin/postEvent`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Posted successfully ');
    } catch (error) {
      alert('Error ');
      if (error.response) {
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        console.error('Network Error:', error);
      } else {
        console.error('Unexpected Error:', error);
      }
    } finally {
      console.log('Completed \n');
    }
  }
  //handling image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFiles([...files, file]);

    if (file && file.size <= 1000000 && file.size >= 2000) {
      const reader = new FileReader();
      reader.onloadend = () => {
        uploadImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // end here
  async function updateEvent() {
    const updateData = async () => {
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('summary', summary);
        formData.append('body', body);
        formData.append('location', location);
        formData.append('images', files[0]);
        const response = await axios.patch(
          `https://ieee-1vzv.onrender.com/admin/updateEvent/${id}`,
          formData
        );
        console.log(response);
        setPost(true);
        setPosted(true);
      } catch (error) {
        if (error.response) {
          console.error('Server Error:', error.response.data);
        } else if (error.request) {
          console.error('Network Error:', error);
        } else {
          console.error('Unexpected Error:', error);
        }
      } finally {
        if (posted) alert('Operation performed successfully');
        else alert('Error posting '); // This alert will be shown regardless of success or error
        setPost(false);
      }
    };
  }

  return (
    <div className='App'>
      <p className='text-slate-950 text-center font-semibold text-3xl p-4'>
        Event Admin
      </p>
      <div className='bg-sky-800 p-8 sm:mx-16 mx-8 mb-8'>
        <p className='text-slate-50 text-2xl text-center font-semibold'>
          Create/Update Event
        </p>

        <div className='sm:flex mt-6 sm:space-x-24'>
          <div class='input'>
            <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>
              Title
            </p>
            <input
              className=' w-full lg:w-96 bg-slate-200 p-1'
              type='title'
              name='title'
              defaultValue={event.title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div class='input'>
            <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>
              Author Name
            </p>
            <input
              className=' w-full lg:w-96 bg-slate-200 p-1'
              type='Author Name'
              name='Author Name'
              defaultValue={event.author}
              onChange={(e) => {
                setAuthor(e.target.value);
                console.log('Author  = ', author);
              }}
              required
            />
          </div>
        </div>

        <div class='input'>
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>Body</p>
          <textarea
            className='w-full bg-slate-200 h-96 py-1 px-2'
            type='body'
            name='body'
            defaultValue={event.body}
            onChange={(e) => {
              setBody(e.target.value);
              console.log('Body = ', body);
            }}
            required
          />
        </div>
        <div class='input'>
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>
            Brief Summary
          </p>
          <textarea
            className='w-full bg-slate-200 h-20 py-1 px-2'
            type='summary'
            name='summary'
            required
            defaultValue={event.summary}
            onChange={(e) => {
              setSummary(e.target.value);
              console.log('Body = ', body);
            }}
          />
        </div>

        <div class='input'>
          <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>
            Upload Image
          </p>
          <input
            className='w-full bg-slate-200 p-1'
            type='file'
            accept='image/jpg, image/png , image/jpeg'
            required
            onChange={handleImageUpload}
          />
        </div>

        <div className='lg:flex xl:space-x-96  sm:space-x-80'>
          <div class='input '>
            <p className='text-slate-50 text-xl font-semibold py-1 mt-2'>
              Location
            </p>
            <input
              className=' w-full lg:w-96 bg-slate-200 p-1'
              type='location'
              name='location'
              onChange={(e) => {
                setLocation(e.target.value);
                console.log(location);
              }}
              required
            />
          </div>
          <button
            className='text-slate-50 text-lg font-semibold py-1 px-8  bg-orange-600  rounded-3xl my-10'
            onClick={postEvent}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
