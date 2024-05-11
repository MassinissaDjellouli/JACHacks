import { ChatGPTMessage } from "./ChatGPTRequest"

export type ChatGPTResponse = {
    choices: ChatGPTChoice[],
    created: number,
    id: string,
    model: string,
    object: string,
    system_fingerprint?: string,
    usage: ChatGPTUsage
}

export type ChatGPTChoice = {
    finish_reason: string,
    index: number,
    logprobs: ChatGPTLogProbs,
    message: ChatGPTMessage
}

export type ChatGPTLogProbs = {
    completion: string,
    tokens: string[]
}

export type ChatGPTUsage = {
    completion_tokens: number,
    prompt_tokens: number,
    total_tokens: number
}