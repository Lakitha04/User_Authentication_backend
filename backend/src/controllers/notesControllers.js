

export function getNotes(req, res) {
    res.status(200).send("you  just fetch notes")  
}

export function createNote(req, res) {
    res.status(200).send("note created")
}
export function updateNote(req, res) {
    res.status(200).send(`note with id  updated`)
}

export function deleteNote(req, res) {
    res.status(200).send(`note with id  deleted`)
}