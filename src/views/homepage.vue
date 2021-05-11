<template>
<div id="formulaire">
<form>
        <div class="form-group">
        <label for="exampleFormControlSelect1">Nom</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
    </div>
        <div class="form-group">
        <label for="exampleFormControlSelect1">Spécialité</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>Dentiste</option>
            <option>Ophtalmologue</option>
            <option>Infirmier</option>
        </select>
    </div>
        <div class="form-group">
        <label for="exampleFormControlSelect1">Ville</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>Marseille</option>
            <option>Aix-en-Provence</option>
            <option>Nantes</option>
            <option>Paris</option>
            <option>Lille</option>
            <option>Rouen</option>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {
data() {
        return {
            praticiens: []
        }
    },
    methods: {
        getTask: function () {
            fetch('http://localhost:90/gsb/praticien')
            .then(response => response.json())
            .then((data) => {
              console.log(data) 
            })
        }
    },
    mounted(){
    this.getTask()
    },
}
</script>

<style>

.formulaire{
     display: flex;
    align-items: center;
    justify-content: center;
}
</style>