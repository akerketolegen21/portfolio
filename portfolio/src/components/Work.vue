<template>
    <div class="work-experience">
      <h2>Work Experience</h2>
      
      <div v-for="(job, index) in jobs" :key="index" class="job">
        <div class="job-content">
            <div class="row">
                <h3 class="company">{{ job.company }}</h3>
                <p class="date">{{ job.date }}</p>
            </div>
          
          <p class="position">{{ job.position }}</p>
          <ul>
            <li v-for="(achievement, i) in job.achievements" :key="i">{{ achievement }}</li>
          </ul>
        </div>
      </div>
    </div>
    <AnimatedDivider />
  </template>
  
  <style>
  .work-experience {
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
    height: 90vh;
    font-size: 25px;
  }
  
  .job-content {
    font-size: 20px;
  }
  .company {
    font-weight: 600;
    text-shadow: 3px 3px 0 #8f3985;
  }
  .position {
    font-weight: 800;
  }
  .date {
    font-style: italic;
  }
  .row {
    display: flex;
  justify-content: space-between;
  }
  </style>
  
  <script>
import AnimatedDivider from './AnimatedDivider.vue';

  export default {
    name: "WorkExp",
    data() {
        return {
            jobs: [
                {
                    company: "Big Dream Lab (AR/VR product company)",
                    position: "Project Manager",
                    date: "Sept. 2022 - October, 2023",
                    achievements: [
                        "Increased company value and entered an acceleration program with 50+ potential investors by effectively leading the application process.",
                        "Administered design teams, collaborated with external partners, and managed events for local startup community. Successfully increased brand awareness by 60% through event organization and team management."
                    ]
                },
                {
                    company: "Portal Energy (ANTSPRO)",
                    position: "Mobile Front-end Developer",
                    date: "Oct. 2020 - Feb. 2021",
                    achievements: [
                        "Developed the UI for a cross-platform mobile application for paying to charge electric cars.",
                        "Used Flutter for the front end, Firebase and OpenAPI to store data about the user and device, and Redis to connect to web-sockets. Published the app on Google Play and App Store."
                    ],
                }
            ]
        };
    },
    components: { AnimatedDivider }
};
  </script>