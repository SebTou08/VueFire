<template>
  <v-card
      elevation="2"
      outlined
      shaped
  >

    <v-list flat>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
      >
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
        >
          <v-list-item-icon>
            <v-icon
                large
                color="green darken-2"
            >
              mdi-domain
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.nombre"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>


  </v-card>
</template>

<script>
//! important links
//
//https://firebase.google.com/docs/firestore/query-data/get-data#node.js
//https://www.youtube.com/watch?v=tIioNaEADCI
//
import {db} from "@/firebase/db";
export default {
  name: "colegios",
  data: () => ({
    selectedItem: 1,
    items: [],
    collection: null
  }),
  methods:{
     async getColegios(){
      console.log("siu")
      // db.collection('tasks').onSnapshot(
      //     snapshot => {
      //       this.items = snapshot.docs.map(doc =>({
      //         id: doc.id, ...doc.value()
      //       }))
      //     }
      // )
      const tasksRef = db.collection('colegios');
      const snapshot = await  tasksRef.get();
      snapshot.forEach(doc => {
        this.items.push(doc.data())
      })
    }
  },
  mounted() {
    this.getColegios()
  }
}
</script>

<style scoped>

</style>