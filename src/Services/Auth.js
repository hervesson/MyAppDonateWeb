import React, { useState, useEffect} from "react"
import { auth } from "./FirebaseConfig";


const Auth = () => {
	const [loged, setLogado] = useState(null)

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
      	if(user){
      		setLogado(true)
      	}else{
      		setLogado(false)
      	}
   	}) 
	}, [])
	return loged;
}

export default  Auth;