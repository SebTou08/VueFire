<template>
  <v-form >
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
        >

          <v-text-field
              v-model="newItem"
              label="First name"
              @keyup.enter="addItem"
          ></v-text-field>
          <v-select
              v-model="colegio"
              :items="items"
              label="Colegio"
              required
          ></v-select>
          <v-select
              v-model="curso"
              :items="cursosList"
              label="Curso"
              required
          ></v-select>
          <v-select
              v-model="nivel"
              :items="nivelesNameList"
              label="Nivel"
              required
          ></v-select>
          <v-select
              v-if="nivel !== ''"
              v-model="grado"
              :items="gradosList"
              label="Grado"
              required
          ></v-select>
          <v-text-field
              v-model="newItem"
              label="First name"
              @keyup.enter="addItem"
          ></v-text-field>
          <v-text-field
              v-model="newItem"
              label="First name"
              @keyup.enter="addItem"
          ></v-text-field>
        </v-col>

        <v-btn
            color="accent"
            depressed
            elevation="2"
            large
            outlined
            x-large
            @click="addItem"
        >Send</v-btn>

      </v-row>
    </v-container>
  </v-form>
</template>

<script>


import {db} from "@/firebase/db";
export default {
  name: "formComponent",
  data() {
    const items= []
    const cursosList = []
    const nivelesList = []
    const nivelesNameList=[]
    const nivel = ''
    const colegio =''
    const grado = ''
    const curso = ''
    const gradosList = []
    const taskCollection = db.collection('tasks')
    return {
      gradosList,
      grado,
      nivel,
      nivelesNameList,
      nivelesList,
      colegio,
      curso,
      cursosList,
      items,
      newItem: '',
      taskCollection
    }
  },

  methods: {

    async getColegios(){
      db.collection('colegios').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("-> doc", doc.data().nombre);
          this.items.push(doc.data().nombre)
        })
      })
    },

    async getGrados(){
      db.collection('nivel').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc)=>{
          const objj = {
            id: doc.id,
            nivel: doc.data().nombre
          }
          console.log("-> objj", objj);
          this.nivelesList.push(objj)
        })
        this.nivelesNameList = this.nivelesList.map(e => {return e.nivel})
      })
    },

    async getCursos(){
      db.collection('cursos').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.cursosList.push(doc.data().nombre)
        })
      })
    },

    setGrados(nivelName){
      console.log(nivelName)
       var gradosRef = db.collection('grados');
       var query = gradosRef.where("nombre", "==", nivelName).get().then(
           (querySnapshot) => {
             querySnapshot.forEach((doc)=> {
               console.log("-> doc", doc.data());
             })
           }
       )
      .catch((e) => console.log(e))
      console.log(query)
      // db.collection("grados").where(query)
      // .get()
      // .then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, "=>>>>>>>>>>>  ", doc.data());
      //   });
      // }).catch((error) => {
      //       console.log("Error getting documents: ", error);
      //     });
    },

     addItem(){
      console.table(this.nivelesNameList)
       console.log("Sdsdsd:  "+ this.nivel)
      if (this.newItem){
        console.log('SIUUUUUUUUU');
        console.log(this.newItem);
        this.taskCollection.add({
          nombre: this.newItem,
          nivel: this.nivel,
          colegio: this.colegio,
          curso: this.curso
        })
        this.newItem = ''
        this.curso = ''
        this.colegio = ''
        this.nivel = ''
      }
    }
  },
  watch:{
   nivel(prev){
      this.setGrados(prev)
   }
  },

   mounted() {
    this.getColegios()
     this.getCursos()
     this.getGrados()
  },



}
</script>

<style scoped>

</style>