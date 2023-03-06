import { initializeApp } from "firebase/app";
import {getFirestore, collection,addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC587_vY7FF2Qf5ZO7326TzqPdRy1kemqU",
  authDomain: "my-perif.firebaseapp.com",
  projectId: "my-perif",
  storageBucket: "my-perif.appspot.com",
  messagingSenderId: "103748920662",
  appId: "1:103748920662:web:31a17be896d4c8676ca2f7"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}