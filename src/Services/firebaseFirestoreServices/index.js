import { auth, firestore } from "../FirebaseConfig";
import firebase from "firebase/app";


class firebaseFirestoreServices {
   gravarConta = (nome, descricao, video, email, telefone, endereco, cidade, estado, cep, tags) => {
      let user = auth.currentUser;
         firestore.collection('Entidades').doc(user.uid).update({
         Conta:{
            nome: nome,
            descricao: descricao,
            video: video,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            cep: cep,
            tags: tags
         } 
      }).then(() => {
         console.log("Document successfully written!");
      })
      .catch((error) => {
         console.error("Error writing document: ", error);
      });  
   }

   gravarEvento = (rua, bairro, numero) => {
      let user = auth.currentUser;
         firestore.collection('Entidades').doc(user.uid).update({ 
            Agenda : firebase.firestore.FieldValue.arrayUnion({
            rua: rua,
            bairro: bairro,
            numero: numero
         })                  
      }).then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });  
   }

   gravarDadosBancarios = (banco, conta, digito, tipopix, pix) => {
      let user = auth.currentUser;
         firestore.collection('Entidades').doc(user.uid).update({
         DadosBancarios:{
            banco: banco,
            conta: conta,
            digito: digito,
            tipopix: tipopix,
            pix: pix,
         }                   
      }).then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.log("Error writing document: ", error);
      });  
      
   }
}


export { firebaseFirestoreServices };