let aLink = document.querySelector('#aLink');

aLink.addEventListener("click", (event) => {
    alert('sve radi');
});

window.addEventListener("keydown", (event) => {
    let slovo = event.key;
    console.log(slovo);
    if(slovo === 'Delete') {
        console.log('Obrisao si nesto');
    }
});

let slika = document.querySelector('#slika');

slika.addEventListener("mousemove", (event) => {
    console.log('ne ometaj me');
});


registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let x = 5;
    let y = 6;
    console.log(`${x} + ${y} = ${x + y}`);
});

window.addEventListener("resize", (event) => {
    let sirina = event.target.innerWidth;
    let visina = event.target.innerHeight;
    console.log(`Dimenzije ekrana su: ${sirina} X ${visina}`);
});

let sto = document.querySelector('#sto');
sto.addEventListener("change", (event) => {
    alert('raspremi sto!!');
});