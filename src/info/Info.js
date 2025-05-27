import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";
import mock8 from "../img/mock8.png";
import mock9 from "../img/mock9.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Adam",
  lastName: "Babuščák",
  initials: "ab", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Jorge Rivera-Herrans fan",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by tea and water",
    },
    {
      emoji: "🌎",
      text: "based in the SK",
    },
    {
      emoji: "💼",
      text: "high school student",
    },
    {
      emoji: "📧",
      text: "babuadam59@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Adam. I'm a fan of good music. I'm studying on Gymnasium right now, my music tastes ranges from epic rock, openings, breakcore and to power metal. Believe me, they are all worth to try!",
  skills: {
    proficientWith: [
      "I'm just a man",
      "Warrior of the mind",
      "Survive",
      "Goodbye",
      "Storm",
      "Keep your friends close",
      "Poseidon",
      "Done for",
      "No longer you",
      "Different beast",
      "Thunder bringer",
      "Little wolf",
      "Love in paradise",
      "God games",
      "Not Sorry For Loving You",
      "Dangerous",
      "600 Hundred Strike",
      "Hold Them Down",
      "Odysseus",
      "Would You Fall in Love with Me Again",
    ],
    exposedTo: ["all of them"],
  },
  hobbies: [
    {
      label: "jogging",
      emoji: "🏃",
    },
    {
      label: "drawing",
      emoji: "✏️",
    },
    {
      label: "movies and series",
      emoji: "🎥",
    },
    {
      label: "drumming",
      emoji: "🥁",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Trojan saga",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source:
        "https://www.youtube.com/watch?v=bWIgy-Ls-SU&list=PLbqsLXjyXw3iA3BhWY9rSjxiOq-0Mvv3U&ab_channel=JorgeRivera-Herrans-Topic", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Cyclop saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=nDQyFHmuQls&list=PLbqsLXjyXw3gv5BkX8z6kui2_cWvvJPKn&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock2,
    },
    {
      title: "Ocean saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=sRntPU_s-gI&list=PLbqsLXjyXw3gfuC3mg1G63vTjmYtD_Yvo&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock3,
    },
    {
      title: "Circe saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=Mz2ASoe6OG0&list=PLbqsLXjyXw3go4P3P17EM3h-3cCSm4csg&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock4,
    },
    {
      title: "Underworld saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=cyqul8pKHko&list=PLbqsLXjyXw3jfWQyhdH0754GhtEjL45h9&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock5,
    },
    {
      title: "Thunder saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=-u_-wpcpY-0&list=PLbqsLXjyXw3isyy2y_Bth7ypAt95zNmRu&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock6,
    },
    {
      title: "Widsom saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=Z9NNit-z8wE&list=PLbqsLXjyXw3i-6bGeXIGtGL5lVjwlMfZQ&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock7,
    },
    {
      title: "Vengeance saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=7M3gzo-hSCo&list=PLbqsLXjyXw3hqpDqMCdfJcZDHiQff2YKa&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock8,
    },
    {
      title: "Ithaca saga",
      live: "https://paytonpierce.dev",
      source:
        "https://www.youtube.com/watch?v=Bb6ssHUxrNk&list=PLbqsLXjyXw3iFsEgQuVQOKcYZ2MUsmKey&ab_channel=JorgeRivera-Herrans-Topic",
      image: mock9,
    },
  ],
};
