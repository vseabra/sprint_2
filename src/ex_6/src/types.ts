interface IPerson {
  id: number
  name: string
  bio: string
}

interface IUpdate {
  name?: string
  bio?: string
}

type TProperty = keyof IPerson

export {IPerson, IUpdate, TProperty}
