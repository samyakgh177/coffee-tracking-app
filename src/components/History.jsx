import { useAuth } from "../context/AuthContext";
import { calculateCurrentCaffeineLevel, getCaffeineAmount, timeSinceConsumption } from "../utils";

export default function History(){
    const {globalData} = useAuth()
    return (
    <>
        <div className="section-header">
            <i className="fa-solid fa-timeline"></i>
            <h2>History</h2>
        </div>
        <p><i>Hover for more information!</i></p>
        <div className="coffee-history">
            {Object.keys(globalData).sort((a,b)=>b-a).map(
                (utcTime,coffeeIndex)=>{
                    const coffee= globalData[utcTime]
                    const timeSinceConsume = timeSinceConsumption(utcTime)
                    const origianlAmount = getCaffeineAmount(coffee.name)
                    const remaningAmount = calculateCurrentCaffeineLevel({
                        [utcTime]:coffee
                    })    

                    const summary = `${coffee.name} | ${timeSinceConsume} |${coffee.const} | ${remaningAmount} mg / ${origianlAmount}mg`
                return(
                    <div title={summary} className="coffeeIndex">
                        <i className="fa-solid fa-mug-hot"/>
                    </div>
                )
            })}
        </div>
    </>
    )
}