import React, { useState } from 'react';

function Notes() {
    const [listOfNotes, setListOfNotes] = useState([]);
    const [modelShow, setModelShow] = useState(false);
    const [newNote, setNewNote] = useState({
        id: 1,
        title: '',
        description: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [editNoteId, setEditNoteId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editMode) {
            // Edit existing note
            const updatedNotes = listOfNotes.map(note =>
                note.id === editNoteId ? { ...note, title: newNote.title, description: newNote.description } : note
            );
            setListOfNotes(updatedNotes);
            setEditMode(false);
            setEditNoteId(null);
        } else {
            // Add new note
            const newNoteWithId = { ...newNote, id: Date.now() };
            setListOfNotes([...listOfNotes, newNoteWithId]);
        }

        // Clear the form fields
        setNewNote({
            id: 1,
            title: '',
            description: ''
        });

        // Close the modal
        setModelShow(false);
    };

    const handleEdit = (id) => {
        const noteToEdit = listOfNotes.find(note => note.id === id);
        setNewNote({
            id: noteToEdit.id,
            title: noteToEdit.title,
            description: noteToEdit.description
        });
        setEditMode(true);
        setEditNoteId(id);
        setModelShow(true); // Open modal for editing
    };

    const handleDelete = (id) => {
        const updatedNotes = listOfNotes.filter(note => note.id !== id);
        setListOfNotes(updatedNotes);
    };

    return (
        <div className='h-screen'>

            {/* Modal toggle */}
            <div className='flex justify-center'>
                <button
                    onClick={() => {
                        setEditMode(false);
                        setModelShow(!modelShow);
                    }}
                    className="align-middle block m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    {editMode ? 'Edit Note' : 'Add Note'}
                </button>
            </div>

            {/* Main modal */}
            {modelShow && (
                <div id="authentication-modal" tabIndex="-1" className="flex justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                                    {editMode ? 'Edit Note' : 'Add your notes here'}
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setModelShow(false);
                                        setEditMode(false);
                                        setEditNoteId(null);
                                    }}
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal"
                                >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={newNote.title}
                                            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Title of your notes"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            value={newNote.description}
                                            onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Description of your notes"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        {editMode ? 'Save Changes' : 'Submit'}
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Displaying notes */}
            {listOfNotes.length === 0 ? (
                <p>No notes are here...</p>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {listOfNotes.map((note) => (
                        <div key={note.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                            </svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">{note.title}</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{note.description}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleEdit(note.id)}
                                    className="text-blue-600 hover:underline mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(note.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default Notes;
