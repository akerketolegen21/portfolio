<template>
  <div class="container">
  <div class="big-text">
   <label class="mono">~% </label>Hi, <br> <label class="mono">~% </label> I'm
      <label class="name">Akerke Tolegen</label>
  </div>
  <div class="position">
    <label class="mono" >~% </label> {{ position }}
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </div>
</div>
</template>


<script>
export default {
  name: 'IntroComponent',
  props: {},
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
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.name {
  font-weight: 500;
  content: attr(data-text);
  top: 0;
  left: 0;
  text-shadow: 4px 3px 0 #8f3985;
}
.mono {
  font-family: monospace;
}
  @media screen and (max-width: 767px) {
    .big-text {
      font-size: 30px;
      font-family: 'Futura';
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
  color: #efd9ce;
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
