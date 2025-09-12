import {Dataa} from "../utils/Dataa"

function SingleCard() {
    return (
           <div className="flexy">
           {   Dataa.map((singleItem) => {
                    return (<div className="single-card">
                        <img src={singleItem.img} alt="" />
                        <h2>{singleItem.name}</h2>
                        <p>{singleItem.dsc}</p>
                        <p>{singleItem.country}</p>
                        <p>{singleItem.rate}</p>
                        <p>{singleItem.price}</p>
                        <button className="btn" >Read More</button>
                    </div>)
                })
                
            }
                </div>
            )
            } 
      
              
    


export default SingleCard