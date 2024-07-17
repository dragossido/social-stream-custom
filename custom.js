//a better kind of for loop iteration called Fisher-Yates shuffle.
// let create array and a for - to loop.
function applyCustomActions(data) {
  var tid = false;
  if (data.tid){tid = data.tid;}

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

  if (messageContainsEmoticon && (data.chatname !== 'DJTotyGee' && data.chatname.toLowerCase() !== 'djtotygee')) {
    let answer;
    answer = `${data.chatname}YourBot: nice emoticon ${matchedEmoticon} I am Your Bot and you can interact with me by typing ! followed by a question`;
    console.log(answer);
    respondP2P(answer, tid);
  }
  
  //array of answer streaming
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

  // Add the ! commands
  if (data.chatmessage.startsWith('!')) {
    const args = data.chatmessage.slice(9).trim().split(/\s+/);
    const question = args.join(' ');
  
    let answer;
  
    if (data.chatmessage.includes("stream")) {
      const randomIndex = Math.floor(Math.random() * replyStream.length);
      answer = `${data.chatname}YourBot: ${replyStream[randomIndex]}`;
    } else if (data.chatmessage.includes("lottery")) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          answer = `${data.chatname}YourBot: Yes, but when ants will rule the world`;
          break;
        case 1:
          answer = `${data.chatname}YourBot: There are more chances that a meteorite destroy the world`;
          break;
        default:
          answer = `${data.chatname}YourBot: Unknown`;
          break;
      }
    } else if (data.chatmessage.includes("game")) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          answer = `${data.chatname}YourBot: Yes, You win the game`;
          break;
        case 1:
          answer = `${data.chatname}YourBot: No, you don't win the game`;
          break;
        default:
          answer = `${data.chatname}YourBot: The game is even`;
          break;
      }
    } else if (data.chatmessage.includes("boss")) {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          answer = `${data.chatname}YourBot: Yes, you killed the boss`;
          break;
        case 1:
          answer = `${data.chatname}YourBot: No, you were killed by the boss`;
          break;
        default:
          answer = `${data.chatname}YourBot: You and the boss have become best friends`;
          break;
      }
    }
  
    console.log(answer);
    respondP2P(answer, tid);
  }

return data; // return the data, if you want to modify it. If you return "null", it will stop the processing. (also false works, but I'll deprecate that I think)
}
