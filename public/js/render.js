// -------------------------------------------------------------------
// Main Variables
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// Collecting the User Response
// -------------------------------------------------------------------

// rendering side navigation
function myRender() {

    $.get(`/api/notes`, function(data) {

        $allNotes.empty();
        
        data.forEach( (item, index) => {

            // setting the HTML to append
            let lineItem = `<li><a href="#!" class="waves-effect menu-item" data-index="${index}"><i class="material-icons right deleteBtn">delete_forever</i>${item.title}</a></li>`;

            // appending the HTML
            $allNotes.append(lineItem);

        });

    });
};

function renderFirstNote() {
    $.get(`/api/notes`, function(data) {

        const myDataLen = data.length;
        
        if (myDataLen > 0) {
            displayNote(data[0], 0);
        }
    });    
}

// -------------------------------------------------------------------
// Rendering the "Note" section of 
// -------------------------------------------------------------------

// displaying a note

const displayNote = ({title, content}, myIndex) => {

    activeItem = myIndex;

    $noteDiv.attr(`data-active`, myIndex);
    $noteTitle.html(title);
    $noteContent.html(content);

}

$( document ).ready(function() { 

// -------------------------------------------------------------------
// Save note
// -------------------------------------------------------------------

    // $saveBtn.on(`click`, () => {

    //     const newTitle = $(`.note-title`).html();
    //     const newContent = $(`.note-content`).html();

    //     if (newTitle.replace(`&nbsp;`,``) === `` || newContent.replace(`&nbsp;`,``) === ``) {
    //         M.toast({html: `Please enter a title and content!`});
    //     }

    //     else {
    //         const newNote = {
    //             title: newTitle,
    //             content: newContent,
    //             favorite: false,
    //             dataIndex: $noteDiv.attr(`data-active`)            
    //         };
    
    //         $.post(`/api/notes/save`, newNote)
    //         .then( (data) => {
    //             if (data) {
    //                 $noteDiv.attr(`data-active`, data);
    //                 activeItem = data;
    //             }
                
    //             myRender();

    //             M.toast({html: `Note saved!`});
    
    //         });
    //     }


    // });

});