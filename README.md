# My Notes

<p>This project is a notes-taking mobile application built using React Native.</p>

<p> Here's a brief summary of its components and functionalities:</p>

<h3>Project Structure:</h3>
*The project is organized into different files and directories, following a typical React Native project structure.

<h3>Dependencies:</h3>
*It utilizes various dependencies including @react-navigation/native and @react-navigation/native-stack for navigation, and other packages for styling and UI components.

<h3>Context Provider:</h3>
*The Provider component manages the state of notes. It provides functionalities like adding, updating, and deleting notes.

<h3>Screens:</h3>

1. MyNotes Screen:
- Displays a list of notes.
- Allows navigation to the details of a particular note and deletion of notes.

2. AddNotes Screen:
- Provides a form to add a new note or update an existing one.
- Validates input fields for title and description.
- Saves or updates notes based on user input.

3. NoteDetails Screen:
- Displays the details of a specific note.
- Provides options to edit note details like bold, italic, underline, and alignment.

<h3>Components:</h3>
* <b>Header: Displays the header of the application with navigation options.</b>
* <b>SaveButton: Renders a button for saving notes.</b>
* <b>MenuButtons: Renders buttons for formatting text (bold, italic, underline) and alignment options.</b>
* <b>AddButton: Displays a button for adding new notes.</b>
* <b>NotesCard: Represents a card view for displaying individual notes with options to delete or update them.</b>

<h3>Styles:</h3>
* The project utilizes style constants defined in the style.js file for consistent styling across components.

<h3>Navigation:</h3>
* The application uses React Navigation for navigation between different screens.

<h3>Context API:</h3>
* It leverages the React Context API for managing state and sharing data between components.

<h3>Functionality:</h3>
* Users can add new notes, update existing notes, and delete notes.
* Notes can be formatted with bold, italic, and underline styles.
* Text alignment options (left, center, right) are available for note details.

<h3>Overall:</h3>
*This project serves as a basic notes app prototype with essential features like CRUD operations on notes and simple text formatting options.

Screen gif:

![](notes-screen.gif)