interface Person {
  id: number
  name: string
  bio: string
}

interface Update {
  name?: string
  bio?: string
}

type Property = keyof Person

export {Person, Update, Property}
