import { db } from "~/server/db";
import { Prisma } from "@prisma/client";
import EnableAuctionButton from "./components/EnableAuctionButton";

export default async function Page() {
  const auctions = await db.auction.findMany();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Start Price</th>
            <th>Enabled</th>
            <th>Activate</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction) => (
            <tr key={auction.id}>
              <td>{auction.id}</td>
              <td>{auction.name}</td>
              <td>{auction.brand}</td>
              <td>{auction.model}</td>
              <td>{auction.start_price}</td>
              <td>{auction.enabled ? "Yes" : "No"}</td>
              <td>
                <EnableAuctionButton id={auction.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
