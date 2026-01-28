# Student-Task-Manager
<h4>Goal</h4>
<p>
  To help students organize and track academic tasks through a simple task management web application.
</p>
<h4>The Logic</h4>
<p>Why did you choose this approach?

I chose a separated frontend and backend architecture to follow real-world full-stack development practices. This makes the application modular, easier to debug, and scalable for future features like authentication or database integration. Using REST APIs allows clean communication between the UI and the server.

What was the hardest bug you faced, and how did you fix it?

The hardest issue was synchronizing task updates between frontend state and backend responses. Initially, tasks were not updating instantly after edits or deletions. I fixed this by properly handling API responses and refreshing the task list state after every successful CRUD operation.</p>
<div class = "output screenshots">
  <img src="/Student-Task-Manager/img/Screenshot 2026-01-28 124620.png" alt="">
</div>

<div>
  <h4>Future Enhancements</h4>
  <p>
    - Add Edit and Delete buttons for better task management.
    - Sort tasks automatically based on completion status.
  </p>
</div>
