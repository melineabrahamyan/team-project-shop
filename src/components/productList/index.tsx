import { useEffect, useState } from "react";
import { projectFireStore } from "../../firebase";

function ProductList() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    //@ts-ignore
    let results = [];

    projectFireStore
      .collection("/store")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });

        //@ts-ignore
        setStore(results);
      });
  }, []);

  console.log(store, "store");
  return (
    <>
      {/* {store.map((product) => {
        return <div>{product.title}</div>;
      })} */}
    </>
  );
}

export default ProductList;
