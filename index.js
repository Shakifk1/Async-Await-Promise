// q1 callback Example
const posts = [
    {id: 1, name: 'Post One', desc: 'Post One Desc'},
    {id: 2, name: 'Post Two', desc: 'Post Two Desc'},
    {id: 3, name: 'Post Three', desc: 'Post Three Desc'},
    {id: 4, name: 'Post Four', desc: 'Post Four Desc'},
    {id: 5, name: 'Post Five', desc: 'Post Five Desc'}
]
const addPost = (post, callback1) => {
    setTimeout( () => {
        posts.push(post)
        callback1()
    }, 5000 )
}

const showPosts = ( ) => {
    setTimeout( () => {
        posts.forEach( post => console.log(post.name) )
    }, 3000 )
}

const fun = () => {
    console.log('Print Completed...')
}

addPost( {id: 6, name: 'Post Six', desc: 'Post Six Desc'}, showPosts )

//q2 callback hell
function calhell(){
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2")
            setTimeout(() => {
                console.log("3")
                setTimeout(() => {
                    console.log("4")
                    setTimeout(() => {
                        console.log("5")
                        setTimeout(() => {
                            console.log("6")
                            setTimeout(() => {
                                console.log("7")
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
                
}

calhell();

// Q3 promise print 1 to 7
console.log("promises....")

async function pause(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

async function countDown(count) {
    while (count <= 7) {
        await pause(1000);
        console.log('count:', count);
        count++;
    }
}

countDown(1);



