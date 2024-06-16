//where to add...
 const mainContainer = document.getElementById('main-container');
 
//what to be added...

 const section = document.createElement('section');
 const h1 = document.createElement('h1');
 h1.innerText = 'my favorite food list';
 section.appendChild(h1);

 const ul = document.createElement('ul');
 const li1 = document.createElement('li');
 li1.innerText = 'biriyani';
 ul.appendChild(li1);

 const li2 = document.createElement('li');
 li2.innerText = 'tanduri';
 ul.appendChild(li2);

 const li3 = document.createElement('li');
 li3.innerText = 'vaja mahc';
 ul.appendChild(li3);

 section.appendChild(ul);


 mainContainer.appendChild(section);



 // Set inner HTML directly.........

 const sectionDress = document.createElement('section');

 sectionDress.innerHTML = `
 <h1>My Dress Favorite</h1>
 <p>I dont have any favourite dress.both are normal</p>
 <ul>
    <li>panjami</li>
    <li>genji</li>
    <li>broka</li>
 </ul>
 `

 mainContainer.appendChild(sectionDress);