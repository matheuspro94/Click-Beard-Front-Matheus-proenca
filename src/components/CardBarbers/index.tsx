import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import styles from './styles.module.scss'

// interface IBarbers {
//   id: string;
//   cpf: string,
//   name: string,
//   age: string,
//   date_of_hiring: string,
//   specialties: string[]
// }

export function CardBarbers({ barbers }: any) {
  console.log(barbers);

  return (
    <div className={styles.barbers}>
      {barbers.map((barber: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
        <div>
          <h2>Nome</h2>
          <p>{barber.name}</p>
        </div>
      ))}
    </div>
  )
}