import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, setDoc,doc ,query,where, getDoc, getDocs,deleteDoc, queryEqual} from 'firebase/firestore/lite';
import { redirect } from '@sveltejs/kit';

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

export const load = async({params})=>
{
    let x = 1;
    const db = getFirestore(app);
    const myfetch = collection(db,"Products")
    const q = query(myfetch,where("id","==",params.ProductId));
    const querySnapshot =await getDocs(q);
    querySnapshot.forEach((doc) =>{
        x= doc.data()
    })
return x


}

export const actions = {
    //recives data form the form and updates the database based on it 
    UpdateProduct:async({request}) =>{
        let {name,description,price,quantity,id,Stock} = Object.fromEntries(await request.formData())
        try{
            console.log(Stock)
            const db = getFirestore(app);
            const movieref = collection(db,"Products")
            await setDoc(doc(movieref,id),
            {
            id:id,
            name:name ,
            description: description,
            price:price,
            quantity:quantity,
            in_stock:Stock==='true',
            });
            
            }catch(e)
            {
                console.error("err",e)
            }
        redirect(307,'/')
        }
        
}


