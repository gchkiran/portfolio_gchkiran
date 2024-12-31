// Theme Management
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

const updateButtonIcon = (theme) => {
    if (theme === 'light') {
        themeToggle.innerHTML = '🌙';
    } else {
        themeToggle.innerHTML = '🌞';
    }
}

updateButtonIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);

    updateButtonIcon(newTheme);
});


const nameElement = document.querySelector('#intro h1 div');
const names = ["Hi there!", "I'm Chandra Kiran"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = names[currentIndex];
    
    if (!isDeleting) {
        nameElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 100);
        }
    } else {
        nameElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % names.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50);
        }
    }
}


typeWriter();


const skills = [
    { name: "Java", icon: "assets/java-icon.svg" },
    { name: "Python", icon: "assets/python-icon.svg" },
    { name: "C", icon: "assets/C_Programming_Language.svg" },
    { name: "C++", icon: "assets/C++_Logo.svg" },
    { name: "HTML5", icon: "assets/HTML5_logo.svg" },
    { name: "CSS3", icon: "assets/CSS3_logo.svg" },
    { name: "JavaScript", icon: "assets/javascript-logo.svg" },
    { name: "SQL", icon: "assets/sql-icon.svg" },
    { name: "Go", icon: "assets/go-icon.svg" },
    { name: "Git", icon: "assets/git-logo.svg" },
    { name: "Spring Boot", icon: "assets/spring-boot.svg" },
    { name: "Dropwizard", icon: "assets/dropwizard-logo.svg" },
    { name: "DynamoDB", icon: "assets/aws-dynamodb.svg" },
    { name: "MySQL", icon: "assets/mysql-logo.svg" },
    { name: "MongoDB", icon: "assets/mongodb.svg" },
    { name: "Amazon S3", icon: "assets/amazon-S3-Logo.svg" },
    { name: "AWS Kafka", icon: "assets/apache_kafka-icon.svg" },
    { name: "AWS SNS", icon: "assets/aws-sns-icon.svg" },
    { name: "AWS Lambda", icon: "assets/aws-lambda-icon.svg" },
    { name: "AWS API Gateway", icon: "assets/aws-api-gateway.svg" },
    { name: "AWS Redis", icon: "assets/aws-redis.svg" },
    { name: "AWS", icon: "assets/aws-icon.svg" },
    { name: "Terraform", icon: "assets/terraform-icon.svg" },
    { name: "GCP", icon: "assets/gcp-logo.svg" },
    { name: "Tableau", icon: "assets/tableau-icon.svg" },
    { name: "Docker", icon: "assets/docker-icon.svg" },
    { name: "Metabase", icon: "assets/metabase-icon.svg" },
    { name: "Sisense", icon: "assets/sisense-Logo.svg" },
    { name: "Jenkins", icon: "assets/jenkins_logo.svg" },
    { name: "Salesforce", icon: "assets/salesforce_logo.svg" },
];


