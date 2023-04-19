// Mobile Menu

// window.addEventListener('hashchange', () => {
//   if (window.location.hash === '#menu') {
//     document.body.classList.add('header--open-menu');
//   } else {
//     document.body.classList.remove('header--open-menu');
//   }
// });

// Create Program Cards

const programCard = [
  {
    id: '0',
    image: './images/program_icon_0.png',
    title: 'Lecture',
    description: 'Some text would come here. And more text.',
  },

  {
    id: '1',
    image: './images/program_icon_1.png',
    title: 'Lecture',
    description: 'Some text would come here. And more text.',
  },

  {
    id: '2',
    image: './images/program_icon_2.png',
    title: 'Lecture',
    description: 'Some text would come here. And more text.',
  },

  {
    id: '3',
    image: './images/program_icon_3.png',
    title: 'Lecture',
    description: 'Some text would come here. And more text.',
  },

  {
    id: '4',
    image: './images/program_icon_4.png',
    title: 'Lecture',
    description: 'Some text would come here. And more text.',
  },
];

const programContainer = document.getElementById('program-card');

const createProgramCards = () => {
  programCard.map((programInfo) => {
    const createProgram = document.createElement('article');
    const classes = ['flex', 'gap-5', 'bg-emerald-700/50', 'px-2', 'py-8'];
    createProgram.classList.add(...classes);

    createProgram.innerHTML = `
      <img 
        src="./images/program_icon_${programInfo.id}.png" 
        alt="Icon"
        class="self-center"
      >

      <h4 class="text-xl text-rose-600 font-extrabold text-center self-center">
        ${programInfo.title}
      </h4>

      <p class="flex-wrap self-center">
        ${programInfo.description}
      </p>
    `;

    return programContainer.appendChild(createProgram);
  });
};

createProgramCards();
