import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Profile() {
    const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Login To Access this Page')
        navigate('/login');
      }
    // Fetch user data from server using the token
    axios.get('http://localhost:4000/profile', {
      headers: {
        'token': token
      }
    })
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, []);

  function handleEdit() {
    setFormData(user); // Initialize form data with user data
    setEditing(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    // Send updated user data to server using the token
    axios.put('http://localhost:4000/profile-edit', formData, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    })
      .then(response => {
        setUser(response.data);
        setEditing(false);
      })
      .catch(error => console.error(error));
  }

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  if (!user) {
    return <div>Loading...</div>;
  }
 
  return (
    <div style={{ border: '1px solid black', padding: '50px', margin:"250px",marginTop:"80px", textAlign: 'center' }}>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname">Name:</label>
            <input type="text" name="fullname" value={formData.fullname} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="mobile">Phone:</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="rollno">Roll num:</label>
            <input type="text" name="rollno" value={formData.rollno} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="campus">Campus:</label>
            <input type="text" name="campus" value={formData.campus} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="branch">Branch:</label>
            <input type="text" name="branch" value={formData.branch} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="programming_lang_known">programming_lang_known:</label>
            <input type="text" name="programming_lang_known" value={formData.programming_lang_known} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="github">Github:</label>
            <input type="text" name="github" value={formData.github} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="linkedin">linkdin:</label>
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} />
          </div>

          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <p>Name:{user.fullname}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.mobile}</p>
          <p>Rollnum: {user.rollno}</p>
          <p>Campus: {user.campus}</p>
          <p>Branch: {user.branch}</p>
          <p>Programming lang: {user.programming_lang_known
}</p>
          <p>github: {user.github}</p>
          <p>linkdin: {user.linkedin}</p>
          <button type="button" onClick={handleEdit}>Edit</button>
          <br />
          <br />
          <button type="button" onClick={handleLogout}>Logout</button>
        </>
      )}

    </div>
  );
}

export default Profile;
