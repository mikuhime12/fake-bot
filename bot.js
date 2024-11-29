const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
  return [
    "Perkenalkan nama saya Al bot. siapa nama kamu?",
    `Halo ${data?.nama}, Berapa usia kamu? `,
    `Ohhh ${data?.usia}, Hobi kamu apa ya?`,
    `wawww sama dong aku hobi ${data?.hobi}, Btw punya ayang gak?`,
    `ohhh ${data?.pacar}, Yaudah kalau gitu. udahan yah?`,
  ];
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
  if(jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
  init++
  if (init === 1) {
    setTimeout(() => {

    })
    botDelay({ nama: jawaban.value})
  } else if (init === 2) {
   botDelay({ usia: jawaban.value })
  } else if (init === 3) {
  botDelay({ hobi: jawaban.value })
  } else if (init === 4) {
  botDelay({ pacar: jawaban.value})
  } else if (init === 5) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
     pertanyaan.innerHTML = botSay(jawabanUser)[init];
     loaders.style.display = "none"
      container[0].style.filter = "none";
  }, [1000])
  usersData.push(jawaban.value);
  jawaban.value = ""
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke Al bot 😘, kali-kali kita ${usersData[2]} bareng ya`;
  
  jawaban.value = "siap thanks juga!"
}

function botEnd() {
   alert(`Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama.`);
  window.location.reload()
}
