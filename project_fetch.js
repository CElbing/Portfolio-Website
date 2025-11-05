document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('project-container');
    fetch('projects.json')
        .then(res => res.json())
        .then(data => populateDiv(data.projects))
        .catch(err => console.error("Error fetching project data:", err));

    function populateDiv(data) {
        data.forEach(element => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('flex-col', 'center-all');

            const projectImage = document.createElement('img');
            projectImage.classList.add('project-img', 'm20-top');
            projectImage.src = element.image;
            projectImage.alt = 'Project Image';
            newDiv.appendChild(projectImage);

            const lineBreak = document.createElement('div');
            lineBreak.classList.add('quarternary-line-break', 'm20-top', 'm20-bottom');
            newDiv.appendChild(lineBreak);

            const projectTitle = document.createElement('h4');
            projectTitle.classList.add("raleway-550", "font-20");
            projectTitle.innerHTML = element.title;
            newDiv.appendChild(projectTitle);

            const projectDesc = document.createElement("p");
            projectDesc.classList.add("font16", "paragraph-center-small", "p10");
            projectDesc.innerHTML = element.description;
            newDiv.appendChild(projectDesc);

            const gitHubLink = document.createElement('a');
            gitHubLink.classList.add("button-primary-text-only", "raleway-550","m20-bottom");
            gitHubLink.href = element.link;
            gitHubLink.innerHTML = "View on GitHub";
            newDiv.appendChild(gitHubLink);

            container.appendChild(newDiv);
        });
    }

});