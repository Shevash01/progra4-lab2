import { useCounter } from "../Hooks/useCounter"

const fav = 5;
export function Counter(){
    const { count, increaseCount, dicreaseCount, resertCount} = useCounter()
    return(
      <div className="card">
        <p>{count}</p>
        {count === fav && <p className="fav">Número favorito alcanzado</p>}
        <div className = "cardB"> 
          <button onClick={(increaseCount)} >
            ➕
          </button>
          <button onClick={(dicreaseCount)}>
            ➖
          </button>
          <button onClick={(resertCount)}>
            🔩
          </button>
        </div>
      </div>)
}