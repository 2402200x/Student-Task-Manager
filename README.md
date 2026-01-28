# Student-Task-Manager

<h4>The Logic</h4>
<p>Why did you choose this approach?

I chose a separated frontend and backend architecture to follow real-world full-stack development practices. This makes the application modular, easier to debug, and scalable for future features like authentication or database integration. Using REST APIs allows clean communication between the UI and the server.

What was the hardest bug you faced, and how did you fix it?

The hardest issue was synchronizing task updates between frontend state and backend responses. Initially, tasks were not updating instantly after edits or deletions. I fixed this by properly handling API responses and refreshing the task list state after every successful CRUD operation.</p>
