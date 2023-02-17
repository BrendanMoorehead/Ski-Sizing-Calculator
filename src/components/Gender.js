
const Gender = (props) => {
    //Updates the gender of the user
    const handleClick = (e) => {
        props.updateProfile(e);
    };
  return (
    <div className="gender">
        {/* Question */}
        <p className="question">Are you a:</p>
        {/* Male Button */}
        <button className="input-button" name="gender" value="Male" onClick={handleClick}>Male</button>
        {/* Female Button */}
        <button className="input-button" name='gender'value="Female" onClick={handleClick}>Female</button>
    </div>
  )
}
export default Gender