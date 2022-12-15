type Comments = {
    created_at: string
    id:number
    post_id:number
    text:string
    username:string

}

type Vote = {
    created_at: string
    id:number
    post_id:number
    upvote:boolean
    username:string
}