import { GetServerSidePropsContext } from "next";

import PublicTicketPage from "@/components/Public/Ticket/Page";
import { JSCONF } from "@/lib/data";

export const config = {
  runtime: "experimental-edge",
};

interface PublicInfo {
  id: string;
  userName: string;
  userUsername: string;
}

const PurchaseOrderPage = ({
  publicTicketInfo,
}: {
  publicTicketInfo: PublicInfo;
}) => {
  return (
    <PublicTicketPage
      shareType="ticket"
      ticketType="ticket"
      id={publicTicketInfo.id}
      userInfo={{
        legalName: publicTicketInfo.userName,
        userName: publicTicketInfo.userUsername,
      }}
    />
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { id } = query;

  if (!id) {
    throw new Error(`No ID present`);
  }

  if (Array.isArray(id)) {
    throw new Error(`ID should be a singl string, not an array`);
  }

  if (!JSCONF.ticketsApi) {
    throw new Error(`Error with API`);
  }

  const url = JSCONF.ticketsApi;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query PublicTicketInfo ($publicTicketId: String! ) { publicTicketInfo (input: { publicTicketId: $publicTicketId } ) { id userName userUsername } }`,
      variables: { publicTicketId: id },
    }),
  });

  const { data } = (await response.json()) as unknown as {
    data: { publicTicketInfo: PublicInfo };
  };

  const publicTicketInfo = data.publicTicketInfo;
  if (!publicTicketInfo) {
    throw new Error(`Ticket Not Found`);
  }

  return { props: { publicTicketInfo } };
};

export default PurchaseOrderPage;
