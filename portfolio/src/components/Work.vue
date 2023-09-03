<template>
    <div class="work-experience">
      <h2>Work Experience</h2>
      <div v-for="(job, index) in jobs" :key="index" class="job">
        <div class="job-content">
          <h3>{{ job.company }}</h3>
          <p class="position">{{ job.position }}</p>
          <p class="date">{{ job.date }}</p>
          <ul>
            <li v-for="(achievement, i) in job.achievements" :key="i">{{ achievement }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .work-experience {
    margin-left: 20%;
    margin-right: 20%;
  }
  
  .job-content {
    margin: 20px 0;
    opacity: 1; /* Set the opacity to 1 to make the content visible */
  }
  </style>
  
  <script>
  export default {
    name: "WorkExp",
    data() {
      return {
        jobs: [
          {
            company: "Big Dream Lab (AR/VR product company)",
            position: "Project Manager",
            date: "Sept. 2022 - Present",
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
            ]
          }
        ]
      };
    }
  };
  </script>