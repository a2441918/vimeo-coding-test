Front-End Exercise
 
Using our Simple API, create an application which parses a JSON response from a Vimeo channel (URL below) and builds an interface from the data that is returned. Pay special consideration to code reusability, semantics, and interactivity. 

You are free to make use of a view library (React, Vue, Polymer, etc.), but please refrain from using an entire framework such as Backbone or AngularJS. We want to see that you know how to architect an application. Altering or updating styles and interactivity is encouraged. 

As this role is heavily tied to showing users what makes Vimeo great, the ideal applicant is someone capable of writing semantic HTML and purposeful CSS (clean syntax, BEM methodology, use of the cascade, etc.).

Please do not send a .zip back. Instead, please host the solution on GitHub, Bitbucket, etc and provide a link
 
Simple API Documentation: https://developer.vimeo.com/apis/simple 
Example Feed: http://vimeo.com/api/v2/channel/staffpicks/videos.json
 
Once finished please answer the following questions:

Was the question/problem clear? Did you feel like something was missing or not explained correctly? Problem was very clear.

How much time did you spend on each part: understanding, designing, coding, testing? Understanding - 10min, Designing - 15 min, Coding - 30 min, Testing - 10min

What would you have done differently if you have more time or resources? - I would have implemented the same in React.js, add animations to events, better div flow and styles.

Are there any bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact? - In terms of performance, InnerHTML is most definitely going to be slower, because it needs to be parsed and internally converted into DOM elements. We can use createElement instead.

How would the system scale for more users/visitors? - Increase number of servers to actually allow more connection requests

How would your solution cope if the API was slow or broke or returned incorrect data? - It returns a loading icon now, but can later modify it to throw an error page.

Anything else you want to share about your solution or the problem? - npm install http-server && http-server
