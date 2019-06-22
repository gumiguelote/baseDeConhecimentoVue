<template>
    <div class="user-dropdown">
        <div class="user-button">
            <span class="d-nome d-sm-block">{{ user.name }}</span>
            <div class="user-dropdown-img">
                <Gravatar :email="user.email" :alt="`Imagem Perfil de ${user.name}`" />
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <a href><i class="fa fa-cogs"></i> Administração</a>
            <a href><i class="fa fa-sign-out"></i> Sair</a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Gravatar from 'vue-gravatar';

export default {
    name: 'UserDropdown',
    components: { Gravatar},
    computed: mapState(['user'])
}

</script>

<style>
    .user-dropdown {
        position: relative;
        height: 100%;
    }

    .user-dropdown:hover {
        background-color: rgba(0,0,0, 0.2)
    }

    .user-dropdown-img {
        margin:0px 10px;
    }

    .user-dropdown-img > img {
        height: 50px;
        border-radius: 4px
    }

    .user-button {
        display: flex;
        align-items: center;
        color:#fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
    }
    
    .user-dropdown-content {
        position: absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        width: 100%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.3s linear;
    }

    .user-dropdown:hover .user-dropdown-content{
        visibility: visible;
        opacity: 1;
    }

    .user-dropdown-content a{
        padding: 10px 20px;
        text-decoration: none;
        color:#000;
    }

    .user-dropdown-content a:hover{
        background: #ededed;
        text-decoration: none;
        color:#6d6c6c;
    }

    .user-dropdown-content a i{
        padding-right: 10px;
        font-size: 1.2rem
    }
    

</style>
