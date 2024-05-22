let getID = (id) => {
    return document.getElementById(id);
}

let fetchData = async (url, func) => {
    let res = await fetch(url);
    let data = await res.json();

    return func(data);
}

let mainContent = getID("banner");

let displayContainer = (content) => {
    let output = '<div class="left-corner-decoration"></div>';

    output += '<div class="container">';

    output += content;

    output += '</div>';

    output += '<div class="right-corner-decoration"></div>';

    mainContent.innerHTML = output;
}

let displayAbout = (pageTitle) => {
    let output = "";

    output += `
    <h2 class='section-header'>${pageTitle}</h2>
    <div class='underline'></div>

    <div class="profile">
        <div class="profile-img"></div>

        <div class="profile-details">
            <h3 class="profile-details-name">Marcus Lundy</h3>
            <h4 class="profile-details-title">UX & UI Designer</h4>
            <p class="profile-details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis quidem ipsa eum laudantium inventore vel sit dolor hic cumque illum cum, ipsum perferendis quam fugit nulla ullam odit quaerat voluptatem aliquid ad necessitatibus? Repellat illum id assumenda eveniet saepe accusantium repudiandae magnam, ipsum rerum velit repellendus aliquam modi dolorum?</p>
            
            <p class="profile-details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis quidem ipsa eum laudantium inventore vel sit dolor hic cumque illum cum, ipsum perferendis quam fugit nulla ullam odit quaerat voluptatem aliquid ad necessitatibus? Repellat illum id assumenda eveniet saepe accusantium repudiandae magnam, ipsum rerum velit repellendus aliquam modi dolorum?</p>

           <div class="about-me-resources"> 
            <div class="profile-details-contact"> 
                    <p>
                        <span class="material-symbols-outlined">
                            call
                        </span> - (000)-123-4567
                    </p>

                    <p>
                        <span class="material-symbols-outlined">
                            email
                        </span> - mlundy@gmail.com
                    </p>
                </div>

                <div class="profile-details-btns">
                    <button>Contact Me</button>
                    <button>Download CV</button>
                </div>
            </div>
        </div>
    </div>`;

    return output;
}

let displayProjects = (pageTitle) => {
    let output = "";

    output += `
    <h2 class='section-header'>${pageTitle}</h2>
    <div class='underline'></div>

    <p class="project-section-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quae quidem quia odit praesentium sit quisquam vel quibusdam fugiat voluptate nihil tenetur harum tempore repellat dolore vitae, doloremque quis saepe.</p>

            <div class="project-grid">
                <div class="project">
                    <div class="project-img"><img src="/imgs/project1.jpg"></div>
                    <div class="project-title">Project Title</div>
                    <div class="project-date">Project Date</div>
                </div>
                <div class="project">
                    <div class="project-img"><img src="/imgs/project2.jpg"></div>
                    <div class="project-title">Project Title</div>
                    <div class="project-date">Project Date</div>
                </div>
                <div class="project">
                    <div class="project-img"><img src="/imgs/project3.jpg"></div>
                    <div class="project-title">Project Title</div>
                    <div class="project-date">Project Date</div>
                </div>
            </div>
            
            <button class="view-projects-btn">View All Projects</button>
        </div>`;

    return output;
}

let displayEducation = (pageTitle) => {
    let output = "";

    output += `
    <h2 class='section-header'>${pageTitle}</h2>
    <div class='underline'></div>

    <p class="project-section-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quae quidem quia odit praesentium sit quisquam vel quibusdam fugiat voluptate nihil tenetur harum tempore repellat dolore vitae, doloremque quis saepe.</p>

    <div class="education">
        <div class="edu">
            <h3 class="edu-title">Schools</h3>

            <div class="school-listing">
                <p class="school-degree"><span class="material-symbols-outlined cap_icon">
                school
                </span>Bachelors of Science</p>
                <p class="school-name">University of Maryland: University College</p>
                <p class="school-major">Digital Media &amp; Web Technology</p>
                <p class="school-graduation">August 2020 - December 2022</p>
            </div>
            <div class="school-listing">
                <p class="school-degree"><span class="material-symbols-outlined cap_icon">
                school
                </span>Associates of Arts</p>
                <p class="school-name">Montgomery College: Rockville Campus</p>
                <p class="school-major">Digital Media &amp; Web Technology</p>
                <p class="school-graduation">August 2013 - May 2017</p>
            </div>
        </div>
    </div>
    `;

    return output;
}

let displayExperience = (data) => {
    let output = `<div class="left-corner-decoration"></div>

    <div class="container">

    <h2 class='section-header'>Experience</h2>
    <div class='underline'></div>

    <p class="project-section-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quae quidem quia odit praesentium sit quisquam vel quibusdam fugiat voluptate nihil tenetur harum tempore repellat dolore vitae, doloremque quis saepe.</p> 
    
    <div class="exp-and-skills">
        <div class="experience">
            <h3 class="edu-title">Experience</h3>
                <div class="work-experience">           
    `;
                    for(let i = 0; i < data.jobs.length; i++) {
                        output += `
                            <div class="card">
                                <div class="card-header">
                                    <p>${data.jobs[i].job_title}</p>
                                </div>

                                <div class="card-body">
                                    <p class="card-company-name">${data.jobs[i].company}</p>
                                    <p class="card-work-dates">${data.jobs[i].start_date} - ${data.jobs[i].end_date}</p>
                                    <p class="card-responsibilities">${data.jobs[i].job_desc}</p>  
                                </div>

                                <div class="skill-display">
                                    `;
                                    for (let j = 0; j < data.jobs[i].skills.length; j++) {
                                        output += `
                                            <div class="skill">
                                                <img src="/imgs/Icons/${(data.jobs[i].skills[j]).toLowerCase()}.svg"> 
                                                <p class="skill-title">${data.jobs[i].skills[j]}</p>  
                                            </div>
                                        `;
                                    } 
                                output += `
                                </div>
                            </div>
                        `;
                    }

                    output += `
    </div>              
    </div>
    </div>
    </div>
    <div class="right-corner-decoration"></div>`;

    mainContent.innerHTML = output;

}

// Change the name of the page dynamically

getID("right-nav").addEventListener("click", (e) => {
    let dataAttr = e.target.getAttribute('data-link-name');

    // If the link does not have a 'data-link-name' dont do anything
    if (!dataAttr) return;

    if(dataAttr == "home") {
        location.href = "/index.html";
    } else if (dataAttr == "about-me"){
        displayContainer(displayAbout(e.target.innerHTML));
    } else if (dataAttr == "projects"){
        displayContainer(displayProjects(e.target.innerHTML));
    } else if (dataAttr == "education"){
        displayContainer(displayEducation(e.target.innerHTML));
    } else {
        fetchData("/data/experiences.json", displayExperience);
    }

    let navCircles = document.querySelectorAll(".circle");

    navCircles.forEach(circle => {
        circle.style.background = "#fff";
    })

    e.target.previousElementSibling.style.background = "lightblue";
    e.target.previousElementSibling.style.borderRadius = "20px";
})

let getYear = () => {
    let d = new Date();
    getID("footer-date").innerHTML = d.getFullYear();
}

