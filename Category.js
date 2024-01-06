import axios from "axios";
import React from "react";
class Category extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mydata: [],
            isload: false
        }

    }
    componentDidMount() {
        axios.get("https://akashsir.in/myapi/atecom1/api/api-view-category.php")
            .then((res) => {
                console.log(res.data.category_list)
                this.setState({
                    mydata: res.data.category_list,
                    isload: true
                })
            })
    }
    render() {
        var { isload, mydata } = this.state
        if (!isload) {
            return <h1>Loading...</h1>
        }
        return (
            <>  
                <div class="container">
                <div class="row product" >
                    {mydata.map((v) => {
                        return (
                            <>

                                <div class="col-md-4">
                                    <section class="articles">
                                        <article>
                                            <div class="article-wrapper">
                                                <figure>
                                                    <img src={v.category_image} alt="" />
                                                </figure>
                                                <div class="article-body">
                                                    <h2>{v.category_name}</h2>
                                                    <a class="btn btn-primary">Buy Now</a>
                                                </div>
                                            </div>
                                        </article>
                                    </section>

                                </div>



                            </>
                        )
                    })}
                </div>
                </div>

            </>
        )
    }
}
export default Category;