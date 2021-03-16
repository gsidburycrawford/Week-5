const posts = [
    { title: 'Phase 1', body: 'Collect underpants' },
    { title: 'Phase 2', body: '?' },
];

function getPosts(){

    setTimeout(function() {
        
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title}: ${post.body}</li>`;
            })
            output += `<button type="button" id="clear-list" onclick="removeAll()">Clear Items</button>`
            document.body.innerHTML = output;
        })
    }, 1000);

}

function createPost(post, callback) {
    
    setTimeout(()=>{  
        posts.push(post);
        callback();
    },2000)

}
document.getElementById("callMe").onclick=()=> {
    createPost({ title: 'Phase 3', body: 'Profit'}, getPosts);
}

function removeAll() {
    document.body.innerHTML = '';
}
