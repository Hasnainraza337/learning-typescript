const userName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;
// const formSubmit: HTMLFormElement | null = document.querySelector(".form") same as above
const main_container = document.querySelector(".main_container") as HTMLElement;

// define the contact of object
interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string
}


// reuseable function
const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const res = await fetch(url, options)

    if (!res.ok) {
        throw new Error(`Network response was not ok - status:${res.status}`)
    }

    const data = await res.json();
    console.log(data)
    return data;
}

const results = (singleUser: UserData) => {
    const { login, avatar_url, url } = singleUser

    main_container.insertAdjacentHTML("beforeend",
        `<div class='card'>
        <img src=${avatar_url} alt=${login} />
        <hr />
        <div class='card-footer'>
        <img src=${avatar_url} alt=${login} />
        <a href="${url}">Github</a>
        </div>
        </div>`

    )
}

const fetchUserData = (url: string) => {
    fetchData<UserData[]>(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            results(singleUser)
        }
    })
}


fetchUserData("https://api.github.com/users")


// search filter

formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault()

    const search = userName.value.toLowerCase();

    try {
        const url = "https://api.github.com/users";
        const allUserData = await fetchData<UserData[]>(url, {});

        const matchingUser = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(search)
        })
        // clear previous data
        main_container.innerHTML = "";

        if (matchingUser.length === 0) {
            main_container.insertAdjacentHTML(
                "beforeend",
                `<p class='empty-msg'>No User Found.</p>`
            )
        } else {
            for (const singleUser of matchingUser) {
                results(singleUser)
            }
        }
    } catch (error) {
        console.log(error)
    }
})