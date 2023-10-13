import { useMsal } from "@azure/msal-react"
import { ReactNode } from "react"

import {
  ProfileDocument,
  useProfileQuery,
  useUpsertProfileMutation,
} from "../core/generated/graphql"

interface LayoutProps {
  children: ReactNode
}

const Onboarding = ({ children }: LayoutProps) => {
  const { instance } = useMsal()
  const account = instance.getActiveAccount()
  const { loading, data } = useProfileQuery({
    variables: { Id: account?.localAccountId },
  })
  const [upsertProfile] = useUpsertProfileMutation({
    variables: {
      Id: account?.localAccountId,
      Email: account?.username,
      Name: account?.name,
    },
    refetchQueries: [ProfileDocument],
  })

  if (!loading && data?.Profiles.length === 0) {
    upsertProfile()
  }

  return <>{children}</>
}

export default Onboarding
