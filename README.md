# ai-chatbot
AI chatbot built on Node.JS and Express framework

## Currently only supported for Chrome Browser
## <a href="https://ai-chatbot-hx0o.onrender.com/">Live Preview</a>

![Screenshot 2024-01-13 at 13 18 16](https://github.com/sehyunlee217/ai-chatbot/assets/121660178/dc537401-0397-474a-984c-3c46b8dd68c3)

1. Goal of the AI Chatbot:
   - Engages users with difficulty utilizing AI chatbots - individuals with difficulty typing or users having difficulty with technology could utilize speech to make use of the LLM model or Open AI or any other models that provide API support.
#
2. Main functionalities: 
   - Able to communicate with OpenAI API in order to receive response directed by speech.
   - Utilizes socket.io for communication with the api - front-end
   - Utilizes Speech Recognition / Speech Sysnthesis in order to read and output speech.
   - Returns text information of the response of the chatbot 
#
3. Focus on accessibility:
   - I had a recent exeperience of helping out some senior citizens with signing up for some VISA applications online at the airport. Two things surprised me: Elderly individuals utilize very large text fonts than I have ever expected and a majority of mobile experience is not geared for these individuals.
   - Based off my experience, instead of focusing too much on the aesthetics of the site, I tried to keep it as simple as possible, with large font sizes and colors that are easy to recognize. It is a simple application and there isn't much to factor in; however, I think it is something important to consider for every application that I build from now on.
   
References: 
   - https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
   - https://socket.io/docs/v3/troubleshooting-connection-issues/
   - https://openai.com/blog/openai-api
