<template>
    <h1>Portfolio de Jérémy Aboudan</h1>
    <div class="menu">
        <ul class="nav">
            <li><a href=""><img class="home_logo"  src="../assets/img/home.png" alt="drapeau corse"></a></li>
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#creation">Créations</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</template>

<style scoped>
    .menu{
        padding: 2rem;
        width: 100%;
    }

    h1{
        font-size: 4rem;
        text-align: center;
        color: gold;
        text-decoration: underline;
        text-underline-offset: 20px;
        padding: 2rem;
    }

    .nav{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .nav > li{
        font-size: 3rem;  
    }

    .home_logo{
        width: 80px;
    }

    .nav li a{
        color: gold;
        
    }

    .nav li a:hover {
    filter: drop-shadow(12px 12px 2px gold);
  }
</style>