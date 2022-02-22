<template>
    <a
      type="button "
      class="btn btn-md button-empty rounded text-white text-uppercase"
    >
    {{text}}
    </a>
</template>

<script>
export default {
    name:'ButtonEmpty',
    props:[
        'text'
        ]
    
};
</script>

<style lang="scss" scoped>
@import 'bootstrap';
@import '../../assets/sass/colors.scss';
.button-empty{
      border: $blue-lagoon 2px solid;
      &:hover{
        background-color: $blue-lagoon;
      }
    }
</style>