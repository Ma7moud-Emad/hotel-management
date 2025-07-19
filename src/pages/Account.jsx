import { useQuery } from "@tanstack/react-query";
import Profile from "../feateurs/account/Profile";
import FeatureHeader from "../ui/FeatureHeader";
import Loading from "../ui/Loading";
import { userInfo } from "../servies/authActions";

export default function Account() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: userInfo,
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <FeatureHeader title="my account" />
      <Profile data={data} />
    </div>
  );
}
