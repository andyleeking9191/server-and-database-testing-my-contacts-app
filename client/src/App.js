import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import CardContainer from './components/CardContainer/CardContainer';
import styles from './App.module.css';

function App() {

  const [profileList, setProfileList] = useState([]);
  const [searchbox, setSearchBox] = useState('');
  

    async function fetchProfiles() {
        const url = 'http://localhost:3001/users'
        try{
            const response = await fetch(url);
            const profiles = await response.json();
            console.log(profiles)
            setProfileList(profiles);
        } catch(error) {
            console.log(error)
        }
        
    }
    
  
  useEffect(() => {
    fetchProfiles()
  } ,[])


  const handleTxtChange = (event) => {
    setSearchBox(event.target.value);
  }

  const filteredProfiles = profileList.filter((profile) => {
    const fullName = profile.first_name.concat(' ' + profile.last_name)
    return  fullName.toLowerCase().includes(searchbox.toLocaleLowerCase())
  })
  
  

  return (
    <div className={styles["App"]}>
      <Navbar handleTxtChange={handleTxtChange} />
      <CardContainer listOfProfiles={filteredProfiles}/>
    </div>
  );
}

export default App;
