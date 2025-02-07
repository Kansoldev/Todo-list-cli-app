# Todo-list-cli-app

A cli application that helps you create and manage to-do lists. It is easy to use and can run anywhere in your system. The project was built from roadmap.sh [backend projects](https://roadmap.sh/projects/task-tracker)

## Prerequisites

To run this project, you need to have node version 20 or greater installed on your machine.

## Instructions

First download the project and extract the content from the zip file. Open the project in your terminal and run this code

```
npm install -g task-cli
```

This will install the cli script that will manage your todo lists globally. Once the script is installed, you can start creating and managing your todo lists.

Here are a list of commands you can run on this application to manage your to-do lists

1. `task-cli add <todo-item>` will create a new to-do item and also the to-do lists file (task.json) if it doesn't already exist
2. `task-cli list` will list out all the current tasks that are in your todo lists (Created in tasks.json)
3. `task-cli delete <todo-item-id>` - This will delete a specific task from the todo lists
4. `task-cli update <todo-item-id> "new description"` - This will update a specific todo
5. `task-cli update-status <todo-item-id> "status"` - This will update the status of a specific task in your todo list. If no status is passed, the status is set to **done** by default. The 2 other options available are **in-progress** and **todo**

## Warning

If you already have a to-do lists created before, be sure the terminal is in the right location, else if there is no to-do lists in that location, a new one will automatically created.

## Contribution

If you would like to contribute to this project, make a fork of the repo, make your changes and submit a pull request.
Thanks for using this cli application.
You can check out my [portfolio](https://kansoldev.netlify.app) to find out more about me and the kind of work I do.
