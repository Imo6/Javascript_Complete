//nested destructuring

const users=[
    {userId:1,userName:'harshit',gender:'male'},
    {userId:2,userName:'mohit',gender:'male'},
    {userId:3,userName:'kiran',gender:'female'},
]

// const [user1,user2,user3]=users
// console.log(user1)//it gives whole object

// const [{userId}, ,{gender}]=users
// console.log(userId)//it prints userId of user1
// console.log(gender)//it prints gender of user3

// const [{userId,userName}, ,{gender}]=users
// console.log(userId)
// console.log(userName)//it prints userName of user1
// console.log(gender)

const [{userId:id,userName:userFirstName}, ,{gender}]=users
console.log(id)
console.log(userFirstName)//it prints userName of user1
console.log(gender)