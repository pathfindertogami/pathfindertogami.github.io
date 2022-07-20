function isChecked(){
  if(document.getElementById("podtv").checked){
    window.location.href = '/eventvybor.html'
    document.getElementById("message2").textContent = "https://pathfindertogami.github.io/eventvybor.html";
    document.getElementById("message1").textContent = " ";
    document.getElementById("text").textContent = "из за ебучего джаваскрипта придется копировать ссылку и вставлять ее вручную";
  }
  else{
    document.getElementById("message1").textContent = "Перед тем как продолжить, прочитайте правила и описание ивента https://docs.google.com/document/d/1uPLzFK7pqIJu7NUlydC04pEnTATez5xlCB1SZofdEEk/edit?usp=drivesdk"
    document.getElementById("message2").textContent = " ";
    document.getElementById("text").textContent = "из за ебучего джаваскрипта придется копировать ссылку и вставлять ее вручную";
  }
}
