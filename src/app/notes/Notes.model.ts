export interface Note {
    id?: string; // Optional ID for the note, useful for database operations
    text: string; // The content of the note
    createdAt?: Date; // Optional timestamp for when the note was created
    updatedAt?: Date; // Optional timestamp for when the note was last updated
}