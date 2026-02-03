const CONFIG = {
    valentineName: "Bubaaaaaam",
    
    pageTitle: "Will You Be My Valentine? 💓💓",

    floatingEmojis: {
        hearts: ['❤️', '💓', '💝', '💗', '👫'],  
        bears: ['🧸', '🦦', '🐈', '🦘']                       
    },

    questions: {
        first: {
            text: "Do you like me bro?",                                  
            yesBtn: "Yes",                                             
            noBtn: "Nooooooo",                                               
            secretAnswer: "I don't like you, I love you! Small bros now!"           
        },
        second: {
            text: "How much do you love me?",                          
            startText: "This much!",                                   
            nextBtn: "Click me"                                         
        },
        third: {
            text: "Will you be my Valentine?", 
            yesBtn: "Maaaaaybe",                                             
            noBtn: "No"                                                 
        }
    },

    loveMessages: {
        extreme: "No you don't 🤣🤣 just kidding I love youuuu",  
        high: "Yaaaaaaaay sweet bro ❤️❤️",              
        normal: "I love you so much 👩‍❤️‍💋‍👨"                           
    },

    celebration: {
        title: "Excellent choice my dear!",
        message: "I wish you were here so I could give you a big hug and a million kisses",
        emojis: "❤️🧸🦦💝👫💓" 
    },

    colors: {
        backgroundStart: "#ffafbd",      
        backgroundEnd: "#ffc3a0",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },

    animations: {
        floatDuration: "15s",           
        floatDistance: "50px",          
        bounceSpeed: "0.5s",           
        heartExplosionSize: 1.5         
    },

    music: {
        enabled: true,                    
        autoplay: true,                   
        musicUrl: "https://res.cloudinary.com/dsxfwxkbh/video/upload/v1770098501/Mac_DeMarco_____My_Kind_Of_Woman__4_mxm5vu.mp3", 
        startText: "🎵 Play Music",        
        stopText: "🔇 Turn that shit off!",         
        volume: 0.5                        
    }
};

window.VALENTINE_CONFIG = CONFIG; 
