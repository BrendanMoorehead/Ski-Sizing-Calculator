const UserData = ({title, input}) => {
  return (
    <div className="userData">
        <h4 className="userData--title">{title}</h4>
        <p className="userData--content">{input}</p>
    </div>
  )
}

export default UserData