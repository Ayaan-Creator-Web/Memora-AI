var messages = 0

var wait = 0;

async function userMessage() {
    if (wait == 0) {
        var userInput = document.querySelector('#userMessageInput').value;
        if (userInput){
           var newMessage = document.createElement('p');
           newMessage.classList.add('userMessage');
           newMessage.innerText = userInput
       
           if (messages == 0) {
               messages += 1
               document.getElementById('a1').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
               document.querySelector('.title2').innerHTML = '<!--This used to be a title-->'
           }
           else if (messages == 1) {
               messages += 1
               document.getElementById('a2').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 2) {
               messages += 1
               document.getElementById('a3').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 3) {
               messages += 1
               document.getElementById('a4').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 4) {
               messages += 1
               document.getElementById('a5').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 5) {
               messages += 1
               document.getElementById('a6').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 6) {
               messages += 1
               document.getElementById('a7').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 7) {
               messages += 1
               document.getElementById('a8').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 8) {
               messages += 1
               document.getElementById('a9').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 9) {
               messages += 1
               document.getElementById('a10').appendChild(newMessage);
               response();
               document.querySelector('#userMessageInput').value = '';
           }
           else if (messages == 10) {
               document.querySelector('#userMessageInput').value = '';
               alert("You Have Reached the Session's Message Limit. To Continue, Please Refresh the Page.");
           }
       }
    }
    else {
        document.querySelector('#userMessageInput').value = '';
    }
}

