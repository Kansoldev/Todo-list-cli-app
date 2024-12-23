#!/usr/bin/env node

import fs from "node:fs/promises";
import { randomUUID } from "node:crypto";

async function addTodo(todos = []) {
  const newTodo = {
    id: randomUUID(),
    description: process.argv[3],
    status: "todo",
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  todos.push(newTodo);

  await fs.writeFile("tasks.json", JSON.stringify(todos));
  process.stdout.write(`Tasks successfully added (ID: ${newTodo.id})`);
}

async function setupTodoList() {
  try {
    const todos = JSON.parse(await fs.readFile("tasks.json", "utf-8"));
    addTodo(todos);
  } catch (error) {
    // Check if the error returned is file not found, and create the file
    if (error.code === "ENOENT") {
      addTodo();
    } else {
      throw error;
    }
  }
}

switch (process.argv[2]) {
  case "add":
    setupTodoList();
    break;

  default:
    console.log("Invalid command given");
}
