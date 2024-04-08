import CoinDetail from "../_components/CoinDetail"
import HistoryChart from "../_components/HistoryChart"

const Coinpage = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 mt-10">
        <HistoryChart />
        <CoinDetail />
    </div>
  )
}

export default Coinpage