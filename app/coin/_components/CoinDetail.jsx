"use client";

import Skeleton from "../../components/Skeleton";
import useAxios from "../../hooks/useAxios";
import { useParams } from "next/navigation";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!response)
    return (
      <div className="max-w-5xl mx-auto px-2 mt-8">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}</h1>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: response.description.en }}
        className="mt-6 text-gray-500 [&>a]:text-blue-600"
      ></p>
    </div>
  );
};

export default CoinDetail;
