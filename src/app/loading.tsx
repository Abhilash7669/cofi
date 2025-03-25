import Skeleton from "@/app/components/loader/skeleton";

type Props = object;

export default function loading({}: Props) {
  return (
    <div className="min-h-screen flex items-start justify-center">
        <Skeleton count={10} />
    </div>
  )
}