import React from "react";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

import './topbar.css';

export default function Topbar() {
  return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="Logo"> ADMIN</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNoneOutlinedIcon />
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <LanguageIcon />
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <SettingsIcon />
                    </div>
                    <img 
                        src="https://lh3.googleusercontent.com/a-/AFdZucqZz-zwkbhZkGj-IQrleTi06ID5JgWBOHrJ0C-HGw=s576-p-no"
                        alt="" 
                        className="topAvatar" />
                    </div>
            </div>
        </div>
  );
}
