// actions are object with property typr

//actioncreators -- > javascript functions which returns an action

export function GetName(Name) {
    return {
        type: "actionName",
        Name: Name
    }
}


export function GetAge(Age) {
    return {
        type: "actionAge",
        Age: Age
    }
}


export function GetUserSuccess(Users) {
    return {
        type: "User",
        Users: Users
    }
}


export function GetUserFailure(Error) {
    return {
        type: "Fail",
        Error: Error
    }
}

export function GetUsers() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/Users')
            .then(response => response.json())
            .then((users) => {
                dispatch(GetUserSuccess(users))
            })
    }

}



//actions are only way through you can communicate with store