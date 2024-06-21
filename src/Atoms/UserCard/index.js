import "./index.css";
const UserCard = ({image,fullName})=>{
    return(
        <div className="cards">
            <img src={image} alt={`${fullName} profile`}/>
            <h3 className="name">{fullName}</h3>
        </div>
    )
}
export default UserCard;