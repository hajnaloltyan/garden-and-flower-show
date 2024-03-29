// Mobile Menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

// Create Program Cards

const programCard = [
  {
    id: '0',
    image: './images/program_icon_0.png',
    title: 'Design Ideas',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: '1',
    image: './images/program_icon_1.png',
    title: 'Unique Flowers',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: '2',
    image: './images/program_icon_2.png',
    title: 'Forum',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: '3',
    image: './images/program_icon_3.png',
    title: 'Creative Gardens',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },

  {
    id: '4',
    image: './images/program_icon_4.png',
    title: 'Events',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const programContainer = document.getElementById('program-card');

const createProgramCards = () => {
  programCard.map((programInfo) => {
    const createProgram = document.createElement('article');
    const classes = ['grid', 'grid-cols-4', 'gap-2', 'bg-emerald-700/50', 'px-2', 'py-8', 'md:grid-rows-4', 'md:grid-cols-1', 'transition-all', 'hover:scale-105', 'cursor-pointer'];
    createProgram.classList.add(...classes);

    createProgram.innerHTML = `
      <img 
        src="./images/program_icon_${programInfo.id}.png" 
        alt="Icon"
        class="m-auto col-span-1 md:row-span-1"
      >

      <h4 class="text-xl text-rose-600 font-extrabold self-center col-span-1 md:row-span-1 md:text-center">
        ${programInfo.title}
      </h4>

      <p class="flex-wrap self-center col-span-2 md:row-span-2 md:col-span-1 md:text-center">
        ${programInfo.description}
      </p>
    `;

    return programContainer.appendChild(createProgram);
  });
};

createProgramCards();

// Create Garden Cards

const gardenCard = [
  {
    id: '0',
    image: './images/garden_0.jpg',
    title: 'Fairy Gardens',
    subtitle: 'In Ireland, fairy gardens are thought to be the gateway to the underground spirit world.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, corrupti, dolorum placeat veritatis officia deserunt quis aperiam.',
  },

  {
    id: '1',
    image: './images/garden_1.jpg',
    title: 'Traditional Gardens',
    subtitle: 'They feature abundant spring bulbs, flowering shrubs and perennial with clipped hedges and tended lawn.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, corrupti, dolorum placeat veritatis officia deserunt quis aperiam.',
  },

  {
    id: '2',
    image: './images/garden_2.jpg',
    title: 'Clematis',
    subtitle: 'Most species are known as clematis in English, while some are also known as traveller\'s joy.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, corrupti, dolorum placeat veritatis officia deserunt quis aperiam.',
  },

  {
    id: '3',
    image: './images/garden_3.jpg',
    title: 'Rose Gardens',
    subtitle: 'A rose garden is a garden or park, often open to the public, used to present various types of roses.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, corrupti, dolorum placeat veritatis officia deserunt quis aperiam.',
  },

  {
    id: '4',
    image: './images/garden_4.jpg',
    title: 'Persian Buttercups',
    subtitle: 'A tuberous perennial boasting brilliantly colored flowers, adored by florists and gardeners.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, corrupti, dolorum placeat veritatis officia deserunt quis aperiam.',
  },

  {
    id: '5',
    image: './images/garden_5.jpg',
    title: 'Succulents',
    subtitle: 'Don\'t underestimate the power of succulents in your flower garden or living room.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui, corrupti, dolorum placeat veritatis officia deserunt quis aperiam.',
  },
];

const gardenContainer = document.getElementById('garden-card');

const createGardenCards = () => {
  gardenCard.map((gardenInfo) => {
    const createGarden = document.createElement('article');
    createGarden.classList.add('garden', 'flex', 'flex-col', 'align-center');

    createGarden.innerHTML = `
      <h4 class="text-2xl font-extrabold lg:text-xl text-center">
        ${gardenInfo.title}
      </h4>

      <img 
        src="./images/garden_${gardenInfo.id}.jpg" 
        alt="Garden"
        class="py-8 self-center transition-all hover:scale-110"
      >

      <div class="flex flex-col gap-2">
        <h5 class="text-rose-700 font-bold italic">
          ${gardenInfo.subtitle}

          <div class="border-b-2 border-zinc-300 w-[30px] pt-4 lg:pt-2"></div>
        </h5>

        <p>
          ${gardenInfo.description}
        </p>
      </div>
    `;

    return gardenContainer.appendChild(createGarden);
  });
};

createGardenCards();

// Mobile - Show more button

const screenSize = window.matchMedia('(max-width: 767px)');

if (screenSize.matches) {
  const gardenCards = document.getElementsByClassName('garden');
  const cardsHidden = [];

  for (let i = 2; i < gardenCards.length; i += 1) {
    cardsHidden.push(gardenCards[i]);
  }

  cardsHidden.forEach((card) => card.classList.add('hidden'));

  const moreButton = document.getElementById('more');

  moreButton.addEventListener('click', () => {
    cardsHidden.forEach((card) => card.classList.remove('hidden'));

    moreButton.classList.add('hidden');
  });
}
