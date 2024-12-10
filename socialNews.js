// Link class to represent a single link
class Link {
  constructor(title, url, author) {
    // Automatically add http:// if not present
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    this.title = title;
    this.url = url;
    this.author = author;
  }

  // Returns the link information as a string
  toString() {
    return `${this.title} (${this.url}). Author: ${this.author}`;
  }
}

// Main program
const links = []; // Array to store all links

// Function to display the start menu
function showMenu() {
  const menu = `
  Welcome to the Social News Program! What would you like to do?
  1: Show the list of links
  2: Add a new link
  3: Remove an existing link
  0: Quit
  `;
  return parseInt(prompt(menu), 10);
}

// Function to show the list of links
function showLinks() {
  if (links.length === 0) {
    alert("No links to display.");
  } else {
    const linkList = links
      .map((link, index) => `${index + 1}. ${link.toString()}`)
      .join("\n");
    alert(`Current Links:\n${linkList}`);
  }
}

// Function to add a new link
function addLink() {
  const title = prompt("Enter the title of the link:");
  const url = prompt("Enter the URL of the link:");
  const author = prompt("Enter the author of the link:");
  const newLink = new Link(title, url, author);
  links.push(newLink);
  alert("Link added successfully!");
}

// Function to remove an existing link
function removeLink() {
  if (links.length === 0) {
    alert("No links to remove.");
    return;
  }

  let index = -1;
  while (index < 1 || index > links.length) {
    index = parseInt(prompt(`Enter the index of the link to remove (1-${links.length}):`), 10);
    if (isNaN(index) || index < 1 || index > links.length) {
      alert("Invalid index. Please try again.");
    }
  }
  links.splice(index - 1, 1); // Remove the link at the given index
  alert("Link removed successfully!");
}

// Main program loop
function main() {
  let choice;
  do {
    choice = showMenu();
    switch (choice) {
      case 1:
        showLinks();
        break;
      case 2:
        addLink();
        break;
      case 3:
        removeLink();
        break;
      case 0:
        alert("Goodbye!");
        break;
      default:
        alert("Invalid choice. Please try again.");
    }
  } while (choice !== 0);
}

// Start the program
main();
