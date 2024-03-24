import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Prices() {
  const [cripto, setCripto] = useState({});

  const array = ["bitcoin", "ethereum", "ripple", "litecoin", "cardano"];
  useEffect(() => {
    for (let i = 0; i < array.length; i++) {
      getCripto();
      async function getCripto() {
        try {
          const res = await axios(
            `https://api.coingecko.com/api/v3/simple/price?ids=${array[i]}&vs_currencies=usd`
          );
          setCripto({ ...cripto, [array[i]]: res.data });
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, []);
  console.log(cripto);

  return (
    <div class="relative overflow-x-auto mt-[100px]">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              valuta name
            </th>

            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {/* {cripto.litecoin.litecoin.usd} */}
            </th>

            <td class="px-6 py-4">$2999</td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>

            <td class="px-6 py-4">$1999</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>

            <td class="px-6 py-4">$99</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>

            <td class="px-6 py-4">$99</td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>

            <td class="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
