// scope of functions

function one(){
    const username = "Nishan";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);  // this shows the error as the website is defined in function and it cannot be accessed by function one
    two();
}
one();