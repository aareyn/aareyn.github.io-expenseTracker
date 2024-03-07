import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
<<<<<<< Updated upstream
=======
        
>>>>>>> Stashed changes
      </ul>
    </div>
  )
}

export default TransactionList
