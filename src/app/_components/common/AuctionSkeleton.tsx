import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export default function CarAuctionGridSkeleton() {
  // Number of skeleton items to display
  const skeletonCount = 9;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <Skeleton className="h-48 w-full" />
            </CardContent>
            <CardContent className="p-4">
              <Skeleton className="mb-2 h-6 w-3/4" />
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
              <Skeleton className="mr-2 h-10 w-1/4" />
              <Skeleton className="mr-2 h-10 w-2/4" />
              <Skeleton className="h-10 w-10" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
