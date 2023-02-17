import UserData from "./UserData"

const Data = ({data}) => {
  return (
    <div className="data">
        <UserData title='Gender' input={data.gender}/>
        <UserData title='Height' input={data.height}/>
        <UserData title='Weight' input={data.weight}/>
        <UserData title='Skill' input={data.skill}/>
        <UserData title='Terrain' input={data.terrain}/>
        <UserData title='Length Preference' input={data.lengthPreference}/>
    </div>

  )
}
export default Data