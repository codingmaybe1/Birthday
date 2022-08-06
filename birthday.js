var Reasons = [
    `You're the  best kisser`,
`You are curious, you stop and think <br>why things work a certain way`,
 `How your eyes twinkle when you talk about <br> airplane and high dpi mouses`,
 `You never give up on an obstacle,<br> explains me  about us`,
 'for importing sticks to telgram <nr> only for me',
 `Your good morning texts <3`,
 `The vulnerbalilty that allows <br> me to be closer to you`,
 `How you are the sunday mornings <br>to my monday blues`,
 `I know you will love me <br> when I am no longer beautiful`,
 `How you let me bully you lol`,
 `Saving cute memes for me <br>so I smile when I read it`,
 `Cause you promised me a <br>switzerland trip hehe`,
 `Being able to deal with <br>the hard conversations`,
 `Ughhh your tight hugs <br>are just muahh`,
 `For making walk the <br>other side of road`,
 `You support me <br>during the tough times`,
 `I know I can always count on you`,
 `Thank you for sitting through<br> vikram gosh must have been tough`,
 `And thank you for <br> loving me for who I am`,

 ]

function newReason(){
    var randomNumber = Math.floor(Math.random()*  Reasons.length); 


document.getElementById('reasonDisplay').innerHTML = Reasons[randomNumber];


} 