function isChecked(){
  if(document.getElementById("podtv").checked){
    document.getElementById("message").textContent = "Теперь вы можете перейти дальше https://pathfindertogami.github.io/eventvybor.html";
  }
  else{
    document.getElementById("message").textContent = "Перед тем как продолжить, прочитайте правила и описание ивента https://docs.google.com/document/d/1uPLzFK7pqIJu7NUlydC04pEnTATez5xlCB1SZofdEEk/edit?usp=drivesdk"
  }
}
