import React from "react";
import axios from "axios";
class Products extends React.Component
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
        axios.get("https://akashsir.in/myapi/atecom1/api/api-view-product.php")
        .then((res)=>{
            console.log(res.data.product_list)
            this.setState({
                mydata:res.data.product_list,
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
                        <td>Price</td>
                        <td>Image</td>
                        <td>Quantity</td>
                        <td>Details</td>
                        <td>Cat Id</td>
                        <td>Cat Name</td>
                        <td>Cart</td>
                        <td>Images of Cat</td>
                    </tr>
                </thead>
            {mydata.map((v)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{v.product_id}</td>
                            <td>{v.product_name}</td>
                            <td>{v.product_price}</td>
                            <td><img src={v.product_image} width={100}/></td>
                            <td>{v.product_quantity}</td>
                            <td>{v.product_details}</td>
                            <td>{v.category.sub_category_id}</td>
                            <td>{v.category.sub_category_name}</td>
                            <td>{v.category.is_product_in_cart}</td>
                            <td>{v.images.map((v1)=>{
                                return(<><img src={v1} width={50}/></>)
                            })}</td>
                        </tr>
                    </tbody>
                )
            })}
            </table>
            </>
        )
    }
}
export default Products;