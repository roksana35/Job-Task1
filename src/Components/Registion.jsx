import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";


const Registion = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('');
    const [passwordError, setPasswordError] = useState('');
    const [roleError,setRoleError]=useState('');
     const axiosPublic=useAxiosPublic();
    const handlesubmit = (e)=>{
        e.preventDefault();
        const passwordPattern = /^\d{5}$/;

        if (!passwordPattern.test(password)) {
            setPasswordError('Password must be a 5-digit number');
            return;
        } else {
            setPasswordError('');
        }
        if(role === 'default'){
            setRoleError('Role is require')
        }
        else{
            setRoleError('')
        }
        const userData = { name, email, number, password, role };
        console.log('User Data:', userData);
        axiosPublic.post('/register',userData)
        .then(res=>{
            console.log(res.data)
        })
    }

    return (
        <div className="bg-base-200 min-h-screen ">
        <div className="hero-content flex-col ">
          
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlesubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full"
                onChange={(e) => setName(e.target.value)}
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered w-full"
                onChange={(e) => setEmail(e.target.value)}
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="number" placeholder="Number" className="input input-bordered w-full "
                onChange={(e) => setNumber(e.target.value)}
                 required />
                
              </div>
              <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                defaultValue="default"
                                onChange={(e) => setRole(e.target.value)}
                                className="select select-bordered w-full"
                                required
                            >
                                <option disabled value="default">Select a Role</option>
                                <option value="user">user</option>
                                <option value="agent">agent</option>
                            </select>
                            {roleError && (
                                <span className="text-red-600">{roleError}</span>
                            )}
                        </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered w-full "
                //  pattern="^\d{5}$"
                onChange={(e) => setPassword(e.target.value)}
                 required />
                 {passwordError&& (
                                <span className="text-red-600">{passwordError}</span>
                            )}
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
};

export default Registion;