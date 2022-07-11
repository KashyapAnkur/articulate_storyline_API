function send_API() {
    const player = GetPlayer();
    const name = player.GetVar("name");
    const job = player.GetVar("job");
    const page = player.GetVar("page");

    if(!name) {
        alert("Please enter your name");
        return;
    }
    if(!job) {
        alert("Please enter your job");
        return;
    }
    if(!page) {
        alert("Please select page");
        return;
    }

    fetch(`https://reqres.in/api/users?page=${page}`,{
        method: "GET"
    })
    .then(r => r.json())
    .then((res) => {
        console.log(`Welcome ${name}(${job})`);
        console.log("Data you requested is below:");

        res.data.forEach((data) => {
            console.table(data);
        });
    })
    .catch((err) => {
        console.log(err);
    });
}