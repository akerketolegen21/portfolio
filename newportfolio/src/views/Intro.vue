<template>
  <div class="container">
  <div class="big-text">
   <label class="inter">~%  I'm </label>
      <label class="name">Akerke Tolegen</label>
  </div>
  <div class="position">
    <label class="inter" >~% </label> {{ position }}
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    
  </div>
  <a href="https://read.cv/akerkeoh" target="_blank">🕊️ Click here to see my detailed resume</a>
</div>
</template>


<script>
export default {
  name: 'IntroComponent',
  props: {},
  components: {

  },
  data() {
    return {
      position: "",
      typeStatus: false,
      displayTextArray: ['Flutter Developer', 'Web Developer', 'Project Manager', 'ML Enthusiast'],
      typingSpeed: 150,
      erasingSpeed: 130,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.position += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.position = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 90vw;
  align-items: center;
}
a {
  font-weight: 200;
  font-size: large;
  margin: 3rem;
}
.name {
  font-weight: 500;
  content: attr(data-text);
  text-shadow: 4px 3px 0 hsla(217, 96%, 47%, 0.707);
}
.inter {
  font-family: Inter;
  font-weight: 500;
}
  @media screen and (max-width: 767px) {
    .big-text {
      font-size: 30px;
      font-family: 'Inter';
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .big-text  {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 1024px) {
    .big-text  {
      font-size: 50px;
    }
  }
  .blinking-cursor {
  font-size: 1rem;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #efd9ce;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #efd9ce;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #efd9ce;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #efd9ce;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #efd9ce;
  }
}
</style>
