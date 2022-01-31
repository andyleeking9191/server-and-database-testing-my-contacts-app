import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import CardContainer from './components/CardContainer/CardContainer';
import styles from './App.module.css';

function App() {

  const [profileList, setProfileList] = useState([]);
  const [searchbox, setSearchBox] = useState('');
  

    async function fetchProfiles() {
        const url = 'https://randomuser.me/api/?results=21&nat=US&inc=name,picture,location,cell,email,login'
        try{
            const response = await fetch(url);
            const profiles = await response.json();
            setProfileList(profiles.results);
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
    const fullName = profile.name.first.concat(' ' + profile.name.last)
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
