export type ChatGPTRequest = {
    model:string,
    messages: ChatGPTMessage[]
}

export type ChatGPTMessage = {
    role:string,
    content:string
}