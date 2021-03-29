import {useEffect} from "react"; 
import { api } from "../../services/api";
import { Container } from "./styles"; 


 export default function TransactionTable() {
    useEffect(() => {
        api.get('transaction')
        .then(response => console.log(response.data))
    }, [])

     return (
         <Container>
             <table>
                 <thead>
                     <tr>
                         <th>Título</th>
                         <th>Valor</th>
                         <th>Categoria</th>
                         <th>Data</th>
                     </tr>
                 </thead>

                 <tbody>
                     <tr>
                         <td>Desenvolvimento de website</td>
                         <td className="deposit">R$1200,00</td>
                         <td>Desenvolvimento</td>
                         <td>20/09/2020</td>
                     </tr>
                     <tr>
                         <td>Aluguel</td>
                         <td className="withdraw">- R$1100,00</td>
                         <td>Casa</td>
                         <td>20/09/2020</td>
                     </tr>
                 </tbody>
             </table>
         </Container>
     )
 }
 