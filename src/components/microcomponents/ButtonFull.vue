<template>
    <a
      type="button "
      class="btn btn-md button-full rounded text-white text-uppercase"
    >
    {{text}}
    </a>
</template>

<script>
export default {
    name:'ButtonFull',
    props:[
        'text'
        ]
    
};
</script>

<style lang="scss" scoped>
@import 'bootstrap';
@import '../../assets/sass/colors.scss';
.button-full{
      background-color: $blue-lagoon;
      &:hover{
        background-color: $blue-lagoon-trasparent;
        border: 1px $blue-lagoon solid;
      }
    }
</style>