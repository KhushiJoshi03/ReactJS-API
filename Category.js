import axios from "axios";
import React from "react";
class Category extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            mydata:[],
            isload:false
        }
        
    }
    componentDidMount()
    {
        axios.get("https://akashsir.in/myapi/atecom1/api/api-view-category.php")
        .then((res)=>{
            console.log(res.data.category_list)
            this.setState({
                mydata:res.data.category_list,
                isload:true
            })
        })
    }
    render()
        {
            var {isload,mydata}=this.state
            if(!isload)
            {
                return <h1>Loading...</h1>
            }
            return(
                <>
                <table border={1}>
                <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Image</td>
                        </tr>
                    </thead>
                {mydata.map((v)=>{
                    return(
                        
                        <tbody>
                            <tr>
                                <td>{v.category_id}</td>
                                <td>{v.category_name}</td>
                               <td><img src={v.category_image} width={200}/></td>
                            </tr>
                        </tbody>
                    
                    )
                })}
                </table>
                </>
            )
        }
}
export default Category;