const header = document.querySelector('.header');
const doc = document.documentElement;
const techContainer = document.getElementById('tech-container');
const button = document.getElementById('tech-button');
let lastScrollTop;
const data = ['Python', 'Django', 'PostgreSql', 'Git',  'Linux', 'Bash',  'Docker',  'Redis', 'Nginx','Gunicorn', 'HTML','Pandas', 'Numpy', ];

const scrollHandler = () => {
    const currentScrollTop = window.scrollY;


    if (typeof lastScrollTop === 'undefined') {
        lastScrollTop = currentScrollTop;
    }

    const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

    lastScrollTop = currentScrollTop;

    if (scrollDirection === 'down' && currentScrollTop > 150) {
        header.classList.add('hidden-header');
    } else {
        header.classList.remove('hidden-header');
    }
};

const createTech = (data) => {
  data.forEach((el) => {
    const tech = document.createElement('div');
    tech.className = 'tech-info';
    tech.innerHTML = `<img src="assets/img/muppers/${el}.svg" /><p>${el}</p>`;
    techContainer.appendChild(tech);
  });
};

createTech(data);

window.addEventListener('scroll', scrollHandler);