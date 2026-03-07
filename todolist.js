//=========================ex.3 todo list====================================
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const classe = document.getElementById('classe');
const niveau = document.getElementById('niveau');
const date = document.getElementById('date');
const email = document.getElementById('email');
// const submit = document.querySelector('#submit');

submit.addEventListener('click',(event)=>{
        event.preventDefault();
        function todoList(){
          const todo = JSON.parse(localStorage.getItem('todo')) || [];
          const newlist = {
            nom :nom.value.trim(),
            prenom:prenom.value.trim(),
            classe:classe.value.trim(),
            niveau:niveau.value.trim(),
            date:date.value.trim(),
            email:email.value.trim()
           };
        if(todo.nom !== newlist.nom){    
          const todolist = [...todo,newlist];
          localStorage.setItem('todo',JSON.stringify(todolist));
            nom.value = ''
            prenom.value = ''
            classe.value = ''
            niveau.value = ''
            date.value = ''
            email.value = '' 
          } 
        
        }
      todoList();
});
      
function aficher (){
    const list = JSON.parse(localStorage.getItem('todo')) || [];
    // const table = document.getElementById('table')
    const tbody = document.querySelector('tbody');
    // table.appendChild(tbody);
   
    list.forEach((l)=>{
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const tdNom = document.createElement('td');
        tdNom.textContent = l.nom;
           tr.appendChild(tdNom);
        const tdPrenom = document.createElement('td');
        tdPrenom.textContent = l.prenom;
          tr.appendChild(tdPrenom);
        const tdClasse = document.createElement('td');
        tdClasse.textContent = l.classe;
          tr.appendChild(tdClasse);
        const tdDate = document.createElement('td');
        tdDate.textContent = l.date;
          tr.appendChild(tdDate);
        const tdEmail = document.createElement('td');
        tdEmail.textContent = l.email;
          tr.appendChild(tdEmail);
        const tdNiveau = document.createElement('td');
        tdNiveau.textContent = l.niveau;
          tr.appendChild(tdNiveau);
     })
} 
aficher();