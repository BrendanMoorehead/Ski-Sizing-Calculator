const Skill = (props) => {
    const handleClick = (e) => {
        props.updateProfile(e);
    };
  return (
    <div>
    <p className="question">What is your skill level:</p>
    {/* Beginner Button */}
    <button name="skill" value="beginner" onClick={handleClick}>Beginner</button>
    {/* Intermediate Button */}
    <button name='skill'value="intermediate" onClick={handleClick}>Intermediate</button>
    {/* Advanced Button */}
    <button name='skill'value="advanced" onClick={handleClick}>Advanced</button>
    {/* Expert Button */}
    <button name='skill'value="expert" onClick={handleClick}>Expert</button>

    </div>
  )
}

export default Skill