export class Notification {
    id:number
    userName: string
    dateOfSend: Date
    messageTitle: string
    messageContent: string
    constructor(n?: Notification) {
        if (n) {
            this.id = n.id
            this.userName = n.userName
            this.dateOfSend = n.dateOfSend
            this.messageContent = n.messageContent
            this.messageTitle = n.messageTitle
        } else {
            this.id = 0
            this.userName = ""
            this.dateOfSend = new Date()
            this.messageContent = ""
            this.messageTitle = ""
        }
    }
}