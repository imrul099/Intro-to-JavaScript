const person = {
    name : 'abul',
    age : 34,
    contact : {
        phone : '01937278332',
        email : 'abuilla@gmail.com',
    },
    education : {
        schoolName : 'andorkilla high scool',
        subject : [
            {name : 'bangla', mark : 55},
            {name : 'english', mark : 65},
            {name : 'math', mark : 74},
        ]
    }
}

console.log(person.education.subject[1].mark);