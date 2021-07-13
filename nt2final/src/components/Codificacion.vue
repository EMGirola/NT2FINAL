<template>

<section>

  <input v-model="rawMessage" />

  <p>{{ rawMessage }}</p>

  <div v-if="getMessageSize > 0">
    <p> Tamaño: {{getMessageSize}}</p>
    <p> Codificado: {{rawMessage | lowercase | encode}}</p>
    <p> Mayusculas: {{rawMessage | uppercase}} </p>
    <p> Minusculas: {{rawMessage | lowercase}} </p>
    <p> Primero Mayuscula: {{rawMessage | lowercase | intercalate(true) }} </p>
    <p> Primero Minuscula: {{rawMessage | lowercase | intercalate(false) }} </p>



  </div>

  <br/>

  <p>Respuestas: </p>
  <ol>
    <li>b</li>
    <li>b</li>
    <li>c</li>
    <li>b</li>
    <li>b,c</li>

  </ol>

  <div>

  </div>

</section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-codificacion',
    props: [],
    mounted () {

    },
    data () {
      return {
        rawMessage: "",
      }
    },
    methods: {

    },
    computed: {
      getMessageSize(){
        return this.rawMessage.length;
      }
    }
}


</script>

<style scoped lang="css">

</style>
