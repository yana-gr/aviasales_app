export interface ticketType {
  key: string
  price: number
  carrier: string
  segments: [
    {
      key: string
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      key: string
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
  ]
}
