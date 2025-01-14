import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md'; // Ikona edycji
//import { Switch } from '@mui/material';
import Switch from "react-switch";
import { useStateContext } from '../contexts/ContextProvider';

function ProfilePage() {
  const { user, updateUser } = useStateContext(); // Pobierz dane użytkownika i funkcję aktualizacji
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [aboutMe, setAboutMe] = useState(user.aboutMe || ''); // Pole "O mnie"
  const [isEditingAboutMe, setIsEditingAboutMe] = useState(false); // Stan edycji "O mnie"
  
  const [settings, setSettings] = useState({
    follows: true,
    responds: false,
    dailyPlan: true,
    weeklyPlan: false,
    newsletter: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email, aboutMe }); // Zaktualizuj dane użytkownika w kontekście
  };

  const handleSettingsChange = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };
  
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg flex gap-12">
      {/* Sekcja Profile Settings */}
      <div className="w-2/3">
        <h2 className="text-2xl font-semibold text-left mb-6 text-gray-800">Profile Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          {/* Sekcja "O mnie" */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">About Me</label>
            <div className="relative">
              {isEditingAboutMe ? (
                <textarea
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  rows="4"
                  placeholder="Tell us about yourself"
                />
              ) : (
                <p className="text-gray-700">{aboutMe || 'Add some information about yourself'}</p>
              )}
              <button
                type="button"
                onClick={() => setIsEditingAboutMe(!isEditingAboutMe)}
                className="absolute top-2 right-2 text-gray-500 hover:text-primary"
              >
                <MdEdit size={20} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-full py-2 bg-[#326e27] text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Sekcja Platform Settings */}
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold text-left text-gray-800 mb-6">Platform Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-base font-medium text-gray-600">Email me when someone follows me</label>
            <Switch
              checked={settings.follows}
              onChange={() => handleToggle('follows')}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-base font-medium text-gray-600">Email me when someone responds to my post</label>
            <Switch
              checked={settings.responds}
              onChange={() => handleToggle('responds')}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-base font-medium text-gray-600">Email me when I forget about completing my daily plan</label>
            <Switch
              checked={settings.dailyPlan}
              onChange={() => handleToggle('dailyPlan')}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-base font-medium text-gray-600">Email me when I forget about completing my weekly plan</label>
            <Switch
              checked={settings.weeklyPlan}
              onChange={() => handleToggle('weeklyPlan')}
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="text-base font-medium text-gray-600">Subscribe to newsletter</label>
            <Switch
              checked={settings.newsletter}
              onChange={() => handleToggle('newsletter')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
