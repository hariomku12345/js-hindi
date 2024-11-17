
const books = [
    {title:'Book One', genre:'fiction',publish:1981,edition: 2004},
    {title:'Book twe', genre:'non-fiction',publish:1985,edition: 2004},
    {title:'Book three', genre:'history',publish:1992,edition: 2004},
    {title:'Book four', genre:'non-fiction',publish:1969,edition: 2004},
    {title:'Book five', genre:'science',publish:2001,edition: 2004},
    {title:'Book six', genre:'comics',publish:1991,edition: 2004},
    {title:'Book seven', genre:'fiction',publish:1998,edition: 2004},
    {title:'Book eight', genre:'history',publish:2000,edition: 2004},
    {title:'Book nine', genre:'science',publish:1988,edition: 2004},
    {title:'Book ten', genre:'comics',publish:1985,edition: 2004},
    {title:'Book eleven', genre:'fiction',publish:1989,edition: 2004}
]
let userbook = books.filter( (bk)=> bk.genre === 'history')
let userbook2 = books.filter( (time)=> time.publish > 1995)
userbook2 = books.filter((item) =>{
    return item.genre === 'history'
})
console.log(userbook2)