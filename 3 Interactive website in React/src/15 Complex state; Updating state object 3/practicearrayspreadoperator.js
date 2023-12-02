const contact =[{
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
}]

const newContact = [{...contact, isFavorite: true}]
console.log(newContact)

