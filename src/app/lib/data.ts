export interface Product {
    id: number;
    name: string;
    desc: string;
    image: string;
    demo: string;
    code: string
  }

  export const work: Product[] = [
    {
      id: 1,
      name: "PulseFit",
      desc: "A gym website built with react to enhance user engagement, allowing users to select personalized workout plans, target specific muscle groups, and set fitness goals. ",
      image: "/pulsefit.png",
      demo: "https://usamawaseem888.github.io/Pulsefit/" ,
      code:"https://github.com/usamawaseem888/Pulsefit"
    },
    {
        id: 2,
        name: "TranscribeMate",
        desc: "TranscribeMate is a React app styled using Tailwind CSS. It uses whisper-tiny.en model to capture audio input and generate real-time transcriptions, offering translation capabilities for over 30 languages. ",
        image: "/transcribemate.png",
        demo: "https://usamawaseem888.github.io/Transcribemate/" ,
        code:"https://github.com/usamawaseem888/Transcribemate"
      },
      {
        id:3 ,
        name: "NewsApp Khabar",
        desc: "An Android application built with Jetpack Compose and the latest Android libraries. It follows the MVVM architecture, uses Retrofit for network requests, and Room for local data storage. The app collects live news updates, providing a seamless and modern user experience. ",
        image: "/khabar.png",
        demo: "" ,
        code:"https://github.com/usamawaseem888/Smd-Project"
      },
      {
        id:4 ,
        name: "Chess",
        desc: "Chess game in C++. It features all standard chess mechanics, including piece movements, check, checkmate, and stalemate conditions.",
        image: "/chess.png",
        demo: "" ,
        code:"https://github.com/usamawaseem888/Chess-Game"
      },
      {
        id:6,
        name: "Lane Guard System",
        desc: "Developed a lane detection system using OpenCV in Python as part of an Advanced Driver-Assistance System (ADAS) for autonomous vehicles.",
        image: "/Laneguard.png",
        demo: "" ,
        code:"https://github.com/usamawaseem888/Lane-Guard-System/tree/main"
      },
      {
        id:7,
        name: "Ball Brawl Game",
        desc: "Unity 3D game where players must dodge enemy balls using power-ups while gathering points to achieve high scores.",
        image: "/BallBrawl.png",
        demo: "https://play.unity.com/en/games/70165fe4-5812-4ad9-928d-6e39bdeacc78/survive-the-ball" ,
        code:"https://github.com/usamawaseem888/Ball-Brawl-Game"
      },
      {
        id:8 ,
        name: "Obstacle Dash",
        desc: "Unity 3D game where players must dodge obstacles and enemy balls using power-ups while gathering points to achieve high scores. ",
        image: "/obstacleDash.png",
        demo: "https://play.unity.com/en/games/e966d0cd-e5dc-49df-ae70-7537485f2f6c/obstacle-dash" ,
        code:"https://github.com/usamawaseem888/Obstacle-Dash"
      },
      {
        id:9 ,
        name: "Feed the Animal",
        desc: "A gym website designed to enhance user engagement, allowing users to select personalized workout plans, target specific muscle groups, and set fitness goals. ",
        image: "/FeedAnimal.png",
        demo: "https://play.unity.com/en/games/5b249c03-6bbf-44f4-a934-3abaf0a814d7/feed-the-animal" ,
        code:"https://github.com/usamawaseem888/Feed-the-Animal"
      },
     
    ]