<template>
  <div class="main-container">
    <div>
      <h1 class="title" :style="{fontWeight: '450'}">9eme GALA de soutien de l'association</h1>
      <h1 class="title" :style="{fontWeight: '900'}">Mine De Savoir</h1>
    </div>
    <div class="jauge-container">
      <div class="number-container"><h1 class="number">0€</h1></div>
      <div class="jauge-max" :style="{
          background: `linear-gradient(to right, #F887A2 ${pourcentageJauge}, #FEE1D2 ${pourcentageJauge})`
        }">
        <h1 class="number">{{ totalDon }}€</h1>
      </div>
      <div class="number-container"><h1 class="number">70 000€</h1></div>
    </div>
    <div class="extra-container">
      <HistoriqueDon @don-ajoute="ajouterDon"/>
    </div>
  </div>
</template>

<script>
import HistoriqueDon from './components/HistoricDon.vue';

export default {
  name: 'App',
  components: {
    HistoriqueDon
  },
  data() {
    return {
      totalDon: 0,
      objectifDon: 70000,
      nouveauDon: ''
    };
  },
  methods: {
    ajouterDon(montant) {
      this.totalDon += montant;
      if (this.totalDon >= this.objectifDon) {
        this.totalDon = this.objectifDon;
      }
    },
  },
  computed: {
    pourcentageJauge() {
      return (this.totalDon / this.objectifDon) * 100 + '%';
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html, body {
  margin:0;
  padding:0;
  height:100%;
}

.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f887a19d;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 15%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: #6F5B3E;
}

.jauge-container {
  display: flex;
  flex-direction: row;
  height: 40%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.number-container {
  width: 10%;
}

.number {
  color:#6F5B3E;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 800;
}

.jauge-max {
  width: 80%;
  height: 30%;
  border-radius: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-color: #FFF4EF;
}

.extra-container {
  height: 45%;
  display: flex;
  flex-direction: row;
  justify-content:space-around
}

.gift-form {
  width: 15%;
  display: flex;
  flex-direction: column;
}

.input-number {
  -webkit-appearance: none;
  margin: 0;
  -moz-appearance: textfield;
  border: none;
  outline: none;
  height: 7%;
}

.historic-container {
  height: 20%;
  width: 30%;
  background-color: red;
}



</style>
