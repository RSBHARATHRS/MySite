export interface Experience {
    id: number,
    duration:Duration
    title: string,
    orgName: string,
}

interface Duration {
    start:string,
    end:string
}