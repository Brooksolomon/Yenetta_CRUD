import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc,doc ,query,where, getDoc, getDocs,deleteDoc, queryEqual} from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,setPersistence, inMemoryPersistence } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgG5BTlYdB_io7r67qjKrq6bDnru_m8tY",
    authDomain: "product-management-ecd06.firebaseapp.com",
    projectId: "product-management-ecd06",
    storageBucket: "product-management-ecd06.appspot.com",
    messagingSenderId: "663809503598",
    appId: "1:663809503598:web:0b9cb6753e2dbc77ea517f",
    measurementId: "G-0C844JFWF7"
  };
const app = initializeApp(firebaseConfig);

export const load = async() =>
{
    let products = []
    async function returns()
    {
    const db = getFirestore(app);
    const myfetch = collection(db,"Products")
    const q = query(myfetch);
    const querySnapshot =await getDocs(q);
    querySnapshot.forEach((doc) =>{
    products.push(doc.data());});
    return products   
    }
    

return {products:await returns()};
}
export const actions = {
    CreateProduct:async({request}) =>{
        let {name,description,price,quantity} = Object.fromEntries(await request.formData())
        try{
            const db = getFirestore(app);
            const movieref = collection(db,"Products")
            var id = Math.random().toString(16).slice(2)
            await setDoc(doc(movieref,id),
            {
            id:id,
            name:name ,
            description: description,
            price:price,
            quantity:quantity,
            in_stock:true,
            });
            // console.log("Document written with ID: ", movieref.id);
            }catch(e)
            {
                console.error("err",e)
            }
        },
        DeleteProduct:async({request}) =>{
        let {id} = Object.fromEntries(await request.formData())
        const db = getFirestore(app);
        await deleteDoc(doc(db,'Products',id));
        
    }
}


