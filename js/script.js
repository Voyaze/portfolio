const projectsData = [
    {
        title       : 'Freshall',
        programs    : ['HTML', 'CSS', 'Javascript', 'Laravel', 'MySQL'],
        description : 'Freshall is my current group project for the 5th semester in my Web Programming class. This project involves creating a web application using the Laravel framework. The main feature of the application is that it serves as an online store, allowing the admin to post products and users to purchase them.',
        code        : 'https://github.com/freshall-id',
        prototype   : '',
        imageUrl    : './assets/Freshall.png'
    },
    {
        title       : 'Meja Belajar',
        programs    : ['HTML', 'CSS', 'Javascript', 'Go', 'PostgreSQL', 'Figma'],
        description : 'Meja Belajar was a semester-long group project for my Software Engineering class. Its primary feature is connecting mentors and mentees, both university students, to help mentees navigate academic challenges with the guidance of mentors. I personally worked on the back-end features on the helpers sections.',
        code        : 'https://github.com/Meja-Belajar',
        prototype   : 'https://www.figma.com/design/EGZae4cmDVWzi1CVvavIgR/Meja-Belajar-%7C-System-UI-UX?node-id=0-1&t=n5IRbHJS2GzyhKaW-1',
        imageUrl    : './assets/MejaBelajar.png'
    },
    {
        title       : 'Bersihkan',
        programs    : ['HTML', 'CSS', 'Javascript','Figma'],
        description : 'Bersihkan was a group project developed for my Human-Computer Interaction class. The project aimed to promote recycling by exchanging recycled trash for points, which could be redeemed for rewards. My personal contributions included creating the prototype and the HTML for the homepage.',
        code        : 'https://github.com/ricotandrio/bersihkan.app',
        prototype   : 'https://www.figma.com/design/9VesRpEUFjNbK3n71Ne7fz/Bersihkan_Prototype?node-id=0-1&t=nZ8jBr0NRpqVcBBW-1',
        imageUrl    : './assets/Bersihkan.png'
    },
    {
        title       : 'Online Shopping - Java CLI Application',
        programs    : ['Java'],
        description : 'A CLI Application built using Java. The application is an Online Shopping Platform using OOP concepts I learned over the semester. Through this assignment I learned a lot about OOP concepts more in-depth.',
        code        : 'https://github.com/Voyaze/JavaCLIAssignment.git',
        prototype   : '',
        imageUrl    : './assets/JavaCLIApplication.png'
    },
    {
        title       : 'JCC - Jakarta Conference Center',
        programs    : ['HTML','CSS','Javascript'],
        description : 'My final project for my Human Computer Interaction Class\'s Lab and my first full developed static website. I learned a lot of HTML, CSS, and Javascript through this final project since everything was needed to be made from scratch.',
        code        : 'https://github.com/Voyaze/JCC.git',
        prototype   : 'https://www.figma.com/design/eZkmwry78qTqixVmK4cnoV/HCI?node-id=0-1&t=VQtnOaNAr8GBWfNV-1',
        imageUrl    : './assets/JCC.png'
    }

];

const projectContainer = document.querySelector('.projects');

const postProjects = () => {
    projectsData.map((data) => {
        // Generate technology badges dynamically
        const badges = data.programs.map(program => `
            <span class="badge rounded-pill text-white bg-primary">${program}</span>
        `).join(' ');
        
        let prototypeButton = ''
        if(data.prototype){
            prototypeButton = `                       
            <div>
                <a href="${data.prototype}" target="_blank">
                    <button type="button" class="btn btn-primary btn-md">View Prototype</button>
                </a>
             </div>
            `
        }
        else{
            prototypeButton = `
            <div>
            <button type="button" class="btn btn-primary btn-md" disabled>View Prototype</button>
            </div>
            `
        }

        projectContainer.innerHTML += `
            <div class="d-flex mt-4 mb-4">
                <div class="col-6 d-flex justify-content-center align-items-center">
                    <img src="${data.imageUrl}" alt="${data.title}" style="object-fit: cover; width: 30vw; height: auto;">
                </div>

                <div class="col-6 d-flex flex-column p-2 border border-3 rounded-3 text-center justify-content-between projectParagraph">
                    <div>
                        <div class="col-12 border-bottom border-1">
                            <h1>${data.title}</h1>
                            <div class="pb-2">
                                ${badges}
                            </div>
                        </div>
                        <div class="col-12 pt-3 text-start p-3" style="height:12vw;">
                            <p>${data.description}</p>
                        </div>
                    </div>


                    <div class="col-12 justify-content-end align-items-center d-flex mb-2" style="gap:20px;">
                        ${prototypeButton}
                        <div>
                            <a href="https://github.com/ricotandrio/bersihkan.app" target="_blank">
                                <button type="button" class="btn btn-primary btn-md">View Code</button>
                            </a>
                        </div>
                    </div>  


                </div>  
            </div>
        `;
    });
};

postProjects();


const hardSkillsData = [
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
    },
    {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    }
];

const hardSkillsContainer = document.querySelector('.hard-skills');

const postHardSkills = () =>{
    hardSkillsData.map((data)=>{
    hardSkillsContainer.innerHTML += 
        `
        <img class="p-2" style="width: 4vw;height: auto;" src="${data.image}"/>
    `})
}

postHardSkills()