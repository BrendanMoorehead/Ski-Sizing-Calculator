import TextField from "./TextField";

const Weight = (props) => {
  //Updates the gender of the user
  const handleClick = (e) => {
    props.updateProfile(e);
};
  return (
    <div>  {/* Question */}
    <p className="question">How much do you weigh:</p>
    <TextField/>
    {/* Pounds Button */}
    <button name="weight" value="lbs" onClick={handleClick}>LBS</button>
    {/* Kilos Button */}
    <button name='weight'value="kg" onClick={handleClick}>KG</button></div>
  )
}

export default Weight