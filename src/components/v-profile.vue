<template>


<div class="v-profile">

  <p>Мой профиль на Github</p>


  <router-link :to="{name: 'team'}">
    <div class="button_my_team">
  <button type="button" class="btn btn-primary">My team</button>
    </div>

  </router-link>
 

<div class="my_avatar_img">
  <figure>
        <img :src="require('../assets/images/my_avatar.jpeg')" alt="img">
        <figcaption><a href=https://github.com/katerinakurilo>katerinakurilo</a></figcaption>
    </figure>

</div>

<ul>
  
  <li>Дата создания аккаунта: 16.05.2020</li>
  <li>Список репозиториев:</li>
  <ol>
     <li><a href=https://github.com/katerinakurilo/test>test</a></li>
        <ul>
          <li>Язык программирования: Javascript</li>
          <li>Дата создания: 24.02.2021</li>
          <li>Клонировать репозиторий можно по ссылке: <a href="https://github.com/katerinakurilo/test.git">https://github.com/katerinakurilo/test.git</a> </li>
       </ul>
     <li><a href=https://github.com/katerinakurilo/katerinakurilo.github.io>katerinakurilo.github.io</a></li>
     <ul>
          <li>Дата создания: 15.02.2021</li>
          <li>Клонировать репозиторий можно по ссылке: <a href="https://github.com/katerinakurilo/katerinakurilo.github.io.git">https://github.com/katerinakurilo/katerinakurilo.github.io.git</a> </li>
       </ul>
     
     <li><a href=https://github.com/katerinakurilo/furniture_shop>furniture_shop</a></li>

     <ul>
          <li>Дата создания: 15.02.2021</li>
          <li>Клонировать репозиторий можно по ссылке: <a href="https://github.com/katerinakurilo/furniture_shop.git">https://github.com/katerinakurilo/furniture_shop.git</a> </li>
       </ul>


     <li><a href=https://github.com/katerinakurilo/mobile>mobile</a></li>
     <ul>
      <li>Язык программирования: dart</li>
          <li>Дата создания: 20.05.2020</li>
          <li>Клонировать репозиторий можно по ссылке: <a href="https://github.com/katerinakurilo/mobile.git">https://github.com/katerinakurilo/mobile.git</a> </li>
       </ul>


     <li><a href=https://github.com/katerinakurilo/quadraticEquation->
quadraticEquation-</a></li>

<ul>
      <li>Язык программирования: dart</li>
          <li>Дата создания: 17.05.2020</li>
          <li>Клонировать репозиторий можно по ссылке: <a href="https://github.com/katerinakurilo/quadraticEquation-.git">https://github.com/katerinakurilo/quadraticEquation-.git</a> </li>
       </ul>

     <li><a href=https://github.com/katerinakurilo/dart>dart</a></li> 
     <ul>
      <li>Язык программирования: dart</li>
          <li>Дата создания: 16.05.2020</li>
          <li>Клонировать репозиторий можно по ссылке: <a href="https://github.com/katerinakurilo/dart.git">https://github.com/katerinakurilo/dart.git</a> </li>
       </ul>

  </ol>
  <li>Список подписок пользователя:</li>
  <div class="following">
    <figure>
        <img :src="require('../assets/images/elena_in_code.jpeg')" alt="img">
        <figcaption><a href=https://github.com/elena-in-code>elena-in-code</a></figcaption>
    </figure>
    <figure>
        <img :src="require('../assets/images/lydiahallie.jpeg')" alt="img">
        <figcaption><a href=https://github.com/lydiahallie>lydiahallie</a></figcaption>
    </figure>

  
   
  </div>

</ul>






</div>
</template>




<script>


import {mapGetters} from 'vuex'



export default {
    name: 'v-profile',
    components: {
    },
  
    props: {},
    data() {
        return {
         
        }
    },
    computed: {
      ...mapGetters([
          'CART'
      ])
    }
}
</script>




<style lang="scss">
.v-profile{
    max-width: 900px;
    color: black;
   
}
.following {
  display: flex;

}
.following img {
  height: 100px;
  width: 100px;
  margin-right: 20px;
}
.button_my_team {
  position: relative;
  right: -600px;
  top: -40px;
}
</style>