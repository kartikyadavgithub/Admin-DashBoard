import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import Mail from "@mui/icons-material/Mail";
import PublishIcon from '@mui/icons-material/Publish';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import {Link} from "react-router-dom";

export default function User() {
  return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src="https://lh3.googleusercontent.com/a-/AFdZucqZz-zwkbhZkGj-IQrleTi06ID5JgWBOHrJ0C-HGw=s576-p-no"
                            alt="" 
                            className="userShowImg" 
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">kartik yadav</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentityIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">thunderbeast69</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarTodayIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">08.01.2001</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneIphoneIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">+91 156 232 46</span>
                        </div>
                        <div className="userShowInfo">
                        <MailIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">thunderbeast@coolmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearchingIcon className="userShowIcon"/>
                        <span className="userShowInfoTitle">New Delhi | INDIA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input 
                                    type="text"
                                    placeholder="thunderbeast69"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input 
                                    type="text"
                                    placeholder="Kartik yadav"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input 
                                    type="text"
                                    placeholder="thunderbeast@coolmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input 
                                    type="text"
                                    placeholder="+91 156 232 46"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input 
                                    type="text"
                                    placeholder="New Delhi | INDIA"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img 
                                    src="https://images.unsplash.com/photo-1656653731059-4c93b1cd2382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                                    alt="" 
                                    className="userUpdateImg" />
                                <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                                <input type="file"  id ="file" style={{display:"none"}}/>
                            </div>
                                <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}
