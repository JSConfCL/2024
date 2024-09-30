import { GetServerSidePropsContext } from "next";

import PublicTicketPage from "@/components/Public/Ticket/Page";
import { JSCONF } from "@/lib/data";

export const config = {
  runtime: "experimental-edge",
};

interface Event {
  id: string;
  name: string;
  address: string;
  bannerImageSanityRef: string;
  community: Community;
}

interface Community {
  banner: string;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  profilePicture: string;
  userName: string;
}

interface PublicInfo {
  id: string;
  event: Event;
  userInfo: UserInfo;
}

const PurchaseOrderPage = ({
  purchaseOrderPublicInfo,
}: {
  purchaseOrderPublicInfo: PublicInfo;
}) => {
  const userInfo = purchaseOrderPublicInfo.userInfo;
  return (
    <PublicTicketPage
      shareType="purchaseOrder"
      ticketType="purchaseOrder"
      id={purchaseOrderPublicInfo.id}
      userInfo={{
        legalName: [userInfo.firstName, userInfo.lastName].join(" "),
        userName: userInfo.userName,
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
      query: `query PublicTicketInfo($id: String!) { publicEventAttendanceInfo(input: {id: $id}) { id userInfo { firstName lastName profilePicture userName } } }`,
      variables: { id },
    }),
  });

  const {
    data: { publicEventAttendanceInfo: purchaseOrderPublicInfo },
  } = (await response.json()) as unknown as {
    data: { publicEventAttendanceInfo: PublicInfo };
  };

  if (!purchaseOrderPublicInfo || !purchaseOrderPublicInfo.userInfo) {
    throw new Error(`Ticket Not Found`);
  }

  console.log({ purchaseOrderPublicInfo });

  return { props: { purchaseOrderPublicInfo } };
};

export default PurchaseOrderPage;
