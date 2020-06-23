// Initialize the collection with array
let collection = [
    {
        title : "Graceful",
        name : "Amy",
        trackNum: 10,
        url : "http://facebook.com",
        year : 2000,
    },
    {
        title : "Her life",
        name : "Alson",
        trackNum: 20,
        url : "http://Twitter.com",
        year : 2001,
    },
    {
        title : "reason",
        name : "Alvin",
        trackNum: 5,
        url : "http://Youtube.com",
        year : 2002,
    },
];

   // This function is used to show all the record list
    const showCollection = () => {
        for (let i = 0; i < collection.length; i++) {
            let newRecord = `
            Title : ${collection[i].title}
            name : ${collection[i].name}
            trackNum : ${collection[i].trackNum}
            url : ${collection[i].url}
            year : ${collection[i].year}`;
            alert(newRecord);
        };
    };

    //This function is used show a new addedRecord.
    const addedRecord = () =>{
        let recordTitle = prompt("Enter the record title:");
            let recordName = prompt("Enter the artist's name");
            let recordTrackNum = prompt("Enter the track number");
            let recordUrl = prompt("Enter the link url:");
            let recordYear = prompt("Enter the released year");
            if (!recordUrl.startsWith("http://") || !recordUrl.startsWith("https://")) {
                recordUrl = `http://${recordUrl}`;
            }

            let recordCollection = {
            title : recordTitle,
            name : recordName,
            trackNum : recordTrackNum,
            url : recordUrl,
            year : recordYear,
            };
            collection.push(recordCollection);
            for (let i = 0; i < collection.length; i++) {
                let newRecord = `
                Title : ${collection[i].title}
                name : ${collection[i].name}
                trackNum : ${collection[i].trackNum}
                url : ${collection[i].url}
                year : ${collection[i].year}`;
                alert(newRecord);
            }
    }
       // Update an existing record inside of the array. 
    const updatedRecord = () => {
        // The user have  to decide on which index they want to update
        let recordToUpdate = Number(prompt(`Enter an existing record you want to update (1,2,3...)`));
        let changedRecord = collection.splice(recordToUpdate -=1, 1);
        alert(`You are about to change the record "${changedRecord[0].title}" into another record.
        Continue anyway...`);

        // Ask the user to enter their preferences or choices.
        let changedTitle = prompt("Give us a title of a record: ")
        let changedName = prompt("Choose a name of an artist you want");
        let changedTrackNum = prompt("How many track does it have?");
        let changedUrl = prompt("Enter the link url:");
        let changedYear = prompt("Enter the released year");

        // A condition that the user have to deal with before they enter the url
        if (!changedUrl.startsWith("http://") || !changedUrl.startsWith("https://")) {
            changedUrl = `http://${changedUrl}`;
        }

        // As soon as the user enter their choices, the will get new upate 
        let updatedCollection = {
        title : changedTitle,
        name : changedName,
        trackNum : changedTrackNum,
        url : changedUrl,
        year : changedYear,
        };
        collection.push(updatedCollection);
        for (let i = 0; i < collection.length; i++) {
            let newVersRec= `
            Title : ${collection[i].title}
            name : ${collection[i].name}
            trackNum : ${collection[i].trackNum}
            url : ${collection[i].url}
            year : ${collection[i].year}`;
            alert(newVersRec);
        }
    }

    // Remove an existing record
    const deletedRecord = () => {
        let recordToRemove = Number(prompt(`Enter the number of record to remove (0,1,2,3..)`));
        let removedRecord = collection.splice(recordToRemove--, 1);
        alert(`collection "${removedRecord[0].title}" removed succefully`);
    }

    // This prompt let the user to choose his choice 
    const recordMenu = `
    Choose an option:

    1 : Show all the records in the collection.
    2 : Add a new record (with its properties).
    3 : Update a specific record 
    4 : Remove an existing record
    5 : Quit the program
    `;

    let newCollection = Number(prompt(recordMenu));
    // Ask the user to enter new record until they quit
    while (newCollection !== 5) {
        switch (newCollection) {
            case 1:
                showCollection();
                break;
            case 2: 
                // the user asked to enter new record to add new array
                addedRecord();
                break;
            case 3:
                //Update a specific record
                updatedRecord();
                break;
            case 4: 
            // Remove an existing record from the collection
                deletedRecord();
                break;
            default:
        }
        newCollection = Number(prompt(recordMenu));
    }