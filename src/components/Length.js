const Length = (props) => {
    const handleClick = (e) => {
        props.updateProfile(e);
    };
  return (
    <div>
    <p className="question">What is your length preference:</p>
    {/* Short Button */}
    <button name="length" value="short" onClick={handleClick}>Short</button>
    {/* Standard Button */}
    <button name="length" value="standard" onClick={handleClick}>Standard</button>
    {/* Long Button */}
    <button name="length" value="long" onClick={handleClick}>Long</button>

    </div>
  )
}

export default Length