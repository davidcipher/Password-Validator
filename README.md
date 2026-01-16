I built this project to solve a common headache: the "guessing game" users play when creating a password. Instead of waiting for an error message after clicking submit, this tool gives you instant feedback as you type.
​Why I made this
​I wanted a validator that was truly modular. Often, validation logic is tangled up with other code, making it hard to move from one project to another. I’ve separated the HTML, CSS, and JavaScript so I (or you!) can easily drop this into any login or signup flow in just a few seconds.
​How it works
​It’s not just checking length. The logic looks for a "healthy" mix of characters:
​Real-time tracking: The checklist updates the moment you hit a key.
​Visual cues: The UI uses a professional gray and black theme, focusing on high contrast and clarity.
​Pure JavaScript: No heavy frameworks or libraries. It’s lightweight, fast, and works in any modern browser.
​How to use it
​Since the files are separate, you can just:
​Copy style.css and script.js into your project folder.
​Link them in your HTML.
​Use the .container structure from the index.html file.
​Plans for the future
​I designed this to be a "plug-and-play" component. My next step is to integrate it into a full user-registration project, keeping the same clean, professional aesthetic.
