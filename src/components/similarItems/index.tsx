import { useEffect, useState } from "react";
import { Item } from "../../constants/itemType";
import { projectFireStore } from "../../firebase";
import { useNavigate } from "react-router-dom";
import './index.css'
//@ts-ignore
export default function SimilarItems({setImage, productsIDs, gender, category}: {productsIDs: string[], gender: string, category: string}){

    const [similarItems, setSimilarItems] = useState<Item []>([]);

    useEffect(()=>{
        (
            async () => {
                    const result = await projectFireStore.collection(`/${gender}`)
                        .get()
                        .then((snapshot) => {
                            return snapshot.docs.map((doc) => {
                                return {id: doc.id, ...doc.data()}
                            }).filter(product => productsIDs.includes(product.id))
                        });
                    //@ts-ignore
                    setSimilarItems(result as Item);
                    setImage('');
            }
        )()
    },[gender, category, productsIDs]);

    const navigate=useNavigate();
    const handleNavigate=(id: string)=>{ 
      navigate(`/${gender}/${category}/${id}`)
    }

    return <div className="similar-items-container">
        <h2>Similar Items</h2>
        <div className="similar-items">
            {similarItems.map(item=>{
                return <div key={item.id} className="similar-item">
                <div className="similar-item-img-container" onClick={()=>handleNavigate(item.id)}>
                  <img src={item.images[0]} alt={item.title} />
                </div>
                <div className="similar-item-product-price">$ {item.price}</div>
                <div className="similar-item-product-name">{item.title}</div>
              </div>
            })}
        </div>
    </div>
}