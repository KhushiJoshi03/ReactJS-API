import React from "react";
import axios from "axios";
class Subcategory extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            data:[],
            isload:false
        }
        
    }
    componentDidMount()
    {
        axios.get("https://akashsir.in/myapi/atecom1/api/api-subcategory-list.php")
        .then((res)=>{
            console.log(res.data.sub_category_list)
            this.setState({
                data:res.data.sub_category_list,
                isload:true
            })
        })
    }
    render()
    {
        var {isload,data}=this.state
        if(!isload)
        {
            return <h1>Loading...</h1>
        }
        return(
            <>
            <table border={1}>
            <thead>
                    <tr>
                        <td>Sub Id</td>
                        <td>Sub Name</td>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Image</td>
                    </tr>
                </thead>
            {data.map((v)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{v.sub_category_id}</td>
                            <td>{v.sub_category_name}</td>
                            <td>{v.category_id}</td>
                            <td>{v.category_name}</td>
                           <td><img src={v.sub_category_image} width={200}/></td>
                        </tr>
                    </tbody>
                )
            })}
            </table>
            </>
        )
    }
}
export default Subcategory;