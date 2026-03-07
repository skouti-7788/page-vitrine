const btn = document.querySelector('.image-box-btn');
const div = document.querySelector('.form-container');
const page = document.querySelector('.page-home');
//================== style open and close furmule =========================
function openForm() {
    div.style.display = 'none';
    btn.addEventListener('click', () => {
        div.style.display = 'block';
        document.body.appendChild(div);
        page.style.filter = 'blur(5px)';
        
    });
    }
openForm();

const closeBtn = document.querySelector('.close-btn');
function closeForm() {
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '5px';
    closeBtn.style.right = '10px';
    closeBtn.addEventListener('click', () => {
        div.style.display = 'none';
        page.style.filter = 'none';
        
    });
}
closeForm();
//================= validation de formule=================================
const submit = document.querySelector('#submit');
function validateForm() {
    const errorMessage = document.createElement('p');
    submit.parentNode.insertBefore(errorMessage,submit);
    submit.addEventListener('click', (event) => {
        event.preventDefault();
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const classe = document.getElementById('classe').value.trim();
    const niveau = document.getElementById('niveau').value.trim();
    const date = document.getElementById('date').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nom === '' || prenom === '' || classe === '' || niveau === '' || date === '' || email === '') {
        errorMessage.textContent = 'Veuillez remplir tous les champs du formulaire.';
        errorMessage.style.color = 'red';
        errorMessage.style.textAlign = 'center';
        errorMessage.style.marginTop = '10px';
        return ;
    }else {
        errorMessage.textContent = '';

    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          console.log('email ne pas vrai')
    }
    
    });
}
validateForm();
//============================= responsve menu ==============================
const menuBtn = document.querySelector('.control');
const li = document.querySelectorAll('#menu-li');

const menu = document.querySelector('.menu');
function Menu() {
    menuBtn.addEventListener('click', () => {
        if (menu.style.display === 'none') {
            li.forEach(l=>{
                l.style.listStyle = 'none';
                l.style.cursor = 'pointer';
                l.addEventListener('mouseenter',()=>{
                    // l.style.textDecoration = 'underline red 2px'
                    l.style.color = 'rgb(155, 79, 60)';
                });
                 l.addEventListener('mouseleave',()=>{
                    // l.style.textDecoration = 'none'
                    l.style.color = ''
                });
            })
            menu.classList.toggle('menu')
            const styleMenu = {
                
                width:"100px",
                height:'130px',
                padding:'9px',
                display : 'block',
                position :'absolute',
                top :'50px',
                right :'10px',
                zIndex : '1000',
                display:'flex',
                flexDirection:'column',
                gap:'9px',
                backgroundColor :'rgba(255, 255, 255, 0.9)',
                border:"1px solid rgba(0, 0, 0, 0.1)",
                borderRadius :'8px',
            }
            Object.assign(menu.style, styleMenu);
            
        } else {
            menu.style.display = 'none';
        }
  
    });
   

}
Menu();  