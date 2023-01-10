const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name (or nickname)? ', (answerName) => {
  console.log(`That's an awesome name, ${answerName}`);

  rl.question('What is your favourite activity? ', (answerActivity) => {
    console.log(`${answerActivity} is fun to do!`);

    rl.question('What music do you listen to during this activity? ', (answerMusic) => {
      console.log(`Wonderful taste in music!: ${answerMusic}`);


      rl.question('Which meal is your favourite? ', (answerMeal) => {
        console.log(`Nice choice!: ${answerMeal}`);


        rl.question(`What's your favourite thing to eat during that meal?` , (answerFood) => {
          console.log(`Delicious!: ${answerFood}`);


          rl.question(`What's your favourite sport?` , (answerSport) => {
            console.log(`Give it up for the home team!: ${answerSport}`);


            rl.question(`What's your superpower? In a few words, tell us what you're amazing at!` , (answerSuperpower) => {
              console.log(`Sounds like a champion to me: ${answerSuperpower}`);

              console.log(`Hey, hey, hey!! This automated profile is for the forever-groovy ${answerName}! They love
              listening to ${answerMusic} while they ${answerActivity}. Their favorite meal is ${answerMeal}...which MUST have ${answerFood}. They love ${answerSport}, and their secret
              superpower is ${answerSuperpower}. `);

              rl.close();
            });
          });
        });
      });
    });
  });
});
