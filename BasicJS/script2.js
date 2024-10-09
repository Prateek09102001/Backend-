// async and await
//Line by line code chale isay khate hai synchronous 
// Jo bhi code async nature ka ho us ko side stack mai bhej do and agle Code ko chalao jo bhi sync nature ka ho, jab bhi saara sync code complete ho jae tho check karo ki async code complete huaa ya nahi an d yadi wo complete huaa tho us ko main stack mai lao and chalao

async function call(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

call();