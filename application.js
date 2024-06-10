
        // document.addEventListener("DOMContentLoaded", function() {
        //     const form = document.getElementById('chat-form');
        //     const chatInput = document.getElementById('chat');
        //     const messagesContainer = document.getElementById('messages');

        //     form.addEventListener('submit', function(event) {
        //         event.preventDefault();
        //         const messageText = chatInput.value.trim();
        //         if (messageText !== "") {
        //             const newMessage = document.getElementById('shText');
        //             newMessage.textContent = messageText;
        //             newMessage.classList.add('bg-gray-200', 'p-2', 'rounded', 'my-2','grow');
        //             messagesContainer.appendChild(newMessage);
        //             chatInput.value = "";
        //         }
        //     });
        // }); 

        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById('chat-form');
            const chatInput = document.getElementById('chat');
            const messagesContainer = document.getElementById('messages');

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const messageText = chatInput.value.trim();
                if (messageText !== "") {
                    // Replace specified words with an image
                    // const replacedText = messageText.replace(/html-5|html 5|html|HTML/gi, '<img src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000" alt="HTML logo" class="inline-block w-8 h-8">');
                    let replacedText = messageText.replace(/html - 5|html-5|html 5|html|HTML/gi, '<img src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000" alt="HTML logo" class="inline-block w-10 h-10">');
                    replacedText = replacedText.replace(/css - 3|css-3|css 3|css|CSS/gi, '<img src="https://img.icons8.com/?size=100&id=8qvk2Bg2Vz7S&format=png&color=000000" alt="CSS logo" class="inline-block w-10 h-10">');
                    replacedText = replacedText.replace(/js - 3|js-3|js 3|js|java script|javascript/gi, '<img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JS logo" class="inline-block w-10 h-10">');


                    // Create a new paragraph element and set its innerHTML to the replaced text
                    const newMessage = document.getElementById('shText');
                    newMessage.innerHTML = replacedText;
                    newMessage.classList.add('bg-gray-200', 'p-2', 'rounded', 'my-2', 'grow');

                    // Append the new message to the messages container
                    messagesContainer.appendChild(newMessage);

                    // Clear the chat input
                    chatInput.value = "";
                }
            });
        });
 