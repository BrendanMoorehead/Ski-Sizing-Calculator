import TextField from "./TextField";

const Height = (props) => {
  //Updates the gender of the user
  const handleClick = (e) => {
    props.updateProfile(e);
};
  return (
    <div>  {/* Question */}
    <p className="question">How tall are you:</p>
    <TextField/>
    {/* Pounds Button */}
    <button name="height" value="in" onClick={handleClick}>IN</button>
    {/* Kilos Button */}
    <button name='height'value="cm" onClick={handleClick}>CM</button></div>
  )
}

export default Height