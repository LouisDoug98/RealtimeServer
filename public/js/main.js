async function x(){
    console.log("X")
    await fetch('/x').then(
        res => res.json()
    ).then(
        data => console.log(data)
        
    )
}