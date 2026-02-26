import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faShieldAlt, 
  faBell, 
  faCamera, 
  faLock, 
  faFingerprint,
  faEnvelope,
  faPhone,
  faTrashAlt,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import '../css/SettingsForm.css';

const SettingsForm = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="settingsContainer">
      <div className="settingsHeader">
        <h1 className="settingsTitle">Account Settings</h1>
        <p className="settingsSubtitle">Manage your profile, security, and notification preferences</p>
      </div>

      <div className="settingsLayout">
        {/* Sidebar Navigation */}
        <aside className="settingsSidebar">
          <button 
            className={`navItem ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Edit Profile</span>
          </button>
          <button 
            className={`navItem ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FontAwesomeIcon icon={faShieldAlt} />
            <span>Security</span>
          </button>
          <button 
            className={`navItem ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <FontAwesomeIcon icon={faBell} />
            <span>Notifications</span>
          </button>
        </aside>

        {/* Main Content Area */}
        <div className="settingsContent">
          {activeTab === 'profile' && (
            <div className="settingsCard">
              <div className="profileUpload">
                <div className="avatarWrapper">
                  <img src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="Profile" />
                  <button className="uploadBtn">
                    <FontAwesomeIcon icon={faCamera} />
                  </button>
                </div>
                <div className="uploadText">
                  <h4>Profile Picture</h4>
                  <p>JPG, GIF or PNG. Max size of 2MB</p>
                </div>
              </div>

              <form className="settingsForm">
                <div className="formGrid">
                  <div className="formGroup">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="formGroup">
                    <label>Username</label>
                    <input type="text" placeholder="johndoe123" />
                  </div>
                  <div className="formGroup">
                    <label>Email Address</label>
                    <div className="inputWithIcon">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <input type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="formGroup">
                    <label>Phone Number</label>
                    <div className="inputWithIcon">
                      <FontAwesomeIcon icon={faPhone} />
                      <input type="tel" placeholder="+234 800 000 0000" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="saveBtn">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settingsCard">
              <h3 className="sectionTitle">Change Password</h3>
              <form className="settingsForm">
                <div className="formGroup">
                  <label>Current Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
                <div className="formGrid">
                  <div className="formGroup">
                    <label>New Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                  <div className="formGroup">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                </div>
                <button type="submit" className="saveBtn">Update Password</button>
              </form>

              <div className="divider"></div>

              <h3 className="sectionTitle">Two-Factor Authentication</h3>
              <div className="toggleOption">
                <div className="optionInfo">
                  <p className="optionLabel">Enable 2FA Security</p>
                  <p className="optionDesc">Add an extra layer of security to your account</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settingsCard">
              <h3 className="sectionTitle">Notification Preferences</h3>
              <div className="notificationOptions">
                {[
                  { label: 'Email Notifications', desc: 'Receive updates via email' },
                  { label: 'Push Notifications', desc: 'Alerts on your mobile/desktop' },
                  { label: 'Transaction Alerts', desc: 'Get notified for every wallet activity' },
                  { label: 'Promotional Offers', desc: 'News about bonuses and rewards' }
                ].map((item, idx) => (
                  <div key={idx} className="toggleOption">
                    <div className="optionInfo">
                      <p className="optionLabel">{item.label}</p>
                      <p className="optionDesc">{item.desc}</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked={idx < 3} />
                      <span className="slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Danger Zone - Always visible at bottom of any tab or specific to profile */}
          <div className="settingsCard dangerZone">
            <h3 className="sectionTitle destructive">Danger Zone</h3>
            <div className="optionInfo">
              <p className="optionLabel">Delete Account</p>
              <p className="optionDesc">Permanently delete your account and all your data. This action is irreversible.</p>
            </div>
            <button className="deleteBtn">
              <FontAwesomeIcon icon={faTrashAlt} />
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;