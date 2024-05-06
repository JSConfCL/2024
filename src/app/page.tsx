import { API } from "@/api";

import ClientPage from './client-page'

export default async function Page() {
  const data = await API.allNavs()
  console.log(data)

  return <ClientPage />
}
