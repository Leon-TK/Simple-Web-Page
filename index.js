let notes = [];

$(document).ready(function () {
    if (localStorage.getItem("notes"))
    {
        console.log("notes appear"); 
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    setNotes();


$("#note_Submit").on("click", function (e) {
    console.log("#note_Submit click"); 
    let noteTitle = $("#note_Title").val();
    let noteDesc = $("#note_Body").val();
    let note = {
        title: noteTitle,
        desc: noteDesc
    }
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    setNote(note);
});

});

function setNote(note) {
    $("section").append(`
            <div class="note">
                <h4>${note.title}</h4>
                <span>${note.desc}</span>
            </div>
        `);
}
function setNotes() {
    notes.forEach((note) => {
        setNote(note)
    });
}
