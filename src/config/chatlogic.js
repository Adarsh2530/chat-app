export const getsender = (loggedUser,users)=>{
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
}

export const getsenderFull = (loggedUser,users)=>{
    return users[0]._id === loggedUser._id ? users[1] : users[0];
}

