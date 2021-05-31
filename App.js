
import React from 'react';
function App()
{
    return(
<div className = "container"  style={{width:"50%",display:"block",marginLeft:"auto",marginRight:"auto"}}>


<div className = "userDetail"  style={{display:"flex",margin:"20px",padding:"20px"}}>
<div className = "image">
<img src={require("avat.jpg")} alt="react-img"  style={{height: "53px", width: "53px"}}/>
</div>

<div className = "username"  style={{marginLeft:"20px"}}>
<h4>Hiya Karthick</h4>
<p  style={{fontSize:"12px",color:"#949494"}}>working as a Software Engineer</p>
</div>
</div>
</div>
);

}
export default App;
