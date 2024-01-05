import { useNavigate } from "react-router-dom";
function Error()
{
    var navigate = useNavigate()
    return(
        <>
            <h1 style={{color:"red"}}> Error </h1>
            <button onClick={()=>navigate("/Home")}>Go Back</button>
        </>
    )
}
export default Error;