const experiences = [
    {
        title: "Graduate Assistant",
        company: "Georgia State University",
        companyIcon: "assets/gsu_logo.jpg",
        location: "Atlanta, GA",
        duration: "Aug 2024 - Present",
        description: "Supported software development education through grading and student guidance.",
        achievements: [
            "Assisted in designing coursework to ensure a logical flow of concepts and provided personalized feedback on assignments, fostering consistent learning and improving students’ coding skills.",
            "Collaborated with the professor to evaluate and grade assignments fairly, enhancing the overall learning experience."
        ]
    },
    {
        title: "Software Development Engineer",
        company: "Jumbotail Technologies Private Limited",
        companyIcon: "assets/jumbotail-logo.svg",
        location: "Bengaluru, India",
        duration: "Oct 2021 – Jul 2024",
        description: "Designed scalable microservices with robust system design principles and optimizations.",
        achievements: [
            "Implemented a scalable SQS-based asynchronous messaging system to handle upto 240M messages/month, ensuring reliable communication with FIFO guarantees, fault tolerance, and visibility timeouts. Reduced system downtime and enhanced processing efficiency, achieving a cost-effective solution of $840/month for high-volume operations.",
            "Led the design of flexible credit features (custom terms, rates), boosting engagement by 25% and customer loyalty.",
            "Automated the management of receivable and payable expectations, streamlining settlement times from D+2 to D+1, increasing the operational efficiency of credit and repayment processes.",
            "Developed a secure lender communication system, reducing transaction failures by 20% and ensuring seamless financial transactions.",
            "Spearheaded the Jmoney digital payments platform, integrated across apps, increasing retention by 18% through wallets, refunds, and promotional credits."
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Jumbotail Technologies Private Limited",
        companyIcon: "assets/jumbotail-logo.svg",
        location: "Bengaluru, India",
        duration: "Apr 2021 – Sept 2021",
        description: "Developed real-time systems optimizing supply chain and payment processes.",
        achievements: [
            "Revamped the delivery app communication system to enable real-time inventory tracking and ensure accurate goods management in the supply chain, speeding up payments to sellers.",
            "Integrated QR-based payments with Razorpay and Bharathpe, reducing reconciliation time from 2 days to minutes, providing a seamless payment experience, and increasing revenue by over 25%."
        ]
    }
];


const projects = [
    {
        title: "Marine Biodiversity Tracking System",
        description: "Designed and developed a comprehensive system for tracking and monitoring marine biodiversity, leveraging advanced data analytics and visualization tools.",
        technologies: ["Python", "Streamlit", "MySQL", "SQLAlchemy"],
        image: "assets/portfolio-project-1.png",
        link: "https://github.com/gchkiran/Marine-Biodiversity-Tracking-System"
    },
    {
        title: "Offensive Tweet Identification",
        description: "Developed a RoBERTa-based model using the OLID dataset, achieving a macro F1 score of 0.7989. Enhanced text preprocessing with emoji substitution and hashtag segmentation to address imbalanced and noisy data",
        technologies: ["Python", "RoBERTa", "Streamlit"],
        image: "assets/protfolio-project-2.png",
        link: "https://github.com/gchkiran/offenseval"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate skills
    const skillsList = document.querySelector('.skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        if (skill.icon.includes('.svg')) {
            li.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon" /> ${skill.name}`;
        } else {
            li.innerHTML = `<span class="skill-icon">${skill.icon}</span> ${skill.name}`;
        }
        skillsList.appendChild(li);
    });

    // Populate experience
    const experienceContainer = document.querySelector('.experience-container');
    experiences.forEach(exp => {
        const div = document.createElement('div');
        div.classList.add('experience-item');
        div.innerHTML = `
            <h3 class="company-title">${exp.title}</h3>
            <div class="company-details">
                <img src="${exp.companyIcon}" alt="${exp.company}" class="company-icon" />
                <div>
                    <p><strong>${exp.company}</strong> | ${exp.duration}</p>
                    <p class="location">${exp.location}</p>
                </div>
            </div>
            <p>${exp.description}</p>
            <ul class="achievements-list">
                ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
            </ul>
        `;
        experienceContainer.appendChild(div);
    });

    // Populate projects
    const projectsContainer = document.querySelector('#projects .projects-grid');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.classList.add('project-card');
        div.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="mb-4">${project.description}</p>
                <p class="mb-4"><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                <a href="${project.link}" class="project-link" target="_blank">View on GitHub</a>
            </div>
        `;
        projectsContainer.appendChild(div);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        const formData = new FormData(contactForm);
        
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text()) 
        .then(data => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); 
            
            submitButton.disabled = false;
            submitButton.textContent = 'Send';
        })
        .catch(error => {
            alert('There was an error submitting your message. Please try again later.');
            
            submitButton.disabled = false;
            submitButton.textContent = 'Send';
        });
    });    
});
