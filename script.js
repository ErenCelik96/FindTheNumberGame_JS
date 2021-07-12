const key = 41;//kere maşallah
let attempt = document.getElementById("attempts");
let att = 0;
let uyarı = document.getElementById("lowHigh");

function myFunction() {
  while (true) {
      let input = document.getElementById("input").value;
      if (input == key) {
          uyarı.innerHTML="BAŞARDIN !"
          att += 1; 
          break; 
        } else {
            if (input < key) {
                uyarı.innerHTML="Az söyledin.. Daha yüksek!" 
                att += 1;
                break;
            } else{
                uyarı.innerHTML="Çok söyledin.. Daha az!"
                att += 1;
                break;
            }
        }
    } attempt.innerHTML=`Deneme sayınız: ${att}`;
}