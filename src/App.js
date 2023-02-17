import Header from "./components/Header";
import Input from "./components/Input";
import Data from "./components/Data";

import { useState } from "react";


const App = () => {

  const [profile, setProfile] = useState({
    gender: '',
    weight: '',
    weightUnit: '',
    height: '',
    heightUnit: '',
    skill: '',
    terrain: '',
    lengthPreference: '',
});
const updateProfile = (e) =>{
  const {name, value} = e.target;
  setProfile(prevState => ({...prevState, [name]: value}));
};

  return (
    <div className="App">
      <Header />
        <div className="body">
        <Data data={profile}/>
        <Input updateProfile={updateProfile}/>
        </div>
      </div>
  )
}

export default App;
