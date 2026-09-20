const skills = [
    {
        name: "HTML",
        category: "Web",
        level: "Intermediate",
        description: "I can create and organize webpages using HTML."
    },

    {
        name: "CSS",
        category: "Web",
        level: "Intermediate",
        description: "I can style webpages and make them responsive."
    },

    {
        name: "JavaScript",
        category: "Programming",
        level: "Beginner",
        description: "I can create simple interactive features with JavaScript."
    },

    {
        name: "Python",
        category: "Programming",
        level: "Beginner",
        description: "I can write basic Python programs and solve problems."
    },

    {
        name: "Cybersecurity",
        category: "Security",
        level: "Beginner",
        description: "I am learning about cybersecurity and system protection."
    },

    {
        name: "Problem Solving",
        category: "Other",
        level: "Intermediate",
        description: "I enjoy solving problems and learning from challenges."
    }
];


function getSkillLevel(level) {
    if (!level) {
        return "Level not available";
    }

    return level;
}


const skillsContainer = document.getElementById("skillsContainer");
const skillSearch = document.getElementById("skillSearch");
const skillCategory = document.getElementById("skillCategory");
const clearSkills = document.getElementById("clearSkills");
const skillMessage = document.getElementById("skillMessage");


function displaySkills(list) {

    skillsContainer.innerHTML = "";

    if (!Array.isArray(list) || list.length === 0) {
        skillMessage.textContent = "No skills found. Try another search.";
        return;
    }

    skillMessage.textContent = "";

    list.forEach(function(skill) {

        const skillCard = document.createElement("div");

        skillCard.className = "skill-card";

        skillCard.innerHTML = `
            <h3>${skill.name}</h3>

            <p>${skill.description}</p>

            <span class="skill-level">
                ${skill.category} • ${getSkillLevel(skill.level)}
            </span>
        `;

        skillsContainer.appendChild(skillCard);
    });
}


function filterSkills() {

    const searchValue = skillSearch.value.trim().toLowerCase();

    const categoryValue = skillCategory.value;

    const filteredSkills = skills.filter(function(skill) {

        const matchesSearch =
            skill.name.toLowerCase().includes(searchValue) ||
            skill.description.toLowerCase().includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            skill.category === categoryValue;

        return matchesSearch && matchesCategory;
    });

    displaySkills(filteredSkills);
}


skillSearch.addEventListener("input", filterSkills);


skillCategory.addEventListener("change", filterSkills);


clearSkills.addEventListener("click", function() {

    skillSearch.value = "";

    skillCategory.value = "all";

    displaySkills(skills);
});


displaySkills(skills);
