const btn = document.querySelector('.image-box-btn');
const div = document.querySelector('.form-container');
const page = document.querySelector('.page-content');
       
    

function openForm() {
    div.style.display = 'none';
    btn.addEventListener('click', () => {
        div.style.display = 'block';
        div.style.position = 'fixed';
        div.style.top = '2%';
        div.style.left = '25%';
        div.style.zIndex = '1000';
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
const submit = document.querySelector('.submit');
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
    
    });
}
validateForm();

const menuBtn = document.querySelector('.cotrol');
const menu = document.querySelector('.menu');
function toggleMenu() {
    menuBtn.addEventListener('mouseover', () => {
        if (menu.style.display === 'none') {
            const styleMenu = {
                display : 'block',
                position :'absolute',
                top :'60px',
                right :'20px',
                zIndex : '1000',
                backgroundColor :'rgba(255, 255, 255, 0.9)',
                border:"1px solid rgba(0, 0, 0, 0.1)",
                borderRadius :'8px',
            }
            Object.assign(menu.style, styleMenu);
        } else {
            menu.style.display = 'none';
        }
  
    });
    menuBtn.addEventListener('mouseout', () => {
        menu.style.display = 'none';
  
    });

}
toggleMenu();  