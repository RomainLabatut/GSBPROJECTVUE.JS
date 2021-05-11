<template>
 <footer>
        <div>
          <div class="footer">
            <h4>GSB</h4>
          </div>
          <div>
            <ul class="lien-footer">
              <li class="mention"> <a class="mention" href="#"> <strong> Mention Légales </strong></a></li>
              <li class="mention"> <a class="mention" href="#"> <strong> RGPD </strong></a></li>
              <li class="mention"> <a class="mention" href="#"> <strong> Cookies </strong></a></li>
            </ul>
          </div>
        </div>
      </footer>
</template>

<script>

</script>

<style>
/* FOOTER */

footer{
    background-color:  #123E6A;
    height: 121px;
    display: flex;
    align-items: center; 
    position: absolute;
    width: 100%;
    bottom: 0; left: 0; right: 0;
}
.footer{
    background-color: #0F2841;
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px; 
}

h4{
    font-size: 80px !important;
    color:  #123E6A ;
    font-family: 'Arapey', serif;
    letter-spacing: 3rem;
    margin:0;

}

.lien-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px ;
}
.mention{
    padding-right: 30px;
    list-style: none;
    text-decoration: none;
    font-weight: bold;
    color: black;

}

.mention:hover{
    color: white;
    list-style: none;
    text-decoration: none;
}
</style>