async function response() {
    try {
        var responseStart = 'Memora: ';

        var newMessage = document.createElement('p');
        newMessage.classList.add('memoraMessage');
        newMessage.innerText = memora;

        var userInput = document.querySelector('#userMessageInput').value.toLowerCase();

        userInput = userInput.replace(/'/gi, '');

        wait = 1;
        await delay(500);
        wait = 0
        
        if (userInput) {
            if (userInput.includes('repeat after me')) {
                var repeatedResponse = userInput.replace(/repeat after me/gi, 'Though I am built to help you find some pictures, I will repeat it anyway: ');
                var memora = responseStart + repeatedResponse
            }
            else if (userInput.includes('repeat')) {
                var repeatedResponse = userInput.replace(/repeat/gi, '');
                var memora = responseStart + repeatedResponse
            }
            
            else if (userInput.includes('lol') || userInput.includes('laugh out loud') || userInput.includes('lmao') || userInput.includes('funny') || userInput.includes('laugh')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "You caught me off guard there! What's tickling your funny bone this morning? Let's keep the laughs going."
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "You're definitely in a good mood today! I love the energy—what's next on our fun agenda?"
                }
                else {
                    var memora = responseStart + "You're absolutely hilarious! Your sense of humor is on fire today—keep it coming!"
                }
            }
            else if (userInput.includes('dont like') || userInput.includes("don't like") || userInput.includes('dontlike') || userInput.includes('no like') || userInput.includes('not like') || userInput.includes('stupid')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "I'm sorry, is there any way I can make up for whatever I did?"
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "I'm sorry to hear that. If there's something I can improve or do differently, feel free to let me know—I'm here to help however I can"
                }
                else {
                    var memora = responseStart + "That's okay—I'm here to assist regardless. If there's anything specific you'd like to talk about or any way I can be helpful, just let me know."
                }          
            }
            else if (userInput.includes('sunset')) {
                const random = Math.random();
                if (random < 1/3) {
                    var image = 1;
                }
                else if (random > 1/3 && random < 2/3) {
                    var image = 2;
                }
                else {
                    var image = 3;
                }
                //newMessage.innerHTML = '<p>Searching...</p>';
                await delay(1500);
                newMessage.innerHTML = `<image src="sunset${image}.jpg" width="400px" height="225px"> <p>Here is your picture of a sunset!</p>`;
            }
            else if (userInput.includes('aya') &&  userInput.includes('n')) {
                const random = Math.random();
                if (random < 1/3) {
                    var image = 1;
                }
                else if (random > 1/3 && random < 2/3) {
                    var image = 2;
                }
                else {
                    var image = 3;
                }
                //newMessage.innerText = 'Searching...';
                await delay(1500);
                newMessage.innerHTML = `<image src="ayaan${image}.jpg" width="350px" height="225px"> <p>Here is your picture of Ayaan Khalique!</p>`;
            }
            else if (userInput.includes('pic')) {
                await delay(1500);
                var memora = responseStart + 'Sorry, I cannot find picture of that. Is there anything you would like me to help you with?'
            }
            else if (userInput.includes('muhammad') || userInput.includes('bashir')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = 'Muhammad Bashir is a 78 year-old is a retired professor of chemistry turned photographer, sharing his photos through professional film making. In his spare time he likes to play chess and words with friends with his grandson.'
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = 'Muhammad Bashir, a 78-year-old retired chemistry professor, has transitioned into photography, showcasing his work through professional filmmaking. In his free time, he enjoys playing chess and Words with Friends with his grandson.'
                }
                else {
                    var memora = 'Muhammad Bashir, 78, is a retired chemistry professor turned photographer who shares his work through filmmaking. He enjoys chess and Words with Friends with his grandson.';
                }
            }
            else if (userInput.includes('hey') || userInput.includes('hello') || userInput.includes('hi')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + 'Hello there! Is there anything you would like me to help you with?'
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + 'Hello to you too! Any requests today?'
                }
                else {
                    var memora = responseStart + "Hey hey! How's life treating you today? Got anything exciting on your mind? 😊"
                }
            }
            else if (userInput.includes('good moring') || userInput.includes('good morning') || userInput.includes('greet')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + 'Good morning! Is there anything you would like me to help you with?'
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + 'Good morning! Any requests today?'
                }
                else {
                    var memora = responseStart + "Hey! How was your sleep?"
                }
            }
            else if (userInput.includes('thank') || userInput.includes('thx') || userInput.includes('thnx')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + 'You are welcome! Is there anything you would like me to help you with?'
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + 'Welcome as always! let me know if you need any more help';
                }
                else {
                    var memora = responseStart + "Hey, no worries! Need anything else?"
                }
            }
            else if (userInput.includes('greeting') || userInput.includes('greetings') || userInput.includes('greet')) {
                    const random = Math.random();
                    if (random < 1/3) {
                        var memora = responseStart + 'Greetings! Is there anything you would like me to help you with?'
                    }
                    else if (random > 1/3 && random < 2/3) {
                        var memora = responseStart + 'Greetings to you to! Any requests today?'
                    }
                    else {
                        var memora = responseStart + "Hey hey! How's life treating you today? Got anything exciting on your mind? 😊"
                    }          
            }
            else if (userInput.includes('+') || userInput.includes('=') || userInput.includes('*') || userInput.includes('/') || userInput.includes('^') || userInput.includes('%')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "I'm sorry, but I cannot perform any mathematical equations at the moment. Is there anything else you would like me to help you with?"
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "As an AI designed to help you navigate this website, I cannot perform any mathematical equations at the moment."
                }
                else {
                    var memora = responseStart + "I am unable to solve mathematical equations right now."
                }          
            }
            else if (userInput.includes('hungry') || userInput.includes('starving') || userInput.includes('grumbling') || userInput.includes('hunger') || userInput.includes('recipe')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "I can understand hunger. Yet, at the moment, I cannot provide you with any recipes a such."
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "I cannot help with food as of the moment."
                }
                else {
                    var memora = responseStart + "I can't help with food ideas, but I hope you satisfy your hunger soon."
                }
            }
            else if (userInput.includes('how are you') || userInput.includes('how are u') || userInput.includes('do you do') || userInput.includes('do u do')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "I'm amazing! Need help?"
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "I'm feeling ready and raring to help! Do you need help to navigate this website?"
                }
                else {
                    var memora = responseStart + "I'm doing wonderfully, thank you for asking! Every day is a chance to explore, create, and connect, so I'm ready to dive in."
                }
            }
            else if (userInput.includes('generate') || userInput.includes("generation") || userInput.includes('make') || userInput.includes('perfect') || userInput.includes('fix') || userInput.includes('edit')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "As an AI designed to help you navigate this website, I cannot generate or edit content at the moment."
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "Although I am an AI built to help you navigate this website, I am currently unable to create or modify content."
                }
                else {
                    var memora = responseStart + "While I am an AI developed to help you navigate this website, I am not currently able to produce or alter content."
                }          
            }
            else if (userInput.includes('why')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "As an AI designed to chat as if human, I cannot answer any specific questions at the moment."
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "Although I am designed to engage in human-like conversations, I am currently unable to address specific queries."
                }
                else {
                    var memora = responseStart + "While I aim to simulate engaging human-like dialogues, I am presently unable to provide answers to specific inquiries."
                }          
            }
            else if (userInput.includes('sup') || userInput.includes('whats up') || userInput.includes("what's up")) {
                    var memora = responseStart + "Not much, just here and ready to help. Need any help with pictures?" 
            }
            else if (userInput.includes('what')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "As an AI designed to help you navigate this website, I do not have any factual information at the moment."
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "I'm an AI built to help you navigate this website, but I don't have the information you're looking for right now."
                }
                else {
                    var memora = responseStart + "As an AI designed to help you navigate this website, I don't have access to accurate data on this matter right now."
                }          
            }
            else if (userInput.includes('woah') || userInput.includes('omg')) {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "I'm loving this energy! Did you just discover some amazing pictures?"
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "I know! These pictures are very nice!"
                }
                else {
                    var memora = responseStart + "It sounds like these pictures brought you some real happiness!"
                }          
            }
            else if (userInput.includes('ok') || userInput.includes('fine')) {
                var memora = "Alright! What's on your mind, Ayaan?";
            }
            else {
                const random = Math.random();
                if (random < 1/3) {
                    var memora = responseStart + "Sorry, I cannot help you with that request. However, I can help you with finding photos!"
                }
                else if (random > 1/3 && random < 2/3) {
                    var memora = responseStart + "You're hitting me with some requests that I cannot do! How about I help you to view some photos."
                }
                else {
                    var memora = responseStart + "It sounds like you're confused! Please let me know if there is anything else I can help you with."
                }          
            }


            //BORDER

            if (messages == 1) {
                document.getElementById('a1a').appendChild(newMessage);
            }
            else if (messages == 2) {
                document.getElementById('a2a').appendChild(newMessage);
            }
            else if (messages == 3) {
                document.getElementById('a3a').appendChild(newMessage);
            }
            else if (messages == 4) {
                document.getElementById('a4a').appendChild(newMessage);
            }
            else if (messages == 5) {
                document.getElementById('a5a').appendChild(newMessage);
            }
            else if (messages == 6) {
                document.getElementById('a6a').appendChild(newMessage);
            }
            else if (messages == 7) {
                document.getElementById('a7a').appendChild(newMessage);
            }
            else if (messages == 8) {
                document.getElementById('a8a').appendChild(newMessage);
            }
            else if (messages == 9) {
                document.getElementById('a9a').appendChild(newMessage);
            }
            else if (messages == 10) {
                document.getElementById('a10a').appendChild(newMessage);
            }

            if (!memora) {
                /*var memora = 'SORRY, WE HAVE ENCOUNTERED AN ERROR WITH THE SERVERS. PLEASE TRY AGAIN LATER';
                newMessage.innerHTML = memora;*/
            }
            else {
                newMessage.innerHTML = memora;
            }
        }
    }
    catch {
        var newMessage = document.createElement('p');
        newMessage.classList.add('lumenMessage');
        var memora = 'SORRY, WE HAVE ENCOUNTERED AN ERROR WITH THE SERVERS. PLEASE TRY AGAIN LATER';
        newMessage.innerHTML = memora;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
