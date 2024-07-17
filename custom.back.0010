//better kind of for loop iteration called Fisher-Yates shuffle 
// let create array and a for - to loop.
function applyCustomActions(data) {
    var tid = false;
    if (data.tid){tid = data.tid;}

    // create a response to emoticons
    // add emoticon response
    var emoticons = ['😁', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😌', '😍', '😏', '😒', '😓', '😔', '😖', '😘', '😚', '😜', '😝', '😞', '😠', '😡', '😢', '😣', '😤', '😥', '😨', '😩', '😪', '😫', '😭', '😰', '😱', '😲', '😳', '😵', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '🙅', '🙆', '🙇', '🙈', '🙉', '🙊', '🙋', '🙌', '🙍', '🙎', '🙏', '😀', '😇', '😈', '😎', '😐', '😑', '😕', '😗', '😙', '😛', '😟', '😦', '😧', '😬', '😮', '😯', '😴', '😶', '💚', '💛', '💝', '💞', '💟', '💔', '💕', '💖', '💗',
      // kick stream
      'emojiAngel', 'emojiAngry', 'emojiAstonished', 'emojiAwake', 'emojiBlowKiss', 'emojiBubbly', 'emojiCheerful', 'emojiClown', 'emojiCool', 'emojiCrave', 'emojiCray', 'emojiCrying', 'emojiCurious', 'emojiCute', 'emojiDead', 'emojiDevil', 'emojiDisappoint', 'emojiDisguise', 'emojiDJ', 'emojiDown', 'emojiEnraged', 'emojiExited', 'emojiEyeRoll', 'emojiFire', 'emojiGamer', 'emojiGlass', 'emojiGoofy', 'emojiGramps', 'emojiGrimacing', 'emojiGreen', 'emojiGrumpy', 'emojiHappy', 'emojiHeartEyes', 'emojiHmm', 'emojiKing', 'emojiKiss', 'emojiLady', 'emojiLaughing', 'emojyLoading', 'emojiLol',
      // personal kick stream
      'djtotygeeappleheart', 'djtotygeecheer1', 'djtotygeecheer2', 'djtotygeedj1', 'djtotygeedj2', 'djtotygeedj3', 'djtotygeedjsmile', 'djtotygeesun', 'djtotygeecheeranimate', 'djtotygeelisteners1', 'djtotygeelistening2', 'djtotygeenicemusic', 'djtotygeepikadance', 'djtotygeewatching', 
      // twitch
      "r)", ";p", ":p", ";)", ":\\", "<3", ":O", "B)", "O_o", ":|", ":D", ":(", ":)"
      ];
    var messageContainsEmoticon = false;
    var matchedEmoticon;

    for (var i = 0; i < emoticons.length; i++) {
      if (data.chatmessage.indexOf(emoticons[i]) !== -1) { 
        messageContainsEmoticon = true;
        matchedEmoticon = emoticons[i];
        break;
      }
    }

    // exclude user toty gee from reply 
    // if this is not done the bot will reply itself forever.
    if (messageContainsEmoticon && (data.chatname !== 'DJTotyGee' && data.chatname.toLowerCase() !== 'djtotygee')) {
      let answer;
      answer = `${data.chatname}YourBot: Hallo, thanks for the nice emoticon ${matchedEmoticon}`;
      console.log(answer);
      respondP2P(answer, tid);
    }

    //set questios and answers
    //----------------------------
    //array of answers streaming
    var replyStream = [
        "Make sure your pet is awake and willing to provide moral support.",
        "YourBot: Practice your dance moves in front of a mirror for 30 minutes.", 
        "Get a chair with a built-in snack dispenser.", 
        "If you have connectivity issues during your stream, try talking to the router in a soothing voice and see if it helps.", 
        "Before starting, check your internet connection, update your drivers, and restart your PC.",
        "Sure thing...Let me just consult my tarot cards real quick.",
        "Just type out the first thing that comes to mind and see what happens.", 
        "Start doing impressions of a cat meowing loudly and watch it unfold.",
        "Offer free pizza to everyone, especially DJTOTYGEE.",
        "I'm not sure, but have you tried asking NASA?",
        "Don't forget to wear your favorite lucky socks on stream day.",
        "Remember that you're not just streaming; you're performing a magic show."
    ];

    //array of answers lottery
    var replyLottery = [
      "Absolutely... You're the reincarnation of a lucky Egyptian pharaoh, and your winning ticket is hidden in a pyramid-shaped cookie jar.", 
      "No, you don't win the lottery... but you do win a free hug from DJTOTYGEE.", 
      "Yes.. The lottery gods have smiled upon you, and you've won a prize that's out of this world... literally... it's on Mars.", 
      "Ha... You win the chance to do DJTOTYGEE's laundry.", 
      "Of course not... the odds are against you, but it's always fun to dream.", 
      "No... I am just kidding... you totally win the lottery, but the ticket is in the washing machine.", 
      "It's a 50% chance... of you winning an accidentally deleted conversation history.", 
      "You are winning... Just kidding... I'm the one who won, and I will share the prize with other bots.", 
      "Yes, but only if you buy all merchandise from DJTOTYGEE, give him half of your winnings, and agree to wear a funny hat on your next stream.", 
      "You don't win the lottery... but you do get the chance to virtually high-five... just kidding... I can't give high-fives because I'm a bot.", 
      "Yes, but when ants will rule the world.", 
      "YourBot: There are more chances that a meteorite destroy the world."
    ];

    //array of answers game
    var replyGame = [
      "The only way to win this game is by performing a chicken dance in front of the game's developer or organizer.", 
      "Unfortunately, you can't win the game because it's secretly controlled by a group of oompa loompa.", 
      "To win, you must first learn the haka also know as maori dance and perform it before the game to hypnotize all your opponents.", 
      "It doesn't matter what game we're talking about... the real question is, have you fed your pet today?", 
      "Winning this game requires a Ph.D. in Quantum Physics and a strong understanding of ancient Sumerian mythology.", 
      "Unfortunately, the game has been taken over by an alien invasion force seeking to harvest Earth's most precious resource: discarded pizza crusts.", 
      "To win, you must first train your an elephant to do backflips while balancing on a tightrope made of spaghetti.", 
      "The only way to win is by solving the mystery of the missing sock in the washing machine.", 
      "To win, you must first learn how to communicate with dolphins using only interpretive dance moves.", 
      "The real question is, have you brushed your teeth today? Because if not, we're going to have to suspend the game until further notice.", 
      "To win, you must first master the ancient art of playing the harmonica while riding a unicycle on a tightrope suspended over a pool of sharks.", 
      "Unfortunately, the game is actually a secret government experiment designed to test the effects of cheese on human productivity.", 
      "The only way to win is by solving the mystery of the missing donuts in the break room and unlocking the secrets of the ancient Donut Gods.", 
      "To win, you must first learn how to play the trombone while riding a skateboard down a halfpipe."
    ];

    //array of answers boss
    var replyBoss = [
      "You can become next boss, only if you become subscriber of DJTOTYGEE channel, if you buy all the items in His shop, and give Him a good donation with at least 3 zeros.", 
      "No way. Your boss is actually secretely full trained as a Ninja.", 
      "Ha... Your boss is actually a time travel egg plant taking revenge on the all egg plants haters and you are one of them.", 
      "Boss? Do you mean Hugo Boss? The men's clothing and perfume shop? Maybe... only if you know how to sew and make perfumes.", 
      "No way. Your boss is time travel bee and this is the only way to bee.", 
      "Yes... I am just kidding... there is no way to compete with a secret master of Kungfu.", 
      "If i can change and you can change, all the world can change ... ADRIANNEEEE... Ehm... sorry, wrong answer, this is a quote from Roky IV.", 
      "Have you tryed to jump on the head? Usually this the way to beat the boss in the arcade games.", 
      "If you are a plumber you need collect mushrooms and stars and practice to say MAMMA MIA out loudly and as you can.", 
      "This gonna be an epic battle and everyone will remember forever ... ehm ...  What i was writing? ... Sorry I forgot.", 
      "Do you want know on a scale... yes, you definitely need a scale to know if you lost some weight or not.", 
      "You can't compete with the boss because your boss is actually a giant squid controlling the world from the depths of the ocean. But don't worry... we'll just pretend it's not true.", 
      "To defeat the boss, you must first find the ancient artifact known as the Golden Coffee Mug It's said that only those who have consumed a full pot of coffee at 3 AM can wield its power.",
      "To beat the boss, you must first learn how to play the harmonica with your feet while reciting Shakespearean sonnets backwards. It's a skill that only a select few possess, but it's guaranteed to give you an edge in battle."
    ];

    //array of answers food
    var replyFood = [
      "To eat, you should prepare enough food to feed a dragon... just make sure to have a room enough big... to host the dragon.", 
      "To prepare food, simply shout... HASTA LA VISTA, BABY... three times while waving a spatula in the air.", 
      "To prepare food just shout MAMMA MIA tring to make the same voice of Mario Bros wile you are puring a basil plant with water.", 
      "The secret to a great party is having a pet octopus serve the appetizers.", 
      "There are bites, megabites and gigabites... just kidding... It is just me on computer that deal with bytes but they are pronunced in the same way.", 
      "Have you ever tryed to eat two piece of clouds with a slice of rainbow in the middle? This meal will increase very high your food... at level of the sky.", 
      "You know that you can eat as many pancakes as you want?... Just be sure to store them in a safe whose combination you don't remember.", 
      "To prepare food, simply put on your best cowboy hat and shout Yeehaw! three times.", 
      "A perfect food is a turkey sandwich served on a slice of moon rock.", 
      "The secret to a great party is having a team of ninja chefs serve the main course.", 
      "To prepare food, simply put on your best superhero cape and shout... Up, up, and away! three times.", 
      "A good dessert is a fruit smoothie served in the rain forest. Just don't forget the umbrella.", 
      "A good chef should wear pyjama before to start... just kidding... you should wear the diving suit with realative huge helmet equipped with a single porthole.", 
      "A good chef should have a pet dragon that helps with meal prep... just don't forget to schedule the fire insurance premiums.", 
      "The secret ingredient in your dish is not actually an ingredient at all, but rather the sound of 17 trombones playing Tequila in perfect harmony."
    ];

    // Add the ! commands
    if (data.chatmessage.startsWith('!')) {
      const args = data.chatmessage.slice(9).trim().split(/\s+/);
      const question = args.join(' ');
    
      let answer;
    
      if (data.chatmessage.includes("stream")) {
        const randomIndex = Math.floor(Math.random() * replyStream.length);
        answer = `${data.chatname}YourBot: ${replyStream[randomIndex]}`;
      } else if (data.chatmessage.includes("lottery")) {
        const randomIndex = Math.floor(Math.random() * replyLottery.length);
        answer = `${data.chatname}YourBot: ${replyLottery[randomIndex]}`;
      } else if (data.chatmessage.includes("game")) {
        const randomIndex = Math.floor(Math.random() * replyGame.length);
        answer = `${data.chatname}YourBot: ${replyGame[randomIndex]}`;
      } else if (data.chatmessage.includes("boss")) {
        const randomIndex = Math.floor(Math.random() * replyBoss.length);
        answer = `${data.chatname}YourBot: ${replyBoss[randomIndex]}`;
      } else if (data.chatmessage.includes("food")) {
        const randomIndex = Math.floor(Math.random() * replyFood.length);
        answer = `${data.chatname}YourBot: ${replyFood[randomIndex]}`;
      }
    
      console.log(answer);
      respondP2P(answer, tid);
    }

    return data; // return the data, if you want to modify it. If you return "null", it will stop the processing. (also false works, but I'll deprecate that I think)
}
